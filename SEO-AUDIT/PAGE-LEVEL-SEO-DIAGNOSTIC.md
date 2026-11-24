# GSC 页面级 SEO 诊断

**诊断日期：** 2026-11-22
**GSC 数据窗口：** 2026-10-25 至 2026-11-21，含首尾 28 天
**范围：** AlumCasting 2 个页面、KingShip 2 个页面
**数据源：** `gsc_mcp`、公开页面 HTML、`content/` 与审计报告
**操作边界：** 仅分析和生成本报告。未修改 HTML、CSS、JS、Markdown、URL、Canonical、Redirect、Sitemap、Schema 或 GSC 设置，未执行 Git commit、push 或 deploy。

## 1. 总览

### 1.1 页面技术状态

| 页面 | HTTP | Canonical | 索引状态 | H1 数 | Schema |
|---|---:|---|---|---:|---|
| AlumCasting Automotive | 200 | 自引用 | Submitted and indexed | 1 | Organization, WebPage, FAQPage |
| AlumCasting Zamak | 200 | 自引用 | Submitted and indexed | 1 | Organization, WebPage, Article |
| KingShip Blog | 200 | 自引用 | Submitted and indexed | 1 | BreadcrumbList |
| KingShip CNC | 200 | 自引用 | Submitted and indexed | 1 | Service, BreadcrumbList |

四个页面均无 Canonical 冲突、索引阻断、误跳转或多 H1 问题。主要问题集中在：

- 搜索意图与页面主题错配
- 未核实的制造、质量、设备和成绩声明
- 过宽页面承接大量长尾
- SERP snippet 质量
- 内部链接与内容模块不足
- 博客图片 Alt 与 Schema 完整性

### 1.2 问题统计

| 优先级 | 数量 |
|---|---:|
| P0 | 3 |
| P1 | 12 |
| P2 | 5 |
| **合计** | **20** |

“NEEDS VERIFICATION”表示该事实可能真实，但当前项目文件与公开页面无法独立证明，不应在后续优化中进一步扩大。

## 2. AlumCasting：`/automotive-die-casting-parts/`

### 2.1 当前页面快照

| 项目 | 当前值 |
|---|---|
| URL | https://alumcasting.com/automotive-die-casting-parts/ |
| Title | `Automotive Aluminum Die Casting Parts Manufacturer\| Alumcasting` |
| Title 长度 | 63 |
| Meta Description | `Tier-1 certified automotive aluminum die casting service. Equipped with 400T to 5000T heavy-duty HPDC lines, vacuum-assisted low-porosity tech, and 400+ CNC stations. Complete IATF 16949, X-ray, and CMM compliance. Request an expert DFM review!` |
| Description 长度 | 244 |
| H1 | `Automotive Aluminum Die Casting Parts Manufacturer\| Alumcasting` |
| 正文规模 | 约 1,085 词 |
| H2 数 | 8 |
| 同域链接 | 15 个 anchor；含核心服务与相关应用页 |
| Schema | Organization、WebPage、FAQPage |

### 2.2 GSC 数据

| 指标 | 数值 |
|---|---:|
| Clicks | 0 |
| Impressions | 1,393 |
| CTR | 0% |
| Avg. position | 50.14 |

该页面在 GSC 中对应 185 个可见 query-page rows，主要为：

- `aluminum die casting auto parts`：17 imp，pos47.35
- `aluminum die casting auto parts factory`：16 imp，pos55.06
- `aluminum die casting auto parts supplier`：17 imp，pos50.47
- `die casting auto parts supplier`：22 imp，pos39.82
- `automotive die casting supplier`：23 imp，pos63.61
- `automotive parts die casting supplier`：16 imp，pos52.81

少量查询已进入较前位置，如 `china aluminum die casting parts` 在该页为 1 imp、position 4，但样本不足以代表稳定机会。

### 2.3 搜索意图匹配

页面意图明确是 automotive aluminum die casting parts，与多个 factory、supplier、OEM、parts 查询方向一致。问题是：

- 一个页面同时承接 powertrain、EV、chassis、thermal management、medical-like components 等过多意图。
- 页面平均排名 50.14，说明当前不是简单 snippet 问题，而是页面权威、相关性和细分主题信号不足。
- H1 与 Title 完全相同，且 `Manufacturer| Alumcasting` 缺少空格和清晰分隔，品牌/关键词拼接不自然。

### 2.4 问题清单

#### A-01 — [P0] 大量企业与制造事实 NEEDS VERIFICATION

**证据：**

- 首页公开 Description 和正文声明 `Tier-1 certified`、`400T to 5000T heavy-duty HPDC lines`、`400+ CNC stations`、`40,000㎡ production base`、`21 years`、`complete IATF 16949, X-ray, and CMM compliance`。
- 正文声称 `near-zero porosity`、`zero-defect internal inspection`、`zero surface blistering`、T0 15–20 天、全检 X-Ray/泄漏/CMM。
- 这些能力不属于 KingShip 项目事实矩阵，也没有 AlumCasting 侧的设备台账、认证范围、面积证明或质量数据附件可供本轮验证。

**GSC 对应：** 页面 1,393 imp、0 click、avg. position 50.14；商业意图强，但低可信证据会削弱点击和询盘质量。

**建议：**

- 后续逐项标记 NEEDS VERIFICATION，并取得正式证据后再保留。
- 将“Tier-1 certified”与“Tier 1-Level”区分；后者不能替代正式资格。
- IATF 16949 应记录准确持证主体和范围。
- 400T–5000T、400+ CNC、40,000㎡、21 years、T0 15–20 天必须由设备/设施/人事记录支持。
- `near-zero porosity`、`zero-defect`、`every batch` 不应在无验收数据时保留。

**风险：** 高。属于事实、认证和质量承诺风险。

#### A-02 — [P0] 生产页面暴露编辑占位文字

**证据：** 公开正文多次出现 `(page deferred — not in Batch 1)`，位于 explosion-proof、motor housing、EV powertrain、cooling plate 等链接附近。这说明编辑批处理注释进入了生产页面。

**影响：** 直接损害 B2B 专业可信度，也可能被搜索引擎视为低质量或未完成内容。

**建议：** 后续删除所有 `page deferred`、`Batch 1` 和类似内部工作流文字；保留其目标链接或改为自然的技术描述。

**风险：** 低实施风险，高可信度收益。

#### A-03 — [P1] Title/Description 与 SERP 质量不理想

**证据：**

- Title 63 字符，`Manufacturer| Alumcasting` 缺少空格；H1 与 Title 完全重复。
- Meta Description 244 字符，包含过多能力、认证、设备和 CTA，预计被 Google 截断。

**GSC 对应：** 大量 query 已在搜索中出现，但 CTR 0%。排名深是主要原因，但过长摘要不利于差异化。

**建议 Title：** `Automotive Aluminum Die Casting Parts | AlumCasting`

**建议 Meta Description：** `Automotive aluminum die-casting parts for powertrain, EV, chassis and thermal applications. Review materials, DFM inputs, inspection scope and RFQ requirements.`

**建议 H1：** `Automotive Aluminum Die Casting Parts`

**目标关键词：**

- `automotive aluminum die casting parts`
- `aluminum die casting auto parts`
- `automotive die casting supplier`
- `automotive die casting parts manufacturer`

**风险：** 低到中。保持 URL 和页面定位不变。

#### A-04 — [P1] 页面主题过宽，长尾 query 分摊严重

**证据：** 同一页面承担 185 个 query-page rows，覆盖 manufacturer、factory、supplier、OEM、powertrain、chassis、EV、thermal、explosion-proof 等意图；页面包含多段 FAQ 和多个应用方向。

**GSC 对应：** 1,393 imp / 0 click / pos50.14。

**建议补充/调整：**

1. 首屏增加 2–3 句直接说明：服务对象、零件类型、报价输入。
2. 增加 `Automotive parts we support` 模块，但每类只保留 1–2 句，不复制其他页面全文。
3. 将 manufacturer/factory/supplier 证据收敛到一段供应商资格与 RFQ 流程。
4. 将超长 FAQ 改为 5–7 个有独立答案的问题。
5. 删除所有未经核实的具体设备数、面积、产能、零缺陷和交期数字。

**内链建议：**

- 直连 `/aluminum-die-casting/`
- 直连 `/die-cast-aluminum-electric-motor-housing-suppliers/`
- 直连 `/custom-aluminum-die-casting-for-ev-powertrain-components/`
- 直连 `/liquid-cooled-aluminum-cooling-plates-for-electric-vehicles/`
- 直连 `/porosity-control-x-ray-inspection-castings/`
- 转化入口 `/contact/`

**预期改善：** 更清晰的主题聚类、更好的 snippet 和更高商业询盘匹配度；排名改善依赖内容深度与证据。

**实施风险：** 中。不要删除已有深层页面链接或变更 URL。

#### A-05 — [P2] FAQ Schema 放大了未核实承诺

**证据：** FAQPage JSON-LD 与可见正文一致输出 `near-zero porosity`、`zero fluid leakage`、`±0.01mm` 等表述。

**影响：** 若后续修改正文但不同步 Schema，会继续向搜索引擎输出未经核实的能力。

**建议：** 先精简 FAQ 内容，再同步 FAQPage Schema；本轮不改 Schema。结构化数据只能描述页面上已核实的事实。

**风险：** 中。

### 2.5 值得保留的部分

- 状态 200、Canonical 自引用、Google 已索引。
- 页面有 1 个 H1、8 个 H2，结构可读。
- 图片无 Missing Alt。
- 同域链接覆盖核心服务、应用和 RFQ，不是孤立页。

## 3. AlumCasting：`/zamak-3-vs-zamak-5-die-casting-selection-guide/`

### 3.1 当前页面快照

| 项目 | 当前值 |
|---|---|
| URL | https://alumcasting.com/zamak-3-vs-zamak-5-die-casting-selection-guide/ |
| Title | `Zamak 3 vs. Zamak 5: Zinc Die Casting Selection Guide` |
| Title 长度 | 53 |
| Meta Description | `In cross-border precision component sourcing, engineers frequently face a critical choice when optimizing small-to-medium structural components: Zamak 3 vs. ...` |
| Description 长度 | 160 |
| H1 | `Zamak 3 vs. Zamak 5: Zinc Die Casting Selection Guide` |
| 正文规模 | 约 1,204 词 |
| H2 数 | 8 |
| 同域链接 | 18 个 anchor，覆盖 zinc service、tooling、alloy、CNC、surface finish、X-ray、contact |
| Schema | Organization、WebPage、Article |

### 3.2 GSC 数据

| 指标 | 数值 |
|---|---:|
| Clicks | 3 |
| Impressions | 540 |
| CTR | 0.56% |
| Avg. position | 10.16 |

关键词机会：

| 关键词 | Impressions | Clicks | CTR | Avg. position |
|---|---:|---:|---:|---:|
| `zamak 3 vs zamak 5` | 64 | 1 | 1.56% | 3.14 |
| `zamak 3` | 43 | 0 | 0% | 8.53 |
| `zamak 5` | 34 | 0 | 0% | 7.15 |
| `zamak 5 material properties` | 19 | 0 | 0% | 8.37 |
| `zamak` | 10 | 0 | 0% | 11.70 |

### 3.3 搜索意图匹配

主题匹配良好：compare Zamak 3 and Zamak 5、铜含量、性能、DFM、检测和表面处理都有覆盖。问题在于：

- Google 已把 `zamak 3`、`zamak 5` 单独查询带到 7–9 位，但页面首屏和 meta 更像长篇比较文章，未给出单合金快速答案。
- 页面有 540 imp 但仅 3 clicks，CTR 明显偏低。

### 3.4 问题清单

#### Z-01 — [P0] 质量、设备、产能与材料数据 NEEDS VERIFICATION

**证据：**

- 正文称 `IATF 16949 certified manufacturing supplier`、`zero-defect compliance`。
- 声称可以“for every batch”进行 real-time X-ray inspection。
- 声称 T0 到 `10,000+ volume runs`、壁厚 `0.50mm`、10%/7% elongation、283/331 MPa、221/269 MPa、82/91 HB 等具体数据。
- 正文将属性表称为 “verified material characteristics”，但没有显示引用标准、材料证书或测试来源。

**GSC 对应：** 页面平均排名 10.16，说明已有可见度；未经核实的强声明在点击到询盘阶段风险更高。

**建议：**

- 机械性能数据标明 ASTM/EN 标准牌号及数据来源。
- IATF 当前范围和持证主体 NEEDS VERIFICATION。
- `every batch` X-Ray、10,000+ volume 和 0.50mm 极限能力 NEEDS VERIFICATION。
- 删除 `zero-defect compliance`，改为按图纸、抽样和验收标准定义质量。

**风险：** 高。

#### Z-02 — [P1] Meta Description 是截断的文章摘要

**证据：** 当前 Description 以 `In cross-border precision component sourcing...` 开头，并以 `Zamak 3 vs. ...` 结束，句子未完成。

**影响：** SERP 缺少具体差异、性能或用途，降低已排名 10 位左右的 CTR。

**建议 Title：** `Zamak 3 vs Zamak 5: Properties, Copper Content & Uses`

**建议 Meta Description：** `Compare Zamak 3 and Zamak 5 by copper content, strength, ductility and dimensional stability before selecting a zinc die-casting alloy for your part.`

**建议 H1：** `Zamak 3 vs Zamak 5: Zinc Die Casting Alloy Selection`

**目标关键词：**

- `zamak 3 vs zamak 5`
- `zamak 3`
- `zamak 5`
- `zamak 5 material properties`

**风险：** 低。保留 URL。

#### Z-03 — [P1] 单合金查询缺少直接答案模块

**证据：** `zamak 3` 43 imp、pos8.53；`zamak 5` 34 imp、pos7.15；`zamak 5 material properties` 19 imp、pos8.37；均无点击。

**建议：**

- 首屏加入 2×3 的快速对比：copper range、strength、ductility、hardness、casting behavior、typical use。
- 在 H1 后增加 `Choose Zamak 3 if...` 与 `Choose Zamak 5 if...` 两个直接答案块。
- 为 `Zamak 3 properties`、`Zamak 5 properties`、`Zamak 3 composition`、`Zamak 5 composition` 添加稳定的页面锚点。
- 避免把单独的 Zamak 3/5 查询写成两个近似重复新页。

**内链建议：**

- `/zinc-die-casting-services/`
- `/die-casting-tooling/`
- `/surface-finishing-aluminum-magnesium-casting/`
- `/porosity-control-x-ray-inspection-castings/`
- `/contact/`

**预期改善：** 重点提升 CTR 和低排名词点击；保守预期是现有 7–9 位词获得更多点击。

**实施风险：** 低到中。

#### Z-04 — [P1] 长篇内容中技术结论与商业声明混杂

**证据：** 正文包含材料性能、DFM、X-ray、CMM、电镀、粉末喷涂、产能、20+ 年经验和零缺陷声明，读者难以区分可验证材料数据与营销承诺。

**建议：**

- 将材料数据表与“Manufacturing and inspection scope”分开。
- 每项性能数据添加标准/来源/牌号说明。
- 将所有工厂能力和交付承诺改为项目确认句式。
- 保留已有的 Zamak 3/5 对比、DFM 和表面处理内容，这些与主题直接相关。

**风险：** 中。

#### Z-05 — [P2] Article Schema 与作者可信度未闭合

**证据：** Article JSON-LD 的 `author` 为空；可见正文却将作者描述为 `Senior Tooling & Manufacturing Professional (20+ Years On-Site Foundry Experience)`。

**建议：**

- 后续补充经核实的人员姓名、职位、审稿关系和作者页。
- 或移除未证实年限，并让作者字段指向有效作者实体。
- 本轮不修改 Schema。

**风险：** 低到中。

### 3.5 值得保留的部分

- Title 53 字符，核心比较意图清楚。
- H1 与主题一致，1 个 H1、7 个 H2。
- 状态 200、Canonical 自引用、已索引。
- 18 个同域链接覆盖核心服务，并非孤立文章。
- 4 张图片均有 Alt。

## 4. KingShip：`/blog/`

### 4.1 当前页面快照

| 项目 | 当前值 |
|---|---|
| URL | https://kingship.alumcasting.com/blog/ |
| Title | `Precision Manufacturing & Tool Design Technical Blog · KingShip` |
| Title 长度 | 63 |
| Meta Description | `In-depth industrial case studies, mold flow analysis guides, porosity mitigation, and engineering advice from 20+ years of high pressure die casting expertise.` |
| Description 长度 | 159 |
| H1 | `Precision Manufacturing & Tool Design Technical Blog` |
| 正文规模 | 约 184 词 |
| H2 数 | 10，全部是文章卡片标题 |
| 同域链接 | 13 个 article/hub 链接 |
| Schema | 仅 BreadcrumbList |

本地证据：

- `content/blog/_index.md:2-3`：标题与 Description。
- `content/blog/_index.md:13-15`：博客简介和卡片入口，没有分类、摘要或采购导航。

### 4.2 GSC 数据

| 指标 | 数值 |
|---|---:|
| Clicks | 0 |
| Impressions | 524 |
| CTR | 0% |
| Avg. position | 15.54 |

主要错配查询：

- `aluminum foundry transfer tooling`：15 imp，pos34.27
- `precision casting technology behind custom flanges`：14 imp，pos54.36
- `aluminum foundry engineering support`：13 imp，pos45.92
- `aluminum casting engineering consultation`：11 imp，pos44.36
- `cold forming tooling for long production runs`：2 imp，pos55
- `low moq investment casting`：1 imp，pos43

### 4.3 问题清单

#### B-01 — [P1] Description 含未核实的“20+ years”

**证据：** `content/blog/_index.md:3` 写入 `20+ years of high pressure die casting expertise`，与事实矩阵 C01 的待核实状态冲突。

**建议：** 在管理层签署前删除年限；使用 `engineering notes from KingShip's manufacturing and tooling team` 或类似可核实表述。

**风险：** 高事实风险、低技术风险。

#### B-02 — [P1] 博客入口承接明显偏题查询

**证据：** GSC 将 `/blog/` 与 flange、cold forming、investment casting、engineering consultation 等多组 query-page 组合在一起，但页面正文没有对应答案；页面 524 imp、0 click、pos15.54。

**原因判断：** 可能是旧内容/旧站点信号仍留在索引、卡片标题和导航过泛，或页面缺少清晰主题边界。需要结合后续抓取与历史内容变更确认。

**建议：**

- 将 H1 与 intro 明确限定为 die casting、CNC、tooling、quality 和 RFQ engineering。
- 为博客增加主题分区，不创建新 URL。
- 让非核心技术内容不进入首屏卡片或主导航。
- 若历史索引顽固，后续单独评估 canonical/noindex，但本轮不改。

**风险：** 中。

#### B-03 — [P1] 博客索引正文过薄，只有卡片标题

**证据：** 线上正文约 184 词，10 个 H2 都是文章标题，没有摘要、适用对象、专题说明或 RFQ 引导。

**建议补充：**

1. 首屏 80–120 词说明面向工程与采购人员，并覆盖主题范围。
2. 按 `Design & DFM`、`Porosity & Inspection`、`CNC & Tooling`、`RFQ & Program Launch` 分组。
3. 每篇文章卡片显示 1–2 句摘要。
4. 增加 `Start with a drawing or RFQ` CTA，指向 `/contact/`。

**内链建议：**

- `/aluminum-die-casting/`
- `/magnesium-die-casting/`
- `/cnc-machining/`
- `/tooling/`
- `/certifications/`
- `/contact/`

**预期改善：** 提高 query-page relevance，降低错配展示，改善从博客到商业页和 RFQ 的路径。

**实施风险：** 中。列表模板修改可能影响卡片布局，但不需要改 URL。

#### B-04 — [P2] 10 张图片缺少 Alt

**证据：** 卡片图片使用 `role="presentation"`，但没有 `alt=""`；页面共 10 张正文卡片图片缺失 Alt。

**建议：** 装饰图明确写 `alt=""`；如果图片表达文章主题，使用简洁有效的 Alt。不要复制文章标题。

**风险：** 低。

#### B-05 — [P2] Schema 只有 BreadcrumbList

**证据：** 线上 JSON-LD 类型仅有 BreadcrumbList，未输出 CollectionPage 或 ItemList。

**建议：** 后续在不改变事实的前提下评估 `CollectionPage` + `ItemList`，列明已发布文章和顺序。本轮不修改 Schema。

**风险：** 中。Schema 必须与实际可见内容一致。

### 4.4 值得保留的部分

- H1 唯一，Canonical 自引用，页面已索引。
- 10 个文章卡片有清晰、具体的标题和内链。
- 无 H1/Title 重复品牌后缀。
- 页面结构稳定，后续可主要通过内容模块和卡片摘要改善。

## 5. KingShip：`/cnc-machining/`

### 5.1 当前页面快照

| 项目 | 当前值 |
|---|---|
| URL | https://kingship.alumcasting.com/cnc-machining/ |
| Title | `CNC Machining for Die-Cast Aluminium & Magnesium Components · KingShip` |
| Title 长度 | 70 |
| Meta Description | `CNC post-machining of A357 aluminium and AZ91D/AM60B magnesium castings: machining allowance, datum strategy, conditional tolerances and RFQ inputs for sourcing teams.` |
| Description 长度 | 167 |
| H1 | `CNC Machining for Die-Cast Aluminium & Magnesium Components` |
| 正文规模 | 约 2,519 词 |
| H2 数 | 12 |
| 同域链接 | 14 anchor |
| 跨站链接 | 3 个指向 AlumCasting 资源 |
| Schema | Service、BreadcrumbList |

本地证据：

- `content/cnc-machining/index.md:2-4`：Title 与 Description。
- `content/cnc-machining/index.md:29-35`：±0.01 mm 与 1.0–1.2 mm 能力参数。
- `content/cnc-machining/index.md:57-64`：3 个 AlumCasting 外链资源。
- `content/cnc-machining/index.md:69,113`：±0.01 mm 条件化描述。
- `content/cnc-machining/index.md:158`：PPAP、FAI、CMM 项目范围声明。

### 5.2 GSC 数据

| 指标 | 数值 |
|---|---:|
| Clicks | 1 |
| Impressions | 128 |
| CTR | 0.78% |
| Avg. position | 53.46 |

主要查询：

| 关键词 | Impressions | Clicks | CTR | Avg. position |
|---|---:|---:|---:|---:|
| `aluminum casting cnc machining service` | 29 | 0 | 0% | 46.34 |
| `cnc aluminium casting machining service provider` | 16 | 0 | 0% | 78.50 |
| `casting cnc machining provider` | 13 | 0 | 0% | 52.62 |
| `cnc aluminium casting machining service` | 11 | 0 | 0% | 48.64 |
| `cnc aluminum casting machining service provider` | 10 | 0 | 0% | 89.70 |
| `casting cnc machining supplier` | 6 | 0 | 0% | 14.83 |

### 5.3 问题清单

#### C-01 — [P1] Title 和 Meta Description 过长

**证据：** Title 70 字符、Description 167 字符，超过常见 SERP 展示长度。

**建议 Title：** `CNC Machining for Aluminum & Magnesium Castings`

**建议 Meta Description：** `Post-machining for aluminum and magnesium castings: datum strategy, machining allowance, tolerance considerations and RFQ requirements.`

**建议 H1：** `CNC Machining for Aluminum and Magnesium Castings`

**目标关键词：**

- `aluminum casting cnc machining service`
- `casting cnc machining supplier`
- `CNC machining for die-cast components`
- `magnesium casting CNC machining`

**风险：** 低。

#### C-02 — [P1] 首屏未明确覆盖 service/provider/supplier 意图

**证据：** 页面首段直接进入“post-machining determines part function”，技术深度强，但没有在 H1/首段回答“谁提供 CNC machining for castings、需要哪些输入、如何获得报价”。GSC 中 6–16 imp 的 supplier/provider 查询仍在第 14–89 位。

**建议补充：**

- H1 后加入 2–3 句服务定位：cast-to-CNC 后加工、图纸/模型输入、DFM、检验范围、项目报价。
- 新增 `CNC machining scope` 摘要模块，明确 milling、drilling、turning、fixturing、inspection scope，具体设备参数 NEEDS VERIFICATION。
- 保留现有 allowance、datum、tolerance 深度内容。
- 在 FAQ 中直接回答 `Can you machine die-cast parts?`、`What files are needed?`、`How is tolerance agreed?`

**预期改善：** 提升 service/supplier 查询匹配，进而改善 CTR 和中长排名。

**风险：** 低到中；必须避免新增未经核实设备数量。

#### C-03 — [P1] 设备与精度声明 NEEDS VERIFICATION

**证据：**

- `3/4/5-axis`、`high-speed 5-axis`
- `±0.01 mm`
- `A357 / AZ91D / AM60B`
- FAI、PPAP、CMM 项目范围

其中，±0.01 mm 和 PPAP/CMM 已在正文谨慎限定为项目范围；设备轴数、high-speed、材料和精度仍与事实矩阵 E08/I05/M04 的待核实状态相关。

**建议：**

- 优先保留当前条件化措辞，不扩大为所有零件。
- 取得设备台账后再保留具体轴数和 high-speed。
- 取得材料证书后再把 A357/AZ91D/AM60B 写成 confirmed alloy。
- 取得能力研究/CMM 报告后再把 ±0.01 mm 作为可公开能力。

**风险：** 高事实风险。

#### C-04 — [P1] 与 AlumCasting 存在同一供应商查询竞争

**证据：** `casting cnc machining supplier`：

- KingShip CNC：6 imp、0 click、position 14.83
- AlumCasting precision CNC：9 imp、0 click、position 58.33

**判断：** KingShip 当前更接近首页，应承接该差异化 cast-to-CNC query；KingShip 不需要复制 AlumCasting 的全站 CNC 内容。

**建议：**

- KingShip 仅强化 die-cast-to-CNC 的工程接口、允许量、基准和检验。
- AlumCasting 保留广域 CNC 制造与设备概览。
- 两站使用不同的 title/H1/FAQ 分工，不做近似重复。

**风险：** 中。

#### C-05 — [P2] 3 个核心技术资源指向 AlumCasting 站外

**证据：** `content/cnc-machining/index.md:57-64` 链接到：

- AlumCasting CNC tolerance guide
- AlumCasting 5-axis playbook
- AlumCasting one-stop cast+CNC

**影响：** 跨站提供技术价值本身可以合理存在，但会减少 KingShip 自有 CNC 主题闭环。

**建议：**

- 保留这些链接仅作为补充资料。
- 优先建设 KingShip 自有 article 或站内锚点，承接相同问题。
- 不复制 AlumCasting 全文，也不新建近似重复的 CNC 服务页。

**风险：** 低到中。

### 5.4 值得保留的部分

- 正文约 2,519 词，技术内容充分，不是薄内容。
- 页面明确区分 cast blank、allowance、datum、tolerance、surface、inspection 和 RFQ。
- H1 唯一，H2/H3 层级完整，Canonical 自引用，已索引。
- 4 张图片均有 Alt。
- Service + BreadcrumbList Schema 可解析，符合服务页基本语义。
- ±0.01 mm、PPAP/CMM 已有条件化限定，应保留这种审慎技术描述。

## 6. 页面优先级

| 页面 | 优先级 | 主要原因 |
|---|---|---|
| AlumCasting Automotive | P0 | 未核实制造/认证/零缺陷声明及生产占位文字 |
| AlumCasting Zamak | P0 | 高质量潜力，但材料、全检、产能和 IATF 声明需核实 |
| KingShip Blog | P1 | 524 imp / 0 click，主题错配，正文过薄，图片 Alt 缺失 |
| KingShip CNC | P1 | 128 imp / 1 click，Title/Meta 过长，供应商意图未充分表达，精度/设备声明需核实 |

## 7. 最值得优先实施的 3 项优化

### 1. 清理 AlumCasting Automotive 页的未完成编辑文字与绝对承诺

- 删除 `(page deferred — not in Batch 1)`。
- 将零缺陷、近零孔隙、400+ CNC、40,000㎡、21 years、15–20 天和全检声明标记为 PENDING EVIDENCE。
- 重新组织为“应用 + DFM + 检验范围 + RFQ 输入”，缩短 Description。

**为什么先做：** 1,393 次展示是四个页面中最大体量，同时存在明显可信度风险。

### 2. 重构 KingShip 博客入口，使其成为工程技术导航而不是泛内容页

- 移除 `20+ years`，直到事实确认。
- 增加主题分区和文章摘要。
- 将偏题的 flange、cold forming、investment casting 查询与页面主题隔离。
- 修复 10 张图片 Alt。

**为什么先做：** 524 次展示、0 点击和明显 query mismatch，是 KingShip 当前最大的页面级异常。

### 3. 优化 AlumCasting Zamak 页的 SERP 和单合金答案

- 重写截断的 Description。
- 在首屏增加 Zamak 3 / Zamak 5 选择规则。
- 为单合金查询增加稳定锚点和材料数据说明。

**为什么先做：** 平均排名 10.16，已有较强排名，CTR 仅 0.56%，属于低风险、较快见效的 snippet 机会。

## 8. 尚需业务方核实的事实清单

### AlumCasting Automotive

- [ ] `Tier-1 certified` 的正式定义和证据
- [ ] `400T to 5000T` 的现役设备清单
- [ ] `400+ CNC stations`
- [ ] `40,000㎡ production base`
- [ ] `21 years` 的成立/运营主体
- [ ] IATF 16949、X-ray、CMM 的准确范围和当前有效性
- [ ] `near-zero porosity`、`zero-defect`、`zero surface blistering`
- [ ] T0 15–20 天和 24 小时 RFQ 回复是否可承诺

### AlumCasting Zamak

- [ ] Zamak 3/5 机械性能数据的标准、温度、来源和版本
- [ ] IATF 16949 当前有效性
- [ ] 每批 real-time X-ray 的适用范围与抽样
- [ ] 0.50mm 壁厚的项目条件
- [ ] 10,000+ volume runs 的周期、产品类型和班次
- [ ] 20+ 年经验及 `verified` 属性的证据

### KingShip Blog

- [ ] `20+ years` 的适用主体和证明
- [ ] blog 历史上是否存在已删除或迁移的 flange/cold forming 内容
- [ ] 当前文章是否全部由工程/质量人员审核

### KingShip CNC

- [ ] A357、AZ91D、AM60B 的 current confirmed alloy 清单
- [ ] 3/4/5-axis、high-speed 5-axis 的设备证据
- [ ] ±0.01 mm 的特征级能力研究和 CMM 报告
- [ ] FAI/PPAP/CMM 的实际项目范围

## 9. 结论

- 诊断页面：**4 个**
- 发现的问题：**20 个**
- P0：**3 个**
- P1：**12 个**
- P2：**5 个**
- 四个页面均没有索引阻断或 Canonical 冲突。
- 最高影响来自 AlumCasting Automotive 的未核实能力与内容完成度，以及 KingShip Blog 的 query-page 错配。
- 本轮未修改任何网站文件、URL、Canonical、Redirect、Sitemap、Schema 或 GSC 设置。
