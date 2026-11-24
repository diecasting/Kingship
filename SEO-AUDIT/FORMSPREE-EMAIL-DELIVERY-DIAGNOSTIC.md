# KingShip Formspree RFQ 邮件投递诊断

**最终核验日期：** 2026-11-24  
**表单：** `Kingship Web RFQ`（Form ID `xpqgbdly`）  
**邮件门禁：** `EMAIL DELIVERY = PASS`  
**部署状态：** 未部署；按用户要求暂停等待下一步授权

## 1. 最终结论

无附件 RFQ 已完成真实端到端验证：

- 用户从本地预览页面手动提交；
- Formspree 保存了 Submission `173776100`；
- Submission 位于 Inbox，不在 Spam；
- Formspree 显示 `_status hank@alumcasting.com: delivered`；
- 用户明确确认 `hank@alumcasting.com` 已实际收到邮件通知。

因此，RFQ 的“无附件提交 → Formspree 接收 → 通知发送 → 目标邮箱实收”链路已闭合。

## 2. 最新成功提交

Formspree 后台只读记录：

| 检查项 | 结果 | 状态 |
|---|---|---|
| Form | `Kingship Web RFQ` | PASS |
| Form ID | `xpqgbdly` | PASS |
| Submission ID | `173776100` | PASS |
| 后台时间 | `Nov 24, 2026, 07:39` | PASS |
| 所在文件夹 | `Inbox` | PASS |
| `_replyto` | `a***@gmail.com`（已脱敏） | PASS |
| `_subject` | `KingShip Technical RFQ - EN` | PASS |
| Company | `填写公司内部测试名称` | PASS |
| Name | `KingShip Internal QA` | PASS |
| Material | `Aluminum-ADC12` | PASS |
| Attachment | 无附件字段记录 | PASS |
| 通知状态 | `_status hank@alumcasting.com: delivered` | PASS |
| 目标邮箱实收 | 用户已明确确认收到 | PASS |

用户确认的实收证据优先于 Formspree 页面状态；两者当前相互一致。

## 3. 无附件前端路径

公共短代码：

```text
layouts/shortcodes/rfq_form.html
```

当前设置：

- 七语言标签均为 `FILE UPLOAD (OPTIONAL)` 或对应语言；
- `input[name="attachment"]` 不再有 `required`；
- 无文件时 JavaScript 不阻止提交；
- Full Name、Business Email、Project Details 仍为必填；
- Formspree endpoint 仍为 `https://formspree.io/f/xpqgbdly`；
- 84 个生产表单没有增加第二个 endpoint。

本地预览 DOM 曾确认：

```text
FILE UPLOAD required=false
FILE UPLOAD validity.valid=true
Full Name required=true
Business Email required=true
Project Details required=true
```

## 4. Formspree 配置

| 配置 | 当前值 | 状态 |
|---|---|---|
| Project | `My First Project` | PASS |
| Form Enabled | 已启用 | PASS |
| Submission Archive | 已启用 | PASS |
| Email action | `Email hank@alumcasting.com` | PASS |
| Email action Enabled | 已启用 | PASS |
| Send to | `hank@alumcasting.com` | PASS |
| Account email | `hank@alumcasting.com` | PASS |
| Account email status | `Verified` | PASS |
| Endpoint | 未修改 | PASS |
| 收件人/通知规则 | 未修改 | PASS |

本轮只读取后台，没有修改 endpoint、收件人、通知或过滤设置。

## 5. 历史 Spam 测试

此前有一条测试位于 Spam：

```text
Submission ID: 173688253
Subject: INTERNAL RELEASE-GATE TEST - DO NOT CONTACT - 20261124
```

该提交没有 `_status`，因此没有触发通知邮件。它验证了：

- Formshield 会拦截被判定为 Spam 的提交；
- Spam 提交通常不会产生通知；
- 不能用 Spam 中的旧测试代表正常 Inbox 投递链路。

该历史问题已被 Submission `173776100` 的正常 Inbox 和实际收件结果覆盖。

## 6. 附件上传限制

Formspree 当前为 Free 计划，官方文件上传功能要求 Personal、Professional 或 Business 计划。

因此：

- 不上传附件的 RFQ 正常；
- 选择附件后 Formspree 仍可能返回 `NO_FILE_UPLOADS`；
- 页面当前仍显示选填附件控件，可能让客户误以为上传可用；
- 建议在升级套餐或其他已批准上传流程上线前隐藏该控件；
- 本轮没有擅自删除控件或购买套餐。

## 7. 风险边界

本次 PASS 证明：

- 当前 endpoint 与通知收件人可用；
- 无附件 RFQ 能进入 Inbox；
- 通知邮件能到达目标邮箱。

本次 PASS 不证明：

- Formspree Free 套餐支持文件上传；
- 所有未来邮件必然不会被垃圾过滤；
- GA4 `rfqSuccess` 已送达；
- CRM 已接入。

仍应在上线后持续检查 Inbox/Spam、通知失败、退信和真实询盘响应情况。

## 8. 最终状态

```text
EMAIL DELIVERY = PASS
FILE UPLOAD = NOT VERIFIED / LIMITED BY FORMSPREE FREE PLAN
RELEASE GATE = SEE KINGSHIP-FINAL-RELEASE-GATE.md
DEPLOYMENT = NOT PERFORMED
```

