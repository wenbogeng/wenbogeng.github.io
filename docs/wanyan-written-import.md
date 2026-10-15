# 顽岩笔试补充记录

来源：`docs/sources/wanyan-written-original.md`，与用户提供的 Markdown 原文件逐字节一致。原文件未修改。未执行原稿中的命令或将交付要求当作操作指令；设计任务作为题目解析。

完整场次保存在 `src/companyExperiences.js`，id 为 `wanyan-written-recollection`。公司名沿用“顽岩”，日期由所有者补充为 2026-08-11，归档于“2026 年 → 08 月 → 顽岩 → OA”；没有猜测全称、时长。公司面经总计 84 场，核心复习仍为 6 题。

## 内容覆盖

| 部分 | 数量 | 补充内容 |
| --- | ---: | --- |
| ACM 算法 | 4 | 数组差值乘积、右侧较小元素、数字解码、树构造；均含 Brute Force、步骤、代码和复杂度 |
| 订单管理代码审阅 | 1 | 回报时序、状态机、部分成交、去重、风控、生命周期、并发、重入和测试重点 |
| 实时排行榜系统设计 | 1 | 32 字节协议头、房间/玩家布局、TCP 定帧、流程图、背压、UDP 与增量扩展 |
| C++ 场景 | 3 | 对象切片、右折叠字符串、自 join 的异常与安全退出 |
| 工作协调和事故处理 | 1 | 五任务排序、委派、新告警、止损、恢复与复盘 |
| 选择与填空基础知识 | 23 | 原文每个主题分别解析，并说明缺失条件 |
| 合计 | 33 | 原稿全文在场次末尾折叠保留 |

## 需要注意的题意和正确性

- `countSmaller` 不是差值乘积的解法，已按函数语义补成独立题面，并标明原稿缺少题干。
- 解码按原稿代码采用 1–26 规则；没有冒认 0–25 规则。完整实现使用十进制大整数计数，不受 `int` 溢出影响。
- 树构造原代码有两处把路径因子数 6 写成 3 的问题，同时错误地对模后余数取 `min`。已给出精确 Prüfer 暴力、纠正后的星形候选公式及中心选择依据。
- **树形全局最优性仍未证明**：小数据全部树形一致不能推出任意 n 都最优。`tree-star-candidate.cpp` 只声明为星形候选计算器，未当作 n≤10⁹ 的已证明正式解。`tree-brute.py` 是 n≤7 的精确基准。
- TCP 非阻塞题缺少选项，不能唯一选字母；结构体布局注明 ABI；打印机题区分“并发竞争”与“已占足打印机执行”；整数除零注明 C/C++ 未定义行为前提。
- 示例代码与设计方案是补充解析，不认定为官方标准答案，也未把代码审阅建议冒充完整交易系统实现。

## 代码与验证

可运行文件在 `docs/code/wanyan/`：

- `pair-product.cpp`：默认抽屉原理剪枝；传任意参数切换为纯暴力。
- `count-smaller.cpp`：默认归并统计；传任意参数切换为双循环。
- `decode.cpp`：默认大整数 DP；传任意参数切换为递归暴力（最多 30 位）。
- `tree-brute.py`：枚举所有树，用 Python 精确整数比较后取模。
- `tree-star-candidate.cpp`：仅计算纠正后的最优星形候选，限制见上文。

运行 `python3 tests/wanyan-algorithms.test.py`：6 组测试通过，覆盖 GCC/Clang C++17 编译、样例、重复/负数/空数组、64 位极值相减与模乘、随机暴力对拍、零字符解码及 300 位字符串的大计数、LP64 布局。树构造穷举 2≤n≤7 的 k（利用颜色交换对称性），累计核对 72,843 棵带标号树；并验证“模后取 min”反例。

`npm run build`、`npm run test:sites`（4 项）和 `git diff --check` 通过。桌面 1280 px 与手机 390 px 页面已实际检查；33 项解析可展开，代码在块内横向滚动，页面无横向溢出。未提交、推送或发布。

## 解析核对来源

下面是对应补充解析的参考文档；与原稿来源分开。

- [NumPy：拷贝与视图](https://numpy.org/doc/stable/user/basics.copies.html)
- [NumPy：广播](https://numpy.org/doc/stable/user/basics.broadcasting.html)
- [NumPy：memmap](https://numpy.org/doc/stable/reference/generated/numpy.memmap.html)
- [Python：执行模型与作用域](https://docs.python.org/3/reference/executionmodel.html)
- [Linux：unlink](https://man7.org/linux/man-pages/man2/unlink.2.html)
- [Linux：信号](https://man7.org/linux/man-pages/man7/signal.7.html)
- [C++ 标准草案：thread::join](https://eel.is/c++draft/thread.thread.member)
- [C++ 标准草案：折叠表达式](https://eel.is/c++draft/expr.prim.fold)
- [C++ 标准草案：虚函数](https://eel.is/c++draft/class.virtual)
