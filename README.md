# 技术面经复习台

一个面向 C++ 量化开发的个人面经整理与复习工具，桌面优先、移动端可用。

## 补充自己的内容

两类资料完全分开维护：

- `src/companyExperiences.js`：完整的公司面经，每场面试或笔试是一篇独立文档，不需要拆成题目，也不计入复习进度。
- `src/questions.js`：按 C++、高频低延迟、系统、算法和量化策略整理的知识库题目。

界面中的“知识库”只用于搜索和阅读，不记录掌握状态；需要隐藏答案、标记“模糊/已掌握”和查看进度时，进入独立的“专项复习”模式。设置了 `trackProgress: false` 的知识笔记不会进入专项复习。

新增公司面经时，在 `src/companyExperiences.js` 的数组中复制一个对象：

```js
{
  id: "company-role-round",
  company: "公司名称",
  type: "面试",
  round: "量化开发一面",
  date: "2026-09-08",
  time: "14:30",
  duration: "约 45 分钟",
  title: "公司名称 · 量化开发一面",
  summary: "一句话概括整场经历",
  tags: ["C++", "低延迟", "算法"],
  sections: [
    {
      title: "面试过程",
      paragraphs: ["这里写完整的过程和感受。"]
    },
    {
      title: "题目记录",
      bullets: ["这里按原顺序记录面试中出现的题目。"]
    }
  ]
}
```

常用字段：

- `company`：公司名称，例如 `字节跳动`
- `type`：记录类型，填写 `面试` 或 `笔试`
- `round`：面试轮次或笔试名称，例如 `技术二面`、`C++ 在线笔试`
- `date`：只记得年份时可以填写 `2023 年`，会归入“月份待补充”；知道完整日期时统一使用 `YYYY-MM-DD`。页面会自动生成“年份 → 月份”归档，无需手动维护分类。
- `time`：时间，统一使用 24 小时制 `HH:mm`
- `sections`：完整正文，可以用 `paragraphs` 写段落、`bullets` 记录列表、`links` 保存原题链接
- `title` / `summary` / `tags`：用于目录展示和搜索

知识库题目才需要填写 `category`、`topic`、`sections` 等字段。量化策略知识笔记可设置 `trackProgress: false`，只阅读、不计入核心复习进度。

## 本地运行

```bash
npm install
npm run dev
```

复习状态、收藏和上次阅读位置会保存在当前浏览器中。

## GitHub Pages 部署

网站地址是 `https://wenbogeng.github.io/`，GitHub 仓库地址仅用于查看源码。

这是 Vite / React 项目，仓库根目录的 `index.html` 是开发入口，不能直接作为 GitHub Pages 的发布内容。浏览器无法直接运行其中引用的 JSX，需要先构建。

1. 将 `.github/workflows/pages.yml` 和项目源码提交并推送到 `main`。
2. 在仓库的 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
3. 在 **Actions → Deploy to GitHub Pages** 查看运行结果；需要时选择 **Run workflow** 手动触发。
4. 构建部署成功后访问网站。若仍看到旧页面，强制刷新并检查 Actions 的部署结果。

工作流运行 `npm ci`、`npm run build` 和现有托管测试，仅发布 `dist/client` 中编译后的静态页面和资源。Sites 托管仍使用原有的 `dist/server` 与 `dist/.openai` 支持文件。

可通过 `npm run build` 后运行 `npm run preview` 验证生产版本。
