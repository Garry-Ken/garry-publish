import { readFileSync, writeFileSync } from 'fs';

const { md, preprocessMarkdown, applyTheme } = await import('../src/lib/markdown.ts');
const { makeWeChatCompatible } = await import('../src/lib/wechatCompat.ts');

const [,, filePath, themeId = 'apple'] = process.argv;
if (!filePath) {
  console.error('用法: npx tsx scripts/convert.mjs <file.md> [themeId]');
  console.error('可选主题: apple, claude, wechat, media, stripe, linear, notion, github, dracula, sakura, cyberpunk');
  process.exit(1);
}

const content = readFileSync(filePath, 'utf-8');
const rawHtml = md.render(preprocessMarkdown(content));
const styledHtml = applyTheme(rawHtml, themeId);
const finalHtml = await makeWeChatCompatible(styledHtml, themeId);

writeFileSync('/tmp/garry-publish-output.html', finalHtml, 'utf-8');
process.stdout.write(finalHtml);
