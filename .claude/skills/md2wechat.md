---
name: md2wechat
description: 将 Markdown 文件转换为微信公众号兼容的 HTML，支持选择主题，结果复制到剪贴板
---

# Markdown 转公众号 HTML

将指定的 Markdown 文件（或当前对话中的 Markdown 内容）转换为带主题样式的微信公众号兼容 HTML。

## 参数

用户可以指定：
- Markdown 文件路径（必须）
- 主题名称（可选，默认 apple）。可选主题：apple, claude, wechat, media, stripe, linear, notion, github, dracula, sakura, cyberpunk

## 步骤

1. 读取用户指定的 Markdown 文件内容
2. 在项目根目录下，使用 Node.js 脚本执行转换：
   - 用 `src/lib/markdown.ts` 中的 `md.render(preprocessMarkdown(content))` 渲染 HTML
   - 用 `applyTheme(html, themeId)` 应用主题样式
   - 用 `src/lib/wechatCompat.ts` 中的 `makeWeChatCompatible(html, themeId)` 做微信兼容处理
3. 将最终 HTML 写入临时文件 `/tmp/garry-publish-output.html`
4. 用 `pbcopy` 将 HTML 复制到系统剪贴板
5. 告诉用户已复制，可直接粘贴到公众号后台

## 转换脚本

如果项目中没有 `scripts/convert.mjs`，先创建它：

```javascript
import { readFileSync } from 'fs';
import { register } from 'tsx/esm/api';

const unregister = register();

const { md, preprocessMarkdown, applyTheme } = await import('../src/lib/markdown.ts');
const { makeWeChatCompatible } = await import('../src/lib/wechatCompat.ts');

const [,, filePath, themeId = 'apple'] = process.argv;
if (!filePath) { console.error('Usage: node scripts/convert.mjs <file.md> [themeId]'); process.exit(1); }

const content = readFileSync(filePath, 'utf-8');
const rawHtml = md.render(preprocessMarkdown(content));
const styledHtml = applyTheme(rawHtml, themeId);
const finalHtml = await makeWeChatCompatible(styledHtml, themeId);

process.stdout.write(finalHtml);
```

然后运行：`npx tsx scripts/convert.mjs <file.md> [themeId] | pbcopy`

注意：需要先 `npm install -D tsx` 安装 tsx 运行时。
