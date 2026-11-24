# AlumCasting 与 KingShip 最终 SEO 整改计划

**制定日期：** 2026-11-22  
**范围：** AlumCasting Automotive、AlumCasting Zamak、KingShip Blog、KingShip CNC  
**依据：**

- `AGENTS.md`
- `SEO-AUDIT/FACT-VERIFICATION-MATRIX.md`
- `SEO-AUDIT/CONTENT-CLAIM-REMEDIATION-PLAN.md`
- `SEO-AUDIT/PAGE-LEVEL-SEO-DIAGNOSTIC.md`
- `SEO-AUDIT/GSC-SEO-OPPORTUNITY-REPORT.md`
- 公开发布页面、当前仓库页面、证书图片和现场照片

**操作边界：** 本轮只读取、核验并新增本报告。未修改网站文件、URL、Canonical、Redirect、Sitemap 或 Schema；未修改 GSC；未执行 Git commit、push 或 deploy。

## 1. 结论摘要

四个页面均已被 Google 索引，Canonical 自引用，且没有发现多 H1、索引阻断或错误跳转。当前主要风险不是抓取，而是：

1. AlumCasting Automotive 把未提供独立证据的认证、设备、面积、交期和质量承诺写成了肯定事实。
2. AlumCasting Zamak 已有较好的平均排名，但摘要截断、缺少直接答案，并把材料数据、设备能力和绝对质量承诺混在一起。
3. KingShip Blog 承接了大量与压铸工程入口不完全匹配的查询，页面本身又过薄，且 10 张卡片图片缺少 Alt。
4. KingShip CNC 的正文深度足够，但首屏更像技术长文，未能直接回应 supplier/service/provider 搜索意图；部分设备、材料和公差声明仍为 NEEDS VERIFICATION。

本轮最稳妥的顺序是：先删除编辑占位与绝对承诺，再补齐证据，随后调整 Title、Meta、H1、内容模块和 RFQ 路径，最后处理 Schema 和多语言同步。

## 2. 证据口径

### 2.1 证据等级

| 等级 | 可用于证明什么 | 不能证明什么 |
|---|---|---|
| A：证书文件 | KingShip 证书上的标准、编号、持证主体、范围和印刷日期 | 自动证明 AlumCasting 所有工厂、所有业务或证书当前监督审核状态 |
| B：现场照片 | 某类设备或工位在现场存在 | 设备总数、型号、精度、校准状态、全检覆盖率和可用产能 |
| C：公开页面文案 | 企业当前如何对外宣传 | 文案本身不能作为独立事实证据 |
| D：GSC 数据 | 查询、页面、展示、点击和平均排名 | 关键词完整需求、转化质量或未返回查询为零 |

### 2.2 认证与实体边界

KingShip 本地证书证据显示：

- ISO 9001:2015，证书号 `DZ/CN/2411010Q`，持证主体为 `Kingship (Dongguan) Precision Manufacturing Co., Ltd.`，印刷范围为 `Manufacture of precision mechanical parts and die-casting molds`，印刷有效期至 2027-12-17。证据：`content/certifications/index.md:18-23`。
- IATF 16949:2016，NQA 证书号 `T207408`，IATF 证书号 `0613009`，同一持证主体，印刷范围为 `Manufacture of die-cast parts and machined parts`，明确排除 Clause 8.3 产品设计，印刷有效期至 2029-08-27。证据：`content/certifications/index.md:42-49`。

AlumCasting About 页面公开写明 AlumCasting 是由上述同一法律实体运营的国际制造品牌。该页面可以证明公开的品牌—运营主体关系，但 AlumCasting 的 Automotive 和 IATF 页面没有展示可用证书编号、范围或有效期。

因此：

- 可以把证书内容和适用主体作为后续核验基础。
- 不能把 `IATF 16949 certified` 扩写为 `IATF-certified product design`、`all factories certified` 或 `all inspection processes certified`。
- 不能仅因证书属于关联主体，就在 AlumCasting 页面写 `complete IATF compliance`。应先由质量、法务和市场确认品牌页面是否可引用该证书，并同步列出准确范围。

## 3. 事实核验结果

### 3.1 AlumCasting 声明

| ID | 原声明 | 页面证据 | 核验状态 | 决策 | 核验结论与可用表述 |
|---|---|---|---|---|---|
| A01 | `Tier-1 certified`; `Tier 1-Level Factory` | [Automotive 页面](https://alumcasting.com/automotive-die-casting-parts/) 首屏及底部 CTA | **NEEDS VERIFICATION；同页定义不一致** | HOLD | 同一页同时使用“认证”和“级别”两种含义，未提供 Tier-1 客户批准、供应商代码或审核记录。核实前不得写作已获 Tier-1 资格。无充分证据时不提供肯定性替代表述。 |
| A02 | `400T to 5000T`; `1000T – 5000T` | [Automotive 页面](https://alumcasting.com/automotive-die-casting-parts/) `Production Scale & Quality Assurance`；[Manufacturing Capabilities](https://alumcasting.com/manufacturing-capabilities/) 列出 `160T – 5,000T` | **NEEDS VERIFICATION；范围口径冲突** | HOLD | 公开页面出现 400T–5000T 与 160T–5000T 两套范围，未附设备台账。可改为流程性表述：`Machine selection is confirmed against the part, die size, alloy and required shot weight.` |
| A03 | `400+ CNC stations`; `400+ CNC Centers`; `400+ units` | Automotive 首屏、底部 CTA；[IATF/CNC 页面](https://alumcasting.com/iatf-16949-high-tolerance-automotive-cnc-machining-supplier/) 首屏 | **NEEDS VERIFICATION** | HOLD | 无 CNC 设备清单、编号或产能记录。可写：`CNC capacity and scheduling are confirmed for each part and RFQ.` 不保留数字。 |
| A04 | `40,000㎡ production base` | [About 页面](https://alumcasting.com/about-alumcasting-die-casting-expert/) 企业介绍；Automotive 底部 CTA | **NEEDS VERIFICATION** | HOLD | 当前没有产权、租赁、平面图或设施统计证据。核实前不公开面积。 |
| A05 | `21 years`; `20+ years`; `20 years` | About、Automotive；IATF/CNC 页面 | **NEEDS VERIFICATION** | HOLD | 2026 年从 2003 年计算可到 23 年，但仓库没有营业执照或成立文件；不同页面使用 20、21、20+ 年。先统一适用主体和时间口径，再决定是否保留。 |
| A06 | `IATF 16949 certified`; `Complete IATF 16949 compliance` | Automotive 首屏及 Quality 区块；IATF/CNC 页面首屏 | **部分证实，主体/范围/当前有效性 NEEDS VERIFICATION** | REWRITE | About 页面支持 AlumCasting 与 KingShip 法律实体的运营关系；KingShip 本地有 IATF 证书副本。但不能由 `complete compliance` 扩大范围。候选表述：`Manufacturing is provided by Kingship (Dongguan) Precision Manufacturing Co., Ltd. Current quality-system certificates, holder details and applicable scope are provided during supplier qualification.` |
| A07 | `Zero-Defect Internal Inspection`; `zero-defect compliance`; `zero surface blistering`; `zero fluid leakage` | Automotive `Production Scale`、Technical FAQ、Quality；[Zamak 页面](https://alumcasting.com/zamak-3-vs-zamak-5-die-casting-selection-guide/) 工具段 | **无支持绝对承诺** | REMOVE | 没有 PPM、批次合格率、检验覆盖率或验收标准。删除绝对承诺，改为：`Inspection methods, sampling levels and acceptance criteria are agreed against the drawing and customer requirements.` |
| A08 | `near-zero porosity`; `Pore-free` | Automotive Technical FAQ；其他商业页存在同类措辞 | **无支持绝对承诺** | REMOVE | 可作为目标描述，但不能作为已实现结果。候选技术表述：`Porosity acceptance criteria are defined by critical area, inspection method and the drawing; process controls are reviewed for each part.` |
| A09 | `Full X-Ray inspections`; `for every batch` real-time X-ray; `100% Critical Inspection` | Automotive 底部质量承诺；Zamak `Advanced Porosity Control`；Manufacturing Capabilities 矩阵 | **NEEDS VERIFICATION** | HOLD | 未提供逐批全检、抽样表、设备范围或检验记录。可写：`X-ray inspection, where selected, is defined by part size, critical areas, method and sampling in the approved inspection plan.` |
| A10 | `T0 first-article samples delivered in 15-20 days` | Automotive 底部 CTA | **NEEDS VERIFICATION** | HOLD | 无项目排期、模具复杂度、材料、试模轮次和节假日条件。可改为：`Tooling and T0 timing is confirmed after the part, die concept, material and trial scope are reviewed.` |
| A11 | `10,000+ volume runs` | Zamak `Your Full-Turnkey Partner` | **NEEDS VERIFICATION** | HOLD | 没有时间单位、零件类型、班次或年/月产能口径。可写：`Production capacity and process plan are quoted against annual volume, part size and tooling.` |
| A12 | `wall architectures down to 0.50mm` | Zamak `Fluidity and Wall Thickness Dynamics` | **NEEDS VERIFICATION** | HOLD | 没有合金、流长、投影面积、样件或试模结果。可写：`Thin-wall feasibility is reviewed in DFM against alloy, geometry and flow distance.` 不保留极限值。 |
| A13 | `283/331 MPa` tensile、`221/269 MPa` yield、`10%/7%` elongation、`82/91 HB` | Zamak `Mechanical Properties Comparison Matrix` | **NEEDS VERIFICATION** | HOLD | 页面称 `verified material characteristics`，但未给标准版本、试样状态、测试条件或来源。核实标准来源后可作为材料参考数据，但不得表述成 AlumCasting 的保证值。 |

补充证据缺口：

- IATF/CNC 页面还公开写有 `Full PPAP Documentation (Level 1-5)`、`Annual capacity exceeding 5 million precision units`、`Hexagon CMM and Zeiss scanning to ensure every batch`。这些内容同样没有证书、设备台账、校准或产能记录支持，应一并 HOLD。
- AlumCasting 的公开页面是“声明来源”，不是独立证据。本工作区没有 AlumCasting 源仓库、设备清单、证书附件或检测记录。

### 3.2 KingShip 声明

| ID | 原声明 | 文件证据 | 核验状态 | 决策 | 核验结论与可用表述 |
|---|---|---|---|---|---|
| K01 | `20+ years of high pressure die casting expertise` | `content/blog/_index.md:3` | **NEEDS VERIFICATION** | HOLD | 与事实矩阵 C01 相同，缺少成立文件。博客可改成不含年限的 `engineering notes from KingShip's manufacturing and tooling team`。 |
| K02 | `A357`, `AZ91D`, `AM60B` 为 `confirmed` 合金 | `content/cnc-machining/index.md:3,15-18,67,128,193` | **NEEDS VERIFICATION** | HOLD | 仓库页面彼此一致，但没有近期订单、炉次记录、材料证书或工艺记录。核实前不得继续用 `confirmed`。 |
| K03 | `3-axis`, `4-axis`, `5-axis CNC` | `data/homepage/en.yaml:69,247-270`; `content/cnc-machining/index.md:19-27` | **NEEDS VERIFICATION** | HOLD | 照片支持 CNC 车间存在，不能证明轴数。可写 `CNC post-machining is available in-house; machine specifications and axis capability are confirmed for each project.` |
| K04 | `high-speed 5-axis machining centers` | `data/homepage/en.yaml:247-250,362-363` | **NEEDS VERIFICATION** | HOLD | 没有机型、主轴、行程或设备编号证据。核实前删除 `high-speed`。 |
| K05 | `hold critical mating surfaces to ±0.01 mm`; `±0.01 mm can be achieved on defined features` | `data/homepage/en.yaml:92,250`; `content/cnc-machining/index.md:29-30,69,113` | **相互矛盾；NEEDS VERIFICATION** | HOLD | 首页像通用能力，CNC 页已缩为特征级条件，但没有能力研究、CMM 方法或测量不确定度。候选表述：`Tolerance requirements are reviewed per feature, setup and inspection method; feasibility is confirmed during DFM.` 不保留数字。 |
| K06 | `First-article inspection` | `content/cnc-machining/index.md:45-48,156-166` | **NEEDS VERIFICATION** | HOLD | 当前已写明是 `project-specific deliverables`，方向正确；仍缺 FAI 模板、样例和审批流程。模板和责任人确认后再写成可提供交付物。 |
| K07 | `PPAP documentation` | `content/cnc-machining/index.md:47,158-166` | **NEEDS VERIFICATION** | HOLD | 当前已限定为项目级范围，但没有 PPAP 等级、样例或历史批准记录。只可保留“按项目确认”的框架，不能增加覆盖范围。 |
| K08 | `CMM-based dimensional verification` | `content/cnc-machining/index.md:48,123,158-166`; `static/img/cmm-dimensional-inspection-lab.webp` | **部分证实：设备存在；校准与范围 NEEDS VERIFICATION** | REWRITE | 照片可支持现场有 CMM 工位，不能证明型号、行程、精度或校准。候选表述：`Our metrology area includes CMM equipment; model, measuring envelope, accuracy and current calibration are confirmed during supplier qualification.` |

### 3.3 KingShip 能力边界

| 边界 | 当前可确认 | 处置 |
|---|---|---|
| 已经具备的设备/工位 | 照片可见 CNC 车间、CMM、X-ray、泄漏检测和压铸现场 | 只能描述设备类型或工位存在，不写数量、吨位、精度或产能 |
| 合作供应商服务 | 当前仓库没有合作供应商清单 | 不得把任何未知能力自动写成 KingShip 自有或合作能力 |
| 已完成项目 | 当前仓库没有可核验的项目记录、客户批准或脱敏案例 | 不以“已交付”“已通过”“首次成功”作营销证据 |
| 尚未确认的能力 | CNC 轴数、高速加工、合金清单、±0.01 mm、FAI、PPAP、批产覆盖 | 保持 HOLD，直到取得工程/质量签字证据 |

## 4. 四个页面最终整改方案

### 4.1 AlumCasting Automotive

**URL：** https://alumcasting.com/automotive-die-casting-parts/  
**优先级：** P0  
**GSC：** 1,393 impressions，0 clicks，CTR 0%，平均排名 50.14

#### 当前问题

| ID | 问题与证据 | 决策 | 建议 |
|---|---|---|---|
| P-A01 | 页面正文多次出现 `(page deferred — not in Batch 1)`，位于应用链接和 RFQ 说明附近 | REMOVE | 删除所有内部工作流文字；先验证链接目标，再保留自然链接或改成普通技术描述。 |
| P-A02 | Title 为 `Automotive Aluminum Die Casting Parts Manufacturer&#124; Alumcasting`，缺少空格，H1 与 Title 完全相同 | REWRITE | 将 Title 与 H1 分开，保持稳定 URL。 |
| P-A03 | Meta Description 244 字符，堆叠认证、吨位、CNC 数量、X-Ray、CMM 和 CTA | REWRITE | 缩短到约 150 字符，优先描述零件类型、DFM 输入和 RFQ。 |
| P-A04 | 首屏、Production Scale、底部 CTA 把 Tier-1、400T–5000T、400+ CNC、40,000㎡、21 years、T0 15–20 天、Full X-Ray 等写成确定能力 | HOLD | 未取得业务证据前删除数字或移入待核验内容池。其中零缺陷、近零孔隙等绝对承诺先按 A07/A08 移除。 |
| P-A05 | FAQPage Schema 同步输出 `near-zero porosity`、`zero fluid leakage`、`±0.01mm` 等未核实内容 | HOLD | 先修可见正文和 FAQ，再单独评估 Schema；不得只改可见文案而继续输出旧 JSON-LD。 |

#### 建议元数据

- **Title（51 字符）：** `Automotive Aluminum Die Casting Parts | AlumCasting`
- **Meta Description（149 字符）：** `Automotive aluminum die-casting parts for powertrain, EV, chassis and thermal applications. Review DFM inputs, inspection scope and RFQ requirements.`
- **H1：** `Automotive Aluminum Die Casting Parts`

#### 建议正文结构

1. `Automotive parts we support`：powertrain、EV、chassis、thermal 四类各 1–2 句，不复制专门页面全文。
2. `Castability and DFM inputs`：材料、3D/2D 图纸、GD&T、壁厚、体积、关键密封面。
3. `Manufacturing and inspection scope`：只写已批准的事实；检验方法和抽样按项目确认。
4. `Supplier qualification package`：证书、PPAP 等级、检验文件、质量记录在 RFQ 阶段确认。
5. `RFQ process`：提交内容、工程评审、报价所需信息、联系人。
6. FAQ 控制在 5–7 个问题，每个回答只对应一个可核实边界。

#### 内链与转化

- `/aluminum-die-casting/`
- `/die-cast-aluminum-electric-motor-housing-suppliers/`
- `/custom-aluminum-die-casting-for-ev-powertrain-components/`
- `/liquid-cooled-aluminum-cooling-plates-for-electric-vehicles/`
- `/porosity-control-x-ray-inspection-castings/`
- `/contact/`

RFQ CTA 应直接写 `Send automotive drawing / review RFQ requirements`，不能继续显示 `contact page deferred`。

**实施风险：** 删除未证实参数可能造成短期关键词覆盖下降，但继续保留会扩大认证、质量和交期承诺风险。排名 50.14，首要问题不是 snippet，而是可信度、主题聚焦和页面完成度。

### 4.2 AlumCasting Zamak

**URL：** https://alumcasting.com/zamak-3-vs-zamak-5-die-casting-selection-guide/  
**优先级：** P0/P1  
**GSC：** 540 impressions，3 clicks，CTR 0.56%，平均排名 10.16

#### 当前问题

| ID | 问题与证据 | 决策 | 建议 |
|---|---|---|---|
| P-Z01 | Meta Description 为 160 字符的文章截断摘要，以 `Zamak 3 vs. ...` 结束 | REWRITE | 改为直接比较意图，不使用未完成句子。 |
| P-Z02 | `zamak 3`、`zamak 5`、`zamak 5 material properties` 已处于 7–9 位，但首屏没有单合金快速答案 | REWRITE | 增加 `Choose Zamak 3 if...`、`Choose Zamak 5 if...` 和快速对比模块。 |
| P-Z03 | 属性表被称作 `verified material characteristics`，但没有标准版本、测试条件或来源；IATF、X-Ray、产能和作者声明与材料数据混排 | HOLD | 分离“材料参考数据”和“项目检验能力”；每一个机械性能值及其标准来源由工程/质量确认后才能保留。 |
| P-Z04 | `zero-defect compliance`、`for every batch` X-Ray、`10,000+ volume runs`、`0.50mm` 被写成已实现能力 | REMOVE | 绝对质量、全批检测和未定义产能声明移除；数值能力在证据充分前不得以其他数字替代。 |
| P-Z05 | Article Schema 的 `author` 为空；页面写 `Hank Zhang — 20+ Years On-Site Foundry Experience` | HOLD | 核验姓名、职位、实际经验、审稿人和可公开作者页后再配置 Schema；否则删除年限，使用可核实团队署名。 |

#### 建议元数据

- **Title（48 字符）：** `Zamak 3 vs Zamak 5: Properties, Uses & Selection`
- **Meta Description（133 字符）：** `Compare Zamak 3 and Zamak 5 by copper content, strength, ductility, dimensional stability, casting behavior and typical applications.`
- **H1：** `Zamak 3 vs Zamak 5: Zinc Die Casting Alloy Selection`

#### 建议正文结构

1. H1 后增加 2–3 句直接结论：高延展/尺寸稳定优先考虑 Zamak 3；更高强度和耐磨优先评估 Zamak 5，最终由工况与标准确认。
2. `Quick selection table`：alloy、copper content、strength、ductility、dimensional stability、typical use。性能值在来源确认前留空或只显示已核验数据，不猜数。
3. `Zamak 3 properties`、`Zamak 5 properties` 两个独立章节，并设置稳定锚点。
4. `Standards and material data`：列明牌号标准、版本、试样状态、数据来源和适用范围。
5. `DFM and tooling considerations`：沿用现有壁厚、流长、后加工和表面处理技术逻辑，但删除极限值承诺。
6. `Inspection scope`：明确检验项目、方法和抽样是项目级。
7. `RFQ inputs`：图纸、体积、表面处理、检验文件和目标应用。

建议锚点：`#quick-selection`、`#zamak-3-properties`、`#zamak-5-properties`、`#material-data`、`#design-considerations`、`#inspection-scope`、`#rfq`。

#### 内链与转化

- `/zinc-die-casting-services/`
- `/die-casting-tooling/`
- `/surface-finishing-aluminum-magnesium-casting/`
- `/porosity-control-x-ray-inspection-castings/`
- `/contact/`

不新建两个近似重复的 `Zamak 3` 和 `Zamak 5` 页面，先在现有 URL 内用直接答案块和锚点承接查询。

**实施风险：** Metadata 和直接答案属于低到中风险；材料数据、作者、IATF 和全检声明属于高事实风险。预计 CTR 的改善更可能来自 7–10 位查询，而不是要求页面迅速进入前三。

### 4.3 KingShip Blog

**URL：** https://kingship.alumcasting.com/blog/  
**优先级：** P1  
**GSC：** 524 impressions，0 clicks，CTR 0%，平均排名 15.54

#### 当前问题

| ID | 问题与证据 | 决策 | 建议 |
|---|---|---|---|
| P-B01 | `content/blog/_index.md:3` 写 `20+ years` | HOLD | 改用不含年限的团队说明；管理层确认成立年份前不保留。 |
| P-B02 | GSC 显示 `/blog/` 承接 flange、cold forming、investment casting、engineering consultation 等错配查询 | REWRITE | 将入口意图限定为 die casting、CNC、tooling、quality 和 RFQ engineering；不追逐明显不相关工艺。 |
| P-B03 | 线上正文约 184 词，只有文章卡片标题；`content/blog/_index.md:13-15` 仅有两句介绍 | REWRITE | 增加 80–120 词定位、专题分区、卡片摘要和 RFQ 导航。 |
| P-B04 | 10 张卡片图片缺 Alt；`layouts/partials/article-link/card.html:63-70` 使用 `role="presentation"`，但没有 `alt` | REWRITE | 装饰图明确写 `alt=""`；承载文章主题的图片写具体 Alt。不要直接重复 H2。 |
| P-B05 | 线上 Schema 仅有 BreadcrumbList；`layouts/partials/schema.html:61-65` 对列表页 fallback 仅输出面包屑 | HOLD | 本轮不改 Schema。后续内容稳定后评估 CollectionPage、ItemList 和 Article 关系，输出必须与可见文章列表一致。 |

#### 建议元数据

- **Title（59 字符）：** `Die Casting & CNC Manufacturing Engineering Blog | KingShip`
- **Meta Description（132 字符）：** `Technical guides for aluminum and magnesium die casting, tooling, porosity control, CNC post-machining, inspection and RFQ planning.`
- **H1：** `Die Casting & CNC Engineering Resources`

#### 建议专题分区

1. `Design & DFM`
2. `Die Casting Tooling`
3. `Porosity & Inspection`
4. `Magnesium & Semi-Solid Casting`
5. `CNC Post-Machining`
6. `Supplier Qualification & RFQ`

每个文章卡片可显示：

- 所属专题；
- 1–2 句摘要；
- 阅读时间；
- 若已有真实发布日期和更新时间，则显示日期；
- 指向 `/contact/` 的统一次级 CTA。

#### 内链与转化

- `/aluminum-die-casting/`
- `/magnesium-die-casting/`
- `/semi-solid-rheocasting/`
- `/tooling/`
- `/cnc-machining/`
- `/certifications/`
- `/contact/`

**实施风险：** 列表模板和卡片摘要会影响展示，不改 URL。错配查询若来自历史索引，单次结构修改未必立即消除，应在发布后 4–8 周结合 URL Inspection、query-page 数据和抓取变化复核。

### 4.4 KingShip CNC

**URL：** https://kingship.alumcasting.com/cnc-machining/  
**优先级：** P1  
**GSC：** 128 impressions，1 click，CTR 0.78%，平均排名 53.46

#### 当前问题

| ID | 问题与证据 | 决策 | 建议 |
|---|---|---|---|
| P-C01 | Title 70 字符、Meta Description 167 字符，均超过常见 SERP 展示长度 | REWRITE | 缩短 Title/Meta，并保留 cast-to-CNC 技术差异。 |
| P-C02 | H1 后直接进入长文技术论证，没有在首屏回答 service/provider/supplier 意图 | REWRITE | 增加 2–3 句服务范围、RFQ 输入、DFM 和检验范围说明。 |
| P-C03 | A357/AZ91D/AM60B、3/4/5-axis、high-speed、±0.01 mm、FAI、PPAP 仍缺证据 | HOLD | 保留谨慎、项目级的正文框架；在证据到位前删除具体设备、合金 `confirmed`、公差数字和交付承诺。 |
| P-C04 | KingShip CNC 与 AlumCasting CNC 页面存在同一 supplier 查询的潜在竞争 | REWRITE | KingShip 聚焦 cast-to-CNC 工程接口：allowance、datum、fixture、machining strategy、inspection；AlumCasting 聚焦更广的 CNC 制造与设备概览。 |
| P-C05 | `content/cnc-machining/index.md:57-64` 的 3 个核心技术资源均指向 AlumCasting | REWRITE | 保留 1 个真正补充性链接，其余以 KingShip 站内锚点或后续自有文章承接，不复制全文、不新建近似服务页。 |

#### 建议元数据

- **Title（58 字符，含品牌）：** `CNC Machining for Aluminum & Magnesium Castings | KingShip`
- **Meta Description（140 字符）：** `CNC post-machining for die-cast aluminum and magnesium parts: machining allowance, datum strategy, inspection planning and RFQ requirements.`
- **H1：** `CNC Machining for Aluminum and Magnesium Castings`

#### 建议首屏服务介绍

> KingShip reviews CNC post-machining projects for die-cast components. Submit the STEP/IGES model, 2D drawing with GD&T, material and condition, annual volume and inspection requirements so the machining allowance, datum strategy and quotation can be reviewed.

该段不承诺具体轴数、设备数量、公差或认证范围。

#### 建议正文模块

1. `CNC machining scope`：milling、drilling、turning、EDM/wire cutting 作为流程方向，设备具体范围 NEEDS VERIFICATION。
2. `Drawings and RFQ inputs`：提前展示 3D、2D、GD&T、基准、毛坯/成品图、体积和检验要求。
3. `Allowance and datum strategy`：保留现有高质量技术内容。
4. `Tolerance planning`：强调特征、setup 和测量方法；不公开 ±0.01 mm，直到能力证据获批。
5. `Casting-to-CNC integration`：说明 DFM 反馈如何回到模具、浇口、允许量和夹具。
6. `Inspection and documentation`：FAI、PPAP、CMM 按项目确认；CMM 设备事实须与证书页保持一致。
7. `Surface finish and deburring`：保留“图纸定义”的边界。
8. `Applications and component considerations`：保留现有对 housing、gearbox cover、EV housing、bracket、rotor 的工程说明。
9. `FAQ`：增加 `Can you machine die-cast parts?`、`What files are needed?`、`How is tolerance agreed?`
10. `RFQ`：直连 `/contact/`。

#### 内链与转化

- `/aluminum-die-casting/`
- `/magnesium-die-casting/`
- `/tooling/`
- `/certifications/`
- `/contact/`

**实施风险：** 首屏增加商业信息属于低风险；删除具体设备或精度数字可能减少部分长尾匹配，但可降低错误能力承诺。当前平均排名 53.46，仅修改 Title/Meta 不足以解决排名，必须同时补强供应商意图、证据和内链。

## 5. KEEP / REWRITE / HOLD / REMOVE 统计

### 5.1 21 项核心声明

| 分类 | AlumCasting | KingShip | 合计 |
|---|---:|---:|---:|
| KEEP | 0 | 0 | **0** |
| REWRITE | 1 | 1 | **2** |
| HOLD | 10 | 7 | **17** |
| REMOVE | 2 | 0 | **2** |
| **合计** | **13** | **8** | **21** |

“KEEP 0”表示没有一项原有争议声明可以原样保留，不代表证书或技术内容没有可保留部分。以下内容本身应保留：

- KingShip 证书文件中的持证主体、证书号、范围和印刷日期。
- KingShip CNC 页对 cast skin、machining allowance、datum、GD&T、setup 和项目级检验的技术解释。
- AlumCasting Zamak 页“铜含量影响强度与延性”的基本比较框架，前提是性能值和标准来源另行核验。
- 四个页面现有的稳定 URL、自引用 Canonical、单一 H1 和基本可爬取结构。

### 5.2 20 项页面问题

| 分类 | Automotive | Zamak | Blog | CNC | 合计 |
|---|---:|---:|---:|---:|---:|
| KEEP | 0 | 0 | 0 | 0 | **0** |
| REWRITE | 2 | 2 | 3 | 4 | **11** |
| HOLD | 2 | 2 | 2 | 1 | **7** |
| REMOVE | 1 | 1 | 0 | 0 | **2** |
| **合计** | **5** | **5** | **5** | **5** | **20** |

### 5.3 综合统计

| 分类 | 数量 |
|---|---:|
| KEEP | **0** |
| REWRITE | **13** |
| HOLD | **24** |
| REMOVE | **4** |
| **合计** | **41** |

## 6. P0 / P1 / P2 实施顺序

### P0：先停止错误承诺和未完成页面

1. 清理 AlumCasting Automotive 的 `(page deferred — not in Batch 1)`，同时全站检查相同工作流文字。
2. 删除 AlumCasting Automotive 和 Zamak 中 `zero-defect`、`near-zero porosity`、`zero surface blistering`、`zero fluid leakage` 等绝对承诺。
3. 暂时撤下或隐藏 AlumCasting 的 Tier-1、400T–5000T、400+ CNC、40,000㎡、T0 15–20 天、10,000+、0.50mm 和每批全检数字，直到取得证据。
4. 由质量部确认 AlumCasting 页面能否引用 KingShip（Dongguan）的 IATF 证书、准确范围与 Clause 8.3 排除；未批准前改为供应商资格阶段提供证书。
5. 暂停 KingShip CNC 页的 `confirmed` 合金、3/4/5-axis、high-speed 和 ±0.01 mm 确定性宣传，待设备台账和能力研究确认。
6. 将四个页面的 RFQ CTA 指向真实、可用的 `/contact/` 或询盘入口，移除任何 `deferred` 链接文案。

### P1：提升搜索意图与转化路径

1. 发布 AlumCasting Automotive 新 Title、Meta、H1 和精简内容结构。
2. 重写 Zamak Meta，并在现有 URL 上增加直接选择答案、单合金锚点和材料来源区。
3. 重构 KingShip Blog 为六大专题、卡片摘要和工程/RFQ 导航。
4. 修复 KingShip Blog 10 张卡片图片 Alt。
5. 更新 KingShip CNC Title、Meta、H1、首屏服务和 RFQ 模块。
6. 调整 KingShip CNC 与 AlumCasting CNC 的关键词分工和跨站链接。
7. 同步检查英文及其他语言的相同声明，避免英文已改、翻译页仍保留旧承诺。

### P2：完善 Schema、作者和持续监测

1. 内容与事实稳定后再处理 AlumCasting Automotive FAQPage 和 Zamak Article Schema。
2. Blog 内容稳定后评估 CollectionPage + ItemList；不得把旧卡片或未发布文章写入 Schema。
3. 核验 Zamak 作者身份、经验、审稿关系和作者页，再补 Article author。
4. 持续监测四个页面的 query-page 组合、CTR、平均排名和 RFQ 路径。
5. 4–8 周后复核错配查询是否减少；不将短期波动直接归因于单一 Title 修改。

## 7. 最高风险声明

1. **Zero-defect / zero leakage / zero blistering：** 无验收数据，属于绝对保证。
2. **Near-zero porosity / pore-free：** 缺少临界区域、检测方法和验收等级。
3. **Tier-1 certified：** 同页又写 Tier 1-Level，且无客户批准或审核记录。
4. **IATF complete compliance：** 未列持证主体、范围和 Clause 8.3 排除。
5. **Every batch / full X-Ray：** 未定义抽样、尺寸范围、校准和记录。
6. **400T–5000T：** 与 160T–5000T 公开口径冲突，且无设备台账。
7. **400+ CNC stations：** 无设备数量证明。
8. **T0 15–20 days：** 无排期条件和项目记录。
9. **0.50mm wall：** 无合金、几何、流长和试模证据。
10. **±0.01 mm：** 首页通用表述与 CNC 页项目级限定冲突，且无能力研究。

## 8. 需要企业确认的问题

### 管理层 / 法务 / 市场

1. AlumCasting 与 `Kingship (Dongguan) Precision Manufacturing Co., Ltd.` 的品牌和法律关系应以何种公开口径表达？
2. AlumCasting 页面是否获准引用同一法律实体的 ISO 9001 和 IATF 16949 证书？
3. `Tier-1 certified` 是否指正式客户批准、供应商代码、审核结果或仅指服务经验？
4. `21 years`、`20+ years` 和 `Since 2003` 适用于法律实体、品牌、创始团队还是工厂？
5. 40,000㎡ 是建筑面积、生产面积、租赁面积还是园区面积？
6. 是否允许公开设备清单、最大模具尺寸、年产能和典型项目参数？

### 工程 / 生产

1. AlumCasting 和 KingShip 分别有哪些压铸机、CNC、X-ray、CMM 和泄漏检测设备？请提供逐台清单与可用状态。
2. `400T–5000T`、`160T–5000T`、`400T–3000T`、`160T–2250T` 分别对应哪个实体、工艺、材料和设备组？
3. CNC 设备是否有 3、4、5 轴和高速加工能力？具体机型、行程、转台和最大工件尺寸是什么？
4. A357、A356、ADC12、A380、A360、AZ91D、AM60B 中哪些是常规生产、试制或项目专用合金？
5. ±0.01 mm、0.50mm 壁厚和 1.0–1.2mm 壁厚分别对应哪些特征、材料、流长和检验方法？
6. T0 15–20 天和 10,000+ volume runs 的实际定义、前提和记录是什么？

### 质量部门

1. ISO 9001、IATF 16949、ISO 14001、ISO 13485 证书的当前监督审核状态和可对外声明范围是什么？
2. AlumCasting 页面可使用哪一个持证主体、证书号、范围和有效期？
3. 是否存在 Tier-1 客户批准、供应商审核报告或批准供应商名单可作为证据？
4. `zero-defect` 是否有 PPM、批次合格率、客户验收标准或历史质量数据支持？
5. 哪些项目执行全检、抽检、X-ray、CMM、泄漏/压力测试？抽样表、校准记录和报告模板在哪里？
6. Zamak 3/5 的机械性能数据来自哪个标准、版本、试样状态和测试条件？
7. KingShip 的 FAI、PPAP 和 CMM 是否有批准模板、样例项目和设备校准记录？

### 销售 / 客户项目

1. RFQ 响应、工程评审和正式报价分别需要什么条件？
2. AlumCasting Automotive 与 AlumCasting Zamak 的 RFQ 应由哪个联系人或表单承接？
3. `Tier-1` 对客户而言具体代表什么，销售是否可以提供证明文件？
4. 10,000+ volume runs 指总产量、年度产量、单批次还是项目历史？
5. Zamak 作者 Hank Zhang 的姓名、职位、经验年限和审稿责任是否可以公开核验？

## 9. 修改风险与验证方法

| 修改 | 主要风险 | 实施后验证 |
|---|---|---|
| 删除占位文字 | 删除后可能丢失原目标链接 | 逐条打开目标 URL；检查 200/301；确认正文仍有自然内链 |
| 删除绝对质量承诺 | 短期可能减少部分营销关键词 | 全站搜索 `zero-defect`、`near-zero`、`zero leakage`、`every batch`；检查 FAQ 与 JSON-LD 同步 |
| HOLD 设备/面积/产能数字 | 页面信息变少，可能影响差异化 | 将待核验内容集中到内部证据池；保留工艺、DFM、检验计划等非数字价值 |
| 修改 Title / Meta | CTR 或展示可能波动 | 发布后 28/56 天比较同页 query、CTR 和平均排名；确认 Google 展示完整标题 |
| 重构 Blog | 卡片布局、分页和历史内链可能受影响 | Hugo build；检查文章数、URL、Canonical、RSS、Sitemap 和分页 |
| 修复图片 Alt | 描述错误可能影响无障碍和图片语义 | HTML 检查每张图片是否恰有一个 Alt；装饰图使用空 Alt |
| 调整 CNC 首屏 | 可能降低纯技术读者停留或改变商业意图 | 检查 supplier/service/provider 查询；监测询盘表单到达率 |
| 认证范围收窄 | 可能被销售认为“弱化能力” | 质量部确认证书；页面只写证书范围，不写泛化 guarantee |
| Schema 后续调整 | 可见内容与 JSON-LD 不一致 | Rich Results Test、Schema 解析、FAQ 可见文本逐项对照 |
| 多语言同步 | 翻译页可能继续输出旧数字 | 按风险词搜索所有语言；逐语种对比 Title、Meta、H1、CTA 和 Schema |

## 10. 本轮结论

- 核验核心声明：**21 项**
- 页面问题：**20 项**
- KEEP：**0**
- REWRITE：**13**
- HOLD：**24**
- REMOVE：**4**
- 诊断页面：**4 个**
- 最适合先实施的 3 项：
  1. 清理 AlumCasting Automotive 的占位文字及绝对质量承诺。
  2. 建立并审批 AlumCasting 的认证、设备、面积、产能和检测证据包。
  3. 重写 KingShip Blog 入口与 Zamak 直接答案模块，分别解决错配查询和低 CTR 机会。

本报告只提供整改决策。所有 HOLD 项在证据到期或业务确认后应重新分类；不得为了维持页面完整度而把待核实能力改写成更具体的数字或保证。
