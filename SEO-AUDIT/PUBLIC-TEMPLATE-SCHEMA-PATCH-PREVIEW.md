# KingShip 公共模板与 Schema 补丁预览

**日期：** 2026-11-22  
**范围：** Blog 卡片图片 Alt、Service/Organization JSON-LD、多语言服务说明  
**状态：** 仅预览。未修改公共模板、全站配置、Schema、URL、Canonical、Redirect 或 Sitemap。

## 1. Blog 卡片图片 Alt

### 当前实现

`layouts/partials/article-link/card.html:63-70`：

```html
<img
  src="{{ . }}"
  role="presentation"
  loading="lazy"
  decoding="async"
  class="not-prose absolute inset-0 w-full h-full object-cover">
```

生产构建的 `/blog/` 页面共有 11 张图片：

- 1 张页面横幅有 Alt；
- 10 张文章卡片图片缺少 Alt 属性。

### 建议补丁

```diff
 <img
   src="{{ . }}"
   role="presentation"
+  alt=""
+  aria-hidden="true"
   loading="lazy"
   decoding="async"
   class="not-prose absolute inset-0 w-full h-full object-cover">
```

### 理由

- 图片位于整张卡片链接内，卡片标题已经提供可访问名称。
- 将图片标记为装饰内容可避免屏幕阅读器重复朗读文章标题。
- 不改变布局、URL、Canonical、Schema 或图片加载方式。

### 影响范围

- 使用 `article-link/card.html` 的所有列表、分类和最近文章卡片。
- 当前主要影响 `/blog/`；预计一次修复后 Blog 缺失 Alt 从 10 降至 0。

## 2. Service JSON-LD 品牌冲突

### 当前链路

- `data/company.yaml:11`：`brand: "AlumCasting"`
- `layouts/partials/schema/service.html:39-42`：所有 Service 的 `brand.name` 读取该字段。
- `layouts/partials/schema/organization.html:20,33-36`：Organization 同时把该值用于 `alternateName` 和 `brand.name`。

生产构建确认：Aluminum、CNC、Tooling、Magnesium、SSR 的七种语言页面全部输出：

```json
"brand": {
  "@type": "Brand",
  "name": "AlumCasting"
}
```

### 问题

KingShip 页面把另一个品牌作为自身品牌，与“KingShip 独立品牌”原则冲突。若 AlumCasting 只是经批准的关联网站或运营品牌，也必须由管理层/法务确认后使用单独的关联字段，不能默认替代 KingShip。

### 建议方案

**方案 A：KingShip 为唯一公开品牌**

```diff
-brand: "AlumCasting"
+brand: "KingShip"
```

影响：

- Organization `alternateName` 变为 `KingShip`；
- Organization `brand.name` 变为 `KingShip`；
- 35 个服务页的 Service `brand.name` 变为 `KingShip`。

风险：AlumCasting 与 KingShip 的公开品牌关系不再由 Schema 表达。

**方案 B：拆分主品牌与经批准的别名**

建议新增独立数据字段，而不是复用同一字段：

```yaml
brand: "KingShip"
alternateName: "AlumCasting"   # 仅在法务确认后使用
```

随后公共 Schema 模板需分别读取 `brand` 和 `alternateName`。该方案涉及模板修改，必须单独批准。

## 3. CNC Service JSON-LD 技术描述

### 当前实现

`data/company.yaml:170-190`：

```yaml
- id: "cnc-machining"
  name: "CNC Machining"
  description: "Precision 3/4/5-axis CNC machining and post-processing for cast components."
```

本地化说明：

- ES：`3, 4 y 5 ejes`
- FR：`3/4/5 axes`
- DE：`3-/4-/5-Achs`
- JA/IT/KO：未设置 description，回退英文

### 与页面正文的冲突

本轮已从 CNC 正文移除未核实的 `3/4/5-axis`，但 Service JSON-LD 仍保留该内容。结构化数据比页面正文更具体，形成新的事实不一致。

### 建议描述

| Lang | Proposed Service description |
|---|---|
| EN | `CNC post-machining for die-cast aluminum and magnesium components, with allowance, datum strategy and inspection scope defined per project.` |
| DE | `CNC-Nachbearbeitung von Aluminium- und Magnesium-Druckgussteilen; Bearbeitungsaufmaß, Bezugssystem und Prüfumfang werden pro Projekt festgelegt.` |
| ES | `Mecanizado CNC de piezas de fundición de aluminio y magnesio; sobremetal, referencias y alcance de inspección definidos por proyecto.` |
| FR | `Reprise d'usinage CNC de pièces de fonderie aluminium et magnésium ; surépaisseur, références et contrôle définis par projet.` |
| JA | `アルミ・マグネシウムダイカスト部品のCNC後加工。取り代、基準、検査範囲は案件ごとに定義します。` |
| IT | `Lavorazione CNC di pressofusi in alluminio e magnesio; sovrametallo, datum e ambito ispettivo definiti per progetto.` |
| KO | `알루미늄·마그네슘 다이캐스팅 부품의 CNC 후가공. 가공 여유, 데이텀 및 검사 범위는 프로젝트별로 정의합니다.` |

## 4. 其他 Service JSON-LD 声明

| Service | Current description | Risk | Proposed description |
|---|---|---|---|
| Aluminum Die Casting | `ADC12, A380 and A356 alloys with tight-tolerance dimensional control and in-house CNC finishing.` | 合金可用性、公差和内部 CNC 描述超出现有证据 | `Aluminum high-pressure die casting projects, with alloy selection, DFM and inspection scope reviewed per project.` |
| Magnesium Die Casting | `AZ91D and AM60B for automotive, EV and electronics enclosures.` | 材料可用性未确认 | `Magnesium high-pressure die casting projects, with alloy and application scope confirmed at RFQ.` |
| Semi-Solid Rheocasting | `low-porosity, high-integrity structural components.` | 结果性承诺过强 | `Semi-solid rheocasting projects, with process, material and inspection scope confirmed per project.` |
| Die Casting Tooling | `In-house ... design, manufacturing and maintenance.` | 自有工具车间范围尚待证据 | `Die-casting tooling design and project-specific tooling scope confirmed at RFQ.` |

Aluminum 的本地化说明也应同步为对应的审慎表达；JA/IT/KO 目前只有名称，没有本地化 description。

## 5. 预期 Diff 摘要

### 文件 1：`layouts/partials/article-link/card.html`

- 增加 2 个属性：`alt=""`、`aria-hidden="true"`。
- 不改变输出元素数量、布局类或图片 URL。

### 文件 2：`data/company.yaml`

- 品牌字段：
  - `AlumCasting` → `KingShip`，以及可选的经批准 `alternateName`。
- 5 个服务 description。
- 为 ES/FR/DE 更新 CNC description；为 JA/IT/KO 新增 CNC description。
- 为 JA/IT/KO 新增或其他服务补齐经过批准的本地化 description。

## 6. 影响与验证

建议批准后验证：

1. `hugo --minify --config config/_default/hugo.toml`
2. Staging 构建：`hugo --environment staging --buildDrafts --buildFuture`
3. 解析全部 Service JSON-LD，确认 `brand.name == "KingShip"`。
4. 确认任何 `alternateName` 仅来自经批准的字段。
5. 对 35 个服务页核对本地化 Service description 与可见正文事实。
6. 检查 `/blog/` 缺失 Alt 数量为 0。
7. 确认 URL、Canonical、hreflang、Sitemap 和页面可见结构未变化。
8. 使用 Schema Markup Validator 或 Rich Results Test 人工复核。

## 7. 审批结论

本文件只提出公共模板与 Schema 修改预览，不代表已实施。需要人工批准后才能修改这两类公共文件。
