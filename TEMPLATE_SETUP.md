# Template Setup Guide

Use this repository as a starter template for another GitHub Pages site.

> ⚠️ **This working copy may lag behind production.** Before treating this file as the source of
> truth, verify it against the deployed commit. At the time of this audit the local `HEAD` is
> `a4279508` (2026-07-18) while production runs `27b5ac20` (2026-10-15).

## What This Setup Script Changes

The script updates the following automatically:

- `config/_default/hugo.toml`
  - `baseURL`
  - root `title`
- `config/_default/params.toml`
  - `[author].name`
  - `[params].title`
- `config/_default/languages.*.toml`
  - `title`
  - `[params.author].name`
  - `[params.author].email` (adds if missing)
  - `[params.author].links` -> `[]`
  - ⚠️ **These files override the inline `[languages]` block in `hugo.toml`.**
    Language titles must be edited in `config/_default/languages.<lang>.toml`; editing the
    indented `title` inside a `[languages.*]` block of `hugo.toml` has **no effect**.
- `static/CNAME` (creates if missing)
- `content/contact/index*.md` — currently **7 files** (`index.md`, `index.de.md`, `index.es.md`, `index.fr.md`, `index.ja.md`, `index.it.md`, `index.ko.md`)
  - injects a reusable direct-contact block with email/phone, delimited by
    `<!-- TEMPLATE_CONTACT_START -->` / `<!-- TEMPLATE_CONTACT_END -->`
  - **No `TEMPLATE_CONTACT` markers exist in `content/` today.** On the first run the
    block is inserted before `<section class="w-full mt-6">`; if that anchor is absent it is
    appended to the end of the file. Later runs replace the marked block in place.
  - ⚠️ The bundled `scripts/init-template.ps1` hard-codes only **5** contact files
    (`index.md`, `index.de.md`, `index.es.md`, `index.fr.md`, `index.ja.md`) and therefore
    **skips `index.it.md` and `index.ko.md`**. Fix the script to discover files dynamically
    (`Get-ChildItem "content/contact" -Filter "index*.md"`) before relying on full coverage.

Optional:

- Replace all `https://alumcasting.com` links in `content/**/*.md` with your own domain.

## Language Configuration

- The site supports **7 languages**: `en`, `de`, `es`, `fr`, `ja`, `it`, `ko`.
- The language list is declared in **two** places:
  - `config/_default/hugo.toml` — inline `[languages]` blocks
  - `config/_default/languages.<lang>.toml` — one file per language
- **`languages.<lang>.toml` overrides the inline `[languages]` block in `hugo.toml`.**
  Verified against the live site: `hreflang` values are emitted as `en` / `de` (not `en-us` /
  `de-de`) and the page title suffix is `KingShip` (not `KingShip Precision` from `hugo.toml`).
- Therefore: **change language settings in `config/_default/languages.<lang>.toml`, never in
  `hugo.toml`.**
- Note: this working copy ships only **5** language files (`en`, `de`, `es`, `fr`, `ja`).
  `languages.it.toml` and `languages.ko.toml` exist in production only.

## Taxonomy Pages

`hugo.toml` sets:

```toml
disableKinds = ["taxonomy", "term"]
```

Consequences:

- `/tags/…`, `/authors/…`, `/categories/…` and `/series/…` pages are **not generated**.
- Content files under `content/tags/`, `content/authors/`, `content/categories/` and
  `content/series/` still exist in the repository, but they produce **no URL**.
- **Do not `relref` to them.** Google Search Console has already recorded 214 such URLs as 404.
- When reusing this template, keep `disableKinds` unchanged. Removing it regenerates empty
  taxonomy pages and reintroduces those 404s.

## Production Architecture Notes

- **Vendored theme** — the Blowfish layout lives in the repository root (`layouts/`, `assets/`,
  `i18n/`); 471 files are byte-identical to upstream `nunocoracao/blowfish@1f144483`. The build
  does not appear to need the `themes/blowfish` submodule (inferred — CI build logs are not
  publicly readable).
- **Data-driven homepage** — `layouts/partials/home/page.html` renders 15 sections when
  `.Params.modular_homepage` is true, with content from `data/homepage/<lang>.yaml`.
- **Schema engine** — JSON-LD is dispatched by `layouts/partials/schema.html` across 9 partials,
  driven by `data/company.yaml`. If that file is missing the build fails with `errorf`.
- **RFQ form** — endpoint `https://formspree.io/f/xpqgbdly`, used by three templates
  (`partials/rfq-form.html`, `shortcodes/rfq_form.html`, and the fallback inside
  `partials/home/page.html`). It is a plain HTML `POST` with no `_next`, no JavaScript and no
  `dataLayer`; submission lands on Formspree's hosted page. Only `en`, `it` and `ko` have
  localised labels — `de`, `es`, `fr` and `ja` fall back to English.
- **Submodule state** — the checked-out `themes/blowfish/.git` has its `origin` pointing at
  `diecasting/blowfish`, which returns **404** on the GitHub API (deleted or private). The
  `.gitmodules` file itself points at upstream `nunocoracao/blowfish`, matching production.
  **Do not run `git submodule update` until the remote is fixed.**

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

> Note: `layouts/partials/rfq-form.html` and `layouts/partials/sections/rfq-cta.html` exist
> **only in production**. A local build of this working copy may render a different RFQ form
> than the live site.

## 5) Publish To GitHub Pages

```powershell
git add -A
git commit -m "Initialize template for new brand/domain"
git push origin main
```

## 6) Enable GitHub Pages In The New Repository (One Time)

After creating a new repo from this template:

1. Go to `Settings -> Pages`.
2. In `Build and deployment`, set `Source` to `GitHub Actions`.
3. Push to `main` (or run `Deploy Hugo Site` manually in `Actions`).
4. Wait for the workflow to finish, then open the `github-pages` environment URL.

The workflow file is:

- `.github/workflows/pages.yml`

It already includes Hugo build + Pages deploy.

The build step runs:

```bash
hugo --minify --config config/_default/hugo.toml
```

Notes on the workflow as deployed:

- Hugo version: `latest` (the 2026-10-15 production build reported `0.168.0`).
- Submodules: **not** checked out — `submodules: false`.
- No `--gc`, no `HUGO_ENVIRONMENT=production`, no `extended: true`.
- The Blowfish theme is vendored into the repository root, so the build does not require the
  `themes/blowfish` submodule. That gitlink is a legacy entry.

## Notes

- If your repository uses Windows PowerShell 5.1, replace `pwsh` with `powershell`.
- The script is idempotent **once the `TEMPLATE_CONTACT` markers exist**. On the first run
  (no markers present) the block is inserted by position; re-running then replaces the marked
  block in place.
- Contact block markers in markdown:
  - `<!-- TEMPLATE_CONTACT_START -->`
  - `<!-- TEMPLATE_CONTACT_END -->`
