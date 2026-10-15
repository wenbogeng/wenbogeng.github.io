import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft, ArrowRight, BookmarkSimple, Brain, CaretRight, CheckCircle,
  Code, Command, Eye, EyeSlash, List,
  MagnifyingGlass, NotePencil, SidebarSimple, Stack, UsersThree, X
} from "@phosphor-icons/react";
import { questions } from "./questions.js";
import { companyExperiences } from "./companyExperiences.js";
import { getItemYear, getItemMonth, getDateSortKey, getExperienceStage, groupExperiences, getExperienceOrigin, ORIGIN_LABELS } from "./experienceNavigation.js";

import { groupCompanyDirectory } from "./companyDirectory.js";

const STATUS_LABELS = { mastered: "已掌握", fuzzy: "模糊", pending: "未掌握" };
const STATUS_ORDER = { mastered: 0, fuzzy: 1, pending: 2 };
const REVIEW_QUESTIONS = questions.filter((item) => item.trackProgress !== false);

function QuestionSolution({ question, readable = false }) {
  if (!question.solution) return null;
  if (readable) return <div className="readable-solution">
    <div className="solution-heading"><strong>解题思路与参考解法</strong><span>补充解析</span></div>
    {question.solution.map((block, index) => <div className="solution-block" key={index}>
      <div className="solution-step-heading"><span>{String(index + 1).padStart(2, "0")}</span><h4>{block.title}</h4></div>
      {block.paragraphs?.map((text, i) => <p key={i}>{text}</p>)}
      {block.bullets && <ul>{block.bullets.map((text, i) => <li key={i}>{text}</li>)}</ul>}
      {block.code && <div className="solution-code-block"><div className="solution-code-bar">代码实现 / 解析</div><pre><code>{block.code}</code></pre></div>}
      {block.links && <div className="solution-links">{block.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}<CaretRight size={13} /></a>)}</div>}
    </div>)}
  </div>;
  return (
    <details className="question-solution" open={question.solutionExpanded || undefined}>
      <summary>解题思路与参考解法<span>补充解析</span></summary>
      <div>
        {question.solution.map((block, i) => (
          <div className="solution-block" key={i}>
            <h3>{block.title}</h3>
            {block.paragraphs?.map((text, j) => <p key={j}>{text}</p>)}
            {block.bullets && <ul>{block.bullets.map((text, j) => <li key={j}>{text}</li>)}</ul>}
            {block.code && <pre><code>{block.code}</code></pre>}
            {block.links && <div className="solution-links">{block.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}<CaretRight size={13} /></a>)}</div>}
          </div>
        ))}
      </div>
    </details>
  );
}

const OA_TYPES = ["算法", "选择", "填空", "设计题", "综合与简答", "原稿与说明"];

function getQuestionType(section, question) {
  if (question?.navigationType) return question.navigationType;
  if (/原稿|来源|核对说明/.test(section.title)) return "原稿与说明";
  if (/算法|编程|ACM/i.test(section.title)) return "算法";
  if (/系统设计|设计题|架构设计/.test(section.title)) return "设计题";
  if (question?.options?.length || /选择/.test(section.title) && !/填空/.test(section.title)) return "选择";
  if (/填空/.test(section.title) && !/选择/.test(section.title)) return "填空";
  return "综合与简答";
}

function ExperienceContents({ item }) {
  const isOa = getExperienceStage(item) === "OA";
  const entries = item.sections.flatMap((section, sectionIndex) =>
    isOa && section.questions?.length ? section.questions.map((question, questionIndex) => ({
      type: getQuestionType(section, question), label: question.shortTitle || question.prompt, number: question.displayNumber,
      target: `question-${sectionIndex}-${questionIndex}`
    })) : [{ type: getQuestionType(section), label: section.title, target: `section-${sectionIndex}` }]
  );
  return <>
    <div className="session-head contents-head"><p>{isOa ? "题型导航" : "本场内容"}</p><span>{item.company} · {item.oaLabel || getExperienceStage(item)}</span></div>
    <nav className="contents-navigation" aria-label={isOa ? "OA 题型导航" : "本场内容导航"}>
      {isOa ? OA_TYPES.map(type => {
        const matches = entries.filter(entry => entry.type === type);
        if (!matches.length && !OA_TYPES.slice(0, 4).includes(type)) return null;
        return <details key={type} className="contents-category" open={type === "算法" && matches.length > 0}>
          <summary><span>{type}</span><small>{matches.length ? `${matches.length} 项` : "暂无题目"}</small></summary>
          {matches.map((entry, index) => <a key={entry.target} href={`#${entry.target}`}><span>{String(entry.number || index + 1).padStart(2, "0")}</span><span>{entry.label}</span></a>)}
        </details>;
      }) : entries.map(entry => <a className="section-anchor" key={entry.target} href={`#${entry.target}`}>{entry.label}</a>)}
    </nav>
  </>;
}

function SourceGallery({ images }) {
  const [index, setIndex] = useState(() => Math.max(0, images.findIndex((image) => image.cover)));
  const image = images[index];
  const url = `${import.meta.env.BASE_URL}${image.path}`;
  return (
    <div className="source-gallery">
      <div className="source-gallery-controls">
        <button aria-label="上一张资料图表" disabled={index === 0} onClick={() => setIndex(index - 1)}><ArrowLeft size={18} /></button>
        <label>资料图表 <select aria-label="选择资料图表" value={index} onChange={(event) => setIndex(Number(event.target.value))}>
          {images.map((item, i) => <option key={item.path} value={i}>{i + 1} / {images.length} · {item.label}</option>)}
        </select></label>
        <button aria-label="下一张资料图表" disabled={index === images.length - 1} onClick={() => setIndex(index + 1)}><ArrowRight size={18} /></button>
      </div>
      <figure>
        <a href={url} target="_blank" rel="noreferrer" aria-label={`放大查看 ${image.label}`}><img key={image.path} src={url} alt={image.label} loading="lazy" /></a>
        <figcaption>{image.label} · 点击图片放大查看</figcaption>
      </figure>
    </div>
  );
}

function readSavedState() {
  try {
    return JSON.parse(localStorage.getItem("interview-review-state")) || {};
  } catch {
    return {};
  }
}

function AppIcon({ category, size = 21 }) {
  if (category === "C++ 基础") return <Code size={size} />;
  if (category === "量化策略") return <UsersThree size={size} />;
  return <Stack size={size} />;
}

export function App() {
  const [saved, setSaved] = useState(readSavedState);
  const [mode, setMode] = useState("knowledge");
  const [currentId, setCurrentId] = useState(() => localStorage.getItem("interview-current") || questions[0].id);
  const [category, setCategory] = useState("全部");
  const [company, setCompany] = useState("全部公司");
  const [stage, setStage] = useState("全部轮次");
  const [expandedCompany, setExpandedCompany] = useState(null);
  const [year, setYear] = useState("全部年份");
  const [month, setMonth] = useState("全部月份");
  const [expandedYear, setExpandedYear] = useState(null);
  const [query, setQuery] = useState("");
  const [answerVisible, setAnswerVisible] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const searchRef = useRef(null);

  const sourceItems = useMemo(() => {
    if (mode === "experiences") return [...companyExperiences].sort((a, b) => getDateSortKey(b).localeCompare(getDateSortKey(a)));
    if (mode === "review") return REVIEW_QUESTIONS;
    return questions;
  }, [mode]);
  const categories = useMemo(() => [...new Set(questions.map((item) => item.category))], []);

  const experienceYears = useMemo(() => [...new Set(companyExperiences.map(getItemYear))].sort((a, b) => a === "未标注年份" ? 1 : b === "未标注年份" ? -1 : b.localeCompare(a, "zh-CN")), []);
  const scopedItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return sourceItems.filter((item) => {
      const matchesCategory = mode === "experiences" || category === "全部" || item.category === category;
      const matchesYear = mode !== "experiences" || year === "全部年份" || getItemYear(item) === year;
      const matchesMonth = mode !== "experiences" || month === "全部月份" || getItemMonth(item) === month;
      const sectionText = item.sections.flatMap((section) => [
        section.title,
        section.transcript || "",
        section.sourceTranscript || "",
        ...(section.paragraphs || []),
        ...(section.bullets || []),
        ...(section.questions || []).flatMap((question) => [question.prompt, question.code || "", question.note || "", ...(question.options || []), ...(question.solution || []).flatMap(block => [block.title, ...(block.paragraphs || []), ...(block.bullets || []), block.code || ""])]),
        ...(section.codeBlocks || []).flatMap((block) => [block.label, block.code])
      ]);
      const haystack = [item.title, item.topic || "", item.company, ...item.tags, ...sectionText].join(" ").toLowerCase();
      return matchesCategory && matchesYear && matchesMonth && (!normalized || haystack.includes(normalized));
    });
  }, [sourceItems, mode, category, year, month, query]);
  const companies = useMemo(() => [...new Set(scopedItems.map((item) => item.company))], [scopedItems]);
  const companyFolders = useMemo(() => groupExperiences(scopedItems.filter(item => getExperienceOrigin(item) !== "collected")), [scopedItems]);
  const collectedFolders = useMemo(() => groupExperiences(scopedItems.filter(item => getExperienceOrigin(item) === "collected")), [scopedItems]);
  const filtered = useMemo(() => {
    const matches = scopedItems.filter(item =>
      (company === "全部公司" || item.company === company) &&
      (mode !== "experiences" || stage === "全部轮次" || getExperienceStage(item) === stage)
    );
    return mode === "experiences" ? groupExperiences(matches).flatMap(group => group.stages.flatMap(folder => folder.items)) : matches;
  }, [scopedItems, company, mode, stage]);

  const selected = sourceItems.find((item) => item.id === currentId);
  const current = filtered.find((item) => item.id === currentId) || filtered[0] || selected || sourceItems[0];
  const currentIndex = Math.max(0, filtered.findIndex((item) => item.id === current.id));
  const currentState = saved[current.id] || { status: "pending", favorite: false };
  const trackedQuestions = REVIEW_QUESTIONS;
  const masteredCount = trackedQuestions.filter((item) => saved[item.id]?.status === "mastered").length;

  function updateState(next) {
    setSaved((value) => ({
      ...value,
      [current.id]: { ...(value[current.id] || { status: "pending", favorite: false }), ...next }
    }));
  }

  function selectQuestion(id) {
    setCurrentId(id);
    setAnswerVisible(true);
    setSidebarOpen(false);
  }

  function switchMode(nextMode) {
    setMode(nextMode);
    setCategory("全部");
    setCompany("全部公司");
    setStage("全部轮次");
    setExpandedCompany(null);
    setYear("全部年份");
    setMonth("全部月份");
    setExpandedYear(null);
    setQuery("");
    const nextItems = nextMode === "experiences" ? [...companyExperiences].sort((a, b) => getDateSortKey(b).localeCompare(getDateSortKey(a))) : nextMode === "review" ? REVIEW_QUESTIONS : questions;
    selectQuestion(nextItems[0].id);
  }

  useEffect(() => {
    localStorage.setItem("interview-review-state", JSON.stringify(saved));
  }, [saved]);

  useEffect(() => {
    localStorage.setItem("interview-current", current.id);
    document.title = `${current.title} · ${mode === "experiences" ? "公司面经" : "技术面经复习台"}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [current.id, current.title, mode]);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "/" && document.activeElement !== searchRef.current) {
        event.preventDefault();
        searchRef.current?.focus();
      }
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) return;
      if (mode === "review" && event.key === "1") updateState({ status: "fuzzy" });
      if (mode === "review" && event.key === "2") updateState({ status: "mastered" });
      if (mode === "review" && event.key === "\\") setAnswerVisible((value) => !value);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  function chooseArchive(nextYear, nextMonth = "全部月份") {
    setYear(nextYear);
    setMonth(nextMonth);
    setCompany("全部公司");
    setStage("全部轮次");
    setExpandedCompany(null);
  }

  function renderCompanyDirectory(folders, originGroup) {
    return groupCompanyDirectory(folders).map(group => <details className="industry-group" key={group.label} open={group.label !== "其他／未明确" || query.trim() ? true : undefined}>
      <summary><span>{group.label}</span><small>{group.folders.length} 家</small></summary>
      {renderCompanyFolders(group.folders, originGroup)}
    </details>);
  }

  function renderCompanyFolders(folders, originGroup) {
    return folders.map(folder => {
      const folderKey = `${originGroup}:${folder.company}`;
      const isExpanded = expandedCompany === folderKey;
      const entries = folder.stages.flatMap(group => group.items);
      return <div key={folderKey}>
        <button className={`side-item company-folder ${entries.some(item => item.id === current.id) ? "active" : ""}`} aria-expanded={isExpanded} onClick={() => {
          setExpandedCompany(isExpanded ? null : folderKey);
          setCompany(folder.company);
          setStage("全部轮次");
          setCurrentId(entries[0].id);
          setAnswerVisible(true);
          if (entries.length === 1) setSidebarOpen(false);
        }}>
          <CaretRight className={`archive-caret ${isExpanded ? "expanded" : ""}`} size={16} /><span>{folder.company}</span><small>{entries.length}</small>
        </button>
        {isExpanded && <div className="month-list round-list">
          {folder.stages.map(group => group.label === "OA" && group.items.length > 1 && group.items.every(item => item.oaLabel) ? <div key={group.label}>
            {group.items.map(item => <button className={`month-item ${current.id === item.id ? "active" : ""}`} key={item.id} onClick={() => { setCompany(folder.company); setStage("OA"); selectQuestion(item.id); }}><span>{item.oaLabel}</span></button>)}
          </div> : <div key={group.label}>
            <button className={`month-item ${group.items.some(item => item.id === current.id) ? "active" : ""}`} aria-pressed={group.items.some(item => item.id === current.id)} onClick={() => { setCompany(folder.company); setStage(group.label); selectQuestion(group.items[0].id); }}><span>{group.label}</span><small>{group.items.length}</small></button>
            {group.items.length > 1 && group.items.map(item => <button className={`month-item session-entry ${current.id === item.id ? "active" : ""}`} key={item.id} onClick={() => { setCompany(folder.company); setStage(group.label); selectQuestion(item.id); }}><span>{item.title}</span></button>)}
          </div>)}
        </div>}
      </div>;
    });
  }

  function chooseCategory(next) {
    setCategory(next);
    const match = questions.find((item) => next === "全部" || item.category === next);
    if (match) selectQuestion(match.id);
  }

  return (
    <div className="app-shell">
      <button className="mobile-menu" aria-label="打开题库导航" onClick={() => setSidebarOpen(true)}>
        <SidebarSimple size={22} />
      </button>
      {sidebarOpen && <button className="sidebar-backdrop" aria-label="关闭导航" onClick={() => setSidebarOpen(false)} />}

      <aside className={`sidebar ${sidebarOpen ? "is-open" : ""}`}>
        <div className="brand-row">
          <div className="brand-mark"><NotePencil size={22} weight="duotone" /></div>
          <div><strong>Quant-Dev-HandBook</strong><span>CPP · QUANT · INTERVIEW</span></div>
          <button className="sidebar-close" aria-label="关闭导航" onClick={() => setSidebarOpen(false)}><X size={20} /></button>
        </div>

        <label className="search-box">
          <MagnifyingGlass size={20} />
          <input ref={searchRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder={mode === "experiences" ? "搜索公司或完整面经" : mode === "review" ? "搜索待复习内容" : "搜索知识库"} />
          <kbd>/</kbd>
        </label>

        <div className="side-section library-switcher">
          <p className="side-label">资料库</p>
          <button className={`side-item ${mode === "knowledge" ? "active" : ""}`} onClick={() => switchMode("knowledge")}>
            <List size={21} /><span>知识库</span><small>{questions.length}</small>
          </button>
          <button className={`side-item ${mode === "experiences" ? "active" : ""}`} onClick={() => switchMode("experiences")}>
            <NotePencil size={21} /><span>公司面经</span><small>{companyExperiences.length}</small>
          </button>
        </div>

        <div className="side-section review-switcher">
          <p className="side-label">复习</p>
          <button className={`side-item ${mode === "review" ? "active" : ""}`} onClick={() => switchMode("review")}>
            <Brain size={21} /><span>专项复习</span><small>{REVIEW_QUESTIONS.length}</small>
          </button>
          {mode !== "experiences" && <p className="side-label category-label">知识分类</p>}
          {mode !== "experiences" && categories.map((item) => {
            const count = sourceItems.filter((question) => question.category === item).length;
            if (!count) return null;
            return (
              <button key={item} className={`side-item ${category === item ? "active" : ""}`} onClick={() => chooseCategory(item)}>
                <AppIcon category={item} /><span>{item}</span><small>{count}</small>
              </button>
            );
          })}
        </div>

        {mode === "experiences" ? (
          <nav className="side-section company-folders" aria-label="公司与轮次归档">
            <p className="side-label">公司归档</p>
            <p className="company-nav-note">按 A–Z 排序 · 中文按拼音</p>
            {renderCompanyDirectory(companyFolders, "records")}
            {!!collectedFolders.length && <details className="collected-folders" open={query.trim() ? true : undefined}>
              <summary>收集面经 <small>{scopedItems.filter(item => getExperienceOrigin(item) === "collected").length}</small></summary>
              <p className="company-nav-note">来自他人汇编，非本人亲历</p>
              {renderCompanyDirectory(collectedFolders, "collected")}
            </details>}
            {!companyFolders.length && !collectedFolders.length && <p className="folder-empty">没有匹配的公司</p>}
          </nav>
        ) : mode === "review" ? (
          <div className="side-section companies">
            <p className="side-label">公司</p>
            <label className="company-select">
              <BookmarkSimple size={20} />
              <select aria-label="公司" value={company} onChange={(event) => setCompany(event.target.value)}>
                <option>全部公司</option>
                {companies.map((item) => <option key={item}>{item}</option>)}
              </select>
              <CaretRight size={16} />
            </label>
          </div>
        ) : null}

        {mode === "experiences" && (
          <details className="side-section year-archive"><summary className="side-label">按时间查看</summary>
            <button className={`side-item ${year === "全部年份" ? "active" : ""}`} onClick={() => { chooseArchive("全部年份"); setExpandedYear(null); }}>
              <Stack size={20} /><span>全部年份</span><small>{companyExperiences.length}</small>
            </button>
            {experienceYears.map((itemYear) => {
              const yearItems = companyExperiences.filter((item) => getItemYear(item) === itemYear);
              const count = yearItems.length;
              const months = [...new Set(yearItems.map(getItemMonth))].sort((a, b) => b.localeCompare(a, "zh-CN"));
              const isExpanded = expandedYear === itemYear;
              return (
                <div className="year-group" key={itemYear}>
                  <button className={`side-item ${year === itemYear ? "active" : ""}`} aria-expanded={isExpanded} onClick={() => { chooseArchive(itemYear); setExpandedYear(isExpanded ? null : itemYear); }}>
                    <CaretRight className={`archive-caret ${isExpanded ? "expanded" : ""}`} size={16} /><span>{itemYear === "未标注年份" ? itemYear : `${itemYear} 年`}</span><small>{count}</small>
                  </button>
                  {isExpanded && (
                    <div className="month-list">
                      <button className={`month-item ${month === "全部月份" ? "active" : ""}`} onClick={() => { chooseArchive(itemYear); }}><span>全部月份</span><small>{count}</small></button>
                      {months.map((itemMonth) => (
                        <button key={itemMonth} className={`month-item ${month === itemMonth ? "active" : ""}`} onClick={() => { chooseArchive(itemYear, itemMonth); }}>
                          <span>{itemMonth}</span><small>{yearItems.filter((item) => getItemMonth(item) === itemMonth).length}</small>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </details>
        )}


        {mode === "review" && <div className="sidebar-footer">
            <>
              <div className="footer-progress">
                <Brain size={20} />
                <div><span>专项复习进度</span><strong>{masteredCount} / {trackedQuestions.length} 已掌握</strong></div>
              </div>
              <button className="side-item subtle"><Command size={20} /><span>快捷键</span><small>1 / 2</small></button>
            </>
        </div>}
      </aside>

      <main className="reader">
        <header className="reader-toolbar">
          <div className="breadcrumb">
            <span>{mode === "experiences" ? "完整面经" : current.topic}</span><i>·</i>
            {(mode === "experiences" ? [current.company, current.oaLabel || getExperienceStage(current)] : current.tags).map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          {mode !== "knowledge" && <div className="toolbar-actions">
            <button className={currentState.favorite ? "selected" : ""} onClick={() => updateState({ favorite: !currentState.favorite })}>
              <BookmarkSimple size={20} weight={currentState.favorite ? "fill" : "regular"} /><span>{currentState.favorite ? "已收藏" : "收藏"}</span>
            </button>
          </div>}
        </header>

        <article className={`article ${current.readingLayout === "question-reader" ? "question-reader" : ""}`}>
          <div className="meta">
            <span>{current.company}</span><i>·</i><span>{current.type}</span><i>·</i><span>{current.round}</span><i>·</i>
            <time dateTime={/^\d{4}-\d{2}-\d{2}$/.test(current.date) ? `${current.date}${current.time ? `T${current.time}` : ""}` : undefined}>
              {[current.date, current.time].filter(Boolean).join(" ")}
            </time>
            {current.duration && <><i>·</i><span>{current.duration}</span></>}
          </div>
          {mode === "experiences" && ORIGIN_LABELS[getExperienceOrigin(current)] && <p className={`origin-badge origin-${getExperienceOrigin(current)}`}>{ORIGIN_LABELS[getExperienceOrigin(current)]}</p>}
          <h1>{current.title}</h1>
          <p className="summary">{current.summary}</p>
          {current.context && <p className="experience-context"><strong>场次备注</strong>{current.context}</p>}
          {current.sourceFiles && <details className="source-provenance">
            <summary>资料来源 · {current.sourceFiles.length} 个文件或记录</summary>
            <ul>{current.sourceFiles.map((file) => <li key={file}>{file}</li>)}</ul>
          </details>}
          {current.sourceUrl && <a className="source-link" href={current.sourceUrl} target="_blank" rel="noreferrer">查看原题 <CaretRight size={15} /></a>}
          {mode === "review" && (
            <button className="reveal" onClick={() => setAnswerVisible((value) => !value)}>
              {answerVisible ? <EyeSlash size={20} /> : <Eye size={20} />}{answerVisible ? "隐藏答案" : "显示答案"}<kbd>\</kbd>
            </button>
          )}

          {mode === "experiences" && <div className="mobile-contents"><details><summary>浏览{getExperienceStage(current) === "OA" ? "题型" : "本场内容"}</summary><ExperienceContents key={current.id} item={current} /></details></div>}

          {mode !== "review" || answerVisible ? (
            <div className="answer-content">
              {current.sections.map((section, sectionIndex) => (
                <section id={`section-${sectionIndex}`} key={`${current.id}-${sectionIndex}`} className="answer-section">
                  <h2><span />{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.highlight && <blockquote>{section.highlight}</blockquote>}
                  {section.transcript && <pre className="source-transcript">{section.transcript}</pre>}
                  {section.sourceTranscript && <details className="original-source"><summary>展开原始笔试记录（含未校正代码）</summary><pre className="source-transcript">{section.sourceTranscript}</pre></details>}
                  {section.images && <SourceGallery key={`${current.id}-${sectionIndex}`} images={section.images} />}
                  {section.bullets && <ol className={sectionIndex === current.sections.length - 1 ? "questions-list" : ""}>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ol>}
                  {section.questions && (
                    <ol className="exam-questions">
                      {section.questions.map((question, questionIndex) => (
                        <li id={`question-${sectionIndex}-${questionIndex}`} key={`${sectionIndex}-${questionIndex}`} value={question.number}>
                          {current.readingLayout === "question-reader" ? <>
                            <header className="exam-question-heading"><span>Q{String(question.displayNumber).padStart(2, "0")}</span><div><small>{getQuestionType(section, question)}</small><h3>{question.shortTitle}</h3></div></header>
                            <div className="question-statement"><span className="question-part-label">题目</span><p>{question.prompt}</p></div>
                          </> : <strong>{question.prompt}</strong>}
                          {question.code && <pre><code>{question.code}</code></pre>}
                          {question.options && (
                            <div className="exam-options">
                              {question.options.map((option, optionIndex) => <p key={option}><span>{String.fromCharCode(65 + optionIndex)}</span>{option}</p>)}
                            </div>
                          )}
                          {question.note && (current.readingLayout === "question-reader" ? <details className="question-note"><summary>题意与转写说明</summary><p>{question.note}</p></details> : <p className="transcription-note"><span>转写备注</span>{question.note}</p>)}
                          <QuestionSolution question={question} readable={current.readingLayout === "question-reader"} />
                          {question.sourceReferences && <details className="question-provenance">
                            <summary>原始资料 · {question.sourceReferences.length} 个记录</summary>
                            <p>{question.sourceReferences.join(" · ")}</p>
                          </details>}
                        </li>
                      ))}
                    </ol>
                  )}
                  {section.codeBlocks?.map((block) => (
                    <div className="experience-code" key={block.label}>
                      <div>{block.label}</div>
                      <pre><code>{block.code}</code></pre>
                    </div>
                  ))}
                  {section.links && (
                    <div className="section-links">
                      {section.links.map((link) => <a key={link.url || link.path} href={link.path ? `${import.meta.env.BASE_URL}${link.path}` : link.url} target="_blank" rel="noreferrer">{link.label}<CaretRight size={15} /></a>)}
                    </div>
                  )}
                </section>
              ))}
            </div>
          ) : (
            <div className="answer-hidden"><EyeSlash size={28} /><strong>答案已隐藏</strong><span>先用自己的话回答，再揭晓参考答案。</span></div>
          )}
        </article>

        {mode === "review" && <footer className="answer-actions">
          {mode === "review" && <button className={`state-action fuzzy ${currentState.status === "fuzzy" ? "active" : ""}`} onClick={() => updateState({ status: "fuzzy" })}><span className="status-dot" />模糊<kbd>1</kbd></button>}
          {mode === "review" && <button className={`state-action mastered ${currentState.status === "mastered" ? "active" : ""}`} onClick={() => updateState({ status: "mastered" })}><CheckCircle size={20} weight={currentState.status === "mastered" ? "fill" : "regular"} />已掌握<kbd>2</kbd></button>}
        </footer>}
      </main>

      <aside className="session-panel">
        {mode === "experiences" ? <ExperienceContents key={current.id} item={current} /> : <>
          <div className="session-head">
            <div><p>{mode === "review" ? "复习队列" : "知识目录"}</p><strong>{Math.max(1, currentIndex + 1)} <span>/ {filtered.length}</span></strong></div>
          </div>
          <div className="session-list">
            {filtered.length ? filtered.map((item, index) => (
              <button key={item.id} className={item.id === current.id ? "current" : ""} onClick={() => selectQuestion(item.id)}>
                <span className="question-number">{index + 1}</span>
                <span className="question-title">{item.title}</span>
                {mode === "review" && <span className={`queue-status ${saved[item.id]?.status || "pending"}`} title={STATUS_LABELS[saved[item.id]?.status || "pending"]} />}
              </button>
            )) : <div className="empty-state"><MagnifyingGlass size={26} /><strong>没有匹配的内容</strong><span>试试更换搜索词或文件夹。</span></div>}
          </div>
        </>}

        <div className="session-footer">
          {mode === "review" ? (
            <>
              <div className="legend">
                {Object.entries(STATUS_LABELS).sort(([a], [b]) => STATUS_ORDER[a] - STATUS_ORDER[b]).map(([key, label]) => <span key={key}><i className={`queue-status ${key}`} />{label}</span>)}
              </div>
              <div className="session-note"><span>本地自动保存进度</span><small>数据只保存在当前浏览器</small></div>
            </>
          ) : mode === "experiences" ? (
            <div className="session-note archive-note"><span>完整场次归档</span><small>仅用于阅读，不计入复习进度</small></div>
          ) : <div className="session-note archive-note"><span>知识库只读浏览</span><small>掌握状态请在“专项复习”中管理</small></div>}
        </div>
      </aside>
    </div>
  );
}
