# KingShip 第一批内容整改实施清单

**制定日期：** 2026-11-22
**依据：**

- `AGENTS.md`
- `SEO-AUDIT/FACT-VERIFICATION-MATRIX.md`
- `SEO-AUDIT/CONTENT-CLAIM-REMEDIATION-PLAN.md`
- KingShip 第一轮 SEO 审计中与首页、行业页、认证页、服务页和技术参数有关的发现

**本轮范围：** 仅分析并制定清单。未修改网站内容，未修改 URL、Canonical、Redirect、Sitemap 或 Schema，未执行 Git commit、push 或 deploy。

## 1. 范围与计数口径

### 1.1 纳入页面

| 页面 | URL | 语言文件 |
|---|---|---|
| 首页 | https://kingship.alumcasting.com/ | `data/homepage/{en,de,es,fr,ja,it,ko}.yaml`；首页标题/描述在 `content/_index*.md` |
| Automotive | https://kingship.alumcasting.com/industries/automotive/ | `content/industries/automotive*.md` |
| Aerospace | https://kingship.alumcasting.com/industries/aerospace/ | `content/industries/aerospace*.md` |
| Medical | https://kingship.alumcasting.com/industries/medical/ | `content/industries/medical*.md` |
| Certifications | https://kingship.alumcasting.com/certifications/ | `content/certifications/index*.md` |
| Aluminum Die Casting | https://kingship.alumcasting.com/aluminum-die-casting/ | `content/aluminum-die-casting/index*.md` |
| Magnesium Die Casting | https://kingship.alumcasting.com/magnesium-die-casting/ | `content/magnesium-die-casting/index*.md` |

同时检查以下共享来源：

- `data/company.yaml`
- `layouts/partials/sections/quality-control.html`
- `layouts/partials/sections/capability-detail.html`
- `data/homepage/*.yaml` 的多语言重复
- `content/**/*.md` 中的翻译正文

### 1.2 计数口径

- “文件 × 声明”计一次；同一声明在一个文件中的标题、正文、列表和 FAQ 重复行合并为同一文件项，但所有行号均列出。
- 共享模板或共享 YAML 只计一次源文件，不按渲染后的 7 个语言页面重复计数。
- 多语言重复指英文之外的 6 个翻译文件中的出现次数。
- 不把图库中只描述照片内容的安全 Alt 文本当作独立能力声明，除非 Alt 本身增加了数量、性能或覆盖范围。
- `M06` 在整改计划中为 REWRITE，但只出现在本轮范围外的 Semi-Solid Rheocasting 页，因此本清单计 0 个目标页位置。

## 2. 统计结论

| 指标 | 数量 |
|---|---:|
| 涉及的唯一文件 | 48 |
| REMOVE 声明文件项 | 26 |
| REWRITE 声明文件项 | 162 |
| REMOVE + REWRITE 总文件项 | 188 |
| 其中多语言重复 | 156 |
| 其中英文或共享源文件项 | 32 |

`content/magnesium-die-casting/index.md` 只出现在“可保留的审慎技术描述”部分，不计入 48 个 REMOVE/REWRITE 涉及文件。

### 2.1 按声明统计

| 类型 | ID | 声明 | 文件项 |
|---|---|---|---:|
| REMOVE | Q01 | zero-defect / every shot | 11 |
| REMOVE | Q02 | first-try qualification | 7 |
| REMOVE | M07 | `10,000+ units` | 1 |
| REMOVE | M12 | `100,000 shots` | 7 |
| REWRITE | C02 | 自有工厂与非贸易商 | 7 |
| REWRITE | C06 | ISO 14001 / ISO 13485 当前状态 | 7 |
| REWRITE | C07 | QMS 覆盖 automotive/aerospace/medical | 21 |
| REWRITE | Q03 | every automotive part | 7 |
| REWRITE | Q04 | every aerospace part | 7 |
| REWRITE | Q05 | every medical part | 7 |
| REWRITE | Q06 | full PPAP / one PPAP | 3 |
| REWRITE | E06 | fully automated robotic extraction | 7 |
| REWRITE | E08 | 3/4/5-axis 与 high-speed CNC | 23 |
| REWRITE | I01 | real-time X-ray / NDT | 30 |
| REWRITE | I02 | CMM / large-format CMM | 14 |
| REWRITE | I03 | automated leak / pressure testing | 22 |
| REWRITE | M06 | CT5–CT7 | 0（不在本轮页面） |
| REWRITE | M09 | custom slurries / every-inquiry certificates | 7 |

### 2.2 按页面统计

| 页面 | REMOVE | REWRITE | 小计 |
|---|---:|---:|---:|
| 首页 | 21 | 56 | 77 |
| Automotive | 0 | 35 | 35 |
| Aerospace | 0 | 14 | 14 |
| Medical | 0 | 21 | 21 |
| Certifications | 0 | 7 | 7 |
| Aluminum Die Casting | 5 | 22 | 27 |
| Magnesium Die Casting | 0 | 3 | 3 |
| 共享 Data / Template | 0 | 4 | 4 |
| **合计** | **26** | **162** | **188** |

## 3. 统一替换文案

以下文案仅适用于对应 REWRITE 项。所有语言版本应按同一事实边界翻译，不新增数字、设备、认证、覆盖率或交期。

| 替换 ID | 推荐英文 |
|---|---|
| R-C02 | `We operate a die-casting and CNC machining facility in Dongguan; project scope and production location are confirmed in the RFQ.` |
| R-C06 | `Certificate copies are available for review. Current scope and validity are confirmed during supplier qualification.` |
| R-C07 | `Automotive requirements are managed under our IATF 16949 QMS. Aerospace and medical requirements are reviewed during project qualification.` |
| R-Q03 | `Inspection, testing and traceability requirements are agreed for each automotive project.` |
| R-Q04 | `Inspection and traceability requirements are defined during aerospace-program qualification and RFQ.` |
| R-Q05 | `Dimensional inspection and traceability scope is agreed for each medical-device program.` |
| R-Q06 | `PPAP level and deliverables are agreed at RFQ; not every PPAP element is automatically included.` |
| R-E06 | `Robotic extraction is used on selected die-casting cells.` |
| R-E08 | `CNC post-machining is available in-house; machine specifications and axis capability are confirmed for each project.` |
| R-I01 | `In-house X-ray inspection is available for porosity checks, subject to part size, equipment capability and agreed sampling.` |
| R-I02 | `Our metrology lab includes two CMM systems; measuring envelope, accuracy and current calibration records are confirmed for each project.` |
| R-I03 | `Leak/pressure testing is available for sealed components, with the method, range and acceptance criteria agreed per project.` |
| R-M09 | `Project-specific alloy and slurry options, together with material certificates, are confirmed at RFQ.` |

## 4. REMOVE 实际出现位置

### 4.1 Q01 — zero-defect / every shot

共 11 个文件项，其中 10 个多语言重复。

| 文件 | 行号 | 原始表述 | 处理 |
|---|---:|---|---|
| `data/homepage/en.yaml` | 319 | `A zero-defect mindset backed by international certification...` | 删除整句，不提供保证性替代 |
| `data/homepage/de.yaml` | 297 | `Eine Null-Fehler-Mentalität...` | 同上 |
| `data/homepage/es.yaml` | 295 | `Una mentalidad de cero defectos...` | 同上 |
| `data/homepage/fr.yaml` | 296 | `Un état d’esprit zéro défaut...` | 同上 |
| `data/homepage/it.yaml` | 337 | `Una mentalità zero-defetti...` | 同上 |
| `data/homepage/ja.yaml` | 276 | `ゼロディフェクトの姿勢` | 同上 |
| `data/homepage/ko.yaml` | 301 | `제로 결함 마인드` | 同上 |
| `content/aluminum-die-casting/index.md` | 84 | `every shot complies with zero-defect delivery standards` | 删除绝对承诺 |
| `content/aluminum-die-casting/index.de.md` | 18 | `jeder Schuss den Null-Fehler-Lieferstandards entspricht` | 删除绝对承诺 |
| `content/aluminum-die-casting/index.it.md` | 77 | `ogni colpo rispetti gli standard di consegna zero-defetti` | 删除绝对承诺 |
| `content/aluminum-die-casting/index.ko.md` | 77 | `모든 샷이 제로 결함 납품 기준을 충족` | 删除绝对承诺 |

### 4.2 Q02 — first-try qualification

共 7 个文件项，其中 6 个多语言重复。

| 文件 | 行号 | 原始表述 | 处理 |
|---|---:|---|---|
| `data/homepage/en.yaml` | 43 | `pass qualification on the first try` | 删除 |
| `data/homepage/de.yaml` | 42 | `beim ersten Mal qualifiziert werden` | 删除 |
| `data/homepage/es.yaml` | 42 | `se califican a la primera` | 删除 |
| `data/homepage/fr.yaml` | 42 | `qualifiés du premier coup` | 删除 |
| `data/homepage/it.yaml` | 45-46 | `superano la qualificazione al primo tentativo` | 删除 |
| `data/homepage/ja.yaml` | 38 | `初回で合格する構造部品` | 删除 |
| `data/homepage/ko.yaml` | 40 | `첫 시도에서 자격을 통과합니다` | 删除 |

### 4.3 M07 — 10,000+ units

共 1 个文件项，无多语言重复。

| 文件 | 行号 | 原始表述 | 处理 |
|---|---:|---|---|
| `content/aluminum-die-casting/index.md` | 187 | `full-scale cells scale to 10,000+ units` | 删除；没有时间单位、产品类型或班次口径 |

### 4.4 M12 — 100,000 shots

共 7 个文件项，其中 6 个多语言重复。

| 文件 | 行号 | 原始表述 | 处理 |
|---|---:|---|---|
| `data/homepage/en.yaml` | 288 | `extend mold life beyond 100,000 shots` | 删除具体寿命 |
| `data/homepage/de.yaml` | 270 | `Werkzeugstandzeit über 100.000 Schuss` | 删除 |
| `data/homepage/es.yaml` | 267 | `vida útil por encima de 100.000 disparos` | 删除 |
| `data/homepage/fr.yaml` | 267-268 | `durée de vie au-delà de 100 000 coups` | 删除 |
| `data/homepage/it.yaml` | 304 | `vita dello stampo oltre 100.000 colpi` | 删除 |
| `data/homepage/ja.yaml` | 249 | `型寿命を10万ショット以上に延ばします` | 删除 |
| `data/homepage/ko.yaml` | 270-271 | `금형 수명을 100,000 샷 이상으로 연장` | 删除 |

## 5. REWRITE 实施清单

### 5.1 首页

首页 REWRITE 共 56 个文件项：C02 7、C07 7、E06 7、E08 7、I01 7、I02 7、I03 7、M09 7。

| 文件 | C02 | C07 / E08 / Inspection / M09 行号与原文摘要 | 替换 |
|---|---|---|---|
| `data/homepage/en.yaml` | 33-35: `We are not a trading company. Every casting...` | C07 38, 321-324, 417；E06 34-35；E08 69, 112, 249-269, 363, 415；I01 11, 35, 138, 153, 177, 192, 216, 326-327, 340, 374-379, 415；I02 216, 232, 328, 341, 368-373, 415；I03 258-270, 329, 342, 415；M09 185, 411 | R-C02；其余按 R-C07/R-E08/R-I01/R-I02/R-I03/R-M09 |
| `data/homepage/de.yaml` | 32-34: `Wir sind kein Handelsunternehmen. Jedes Bauteil...` | C07 37, 299-302, 392；E06 33-34；E08 65, 105, 233-234, 247-251, 338, 390；I01 10, 33, 130, 143, 166, 179, 202, 304-305, 315, 349-354, 390；I02 202, 216, 306, 316, 343-348, 390；I03 241-242, 249, 252, 307, 390；M09 172, 386 | 同上，按德语忠实翻译 |
| `data/homepage/es.yaml` | 32-34: `No somos una empresa comercial. Cada pieza...` | C07 37, 297-300, 388；E06 33-34；E08 65, 105, 232-233, 244-248, 334, 386；I01 10, 34, 128, 142, 165, 178, 201, 301-302, 311, 345-350, 386；I02 201, 215, 302-303, 312, 339-344, 386；I03 239, 246, 249, 304, 386；M09 171, 382 | 同上 |
| `data/homepage/fr.yaml` | 32-34: `Nous ne sommes pas un courtier. Chaque pièce...` | C07 37, 298-301, 389；E06 33-34；E08 65, 105, 232, 244-248, 335, 387；I01 10, 34, 129, 142, 165, 178, 201, 302-303, 312, 346-351, 387；I02 201, 215, 304, 313, 340-345, 387；I03 238-249, 304, 314, 387；M09 171, 383 | 同上 |
| `data/homepage/it.yaml` | 34-36: `Non siamo una trading company. Ogni fusione...` | C07 40, 339-340, 436；E06 35-36；E08 71, 117, 262-263, 279-283, 381, 434；I01 11, 36, 143, 159, 184, 200, 225-226, 344, 358, 392-397, 434；I02 225, 243, 346, 359, 386-391, 434；I03 272-274, 281, 284, 348, 434；M09 193, 430 | 同上 |
| `data/homepage/ja.yaml` | 31-32: `私たちは商社ではありません。すべての鋳物...` | C07 34, 278-279, 367；E06 32；E08 61, 97, 216, 227-231, 314, 365；I01 10, 32, 118, 132, 153, 166, 187, 282, 291, 325-330, 365；I02 186, 200, 283, 292, 319-324, 365；I03 187, 222-229, 232, 283-284, 293, 365；M09 159, 361 | 同上 |
| `data/homepage/ko.yaml` | 32-33: `당사는 무역 회사가 아닙니다. 모든 주조...` | C07 35, 303-305, 395；E06 32-33；E08 65, 104, 233, 247-251, 341, 393；I01 11, 33, 127, 141, 163, 178, 200, 307-308, 318, 352-357, 393；I02 200, 216, 308, 319, 346-351, 393；I03 241-242, 249, 252, 309, 393；M09 171, 389 | 同上 |

### 5.2 Automotive

Automotive REWRITE 共 35 个文件项：C07 7、Q03 7、E08 7、I01 7、I03 7。

| 文件 | 行号 | 原始表述摘要 | 替换 |
|---|---:|---|---|
| `content/industries/automotive.md` | 10, 14, 34, 36 | `every automotive part`; `3/4/5-axis`; `real-time X-ray`; `full production traceability` | R-C07 / R-Q03 / R-E08 / R-I01 / R-I03 |
| `content/industries/automotive.de.md` | 10, 14, 34, 36 | `jedes Automobilbau-Teil`; 3/4/5-Achs; Echtzeit-Röntgen; vollständige Rückverfolgbarkeit | 同上 |
| `content/industries/automotive.es.md` | 10, 14, 34, 36 | `cada pieza automotriz`; CNC 3/4/5 ejes; rayos X; trazabilidad completa | 同上 |
| `content/industries/automotive.fr.md` | 10, 14, 34, 36 | `chaque pièce automobile`; CNC 3/4/5 axes; rayons X; traçabilité complète | 同上 |
| `content/industries/automotive.it.md` | 10, 14, 34, 36 | `ogni componente automotive`; CNC 3/4/5 assi; raggi X; piena tracciabilità | 同上 |
| `content/industries/automotive.ja.md` | 10, 14, 34, 36 | `すべての自動車部品`; 3/4/5軸; X線; 完全なトレーサビリティ | 同上 |
| `content/industries/automotive.ko.md` | 10, 14, 34, 36 | `모든 자동차 부품`; 3/4/5축; X선; 전체 추적성 | 同上 |

### 5.3 Aerospace

Aerospace REWRITE 共 14 个文件项：Q04 7、I01 7。

| 文件 | 行号 | 原始表述摘要 | 替换 |
|---|---:|---|---|
| `content/industries/aerospace.md` | 14, 37, 48 | `Every part...X-ray...`; `Every aerospace part...full dimensional inspection` | R-Q04 / R-I01 |
| `content/industries/aerospace.de.md` | 14, 37, 48 | `Jedes Teil...`; `Jedes Luftfahrtteil...vollständiger Maßprüfung` | 同上 |
| `content/industries/aerospace.es.md` | 14, 37, 48 | `Cada pieza...`; `Cada pieza aeroespacial...inspección dimensional completa` | 同上 |
| `content/industries/aerospace.fr.md` | 14, 37, 48 | `Chaque pièce...`; `Chaque pièce aérospatiale...inspection dimensionnelle complète` | 同上 |
| `content/industries/aerospace.it.md` | 14, 37, 48 | `Ogni parte...`; `Ogni parte aerospaziale...ispezione dimensionale completa` | 同上 |
| `content/industries/aerospace.ja.md` | 14, 37 | `すべての部品...`; `すべての航空宇宙部品...完全な寸法検査` | 同上 |
| `content/industries/aerospace.ko.md` | 14, 37, 48 | `모든 부품...`; `모든 항공우주 부품...전체 치수 검사` | 同上 |

### 5.4 Medical

Medical REWRITE 共 21 个文件项：C07 7、Q05 7、E08 7。

| 文件 | 行号 | 原始表述摘要 | 替换 |
|---|---:|---|---|
| `content/industries/medical.md` | 10, 12, 25, 33, 37, 41, 46 | `Every part`; `Every medical part`; `full traceability`; 3/4/5-axis | R-C07 / R-Q05 / R-E08 |
| `content/industries/medical.de.md` | 10, 12, 25, 33, 37, 41, 46 | `Jedes Teil`; `Jedes Medizinprodukt`; vollständige Rückverfolgbarkeit; 3/4/5 Achsen | 同上 |
| `content/industries/medical.es.md` | 10, 12, 25, 33, 37, 41, 46 | `Cada pieza`; `Cada pieza médica`; trazabilidad completa; 3/4/5 ejes | 同上 |
| `content/industries/medical.fr.md` | 10, 12, 25, 33, 37, 41, 46 | `Chaque pièce`; `Chaque pièce médicale`; traçabilité complète; 3/4/5 axes | 同上 |
| `content/industries/medical.it.md` | 10, 12, 25, 33, 37, 41, 46 | `Ogni parte`; `Ogni parte medica`; piena tracciabilità; 3/4/5 assi | 同上 |
| `content/industries/medical.ja.md` | 10, 12, 25, 33, 37, 41 | `すべての部品`; `すべての医療部品`; 完全な生産トレーサビリティ; 3/4/5軸 | 同上 |
| `content/industries/medical.ko.md` | 10, 12, 25, 33, 37, 41 | `모든 부품`; `모든 의료 부품`; 전체 생산 추적성; 3/4/5축 | 同上 |

### 5.5 Certifications

Certifications REWRITE 共 7 个文件项：C06 7。

| 文件 | 行号 | 原始表述摘要 | 替换 |
|---|---:|---|---|
| `content/certifications/index.md` | 3, 29-35, 54-61, 73-75, 83-85 | `Copies of ... ISO 14001 ... ISO 13485 certificate documents`; card labels | R-C06 |
| `content/certifications/index.de.md` | 3, 29-35, 54-61, 73-75, 83-85 | `Kopien der Zertifikatsdokumente ... ISO 14001 ... ISO 13485` | 同上 |
| `content/certifications/index.es.md` | 3, 29-35, 54-61, 73-75, 83-85 | `Copias de los certificados ... ISO 14001 ... ISO 13485` | 同上 |
| `content/certifications/index.fr.md` | 3, 29-35, 54-61, 73-75, 83-85 | `Copies des certificats ... ISO 14001 ... ISO 13485` | 同上 |
| `content/certifications/index.it.md` | 3, 29-35, 54-61, 73-75, 83-85 | `Copie ... ISO 14001 ... ISO 13485` | 同上 |
| `content/certifications/index.ja.md` | 3, 29-35, 54-61, 73-75, 83-85 | `ISO 14001 ... ISO 13485 ... 証明書の写し` | 同上 |
| `content/certifications/index.ko.md` | 3, 29-35, 54-61, 73-75, 83-85 | `ISO 14001 ... ISO 13485 ... 증명서 사본` | 同上 |

### 5.6 Aluminum Die Casting

Aluminum REWRITE 共 22 个文件项：Q06 3、E08 1、I01 7、I02 7、I03 4。

| 文件 | 行号 | 原始表述摘要 | 替换 |
|---|---:|---|---|
| `content/aluminum-die-casting/index.md` | Q06: 46, 73, 77, 141, 179；E08: 143；I01: 45, 73, 75, 131, 134-135, 146；I02: 47, 131；I03: 132, 146 | `full PPAP`; `one PPAP`; `5-axis`; `X-ray`; `CMM`; `automated leakage testing` | R-Q06 / R-E08 / R-I01 / R-I02 / R-I03 |
| `content/aluminum-die-casting/index.de.md` | I01: 75, 79-80；I02: 75；I03: 76 | `Röntgen` / `KMG` / `automatische Dichtheitsprüfung` | R-I01 / R-I02 / R-I03 |
| `content/aluminum-die-casting/index.es.md` | I01: 40, 53；I02: 40 | `rayos X`; `CMM` | R-I01 / R-I02 |
| `content/aluminum-die-casting/index.fr.md` | I01: 40, 53；I02: 40 | `rayons X`; `CMM` | R-I01 / R-I02 |
| `content/aluminum-die-casting/index.ja.md` | I01: 40, 53；I02: 40 | `X線検査`; `CMM` | R-I01 / R-I02 |
| `content/aluminum-die-casting/index.it.md` | Q06: 47, 70；I01: 46, 70, 134, 138-139；I02: 48, 134；I03: 135 | `documentazione PPAP completa`; `raggi X`; `CMM`; `test di perdita automatizzato` | R-Q06 / R-I01 / R-I02 / R-I03 |
| `content/aluminum-die-casting/index.ko.md` | Q06: 47, 70；I01: 46, 70, 134, 138-139；I02: 48, 134；I03: 135 | `완전한 PPAP 문서화`; `X선`; `CMM`; `자동 누수 시험` | R-Q06 / R-I01 / R-I02 / R-I03 |

### 5.7 Magnesium Die Casting

本轮只有 3 个明确 REWRITE 文件项：I03 在德语、法语和意大利语 front matter 中被列为确认能力；英文页和日韩页已使用项目范围措辞。

| 文件 | 行号 | 原始表述摘要 | 替换 |
|---|---:|---|---|
| `content/magnesium-die-casting/index.de.md` | 47 | `Dichtheitsprüfung` | 改为与 R-I03 等价的项目条件表述 |
| `content/magnesium-die-casting/index.fr.md` | 47 | `Test d'étanchéité` | 同上 |
| `content/magnesium-die-casting/index.it.md` | 47 | `Test di tenuta` | 同上 |

### 5.8 共享 Data / Template / Schema 来源

| 文件 | 行号 | 原始表述 | 影响 | 替换 |
|---|---:|---|---|---|
| `data/company.yaml` | 33 | `Non-Destructive Testing via real-time X-ray` | Organization / ManufacturingBusiness Schema 及首页信任信息 | R-I01 |
| `data/company.yaml` | 34 | `Airtightness and pressure leak testing` | Organization / ManufacturingBusiness Schema | R-I03 |
| `layouts/partials/sections/quality-control.html` | 47 | `X-Ray` / `Real-time porosity inspection` | 首页所有语言共享模块 | R-I01 |
| `layouts/partials/sections/capability-detail.html` | 23 | `3 / 4 / 5-axis finishing...` | 首页所有语言共享模块 | R-E08 |

**Schema 说明：** 这些共享字段会进一步进入 JSON-LD。当前清单只标记文案来源，不批准任何 Schema 编辑。

## 6. 可以保留的审慎技术描述

以下内容不进入本批 REMOVE/REWRITE，但实施时不要误删：

- `content/magnesium-die-casting/index.md:76,139`：FAI、PPAP、CMM 明确写为 project-specific。
- Magnesium 多语言页中的项目范围检验说明，例如 `index.de.md:70,128`、`index.es.md:69,127`、`index.fr.md:69,127`、`index.it.md:69,127`、`index.ja.md:158`、`index.ko.md:158`。
- Certifications 页的“certificate copy”“no statement about current certification status”说明，例如 `content/certifications/index.md:10-12`。
- Aerospace 页的 `Automated cell and stacked castings` 图片说明；照片能支持该具体场景，但它不能支持“所有压铸单元 fully automated”。
- 各页保留项目范围、图纸、测量方法、验收标准、抽样和 DFM 的技术解释；这些比绝对承诺更符合 B2B 采购阅读习惯。
- ISO 9001、IATF 16949 证书事实本身属于 KEEP，但必须保留证书范围；后续不得借本清单扩大认证范围。

## 7. 建议优先修改的前 10 处

1. `data/homepage/*.yaml` 的 Q01 质量 Lead：7 个语言文件，删除 `zero-defect`。
2. `data/homepage/*.yaml` 的 Q02 Intro：7 个语言文件，删除 first-try qualification。
3. `content/industries/automotive*.md:10,36`：删除 every automotive part 的 100% 检测与追溯承诺。
4. `content/industries/aerospace*.md:14,37`：删除 every aerospace part 和 full dimensional inspection。
5. `content/industries/medical*.md:10,33,37,43`：删除 every medical part 和 full production traceability。
6. `content/aluminum-die-casting/index.md:84`、`content/aluminum-die-casting/index.de.md:18`、`content/aluminum-die-casting/index.it.md:77`、`content/aluminum-die-casting/index.ko.md:77` 的 Q01：删除零缺陷/每次压铸合格承诺。
7. `content/aluminum-die-casting/index.md:46,73,77,141,179`、`content/aluminum-die-casting/index.it.md:47,70`、`content/aluminum-die-casting/index.ko.md:47,70` 的 Q06：删除 full PPAP/one PPAP。
8. `data/homepage/*.yaml` 的 M12：删除 100,000 shots 寿命。
9. `data/homepage/*.yaml` 的 X-ray/CMM/leak 组合句：按 R-I01/I02/I03 收窄设备与项目范围。
10. `data/homepage/*.yaml` 的 E08 CNC 能力：删除未确认的 high-speed/5-axis 全量表述，统一项目确认。

## 8. 仍需业务确认

### 工程

1. 3/4/5-axis、high-speed 和 CNC 设备实际配置。
2. X-ray、CMM、泄漏/压力测试的量程、校准、方法和覆盖范围。
3. A357/A356、材料清单、公差和壁厚。
4. 是否具备自定义 slurry/composition 能力。

### 质量

1. 是否真的对 every automotive/aerospace/medical part 执行所述检测。
2. PPAP 等级、FAI、追溯、AS9100 风格文件和记录保存的真实范围。
3. ISO 13485 与 ISO 14001 当前有效性。
4. X-ray/CMM/泄漏测试的抽样和验收标准。

### 销售 / 管理层

1. 24 小时报价与 72 小时报价均不能未经批准写入。
2. KingShip 与 AlumCasting 的实体/品牌关系。
3. 自有工厂、外协比例及可公开的设备清单。
4. 是否允许公开 CMM 数量、设备型号和零件 envelope。

## 9. 实施约束

- 保留所有现有 URL、Canonical、Redirect、Sitemap 和页面结构。
- 不修改 Schema，直到共享事实和实体边界另行批准。
- 英语页与 6 个翻译页必须保持同一事实边界。
- 不新增数字、设备、认证、检测覆盖、产能、客户或交期。
- 实施后需检查所有语言页面、YAML、模板和 JSON-LD 输出。

## 10. 完整性校验

- REMOVE 文件项：26
- REWRITE 文件项：162
- REMOVE + REWRITE：188
- 多语言重复：156
- 涉及文件：48
- 7 个目标页面均已覆盖。
- M06 没有本轮目标页出现位置，已单独说明。
