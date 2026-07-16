# Template Setup Guide

Use this repository as a starter template for another GitHub Pages site.

## What This Setup Script Changes

The script updates the following automatically:

- `config/_default/hugo.toml`
  - `baseURL`
  - root `title`
  - language titles under `[languages.*]`
- `config/_default/params.toml`
  - `[author].name`
  - `[params].title`
- `config/_default/languages.*.toml`
  - `title`
  - `[params.author].name`
  - `[params.author].email` (adds if missing)
  - `[params.author].links` -> `[]`
- `static/CNAME` (creates if missing)
- `content/contact/index*.md`
  - injects a reusable direct-contact block with email/phone

Optional:

- Replace all `https://alumcasting.com` links in `content/**/*.md` with your own domain.

## 1) Run In Dry-Run Mode First

```powershell
pwsh ./scripts/init-template.ps1 \
  -SiteDomain "example.com" \
  -BrandName "Example Precision" \
  -ContactEmail "sales@example.com" \
  -ContactPhone "+1-555-123-4567" \
  -DryRun
```

## 2) Apply Changes

```powershell
pwsh ./scripts/init-template.ps1 \
  -SiteDomain "example.com" \
  -BrandName "Example Precision" \
  -ContactEmail "sales@example.com" \
  -ContactPhone "+1-555-123-4567"
```

## 3) Optional: Replace Alumcasting External Links

Use this only if your new site should not reference alumcasting articles.

```powershell
pwsh ./scripts/init-template.ps1 \
  -SiteDomain "example.com" \
  -BrandName "Example Precision" \
  -ContactEmail "sales@example.com" \
  -ContactPhone "+1-555-123-4567" \
  -ReplaceAlumcastingLinks \
  -ExternalArticleDomain "example.com"
```

## 4) Verify Locally

```powershell
hugo server -D
```

## 5) Publish To GitHub Pages

```powershell
git add -A
git commit -m "Initialize template for new brand/domain"
git push origin main
```

## Notes

- If your repository uses Windows PowerShell 5.1, replace `pwsh` with `powershell`.
- The script is idempotent and can be re-run safely.
- Contact block markers in markdown:
  - `<!-- TEMPLATE_CONTACT_START -->`
  - `<!-- TEMPLATE_CONTACT_END -->`
