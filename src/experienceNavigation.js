// Folder labels describe navigation only; complete sessions and original round text stay intact.
export function getItemYear(item) {
  return String(item.date || "").match(/\d{4}/)?.[0] || "未标注年份";
}

export function getItemMonth(item) {
  const match = String(item.date || "").match(/^\d{4}[-/.](\d{1,2})/);
  return match ? `${match[1].padStart(2, "0")} 月` : "月份待补充";
}

export function getDateSortKey(item) {
  const date = String(item.date || "");
  const fullDate = date.match(/^(\d{4})[-/.](\d{1,2})[-/.](\d{1,2})/);
  if (fullDate) return `${fullDate[1]}-${fullDate[2].padStart(2, "0")}-${fullDate[3].padStart(2, "0")}`;
  return date.match(/\d{4}/)?.[0] ? `${date.match(/\d{4}/)[0]}-00-00` : "0000-00-00";
}

const numbers = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
export function getExperienceStage(item) {
  if (item.stage) return item.stage;
  const round = String(item.round || "");
  if (item.type === "笔试" || (/\bOA\b|笔试/i.test(round) && item.type !== "面试与笔试")) return "OA";
  // Collected full interview flows must not be split or assigned an invented round.
  if (item.type === "面试与笔试" || /流程|摘录/.test(round)) return "完整流程";
  if (/终面|final/i.test(round)) return "终面";
  if (/\bHR\b|人力/i.test(round)) return "HR";
  const match = round.match(/(?:第)?([一二三四五六七八九十]|\d+)\s*(?:轮|面)/) || round.match(/\b(?:VO|Round)\s*(\d+)\b/i);
  if (match) {
    const label = numbers[Number(match[1])] || match[1];
    return `${label}轮 VO`;
  }
  if (/电话|phone/i.test(round)) return "电话沟通";
  return "VO · 轮次待补充";
}

export function compareStages(a, b) {
  function rank(label) {
    if (label === "OA") return 0;
    const match = label.match(/^([一二三四五六七八九十]|\d+)轮 VO$/);
    if (match) return Number(match[1]) || numbers.indexOf(match[1]);
    return { 电话沟通: 20, 终面: 30, HR: 40, 完整流程: 50 }[label] ?? 60;
  }
  return rank(a) - rank(b) || a.localeCompare(b, "zh-CN");
}

export function groupExperiences(items) {
  const companies = new Map();
  for (const item of items) {
    if (!companies.has(item.company)) companies.set(item.company, new Map());
    const stages = companies.get(item.company);
    const stage = getExperienceStage(item);
    if (!stages.has(stage)) stages.set(stage, []);
    stages.get(stage).push(item);
  }
  return [...companies].map(([company, stages]) => ({
    company,
    stages: [...stages].sort(([a], [b]) => compareStages(a, b)).map(([label, entries]) => ({
      label, items: [...entries].sort((a, b) => getDateSortKey(b).localeCompare(getDateSortKey(a)))
    }))
  }));
}
