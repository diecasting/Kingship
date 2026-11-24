# AlumCasting 与 KingShip GSC SEO 机会报告

**分析日期：** 2026-11-22
**数据窗口：** 2026-10-25 至 2026-11-21，含首尾 28 天
**时区：** Google Search Console PT
**搜索类型：** Web
**数据源：** `gsc_mcp` 只读 Search Analytics 与 URL Inspection
**操作边界：** 仅分析并新增本报告；未修改网站、URL、Canonical、Redirect、Sitemap、Schema、GSC 设置或其他数据。

## 1. 数据口径与限制

### 1.1 两个资源存在包含关系

目标资源为 `sc-domain:alumcasting.com` 和 `sc-domain:kingship.alumcasting.com`。前者是父域属性，已经包含后者。因此：

- 不能把两个资源的数据相加。
- 合并去重后的总盘应使用父域属性。
- Alumcasting 主站/知识站分析使用页面过滤器排除 `kingship.alumcasting.com`。
- KingShip 继续使用独立属性。

### 1.2 总量

| 口径 | Clicks | Impressions | CTR | Avg. position |
|---|---:|---:|---:|---:|
| Alumcasting 父域属性（含 KingShip） | 55 | 17,520 | 0.314% | 33.90 |
| KingShip 独立属性 | 5 | 888 | 0.563% | 22.14 |
| 父域减去 KingShip 后的点击/展示推算 | 50 | 16,632 | 0.301% | 无法通过简单相减可靠还原 |

KingShip 占父域属性的约 9.1% 点击、5.1% 展示。绝对流量仍处于很小的样本范围。

### 1.3 Search Analytics 限制

- GSC 会匿名化低量查询。
- Search Analytics API 返回的是 top rows，不是完整 query universe。
- “某关键词未返回”不能等同于“没有需求”或“零展示”。
- Alumcasting query 返回 500 行，但可见行只包含 1 次 click；总点击为 55，更多点击查询被省略或匿名化。
- KingShip query 返回 72 行，全部为 0 clicks；但站点总点击为 5，说明点击查询未在返回行中暴露。
- 页面级点击与 query 级点击不能强制一一对应。

## 2. 表现最好的关键词

### 2.1 Alumcasting

可见 query rows 中唯一明确带点击的查询：

| 关键词 | 页面 | Clicks | Impressions | CTR | Avg. position |
|---|---|---:|---:|---:|---:|
| `zamak 3 vs zamak 5` | https://alumcasting.com/zamak-3-vs-zamak-5-die-casting-selection-guide/ | 1 | 64 | 1.56% | 3.14 |

高展示查询中，绝大多数为 0 clicks：

| 关键词 | Impressions | Clicks | CTR | Avg. position |
|---|---:|---:|---:|---:|
| `aluminum die casting manufacturer` | 152 | 0 | 0% | 45.97 |
| `aluminum foundry engineering support` | 145 | 0 | 0% | 21.09 |
| `aluminum casting engineering consultation` | 113 | 0 | 0% | 30.96 |
| `aluminum die casting manufacturers` | 109 | 0 | 0% | 60.24 |
| `aluminium die casting manufacturer` | 83 | 0 | 0% | 54.82 |
| `aluminium die casting components factory` | 79 | 0 | 0% | 74.37 |
| `aluminum die casting factories` | 62 | 0 | 0% | 38.08 |
| `aluminium hpdc casting` | 60 | 0 | 0% | 76.80 |
| `alloy die casting company` | 59 | 0 | 0% | 65.25 |
| `aluminum casting rfq` | 49 | 0 | 0% | 30.59 |

### 2.2 KingShip

Search Analytics 返回的 72 个 query rows 均为 0 clicks，无法从 query 层确认 5 次总点击分别来自哪些关键词。以下按可见展示量列出：

| 关键词 | 页面 | Impressions | Clicks | CTR | Avg. position |
|---|---|---:|---:|---:|---:|
| `aluminum casting cnc machining service` | `/cnc-machining/` | 29 | 0 | 0% | 46.34 |
| `cnc aluminium casting machining service provider` | `/cnc-machining/` | 16 | 0 | 0% | 78.50 |
| `aluminum foundry transfer tooling` | `/blog/` | 15 | 0 | 0% | 34.27 |
| `precision casting technology behind custom flanges` | `/blog/` | 14 | 0 | 0% | 54.36 |
| `casting cnc machining provider` | `/cnc-machining/` | 13 | 0 | 0% | 52.62 |
| `aluminum foundry engineering support` | `/blog/` | 13 | 0 | 0% | 45.92 |
| `aluminum casting engineering consultation` | `/blog/` | 11 | 0 | 0% | 44.36 |
| `cnc aluminium casting machining service` | `/cnc-machining/` | 11 | 0 | 0% | 48.64 |
| `cnc aluminum casting machining service provider` | `/cnc-machining/` | 10 | 0 | 0% | 89.70 |
| `casting cnc machining supplier` | `/cnc-machining/` | 6 | 0 | 0% | 14.83 |

## 3. 表现最好的落地页面

### 3.1 Alumcasting：按点击

| 页面 | Clicks | Impressions | CTR | Avg. position |
|---|---:|---:|---:|---:|
| https://knowledge.alumcasting.com/automotive/ev-battery-enclosure-manufacturing/ | 8 | 48 | 16.67% | 4.58 |
| https://knowledge.alumcasting.com/materials/heat-treatment-of-castings/ | 6 | 262 | 2.29% | 21.77 |
| https://alumcasting.com/ | 5 | 6,479 | 0.077% | 36.85 |
| https://alumcasting.com/zamak-3-vs-zamak-5-die-casting-selection-guide/ | 3 | 540 | 0.56% | 10.16 |
| https://knowledge.alumcasting.com/automotive/giga-casting-megacasting/ | 3 | 72 | 4.17% | 5.06 |
| https://knowledge.alumcasting.com/die-casting/high-pressure-die-casting-parameters/ | 3 | 33 | 9.09% | 4.21 |

### 3.2 Alumcasting：按展示

| 页面 | Impressions | Clicks | CTR | Avg. position |
|---|---:|---:|---:|---:|
| https://alumcasting.com/ | 6,479 | 5 | 0.077% | 36.85 |
| https://alumcasting.com/automotive-die-casting-parts/ | 1,393 | 0 | 0% | 50.14 |
| https://knowledge.alumcasting.com/die-casting/ | 1,158 | 0 | 0% | 42.89 |
| https://alumcasting.com/die-cast-aluminum-electric-motor-housing-suppliers/ | 649 | 0 | 0% | 22.10 |
| https://alumcasting.com/aluminum-die-casting/ | 569 | 0 | 0% | 59.50 |
| https://alumcasting.com/zamak-3-vs-zamak-5-die-casting-selection-guide/ | 540 | 3 | 0.56% | 10.16 |
| https://knowledge.alumcasting.com/supplier-selection/ | 381 | 0 | 0% | 25.85 |
| https://alumcasting.com/gravity-die-casting-manufacturer/ | 370 | 0 | 0% | 28.78 |
| https://alumcasting.com/explosion-proof-aluminum-enclosures-oil-gas-industry/ | 363 | 1 | 0.28% | 14.80 |
| https://knowledge.alumcasting.com/materials/zinc-die-casting-alloys/ | 302 | 0 | 0% | 41.76 |

### 3.3 KingShip：按点击和展示

| 页面 | Clicks | Impressions | CTR | Avg. position |
|---|---:|---:|---:|---:|
| https://kingship.alumcasting.com/ | 3 | 32 | 9.38% | 4.56 |
| https://kingship.alumcasting.com/cnc-machining/ | 1 | 128 | 0.78% | 53.46 |
| https://kingship.alumcasting.com/contact/ | 1 | 5 | 20.00% | 5.80 |
| https://kingship.alumcasting.com/de/ | 1 | 3 | 33.33% | 3.67 |
| https://kingship.alumcasting.com/blog/ | 0 | 524 | 0% | 15.54 |
| https://kingship.alumcasting.com/aluminum-die-casting/ | 0 | 63 | 0% | 31.62 |
| https://kingship.alumcasting.com/tooling/ | 0 | 18 | 0% | 40.33 |
| https://kingship.alumcasting.com/semi-solid-rheocasting/ | 0 | 13 | 0% | 29.00 |
| https://kingship.alumcasting.com/ja/ | 0 | 13 | 0% | 13.85 |

## 4. 高展示、低 CTR 机会

窗口仅 28 天，以下按相对机会排序，不代表长期稳定阈值。

| 关键词 | 对应页面 | Clicks | Impressions | CTR | Avg. position | 建议行动 |
|---|---|---:|---:|---:|---:|---|
| `aluminum die casting manufacturer` | 主站首页 140 imp；`/aluminum-die-casting/` 12 imp | 0 | 152 | 0% | 45.97 | 明确商业承接页；加强首页至铝压铸服务页的内容差异、内链和 manufacturer 证据，不新增近重复页 |
| `aluminum foundry engineering support` | 主站 blog 61 imp；knowledge 首页 66；knowledge contact 18 | 0 | 145 | 0% | 21.09 | 收敛工程支持意图；优化 title/meta、首段、技术资源入口 |
| `aluminum casting engineering consultation` | knowledge supplier-selection 55；knowledge contact 52；主站少量页面 | 0 | 113 | 0% | 30.96 | 统一咨询路径与主承接页，减少多个页面分摊 |
| `aluminum die casting manufacturers` | 主站首页为主 | 0 | 109 | 0% | 60.24 | 保持主站商业页定位；优先提升权威和内链，不做近似新页 |
| `aluminum die casting rfq` / `aluminum casting rfq` | knowledge supplier-selection | 0 | 49 | 0% | 30.59 | 增加 RFQ 数据包、审查步骤、质量文件和采购决策信息 |
| `aluminum castings pressure testing` | HPDC quality 25；knowledge die-casting 25 | 0 | 50 | 0% | 62.92 | 建立单一检测/质量承接意图，并用内链连接工艺与服务页 |
| `automotive die casting supplier` | 主站首页 21；automotive parts 23 | 0 | 44 | 0% | 53.91 | 明确 automotive parts 页为行业商业页，统一标题、摘要和 RFQ CTA |
| `a356 aluminum` | A356 semi-solid guide | 0 | 40 | 0% | 75.63 | 排名过深；长期补 A356 参考内容，不优先做纯 meta 调整 |
| `zamak 3` | Zamak comparison guide | 0 | 43 | 0% | 8.53 | 高优先级：摘要和首段明确 Zamak 3 composition/properties/applications |
| `zamak 5` | Zamak comparison guide | 0 | 34 | 0% | 7.15 | 增加 Zamak 5 独立答案段落和锚点，保持现有 URL |
| `aluminum casting cnc machining service` | KingShip `/cnc-machining/` | 0 | 29 | 0% | 46.34 | 强化 cast-to-CNC 差异化、图纸流程、检验与 RFQ 模块 |
| KingShip `/blog/` 页面总盘 | `/blog/` | 0 | 524 | 0% | 15.54 | 收紧博客入口主题；检查为何 flange、cold forming、investment casting 等非核心 query 由 blog 承接 |

## 5. 平均排名 4–20 的机会

### 5.1 Alumcasting

| 关键词 | 对应页面 | Clicks | Impressions | CTR | Avg. position | 建议行动 |
|---|---|---:|---:|---:|---:|---|
| `zamak 3` | Zamak comparison guide | 0 | 43 | 0% | 8.53 | 优化 title/description 和首段，直接回答 Zamak 3 单独查询 |
| `zamak 5` | Zamak comparison guide | 0 | 34 | 0% | 7.15 | 增加 Zamak 5 对比、性能和用途短答案 |
| `zamak 5 material properties` | Zamak comparison guide | 0 | 19 | 0% | 8.37 | 增加可扫描的性能表和材料选择说明 |
| `epe enclosures for oil and gas` | Explosion-proof enclosure page | 0 | 27 | 0% | 8.96 | 标题、首段和 FAQ 直接匹配 EPE/oil and gas 意图 |
| `oil and gas enclosure manufacturer` | Explosion-proof enclosure page | 0 | 20 | 0% | 17.70 | 强化 manufacturer 证据、文件与 RFQ 路径 |
| `aluminum die casting china` | 主站首页 | 0 | 33 | 0% | 17.64 | 确定首页或铝压铸页为主承接页；优化摘要与内链 |
| `china aluminum die casting parts` | 主站首页，19 imp | 0 | 19 | 0% | 19.16 | 围绕 parts/OEM 提供更直接的商业摘要 |
| `aluminum die casting manufacturer china` | 主站首页 | 0 | 12 | 0% | 12.92 | 加强 manufacturer 意图与采购信息 |
| `aluminum foundry quality certifications` | knowledge supplier-selection | 0 | 14 | 0% | 7.79 | 增加认证核验清单和供应商资格信息 |
| `motor housing manufacturer` | Motor housing supplier page | 0 | 15 | 0% | 18.00 | 对齐 manufacturer 查询和页面 title/首段 |
| `die cast ev motor housing` | Motor housing supplier page | 0 | 10 | 0% | 8.10 | 增加 EV motor housing 的工艺、检测和 RFQ 区块 |
| `t7 heat treatment process` | Heat treatment guide | 0 | 10 | 0% | 6.60 | 增加 T7 独立解释、适用条件和内部链接 |
| `t5 heat treatment` | Heat treatment guide | 0 | 19 | 0% | 19.21 | 建立 T4/T5/T6/T7 对照和选择逻辑 |

### 5.2 KingShip

| 关键词 | 对应页面 | Clicks | Impressions | CTR | Avg. position | 建议行动 |
|---|---|---:|---:|---:|---:|---|
| `casting cnc machining supplier` | CNC machining | 0 | 6 | 0% | 14.83 | 优化 CN​​C 页的 supplier intent、首段和 RFQ CTA |
| `skd61 custom die casting mold making` | Tooling | 0 | 2 | 0% | 4.00 | 保持 SKD61 为示例材料，增强 title/首段查询匹配 |
| `medical equipment housing casting` | Medical aluminum housing article | 0 | 3 | 0% | 6.67 | 强化医疗外壳标题、摘要和 Medical 页内链 |
| `medical equipment aluminum casting` | Medical aluminum housing article | 0 | 2 | 0% | 8.50 | 增加材料、DFM、检测和 RFQ 摘要 |
| `medical device enclosure casting` | Medical aluminum housing article | 0 | 1 | 0% | 12.00 | 增加 enclosure 设计/密封/表面处理章节 |
| `precision medical aluminum casting` | Medical aluminum housing article | 0 | 1 | 0% | 4.00 | 只优化现有页面，不为 1 次展示创建新 URL |

KingShip 的这些“4–20 位”机会展示量很小，应被视为低成本验证点，而非稳定增长预测。

## 6. 有展示但无点击

### 6.1 无点击关键词

| 站点 | 关键词 | 页面 | Impressions | Avg. position |
|---|---|---|---:|---:|
| Alumcasting | `aluminum casting rfq` | knowledge supplier-selection | 49 | 30.59 |
| Alumcasting | `a356 aluminum` | A356 semi-solid guide | 40 | 75.63 |
| Alumcasting | `aluminum die casting china` | 主站首页 | 33 | 17.64 |
| Alumcasting | `aluminum castings pressure testing` | HPDC quality + knowledge die-casting | 50 | 62.92 |
| Alumcasting | `automotive die casting supplier` | 主站首页 + automotive parts | 44 | 53.91 |
| Alumcasting | `china aluminum die casting parts` | 主站首页 | 19 | 19.16 |
| Alumcasting | `aluminum foundry quality certifications` | knowledge supplier-selection | 14 | 7.79 |
| KingShip | `aluminum casting cnc machining service` | CNC machining | 29 | 46.34 |
| KingShip | `aluminum foundry transfer tooling` | Blog landing | 15 | 34.27 |
| KingShip | `aluminum casting engineering consultation` | Blog landing | 11 | 44.36 |
| KingShip | `casting cnc machining supplier` | CNC machining | 6 | 14.83 |
| KingShip | `medical equipment housing casting` | Medical aluminum housing article | 3 | 6.67 |

### 6.2 高展示零点击页面

#### Alumcasting

| 页面 | Impressions | Clicks | CTR | Avg. position | 建议行动 |
|---|---:|---:|---:|---:|---|
| `/automotive-die-casting-parts/` | 1,393 | 0 | 0% | 50.14 | 最大展示页；审计 query 与页面意图、标题、内链和权威度 |
| `knowledge.../die-casting/` | 1,158 | 0 | 0% | 42.89 | 知识 Hub 排名过深；先做内容架构与 canonical 自查，不改 URL |
| `/die-cast-aluminum-electric-motor-housing-suppliers/` | 649 | 0 | 0% | 22.10 | 接近第 2 页；优化 motor housing 摘要、证据和 CTA |
| `/aluminum-die-casting/` | 569 | 0 | 0% | 59.50 | 检查与首页、automotive parts 页的关键词分工 |
| `knowledge.../supplier-selection/` | 381 | 0 | 0% | 25.85 | 对 `aluminum casting rfq` 增加可执行 RFQ 数据包 |
| `/gravity-die-casting-manufacturer/` | 370 | 0 | 0% | 28.78 | 保持 AlumCasting 独立工艺内容，不迁移到 KingShip |
| `knowledge.../materials/zinc-die-casting-alloys/` | 302 | 0 | 0% | 41.76 | Zamak/zinc 继续归 AlumCasting，不复制到 KingShip |
| `knowledge.../reference/` | 281 | 0 | 0% | 28.55 | 优化 reference Hub 的搜索入口和内容分组 |

#### KingShip

| 页面 | Impressions | Clicks | CTR | Avg. position | 建议行动 |
|---|---:|---:|---:|---:|---|
| `/blog/` | 524 | 0 | 0% | 15.54 | 最大异常；约 25 个可见 query 指向 flange、cold forming、investment casting 等非核心主题，应收紧博客入口定位 |
| `/aluminum-die-casting/` | 63 | 0 | 0% | 31.62 | 加强铝压铸商业页与 CNC、医疗、工具内容的差异化 |
| `/tooling/` | 18 | 0 | 0% | 40.33 | 以 SKD61/模具设计长尾为优先试验点 |
| `/semi-solid-rheocasting/` | 13 | 0 | 0% | 29.00 | 建立半固态技术权威，避免复制 AlumCasting 内容 |
| `/ja/` | 13 | 0 | 0% | 13.85 | 优化日文摘要、内链与内容深度 |

## 7. 品牌词、非品牌词与明显无关查询

### 7.1 品牌词

已分别查询：

- Alumcasting：`alumcasting`、`alum casting`、`alumcasting.com`
- KingShip：`kingship`、`king ship`

28 天内返回的可见 query rows 中没有这些品牌词。但不能据此判断品牌搜索为零：

- GSC 会匿名化低量查询。
- Alumcasting 总点击 55，但可见 query rows 只显示 1 click。
- KingShip 总点击 5，但可见 query rows 全部 0 clicks。

**结论：** 本次数据不足以评价品牌词需求或品牌健康度。

### 7.2 非品牌词

可见查询主要是非品牌商业与技术长尾：

- 铝/镁压铸制造商、工厂、供应商
- ADC12、A380、A356、Zamak 等材料
- 铸件 CNC、模具、热处理、检测、DFM
- automotive、medical、EV、oil and gas 应用

### 7.3 明显不相关或不应主动追逐的查询

| 查询/类型 | 站点与页面 | 判断 |
|---|---|---|
| `# role specification v2 ...` prompt 类长查询 | Alumcasting 首页，1 imp，pos 1 | 异常/无关查询，不优化 |
| `site:oeform.com` | Zamak comparison guide，2 imp，pos 8.5 | 跨站 operator 查询，不优化 |
| cold forming / cold rolling / cold forming tooling | KingShip blog | 与 HPDC/CNC 相邻但不同工艺；不应用来改写 KingShip 核心定位 |
| low MOQ investment casting | KingShip blog | 投资铸造意图，不应创建投资铸造内容 |
| medical device sheet metal housing | KingShip query set | 钣金工艺意图，不应作为医疗铸件页面主目标 |
| aluminum extrusion supplier/process inspection | AlumCasting | 挤压工艺，不混入压铸/CNC 内容 |
| calculator / density / weight 查询 | AlumCasting tools、knowledge | 工具型流量，不应优先于高商业意图页面 |
| `/users/*`、`/tags/*` | KingShip | 明显不是 B2B 业务页面 |

## 8. 两个网站的关键词重叠和潜在竞争

### 8.1 精确重叠

| 查询 | Alumcasting 主站/知识站 | KingShip | 判断 |
|---|---|---|---|
| `aluminum casting engineering consultation` | knowledge supplier-selection 55 imp，pos27.44；knowledge contact 52 imp，pos33.02；主站少量 | blog 11 imp，pos44.36 | Alumcasting 更强；KingShip 不应另建重复咨询页 |
| `aluminum foundry engineering support` | blog 61 imp，pos14.16；knowledge 首页66，pos23.09；contact18，pos37.22 | blog 13 imp，pos45.92 | Alumcasting 明显更强；KingShip 应只承接具体工程问题 |
| `casting cnc machining supplier` | precision CNC 9 imp，pos58.33 | CNC 6 imp，pos14.83 | KingShip 更接近首页，可发展 cast-to-CNC 差异 |
| `medical equipment aluminum casting` | 主站 medical pages 7 + 5 imp，排名约58–67 | medical housing article 2 imp，pos8.50 | KingShip 有更强但低量排名；应围绕医疗外壳工程差异化 |
| `aluminum casting cnc machining service` | 过滤后主站无可见行 | CNC 29 imp，pos46.34 | 当前主要是 KingShip 机会，不新增重复 URL |

### 8.2 建议分工

- **AlumCasting**：broad manufacturer、alloy reference、Zamak/zinc、sand/gravity casting、供应商选择知识站。
- **KingShip**：casting-to-CNC interface、medical housings、tooling/SKD61、semi-solid 和检测工程。
- 对主站已经排名更好的 `engineering consultation` 与 `engineering support`，KingShip 不应复制完整页面，应强化链接和差异化技术内容。
- KingShip `/blog/` 不应继续承接 flange、cold forming、investment casting 等非目标查询。
- 两站避免复用同一 title/H1/FAQ/CTA 模板。

## 9. 索引异常与无关 URL

URL Inspection 显示部分历史主题页面仍被 Google 索引：

| URL | 当前索引状态 | 说明 |
|---|---|---|
| `https://kingship.alumcasting.com/users/1-96d3e57dcc931de55cc23a825d40be2c/` | Not found (404) | 已 404，但查询窗口仍有 3 impressions |
| `https://kingship.alumcasting.com/tags/dwkde/` | Not found (404) | 已 404，但查询窗口仍有 1 impression |
| `https://kingship.alumcasting.com/de/tags/dwkde/` | 已提交并索引 | 仍被 Google 索引 |
| `https://kingship.alumcasting.com/es/users/126-cdbb83b9de2176ac468416802e61d6df/` | 已提交并索引 | 仍被 Google 索引 |
| `https://kingship.alumcasting.com/fr/tags/software-engineering/` | 已提交并索引 | 仍被 Google 索引 |

这些页面对应的 query 未在 Search Analytics 明细中暴露。

建议后续单独评估：

- 盘点所有 `/users/*`、`/tags/*` 和旧语言路径。
- 确认是否有业务或历史价值。
- 对无价值页面再制定 Sitemap、内部链接和索引清理方案。
- 本轮不修改 URL、Canonical、Redirect 或 GSC 设置。

## 10. 优先机会清单

| 优先级 | 站点 | 关键词/页面 | 现状 | 建议行动 |
|---|---|---|---|---|
| 1 | Alumcasting | `zamak 3` / Zamak guide | 43 imp，0 click，pos8.53 | 优化 title/meta 和首段，直接回答 Zamak 3 性能、成分、用途 |
| 2 | Alumcasting | `zamak 5` / Zamak guide | 34 imp，0 click，pos7.15 | 增加 Zamak 5 独立摘要、性能表和对比 |
| 3 | Alumcasting | `epe enclosures for oil and gas` / explosion-proof page | 27 imp，0 click，pos8.96 | title、首段、FAQ 对齐 EPE/oil and gas；强化 RFQ |
| 4 | Alumcasting | `oil and gas enclosure manufacturer` / same page | 20 imp，0 click，pos17.70 | 强化 manufacturer 证据、认证文件和采购入口 |
| 5 | Alumcasting | `aluminum die casting china` / homepage | 33 imp，0 click，pos17.64 | 明确服务页与首页分工，优化内链和摘要 |
| 6 | Alumcasting | heat-treatment page / T5、T7 | T7 process 10 imp/pos6.60；T5 19 imp/pos19.21 | 增加 T4/T5/T6/T7 对照和 FAQ |
| 7 | Alumcasting | motor housing queries | manufacturer 15 imp/pos18；EV housing10 imp/pos8.10 | 对齐 motor housing title、首段和检测/RFQ 模块 |
| 8 | Alumcasting | `aluminum casting rfq` / supplier-selection | 49 imp，0 click，pos30.59 | 建立 RFQ 数据包、资格文件和审查步骤 |
| 9 | KingShip | `/blog/` 页面总盘 | 524 imp，0 click，pos15.54 | 收紧博客入口定位，检查无关 query 的进入原因 |
| 10 | KingShip | `casting cnc machining supplier` / CNC page | 6 imp，0 click，pos14.83 | 低成本优化 supplier intent、首段和 RFQ CTA |
| 11 | KingShip | `aluminum casting cnc machining service` / CNC page | 29 imp，0 click，pos46.34 | 长期强化 cast-to-CNC、图纸流程与检测能力 |
| 12 | KingShip | medical housing casting queries | 1–3 imp，pos4–12 | 优化现有 article 的 title/摘要/Medical 内链，不新增近重复页 |
| 13 | KingShip | `skd61 custom die casting mold making` / tooling | 2 imp，0 click，pos4 | 强化材料选择与 RFQ 输入，保留 SKD61 为示例 |

## 11. 后续复测建议

1. 本窗口只有 28 天，低展示长尾不具统计稳定性；应在 4 周后使用相同长度复测。
2. 对 Alumcasting 优先做 query-page 归属和 snippet 优化，不先批量创建新页面。
3. 对 KingShip 优先修复 `/blog/` 的意图漂移、CNC 与 Medical 的既有机遇。
4. 品牌词需求需要更长时间窗口或 GA4/CRM 辅助，不能依据本次匿名化数据判断。
5. 所有后续变更均需单独审批；本报告未修改任何内容或设置。
