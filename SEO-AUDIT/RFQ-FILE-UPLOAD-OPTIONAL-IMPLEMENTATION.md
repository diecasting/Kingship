# KingShip RFQ 文件上传改为选填：实施与验证报告

**日期：** 2026-11-24  
**范围：** 七语言共享技术 RFQ、共享前端提交逻辑和本地自动化测试  
**状态：** 本地实现完成；真实 Formspree 文件上传仍受当前 Free 套餐限制

## 1. 执行边界

本轮未执行以下操作：

- 未部署生产环境；
- 未 commit、push 或 merge；
- 未修改 Formspree endpoint；
- 未修改 Formspree 收件人、通知、邮件模板或账户套餐；
- 未向 Formspree 提交测试询盘；
- 未执行 `git reset`、`git clean`、`git checkout` 或 `git restore`。

开始时工作区已有 237 个 tracked modified、57 个 tracked deleted 和 62 个 untracked files。
这些既有修改全部保留。

## 2. 修改文件

| 文件 | 修改 |
|---|---|
| `layouts/shortcodes/rfq_form.html` | 七语言 File Upload 标签移除星号并标记 Optional；附件 input 移除 `required` |
| `static/js/rfq-lead-tracking.js` | 无文件时放行；增加 25 MB 文件大小检查；修复 Formspree 数组错误显示为 `0`；增加七语言文件错误文案 |
| `SEO-AUDIT/tests/rfq-file-optional-test.js` | 新增四项必需场景及 Formspree 文件错误回归测试 |

没有修改：

- `layouts/partials/rfq-form.html`
- `layouts/partials/home/page.html`
- Formspree action、字段名称或邮件数据映射。

## 3. 七语言标签修改

七种语言共用 `layouts/shortcodes/rfq_form.html`，因此只修改公共模板，没有复制独立页面。

| 语言 | 修改后标签 | 行号 |
|---|---|---:|
| EN | `FILE UPLOAD (OPTIONAL)` | 15 |
| DE | `DATEI-UPLOAD (OPTIONAL)` | 28 |
| ES | `ARCHIVO (OPCIONAL)` | 41 |
| FR | `TÉLÉVERSEMENT DE FICHIER (FACULTATIF)` | 54 |
| IT | `CARICAMENTO FILE (OPZIONALE)` | 67 |
| JA | `ファイルアップロード（任意）` | 80 |
| KO | `파일 업로드 (선택 사항)` | 93 |

实际 input：

```html
<input id="technical-rfq-file" type="file" name="attachment"
  style="...">
```

文件：`layouts/shortcodes/rfq_form.html:131`  

`required` 属性已删除。

## 4. JavaScript 验证修改

### 4.1 无文件时放行

`static/js/rfq-lead-tracking.js:119-132` 中的附件验证会先读取文件列表：

```js
var files = input.files;
if (!files || !files.length) return true;
```

文件为空时直接通过，不再把附件视为必填。

### 4.2 其他必填字段保持不变

`static/js/rfq-lead-tracking.js:184-187` 仍执行：

```js
if (typeof form.checkValidity === 'function' && !form.checkValidity()) {
  form.reportValidity();
  return;
}
```

Name、Business Email、Project Details 的原生 required 验证未被放宽。

### 4.3 文件大小检查

`static/js/rfq-lead-tracking.js:11` 使用 Formspree 官方系统上限：

```js
var MAX_FILE_SIZE = 25 * 1024 * 1024;
```

超过 25 MB 时：

- 不调用 Formspree；
- 阻止提交；
- 在附件控件显示本地化验证提示；
- 在表单状态区域显示同一错误；
- 聚焦附件控件。

### 4.4 文件格式

原模板没有 `accept`，Formspree Workflow 当前也只有 `email` 后端校验，没有附件格式白名单。
因此本轮没有虚构 CAD/PDF 等允许格式。

当后台拒绝文件格式时，前端现在会显示 Formspree 返回的真实字段和消息，例如：

```text
Please check: attachment: File type is not accepted.
```

不再显示 `Please check: 0.`。

如果业务方之后确定允许格式，可在附件 input 上增加 `accept`，浏览器原生格式验证和现有错误显示可以继续使用。

### 4.5 Formspree 错误解析

原代码把 Formspree 的 `errors` 数组当成普通对象：

```js
Object.keys(body.errors)
```

这会得到数组索引 `"0"`。现在
`static/js/rfq-lead-tracking.js:137-167` 会：

- 按数组遍历；
- 读取 `field`、`code` 和 `message`；
- 将 `FILES_TOO_BIG`、`NO_FILE_UPLOADS` 和 `TOO_MANY_FILES` 映射为本地化文件提示；
- 兼容旧的 object-shaped error；
- 过滤空消息。

### 4.6 清除旧错误

`static/js/rfq-lead-tracking.js:180-181` 在每次提交和原生验证前清除：

- 上一次的 `.rfq-status` 文案；
- 附件 input 的旧自定义有效性错误。

因此用户更换或移除文件后，不会继续被上一次的大小错误阻止。

## 5. HTML required 属性验证

使用 Hugo v0.170.1 重新构建全部七语言。

| 检查 | 结果 |
|---|---:|
| HTML 入口 | 178 |
| Formspree forms | 84 |
| 唯一 endpoint | 1 |
| `method=POST` | 84 / 84 |
| 技术表单 multipart | 77 |
| name required | 84 / 84 |
| `_replyto` required | 84 / 84 |
| message required | 84 / 84 |
| File input | 77 |
| File input with `required` | **0** |
| File 标签残留星号 | **0** |

七语言生成数量：

| 标签 | 生成数量 |
|---|---:|
| EN | 14 |
| DE | 21 |
| ES | 12 |
| FR | 12 |
| IT | 3 |
| JA | 12 |
| KO | 3 |
| 合计 | 77 |

构建目录：

```text
C:\Users\Ansonzhang\AppData\Local\Temp\kingship-file-optional-final-b89284388275400393cad43b48602edf
```

## 6. Formspree endpoint 未变

构建后检查：

- 84 个前台表单；
- 全部使用 `https://formspree.io/f/xpqgbdly`；
- 唯一 endpoint 数量为 1；
- endpoint、收件人、通知配置和数据字段均未修改。

## 7. 测试结果

### 测试 A：不上传文件

**PASS（本地客户端集成模拟）**

自动化场景：

- 其他必填字段有效；
- `attachment.files.length = 0`；
- 触发 submit handler。

结果：

- 表单验证通过；
- 附件不阻止提交；
- `fetch` 调用 1 次；
- 模拟成功后显示 RFQ 已接收提示。

### 测试 B：上传有效文件

**客户端 PASS；Formspree 服务端上传 NOT VERIFIED**

自动化场景：

- 附件大小 1 KB；
- 低于 25 MB；
- 其他必填字段有效。

结果：

- 附件大小检查通过；
- 前端准备并提交一次请求；
- 未实际向 Formspree 上传文件。

重要限制：Formspree 后台当前为 **Free** 计划，官方文件上传功能要求 Personal、
Professional 或 Business 计划。免费计划本身明确列出 `File upload` 为待升级功能。

因此：

- 正确的“无文件 RFQ”不再被附件字段阻止；
- 真正携带文件的 Formspree 端到端上传仍不能标记为 PASS；
- 若业务要求文件上传成功，需要单独批准套餐或改为其他已批准文件收集方式。

### 测试 C：无效文件

**PASS（本地客户端和错误显示）**

超限文件：

- 大小：`25 * 1024 * 1024 + 1` 字节；
- `fetch` 调用 0 次；
- 附件控件报告一次 `reportValidity()`；
- 七种语言均显示本地化的大小错误；
- 不再出现 `Please check: 0.`。

不支持格式：

- 当前没有项目级格式白名单；
- 使用模拟的 Formspree 字段错误 `attachment: File type is not accepted`；
- 前端显示完整字段和消息，不显示数组索引 `0`。

### 测试 D：其他必填字段

**PASS**

自动化场景模拟 `form.checkValidity() === false`：

- `fetch` 调用 0 次；
- `reportValidity()` 调用 1 次；
- 不出现附件相关错误。

构建结果同时确认 Name、Business Email 和 Project Details 在 84 个表单中继续带有 `required`。

## 8. 执行的命令与结果

```text
node SEO-AUDIT/tests/rfq-tracking-test.js
rfq-tracking-test: PASS

node SEO-AUDIT/tests/rfq-file-optional-test.js
rfq-file-optional-test: PASS

node --check static/js/rfq-lead-tracking.js
PASS

hugo --minify --config config/_default/hugo.toml
PASS

git diff --check
PASS
```

## 9. 尚需人工或业务确认

1. 是否继续保留文件上传入口。
2. 若需要真实文件上传，选择升级 Formspree 支持文件上传的计划，或采用已批准的其他文件收集流程。
3. 是否定义允许的附件格式，例如 CAD、PDF、ZIP 等；当前没有既有规则，本轮未自行添加。
4. 真实文件上传在 Formspree 端到端环境中验证后，才能把该项改为完整 PASS。

## 10. 最终结论

- 文件上传字段已从必填改为选填；
- 七语言标签一致；
- 84 个 endpoint 未改变；
- 其他必填字段验证未改变；
- 无文件时的前端提交路径已通过本地自动化测试；
- 文件大小和 Formspree 数组错误的显示已改善；
- 实际 Formspree 文件上传仍受 Free 套餐限制，未伪造成功；
- 本轮未部署，结束并等待人工确认。

