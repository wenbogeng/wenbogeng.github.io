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
