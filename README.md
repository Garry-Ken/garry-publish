# Garry Publish - 公众号排版工具

专为**微信公众号**打造的 Markdown 排版引擎。写完即发，样式完美。

## 功能

- **实时预览** — 左侧写 Markdown，右侧即时渲染排版效果
- **11 套主题** — Mac 极简、Claude 燕麦、微信原生、GitHub、Dracula、赛博朋克等
- **一键复制** — 图片自动 Base64 打包，粘贴到公众号后台样式零丢失
- **智能粘贴** — 从飞书、Notion、Word 粘贴富文本，自动转为干净 Markdown
- **多端预览** — 手机 / 平板 / 桌面三种视图，模拟真实阅读体验
- **导出** — 支持 PDF 和 HTML 导出
- **代码高亮** — macOS 风格指示灯 + 多语言语法高亮
- **滚动同步** — 编辑器与预览区联动滚动
- **暗色模式** — 一键切换 Light / Dark

## 快速开始

```bash
git clone https://github.com/Garry-Ken/garry-publish.git
cd garry-publish
npm install
npm run dev
```

浏览器打开 `http://localhost:5173` 即可使用。

## 使用方法

1. 在左侧编辑区输入或粘贴 Markdown 内容
2. 顶部切换排版主题
3. 右侧实时预览效果
4. 点击「复制到公众号」按钮
5. 在公众号后台 Ctrl/Cmd+V 粘贴

## 技术栈

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 3
- markdown-it + highlight.js
- turndown（富文本 → Markdown）
- html2pdf.js（PDF 导出）
- framer-motion（动画）

## 部署

支持一键部署到 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Garry-Ken/garry-publish)

也可以手动构建：

```bash
npm run build
```

产物在 `dist/` 目录，部署到任意静态服务器即可。

## License

MIT
