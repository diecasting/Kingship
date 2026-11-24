# KingShip RFQ `Please check: 0` 前端错误诊断

**诊断时间：** 2026-11-24 15:26 +08:00  
**范围：** KingShip 生产 `/contact/` 技术 RFQ、共享短代码、线上 JavaScript、Formspree 错误格式、
Formspree 套餐能力和现有后台提交记录  
**模式：** 只读诊断；未提交测试、未修改网站文件、未部署

## 1. 结论摘要

1. `Please check: 0` 不是浏览器产生的必填字段提示。
2. 它来自 `static/js/rfq-lead-tracking.js` 对 Formspree 非成功响应的错误解析。
3. Formspree 的 `errors` 是数组；当前代码对其使用 `Object.keys()`。只有一个错误时，
   得到的键是数组索引 `"0"`，所以显示成 `Please check: 0.`。
4. 截图所述状态下，Name、Business Email、Project Details 已填写；Company 和 Material 不是必填项。
   唯一未通过浏览器验证的是 `FILE UPLOAD *`，其 `required` 条件为 `valueMissing=true`。
5. 因此，缺失文件本身属于正常必填验证；显示 `0` 而不是“请上传文件/文件上传失败”属于程序逻辑缺陷。
6. 另一个已被后台确认的发布风险是：Formspree 账户当前为 Free 计划，而文件上传功能要求 Personal、
   Professional 或 Business 计划。技术 RFQ 将文件字段设为必需，与当前套餐能力不匹配。
7. 本轮未发现新的 Formspree 提交记录。最新 Inbox 记录仍为 Nov 20；最新 Spam 记录仍为此前的
   Nov 24 00:19 内部测试。该失败请求没有形成可见的保存记录。

## 2. 工作区保护

诊断前工作区已有大量未提交整改，本轮没有 reset、clean、checkout、restore、commit、push 或 deploy，
也没有修改 Formspree endpoint、收件人、通知或网站源文件。除本报告外，未新增网站改动。

## 3. `Please check:` 的来源

### 3.1 字符串位置

| 项目 | 证据 |
|---|---|
| 英文错误前缀 | `static/js/rfq-lead-tracking.js:16` |
| Formspree 非成功响应分支 | `static/js/rfq-lead-tracking.js:137-145` |
| 错误键提取 | `static/js/rfq-lead-tracking.js:140-142` |
| 状态文本渲染 | `static/js/rfq-lead-tracking.js:147-153` |

当前代码：

```js
if (body && body.errors) {
  var keys = Object.keys(body.errors);
  if (keys.length) msg = t.check + keys.join(', ') + '.';
}
```

线上资源
`https://kingship.alumcasting.com/js/rfq-lead-tracking.js`
仍包含同一逻辑，因此该问题已存在于生产环境，而不是仅存在于本地待发布文件。

### 3.2 为什么恰好显示 `0`

Formspree 官方 JavaScript 类型定义将错误响应描述为：

```ts
errors?: ServerError[]
```

每个错误元素包含可选的 `field`、`code`、`details` 和必需的 `message`。参考：

- [Formspree Core `submission.ts`](https://github.com/formspree/formspree-js/blob/3148bfbf06ed1738c618e160684d73a885d4237a/packages/formspree-core/src/submission.ts)
- [Formspree Workflow validation errors](https://help.formspree.io/articles/building-your-form/getting-started-with-workflow/)

当 Formspree 返回：

```json
{
  "errors": [
    {
      "field": "attachment",
      "code": "NO_FILE_UPLOADS",
      "message": "File uploads are not supported for this form"
    }
  ]
}
```

`Object.keys(body.errors)` 的结果是 `["0"]`，而不是字段名 `attachment`。当前代码随后执行
`keys.join(', ')`，因此得到 `0`。

已使用当前本地 JavaScript 和纯本地模拟响应验证：

```text
{"status":"Please check: 0.","buttonDisabled":false,"dataLayerLength":0}
```

该模拟没有访问 Formspree，也没有提交表单。

### 3.3 `0` 的实际含义

`0` 是 Formspree 错误数组第一个元素的索引，不是：

- HTTP 状态码；
- HTTP 状态码的末位；
- Formspree 错误代码；
- 文件数量；
- 表单字段编号；
- 用户输入验证结果。

## 4. 当前表单字段验证

生产 `/contact/` 页面使用与
`layouts/shortcodes/rfq_form.html:100-144` 相同结构的技术 RFQ。只读检查生产 DOM 得到：

| 字段 | HTML 类型 | required | 诊断结果 |
|---|---|---:|---|
| Name | text | 是 | 已填写，通过 |
| Company | text | 否 | 已填写；本来也不是必填项 |
| Business Email | email | 是 | 已填写，格式通过 |
| Material | select | 否 | 已选择 ADC12；本来也不是必填项 |
| File Upload | file | 是 | 未选择文件，`valueMissing=true` |
| Project Details | textarea | 是 | 已填写，通过 |

生产浏览器返回的文件字段状态：

```text
required: true
files: none
valid: false
valueMissing: true
validationMessage: 请选择一个文件。
```

当前截图中缺失的必填字段只有 `attachment`。

相关源码：

- `layouts/shortcodes/rfq_form.html:107`：Name 为 required。
- `layouts/shortcodes/rfq_form.html:117`：Business Email 为 required。
- `layouts/shortcodes/rfq_form.html:131`：File Upload 为 required。
- `layouts/shortcodes/rfq_form.html:137`：Project Details 为 required。

## 5. 浏览器和 JavaScript 的阻止行为

### 5.1 正常运行路径

`static/js/rfq-lead-tracking.js:89-93` 在发起 `fetch` 前执行：

```js
if (typeof form.checkValidity === 'function' && !form.checkValidity()) {
  form.reportValidity();
  return;
}
```

因此：

- 未选文件时，浏览器原生约束会阻止提交；
- JavaScript 也会再次检查完整表单；
- 不应向 Formspree 发出请求；
- Formspree 错误解析不应被触发。

### 5.2 已确认的显示缺陷

`Please check: 0` 只可能出现在以下条件同时成立时：

1. 请求已经发出；
2. Formspree 返回非 2xx；
3. JSON 响应包含非空 `errors` 数组；
4. 旧版错误渲染逻辑把数组索引 `0` 当作字段名。

如果用户在没有选择文件的情况下点击提交，正常情况下不会出现该自定义错误。截图中同时看到
“File Upload 未选择”和“Please check: 0”，有两种可能：

- 该文本是之前一次文件相关服务器错误留下的旧提示，当前点击只触发浏览器“请选择文件”验证；
- 或一次异常提交绕过了浏览器文件必填验证，Formspree 返回错误数组。

当前没有网络响应正文或浏览器控制台日志，无法确认用户截图对应的具体一次 HTTP 响应。

另一个已确认的行为是：`static/js/rfq-lead-tracking.js:90-92` 在原生验证失败时直接返回，
没有清除已有的 `.rfq-status`。因此旧错误可以继续显示在页面上，形成误导。

## 6. 文件上传配置与能力

### 6.1 当前 HTML

- `enctype="multipart/form-data"`：存在，格式正确。
- `method="POST"`：存在。
- `name="attachment"`：存在。
- `type="file"`：存在。
- `required`：存在。
- `accept`：不存在，因此此表单本身未限制扩展名或 MIME 类型。
- 文件大小客户端校验：不存在。
- `multiple`：不存在，因此该控件最多选择一个文件。

Formspree 的全系统限制为每个文件最大 25 MB、每次最多 10 个文件、请求总大小最多 100 MB：

[Formspree File uploads](https://help.formspree.io/articles/building-your-form/file-uploads)

### 6.2 Free 计划不支持文件上传

Formspree 后台 `https://formspree.io/account/billing` 显示：

```text
You're on the Free plan
Upgrade your account for:
- File upload
```

Formspree 官方文件明确写明文件上传适用于 Personal、Professional 和 Business 计划：

[Formspree File uploads](https://help.formspree.io/articles/building-your-form/file-uploads)

这构成功能配置冲突：

- 生产技术 RFQ 将文件设为硬性必填；
- 当前 Formspree 账户不支持文件上传；
- 即使浏览器正确通过文件选择，服务端也可能返回 `NO_FILE_UPLOADS`；
- 当前前端会把这个服务端错误显示成难以理解的 `Please check: 0.`。

该问题是明确的高优先级发布风险，但本轮不购买套餐、不修改套餐、不修改表单字段。

## 7. 字段级错误处理评估

| 检查项 | 结论 |
|---|---|
| 未选文件时是否应阻止提交 | 应阻止 |
| 当前代码是否有原生约束检查 | 有 |
| 是否有自定义文件大小校验 | 无 |
| 是否有自定义允许类型校验 | 无 |
| 是否显示 Formspree 具体错误消息 | 否，只显示数组索引 |
| 是否将错误定位到 `attachment` 字段 | 否 |
| 是否设置字段级 `aria-invalid` | 否 |
| 验证失败时是否清理旧错误提示 | 否 |
| 当前测试是否覆盖 Formspree 数组错误 | 否 |

现有测试 `SEO-AUDIT/tests/rfq-tracking-test.js:79-88` 使用：

```js
errors: { message: "Required" }
```

这是对象形式，并非 Formspree 官方列出的数组形式，因此测试通过并未覆盖生产中的 `0` 问题。

## 8. Formspree 是否收到这次失败测试

只读检查 Formspree 后台当前记录：

- Inbox 最新记录：`Nov 20, 04:54`。
- Spam 最新记录：`Nov 24, 00:19`，即此前的
  `INTERNAL RELEASE-GATE TEST - DO NOT CONTACT - 20261124`。
- 没有发现晚于上述时间的新测试记录。

结论：

- 没有产生新的可见 Submission 记录；
- 无效或仅客户端验证失败的提交通常不会形成 Submission；
- 如果请求到达 Formspree 后被服务器拒绝，后台也可能不会保留为 Submission；
- 在没有网络日志或响应正文时，不能证明本次失败请求完全没有到达 Formspree 服务器。
- 本轮没有重复提交。

## 9. 问题分类

### 正常行为

- 未上传文件时，文件字段因 `required` 不通过，这是正常必填验证。
- Name、Email、Message 的必填规则正常。
- Company 和 Material 不是必填项。

### 程序逻辑缺陷

- `static/js/rfq-lead-tracking.js:140-142` 将 Formspree 错误数组当作对象处理。
- 只显示数组索引 `0`，没有显示 `message`、`field` 或 `code`。
- 原生验证失败时没有清除旧状态文本。
- 没有字段级错误映射和可见的附件字段错误容器。
- 测试使用了非生产形态的错误对象，遗漏数组响应。

### 配置/产品决策问题

- 技术 RFQ 强制要求文件，但 Formspree 当前 Free 计划不支持文件上传。
- 文件类型与大小没有前端策略；25 MB 是 Formspree 系统限制，但业务允许的文件类型尚未确定。

## 10. 最小修复建议

本轮不实施。建议按以下顺序处理：

### P0：先解决文件上传能力冲突

在不修改 endpoint 的前提下，由业务方选择：

1. 保留强制文件上传，并升级 Formspree 到支持文件上传的计划；这涉及付费，需明确批准。
2. 将附件改为可选，提交后再由采购方通过现有已验证联系邮箱发送图纸；需确认询价流程。
3. 采用其他已批准的安全文件收集流程；不得使用未经核验的第三方临时上传服务。

在能力对齐前，不应宣称技术 RFQ 的附件上传已经可用。

### P1：修复错误解析

将 Formspree `errors` 按数组处理，提取：

- `error.field`
- `error.code`
- `error.message`

页面应显示可读消息，例如“附件字段：文件上传不受支持”，而不是数组索引 `0`。同时兼容旧对象形式，
避免破坏其他 Formspree 响应。

### P1：补齐字段级错误

- 在每次 submit 开始时清除旧 `.rfq-status`。
- 原生验证失败时，聚焦并滚动到第一个无效字段。
- 在附件字段旁显示本地化错误文本。
- 为无效字段设置 `aria-invalid="true"`。
- Formspree 返回 `field` 时，将错误映射到对应输入控件。

### P1：更新测试

增加至少三个用例：

1. `errors: [{field:"attachment", code:"NO_FILE_UPLOADS", message:"..."}]`
   不得显示 `Please check: 0.`。
2. `errors: [{message:"forbidden"}]` 不得显示 `Please check: 0.`。
3. `checkValidity() === false` 时不得调用 `fetch`，并应清除旧错误提示。

### P2：文件类型和大小策略

在业务方确认可接收文件类型后：

- 为 `accept` 设置明确 MIME/扩展名；
- 在客户端检查单文件超过 Formspree 25 MB 的情况；
- 显示允许类型和大小限制；
- 不将 25 MB 系统限制误写成企业自身的商务承诺。

## 11. 最终判断

| 问题 | 结论 |
|---|---|
| `0` 的来源 | 已定位到 `static/js/rfq-lead-tracking.js:140-142` |
| `0` 的含义 | Formspree `errors` 数组的第一个索引 |
| 当前缺失字段 | `attachment` |
| 缺失文件是否正常 | 是，正常的 HTML required 验证 |
| `Please check: 0` 是否正常 | 否，是错误渲染缺陷 |
| 是否还有未知必填字段失败 | 未发现 |
| Formspree 是否保存了本次失败测试 | 未发现新记录 |
| 文件上传功能是否可用 | 当前 Free 计划不支持，`FAIL` |
| 是否完成部署 | 否，且本轮禁止部署 |

**当前发布结论：** RFQ 技术表单仍存在实际阻塞，不能把附件上传链路标记为 `PASS`。  
**下一步：** 先由业务方决定文件上传方案，再按本报告最小修复建议实施并验证。

