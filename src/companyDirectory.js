// Sort by the displayed Chinese name's pinyin, or the displayed Latin name.
// Abbreviations and anonymous companies stay as written in the source.
const pinyinKeys = {
  "GL 投资（原文缩写）": "gl touzi yuanwen suoxie", "QL 投资（原文缩写）": "ql touzi yuanwen suoxie",
  "CQ 资产（原文缩写）": "cq zichan yuanwen suoxie", "QX（北京，原文缩写）": "qx beijing yuanwen suoxie",
  "QX（上海，原文缩写）": "qx shanghai yuanwen suoxie", "MX（原文缩写）": "mx yuanwen suoxie",
  "QL（原文缩写）": "ql yuanwen suoxie", "TWX（原文缩写）": "twx yuanwen suoxie",
  "希洛斯投资": "xiluosi touzi", "稳博投资": "wenbo touzi", "万济资本": "wanji ziben",
  "字节跳动·飞书": "zijie tiaodong feishu", "滴滴": "didi", "字节跳动·互娱研发": "zijie tiaodong huyu yanfa",
  "梅卡曼德机器人": "meika mande jiqiren", "平方和投资": "pingfanghe touzi", "交叉科技": "jiaocha keji",
  "又水投资": "youshui touzi", "善流投资": "shanliu touzi", "上海卓胜私募": "shanghai zhuosheng simu",
  "武汉布奇科技 / Bridge Investment Partner": "wuhan buqi keji", "燧石投资": "suishi touzi",
  "蓝湖": "lanhu", "九坤投资": "jiukun touzi", "启林投资": "qilin touzi", "希格斯投资": "xigesi touzi", "祝音科技": "zhuyin keji",
  "香港某小型 Quant HF": "xianggang mou xiaoxing quant hf", "国内某老牌百亿私募": "guonei mou laopai baiyi simu",
  "国内某新晋百亿私募": "guonei mou xinjin baiyi simu", "某 BB 行 Quant Research 组": "mou bb hang quant research zu",
  "国内某扩张中百亿私募": "guonei mou kuozhang zhong baiyi simu", "国内某老牌百亿私募（MS）": "guonei mou laopai baiyi simu ms",
  "某全球 Quant HF 香港办公室": "mou quanqiu quant hf xianggang bangongshi", "未标注公司": "wei biaozhu gongsi",
  "聚宽": "jukuan", "会世资产": "huishi zichan", "鸣熙": "mingxi", "因诺资产": "yinnuo zichan",
  "乾象投资 / Metabit": "qianxiang touzi", "尚雅投资": "shangya touzi", "非凸科技": "feitu keji",
  "宁苑沛骅": "ningyuan peihua", "概率投资": "gailv touzi", "致诚卓远": "zhicheng zhuoyuan",
  "银河德睿": "yinhe derui", "卓瑞": "zhuorui", "金锝投资": "jinde touzi", "玄信": "xuanxin",
  "茂源资本": "maoyuan ziben", "鸣石": "mingshi", "上海某新晋百亿私募": "shanghai mou xinjin baiyi simu",
  "国内某中小型 Fund": "guonei mou zhongxiaoxing fund", "某外资量化公司": "mou waizi lianghua gongsi",
  "北京某新晋百亿私募": "beijing mou xinjin baiyi simu", "国内某百亿私募": "guonei mou baiyi simu",
  "北京某自营公司": "beijing mou ziying gongsi", "上海某百亿私募-maybe衍复": "shanghai mou baiyi simu maybe yanfu",
  "某外资prop trading上海office": "mou waizi prop trading shanghai office", "上海某老牌百亿私募": "shanghai mou laopai baiyi simu",
  "新加坡某知名对冲基金": "xinjiapo mou zhiming duichong jijin", "美国某 Top Hedge Fund": "meiguo mou top hedge fund",
  "国内第一梯队量化私募": "guonei diyi tidui lianghua simu", "集微资产": "jiwei zichan", "顽岩": "wanyan"
};

const techCompanies = new Set(["字节跳动·飞书", "字节跳动·互娱研发", "滴滴", "Uber", "Cisco", "蓝湖", "梅卡曼德机器人", "交叉科技", "MEXC"]);
const quantCompanies = new Set([
  "希洛斯投资", "稳博投资", "万济资本", "平方和投资", "又水投资", "善流投资", "上海卓胜私募",
  "武汉布奇科技 / Bridge Investment Partner", "燧石投资", "九坤投资", "启林投资", "希格斯投资", "顽岩",
  "Antelope Technology", "AlphaGrep", "聚宽", "会世资产", "鸣熙", "因诺资产", "乾象投资 / Metabit", "尚雅投资",
  "非凸科技", "宁苑沛骅", "概率投资", "致诚卓远", "银河德睿", "卓瑞", "金锝投资", "IMC", "玄信", "Akuna Capital",
  "茂源资本", "鸣石", "Squarepoint", "Jane Street", "集微资产", "WorldQuant"
]);
const collator = new Intl.Collator("en", { sensitivity: "base", numeric: true });
export function getCompanySortKey(company) {
  return pinyinKeys[company] || company.toLowerCase();
}
export function compareCompanies(a, b) {
  return collator.compare(getCompanySortKey(a), getCompanySortKey(b)) || a.localeCompare(b, "zh-Hans-CN-u-co-pinyin");
}
export function getCompanyCategory(company) {
  if (techCompanies.has(company)) return "互联网／科技公司";
  if (quantCompanies.has(company) || /私募|Quant|量化|Hedge Fund|对冲基金|prop trading|自营公司|中小型 Fund/i.test(company)) return "量化公司";
  return "其他／未明确";
}
export function groupCompanyDirectory(folders) {
  return ["量化公司", "互联网／科技公司", "其他／未明确"].map(label => ({
    label, folders: folders.filter(folder => getCompanyCategory(folder.company) === label).sort((a, b) => compareCompanies(a.company, b.company))
  })).filter(group => group.folders.length);
}
