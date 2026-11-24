# KingShip 内容声明整改计划

**制定日期：** 2026-11-22
**依据：**

1. `AGENTS.md`
2. `SEO-AUDIT/FACT-VERIFICATION-MATRIX.md`
3. KingShip 第一轮 SEO 审计中关于首页、Automotive、Aerospace、Medical、Certifications、Aluminum Die Casting、Magnesium Die Casting 和技术参数的事实冲突

**本轮范围：** 仅制定整改方案。未修改网站内容，未修改 URL、Canonical、Redirect、Sitemap 或 Schema，未执行 Git commit、push 或 deploy。

## 1. 分类定义

| 分类 | 使用条件 | 整改原则 |
|---|---|---|
| KEEP | 有明确证书、业务确认或足以支持原事实范围的证据 | 保留事实；不得把证书范围扩大到产品设计、航空或医疗专项 |
| REWRITE | 已有某种事实基础，但原句超出已确认范围、把项目级能力写成普遍能力或把可选项写成标准能力 | 缩小范围、增加条件、明确项目确认节点 |
| HOLD | 需要设备台账、校准记录、SOP、报告或管理层文件才能确定 | 暂停确定性宣传；保留待确认占位，不发布具体数字或保证 |
| REMOVE | 明显矛盾、没有支持且容易被理解为保证，或当前无法建立可信边界 | 从商业页面和 Schema 中移除；不提供确定性英文替代 |

## 2. 统计结论

| 分类 | 数量 |
|---|---:|
| KEEP | 2 |
| REWRITE | 14 |
| HOLD | 22 |
| REMOVE | 4 |
| **合计** | **42** |

### 分类分布

| 分类组 | 声明数 | KEEP | REWRITE | HOLD | REMOVE |
|---|---:|---:|---:|---:|---:|
| 企业身份、认证与体系 | 7 | 2 | 3 | 2 | 0 |
| 质量承诺、PPAP 与追溯 | 7 | 0 | 4 | 1 | 2 |
| 报价与响应时间 | 1 | 0 | 0 | 1 | 0 |
| 压铸、CNC 与工具设备 | 8 | 0 | 2 | 6 | 0 |
| X-ray、CMM、气密与检测 | 5 | 0 | 3 | 2 | 0 |
| 材料、公差、产能、工具与工艺 | 14 | 0 | 2 | 10 | 2 |
| **合计** | **42** | **2** | **14** | **22** | **4** |

## 3. 认证范围的硬性边界

### 3.1 ISO 9001

可按证据保留的事实：

> Our facility holds ISO 9001:2015 certificate DZ/CN/2411010Q for the manufacture of precision mechanical parts and die-casting molds.

不得扩大为：

- 所有产品、所有工艺流程或所有关联工厂均在同一认证范围内。
- 将 ISO 9001 与 IATF 16949 写成同一张证书或同一认证编号。
- 将证书副本写成认证机构已完成在线验证。

### 3.2 IATF 16949

可按证据保留的事实：

> Our facility holds IATF 16949:2016 certificate T207408 / 0613009 for the manufacture of die-cast and machined parts. Product design under Clause 8.3 is excluded.

不得扩大为：

- `IATF-certified product design`。
- `IATF-certified plant` 覆盖全部关联工厂或所有外协工序。
- AS9100 认证、航空产品质量体系认证或医疗专项认证。
- 所有零件固定进行 X-ray、全尺寸测量、压力测试或 PPAP。

### 3.3 ISO 14001 与 ISO 13485

当前只确认站内有证书副本。监督审核栏、核验路径和当前有效性仍需质量部/管理层确认，不得仅凭“证书图片存在”写成全部当前有效认证。

## 4. 42 项逐项整改计划

### 4.1 企业身份、认证与体系

| ID | 优先级 | 原始英文表述 | 文件与行号 | 核验状态 | 分类 | 建议处理 | 需业务确认 |
|---|---|---|---|---|---|---|---|
| C01 | P0 首页 | `Since 2003`; `For more than two decades`; `23 Years ... (Since 2003)` | `data/homepage/en.yaml:9,29`; `layouts/partials/sections/quality-control.html:44`; `content/blog/_index.md:3` | 待核实 | HOLD | 暂停精确年份宣传，直至取得成立文件或营业执照。未确认前不提供新的英文数字声明。 | 管理层/HR：法定成立日期是否确实为 2003 年？“more than two decades”是否仅指集团、品牌或创始人经验？ |
| C02 | P0 首页 | `We are not a trading company. Every casting is produced inside our own Dongguan facility.` | `data/homepage/en.yaml:25,33-38` | 待核实 | REWRITE | 照片支持现场存在压铸、CNC 和检测场景。删除 `Every casting`，只在工厂所有权、外协边界确认后描述自有运营范围。推荐：`We operate a die-casting and CNC machining facility in Dongguan.` | 管理层/生产：设施是自有还是租赁？哪些工序外协？KingShip（东莞）与 AlumCasting 的运营主体和工厂主体关系是什么？ |
| C03 | P0 首页 + Schema | Schema 将 `AlumCasting` 设为 KingShip 的 `alternateName` 和 `brand` | `data/company.yaml:11`; `layouts/partials/schema/organization.html:20,33-36` | 相互矛盾 | HOLD | 在实体关系确认前，不得把 AlumCasting 作为 KingShip 品牌或别名继续确认。后续 Schema 整改只能按管理层/法务批准的关系字段处理。 | 管理层/法务/市场：AlumCasting 是母公司、子品牌、销售品牌还是独立网站？应采用 `parentOrganization`、`sameAs` 或其他关系？ |
| C04 | P0 Certifications + 首页 | `certified to ISO 9001` | `content/certifications/index.md:18-23`; `data/homepage/en.yaml:38,337-338` | 已证实 | KEEP | 保留认证事实，但统一为精确范围；不得扩大到产品设计或未列工厂。推荐使用第 3.1 节原句。 | 质量部/管理层：证书当前有效，持证主体与证书范围保持不变；后续仅同步部分服务页的陈旧“不作有效性声明”文字。 |
| C05 | P0 Certifications + 首页 | `certified to IATF 16949` | `content/certifications/index.md:42-49`; `data/homepage/en.yaml:38,322-323,417` | 已证实 | KEEP | 保留认证事实，必须带证书范围和 Clause 8.3 排除说明。推荐使用第 3.2 节原句。 | 质量部：证书当前有效，且范围仍为 die-cast parts and machined parts；确认可对外说明 Clause 8.3 排除。 |
| C06 | P0 Certifications + 首页 | 站点同时展示 ISO 14001:2015 和 ISO 13485:2016 | `content/certifications/index.md:29-35,54-61` | 待核实 | REWRITE | 从“当前认证”收窄为“站内有证书副本，当前有效性在供应商资格确认时核实”。推荐：`Certificate copies are available for review; current scope and validity are confirmed during supplier qualification.` | 质量部/管理层：两张证书当前是否有效？ISO 13485 监督审核栏为何为空？能否从认证机构或有效核验渠道确认？ |
| C07 | P0 首页 + Auto/Medical | QMS 适用于 automotive、aerospace、medical-grade expectations | `data/homepage/en.yaml:321-324`; `content/industries/automotive.md:10`; `content/industries/medical.md:10` | 待核实 | REWRITE | 区分已认证体系与项目要求；IATF 不能覆盖产品设计，也不能暗示 AS9100。推荐：`Automotive requirements are managed under our IATF 16949 QMS; aerospace and medical requirements are reviewed during project qualification.` | 质量部/工程部：航空航天项目实际执行哪些标准？医疗项目是否全部在 ISO 13485 下管理？是否存在 AS9100 或客户专项审核记录？ |

### 4.2 质量承诺、PPAP 与追溯

| ID | 优先级 | 原始英文表述 | 文件与行号 | 核验状态 | 分类 | 建议处理 | 需业务确认 |
|---|---|---|---|---|---|---|---|
| Q01 | P0 首页 + Aluminum | `every shot complies with zero-defect delivery standards`; `zero-defect mindset` | `content/aluminum-die-casting/index.md:84`; `data/homepage/en.yaml:319`; 各语言同段 | 相互矛盾 | REMOVE | 删除 `zero-defect` 和“every shot”表述。不得提供补偿性的保证用英语；后续以验收标准和项目检验范围替代。 | 质量部：是否有 PPM、制程合格率或客户验收标准可支持其他非绝对表述？ |
| Q02 | P0 首页 | `structural components that pass qualification on the first try` | `data/homepage/en.yaml:43`; 各语言首页 | 无证据 | REMOVE | 删除首次送样通过承诺。整改时可用流程说明，但不得保留任何首样成功率或一次通过保证。 | 工程部/质量部：是否有 T0/T1/T2 记录、首样关闭轮次或项目成功率统计？ |
| Q03 | P0 Automotive | `every automotive part` uses real-time X-ray、气密/压力测试和完整追溯 | `content/industries/automotive.md:10,36` | 相互矛盾 | REWRITE | 删除“every part”，改成按汽车项目约定。推荐：`Inspection, testing and traceability requirements are agreed for each automotive project.` | 质量部/销售：哪些零件强制 X-ray？哪些做压力/气密测试？抽样频率、追溯层级和记录保存要求是什么？ |
| Q04 | P0 Aerospace | `Every aerospace part` is X-ray inspected and receives full dimensional inspection | `content/industries/aerospace.md:14,37` | 相互矛盾 | REWRITE | 删除“every part”和“full dimensional”，改为项目资格确认。推荐：`Inspection and traceability requirements are defined during aerospace-program qualification and RFQ.` | 质量部/工程部：是否有 AS9100 或客户专项要求？X-ray、CMM、冶金和追溯分别覆盖哪些零件与特性？ |
| Q05 | P0 Medical | `Every medical part` receives dimensional inspection and full production traceability | `content/industries/medical.md:10,33,37,43` | 相互矛盾 | REWRITE | 删除“every medical part”和“full traceability”。推荐：`Dimensional inspection and traceability scope is agreed for each medical-device program.` | 质量部：ISO 13485 当前状态；哪些医疗零件有序列化、材料炉次和检验记录；是否有项目级控制计划？ |
| Q06 | P0 Aluminum；P1 CNC/Tooling/Mg | `full PPAP documentation`; `one PPAP` | `content/aluminum-die-casting/index.md:46,73,179`; 对照 `content/cnc-machining/index.md:47,158` | 相互矛盾 | REWRITE | 统一为按项目确认 PPAP 级别，不得暗示全部元素自动提供。推荐：`PPAP level and deliverables are agreed at RFQ; not every PPAP element is automatically included.` | 质量部/销售：可提交哪些 PPAP 等级？过去实际批准过哪些文件包？哪些元素需要客户另行提供或批准？ |
| Q07 | P0 Aerospace；P1 Medical | `PPAP / AS9100 documentation`; serial-number traceability; `serialization and record retention as standard` | `content/blog/magnesium-die-casting-for-aerospace-lightweight-components.md:103,113-114`; `content/blog/precision-cnc-machining-for-medical-equipment-components.md:105` | 无证据 | HOLD | 暂不作为确定性能力宣传。未经质量部批准，不得写 AS9100 文件、序列化或标准记录保留。 | 质量部：是否持有 AS9100？是否可按 AS9100 风格提交文件？serialization、批次和记录保存是否有批准 SOP 与真实案例？ |

### 4.3 报价与响应时间

| ID | 优先级 | 原始英文表述 | 文件与行号 | 核验状态 | 分类 | 建议处理 | 需业务确认 |
|---|---|---|---|---|---|---|---|
| L01 | P0 首页 + Contact + Aluminum | `formal quotation within 24 hours`; `We will respond within 24 hours` | `data/homepage/en.yaml:421,427`; `content/contact/index.md:8`; `static/js/rfq-lead-tracking.js:60`; `content/aluminum-die-casting/index.md:210` | 无证据 | HOLD | 暂停“24 小时正式报价”承诺，直到销售 SLA 获批。未获批前不应提供新的英文时限承诺。 | 销售/工程/管理层：可承诺的是收件确认、技术回复还是正式报价？工作日、节假日、时区和复杂项目如何处理？ |

**其他交期：** 未发现 72 小时报价、固定量产周期、固定模具制作周期或固定 PPAP 周期声明。不得在整改过程中补入未经批准的新数字。

### 4.4 压铸、CNC 与工具设备

| ID | 优先级 | 原始英文表述 | 文件与行号 | 核验状态 | 分类 | 建议处理 | 需业务确认 |
|---|---|---|---|---|---|---|---|
| E01 | P0 首页 + Aluminum | `cold-chamber machines span 400T to 5000T`; `400T–5000T Die Casting Fleet` | `data/homepage/en.yaml:86,111`; `content/aluminum-die-casting/index.md:3,25,29,115` | 待核实 | HOLD | 暂停完整 range 宣传。照片仅支持现场存在 400T 标识机组和大型 YIZUMI 单元，不足以证明完整 fleet。 | 工程/生产：逐台提供制造商、型号、吨位、最大模具尺寸、shot weight 和可用状态；400T–5000T 是否只是设备范围而非单工厂连续配置？ |
| E02 | P0 首页 + Aluminum | `Our largest machine is a 5000-ton cold-chamber ... machine` | `data/homepage/en.yaml:202-216,356-361,413`; `content/aluminum-die-casting/index.md:24-25,71,75` | 待核实 | HOLD | 保留现场大型机组事实，但暂停确定吨位。照片可见 YIZUMI `DM5000H` 字样，仍需铭牌和台账确认。 | 工程/生产：设备编号、额定吨位、制造年份、最大模具重量、shot weight、可用状态；是否属于 KingShip 运营实体？ |
| E03 | P0 Tooling/CNC/SSR | `The confirmed casting machine range is 400T–3000T` | `content/tooling/index.md:34-35,82`; `content/cnc-machining/index.md:31-32`; `content/semi-solid-rheocasting/index.md:26-27` | 相互矛盾 | HOLD | 暂停该范围数字。需明确它是半固态、模具适配还是全厂压铸能力。 | 工程/生产：400T–3000T 对应哪些工艺、材料和设备？与 5000T 机组如何共存？ |
| E04 | P0 Magnesium；P0 首页 | Magnesium die casting range: `160T–2250T` | `data/homepage/en.yaml:152`; 对照 `content/magnesium-die-casting/index.md:3,14,26,31,87` 的 `400T–3000T` | 相互矛盾 | HOLD | 暂停全部镁合金吨位范围。需以设备台账确定 hot/cold chamber、型号与专用性。 | 工程/生产：哪一排数字正确？是否存在两组不同镁合金设备？是否包括不再运行或外协设备？ |
| E05 | P0 首页 + Magnesium | `dedicated hot- and cold-chamber machines` for magnesium | `data/homepage/en.yaml:130-132` | 待核实 | HOLD | 暂不写“dedicated”，直至设备清单和工艺隔离方式确认。 | 工程/生产：镁合金是否使用专用机台、专用熔炉和专用后处理区？hot chamber 与 cold chamber 分别有哪些设备？ |
| E06 | P0 首页 | `fully automated robotic extraction` / automated casting cells | `data/homepage/en.yaml:33-35`; `content/industries/automotive.md:21-22` | 待核实 | REWRITE | 照片支持至少一个机器人取件单元，不能支持全部设备 fully automated。推荐：`Robotic extraction is used on selected die-casting cells.` | 工程/生产：哪些具体单元配置机器人、自动喷雾、自动取件和在线检测？“selected”范围如何确定？ |
| E07 | P0 首页 + SSR | `Yizumi semi-solid rheocasting system`; `400T–3000T casting fleet with robotic pouring lines` | `data/homepage/en.yaml:176,191`; `content/semi-solid-rheocasting/index.md:23-24,88` | 待核实 | HOLD | 暂停确定型号和范围。YIZUMI 压铸设备照片不能证明所示机台就是半固态系统。 | 工程：半固态设备制造商、型号、配置、投产日期、 slurry maker 和机器人浇注线配置；是否与普通 YIZUMI 压铸机区分？ |
| E08 | P0 Homepage；P1 CNC | 3/4/5-axis CNC，high-speed 5-axis，milling/drilling/turning/EDM，in-house post-processing | `data/homepage/en.yaml:69,247-270,362-363,415`; `content/cnc-machining/index.md:19-27`; CNC 车间照片 | 待核实 | REWRITE | 保留 CNC 后加工能力，删除未确认的 high-speed、轴数和设备数量覆盖。推荐：`CNC post-machining is available in-house; machine specifications and axis capability are confirmed for each project.` | 工程/生产：逐台 CNC 清单、轴数、行程、转台、主轴、最大工件尺寸；哪些机型能加工 5-axis 特征？ |

### 4.5 X-ray、CMM、气密与检测

| ID | 优先级 | 原始英文表述 | 文件与行号 | 核验状态 | 分类 | 建议处理 | 需业务确认 |
|---|---|---|---|---|---|---|---|
| I01 | P0 首页 + Auto/Aero | `real-time X-ray porosity inspection` / in-house NDT | `data/homepage/en.yaml:11,35,326-340,415`; `data/company.yaml:33` | 待核实 | REWRITE | 保留在厂 X-ray 设备事实，删除“所有零件”和未证实的实时判定承诺。推荐：`In-house X-ray inspection is available for porosity checks, subject to part size, equipment capability and agreed sampling.` | 质量部：UNC-160 型号、校准状态、最大工件尺寸、实时观察/自动判定能力、典型检测节拍与操作人员资格。 |
| I02 | P0 首页 + EV/Aero | `Coordinate Measuring Machines`、`Large-Format CMM`、`two coordinate measuring machines` | `data/homepage/en.yaml:232,328-329,368-373`; `content/industries/electric-vehicle.md:45` | 待核实 | REWRITE | 照片清晰显示两台 CMM，可保留数量事实；删除未确认的 large-format。推荐：`Our metrology lab includes two CMM systems; measuring envelope, accuracy and current calibration records are confirmed for each project.` | 质量部：两台 CMM 的品牌型号、行程、精度、温度控制和校准状态；“large-format”是否可适用于指定零件尺寸？ |
| I03 | P0 首页 + Automotive | `automated leak testing`; airtightness and pressure leak testing in-house | `data/homepage/en.yaml:258-270,329-342,415`; `content/industries/automotive.md:10,34` | 待核实 | REWRITE | 保留现场泄漏检测工位，删除所有零件和未确认的自动压力测试范围。推荐：`Leak/pressure testing is available for sealed components, with the method, range and acceptance criteria agreed per project.` | 质量部：设备是气密、压力衰减、流量还是其他方法？压力范围、泄漏率单位、工位数量和自动化程度是什么？ |
| I04 | P0 首页 + SSR/Aerospace | `Metallographic Validation` / metallography comparison | `data/homepage/en.yaml:176-177,189`; `content/blog/semi-solid-rheocasting-applications-in-aerospace-manufacturing.md:122` | 无证据 | HOLD | 暂不作为在厂能力宣传，直至取得设备、制样和报告证据。 | 质量部/实验室：是否具备金相切割、镶嵌、研磨、腐蚀、显微观察与报告能力？由谁执行？ |
| I05 | P1 CNC/Tooling/Mg | First-article inspection、CMM verification 和项目检验报告 | `content/cnc-machining/index.md:46-48,158-164`; `content/tooling/index.md:45-47,133-139`; `content/magnesium-die-casting/index.md:76,139-145` | 待核实 | HOLD | 暂不承诺 FAI 报告的交期或自动范围，只保留“按项目确认”的流程描述。 | 质量部：是否有 FAI 模板、过往样例、批准流程和记录保存要求？哪些客户项目可提供脱敏样例？ |

### 4.6 材料、公差、产能、工具与工艺

| ID | 优先级 | 原始英文表述 | 文件与行号 | 核验状态 | 分类 | 建议处理 | 需业务确认 |
|---|---|---|---|---|---|---|---|
| M01 | P0 首页 + Aluminum | 可铸造 `ADC12, A380, A356 and A360` aluminum alloys | `data/homepage/en.yaml:83-104,410-411`; `content/aluminum-die-casting/index.md:15-18,99-101` | 待核实 | HOLD | 暂停完整合金清单，待工程确认常规生产合金和项目专用合金。 | 工程/质量：ADC12、A380、A356、A357、A360 中哪些在当前常规生产？哪些只做试制？是否使用其他合金？ |
| M02 | P0 首页 + Magnesium | 可铸造 `AZ91D` and `AM60B` magnesium alloys | `data/homepage/en.yaml:130,145-146,411`; `content/magnesium-die-casting/index.md:15-18,67-68` | 待核实 | HOLD | 暂停对外确定性合金清单，待材料和订单记录确认。 | 工程/质量：AZ91D 与 AM60B 是否有近期生产、材料证书和工艺记录？是否有其他可提供合金？ |
| M03 | P0 首页 + SSR | `A357` primary semi-solid grade vs homepage `A356 Rheocast` | `content/semi-solid-rheocasting/index.md:16-17,69,170-177`; `data/homepage/en.yaml:184` | 相互矛盾 | HOLD | 暂不写 primary grade，直至工程确认半固态验证合金。现有 A357/A356 两种说法不得同时发布。 | 工程/质量：半固态已验证的基材是 A357、A356 还是两者？T5/T6、焊接和疲劳验证分别基于哪种材料？ |
| M04 | P0 首页 + Aluminum | `±0.01 mm` CNC tolerance | `data/homepage/en.yaml:92,250`; `content/aluminum-die-casting/index.md:33,71,117,152,179`; 对照 CNC/Mg/SSR 页的条件化表述 | 相互矛盾 | HOLD | 暂停通用 ±0.01 mm 能力宣传。即使服务页写了条件，也需要能力研究或检验报告支持。 | 工程/质量：哪些特征、材料和机床能达到 ±0.01 mm？测量不确定度、温度条件和 CMM 方法是什么？ |
| M05 | P0 Aluminum/Magnesium | Minimum/typical wall thickness：`1.5 mm` vs `1.0–1.2 mm` vs Mg `1.0 mm` | `content/aluminum-die-casting/index.md:31,71,116`; `content/cnc-machining/index.md:33-34,109`; `content/magnesium-die-casting/index.md:32-33,70,111`; `content/semi-solid-rheocasting/index.md:28-29,77,198` | 相互矛盾 | HOLD | 暂停通用“minimum wall thickness”。需按材料、成形工艺、流长和投影面积重新定义。 | 工程：各合金和工艺的已验证最小壁厚、长宽比/流长限制、样本、试模结果和 DFM 条件是什么？ |
| M06 | P1 SSR | `Casting tolerance CT5–CT7 (ISO 8062, indicative)` | `content/semi-solid-rheocasting/index.md:203` | 待核实 | REWRITE | 保留行业参考属性，明确不是 KingShip 固定能力。推荐：`CT5–CT7 is indicative ISO 8062 design guidance, not a fixed Kingship casting tolerance.` | 工程/质量：是否需要进一步限定适用材料、尺寸区间和测量方式？ |
| M07 | P0 Aluminum | `full-scale cells scale to 10,000+ units` | `content/aluminum-die-casting/index.md:187` | 无证据 | REMOVE | 删除 `10,000+ units`。该句没有时间单位、零件类型、班次或产能口径，容易被理解为保证。 | 生产/销售：如需未来公开产能，必须按产品、工艺、班次给出 `pcs/month` 或 `metric tons/year` 记录。 |
| M08 | P0 首页 + Aluminum | 5000T machine produces meter-scale structural components | `data/homepage/en.yaml:207-216,413`; `content/aluminum-die-casting/index.md:141` | 待核实 | HOLD | 暂停 meter-scale 断言，待机器 envelope 和真实零件尺寸确认。 | 工程：最大模具尺寸、最大 shot weight、投影面积、现有最大零件尺寸；是否有可作为案例的脱敏零件？ |
| M09 | P1 Homepage + SSR | `Rheocasting slurries and custom compositions are available on request`; material certificates accompany every inquiry | `data/homepage/en.yaml:411`; `content/semi-solid-rheocasting/index.md:179` | 无证据 | REWRITE | 删除 `every inquiry`；收窄为按 RFQ 确认。推荐：`Project-specific alloy and slurry options, together with material certificates, are confirmed at RFQ.` | 工程/质量/销售：可提供哪些 custom composition/slurry？材质证明是否每批、每炉或仅按项目提供？ |
| M10 | P0 首页 + Tooling | In-house tool design、manufacturing、maintenance；bridge tooling | `data/homepage/en.yaml:72-74,285-297,422-423`; `content/tooling/index.md:11-26,63-82` | 待核实 | HOLD | 暂不作为完整 in-house tooling chain 宣传，待工具车间设备、人员和项目记录确认。 | 工程/生产：设计、CNC/EDM 加工、装配、试模和维修哪些在厂完成？bridge tooling 是否有真实案例和最小批量？ |
| M11 | P0 首页 + Aluminum | 使用 `Magma` and `Moldflow` simulation；`Every aluminum die casting program begins with mold-flow simulation` | `data/homepage/en.yaml:40-42,89-90,419`; `content/aluminum-die-casting/index.md:110,171`; `layouts/partials/sections/capability-detail.html:21` | 待核实 | HOLD | 暂停 `every program` 和双软件确定性宣传，待软件许可、人员与项目报告确认。 | 工程：Magma、Moldflow 的许可证与版本？哪些工程师使用？典型报告能否脱敏展示？“每项目”适用哪些产品？ |
| M12 | P0 首页 + Tooling | `extend mold life beyond 100,000 shots` | `data/homepage/en.yaml:288`; 对照 `content/tooling/index.md:69,84-97,129` | 相互矛盾 | REMOVE | 删除超过 100,000 shots 的 KingShip 性能承诺。不得提供替代数字。 | 工程/质量：是否有 shot counter、模具履历和报废标准支持任何具体寿命区间？ |
| M13 | P0 Homepage；P1 Aluminum/Magnesium | anodizing、powder coating、shot blasting、impregnation “within the same facility”；同时写 Mg passivation/electroplating | `data/homepage/en.yaml:93-94,136,149-150,330-343`; `content/aluminum-die-casting/index.md:76-77,179`; `content/magnesium-die-casting/index.md:36-37,123-131` | 相互矛盾 | HOLD | 暂停“same facility”总括，待生产明确自有/外协及工艺适用材料。 | 生产/质量：哪些表面处理是自有产线？哪些外协？对铝合金和镁合金各自可确认哪些工艺？SureTech 650 是否仍在用？ |
| M14 | P0 Homepage + Aluminum/SSR | Vacuum-assisted HPDC / vacuum-assisted rheocast，用于气密件 | `content/aluminum-die-casting/index.md:146`; `content/semi-solid-rheocasting/index.md:88`; `data/homepage/en.yaml:258-259` | 待核实 | HOLD | 暂停确定能力宣传，待真空系统、真空度和项目验证记录确认。 | 工程/质量：真空辅助压铸和真空辅助 rheocast 是否均有实际设备？真空度、阀件、泄漏验证方法和适用零件是什么？ |

## 5. 页面优先整改顺序

### P0：先处理可能直接产生错误预期或合规风险的商业页

1. **Certifications**
   - 保留 C04、C05，紧贴证书范围与 Clause 8.3 排除。
   - C06 改为“证书副本可供审查”，不将其扩大为当前有效认证。
2. **首页**
   - REMOVE：Q01、Q02。
   - HOLD：L01、E01、E02、E04、E05、E07、I04、M01–M05、M08、M10–M14。
   - REWRITE：C07、E06、I01–I03。
3. **Automotive**
   - Q03、Q04、Q05、Q06 的“every part/full PPAP”全部收窄为项目范围。
   - 不把 X-ray/CMM/压力测试写成所有零件固定流程。
4. **Aerospace**
   - Q04、Q07 优先处理；不得暗示 AS9100 或航空体系认证。
   - 只描述可按项目确认的检测、文件和追溯范围。
5. **Medical**
   - Q05、Q07 优先处理；ISO 13485 当前状态未确认前，不扩展到全部医疗项目。
6. **Aluminum Die Casting**
   - REMOVE：Q01、M07、M12。
   - HOLD：E01、E02、M01、M04、M05、M08、M11、M13、M14。
   - 该页是当前技术口径冲突最多的商业页，应在设备、公差和合金参数确认后整体重写。
7. **Magnesium Die Casting**
   - 优先处理 E04、E05、M02、M03、M05、M13。
   - 统一镁合金吨位、专用设备、A357/A356 和表面处理边界。

### P1：服务页与博客的一致性整改

1. CNC 页：E08、I05、M04。
2. Tooling 页：E03、M10、M11、M12、I05。
3. Semi-Solid Rheocasting：E03、E07、M03、M05、M06、M09、M14。
4. 技术博客：Q07、M04、M05、M12 以及其他复制自旧营销文案的绝对化语句。

## 6. 最高风险的 10 项声明

1. **Q01 零缺陷 / every shot**
   - 与半固态页“不声明 defect-free”直接矛盾，且没有质量数据支持。
   - 应立即移除，不得用其他保证性措辞替代。
2. **Q03–Q05 “Every automotive/aerospace/medical part” 检验与追溯**
   - 把项目级检测写成 100% 覆盖。
   - 必须改写为按项目和验收标准确认。
3. **Q06–Q07 Full PPAP / AS9100 / serialization**
   - 现有页面一方写 full PPAP，另一方写 project-specific；站点没有 AS9100 证据。
   - PPAP 收窄，AS9100 和序列化保持 HOLD。
4. **L01 24 小时正式报价**
   - 当前没有销售 SLA、节假日规则或历史响应数据。
   - 核实前应移除正式报价承诺，只可讨论收件确认流程。
5. **E01 + E03 400T–5000T 与 400T–3000T**
   - 两个“confirmed”范围直接冲突。
   - 必须按工艺、材料和设备台账拆分。
6. **E04 Magnesium 160T–2250T vs 400T–3000T**
   - 同一材料、同一核心页面对外范围不一致。
   - 在台账确认前不得公开任一范围。
7. **E02/M08 5000T 与 meter-scale**
   - 有大型设备照片，但没有铭牌、shot weight、最大模具尺寸和真实零件记录。
   - 照片只能支持现场存在，不支持能力参数。
8. **M04 ±0.01 mm**
   - 首页和旧铝压铸页是通用承诺，CNC 页则是特征级条件承诺。
   - 没有能力研究和 CMM 报告前应 HOLD。
9. **M05 通用最小壁厚**
   - 1.5 mm、1.0–1.2 mm 和 Mg 1.0 mm 未按材料、工艺和流长拆分。
   - 该参数对 DFM 和报价影响大，必须由工程确认。
10. **M12 模具寿命 >100,000 shots + M07 10,000+ units**
    - 两项都缺少定义和记录；M12 与 Tooling 页直接冲突，M07 没有时间口径。
    - 建议 REMOVE，不做数字替换。

## 7. 需要部门确认的事项

### 管理层 / 法务

1. 法定成立日期、品牌沿革和“Since 2003”的准确主体。
2. KingShip、AlumCasting 及东莞制造主体的法律和品牌关系。
3. 自有、租赁、关联公司及外协工厂边界。
4. ISO 14001、ISO 13485 当前有效性和证书扫描件来源。
5. 是否允许公开设备清单、最大零件 envelope 和年产能。

### 工程部门

1. 压铸机逐台型号、吨位、最大模具尺寸和 shot weight。
2. 5000T 机组身份及 400T–3000T 的实际适用工艺。
3. 镁合金设备配置与 160T–2250T/400T–3000T 冲突。
4. CNC 机型、数量、轴数、行程和最大工件尺寸。
5. A357/A356 半固态合金验证范围。
6. 最小壁厚、铸造公差和 ±0.01 mm 的特征级能力。
7. Magma/Moldflow 许可证、使用范围及项目样例。
8. 真空辅助系统、模具车间和金相能力。
9. 表面处理自有/外协边界。

### 质量部门

1. ISO 9001、IATF 16949 当前有效性、持证主体、范围和 Clause 8.3 排除。
2. ISO 14001、ISO 13485 监督审核和当前状态。
3. X-ray、CMM、泄漏/压力测试的校准、范围、方法和人员资格。
4. 100% 检验、抽样计划、验收标准和记录保存要求。
5. PPAP 等级、FAI 报告、AS9100 风格文件和序列化程序。
6. PPM、制程能力、首样通过率和模具寿命记录。

### 销售部门

1. 24 小时报价究竟是收件确认、技术回复还是正式报价。
2. 完整 RFQ 的定义、节假日规则、时区和复杂项目例外。
3. 可承诺的工程评审范围及客户历史数据。
4. 10,000+ units 的实际业务含义。
5. 哪些内容可由销售对外承诺，哪些必须由工程或质量书面确认。

### 生产部门

1. 各工艺和设备、班次的年产能。
2. 设备可用状态、停机、维护和排产约束。
3. 自有与外协工序清单。
4. 表面处理、模具加工和检测工位的真实布置。

## 8. 建议整改顺序

### 阶段 1：冻结高风险承诺

- 优先处理 Q01、Q02、M07、M12 四项 REMOVE。
- 暂停 L01、Q07、E01–E05、M04、M05 等 HOLD 项的具体数字或保证。
- 不新增设备数量、产能、公差、交期或客户成果。

### 阶段 2：锁定认证与实体边界

- 以 ISO 9001、IATF 16949 证书原文为准，统一 KEEP 文案。
- 明确 Clause 8.3 排除和持证主体。
- 解决 KingShip/AlumCasting 的实体关系；在获准前不修改 Schema 关系。

### 阶段 3：整改首页和三个行业页

- 首页移除绝对承诺和未核实数字。
- Automotive、Aerospace、Medical 将 100% 覆盖率说法改成项目级检测与追溯。
- PPAP、AS9100、serialization 在质量部确认前保持 HOLD。

### 阶段 4：整改核心服务页

- Aluminum Die Casting：重写合金、设备、壁厚、公差、工具寿命和产能段落。
- Magnesium Die Casting：统一吨位、专用设备、A357/A356 和表面处理。
- CNC、Tooling、SSR：同步项目级表述，避免商业页仍保留旧结论。

### 阶段 5：多语言与 Schema 统一

- 所有语言同步相同事实边界，不得仅修改英文页。
- Schema 只使用已批准实体、服务和认证事实。
- 任何 Schema 调整需单独审查，不在本计划内执行。

### 阶段 6：发布前验证

- 搜索 `zero-defect`、`every part`、`100,000 shots`、`24 hours`、`400T–5000T`、`160T–2250T`、`±0.01 mm` 等风险词。
- 检查全部语言页面、标题、描述、FAQ、结构化数据和正文是否一致。
- 由工程、质量、销售和管理层按所属范围签字后再进入内容修改和发布审批。

## 9. 本轮结论

- KEEP：**2**
- REWRITE：**14**
- HOLD：**22**
- REMOVE：**4**
- 合计：**42**

本报告为整改方案，不代表任何 HOLD 或 REMOVE 项已被业务方否定。所有分类均以 2026-11-22 可获得的仓库材料为基础；新增有效设备台账、检验报告、SLA 或管理层文件后，应重新评估分类。
