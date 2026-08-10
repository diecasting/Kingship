# Kingship Soft 404 — Empty Taxonomy Pages Fix Report

**Site:** kingship.alumcasting.com
**Date:** 2026-08-10
**Scope:** Remove empty Hugo taxonomy/term pages that triggered Google Search Console Soft 404.

---

## 1. Root Cause (Soft 404 source)

The site defines four taxonomies in `config/_default/hugo.toml`:

```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
  series = "series"
```

…but **zero content files reference any of them in front matter** (verified: `tags:`/`categories:`/`authors:`/`series:` = 0 files). The sitemap had `excludedKinds = []`, so Hugo generated and **indexed 138 empty taxonomy pages**:

- Taxonomy overview pages: `/en/tags/`, `/en/categories/`, `/en/authors/`, `/en/series/` (+ de/es/fr/ja variants)
- Term pages for tags that have no member posts: `/en/tags/cnc/`, `/de/tags/material/`, etc.

These pages return HTTP 200 but contain no real content → classic **Soft 404** that GSC flags.

## 2. Changes Applied

### 2.1 `config/_default/hugo.toml`
Added (top-level, before `[languages]`):
```toml
# 禁用空的分类法页面（tags/authors/series/categories 均无内容引用），消除 GSC Soft 404
disableKinds = ["taxonomy", "term"]
```
This stops generation of all taxonomy + term pages, so they are no longer built **or** included in `sitemap.xml`.

### 2.2 Content: removed dead `relref` links to the now-disabled tag pages
Because tag pages no longer exist, 13 content files contained broken `relref` links that made the build **fail** (`REF_NOT_FOUND`). Fixed:

- `content/blog/_index.{de,es,fr,ja}.md` — removed the "quick access by tags" chip `<div>` block + its orphaned `## …Tags` heading (JSON-LD `ItemList` and `…_blog_tag_clusters` shortcode **kept intact**).
- 9 blog post files — removed single "tag page" list-item links:
  - `adc12-a380-zairyou-sentaku.ja.md`, `dfm-kousutosaitekika-die-casting.ja.md`, `xray-cmm-ryousanshou-nin.ja.md`
  - `dfm-reduccion-costes-moldes.es.md`, `inspeccion-rayosx-cmm-validacion-serie.es.md`, `materiales-adc12-a380-seleccion-aplicacion.es.md`
  - `dfm-reduction-cout-moules.fr.md`, `inspection-rayonsx-cmm-validation-serie.fr.md`, `materiaux-adc12-a380-choix-application.fr.md`

**No SEO schema files were modified** (`layouts/partials/schema/*`, `head.html` untouched).

## 3. Build Verification

| Check | Result |
|---|---|
| `hugo --minify` | ✅ **exit 0** (clean, no `REF_NOT_FOUND` / `ERROR`) |
| `hugo --gc --minify -d public_test` | ✅ exit 0 |
| robots.txt | ✅ still contains `Sitemap: https://kingship.alumcasting.com/sitemap.xml` |
| Root `sitemap.xml` | ✅ valid multilingual `<sitemapindex>` referencing all 5 language sub-sitemaps |
| JSON-LD | ✅ preserved (blog landing pages still emit `ItemList` schema; no loss) |
| Dangling `/tags/ /authors/ /categories/ /series/` links in built HTML | ✅ **0** |
| SEO schema files | ✅ untouched |

## 4. URL Count & Sitemap Changes

| | Before (baseline) | After (with `disableKinds`) | Δ |
|---|---|---|---|
| Total sitemap URLs (en+de+es+fr+ja) | **264** | **126** | **−138** |
| Taxonomy/term URLs in sitemap | 138 | **0** | −138 |
| Per-language (en/de/es/fr/ja) | 46 / 66 / 50 / 51 / 51 | 25 / 32 / 23 / 23 / 23 | reduced |

The −138 exactly equals the removed taxonomy + term URLs. All 126 remaining URLs are real, content-bearing pages (home, services, industries, blog posts, multilingual variants).

## 5. German "0-content-word" Blog Post

**Flagged post (from prior audit):** `content/blog/precision-cnc-machining-for-medical-equipment-components.de.md`
**URL:** `/de/blog/precision-cnc-machining-for-medical-equipment-components/`

**Finding:** This post is **NOT empty**. Rendered locally it contains **1,216 words** across 9 well-formed sections (Materialauswahl, GD&T, Kontaminationskontrolle, Präzisionsprüfung, Rückverfolgbarkeit, etc.).

The earlier "0 words" was a **crawl-time false positive** — the live fetch during the audit failed (network saturation from a parallel background crawl), producing an empty HTML file that the word-count script scored as 0. All 29 German blog posts have ≥178 source words; none are empty.

**Recommendation: NO action required (do not delete, do not noindex, do not treat as needing translation).** The post is a healthy, fully-translated article. (Note: a few German posts are ~180–230 words — thin but legitimate; if desired, expand them for stronger topical coverage, but they are not Soft-404 risks.)

## 6. Remaining (orphaned) Taxonomy Content — Optional Cleanup

The following directories still exist but are now **dead** (their kind is disabled, so they are not rendered or indexed):
`content/tags/`, `content/categories/`, `content/authors/`, `content/series/`

They cause no build error and no SEO harm. **Priority: LOW** — optionally delete them in a follow-up commit for repo cleanliness. Not required for the Soft 404 fix.

## 7. Priority Summary

| Item | Priority | Status |
|---|---|---|
| Disable empty taxonomy/term pages (`disableKinds`) | **HIGH** | ✅ Done |
| Remove broken `relref` links to removed tag pages | **HIGH** (build-blocking) | ✅ Done |
| German 0-word post | — (false positive) | ✅ No action needed |
| Delete orphaned taxonomy content dirs | LOW | Optional |

---

## 8. Git State (not yet committed)

Modified (uncommitted, ready for review):
- `config/_default/hugo.toml`
- 13 × `content/blog/*.md`

No files were committed or pushed. **Recommendation:** review the diff, then commit and push to trigger GitHub Actions + a fresh production sitemap (so GSC re-crawls and the 138 Soft-404 URLs drop out of the index).
