# AlumCasting Automotive 第一批 SEO 修改预览

**预览日期：** 2026-11-22  
**目标 URL：** https://alumcasting.com/automotive-die-casting-parts/  
**唯一目标源文件：** `D:\Codex-SEO\alumcasting\content\automotive-die-casting-parts.md`  
**执行状态：** 仅生成修改预览，未修改 AlumCasting 源文件，未修改 URL、Canonical、Redirect、Sitemap 或 Schema，未 commit、push 或 deploy。

## 1. 执行摘要

目标页面对应本地 Hugo 源文件：

`D:\Codex-SEO\alumcasting\content\automotive-die-casting-parts.md`

当前页面存在四类问题：

1. Title、Meta Description 和首屏 CTA 使用 Tier-1、400T–5000T、400+ CNC 等未核验能力。
2. 正文与 FAQ 多次使用 `zero-defect`、`near-zero porosity`、`guarantees safety`、`zero blistering` 等绝对承诺。
3. 页面保留多组缺少台账或检验记录的数字：21 years、400+ CNC、40,000㎡、24 hours、T0 15–20 days、±0.01 mm。
4. 本地工作区已经删除 `(page deferred — not in Batch 1)`，但该改动尚未发布；线上页面仍显示旧占位文字。

建议分两个执行门槛：

- **阶段 A：** 可只修改目标 Markdown 文件中的 Title、Meta、CTA、非 FAQ 正文、图片 Alt 和页面级信任区块。
- **阶段 B：** 修改 FAQ frontmatter 与可见 FAQ。由于 frontmatter FAQ 直接生成 FAQPage JSON-LD，这会改变结构化数据输出，必须单独确认后再执行。

## 2. 源文件与渲染链

| 项目 | 证据 | 说明 |
|---|---|---|
| 内容源文件 | `D:\Codex-SEO\alumcasting\content\automotive-die-casting-parts.md:1-99` | 当前工作区版本 |
| 页面路由 | `...\automotive-die-casting-parts.md:5` | `/automotive-die-casting-parts/` |
| Canonical | `...\automotive-die-casting-parts.md:4` | `https://alumcasting.com/automotive-die-casting-parts/` |
| Title / H1 | `layouts\_default\single.html:6,13`; `layouts\partials\head.html:10` | `<title>` 与页面 H1 共用 `.Title`；正文中的 H1 会被模板移除 |
| Meta Description | `...\automotive-die-casting-parts.md:3`; `layouts\partials\head.html:14` | 同时进入普通 Meta、Open Graph、Twitter 和 WebPage Schema description |
| FAQ Schema | `...\automotive-die-casting-parts.md:19-27`; `layouts\partials\seo-jsonld.html:42-62` | frontmatter FAQ 自动生成 FAQPage JSON-LD |
| 图片 Alt | `...\automotive-die-casting-parts.md:56`; `layouts\_default\_markup\render-image.html:7-9` | 页面仅 1 张正文图片，当前已有 Alt，但描述未经证实 |
| RFQ 表单 | `...\automotive-die-casting-parts.md:99`; `layouts\shortcodes\formspree.html:23-81` | 真实 Formspree 表单；建议保留 |
| 信任区块 | `...\automotive-die-casting-parts.md:97`; `layouts\shortcodes\quality-trust.html:7-16` | 当前输出 IATF、ISO、PPAP、X-Ray、CMM 以及“Every project”总括 |

### 2.1 占位文字状态

当前本地源文件已不包含：

- `(page deferred — not in Batch 1)`
- `(contact page deferred — not in Batch 1)`

与 Git HEAD 的差异只包括这些占位文字删除。线上页面仍是旧版本，因此在重新构建和发布前，公开页会继续显示占位内容。

本轮不建议再次修改这些位置；应在后续发布前确认现有未提交改动不会被覆盖。

## 3. 当前 SEO 元素

| 元素 | 当前值 | 长度 | 判断 |
|---|---|---:|---|
| Title | `Automotive Aluminum Die Casting Parts Manufacturer\| Alumcasting` | 63 | 关键词相关，但 `Manufacturer\|` 格式错误，品牌后缀使标题凌乱 |
| Meta Description | `Tier-1 certified automotive aluminum die casting service. Equipped with 400T to 5000T heavy-duty HPDC lines, vacuum-assisted low-porosity tech, and 400+ CNC stations. Complete IATF 16949, X-ray, and CMM compliance. Request an expert DFM review!` | 244 | 过长，且堆叠多项未核验能力与认证 |
| H1 | `Automotive Aluminum Die Casting Parts Manufacturer\| Alumcasting` | 63 | 与 Title 完全相同；主体清楚但格式和品牌混入问题严重 |
| 正文源 H1 | `Low-Porosity Aluminum Die Casting for Automotive Parts` | 54 | 模板会移除，不构成线上第二个 H1 |
| 图片 Alt | `High-Integrity Vacuum Assisted Automotive Structural Casting` | 62 | Alt 存在，但照片不能证明 vacuum-assisted 或 high-integrity |

当前 H1 数量为 1，Title 与 H1 均以“Automotive Aluminum Die Casting Parts”为核心，搜索意图匹配方向正确。主要问题是事实范围、格式和 SERP 摘要质量。

## 4. 声明与修改决策

| ID | 当前位置与原文 | 证据状态 | 决策 | 预览处理 |
|---|---|---|---|---|
| A-01 | `automotive-die-casting-parts.md:12,34`：`Tier 1-Level Factory`、global `Tier-1 and OEM suppliers` | NEEDS VERIFICATION：未见客户批准、供应商代码或审核记录 | HOLD | 从可见首屏和 CTA 移除；内部保留待核验，不提供替代客户资质 |
| A-02 | `:38-39`：`400T – 800T`、`1000T – 5000T` | NEEDS VERIFICATION：无逐台设备清单 | HOLD | 从当前页移除；不在预览中写其他吨位范围 |
| A-03 | `:40`：`X-Ray / CT: Zero-Defect Internal Inspection` | 无支持绝对承诺 | REMOVE | 删除；改为项目级检验范围说明 |
| A-04 | `:46`：`We deploy high-efficiency vacuum valves` | NEEDS VERIFICATION：无真空系统配置与项目记录 | HOLD | 不在主文案中写自有真空阀配置 |
| A-05 | `:46`：`ensuring parts meet strict, leak-free pressure sealing requirements` | 无支持绝对结果 | REMOVE | 改为 `pressure-tightness requirements are defined per project` 的流程表述 |
| A-06 | `:50`：`tonnage systems up to 5000T` | NEEDS VERIFICATION：无设备台账 | HOLD | 从当前页移除 |
| A-07 | `:50`：`effectively collapsing micro-shrinkage voids` | 缺少过程验证和检测结果 | REMOVE | 删除结果保证；仅讨论浇口、热平衡、真空辅助和抽样需按项目定义 |
| A-08 | `:54`：`zero surface blistering`、`premium mechanical yield strengths` | 无支持绝对结果 | REMOVE | 删除；T6 可行性改为项目级验证 |
| A-09 | `:56`：`High-Integrity Vacuum Assisted Automotive Structural Casting` | Alt 与图片可见内容不匹配 | REWRITE | 改为照片可直接支持的描述 |
| A-10 | `:62`：`We are fully equipped to serve critical engineering demands` | 泛化能力声明，无设备清单 | REWRITE | 改为说明页面覆盖的典型零件和工程评审内容 |
| A-11 | `:64-67`：电机壳体、动力总成、底盘、热管理零件 | 页面链接和行业应用方向存在；具体生产范围未逐一证明 | REWRITE | 保留零件家族与链接，删除“fully equipped”“precision”等结果性承诺 |
| A-12 | `:19-27,71-85`：FAQ 中 `zero fluid leakage`、`guarantees safety`、`near-zero porosity` | 无支持绝对承诺；FAQ 同时进入 JSON-LD | HOLD | 本次不修改，原因见第 8 节 Schema 约束 |
| A-13 | `:25,81`：`hyper-pure A356 or A360`、合金选择承诺 | 合金应用和项目能力 NEEDS VERIFICATION | HOLD | 本次不修改 FAQ；正文不新增具体合金保证 |
| A-14 | `:27,85`：`strict tolerances of ±0.01mm` | NEEDS VERIFICATION：无特征级能力研究/CMM 方法 | HOLD | 本次不修改 FAQ；正文不新增精度数字 |
| A-15 | `:87-89`：`21 years`、`400+ advanced CNC machining units`、`40,000㎡ production base` | NEEDS VERIFICATION：无成立文件、设备清单或设施统计 | HOLD | 从可见 CTA 段落移除，保留在内部核验池 |
| A-16 | `:91`：`RFQ response within 24 hours` | NEEDS VERIFICATION：无销售 SLA | HOLD | 改为提交资料与 RFQ 流程说明，不承诺响应时长 |
| A-17 | `:92`：`T0 first-article samples delivered in 15-20 days` | NEEDS VERIFICATION：无排期与试模条件 | HOLD | 从可见文案移除 |
| A-18 | `:93`：`Full X-Ray inspections, pressure leak tests, and CMM dimension reports` | NEEDS VERIFICATION：无全检、抽样和报告记录 | HOLD | 改为项目级检验方法和文件范围确认 |
| A-19 | `:97` 对应 `quality-trust` 短代码：`Every AlumCasting project is backed by certified quality systems` | Kingship 证书文件存在，但 AlumCasting 页面引用主体/范围仍需确认；`Every project` 过宽 | REWRITE | 用供应商资格文件说明替换总括短代码 |
| A-20 | `:60`：oil & gas explosion-proof enclosure 内链 | 与 Automotive 主意图相关性弱，GSC 已显示页面主题过宽 | REMOVE | 从当前页删除该段落；目标页 URL 不变 |
| A-21 | `:2-3`：Title 与 Meta | 关键词方向正确，但格式和事实声明不合格 | REWRITE | 使用第 5 节元数据 |
| A-22 | `:12`：`Ready to Source from a Tier 1-Level Factory` | 客户资质未证实 | REWRITE | 改为 `Review Your Automotive RFQ` |
| A-23 | `:4-11,13-18,28-29`：Canonical、URL、robots、页面类型、语言、相关服务、aliases | 技术基础正常 | KEEP | 全部保持不变 |
| A-24 | `:99`：Formspree RFQ shortcode | 表单真实存在，输入字段完整 | KEEP | 原样保留 |

## 5. 建议元数据

| 元素 | 建议值 | 长度 | 与搜索意图的匹配 |
|---|---|---:|---|
| Title | `Automotive Aluminum Die Casting Parts Manufacturer` | 50 | 直接匹配 automotive、aluminum、die casting、parts、manufacturer；无错误分隔符 |
| Meta Description | `Automotive aluminum die-casting parts for powertrain, EV, chassis and thermal applications. Review DFM inputs, inspection scope and RFQ requirements.` | 149 | 覆盖应用意图、工程评审、检验范围和 RFQ，不含未核验数字 |
| H1 | `Automotive Aluminum Die Casting Parts Manufacturer` | 50 | 与 Title 一致，页面主题单一清楚 |

### 5.1 SEO 判断

- 当前 GSC 查询集中在 `automotive die casting supplier`、`aluminum die casting auto parts`、`automotive parts die casting supplier` 和 manufacturer/factory 方向。
- 新 Title 保留核心词和 commercial modifier；`supplier` 意图由首段 `automotive sourcing teams` 与 RFQ 内容承接。
- Meta 从能力堆叠改为“应用 + 采购决策输入”，更符合已产生 1,393 次展示的页面查询组合。
- 页面平均排名 50.14，仅修改 Title/Meta 预计不会显著提升排名；需要同时降低主题漂移、提高正文相关性并保留核心技术说明。

## 6. 计划修改位置

| 位置 | 当前行号 | 计划 |
|---|---:|---|
| `title` | 2 | 替换为新 Title |
| `description` | 3 | 替换为新 Meta Description |
| `cta` | 12 | 移除 Tier 1-Level，改为 RFQ CTA |
| 首屏介绍 | 34 | 重写为工程与采购输入说明 |
| Production Scale | 36-40 | 删除设备范围与 Zero-Defect 声明 |
| Core Low-Porosity Technologies | 42-54 | 改为项目级 DFM、孔隙与热处理考虑 |
| 图片 Alt | 56 | 改为照片可支持的客观描述 |
| Critical Automotive Applications | 58-67 | 保留零件家族和内链，删除无关 oil & gas 段落及泛化能力声明 |
| FAQ frontmatter | 19-27 | **HOLD，不修改** |
| 可见 FAQ | 69-85 | **HOLD，不修改** |
| 底部能力 CTA | 87-95 | 删除年限、设备数量、面积、24 小时、T0 和全检承诺 |
| `quality-trust` | 97 | 从目标页面移除，以内联供应商资格说明替代 |
| `formspree` | 99 | 保持不变 |
| Canonical、URL、robots、Schema 模板 | 4-11; layouts | 不修改 |

## 7. 完整文本对照

### 7.1 修改前：当前本地可见正文

以下为当前工作区文件去掉 frontmatter 后的可见正文。本地已无占位文字；线上仍包含占位文字。

```markdown
# Low-Porosity Aluminum Die Casting for Automotive Parts

High-integrity, air-tight structural solutions tailored for global automotive Tier-1 and OEM suppliers. Engineering density and safety with advanced High-Pressure Die Casting (HPDC) technology.

## Production Scale & Quality Assurance

- **Precision Scale** — 400T – 800T: Small Precision Components
- **Heavy Duty Lines** — 1000T – 5000T: Large Structural Casting
- **Quality Assurance** — X-Ray / CT: Zero-Defect Internal Inspection

## Core Low-Porosity Technologies

### Vacuum-Assisted Die Casting

We deploy high-efficiency vacuum valves to evacuate air from the tool steel mold cavity prior to injection, drastically suppressing gas entrapment and ensuring parts meet strict, leak-free pressure sealing requirements for powertrain applications.

### High-Pressure Intensification

Leveraging heavy-duty tonnage systems up to 5000T, we introduce immense real-time intensification pressure during critical metal solidification phase, effectively collapsing micro-shrinkage voids in complex, thick-walled junctions.

### T6 Heat Treatable Alloys

By keeping internal porosity below critical aerospace and automotive structural benchmarks, our castings safely undergo rigorous T6 solution and aging heat treatments with zero surface blistering, unlocking premium mechanical yield strengths for lightweight components.

![High-Integrity Vacuum Assisted Automotive Structural Casting](/images/semi-solid-casting-ssm-zero-porosity-structural-parts.webp)

## Critical Automotive Applications

We also manufacture explosion proof aluminum enclosures oil gas industry built for hazardous and oil & gas environments.

We are fully equipped to serve critical engineering demands across key vehicle systems, delivering optimized performance and weight reduction:

- **E-Mobility Architecture:** Precision electric motor housings, intricate inverter end-shields, and structurally dense EV battery tray brackets. [die cast aluminum electric motor housing suppliers](/die-cast-aluminum-electric-motor-housing-suppliers/)
- **Powertrain Integrity:** Air-tight gearbox casings, structural oil pans, timing chain covers, and robust engine mounting brackets. [custom aluminum die casting for ev powertrain components](/custom-aluminum-die-casting-for-ev-powertrain-components/)
- **Chassis & Suspension:** High-ductility sub-frames, safety-critical steering knuckles, crossmembers, and control arms.
- **Thermal Management:** Ultra-thin fin density electronic heat sinks, liquid-cooling cooling plates, and rugged ECU protective enclosures. [liquid cooled aluminum cooling plates for electric vehicles](/liquid-cooled-aluminum-cooling-plates-for-electric-vehicles/)

## Technical FAQ: Automotive Die Casting

### Why is low-porosity critical for automotive die-cast parts?

Automotive components, especially those used in fluid systems, suspension paths, and EV battery structures, demand uncompromising structural toughness and zero fluid leakage. Internal defects or micro-voids act as stress-concentration points that lead to mechanical failure under cyclic dynamic fatigue or pressure leaks. Low-porosity manufacturing guarantees safety and structural long-term reliability.

### How does Alumcasting achieve near-zero porosity in aluminum casting?

Our approach targets both gas and shrinkage porosity. We apply state-of-the-art multi-stage rotor degassing on molten alloys, execute precise real-time tool thermal balance using cooling controllers, and employ high-vacuum extraction. Solidification is carefully managed under heavy hydraulic intensifications to pack metal tightly into the cavity.

### Which aluminum alloys are best for automotive low-porosity parts?

For high-fluidity commercial applications like complex housing panels, A380 and ADC12 remain the baseline standard. However, when a project demands extreme elongation, superior impact resistance, or structural post-casting T6 processing, we transition to hyper-pure A356 or A360 silicon-magnesium structural alloys.

### Can low-porosity cast parts be CNC machined?

Yes. Low-porosity is paramount for extensive post-casting CNC machining. If a raw casting contains hidden sub-surface gas pockets, machining cuts will expose these voids, creating "pitting" that destroys surface finishes and O-ring seal pathways. Our process ensures uniform density, allowing precision machining down to strict tolerances of ±0.01mm.

## Ready to Source from a Tier 1-Level Factory in China?

With 21 years of specialized manufacturing expertise, 400+ advanced CNC machining units, and a modern 40,000㎡ production base in Dongguan, Alumcasting is your engineering-driven partner for safety-critical automotive parts. We speak your technical language and streamline your global supply chain footprint. Explore our full [manufacturing capabilities](/manufacturing-capabilities/) spanning casting scale, CNC machining, and inspection.

- ⚡ **Rapid Quoting:** Technical feasibility feedback & RFQ response within 24 hours.
- 🛠️ **Prototyping Speed:** Precision T0 first-article samples delivered in 15-20 days.
- 🔍 **Quality Assurance:** Full X-Ray inspections, pressure leak tests, and CMM dimension reports.

The RFQ form is submitted on the [contact page](/contact/).

## Quality & Engineering Assurance

Every AlumCasting project is backed by certified quality systems and in-house verification:

- IATF 16949 — Automotive quality management
- ISO 9001 — Certified quality system
- PPAP Support — Production part approval
- X-Ray Inspection — Internal porosity verification
- Porosity Control — Structural reliability
- CMM Dimensional — Precision measurement

Have a drawing or technical specification? Please email your drawing, 3D model, or technical specification to hank@alumcasting.com. Include your company name or enquiry subject so we can match the files to your RFQ.

We'll review your enquiry and get back to you as soon as possible. Your details are used only to evaluate and reply to your inquiry.
```

### 7.2 修改后：阶段 A 完整可见正文预览

阶段 A 只修改目标 Markdown 文件的 Title、Meta、CTA、非 FAQ 正文、图片 Alt 和目标页信任区块。FAQ 与 Formspree 保持不变，以避免本轮改变 JSON-LD 与表单配置。

```markdown
## Automotive Aluminum Die Casting Parts for Engineering and Sourcing Teams

Use this page to evaluate aluminum high-pressure die-casting parts for automotive programs. It covers common component families, DFM inputs, porosity-sensitive applications, inspection planning and the information needed for a comparable RFQ.

## Automotive Component Families

Automotive die-casting projects commonly involve several part families. Each one requires the drawing, material, volume and inspection requirements to be reviewed together.

- **E-Mobility:** Motor housings, inverter housings and battery-tray brackets require coordinated review of wall sections, sealing interfaces, mounting datums and machining access. [Explore die-cast motor housings](/die-cast-aluminum-electric-motor-housing-suppliers/).
- **Powertrain:** Gearbox housings, oil pans, covers and mounting brackets require clear definition of sealing faces, flatness, bore position and pressure-tightness requirements. [Review EV powertrain die casting](/custom-aluminum-die-casting-for-ev-powertrain-components/).
- **Chassis and Suspension:** Subframes, steering components, crossmembers and control arms require a project-specific review of structural requirements, load paths, wall thickness and inspection planning.
- **Thermal Management:** Heat sinks, cooling plates and electronic enclosures require early agreement on fin geometry, flatness, sealing faces and post-machining access. [Review liquid-cooled cooling plates](/liquid-cooled-aluminum-cooling-plates-for-electric-vehicles/).

## DFM Review for Automotive Die-Casting Projects

A useful DFM review should begin with the finished-part requirements rather than a machine specification. Send the 3D model, 2D drawing and the functional features that control assembly, sealing, fatigue or pressure tightness.

The review should identify casting access, parting-line position, draft, wall thickness, ejector locations, machining allowance, datum strategy and inspection access. Where porosity or leak-tightness is critical, the gating concept, thermal balance, vacuum-assistance option, heat-treatment route and acceptance criteria should be reviewed together.

## Porosity, Pressure-Tightness and Heat Treatment

For porosity-sensitive automotive parts, define the critical regions, inspection method, sampling frequency and acceptance level before production. A drawing requirement such as "low porosity" is not sufficient without a method and acceptance criterion.

Where pressure or leak-tightness is required, the test method, fixture, pressure or vacuum range, stabilization time and acceptance limit should be agreed during project review. Where T6 heat treatment is considered, the casting route and inspection plan must support the heat-treatment requirements for that specific part.

![Ribbed aluminum die-cast housing with machined mounting features on a workshop table](/images/semi-solid-casting-ssm-zero-porosity-structural-parts.webp)

## Inspection and Documentation Scope

Inspection requirements are project-specific. At RFQ, state which characteristics need dimensional verification, X-ray, leak or pressure testing, material documentation or first-article review.

The applicable inspection method, sampling plan, acceptance criteria, report format and PPAP level should be agreed before quotation or production approval. No inspection method is assumed to apply to every part.

## Supplier Qualification and Quality-System Documents

AlumCasting is operated by Kingship (Dongguan) Precision Manufacturing Co., Ltd. For supplier qualification, request the current management-system certificate copies, certificate holder, applicable scope and validity, together with the quality documents required by the project.

[View the company and manufacturing background](/about-alumcasting-die-casting-expert/) or [review manufacturing capabilities](/manufacturing-capabilities/). Certificate scope and project-specific documentation are confirmed directly with the quality team.

## What to Include in Your Automotive RFQ

Provide the information needed to review casting feasibility, tooling and post-machining in one pass:

- STEP or IGES 3D model
- 2D drawing with GD&T and datum requirements
- Confirmed alloy and material condition
- Annual volume and expected lot size
- Critical wall sections, sealing faces and pressure-tightness requirements
- Target surface finish and post-casting treatment
- Required inspection method and documentation level
- Prototype, bridge-tooling or production-tooling stage

Submit the RFQ form below or email the drawing package to [hank@alumcasting.com](mailto:hank@alumcasting.com). Include your company name or part number so the files can be matched to the enquiry.

## Technical FAQ: Automotive Die Casting

### Why is low-porosity critical for automotive die-cast parts?

Automotive components, especially those used in fluid systems, suspension paths, and EV battery structures, demand uncompromising structural toughness and zero fluid leakage. Internal defects or micro-voids act as stress-concentration points that lead to mechanical failure under cyclic dynamic fatigue or pressure leaks. Low-porosity manufacturing guarantees safety and structural long-term reliability.

### How does Alumcasting achieve near-zero porosity in aluminum casting?

Our approach targets both gas and shrinkage porosity. We apply state-of-the-art multi-stage rotor degassing on molten alloys, execute precise real-time tool thermal balance using cooling controllers, and employ high-vacuum extraction. Solidification is carefully managed under heavy hydraulic intensifications to pack metal tightly into the cavity.

### Which aluminum alloys are best for automotive low-porosity parts?

For high-fluidity commercial applications like complex housing panels, A380 and ADC12 remain the baseline standard. However, when a project demands extreme elongation, superior impact resistance, or structural post-casting T6 processing, we transition to hyper-pure A356 or A360 silicon-magnesium structural alloys.

### Can low-porosity cast parts be CNC machined?

Yes. Low-porosity is paramount for extensive post-casting CNC machining. If a raw casting contains hidden sub-surface gas pockets, machining cuts will expose these voids, creating "pitting" that destroys surface finishes and O-ring seal pathways. Our process ensures uniform density, allowing precision machining down to strict tolerances of ±0.01mm.

{{< formspree >}}
```

## 8. FAQ 与 Schema 联动

### 8.1 硬约束

`content\automotive-die-casting-parts.md:19-27` 的 FAQ frontmatter 被 `layouts\partials\seo-jsonld.html:42-62` 自动输出为 FAQPage JSON-LD。

因此：

- 只修改可见 FAQ 会造成可见内容与 JSON-LD 不一致。
- 只修改 frontmatter FAQ 会造成 Schema 先更新、页面正文仍旧。
- 同时修改两者会改变 JSON-LD 的 Question 和 acceptedAnswer 文本。

本次指令禁止修改 Schema，因此 FAQ 不纳入阶段 A 的直接实施补丁。

### 8.2 后续建议的 FAQ 安全答案

这些内容仅作为阶段 B 审批预览，本轮不实施：

| 问题 | 建议回答 |
|---|---|
| What should be defined for a porosity-sensitive automotive casting? | `Define critical regions, inspection method, sampling frequency, acceptance criteria and the process controls to be qualified for the project.` |
| How are inspection and documentation scoped? | `Inspection methods, sampling, report format and PPAP deliverables are agreed against the drawing and customer requirements before quotation or production approval.` |
| Which inputs are needed for an automotive DFM review? | `Provide the 3D model, 2D drawing with GD&T, material and condition, annual volume, critical wall sections, sealing requirements and target inspection scope.` |
| Can die-cast parts be CNC machined after casting? | `Define the machining allowance, datums, fixtures and finished-part tolerances. Feasibility and inspection scope are reviewed for the specific cast and machined features.` |

阶段 B 需要同时处理：

1. frontmatter FAQ；
2. 可见 FAQ；
3. 由此生成的 FAQPage JSON-LD；
4. 与 WebPage name/description 的同步。

## 9. 仍然需要业务团队确认

### 工程 / 生产

1. 400T–800T、1000T–5000T 是否是当前可用设备范围？请提供逐台设备清单和最大模具/shot weight。
2. 真空阀、高真空抽取和实时增压是否是具体设备的现货能力，适用于哪些材料和零件？
3. T6 热处理的适用铝合金、验证方法和可接受的孔隙范围是什么？

### 质量

1. X-Ray/CT、CMM、泄漏/压力测试的实际设备、量程、校准和检测记录在哪里？
2. `zero-defect`、`near-zero porosity`、`zero blistering` 是否有 PPM、抽样标准或验收记录支持？
3. 哪些项目能做全检？哪些只能按抽样计划执行？
4. IATF、ISO、PPAP 在 AlumCasting 页面可以使用哪个持证主体、范围、证书号和有效期？

### 销售 / 管理层

1. `Tier-1` 或 `Tier 1-Level` 的准确含义和证明文件是什么？
2. 21 years、400+ CNC、40,000㎡ 的统计口径、适用主体和证明材料是什么？
3. 24 小时回复与 T0 15–20 天是承诺、平均值还是特定项目记录？
4. 是否批准阶段 B 同步修改 FAQ 内容与其生成的 FAQPage JSON-LD？

## 10. 风险与发布前验证

| 风险 | 等级 | 控制措施 |
|---|---|---|
| 修改 Title/Description 会联动 WebPage Schema 的 name/description | 中 | 不修改 Schema 模板；实施前确认允许同步生成值变化 |
| 阶段 A 保留旧 FAQ，页面仍含高风险承诺 | 高 | 阶段 A 不作为最终完整整改；阶段 B 需单独批准并同步 Schema |
| 删除设备和数字可能减少部分长尾匹配 | 中 | 保留应用、DFM、检验、材料和 RFQ 长尾；用事实明确的工程内容替代 |
| 删除 oil & gas 内链可能减少该目标页的交叉引流 | 低 | 从其他相关页面保留入口，当前页专注 automotive |
| 移除 `quality-trust` 可能降低证书展示 | 中 | 用可核验的供应商资格文件说明替代，不弱化真实性 |
| 表单仍保留 Formspree endpoint | 低 | 实施后核对 action、必填字段和提交路径不变 |

批准实施后应验证：

1. 目标页只有一个 H1，Title 与 H1 均来自新的 `title`。
2. Meta Description 为 149 字符，不含 Tier-1、设备数量、面积、交期和零缺陷承诺。
3. 目标页不再出现 `page deferred`、`Batch 1`、`zero-defect`、`near-zero porosity`、`zero surface blistering`、`guarantees safety`、`Full X-Ray inspections`。
4. 图片只有 1 张正文图片，Alt 为客观设备/零件描述。
5. Canonical、URL、robots、aliases 未改变。
6. Formspree action 与字段未改变。
7. 内部链接均可返回 200；oil & gas 链接只从本页移除。
8. 如果应用阶段 B，FAQ 可见文本与 FAQPage JSON-LD 完全一致；如果只应用阶段 A，必须在发布前明确接受旧 FAQ 风险。

## 11. 审批结论

建议先批准阶段 A 的目标页内容与元数据修改，同时把 FAQ 与 Schema 联动列为阶段 B。

当前处于等待人工批准状态。未修改任何 AlumCasting 源文件，未改变线上升级状态，未 commit、push 或 deploy。
