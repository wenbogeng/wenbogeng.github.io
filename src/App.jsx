import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft, ArrowRight, BookmarkSimple, Brain, CaretRight, CheckCircle,
  Code, Command, Eye, EyeSlash, List,
  MagnifyingGlass, NotePencil, SidebarSimple, Stack, UsersThree, X
} from "@phosphor-icons/react";
import { questions } from "./questions.js";
import { companyExperiences } from "./companyExperiences.js";

const STATUS_LABELS = { mastered: "已掌握", fuzzy: "模糊", pending: "未掌握" };
const STATUS_ORDER = { mastered: 0, fuzzy: 1, pending: 2 };
const REVIEW_QUESTIONS = questions.filter((item) => item.trackProgress !== false);

function getItemYear(item) {
  return String(item.date || "").match(/\d{4}/)?.[0] || "未标注年份";
}

function getItemMonth(item) {
  const match = String(item.date || "").match(/^\d{4}[-/.](\d{1,2})/);
  return match ? `${match[1].padStart(2, "0")} 月` : "月份待补充";
}

function getDateSortKey(item) {
  const date = String(item.date || "");
  const fullDate = date.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
  if (fullDate) return `${fullDate[1]}-${fullDate[2].padStart(2, "0")}-${fullDate[3].padStart(2, "0")}`;
  const yearOnly = date.match(/\d{4}/)?.[0];
  return yearOnly ? `${yearOnly}-00-00` : "0000-00-00";
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
  const [interviewType, setInterviewType] = useState("全部类型");
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
  const companies = useMemo(() => [...new Set(sourceItems.map((item) => item.company))], [sourceItems]);
  const types = useMemo(() => [...new Set(sourceItems.map((item) => item.type))], [sourceItems]);
  const experienceYears = useMemo(() => [...new Set(companyExperiences.map(getItemYear))].sort((a, b) => b.localeCompare(a, "zh-CN")), []);
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return sourceItems.filter((item) => {
      const matchesCategory = mode === "experiences" || category === "全部" || item.category === category;
      const matchesCompany = company === "全部公司" || item.company === company;
      const matchesType = interviewType === "全部类型" || item.type === interviewType;
      const matchesYear = mode !== "experiences" || year === "全部年份" || getItemYear(item) === year;
      const matchesMonth = mode !== "experiences" || month === "全部月份" || getItemMonth(item) === month;
      const sectionText = item.sections.flatMap((section) => [
        section.title,
        ...(section.paragraphs || []),
        ...(section.bullets || []),
        ...(section.questions || []).flatMap((question) => [question.prompt, question.code || "", ...(question.options || [])]),
        ...(section.codeBlocks || []).flatMap((block) => [block.label, block.code])
      ]);
      const haystack = [item.title, item.topic || "", item.company, ...item.tags, ...sectionText].join(" ").toLowerCase();
      return matchesCategory && matchesCompany && matchesType && matchesYear && matchesMonth && (!normalized || haystack.includes(normalized));
    });
  }, [sourceItems, mode, category, company, interviewType, year, month, query]);

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

  function go(direction) {
    if (!filtered.length) return;
    const safeIndex = currentIndex < 0 ? 0 : currentIndex;
    const nextIndex = (safeIndex + direction + filtered.length) % filtered.length;
    selectQuestion(filtered[nextIndex].id);
  }

  function switchMode(nextMode) {
    setMode(nextMode);
    setCategory("全部");
    setCompany("全部公司");
    setInterviewType("全部类型");
    setYear("全部年份");
    setMonth("全部月份");
    setExpandedYear(null);
    setQuery("");
    const nextItems = nextMode === "experiences" ? companyExperiences : nextMode === "review" ? REVIEW_QUESTIONS : questions;
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
      if (event.key.toLowerCase() === "j" || event.key === "ArrowRight") go(1);
      if (event.key.toLowerCase() === "k" || event.key === "ArrowLeft") go(-1);
      if (mode === "review" && event.key === "1") updateState({ status: "fuzzy" });
      if (mode === "review" && event.key === "2") updateState({ status: "mastered" });
      if (mode === "review" && event.key === "\\") setAnswerVisible((value) => !value);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

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

        {mode === "experiences" && (
          <div className="side-section year-archive">
            <p className="side-label">年份归档</p>
            <button className={`side-item ${year === "全部年份" ? "active" : ""}`} onClick={() => { setYear("全部年份"); setMonth("全部月份"); setExpandedYear(null); }}>
              <Stack size={20} /><span>全部年份</span><small>{companyExperiences.length}</small>
            </button>
            {experienceYears.map((itemYear) => {
              const yearItems = companyExperiences.filter((item) => getItemYear(item) === itemYear);
              const count = yearItems.length;
              const months = [...new Set(yearItems.map(getItemMonth))].sort((a, b) => b.localeCompare(a, "zh-CN"));
              const isExpanded = expandedYear === itemYear;
              return (
                <div className="year-group" key={itemYear}>
                  <button className={`side-item ${year === itemYear ? "active" : ""}`} aria-expanded={isExpanded} onClick={() => { setYear(itemYear); setMonth("全部月份"); setExpandedYear(isExpanded ? null : itemYear); }}>
                    <CaretRight className={`archive-caret ${isExpanded ? "expanded" : ""}`} size={16} /><span>{itemYear === "未标注年份" ? itemYear : `${itemYear} 年`}</span><small>{count}</small>
                  </button>
                  {isExpanded && (
                    <div className="month-list">
                      <button className={`month-item ${month === "全部月份" ? "active" : ""}`} onClick={() => { setYear(itemYear); setMonth("全部月份"); }}><span>全部月份</span><small>{count}</small></button>
                      {months.map((itemMonth) => (
                        <button key={itemMonth} className={`month-item ${month === itemMonth ? "active" : ""}`} onClick={() => { setYear(itemYear); setMonth(itemMonth); }}>
                          <span>{itemMonth}</span><small>{yearItems.filter((item) => getItemMonth(item) === itemMonth).length}</small>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <div className="side-section companies">
          <div className="side-label-row"><p className="side-label">公司与类型</p><span>筛选</span></div>
          <label className="company-select">
            <BookmarkSimple size={20} />
            <select value={company} onChange={(event) => setCompany(event.target.value)}>
              <option>全部公司</option>
              {companies.map((item) => <option key={item}>{item}</option>)}
            </select>
            <CaretRight size={16} />
          </label>
          <label className="company-select">
            <NotePencil size={20} />
            <select value={interviewType} onChange={(event) => setInterviewType(event.target.value)}>
              <option>全部类型</option>
              {types.map((item) => <option key={item}>{item}</option>)}
            </select>
            <CaretRight size={16} />
          </label>
        </div>

        <div className="sidebar-footer">
          {mode === "review" ? (
            <>
              <div className="footer-progress">
                <Brain size={20} />
                <div><span>专项复习进度</span><strong>{masteredCount} / {trackedQuestions.length} 已掌握</strong></div>
              </div>
              <button className="side-item subtle"><Command size={20} /><span>快捷键</span><small>1 / 2 / J / K</small></button>
            </>
          ) : <p className="browse-note">只读浏览 · 内容由本地文件维护</p>}
        </div>
      </aside>

      <main className="reader">
        <header className="reader-toolbar">
          <div className="breadcrumb">
            <span>{mode === "experiences" ? "完整面经" : current.topic}</span><i>·</i>
            {(mode === "experiences" ? [current.company, current.type] : current.tags).map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          {mode !== "knowledge" && <div className="toolbar-actions">
            <button className={currentState.favorite ? "selected" : ""} onClick={() => updateState({ favorite: !currentState.favorite })}>
              <BookmarkSimple size={20} weight={currentState.favorite ? "fill" : "regular"} /><span>{currentState.favorite ? "已收藏" : "收藏"}</span>
            </button>
          </div>}
        </header>

        <article className="article">
          <div className="meta">
            <span>{current.company}</span><i>·</i><span>{current.type}</span><i>·</i><span>{current.round}</span><i>·</i>
            <time dateTime={/^\d{4}-\d{2}-\d{2}$/.test(current.date) ? `${current.date}${current.time ? `T${current.time}` : ""}` : undefined}>
              {[current.date, current.time].filter(Boolean).join(" ")}
            </time>
            {current.duration && <><i>·</i><span>{current.duration}</span></>}
          </div>
          <h1>{current.title}</h1>
          <p className="summary">{current.summary}</p>
          {current.context && <p className="experience-context"><strong>场次备注</strong>{current.context}</p>}
          {current.sourceUrl && <a className="source-link" href={current.sourceUrl} target="_blank" rel="noreferrer">查看原题 <CaretRight size={15} /></a>}
          {mode === "review" && (
            <button className="reveal" onClick={() => setAnswerVisible((value) => !value)}>
              {answerVisible ? <EyeSlash size={20} /> : <Eye size={20} />}{answerVisible ? "隐藏答案" : "显示答案"}<kbd>\</kbd>
            </button>
          )}

          {mode !== "review" || answerVisible ? (
            <div className="answer-content">
              {current.sections.map((section, sectionIndex) => (
                <section key={section.title} className="answer-section">
                  <h2><span />{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.highlight && <blockquote>{section.highlight}</blockquote>}
                  {section.bullets && <ol className={sectionIndex === current.sections.length - 1 ? "questions-list" : ""}>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ol>}
                  {section.questions && (
                    <ol className="exam-questions">
                      {section.questions.map((question) => (
                        <li key={question.prompt + (question.code || "")}>
                          <strong>{question.prompt}</strong>
                          {question.code && <pre><code>{question.code}</code></pre>}
                          {question.options && (
                            <div className="exam-options">
                              {question.options.map((option, optionIndex) => <p key={option}><span>{String.fromCharCode(65 + optionIndex)}</span>{option}</p>)}
                            </div>
                          )}
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
                      {section.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}<CaretRight size={15} /></a>)}
                    </div>
                  )}
                </section>
              ))}
            </div>
          ) : (
            <div className="answer-hidden"><EyeSlash size={28} /><strong>答案已隐藏</strong><span>先用自己的话回答，再揭晓参考答案。</span></div>
          )}
        </article>

        <footer className={`answer-actions ${mode !== "review" ? "browse-actions" : ""}`}>
          <button className="nav-action" onClick={() => go(-1)}><ArrowLeft size={21} /><span>{mode === "review" ? "上一题" : "上一篇"}</span><kbd>K</kbd></button>
          {mode === "review" && <button className={`state-action fuzzy ${currentState.status === "fuzzy" ? "active" : ""}`} onClick={() => updateState({ status: "fuzzy" })}><span className="status-dot" />模糊<kbd>1</kbd></button>}
          {mode === "review" && <button className={`state-action mastered ${currentState.status === "mastered" ? "active" : ""}`} onClick={() => updateState({ status: "mastered" })}><CheckCircle size={20} weight={currentState.status === "mastered" ? "fill" : "regular"} />已掌握<kbd>2</kbd></button>}
          <button className="nav-action next" onClick={() => go(1)}><span>{mode === "review" ? "下一题" : "下一篇"}</span><ArrowRight size={21} /><kbd>J</kbd></button>
        </footer>
      </main>

      <aside className="session-panel">
        <div className="session-head">
          <div><p>{mode === "experiences" ? "面经目录" : mode === "review" ? "复习队列" : "知识目录"}</p><strong>{Math.max(1, currentIndex + 1)} <span>/ {filtered.length || sourceItems.length}</span></strong></div>
          {mode !== "knowledge" && <div className="progress-track"><span style={{ width: `${((Math.max(0, currentIndex) + 1) / Math.max(1, filtered.length)) * 100}%` }} /></div>}
        </div>

        <div className={`session-list ${mode === "experiences" ? "experience-list" : ""}`}>
          {filtered.length ? filtered.map((item, index) => {
            const itemState = saved[item.id]?.status || "pending";
            const itemYear = getItemYear(item);
            const itemMonth = getItemMonth(item);
            const showYear = mode === "experiences" && (index === 0 || getItemYear(filtered[index - 1]) !== itemYear);
            const showMonth = mode === "experiences" && (index === 0 || showYear || getItemMonth(filtered[index - 1]) !== itemMonth);
            return (
              <React.Fragment key={item.id}>
                {showYear && <p className="year-divider"><span>{itemYear === "未标注年份" ? itemYear : `${itemYear} 年`}</span><small>{filtered.filter((entry) => getItemYear(entry) === itemYear).length} 篇</small></p>}
                {showMonth && <p className="month-divider">{itemMonth}</p>}
                <button className={item.id === current.id ? "current" : ""} onClick={() => selectQuestion(item.id)}>
                  <span className="question-number">{index + 1}</span>
                  <span className="question-title">{item.title}</span>
                  {mode === "review" && <span className={`queue-status ${itemState}`} title={STATUS_LABELS[itemState]} />}
                </button>
              </React.Fragment>
            );
          }) : <div className="empty-state"><MagnifyingGlass size={26} /><strong>没有匹配的内容</strong><span>试试更换搜索词或筛选条件。</span></div>}
        </div>

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
