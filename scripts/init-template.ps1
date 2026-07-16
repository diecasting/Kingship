param(
  [Parameter(Mandatory = $true)]
  [string]$SiteDomain,

  [Parameter(Mandatory = $true)]
  [string]$BrandName,

  [Parameter(Mandatory = $true)]
  [string]$ContactEmail,

  [string]$ContactPhone = "",

  [switch]$ReplaceAlumcastingLinks,

  [string]$ExternalArticleDomain = "",

  [switch]$DryRun
)

$ErrorActionPreference = "Stop"

function Write-Info([string]$msg) {
  Write-Host "[init-template] $msg"
}

function Normalize-Domain([string]$domain) {
  $d = $domain.Trim()
  $d = $d -replace '^https?://', ''
  $d = $d -replace '/+$', ''
  return $d
}

function Replace-Content([string]$path, [scriptblock]$transform) {
  if (-not (Test-Path $path)) {
    Write-Info "Skip missing file: $path"
    return
  }

  $old = Get-Content -Raw -Path $path -Encoding UTF8
  $new = & $transform $old

  if ($new -ne $old) {
    if ($DryRun) {
      Write-Info "[DryRun] Would update: $path"
    }
    else {
      Set-Content -Path $path -Value $new -Encoding UTF8
      Write-Info "Updated: $path"
    }
  }
  else {
    Write-Info "No change: $path"
  }
}

function Update-LanguageFile([string]$path, [string]$brand, [string]$email) {
  if (-not (Test-Path $path)) {
    return
  }

  $lines = Get-Content -Path $path -Encoding UTF8
  $newLines = New-Object System.Collections.Generic.List[string]

  $inAuthor = $false
  $hasEmailInAuthor = $false

  foreach ($line in $lines) {
    if ($line -match '^\[params\.author\]') {
      if ($inAuthor -and -not $hasEmailInAuthor) {
        $newLines.Add("  email = `"$email`"")
      }
      $inAuthor = $true
      $hasEmailInAuthor = $false
      $newLines.Add($line)
      continue
    }

    if ($inAuthor -and $line -match '^\[') {
      if (-not $hasEmailInAuthor) {
        $newLines.Add("  email = `"$email`"")
      }
      $inAuthor = $false
      $hasEmailInAuthor = $false
      $newLines.Add($line)
      continue
    }

    if ($line -match '^title\s*=\s*".*"$') {
      $newLines.Add("title = `"$brand`"")
      continue
    }

    if ($inAuthor -and $line -match '^\s*name\s*=\s*".*"$') {
      $newLines.Add("  name = `"$brand`"")
      continue
    }

    if ($inAuthor -and $line -match '^\s*email\s*=\s*".*"$') {
      $newLines.Add("  email = `"$email`"")
      $hasEmailInAuthor = $true
      continue
    }

    if ($inAuthor -and $line -match '^\s*links\s*=\s*\[') {
      $newLines.Add("  links = []")
      continue
    }

    if ($inAuthor -and $line -match '^\s*\{\s*') {
      continue
    }

    if ($inAuthor -and $line -match '^\s*\],?\s*$') {
      continue
    }

    $newLines.Add($line)
  }

  if ($inAuthor -and -not $hasEmailInAuthor) {
    $newLines.Add("  email = `"$email`"")
  }

  $new = ($newLines -join "`n") + "`n"
  $old = Get-Content -Raw -Path $path -Encoding UTF8

  if ($new -ne $old) {
    if ($DryRun) {
      Write-Info "[DryRun] Would update: $path"
    }
    else {
      Set-Content -Path $path -Value $new -Encoding UTF8
      Write-Info "Updated: $path"
    }
  }
  else {
    Write-Info "No change: $path"
  }
}

$siteDomainNormalized = Normalize-Domain $SiteDomain
if ([string]::IsNullOrWhiteSpace($siteDomainNormalized)) {
  throw "SiteDomain cannot be empty after normalization."
}

if ($ReplaceAlumcastingLinks -and [string]::IsNullOrWhiteSpace($ExternalArticleDomain)) {
  throw "When -ReplaceAlumcastingLinks is set, -ExternalArticleDomain is required."
}

$externalDomainNormalized = ""
if (-not [string]::IsNullOrWhiteSpace($ExternalArticleDomain)) {
  $externalDomainNormalized = Normalize-Domain $ExternalArticleDomain
}

$baseUrl = "https://$siteDomainNormalized/"

Write-Info "BrandName: $BrandName"
Write-Info "SiteDomain: $siteDomainNormalized"
Write-Info "ContactEmail: $ContactEmail"
if (-not [string]::IsNullOrWhiteSpace($ContactPhone)) {
  Write-Info "ContactPhone: $ContactPhone"
}
if ($DryRun) {
  Write-Info "DryRun enabled. No files will be written."
}

# 1) Core hugo config
Replace-Content "config/_default/hugo.toml" {
  param($c)
  $c = [regex]::Replace($c, '(?m)^baseURL\s*=\s*".*"\s*$', "baseURL = `"$baseUrl`"")

  # Replace root title and language titles currently using KingShip-like values.
  $c = [regex]::Replace($c, '(?m)^title\s*=\s*".*"\s*$', "title = `"$BrandName`"")
  return $c
}

# 2) Theme params
Replace-Content "config/_default/params.toml" {
  param($c)
  $c = [regex]::Replace($c, '(?m)^\s*name\s*=\s*".*"\s*$', "  name = `"$BrandName`"")
  $c = [regex]::Replace($c, '(?m)^\s*title\s*=\s*".*"\s*$', "  title = `"$BrandName`"")
  return $c
}

# 3) Per-language files
Get-ChildItem "config/_default" -Filter "languages.*.toml" | ForEach-Object {
  Update-LanguageFile -path $_.FullName -brand $BrandName -email $ContactEmail
}

# 4) CNAME
if ($DryRun) {
  Write-Info "[DryRun] Would write static/CNAME"
}
else {
  if (-not (Test-Path "static")) {
    New-Item -Path "static" -ItemType Directory | Out-Null
  }
  Set-Content -Path "static/CNAME" -Value "$siteDomainNormalized`n" -Encoding UTF8
  Write-Info "Updated: static/CNAME"
}

# 5) Contact pages
$contactFiles = @(
  "content/contact/index.md",
  "content/contact/index.de.md",
  "content/contact/index.es.md",
  "content/contact/index.fr.md",
  "content/contact/index.ja.md"
)

$contactBlock = @(
  "<!-- TEMPLATE_CONTACT_START -->",
  "Direct contact: [$ContactEmail](mailto:$ContactEmail)" + $(if ($ContactPhone) { " | $ContactPhone" } else { "" }),
  "<!-- TEMPLATE_CONTACT_END -->"
) -join "`n"

foreach ($file in $contactFiles) {
  Replace-Content $file {
    param($c)

    if ($c -match '<!-- TEMPLATE_CONTACT_START -->[\s\S]*?<!-- TEMPLATE_CONTACT_END -->') {
      return [regex]::Replace($c, '<!-- TEMPLATE_CONTACT_START -->[\s\S]*?<!-- TEMPLATE_CONTACT_END -->', [System.Text.RegularExpressions.MatchEvaluator]{ param($m) $contactBlock })
    }

    if ($c -match '<section class="w-full mt-6">') {
      return $c -replace '<section class="w-full mt-6">', "$contactBlock`n`n<section class=`"w-full mt-6`">"
    }

    return "$c`n`n$contactBlock`n"
  }
}

# 6) Optional external link replacement
if ($ReplaceAlumcastingLinks) {
  $replacement = "https://$externalDomainNormalized"
  Get-ChildItem "content" -Recurse -File -Filter "*.md" | ForEach-Object {
    Replace-Content $_.FullName {
      param($c)
      return $c -replace 'https://alumcasting\.com', $replacement
    }
  }
}

Write-Info "Template initialization completed."
