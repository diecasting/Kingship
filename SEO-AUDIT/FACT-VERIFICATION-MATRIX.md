# KingShip 企业事实与能力矩阵核验

**核查日期：** 2026-11-22
**网站：** https://kingship.alumcasting.com/
**范围：** `content/`、`data/`、`layouts/`、`static/img/` 中当前可影响对外表述的内容。
**本轮变更：** 仅新增本报告；未修改网站内容、未提交、未推送、未部署。

## 1. 核查口径

- 同一声明在七种语言中的重复出现只计为一项；同一事实的不同适用范围拆分核验。
- 多语言站点结构和媒体文件可证明“类型存在”，不能单独证明数量、吨位、精度、覆盖率或合同承诺。
- AlumCasting 主站及其图片、营销文案不作为 KingShip 能力的证明。
- 本报告中的“无证据”仅表示当前仓库和现有材料没有支持文件，不等同于该事实一定不成立。
- ISO 9001 和 IATF 16949 按业务方已有确认处理，并以站内证书副本作为文件证据。

### 状态定义

| 状态 | 含义 |
|---|---|
| 已证实 | 已有业务确认或明确文件证据，可按确认范围使用 |
| 相互矛盾 | 不同页面、Schema 或业务口径之间不能同时成立，或适用范围明显冲突 |
| 待核实 | 有文案、照片或间接材料，但不足以证明具体参数或覆盖范围 |
| 无证据 | 当前材料中只有对外宣示，没有可核验的支持文件或记录 |

## 2. 汇总

| 分类 | 声明项 | 已证实 | 相互矛盾 | 待核实 | 无证据 |
|---|---:|---:|---:|---:|---:|
| 企业身份、认证与体系 | 7 | 2 | 1 | 4 | 0 |
| 质量承诺、PPAP 与追溯 | 7 | 0 | 5 | 0 | 2 |
| 报价与响应时间 | 1 | 0 | 0 | 0 | 1 |
| 压铸、CNC 与工具设备 | 8 | 0 | 2 | 6 | 0 |
| X-ray、CMM、气密与检测 | 5 | 0 | 0 | 4 | 1 |
| 材料、公差、产能、工具与工艺 | 14 | 0 | 5 | 7 | 2 |
| **合计** | **42** | **2** | **13** | **21** | **6** |

**结论：**

- 共归并识别 **42 项**需要核验的对外事实声明。
- **13 项**存在已确认的站内矛盾或适用范围冲突。
- **27 项**缺少充分直接证据，其中 **21 项待核实**、**6 项无证据**。
- 当前代码中**没有发现 72 小时报价声明**；现行承诺是 24 小时内报价或回复。
- 当前代码中也未发现固定量产周期、固定模具制作周期或固定 PPAP 提交周期。

## 3. 证据等级

### 3.1 强文件证据

- ISO 9001:2015：`DZ/CN/2411010Q`，范围为 precision mechanical parts and die-casting molds。
- IATF 16949:2016：`T207408 / 0613009`，范围为 die-cast parts and machined parts；产品设计 Clause 8.3 被排除。
- 证书页码及完整印刷信息见 `content/certifications/index.md:18-61`。

### 3.2 照片证据

以下照片可以支持现场存在相应类型的设备或场景，但不能替代设备台账、校准证书、产能记录或检验记录：

| 文件 | 可见内容 | 证据边界 |
|---|---|---|
| `static/img/5000ton-die-casting-machine.webp` | 可见 YIZUMI 机组，铭牌区域可见 `DM5000H` 字样 | 照片显示大型压铸单元；仍需设备台账与铭牌确认吨位 |
| `static/img/yizumi-die-casting-machine-shop.webp` | 多台压铸机，至少一台正面可见“400T”标识 | 可支持现场存在 400T 机组；不能证明完整吨位清单 |
| `static/img/cmm-dimensional-inspection-lab.webp` | 可见两台坐标测量机和测量工位 | 可支持现场存在两台 CMM；需确认型号、行程与校准状态 |
| `static/img/x-ray-detector.webp` | 可见 `UNICOMP X-RAY UNC-160` 设备 | 可支持现场存在 X-ray 检测机；需确认实时能力、有效检测范围和校准 |
| `static/img/leakaging-testing-equipment.webp` | 可见一台带压紧机构的检测工位 | 设备类型与压力/气密方法需质量部确认 |
| `static/img/high-precision-cnc-workshop.webp`、`static/img/cnc-machining-workshop-aisle.webp` | 可见成排 CNC 加工中心 | 可支持加工车间存在；不能推断准确数量、型号或轴数 |

### 3.3 仅有网站文案

设备数量、100% 检验、首次送样通过、24 小时报价、年产能、模具寿命、Magma/Moldflow 使用范围、ISO 13485 当前状态等，目前没有台账、报告、SOP、校准记录或项目记录支持。

## 4. 事实核验矩阵

### 4.1 企业身份、认证与质量体系

| ID | 声明内容（英文原文） | 页面 / 文件证据 | 页面冲突 | 现有证据 | 确认部门 | 核实前建议及英文 B2B 表述 | 状态 |
|---|---|---|---|---|---|---|---|
| C01 | `Since 2003`; `For more than two decades`; `23 Years ... (Since 2003)` | 首页 https://kingship.alumcasting.com/ ：`data/homepage/en.yaml:9,29`；`layouts/partials/sections/quality-control.html:44`；`content/blog/_index.md:3` | 否，内部均为 2003 年起算 | 仅网站自述 | 管理层 / HR | 调取营业执照或成立文件。证实后写 `Serving die-casting customers since 2003.`；未证实前不要继续增加“23 years”等精确数字。 | 待核实 |
| C02 | `We are not a trading company. Every casting is produced inside our own Dongguan facility.` | 首页：`data/homepage/en.yaml:25,33-38`；现场照片 | 否 | 照片支持现场有压铸、CNC、检测场景；无法证明“Every casting”均为自有工厂生产 | 管理层 / 生产 | 确认自有/租赁关系、外协比例和产品范围。建议 `We operate a die-casting and CNC machining facility in Dongguan.`；不要在所有工序范围确认前使用 `Every casting`. | 待核实 |
| C03 | Schema 将 `AlumCasting` 设为 KingShip 的 `alternateName` 和 `brand` | `data/company.yaml:11`; `layouts/partials/schema/organization.html:20,33-36` | 是：页面主体品牌为 KingShip，结构化数据把 AlumCasting 作为品牌 | 无集团关系或商标关系文件 | 管理层 / 法务 / 市场 | 如为母品牌或关联品牌，应明确 `parentOrganization` 或受控品牌关系；若并非同一实体，移除 `alternateName/brand`。 | 相互矛盾 |
| C04 | `certified to ISO 9001` | `content/certifications/index.md:18-23`; 首页 `data/homepage/en.yaml:38,337-338` | 文案基本一致；部分服务页的“current validity not claimed”文字需要后续同步 | 业务方确认；证书副本：`DZ/CN/2411010Q`，2027-12-17 | 质量部 | 按证书范围写：`Our facility holds ISO 9001:2015 certificate DZ/CN/2411010Q for the manufacture of precision mechanical parts and die-casting molds.` | 已证实 |
| C05 | `certified to IATF 16949` | `content/certifications/index.md:42-49`; 首页 `data/homepage/en.yaml:38,322-323,417` | 文案基本一致；不得把 Clause 8.3 产品设计纳入认证范围 | 业务方确认；证书副本：`T207408 / 0613009`，2029-08-27 | 质量部 | 写 `IATF 16949:2016 certified for the manufacture of die-cast and machined parts; product design (Clause 8.3) is excluded.` 避免 `IATF-certified product design`. | 已证实 |
| C06 | 站点同时展示 ISO 14001:2015 和 ISO 13485:2016 | `content/certifications/index.md:29-35,54-61` | 未发现站内直接冲突 | 有证书副本；ISO 13485 图片注明监督审核符合性栏为空，二维码非认证机构核验系统 | 质量部 / 管理层 | 当前是否有效需质量部确认。可先用 `Certificate copies are available for review; current scope and validity are confirmed during supplier qualification.` 避免直接宣称全部“当前认证”。 | 待核实 |
| C07 | QMS 适用于 automotive、aerospace、medical-grade expectations | 首页 `data/homepage/en.yaml:321-324`; `content/industries/automotive.md:10`; `content/industries/medical.md:10` | 与证书范围存在口径差异：IATF 排除产品设计，站内没有 AS9100 证书 | ISO 9001、IATF 证书；ISO 13485 待确认；无 aerospace QMS 证书 | 质量部 / 工程部 | 区分体系认证与项目要求。建议 `Automotive requirements are managed under our IATF 16949 QMS; aerospace and medical requirements are reviewed during project qualification.` | 待核实 |

### 4.2 质量承诺、PPAP 与追溯

| ID | 声明内容（英文原文） | 页面 / 文件证据 | 页面冲突 | 现有证据 | 确认部门 | 核实前建议及英文 B2B 表述 | 状态 |
|---|---|---|---|---|---|---|---|
| Q01 | `every shot complies with zero-defect delivery standards`; `zero-defect mindset` | https://kingship.alumcasting.com/aluminum-die-casting/ ：`content/aluminum-die-casting/index.md:84`; 首页 `data/homepage/en.yaml:319`; 各语言同段 | 是：半固态页明确写明不声明 blanket zero-porosity/defect-free，见 `content/semi-solid-rheocasting/index.md:216` | 无 PPM、合格率、全检定义或验收记录 | 质量部 | 删除绝对承诺。建议 `Quality is verified against the drawing and agreed acceptance criteria; no blanket zero-defect claim is made.` | 相互矛盾 |
| Q02 | `structural components that pass qualification on the first try` | 首页 `data/homepage/en.yaml:43`; 各语言首页 | 未发现直接反证 | 无首样通过率、T0/T1/T2 数据或失败案例统计 | 工程部 / 质量部 | 核实前删除。建议 `DFM and simulation reduce launch risk; first-article results are reported against agreed acceptance criteria.` | 无证据 |
| Q03 | `every automotive part` uses real-time X-ray、气密/压力测试和完整追溯 | https://kingship.alumcasting.com/industries/automotive/ ：`content/industries/automotive.md:10,36` | 是：CNC 页称 FAI、PPAP、CMM 为项目范围，见 `content/cnc-machining/index.md:158`；镁合金页同样。 | 无 100% 检验计划、抽样表、设备覆盖清单或汽车项目记录 | 质量部 / 销售 | 写 `X-ray, dimensional inspection, leak/pressure testing and traceability are specified per automotive project.` 避免 `every automotive part`. | 相互矛盾 |
| Q04 | `Every aerospace part` is X-ray inspected and receives full dimensional inspection | https://kingship.alumcasting.com/industries/aerospace/ ：`content/industries/aerospace.md:14,37` | 是：其他页面把 X-ray/CMM 定义为 project-scoped | 无 AS9100 证书、航空航天项目记录或全检程序 | 质量部 / 工程部 | 写 `Inspection and traceability requirements are defined during aerospace-program qualification and RFQ.` | 相互矛盾 |
| Q05 | `Every medical part` receives dimensional inspection and full production traceability | https://kingship.alumcasting.com/industries/medical/ ：`content/industries/medical.md:10,33,37,43` | 是：通用 CNC/镁合金页把检验和追溯描述为项目范围 | ISO 13485 副本可提供部分体系背景，但当前有效性待确认；无逐件检查记录 | 质量部 | 写 `Dimensional inspection and traceability scope is agreed for each medical-device program.` 避免 `every medical part`. | 相互矛盾 |
| Q06 | `full PPAP documentation`; `one PPAP` | https://kingship.alumcasting.com/aluminum-die-casting/ ：`content/aluminum-die-casting/index.md:46,73,179` | 是：CNC 页写 `PPAP documentation scope defined per project`，见 `content/cnc-machining/index.md:47,158`；模具、镁合金页同样 | 无 PPAP 提交级别、已批准文件包或客户项目记录 | 质量部 / 销售 | 写 `PPAP level and deliverables are agreed at RFQ; not every PPAP element is automatically included.` | 相互矛盾 |
| Q07 | `PPAP / AS9100 documentation`; 检验结果按 serial number 记录；`serialization and record retention as standard` | `content/blog/magnesium-die-casting-for-aerospace-lightweight-components.md:103,113-114`; `content/blog/precision-cnc-machining-for-medical-equipment-components.md:105` | 与现有证书清单不一致：没有 AS9100 证书 | 无 AS9100 证书、序列化 SOP 或记录保留程序 | 质量部 | 只有客户要求且范围获准后才可写 `AS9100-specific documentation and serialized records can be supported for the agreed project scope.` 避免暗示持有 AS9100。 | 无证据 |

### 4.3 报价、响应与交期

| ID | 声明内容（英文原文） | 页面 / 文件证据 | 页面冲突 | 现有证据 | 确认部门 | 核实前建议及英文 B2B 表述 | 状态 |
|---|---|---|---|---|---|---|---|
| L01 | `formal quotation within 24 hours`; `We will respond within 24 hours` | 首页 `data/homepage/en.yaml:421,427`; https://kingship.alumcasting.com/contact/ ：`content/contact/index.md:8`; `static/js/rfq-lead-tracking.js:60`; 铝压铸页 `content/aluminum-die-casting/index.md:210` | 未发现页面互相冲突，但属于硬 SLA | 无销售 SLA、节假日规则、完整资料定义或历史响应统计 | 销售 / 工程 / 管理层 | 若无法签署 SLA，写 `We acknowledge complete RFQs within one business day; quotation timing is confirmed after engineering review.` 未确认前避免 `formal quotation within 24 hours`. | 无证据 |

**72 小时报价：** 已扫描 `content`、`data`、`layouts` 和 `static/js`，未发现 `72 hours`、`72h` 或等价声明。当前实际承诺为 24 小时。

### 4.4 压铸、CNC 与工具设备

| ID | 声明内容（英文原文） | 页面 / 文件证据 | 页面冲突 | 现有证据 | 确认部门 | 核实前建议及英文 B2B 表述 | 状态 |
|---|---|---|---|---|---|---|---|
| E01 | `cold-chamber machines span 400T to 5000T`; `400T–5000T Die Casting Fleet` | 首页 `data/homepage/en.yaml:86,111`; `content/aluminum-die-casting/index.md:3,25,29,115` | 与模具页“confirmed casting machine range 400T–3000T”口径冲突 | 照片支持现场存在带 400T 标识机组和 YIZUMI `DM5000H` 单元；没有完整设备台账 | 生产 / 工程 | 先出设备清单，写 `Our HPDC equipment includes [confirmed models and tonnages], subject to machine availability and tooling fit.` 避免把照片推导成完整 range。 | 待核实 |
| E02 | `Our largest machine is a 5000-ton cold-chamber ... machine` | 首页 `data/homepage/en.yaml:202-216,356-361,413`; `content/aluminum-die-casting/index.md:24-25,71,75` | 与 400T–3000T confirmed range 文案冲突 | `static/img/5000ton-die-casting-machine.webp` 可见 YIZUMI `DM5000H` 铭牌字样 | 生产 / 工程 | 调取铭牌、设备编号和最大装机模具重量。证实后写 `Our largest confirmed HPDC machine is a [manufacturer/model], rated at [tonnage].` | 待核实 |
| E03 | `The confirmed casting machine range is 400T–3000T` | `content/tooling/index.md:34-35,82`; `content/cnc-machining/index.md:31-32`; `content/semi-solid-rheocasting/index.md:26-27` | 是：首页和铝压铸页声明 400T–5000T | 页面对“confirmed range”的适用工艺未说明 | 工程 / 生产 | 明确 400T–3000T 是半固态或模具适用范围，还是完整压铸范围。写 `The confirmed range for [specific process] is [exact range].` | 相互矛盾 |
| E04 | Magnesium die casting range: `160T–2250T` | 首页 `data/homepage/en.yaml:152` | 是：镁合金页及全部翻译称 `400T–3000T`，见 `content/magnesium-die-casting/index.md:3,14,26,31,87` | 无镁合金设备清单 | 工程 / 生产 | 以设备台账为准列出 hot/cold chamber、型号和吨位；未统一前不要发布任何镁合金范围数字。 | 相互矛盾 |
| E05 | `dedicated hot- and cold-chamber machines` for magnesium | 首页 `data/homepage/en.yaml:130-132` | 未发现直接反证 | 无设备清单或现场照片可区分镁合金 hot/cold chamber 专用线 | 工程 / 生产 | 确认设备类型与隔离方式。建议 `Magnesium is processed on [confirmed equipment configuration].` | 待核实 |
| E06 | `fully automated robotic extraction` / automated casting cells | 首页 `data/homepage/en.yaml:33-35`; `content/industries/automotive.md:21-22` | 未发现直接反证 | 照片显示单台机器人取件和自动化单元，不能证明全部压铸单元 fully automated | 工程 / 生产 | 写 `Robotic extraction is used on [identified] die-casting cells.` 避免概括所有设备。 | 待核实 |
| E07 | `Yizumi semi-solid rheocasting system`; `400T–3000T casting fleet with robotic pouring lines` | 首页 `data/homepage/en.yaml:176,191`; `content/semi-solid-rheocasting/index.md:23-24,88` | 未发现直接反证；照片无法确认所示 YIZUMI 机组就是半固态系统 | 有 YIZUMI 压铸现场照片；无半固态设备铭牌、配置或运行记录 | 工程 / 生产 | 写 `KingShip operates [manufacturer/model/configuration] for semi-solid rheocasting.` 需以设备台账与工艺文件为准。 | 待核实 |
| E08 | 3/4/5-axis CNC，high-speed 5-axis，milling/drilling/turning/EDM，in-house post-processing | 首页 `data/homepage/en.yaml:69,247-270,362-363,415`; `content/cnc-machining/index.md:19-27`; 两张 CNC 车间照片 | 未发现直接冲突 | 照片支持多台 CNC 设备存在；无设备数量、型号、行程、主轴和轴数清单 | 工程 / 生产 | 确认后写 `We provide 3-, 4- and 5-axis CNC post-machining on [confirmed equipment].` 未确认“high-speed”和准确轴数前避免通用承诺。 | 待核实 |

### 4.5 X-ray、CMM、气密与检测

| ID | 声明内容（英文原文） | 页面 / 文件证据 | 页面冲突 | 现有证据 | 确认部门 | 核实前建议及英文 B2B 表述 | 状态 |
|---|---|---|---|---|---|---|---|
| I01 | `real-time X-ray porosity inspection` / in-house NDT | 首页 `data/homepage/en.yaml:11,35,326-340,415`; `data/company.yaml:33` | 覆盖范围与“project-scoped”页面不一致 | `static/img/x-ray-detector.webp` 可见 `UNICOMP X-RAY UNC-160` | 质量部 | 出设备编号、校准、最大检测尺寸和实时判定能力记录。写 `In-house X-ray inspection is available for porosity checks, subject to part size and agreed sampling.` | 待核实 |
| I02 | `Coordinate Measuring Machines`、`Large-Format CMM`、照片 Alt 写 `two coordinate measuring machines` | 首页 `data/homepage/en.yaml:232,328-329,368-373`; `content/industries/electric-vehicle.md:45` | 未发现直接冲突 | 照片清晰显示两台 CMM；没有型号、量程、精度和校准资料 | 质量部 | 写 `Our metrology lab includes [confirmed CMM models]; measuring envelope and calibration records are available on request.` 避免把“large-format”当作已确认规格。 | 待核实 |
| I03 | `automated leak testing`; airtightness and pressure leak testing in-house | 首页 `data/homepage/en.yaml:258-270,329-342,415`; `content/industries/automotive.md:10,34` | 未发现直接冲突 | `static/img/leakaging-testing-equipment.webp` 显示检测工位；自动化程度、压力和泄漏率范围未确认 | 质量部 | 写 `Leak/pressure testing is available for sealed components, with method, pressure range and sampling agreed per project.` | 待核实 |
| I04 | `Metallographic Validation` / metallography comparison | 首页 `data/homepage/en.yaml:176-177,189`; `content/blog/semi-solid-rheocasting-applications-in-aerospace-manufacturing.md:122` | 未发现直接反证 | 当前仓库没有金相设备、制样能力或报告证据 | 质量部 / 实验室 | 确认设备、制样和报告能力后再写 `Metallographic evaluation is available in-house.` 核实前删除该能力词。 | 无证据 |
| I05 | First-article inspection、CMM verification 和项目检验报告 | `content/cnc-machining/index.md:46-48,158-164`; `content/tooling/index.md:45-47,133-139`; `content/magnesium-die-casting/index.md:76,139-145` | 未见明确冲突，均限定为项目范围 | 有检验设备照片；无已签发 FAI 报告样例或模板 | 质量部 | 写 `FAI reports can be provided to the drawing and agreed inspection plan.` 不应把这句扩展成所有订单自动提供。 | 待核实 |

### 4.6 材料、公差、产能、工具与工艺

| ID | 声明内容（英文原文） | 页面 / 文件证据 | 页面冲突 | 现有证据 | 确认部门 | 核实前建议及英文 B2B 表述 | 状态 |
|---|---|---|---|---|---|---|---|
| M01 | 可铸造 `ADC12, A380, A356 and A360` aluminum alloys | 首页 `data/homepage/en.yaml:83-104,410-411`; `content/aluminum-die-casting/index.md:15-18,99-101` | 与 CNC/模具/半固态页的 confirmed alloy `A357` 口径不完全一致 | 无材料检验报告、炉次记录或现行合金清单 | 工程 / 质量 | 出经确认的常规合金与项目专用合金清单。证实后写 `Confirmed aluminium casting alloys: [list].` 不要把 A360 或 A357视为可互换。 | 待核实 |
| M02 | 可铸造 `AZ91D` and `AM60B` magnesium alloys | 首页 `data/homepage/en.yaml:130,145-146,411`; `content/magnesium-die-casting/index.md:15-18,67-68` | 两页一致 | 无材料报告、炉次记录或生产订单证据 | 工程 / 质量 | 写 `Confirmed magnesium alloys: AZ91D and AM60B, subject to material availability and project review.` | 待核实 |
| M03 | `A357` primary semi-solid grade vs homepage `A356 Rheocast` | 半固态页 `content/semi-solid-rheocasting/index.md:16-17,69,170-177`; 首页 `data/homepage/en.yaml:184` | 是：同一半固态产品分别写 A357 和 A356 | 无材质证书或半固态项目记录 | 工程 / 质量 | 以工艺验证结果为准。建议 `A357 is the primary semi-solid aluminium grade; A356 is evaluated per project.` | 相互矛盾 |
| M04 | `±0.01 mm` CNC tolerance | 首页 `data/homepage/en.yaml:92,250`; 铝压铸页 `content/aluminum-die-casting/index.md:33,71,117,152,179`; CNC/镁合金/半固态页均写条件化 | 是：首页和铝压铸页像通用精度承诺，服务页限定为 defined features + project verification | 无能力研究、CMM 报告和特征级检验记录 | 工程 / 质量 | 统一写 `±0.01 mm may be achievable on defined post-machined features, subject to DFM, setup and the agreed inspection method.` | 相互矛盾 |
| M05 | Minimum/typical wall thickness：`1.5 mm` vs `1.0–1.2 mm` vs Mg `1.0 mm` | 铝压铸页 `content/aluminum-die-casting/index.md:31,71,116`; CNC 页 `content/cnc-machining/index.md:33-34,109`; 镁合金页 `content/magnesium-die-casting/index.md:32-33,70,111`; 半固态页 `content/semi-solid-rheocasting/index.md:28-29,77,198` | 是：缺少材料、工艺、区域和流长条件时，1.5 mm 与 1.0–1.2 mm 不能同时作为通用最小壁厚 | 无样品截面数据、试模或 DFM 案例 | 工程 | 按材料与工艺拆分，写 `Typical thin-wall feasibility is [range] for [process/material], confirmed by DFM and flow analysis.` 避免 `minimum wall thickness`. | 相互矛盾 |
| M06 | `Casting tolerance CT5–CT7 (ISO 8062, indicative)` | `content/semi-solid-rheocasting/index.md:203` | 未发现直接冲突 | 当前仅作为行业 indicative guidance，无 KingShip 样本统计 | 工程 / 质量 | 保留 `indicative` 限定，写 `CT5–CT7 is indicative ISO 8062 design guidance, not a fixed Kingship tolerance.` | 待核实 |
| M07 | `full-scale cells scale to 10,000+ units` | `content/aluminum-die-casting/index.md:187` | 无明确时间单位、产品类型或班次条件 | 仓库没有年产能、月产能或设备节拍数据 | 生产 / 销售 | 未证实前删除。采用 `Capacity is quoted by part, process and production window after RFQ.` 如需公开，应给 `pcs/month` 或 `metric tons/year` 及口径。 | 无证据 |
| M08 | 5000T machine produces meter-scale structural components | 首页 `data/homepage/en.yaml:207-216,413`; `content/aluminum-die-casting/index.md:141` | 未发现直接冲突 | 有设备照片；无最大投影面积、最大外形尺寸、shot weight 或实际零件记录 | 工程 | 证实后写 `Large structural parts are evaluated against [maximum die dimensions, shot weight and machine envelope].` 避免泛化 `meter-scale`. | 待核实 |
| M09 | `Rheocasting slurries and custom compositions are available on request`; `material certificates accompany every inquiry` | 首页 `data/homepage/en.yaml:411`; `content/semi-solid-rheocasting/index.md:179` | 未发现直接反证 | 无 slurry 配方、材料报告或“每笔询盘附证书”的流程证据 | 工程 / 质量 / 销售 | 写 `Project-specific alloy and slurry options, together with material certificates, are confirmed at RFQ.` 避免“every inquiry”。 | 无证据 |
| M10 | In-house tool design、manufacturing、maintenance；bridge tooling | 首页 `data/homepage/en.yaml:72-74,285-297,422-423`; `content/tooling/index.md:11-26,63-82` | 未发现明确冲突 | 有模具技术内容；仓库没有工具车间设备、在制模具或维护记录 | 工程 / 生产 | 确认后写 `We provide in-house tooling design, manufacturing and maintenance; bridge tooling is available subject to project review.` | 待核实 |
| M11 | 使用 `Magma` and `Moldflow` simulation；`Every aluminum die casting program begins with mold-flow simulation` | 首页 `data/homepage/en.yaml:40-42,89-90,419`; 铝压铸页 `content/aluminum-die-casting/index.md:110,171`; `layouts/partials/sections/capability-detail.html:21` | 首页为 every program；模具页把它描述为 project-scoped development aid，需核实是否所有项目都执行两种软件 | 无软件许可、报告、工程师名单或项目样例 | 工程 | 确认实际工具和适用门槛。建议 `Magma/Moldflow simulation is used as project scope permits to assess fill, solidification and likely defects.` | 待核实 |
| M12 | `extend mold life beyond 100,000 shots` makes >100,000 shots a Kingship benefit | 首页 `data/homepage/en.yaml:288`; 其余语言同段 | 是：模具页明确声明这不是 KingShip 固定标准、没有历史工具寿命业绩数据，见 `content/tooling/index.md:69,84-97,129` | 无模具履历、shot counter、维护记录或报废标准 | 工程 / 质量 | 删除 `beyond 100,000 shots`，使用 `Tool life is project-dependent and is confirmed against the die design, alloy, process, maintenance and acceptance criteria.` | 相互矛盾 |
| M13 | `anodizing, powder coating, shot blasting and impregnation are coordinated within the same facility`; 同时写 Mg `passivation and electroplating` | 首页 `data/homepage/en.yaml:93-94,136,149-150,330-343`; 铝压铸页 `content/aluminum-die-casting/index.md:76-77,179`; 镁合金页 `content/magnesium-die-casting/index.md:36-37,123-131` | 是：首页把多种处理列为同一设施/已确认，镁合金页只把 Shot Blasting 与 Anodizing 列为 confirmed；其余需项目评估 | 无表面处理产线、外协清单或相关照片 | 生产 / 质量 | 写 `Confirmed surface-treatment options are [list]; availability and processing location are confirmed per project.` 避免将行业可选项和自有能力混写。 | 相互矛盾 |
| M14 | Vacuum-assisted HPDC / vacuum-assisted rheocast，用于气密件 | 铝压铸页 `content/aluminum-die-casting/index.md:146`; 半固态页 `content/semi-solid-rheocasting/index.md:88`; 首页 `data/homepage/en.yaml:258-259` | 未发现直接反证 | 无真空系统、真空度、阀件配置或项目验证记录 | 工程 / 质量 | 确认后写 `Vacuum-assisted HPDC is available for qualified leak-sensitive projects.` 核实前避免把设备选项写成所有项目标准流程。 | 待核实 |

## 5. 统一网站表述建议

### 5.1 可直接统一的核心句式

**认证**

> Our facility holds ISO 9001:2015 certificate DZ/CN/2411010Q for the manufacture of precision mechanical parts and die-casting molds, and IATF 16949:2016 certificate T207408 / 0613009 for the manufacture of die-cast and machined parts. Product design under IATF Clause 8.3 is excluded.

**检测范围**

> Inspection methods, sampling, acceptance criteria and documentation are defined for each part and agreed at RFQ. Available methods may include X-ray porosity inspection, CMM dimensional verification, leak/pressure testing and first-article inspection, subject to the confirmed equipment and project scope.

**PPAP**

> PPAP level and deliverables are agreed at RFQ. The submitted package depends on the drawing, customer quality requirements and agreed production scope.

**精度**

> A tolerance of ±0.01 mm may be achievable on defined post-machined features under suitable process, setup and inspection conditions. Feasibility is confirmed during DFM rather than applied as a blanket tolerance.

**大型结构件**

> Large structural-casting projects are evaluated against the confirmed machine envelope, maximum die dimensions, shot weight, alloy, tooling and inspection plan.

### 5.2 核实前应避免的词语

- `zero-defect`
- `every part`, `every automotive part`, `every aerospace part`
- `100% inspection`，除非同时给出检查特性、方法、覆盖率和记录
- `pass qualification on the first try`
- `formal quotation within 24 hours`，除非销售能够签署该 SLA
- `full PPAP documentation`
- `full production traceability`，除非定义批次、序列号、材料和检验记录层级
- `IATF-certified product design`
- `AS9100 documentation`，除非质量部确认其含义并批准
- `mold life beyond 100,000 shots`
- 没有设备条件限定的 `400T–5000T`、`±0.01 mm`、`minimum 1.0 mm`

### 5.3 缺失但应在能力页补充的事实

这些不是当前对外声明，但会直接支撑后续 SEO 和 RFQ 内容：

1. 压铸机逐台清单：制造商、型号、吨位、最大模具尺寸、最大 shot weight。
2. CNC 逐台清单：数量、轴数、型号、行程、转台、最大工件尺寸。
3. X-ray：型号、有效检测尺寸、实时判定能力、校准与操作人员资格。
4. CMM：数量、型号、量程、精度、温度环境与校准有效期。
5. 泄漏/压力测试：方法、压力/真空范围、泄漏率单位、工位数量。
6. 金相、材料实验室与机械性能测试的实际能力。
7. 典型材料清单、炉次验证方式、可提供的材质证明。
8. 各工艺年产能，按单班/双班、零件重量或件数定义。
9. PPAP 提交级别、历史批准数量和典型交付文件。
10. 实际报价 SLA 和 RFQ 到 T0/T1/SOP 的阶段性周期。
11. 典型模具寿命记录及其统计口径。
12. 自有、租赁、关联公司及外协工序清单。

## 6. 最需要业务方确认的 10 项

1. **100% 检验承诺：** automotive、aerospace、medical 页面所称 `every part` 是否符合真实检验计划和抽样覆盖率。
2. **24 小时报价 SLA：** 是否适用于所有完整 RFQ、时区、节假日和复杂项目；否则改为确认收件时间。
3. **压铸设备范围：** 400T–3000T 与 400T–5000T 分别适用于哪些材料/工艺；请提供逐台设备清单。
4. **镁合金设备范围：** 160T–2250T 与 400T–3000T 哪一个是正确的现役能力。
5. **5000T 设备身份：** YIZUMI `DM5000H` 的铭牌吨位、设备编号、可用状态和最大模具/shot weight。
6. **检测覆盖与设备参数：** X-ray、两台 CMM、泄漏/压力测试和金相是否均为在厂能力，以及具体覆盖范围。
7. **PPAP 与追溯：** 可支持的 PPAP 级别、AS9100 相关文件、serialization 和 lot-level traceability 的真实范围。
8. **公差与壁厚：** ±0.01 mm 和 1.0–1.5 mm 对应的材料、特征、工艺和检验方法。
9. **材料口径：** ADC12、A380、A356、A357、A360、AZ91D、AM60B 中哪些是常规、哪些是项目专用；A357/A356 半固态口径必须统一。
10. **工具寿命与产能：** `>100,000 shots` 和 `10,000+ units` 是否有历史记录与时间口径；若无，应从主页面移除。

## 7. 建议的部门确认顺序

1. **工程 + 质量：** 设备、公差、检测、材料、PPAP、工具寿命。
2. **销售：** 报价 SLA、RFQ 到 SOP 阶段周期、可承诺的工程评审范围。
3. **管理层：** 成立年份、工厂所有权、AlumCasting/KingShip 实体关系、ISO 13485/ISO 14001 当前状态。
4. **生产：** 年产能、设备可用性、外协与表面处理边界。

完成上述确认后，再进入网站文案统一阶段；在矩阵完成签署前，不应把任何待核实项改写为更具体的营销数字。
