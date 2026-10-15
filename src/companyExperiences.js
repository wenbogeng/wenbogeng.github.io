// 完整场次保存在本文件；资料摘录保留原作者叙述，未认定为个人亲历。
export const companyExperiences = [
  {
    "id": "sealos-investment-cpp-python-written-2024",
    "company": "希洛斯投资",
    "type": "笔试",
    "round": "C++ / Python 笔试",
    "date": "2024-08-07",
    "time": "",
    "duration": "时长未记录",
    "title": "希洛斯投资 · C++ / Python 笔试",
    "summary": "一场覆盖 C++ 基础、继承与多态、内存与异常，以及 Python / NumPy 和代码审阅的综合笔试。",
    "tags": [
      "C++",
      "Python",
      "NumPy",
      "代码审阅",
      "笔试"
    ],
    "sections": [
      {
        "title": "选择题（20 题）",
        "questions": [
          {
            "prompt": "C++ 中，关于构造函数和析构函数，正确的描述是（ ）。",
            "options": [
              "已知类 Student 以及 Student* p；使用 p = new Student 时自动调用无参构造函数创建动态对象，使用 delete p 时自动调用析构函数并释放动态对象所占空间。",
              "定义类时必须自己定义构造函数和析构函数；创建对象时自动调用构造函数，释放对象时自动调用析构函数。",
              "构造函数和析构函数均可以是虚函数。",
              "构造函数和析构函数均能够被继承。"
            ]
          },
          {
            "prompt": "下列各类函数中，（ ）不是类的成员函数。",
            "options": [
              "拷贝构造函数",
              "析构函数",
              "构造函数",
              "友元函数"
            ]
          },
          {
            "prompt": "下面代码的输出结果是（ ）。",
            "code": "int main() {\n    int i = 1;\n    double x = 1.111;\n    cout << i << \" \" << x << \" \";\n    {\n        int x = 2;\n        double i = 2.222;\n        cout << i << \" \" << x << endl;\n    }\n    return 0;\n}",
            "options": [
              "1 1.111 2 2",
              "1 1.111 2.222 2",
              "以上选项都不正确",
              "1 1 2.222 2"
            ]
          },
          {
            "prompt": "关于下面的代码，以下说法正确的是（ ）。",
            "code": "class A {\n    virtual void func1();\n    void func2();\n};\nclass B : class A {\n    void func1() { cout << \"fun1 in class B\" << endl; }\n    virtual void func2() { cout << \"fun2 in class B\" << endl; }\n};",
            "options": [
              "A 中的 func2 是虚函数，B 中的 func1 不是虚函数。",
              "A 中的 func2 和 B 中的 func1 都不是虚函数。",
              "A 中的 func1 和 B 中的 func2 都不是虚函数。",
              "A 中的 func1 和 B 中的 func2 都是虚函数。"
            ]
          },
          {
            "prompt": "A 是一个类并且定义有 getKey() 方法。下面函数中共发生（ ）次对 A 类析构函数的调用。",
            "code": "bool fn(A* a, A b) {\n    A cmp1(*a), cmp2(b);\n    return cmp1.getKey() == cmp2.getKey();\n}",
            "options": [
              "4",
              "2",
              "1",
              "3"
            ]
          },
          {
            "prompt": "C++ 内存分配中说法错误的是（ ）。",
            "options": [
              "栈区一般由编译器自动分配释放，堆区一般由程序员分配释放。",
              "对于堆，大量的 new/delete 操作会造成内存空间不连续。",
              "对于栈来说，生长方向是向上的，也就是向着内存地址增加的方向。",
              "堆容易产生 memory leak（内存泄漏）。"
            ]
          },
          {
            "prompt": "以下四行代码中，哪一行的“123”一定保存在栈上（ ）。",
            "options": [
              "char* brr = \"123\";",
              "const char* arr = \"123\";",
              "const char crr[] = \"123\";",
              "char drr[] = \"123\";"
            ]
          },
          {
            "prompt": "关于下面的代码，以下说法正确的是（ ）。",
            "code": "class A {\n    virtual void func1();\n    void func2();\n};\nclass B : class A {\n    void func1() { cout << \"fun1 in class B\" << endl; }\n    virtual void func2() { cout << \"fun2 in class B\" << endl; }\n};",
            "options": [
              "A 中的 func2 是虚函数，B 中的 func1 不是虚函数。",
              "A 中的 func2 和 B 中的 func1 都不是虚函数。",
              "A 中的 func1 和 B 中的 func2 都不是虚函数。",
              "A 中的 func1 和 B 中的 func2 都是虚函数。"
            ]
          },
          {
            "prompt": "下面 C++ 代码的输出是什么（ ）。",
            "code": "int a = 5;\nauto check = [=]() {\n    a = 10;\n};\ncheck();\ncout << \"Value of a: \" << a << endl;",
            "options": [
              "Value of a: 10",
              "Value of a: 5",
              "运行出错",
              "编译出错"
            ]
          },
          {
            "prompt": "下面 C++ 代码的输出是什么（ ）。",
            "code": "int a = 5;\nauto check = [&]() {\n    a = 10;\n};\ncheck();\ncout << \"Value of a: \" << a << endl;",
            "options": [
              "Value of a: 10",
              "Value of a: 5",
              "运行出错",
              "编译出错"
            ]
          },
          {
            "prompt": "下面代码的输出是什么（ ）。",
            "code": "int a = 5, b = 6, c, d;\nc = a, b;\nd = (a, b);\ncout << c << \" \" << d;",
            "options": [
              "5 6",
              "6 5",
              "6 7",
              "6 8"
            ]
          },
          {
            "prompt": "dynamic_cast 的用途是什么（ ）。",
            "options": [
              "将基类对象指针转成子类对象指针",
              "和执行顺序有关",
              "将基类对象转成子类对象",
              "将子类对象转成基类对象"
            ]
          },
          {
            "prompt": "下面程序的输出是（ ）。",
            "code": "class myclass {\npublic:\n    int i;\n    myclass(int a) : i(a) {}\n    myclass* operator->() { return this; }\n};\nint main() {\n    myclass ob(10);\n    std::cout << ob.i << \" \" << ob->i;\n    return 0;\n}",
            "options": [
              "运行错误",
              "编译错误",
              "11 11",
              "10 10"
            ]
          },
          {
            "prompt": "下面程序的输出是（ ）。",
            "code": "namespace extra { int i = 10; }\nvoid i() {\n    using namespace extra;\n    int i;\n    i = 9;\n    std::cout << i;\n}\nint main() {\n    enum letter { i, j = 11 };\n    class i { letter j; };\n    ::i();\n    return 1;\n}",
            "options": [
              "编译错误",
              "11",
              "10",
              "9"
            ]
          },
          {
            "prompt": "func() 抛出 B 类对象，main 中先 catch(A a)，再 catch(B b)。下面程序的输出是（ ）。",
            "options": [
              "Caught B Class",
              "Caught A Class",
              "运行错误",
              "编译错误"
            ]
          },
          {
            "prompt": "func() 抛出 B 类对象，main 中先 catch(B* b)，再 catch(A a)。下面程序的输出是（ ）。",
            "options": [
              "Caught B Class",
              "Caught A Class",
              "运行错误",
              "编译错误"
            ]
          },
          {
            "prompt": "类 B 包含一个 A 类型成员 a；A、B 的构造函数和析构函数分别打印提示。main 中执行 B b1，输出顺序是（ ）。",
            "options": [
              "B 构造 → A 构造 → A 析构 → B 析构",
              "A 构造 → B 构造 → B 析构 → A 析构",
              "B 构造 → A 构造 → B 析构 → A 析构",
              "A 构造 → B 构造 → A 析构 → B 析构"
            ]
          },
          {
            "prompt": "有关 Python 程序，说法正确的是（ ）。",
            "options": [
              "程序中抛出异常不一定会导致程序终止。",
              "程序中抛出异常会导致程序终止。",
              "拼写错误会导致程序终止。",
              "逻辑错误会导致程序终止。"
            ]
          },
          {
            "prompt": "以下哪个不是 Python 中的关键字（ ）。",
            "options": [
              "with",
              "final",
              "import",
              "except"
            ]
          },
          {
            "prompt": "针对以下代码，错误的说法是（ ）。",
            "code": "file_path = \"c:/network/demo.txt\"\nwith open(file_path, \"r\") as _f:\n    _data = _f.read()\n    print(_data.__class__.__name__)",
            "options": [
              "open 函数用只读模式读取文件。",
              "如果文件不存在，代码不会报错。",
              "代码执行完毕后 IO 会被关闭。",
              "file_path 中存在转义字符，需要进行转义处理或使用原始字符串。"
            ]
          }
        ]
      },
      {
        "title": "填空题（2 题）",
        "bullets": [
          "C++ 默认调用约定是 ______，由 ______ 清理被调用函数的线程栈。",
          "派生类析构函数的调用顺序：1. ______；2. ______；3. ______。"
        ]
      },
      {
        "title": "解答题（1–3：C++）",
        "bullets": [
          "阅读 FillLoginField：代码已通过编译，找出可能的漏洞和可优化点。依赖函数为 GetValueByKeyword 与 FillLoginMap；普通登录字段含 USER_LOGIN、PASSWORD、ACCOUNT_DES，另一类登录额外含 FISL_LOGIN_NOTE。",
          "写出完整的 strcpy 实现，函数签名为 char* strcpy(char* strDest, const char* strSrc)。",
          "标出 main 中无法通过编译的语句并说明原因。考点涉及抽象类实例化、未实现纯虚函数、protected/private 访问、派生类访问基类私有成员，以及重载与名称隐藏。"
        ],
        "codeBlocks": [
          {
            "label": "第 1 题 · 代码审阅",
            "code": "bool FillLoginField(char login_type, string login_fields)\n{\n    vector<string> keyword = {\n        \"USER_LOGIN\", \"PASSWORD\", \"ACCOUNT_DES\", \"FISL_LOGIN_NOTE\"\n    };\n\n    if (login_type == /* 普通登录类型 */) {\n        int index = 0, max_index = 3;\n        while (index < max_index) {\n            string value = GetValueByKeyword(login_fields, keyword[index]);\n            if (value == \"\") continue;\n            FillLoginMap(keyword[index].c_str(), sizeof(keyword[index].c_str()),\n                         value.c_str(), sizeof(value.c_str()));\n            ++index;\n        }\n        return true;\n    } else if (login_type == /* FISL 登录类型 */) {\n        int index = 0, max_index = 4;\n        while (index < max_index) {\n            string value = GetValueByKeyword(login_fields, keyword[index]);\n            if (value == \"\") continue;\n            FillLoginMap(keyword[index].c_str(), sizeof(keyword[index].c_str()),\n                         value.c_str(), sizeof(value.c_str()));\n            ++index;\n        }\n        return true;\n    }\n}"
          },
          {
            "label": "第 3 题 · main 中找出不能编译的语句",
            "code": "class A {\npublic:\n    A() {}\n    virtual int output() = 0;\nprivate:\n    int i;\n};\n\nclass B : public A {\nprivate:\n    int j;\n};\n\nclass C {\n    int f() { return x; }\npublic:\n    int f(int a, int b = 10) { return x * a + b; }\nprotected:\n    void setX(int a) { x = a; }\n    int getX() { return x; }\nprivate:\n    int x;\n};\n\nclass D : public C {\nprivate:\n    int z;\npublic:\n    int f() { return x; }\n};\n\nint main() {\n    A* pA = NULL;\n    A objA;\n    B objB;\n    C objC;\n    D objD;\n    objC.setX(2);\n    cout << objC.getX();\n    objC.setX(1);\n    C* ptrD = &objD;\n    ptrD->f(5);\n    ptrD->f();\n    return 0;\n}"
          }
        ]
      },
      {
        "title": "解答题（4–12：Python / NumPy）",
        "bullets": [
          "命令行执行 python run.py param1 param2，说明在 run.py 中如何取得 param2。",
          "写出 print(1.2 - 1.0 == 0.2) 的运行结果并解释原因。",
          "s = \"ajldjlajfdljfddd\"，不用循环实现去重，并按从小到大顺序输出。",
          "用一行 Python 代码打印 1 到 100 的和。",
          "x = np.array([1, 3, 5, 7, 9, 11])，y = np.reshape(x, (2, -1))，写出 print(y) 的输出。",
          "x = np.array([[34,43,73], [82,22,12], [53,94,66]])，写出 x[::-1] 的结果。",
          "对同一个三行三列数组，分别说明 x[:, x[1, :].argsort()] 与 x[x[:, 0].argsort()] 的结果。",
          "x = np.random.rand(10)，y = x[None, :, np.newaxis]，写出 y.shape。",
          "使用列表推导式从 a = [1,2,3,4,5,6,7,8,9,10] 中取出所有奇数并构造新列表。"
        ]
      }
    ]
  },
  {
    "id": "stablebro-technical-written-2023",
    "company": "稳博投资",
    "type": "笔试",
    "round": "技术组笔试",
    "date": "2023-08-26",
    "time": "",
    "duration": "时长未记录",
    "title": "稳博投资 · 技术组笔试",
    "summary": "两道开放题：Penney’s Game 投币序列策略，以及 C++ 日频股票回测系统框架设计。",
    "tags": [
      "C++",
      "Python",
      "概率",
      "回测系统",
      "Penney’s Game"
    ],
    "sections": [
      {
        "title": "问题一 · 投掷硬币序列",
        "paragraphs": [
          "背景：小 P 和小 H 分别选择一个由 4 个硬币结果组成的序列，正面用 U 表示，反面用 D 表示。一枚公平硬币不断投掷并记录结果，谁选择的序列先出现，谁就是获胜者。",
          "问题：给定小 P 选择的一个序列，请为小 H 给出胜率最大的对应序列，并给出 C++ / Python 代码。",
          "示例：小 P 选择 DDDD，小 H 可以选择 UDDD。",
          "扩展：将序列长度 4 改为任意有限正整数，如何优化计算？此扩展可以选择回答或不回答。"
        ]
      },
      {
        "title": "长度为 4 的作答",
        "paragraphs": [
          "这是 Penney’s Game 的变体。若小 P 的序列不是 UDUD 或 DUDU，设其序列为 XYZW，则取第三位 Z 的反面放到前三位之前，小 H 选择 (-Z)XYZ。",
          "若小 P 选择的是正反面逐个交错的 UDUD 或 DUDU，则小 H 选择 ZXYZ。比如小 P 选择 DDDD 时，小 H 选择 UDDD；小 P 只有开局连续四次都是 D 才能先获胜。"
        ],
        "codeBlocks": [
          {
            "label": "Python · 长度为 4 的策略",
            "code": "def strategyForFour(seq_P):\n    anti = {\"U\": \"D\", \"D\": \"U\"}\n    alternating = seq_P in (\"UDUD\", \"DUDU\")\n    X, Y, Z, W = list(seq_P)\n    N = Z if alternating else anti[Z]\n    return N + X + Y + Z\n\n\nif __name__ == \"__main__\":\n    print(strategyForFour(\"DDDD\"))  # UDDD"
          }
        ]
      },
      {
        "title": "任意长度的扩展作答",
        "paragraphs": [
          "对于任意有限长度，枚举小 H 的所有候选序列，计算序列两两之间的 Conway leading number（CLN），再比较每个候选序列对小 P 的获胜概率，选出概率最大的序列。",
          "若定义 |AB| 为序列 A 与 B 的 CLN，则两方胜率之比可由 Pb : Pa = (|AA| - |AB|) : (|BB| - |BA|) 得到。"
        ],
        "codeBlocks": [
          {
            "label": "Python · 枚举候选序列并计算胜率",
            "code": "def getCLN(seq_A, seq_B):\n    bits = \"\"\n    for length in range(len(seq_A), 0, -1):\n        suffix = seq_A[len(seq_A) - length:]\n        prefix = seq_B[:length]\n        bits += \"1\" if suffix == prefix else \"0\"\n    return int(bits, 2)\n\n\ndef getWinP(seq_P, seq_H):\n    if seq_P == seq_H:\n        return 0.5\n    numerator = getCLN(seq_P, seq_P) - getCLN(seq_P, seq_H)\n    other = getCLN(seq_H, seq_H) - getCLN(seq_H, seq_P)\n    return numerator / (numerator + other)\n\n\ndef getAllSeqs(length):\n    results = [\"\"]\n    for _ in range(length):\n        results = [prefix + side for prefix in results for side in (\"U\", \"D\")]\n    return results\n\n\ndef bestResponse(seq_P):\n    best_seq, best_probability = seq_P, 0.5\n    for seq_H in getAllSeqs(len(seq_P)):\n        probability = getWinP(seq_P, seq_H)\n        if probability >= best_probability:\n            best_seq, best_probability = seq_H, probability\n    return best_seq, best_probability"
          }
        ]
      },
      {
        "title": "问题二 · C++ 日频股票回测框架",
        "paragraphs": [
          "使用 C++ 实现一个面向股票日频数据的回测系统框架 Demo，并具体实现统计模块。",
          "统计模块需要包括收益曲线的计算、IC、Sharpe，以及你认为重要的其他统计指标。框架设计可以参考 BackTrader、vn.py 等已有开源框架。"
        ]
      },
      {
        "title": "问题二 · 我的实现",
        "paragraphs": [
          "我使用 BacktestMetrics 类封装统计模块，构造时传入策略的每日收益率。实现仅依赖 C++ 标准库，并按每年 252 个交易日进行年化。",
          "main.cpp 使用一组日收益率和预测值构造统计对象，逐项输出 Sharpe、最大回撤、胜率、年化收益率、交易次数、交易成本、年化波动率、盈亏比和 IC；接口中还实现了累计收益曲线与 Beta。",
          "当前实现中，Sharpe 按（平均日收益率－无风险利率）÷ 日收益率标准差计算；年化收益率为平均日收益率 × 252，年化波动率为日收益率标准差 × √252。"
        ],
        "bullets": [
          "收益指标：累计收益曲线、年化收益率。",
          "风险指标：Sharpe、最大回撤、年化波动率。",
          "交易统计：胜率、交易次数、交易成本、盈亏比（Profit Factor）。",
          "预测与基准：IC（预测值与实际收益率的 Pearson 相关系数）、Beta（策略与市场收益率的协方差 ÷ 市场收益率方差）。"
        ],
        "codeBlocks": [
          {
            "label": "backtest_metrics.hpp · 统计模块接口",
            "language": "cpp",
            "code": "class BacktestMetrics {\npublic:\n    BacktestMetrics(const std::vector<double>& dailyReturns);\n\n    double calculateSharpeRatio(double riskFreeRate) const;\n    double calculateMaxDrawdown() const;\n    double calculateWinRate() const;\n    double calculateAnnualizedReturn() const;\n    int calculateNumberOfTrades() const;\n    double calculateTransactionCosts(double costPerTrade) const;\n    double calculateAnnualizedVolatility() const;\n    double calculateProfitFactor() const;\n    std::vector<double> calculateCumulativeReturns() const;\n    double calculateInformationCoefficient(\n        const std::vector<double>& predictions) const;\n    double calculateBeta(\n        const std::vector<double>& marketReturns) const;\n\nprivate:\n    std::vector<double> dailyReturns_;\n    double calculateAverage(const std::vector<double>& values) const;\n    double calculateStandardDeviation(\n        const std::vector<double>& values, double average) const;\n};"
          },
          {
            "label": "backtest_metrics.cpp · 累计收益、IC 与 Beta",
            "language": "cpp",
            "code": "std::vector<double> BacktestMetrics::calculateCumulativeReturns() const {\n    std::vector<double> cumulativeReturns;\n    double cumulativeReturn = 1.0;\n\n    for (double dailyReturn : dailyReturns_) {\n        cumulativeReturn *= (1.0 + dailyReturn);\n        cumulativeReturns.push_back(cumulativeReturn - 1.0);\n    }\n    return cumulativeReturns;\n}\n\ndouble BacktestMetrics::calculateInformationCoefficient(\n    const std::vector<double>& predictions) const {\n    if (predictions.size() != dailyReturns_.size())\n        throw std::runtime_error(\"Predictions size does not match daily returns size.\");\n\n    double averageReturns = calculateAverage(dailyReturns_);\n    double averagePredictions = calculateAverage(predictions);\n    double covariance = 0.0;\n\n    for (std::size_t i = 0; i < dailyReturns_.size(); ++i)\n        covariance += (dailyReturns_[i] - averageReturns) *\n                      (predictions[i] - averagePredictions);\n\n    covariance /= dailyReturns_.size();\n    return covariance /\n           (calculateStandardDeviation(dailyReturns_, averageReturns) *\n            calculateStandardDeviation(predictions, averagePredictions));\n}\n\ndouble BacktestMetrics::calculateBeta(\n    const std::vector<double>& marketReturns) const {\n    if (marketReturns.size() != dailyReturns_.size())\n        throw std::runtime_error(\"Market returns size does not match daily returns size.\");\n\n    double averageReturns = calculateAverage(dailyReturns_);\n    double averageMarketReturns = calculateAverage(marketReturns);\n    double covariance = 0.0;\n    double marketVariance = 0.0;\n\n    for (std::size_t i = 0; i < dailyReturns_.size(); ++i) {\n        covariance += (dailyReturns_[i] - averageReturns) *\n                      (marketReturns[i] - averageMarketReturns);\n        marketVariance += std::pow(marketReturns[i] - averageMarketReturns, 2);\n    }\n    return covariance / marketVariance;\n}"
          },
          {
            "label": "main.cpp · 使用示例",
            "language": "cpp",
            "code": "std::vector<double> dailyReturns = {\n    0.02, -0.01, 0.03, -0.02, 0.01, 0.03, -0.01\n};\nstd::vector<double> predictions = {\n    0.01, 0.02, 0.03, -0.01, 0.02, 0.01, -0.02\n};\n\nBacktestMetrics metrics(dailyReturns);\ndouble riskFreeRate = 0.02;\n\nstd::cout << \"Sharpe Ratio: \"\n          << metrics.calculateSharpeRatio(riskFreeRate) << std::endl;\nstd::cout << \"Maximum Drawdown: \"\n          << metrics.calculateMaxDrawdown() << std::endl;\nstd::cout << \"Win Rate: \"\n          << metrics.calculateWinRate() << std::endl;\nstd::cout << \"Annualized Return: \"\n          << metrics.calculateAnnualizedReturn() << std::endl;\nstd::cout << \"Number of Trades: \"\n          << metrics.calculateNumberOfTrades() << std::endl;\nstd::cout << \"Transaction Costs: \"\n          << metrics.calculateTransactionCosts(0.01) << std::endl;\nstd::cout << \"Annualized Volatility: \"\n          << metrics.calculateAnnualizedVolatility() << std::endl;\nstd::cout << \"Profit Factor: \"\n          << metrics.calculateProfitFactor() << std::endl;\nstd::cout << \"Information Coefficient: \"\n          << metrics.calculateInformationCoefficient(predictions) << std::endl;"
          }
        ]
      },
      {
        "title": "WenboFund_WG.ipynb · 单元 1",
        "transcript": "#稳博投资笔试-耿文博\n\n# 回顾第一次做错\n我第一次做的第一题理解错了题目，以为扔完了没有扔到 小P 或者 小H 的序列就重新扔。如果按照我第一次做的思路，每个位置，两种状态，每个情况都等概率的。每次生成一个完整序列的话，选啥都是一样的，这样除非小P 和 小H序列相等，否则获胜概率也不会有差别，因为不管怎么样所有可能性的概率都是 1/16，这个题目也没有任何意义。\n\n- 题目意思应该是不停投掷一枚硬币形成序列 UUDDUUUDUDU.....直到小P 或 小H 选择的序列出现则结束\n- eg: 小P:DDDD 小H:UUUD => 小H 获胜\n\n如果有些做不完的事情，可以用比例来思考 => 如果按照题目所说 小P 选择 DDDD，我们假设小H 选择了 UDDD\n\n- 小P 赢的唯一机会就是在第一次连抛 4 次 D，一旦其中不管在哪儿出现了 一个 U，那么出现 DDDD 之前肯定会出现 UDDD，所以小 P 获胜的概率是 1/16。小H 获胜的概率是 15/16。"
      },
      {
        "title": "WenboFund_WG.ipynb · 单元 2",
        "transcript": "# 问题1: 考虑一个投掷硬币问题:序列长度为4的情况\nHigh Level Idea: Penney's Game 的变种。即当 Penney's Game 的序列长度为4时\n- 若小P所选序列不是正反面逐个交错（UDUD或DUDU）。只需要将小P所选序列的最第三位取反，放到其选择的序列前三位之前，形成的序列就是小H胜率最大的序列。也即如果小P选择了 XYZW，则小H只需要选择（-Z）XYZ即可。例如： 小P 选择 DDDD 时，小H 将第三位的D取反得到 U，拼在 小P 所选的前三位 DDD 之前得到 UDDD，即为胜率最大的序列。\n- 若 小P 所选序列是正反面逐个交错（UDUD或DUDU）。若小P选择 XYZW，则 小H 只需选择 ZXYZ 即可。\n\n\n具体每个序列的概率在这个图片上 https://en.wikipedia.org/wiki/Penney%27s_game#/media/File:Penney_game_graphs.svg"
      },
      {
        "title": "WenboFund_WG.ipynb · 单元 3",
        "codeBlocks": [
          {
            "label": "原始作答代码",
            "code": "def strategyForFour(seq_P):\n    \"\"\"\n    :param seq_P: 小P选择的序列\n    :return: 小H选择的序列\n    \"\"\"\n    anti = {\n        \"U\": \"D\",\n        \"D\": \"U\"\n    }\n    flag = (seq_P == \"UDUD\" or seq_P == \"DUDU\")\n    X, Y, Z, W = list(seq_P)\n    N = Z if flag else anti[Z]\n    seq_H = N + X + Y + Z\n\n    return seq_H\n\n\nif __name__ == '__main__':\n    p = \"DDDD\"\n    h = strategyForFour(p)\n    print(h)"
          }
        ]
      },
      {
        "title": "WenboFund_WG.ipynb · 单元 4",
        "transcript": "# 扩展: 当序列长度未知时为任意有限正整数，无法使用结论性方法，需要更通用的算法\n- 计算两个序列相关向量的转化值 Conway leading number(CLN)，定义|AB|为序列A 和序列B 的 CLN\n- 根据 Pb:Pa = (|AA| - |AB|) / (|BB| - |BA|) 计算获胜概率\n- 选择获胜概率最大的序列\n\nReference in: https://dspace.mit.edu/bitstream/handle/1721.1/141866/26_2021_564_ReferencePDF.pdf?sequence=1&isAllowed=n"
      },
      {
        "title": "WenboFund_WG.ipynb · 单元 5",
        "codeBlocks": [
          {
            "label": "原始作答代码",
            "code": "def getCLN(seq_A, seq_B):\n\n    bin_r = \"\"\n    for i in range(len(seq_A), 0, -1):\n        if seq_A[len(seq_A)-i:len(seq_A)] == seq_B[0:i]:\n            bin_r += \"1\"\n        else:\n            bin_r += \"0\"\n    CLN = int(bin_r, 2)\n    return CLN\n\ndef getWinP(seq_P, seq_H):\n    \"\"\"\n    计算小H获胜的概率\n    :param seq_P: 小P 的序列\n    :param seq_H: 小H 的序列\n    :return: 小H获胜的概率\n    \"\"\"\n    if seq_P == seq_H:\n        return 0.5\n    son = getCLN(seq_P, seq_P) - getCLN(seq_P, seq_H)\n    mon = getCLN(seq_H, seq_H) - getCLN(seq_H, seq_P)\n    p = son / (son + mon)\n    # print(son, mon)\n    return p\n\ndef getAllSeqs(n):\n    \"\"\"\n    获得长度为n的所有序列\n    \"\"\"\n    results = [\"\"]\n    for i in range(0, n):\n        temp_results = []\n        for r in results:\n            temp_results.append(r + \"U\")\n            temp_results.append(r + \"D\")\n        results = temp_results\n    return results\n\n\nif __name__ == '__main__':\n    p_input = \"UDUUU\"\n    n = len(p_input)\n    seqs = getAllSeqs(n)\n\n    best_seq = p_input\n    best_p = 0.5\n    for seq in seqs:\n        p = getWinP(p_input, seq)\n        if p >= best_p:\n            best_seq = seq\n            best_p = p\n\n    print(best_seq)\n\n    # print(seqs)\n    # print(len(seqs))\n    # my_CLN = get_win_p(\"DUDU\", \"DDUD\")\n    # print(my_CLN)"
          }
        ]
      },
      {
        "title": "K2020217.ipynb · 单元 1",
        "transcript": "# 1.考虑一个投掷硬币问题:序列长度为4的情况\n题述抛硬币问题实际上是Penney's Game的变体。当Penney's Game的序列长度为4时：\n- 若小P所选序列不是正反面逐个交错（UDUD或DUDU）。只需要将小P所选序列的最第三位取反，放到其选择的序列前三位之前，形成的序列就是小H胜率最大的序列。也即如果小P选择了XYZW，则小H只需要选择（-Z）XYZ即可。例如：小P选择DDDD时，小H将第三位的D取反得到U，拼在小P所选的前三位DDD之前得到UDDD，即为胜率最大的序列。\n- 若小P所选序列是正反面逐个交错（UDUD或DUDU）。若小P选择XYZW，则小H只需选择ZXYZ即可。\n\npython代码实现如下："
      },
      {
        "title": "K2020217.ipynb · 单元 2",
        "codeBlocks": [
          {
            "label": "原始作答代码",
            "code": "def get_4items_seq(seq_P):\n    \"\"\"\n    :param seq_P: 小P选择的序列\n    :return: 小H选择的序列\n    \"\"\"\n    anti = {\n        \"U\": \"D\",\n        \"D\": \"U\"\n    }\n    flag = (seq_P == \"UDUD\" or seq_P == \"DUDU\")\n    X, Y, Z, W = list(seq_P)\n    N = Z if flag else anti[Z]\n    seq_H = N+X+Y+Z\n\n    return seq_H\n\n\nif __name__ == '__main__':\n    p = \"DDDD\"\n    h = get_4items_seq(p)\n    print(h)"
          }
        ]
      },
      {
        "title": "K2020217.ipynb · 单元 3",
        "transcript": "# 2. 当序列长度未知时，上述问题进一步进化，无法使用结论性方法，需要更通用的算法。\n- 计算两个序列相关向量的转化值Conway leading number(CLN)，定义|AB|为序列A和序列B的CLN\n- 根据Pb:Pa = (|AA| - |AB|) / (|BB| - |BA|)计算获胜概率\n- 选择获胜概率最大的序列\n\npython代码实现如下"
      },
      {
        "title": "K2020217.ipynb · 单元 4",
        "codeBlocks": [
          {
            "label": "原始作答代码",
            "code": "def get_CLN(seq_A, seq_B):\n\n    bin_r = \"\"\n    for i in range(len(seq_A), 0, -1):\n        if seq_A[len(seq_A)-i:len(seq_A)] == seq_B[0:i]:\n            bin_r += \"1\"\n        else:\n            bin_r += \"0\"\n    CLN = int(bin_r, 2)\n    return CLN\n\ndef get_win_p(seq_P, seq_H):\n    \"\"\"\n    计算小H获胜的概率\n    :param seq_P: 小P 的序列\n    :param seq_H: 小H 的序列\n    :return: 小H获胜的概率\n    \"\"\"\n    if seq_P == seq_H:\n        return 0.5\n    son = get_CLN(seq_P, seq_P) - get_CLN(seq_P, seq_H)\n    mon = get_CLN(seq_H, seq_H) - get_CLN(seq_H, seq_P)\n    p = son / (son+mon)\n    # print(son, mon)\n    return p\n\ndef get_all_seqs(n):\n    \"\"\"\n    获得长度为n的所有序列\n    \"\"\"\n    results = [\"\"]\n    for i in range(0, n):\n        temp_results = []\n        for r in results:\n            temp_results.append(r + \"U\")\n            temp_results.append(r + \"D\")\n        results = temp_results\n    return results\n\n\nif __name__ == '__main__':\n    p_input = \"UDUUU\"\n    n = len(p_input)\n    seqs = get_all_seqs(n)\n\n    best_seq = p_input\n    best_p = 0.5\n    for seq in seqs:\n        p = get_win_p(p_input, seq)\n        if p >= best_p:\n            best_seq = seq\n            best_p = p\n\n    print(best_seq)\n\n    # print(seqs)\n    # print(len(seqs))\n    # my_CLN = get_win_p(\"DUDU\", \"DDUD\")\n    # print(my_CLN)"
          }
        ]
      }
    ],
    "sourceFiles": [
      "稳博投资笔试/WenboFund_WG.ipynb",
      "稳博投资笔试/K2020217.ipynb"
    ],
    "context": "已补入两份原始 Notebook 的文字与代码；原作答保留原样，未执行 Notebook。Pages 题面待完整转写核对。"
  },
  {
    "id": "wanji-quant-developer-written",
    "company": "万济资本",
    "type": "笔试",
    "round": "量化开发笔试",
    "date": "2023 年",
    "time": "",
    "duration": "45 分钟",
    "title": "万济资本 · 量化开发笔试",
    "summary": "EasyHire 英文笔试，约 13–14 道题，每道题单独计时。",
    "tags": [
      "量化开发",
      "概率",
      "算法",
      "金融数学"
    ],
    "sections": [
      {
        "title": "整体体验",
        "paragraphs": [
          "海外企业使用的 EasyHire，题目全部是英文。平台是第一次使用，每道题都有计时，大约 10 分钟，整体非常赶。",
          "当时不确定每道题是要求写代码还是只用文字描述。除了几道题明确给了文字描述外，其他题目都写了一个简单代码求解。有些题已经记不清，一共大约 13 或 14 道。"
        ]
      },
      {
        "title": "题目记录",
        "bullets": [
          "x^x^x^x^… = 2，求 x 的数值解。",
          "Ui（i=1…50）在 (1,10) 范围内独立且均匀分布，求 P(ΣUi > 300)。",
          "8 个男孩和 7 个女孩随机坐在同一排 15 个座位上，计算异性相邻数量的期望。",
          "单位长度的棍子随机在两个地方折断，三段能组成三角形的概率是多少？",
          "取出较大的一块再次随机折断，最终组成三角形的概率是多少？",
          "经典 LIS，但题目要求最长递增子序列的总数量。",
          "给出一段 Python 代码，补全 0-1 背包问题模板。",
          "三种基本的回测方法。",
          "证明看涨期权价格是行使价的凸函数。这道题不会，当时等待计时结束。"
        ]
      }
    ]
  },
  {
    "id": "bytedance-lark-backend-round1",
    "company": "字节跳动·飞书",
    "type": "面试",
    "round": "后端一面",
    "date": "2023 年",
    "time": "",
    "duration": "约 55 分钟",
    "title": "字节跳动·飞书 · 后端一面",
    "summary": "根据项目追问 C++ 多线程与 Kafka，算法题是升序链表去重。",
    "tags": [
      "C++",
      "Kafka",
      "链表"
    ],
    "sections": [
      {
        "title": "面试过程",
        "paragraphs": [
          "没有自我介绍，上来直接问项目，并根据项目问基础知识。先问擅长的语言，因为个人更擅长 C++，所以问了很多 C++ 多线程方向的问题。",
          "印象较深的是“volatile 关键字的作用？”。当时实在没想起来，只记得使用它是为了不让编译器过度优化。",
          "项目涉及 Kafka，因此还问了 Kafka 的实现逻辑、Kafka 如何保证数据一致性，以及 Kafka Consumer Group 的概念。"
        ]
      },
      {
        "title": "算法题",
        "paragraphs": [
          "算法比较简单：升序单链表去重，需要自己编写测试用例。",
          "当时受 LeetCode 习惯影响，删除元素时直接把指针指向下下个元素。面试结束后才想起来，为了防止内存泄漏，应该先用临时指针保存待删除节点，再 delete 释放。"
        ]
      },
      {
        "title": "反问与结果",
        "paragraphs": [
          "反问：岗位 JD 要求 Golang，但自己没有使用过，是否接受入职后转语言。",
          "面试结束不久，HR 告知该岗位不再推进，但可以帮助推荐到其他组。"
        ]
      }
    ]
  },
  {
    "id": "didi-rd-round2",
    "company": "滴滴",
    "type": "面试",
    "round": "研发岗二面",
    "date": "2023 年",
    "time": "",
    "duration": "约 40 分钟",
    "title": "滴滴 · 研发岗二面",
    "summary": "网约车订单均衡系统设计，以及链表节点两两交换。",
    "tags": [
      "系统设计",
      "调度",
      "链表"
    ],
    "sections": [
      {
        "title": "面试过程",
        "paragraphs": [
          "面试官迟到了接近 10 分钟。自我介绍后出了一道设计题：全国范围内有些网约车司机很繁忙、接单很多，有些司机却很空闲，如何设计一个系统，让司机能够更均衡地接单。",
          "当时不知道如何入手，先询问 Daily Active User 和 Traffic Size。面试官只说可以考虑当前有很多人都在使用打车软件。回答过程中能听到面试官敲键盘的声音，感觉没有在仔细听。",
          "随后询问是否有其他 offer 和高考成绩，然后让写一道算法题。"
        ]
      },
      {
        "title": "算法题",
        "paragraphs": [
          "两两交换链表节点。本来觉得题目很稳，但最终翻车。面试官在写代码时关闭了摄像头，之后也没有再打开。",
          "写完后输出有问题，自己仍在检查逻辑，面试官询问了解题思路，回答后没有让继续修改。"
        ]
      },
      {
        "title": "反问与感受",
        "paragraphs": [
          "反问环节觉得大概率无法通过，因此直接表示没有问题。整场体验不太好，面试过程中摄像头不停摆动，感到不太被尊重。"
        ]
      }
    ]
  },
  {
    "id": "bytedance-entertainment-backend-round1",
    "company": "字节跳动·互娱研发",
    "type": "面试",
    "round": "后端一面",
    "date": "2023 年",
    "time": "",
    "duration": "约 1 小时",
    "title": "字节跳动·互娱研发 · 后端一面",
    "summary": "Java 基础问题，以及苹果箱子和单链表右移两道算法题。",
    "tags": [
      "Java",
      "二进制",
      "链表"
    ],
    "sections": [
      {
        "title": "自我介绍与基础知识",
        "paragraphs": [
          "先进行自我介绍和项目介绍。JD 没有写具体技术栈，本来以为会根据个人 C++ 方向提问，实际问的主要是 Java 方向基础知识。",
          "由于不熟悉 Java 和 Spring，很多问题无法说清。例如：HashMap 发生哈希冲突后，链表什么时候会转成红黑树？阈值为什么这样设计？"
        ]
      },
      {
        "title": "苹果与箱子",
        "paragraphs": [
          "剩余约 30 分钟进入算法环节。第一题是 1000 个苹果和 10 个箱子如何分配。题目描述比较奇怪，没有例子，一开始误以为是概率或智力题。",
          "先回答每个盒子平均放 100 个，面试官表示苹果数量不确定；之后又回答苹果数和盒子数取最大公约数，仍然不对。面试官提示 2^10 = 1024，但当时仍没有想到二进制表示。",
          "最终面试官给出的思路是用二进制分配：例如客户需要 3 个苹果，可以用装有 1 和 2 个苹果的箱子组合。"
        ],
        "links": [
          {
            "label": "苹果箱子原题",
            "url": "https://blog.csdn.net/qq_33732195/article/details/110533422"
          }
        ]
      },
      {
        "title": "单链表右移 K 位",
        "paragraphs": [
          "飞书上原本显示有三道题。第一题思考和理解花费太久，看到面试官删掉了一道题。最后约 10 分钟写单链表右移 K 位。",
          "示例：k=3，1→2→3→4→5→6→null，返回 4→5→6→1→2→3→null。题目不难，但因为只有示例没有完整描述，理解花了一些时间。最后没有写测试用例，代码有一个小 bug 被面试官指出。"
        ]
      },
      {
        "title": "反问",
        "paragraphs": [
          "当时觉得表现很差、很可能无法通过，因此反问了一个比较私人的问题。"
        ]
      }
    ]
  },
  {
    "id": "mechmind-cpp-written",
    "company": "梅卡曼德机器人",
    "type": "笔试",
    "round": "C++ 笔试",
    "date": "2023 年",
    "time": "",
    "duration": "时长未记录",
    "title": "梅卡曼德机器人 · C++ 笔试",
    "summary": "三次收到内容相同的全选择题笔试，覆盖 C++、算法和操作系统基础。",
    "tags": [
      "C++",
      "算法",
      "操作系统"
    ],
    "sections": [
      {
        "title": "整体经历",
        "paragraphs": [
          "不清楚公司的内部管理情况，前后三位 HR 分别发送了笔试链接，做了三次完全相同的题目。笔试全部是选择题，以 C++ 和算法基础为主。",
          "前两次做完后询问结果都没有回复。第三位 HR 在笔试后添加微信，要求提供在校成绩单，表示是审核的一部分；发送成绩单后也没有后续消息。"
        ]
      },
      {
        "title": "题目范围",
        "bullets": [
          "基本类型的精度转换。",
          "编译与链接。",
          "虚拟内存和物理内存。",
          "函数参数默认值。",
          "内存泄漏。",
          "快速排序的最坏情况。",
          "求无序数组最小值和最大值所需的比较次数，答案涉及约 1.5n 次比较。",
          "查找循环单链表前驱和后继节点的复杂度。",
          "继承体系下构造和析构的输出顺序。"
        ]
      },
      {
        "title": "未确定的题目",
        "paragraphs": [
          "某系统由 Cache 和主存两级构成。Cache 访问时间 10 个周期、缺失率 10%；主存访问时间 100 个周期、缺失率 0%。求平均存储器访问时间。当时不会，GPT-3.5 给出的答案是 20%，但不确定是否正确。"
        ]
      }
    ]
  },
  {
    "id": "squarepoint-quant-cpp",
    "company": "平方和投资",
    "type": "面试与笔试",
    "round": "量化开发 C++",
    "date": "2023 年",
    "time": "",
    "duration": "面试 11 分钟；笔试 90 分钟",
    "title": "平方和投资 · 量化开发 C++",
    "summary": "一面主要问基数排序和 Lambda；笔试覆盖计算机基础及三道 Coding。",
    "tags": [
      "C++",
      "排序",
      "算法",
      "笔试"
    ],
    "sections": [
      {
        "title": "C++ 一面",
        "paragraphs": [
          "约的是半小时，实际只有 11 分钟。面试官迟到接近 10 分钟，先进行自我介绍和项目介绍。由于没有介绍得特别深入，基础知识一共只问了两个问题。",
          "第一个是基数排序。之前刷题没有用过，也没有系统了解；当时以为听到的是计数排序，因此按照计数排序回答，复盘时才发现问的是十大排序算法中的基数排序。",
          "第二个是 C++ Lambda 表达式。回答得比较浅，例子停留在算法使用层面，例如捕获变量后 DFS 可以少传参数。",
          "之后询问期望岗位方向是算法还是开发，并表示需要排序，等待一周；如果没有消息就是被淘汰。最终默认未通过。"
        ]
      },
      {
        "title": "笔试体验",
        "paragraphs": [
          "笔试 90 分钟，时间比较赶。选择题包含计算机网络、操作系统和数据库，另有三道 Coding。题量很大，因为按顺序作答，Coding 部分最后没有时间仔细思考，最后两个多选题也没来得及做。"
        ]
      },
      {
        "title": "Coding 题",
        "bullets": [
          "金币问题。",
          "哈夫曼编码。实现过程中发生爆栈，没有时间修改。",
          "LeetCode 123：买卖股票的最佳时机 III。"
        ],
        "links": [
          {
            "label": "金币原题",
            "url": "https://www.cnblogs.com/rstz/p/12393227.html"
          },
          {
            "label": "哈夫曼编码原题",
            "url": "https://blog.csdn.net/Tianyuwoni/article/details/64141585"
          }
        ]
      }
    ]
  },
  {
    "id": "stablebro-quant-trading-system-round1",
    "company": "稳博投资",
    "type": "面试",
    "round": "量化交易系统开发一面",
    "date": "2023 年",
    "time": "",
    "duration": "约 30 分钟",
    "title": "稳博投资 · 量化交易系统开发一面",
    "summary": "C++ 项目、网络与消息队列基础，以及每秒 100 笔下单限流设计。",
    "tags": [
      "C++",
      "网络",
      "交易系统",
      "限流"
    ],
    "sections": [
      {
        "title": "面试过程",
        "paragraphs": [
          "面试前 HR 让准备交易策略方向内容，但实际面试完全没有问策略。自我介绍之后主要是基础知识提问。"
        ]
      },
      {
        "title": "基础问题",
        "bullets": [
          "MySQL 的索引。",
          "量化交易的优点。",
          "介绍一个 C++ 项目；项目中 Socket 和线程分别使用了什么。",
          "C++ 使用过哪些开源网络库。",
          "介绍 RabbitMQ。简历没有写过 RabbitMQ，只使用过 Kafka，但之前看过相关基础知识。",
          "网卡的混杂模式。当时不太会，只根据自己的理解回答。",
          "TCP 之前的端口已经被占用，为什么还可以建立连接。"
        ]
      },
      {
        "title": "场景设计题",
        "paragraphs": [
          "交易场景下，系统规定 1 秒内下单不能超过 100 笔。系统调用超过 100 笔时，应该如何拦截？",
          "当时回答可以使用 Rate Limiter 或一些负载均衡算法，并以最熟悉的 Leaky Bucket 为例，但感觉面试官并不满意。",
          "追问应该用什么数据结构检查。回答用队列记录系统调用时间戳，再用哈希表做映射。之后又问上下游控制使用什么数据结构；当时没有完全理解，仍回答用队列解耦上下游。"
        ]
      },
      {
        "title": "结果",
        "paragraphs": [
          "反问环节结束后很快收到感谢信，不清楚具体原因，自认为大部分问题都回答了。"
        ]
      },
      {
        "title": "原始面试问题与复盘笔记",
        "transcript": "1. MySQL 的索引 \n\n   MySQL的索引是用于提高数据库查询性能的数据结构。它们可以加速数据的检索操作，从而减少查询的执行时间。索引可以基于一个或多个列创建，它们在数据库表中维护一个有序的数据结构，使得数据库系统可以更快地找到所需的数据。\n\n   有几种常见的索引类型：\n\n   1. **B树索引（B-Tree Index）：** 这是最常见的索引类型，适用于大多数情况。它以树状结构存储数据，支持范围查询、模糊查询和精确查询。\n\n   2. **唯一索引（Unique Index）：** 用于确保索引列中的值是唯一的，适用于需要避免重复数据的情况。\n\n   3. **主键索引（Primary Key Index）：** 是唯一索引的特殊类型，用于标识表中的每一行数据。每个表只能有一个主键索引。\n\n   4. **全文索引（Full-Text Index）：** 用于全文搜索，可以进行更复杂的文本匹配查询。\n\n   5. **空间索引（Spatial Index）：** 用于地理信息数据，支持空间查询。\n\n   6. **哈希索引（Hash Index）：** 基于哈希函数构建的索引，适用于等值查询，但不支持范围查询。\n\n   创建索引可以提高查询性能，但也会增加插入、更新和删除操作的开销。因此，在创建索引时需要权衡查询性能和数据修改的开销。选择合适的索引类型以及在需要的列上创建索引可以有效地优化数据库性能。\n\n2. 量化的优点\n\n   量化（quantitative analysis）在许多领域中都具有各种优点，以下是一些常见的优点：\n\n   1. **客观性：** 量化分析依赖于数据和统计，减少了主观判断的影响。这使得决策更加客观和可靠。\n\n   2. **精确性：** 量化分析通过数字和精确的测量来描述和评估事物。这有助于减少模糊性和歧义，使分析结果更加精确。\n\n   3. **可重复性：** 量化方法使用明确的数据和步骤，因此可以轻松地被其他人重复验证。这增加了研究和分析结果的可信度。\n\n   4. **综合考虑多个因素：** 量化分析可以同时考虑多个变量和因素，从而提供更全面的视角，有助于更好地理解事物的关系。\n\n   5. **有效决策支持：** 通过量化分析，可以基于数据和事实做出决策，降低了决策的风险，并提供更好的决策支持。\n\n   6. **快速分析：** 计算机技术的发展使得大规模的量化分析可以在较短的时间内完成，加速了问题的解决过程。\n\n   7. **模式识别：** 量化分析可以帮助发现数据中的模式、趋势和关联，从而揭示出隐藏在数据背后的信息。\n\n   8. **风险管理：** 在金融、投资等领域，量化分析可以用于评估风险和回报，有助于制定更有效的投资策略。\n\n   9. **持续改进：** 通过不断地量化和分析过程、业务和绩效，组织可以识别问题并进行持续改进，提高效率和质量。\n\n   需要注意的是，尽管量化分析具有许多优点，但它也可能受到数据质量、模型假设和不确定性等因素的影响。在使用量化方法时，需要谨慎选择适当的模型和工具，并理解分析的局限性。\n\n3. c++项目讲一下\n\n4. c++项目 socket用的什么？线程用的什么\n\n   在C++项目中，使用Socket进行网络通信和线程进行并发处理是非常常见的做法。以下是关于这两个方面的简要解释：\n\n   **Socket网络通信：**\n   在C++中，您可以使用标准的Socket库（套接字库）来实现网络通信。这通常涉及使用`<sys/socket.h>`头文件和相关函数来创建、连接、发送和接收数据。您可以使用TCP或UDP协议进行通信，这取决于您的需求。TCP提供可靠的、面向连接的通信，而UDP提供更快速但不可靠的通信。\n\n   **线程并发处理：**\n   在C++中，有几种处理线程并发性的方法。以下是两个常见的方法：\n\n   1. **C++11 标准线程库：** C++11引入了标准的多线程库，包括`<thread>`头文件和`std::thread`类。您可以使用这些库来创建、管理和同步线程，以实现并发处理。此外，C++11还引入了原子操作、互斥量和条件变量等工具，用于线程间的同步和通信。\n\n   2. **POSIX 线程库：** 如果您的项目在支持POSIX（可移植操作系统接口）的系统上运行，您可以使用POSIX线程库。这包括`<pthread.h>`头文件和相关函数，用于创建和管理线程。\n\n5. c++有用过开源的网络库吗\n\n   1. **Boost.Asio：** Boost是一个C++库的集合，其中Boost.Asio是其网络和异步I/O库的一部分。它提供了一种高度可扩展的、异步的、事件驱动的网络编程框架，适用于TCP、UDP、SSL等协议。\n\n   2. **Poco C++ Libraries：** Poco库是一个跨平台的C++类库，提供了许多组件，包括网络和Web编程。它包含了用于HTTP、SMTP、FTP、WebSocket等协议的类。\n\n   3. **libcurl：** libcurl是一个用于支持许多不同协议的客户端URL传输库。它可以用来进行HTTP、FTP、SMTP等协议的数据传输。\n\n   4. **cpp-netlib：** cpp-netlib是一个C++网络库，提供了用于HTTP、HTTPS等协议的组件，帮助开发者进行网络编程。\n\n   5. **WebSocket++：** WebSocket++是一个用于WebSocket协议的C++库，适用于实时的双向通信场景。\n\n6. RabbitMQ\n\n   RabbitMQ是一种开源的消息代理（message broker）软件，用于实现应用程序之间的消息传递。它实现了高级消息队列协议（AMQP），允许不同应用程序在分布式系统中通过消息进行通信。\n\n   以下是关于RabbitMQ的一些重要信息：\n\n   **消息队列：** RabbitMQ使用消息队列来传递消息。消息发送者将消息放入队列，消息接收者从队列中获取消息并进行处理。这种方式实现了解耦和异步通信，允许应用程序在不同时间处理消息。\n\n   **发布-订阅模式：** RabbitMQ支持发布-订阅模式，其中消息发送者将消息发布到交换机（exchange），然后交换机将消息传递给与之绑定的队列。多个接收者可以订阅相同的队列以接收相同的消息。\n\n   **可靠性和持久性：** RabbitMQ具有高度可靠性和持久性。您可以配置队列和消息以在服务器重启后仍然保留，并确保消息不会丢失。\n\n   **消息确认机制：** 发送者可以要求RabbitMQ确认消息是否已成功传递到队列中。接收者在处理完消息后可以发送确认，以确保消息不会丢失。\n\n   **多语言支持：** RabbitMQ支持多种编程语言，允许不同的应用程序使用不同的语言进行通信。\n\n   **插件系统：** RabbitMQ具有丰富的插件系统，允许扩展和自定义其功能，如日志记录、身份验证和授权等。\n\n   **应用场景：** RabbitMQ在分布式系统中有许多应用场景，包括任务队列、日志传递、事件处理和系统解耦等。\n\n   **管理界面：** RabbitMQ附带了一个Web管理界面，允许您监视和管理队列、交换机、连接和其他资源。\n\n   需要注意的是，RabbitMQ的配置和使用可能会涉及一些复杂性，特别是在处理高并发和大规模数据时。但它是一个强大的工具，可以帮助构建可靠的分布式应用程序和系统。\n\n7. 网卡的混杂模式\n\n   网络中的网卡混杂模式（Promiscuous Mode）是一种网络适配器的工作模式，允许网卡捕获并接收通过网络传输的所有数据包，而不仅仅是它们自己的目标地址。通常情况下，网卡只会接收发送给自己MAC地址或广播地址的数据包，而忽略其他数据包。然而，在混杂模式下，网卡会无条件地接收网络上的所有数据包。\n\n   混杂模式在网络分析、嗅探、网络监视和安全测试等方面非常有用。以下是一些关键点：\n\n   1. **网络分析和嗅探：** 混杂模式允许网络管理员捕获整个网络流量，以便分析网络活动、诊断问题和监视性能。\n\n   2. **网络监视和安全：** 网络监控工具可以利用混杂模式来监视流入和流出网络的数据包，从而检测异常活动、攻击和未经授权的访问。\n\n   3. **网络流量分析：** 安全团队可以使用混杂模式来分析流量，以便识别潜在的威胁，如恶意软件传播或数据泄漏。\n\n   4. **网络测试：** 在网络渗透测试和漏洞评估过程中，混杂模式可以帮助发现网络中的漏洞、弱点和攻击面。\n\n   需要注意的是，使用混杂模式需要相应的权限，并且可能在一些网络环境中被视为安全风险。因此，在使用混杂模式时，必须遵循适当的法规和政策，并确保只在合法授权的情况下使用。\n\n8. Tcp之前的端口被占用，tcp怎么还有连接\n\n   TCP连接的建立和端口占用之间是有一些区别的。虽然一个端口可能已经被占用，但TCP连接仍然可以成功建立。这是因为TCP连接的唯一性不仅仅取决于本地端口，还取决于本地IP地址、远程IP地址和远程端口的组合。\n\n   当一个端口被占用时，这意味着该端口当前已被另一个程序或连接占用，从而阻止其他程序在同一IP地址和端口上建立新的连接。但是，如果您在不同的IP地址或端口上尝试建立连接，这仍然是可能的，因为每个TCP连接由一个四元组 (本地IP、本地端口、远程IP、远程端口) 唯一标识。\n\n   TCP连接的成功与否还受其他因素的影响，如操作系统的连接限制、防火墙设置等。在某些情况下，即使端口没有被占用，由于操作系统的连接数限制，也可能无法建立新的连接。\n\n   总之，TCP连接的建立受到多个因素的影响，包括端口是否被占用、四元组的唯一性、连接数限制等。即使某个特定端口被占用，通过选择合适的IP地址和端口，仍然可以在其他情况下成功建立TCP连接。\n\n9. 交易场景下，1s下单不能超过100笔，系统调用超过100笔，做拦截，c++怎么实现\n\n10. 要在C++中实现磁盘交易场景下的系统调用拦截，您可以考虑以下步骤：\n\n    1. **计数器和时间戳：** 首先，您需要在程序中设置一个计数器来跟踪每秒下单的次数，并记录每次系统调用的时间戳。\n\n    2. **拦截检查：** 在每次要进行系统调用之前，您可以执行以下检查：\n       - 检查计数器是否已经达到100笔。\n       - 如果是，计算当前时间戳与最早的时间戳之间的时间差，如果小于1秒，则说明在1秒内已经发生了超过100笔系统调用。\n\n    3. **逻辑处理：** 如果检查通过，可以执行实际的系统调用，否则可以选择拒绝系统调用或执行其他逻辑。\n\n    以下是一个简单的示例代码，用于说明上述步骤：",
        "codeBlocks": [
          {
            "label": "稳博投资一面-凉经.md · 代码 1",
            "code": "    #include <iostream>\n    #include <ctime>\n    \n    int main() {\n        int syscallCounter = 0;\n        std::time_t firstTimestamp = std::time(nullptr);\n    \n        // 模拟系统调用\n        for (int i = 0; i < 120; ++i) {\n            // 记录每次系统调用的时间戳\n            std::time_t currentTimestamp = std::time(nullptr);\n            \n            // 检查计数器和时间戳\n            if (syscallCounter >= 100 && currentTimestamp - firstTimestamp < 1) {\n                std::cout << \"拦截系统调用，超过1秒内下单次数限制！\" << std::endl;\n                break; // 可以选择终止循环或执行其他操作\n            }\n    \n            // 执行系统调用\n            // ...\n    \n            // 更新计数器和时间戳\n            if (currentTimestamp - firstTimestamp >= 1) {\n                syscallCounter = 1;\n                firstTimestamp = currentTimestamp;\n            } else {\n                ++syscallCounter;\n            }\n        }\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "11. 上述场景用什么数据结构去检查",
        "transcript": "11. 上述场景用什么数据结构去检查\n\n    在上述场景中，您需要一个数据结构来有效地跟踪每个系统调用的时间戳，并进行计数。一个合适的数据结构是队列（Queue），因为它可以维护系统调用的时间顺序，并且可以轻松地实现先进先出（FIFO）的特性。\n\n    您可以使用C++的`std::queue`来实现队列，同时结合时间戳和计数器来管理系统调用次数。以下是如何使用队列来实现检查的示例：",
        "codeBlocks": [
          {
            "label": "稳博投资一面-凉经.md · 代码 2",
            "code": "    #include <iostream>\n    #include <ctime>\n    #include <queue>\n    \n    int main() {\n        std::queue<std::time_t> syscallQueue;\n        const int maxCallsPerSecond = 100;\n    \n        // 模拟系统调用\n        for (int i = 0; i < 120; ++i) {\n            std::time_t currentTimestamp = std::time(nullptr);\n    \n            // 检查队列大小并弹出超过1秒前的时间戳\n            while (!syscallQueue.empty() && currentTimestamp - syscallQueue.front() >= 1) {\n                syscallQueue.pop();\n            }\n    \n            // 检查队列大小和计数器\n            if (syscallQueue.size() >= maxCallsPerSecond) {\n                std::cout << \"拦截系统调用，超过1秒内下单次数限制！\" << std::endl;\n                break; // 可以选择终止循环或执行其他操作\n            }\n    \n            // 执行系统调用\n            // ...\n    \n            // 将当前时间戳加入队列\n            syscallQueue.push(currentTimestamp);\n        }\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "在这个示例中，`syscallQueue`维护了一个时间戳队列，当有新的系统调用时，它会将当前时间戳加入队列末尾，并通过弹出队列前部的过时时间戳来确保队列中的时间戳保持在1秒内。然",
        "transcript": "在这个示例中，`syscallQueue`维护了一个时间戳队列，当有新的系统调用时，它会将当前时间戳加入队列末尾，并通过弹出队列前部的过时时间戳来确保队列中的时间戳保持在1秒内。然后，您可以根据队列大小进行拦截检查。\n\n12. 上述场景下上下游控制用什么数据结构\n\n    在上下游控制中，您可以使用不同的数据结构来实现数据的流动和通信。具体选择的数据结构将取决于您的应用场景、需求和系统设计。以下是一些可能用于上下游控制的常见数据结构：\n\n    1. **队列（Queue）：** 队列是一种常见的数据结构，用于实现先进先出（FIFO）的数据流。在上下游控制中，您可以使用队列来存储需要进行处理或传递的数据。上游生产者将数据放入队列，下游消费者从队列中取出并处理数据。这种方式有助于解耦上下游之间的关系，使数据流动更平稳。\n\n    2. **缓冲区（Buffer）：** 缓冲区是一种用于临时存储数据的区域，可以用来平衡上下游之间的速率不匹配。上游可以将数据写入缓冲区，而下游则从缓冲区中读取数据，使两者之间的处理能力得到匹配。\n\n    3. **管道（Pipeline）：** 管道是一种将数据处理分为多个阶段的方式，每个阶段都由不同的组件或模块处理。上游产生的数据经过一系列阶段的处理后，最终到达下游。管道可以提高数据处理的效率和可维护性。\n\n    4. **观察者模式：** 观察者模式是一种设计模式，用于在对象之间建立发布-订阅的关系。在上下游控制中，您可以使用观察者模式来实现上游数据的变化通知下游，使下游能够相应地进行处理。\n\n    5. **数据流图（Data Flow Graph）：** 数据流图是一种图形化的表示，用于展示数据在不同模块之间的流动关系。在数据流图中，每个模块表示一个处理单元，边表示数据流动的路径，从而形成整个上下游控制的结构。"
      }
    ],
    "sourceFiles": [
      "稳博投资笔试/稳博投资一面-凉经.md"
    ],
    "context": "以下补充保留当时的面试题与事后笔记；解释和代码属于原始复盘，尚未逐项审校。"
  },
  {
    "id": "cross-tech-cpp-round1",
    "company": "交叉科技",
    "type": "面试",
    "round": "C++ 一面",
    "date": "2023 年",
    "time": "",
    "duration": "约 20 分钟",
    "title": "交叉科技 · C++ 一面",
    "summary": "机器学习经历、LSTM、动态规划，以及最大回撤率算法题。",
    "tags": [
      "机器学习",
      "动态规划",
      "最大回撤"
    ],
    "sections": [
      {
        "title": "面试过程",
        "paragraphs": [
          "原本约一小时，实际约 20 分钟。自我介绍后，面试官询问在学校做的机器学习和深度学习科研；还没有介绍完，面试官就问是否只是调包，自己回答是。",
          "面试官询问机器学习是否在学校上过课，回答是通过 Coursera 上吴恩达的视频自学。随后追问 LSTM 网络结构，当时已经忘记。",
          "之后问算法是否在学校学过，回答也是自学，因为自己是硬件转码；接着询问是否会动态规划。"
        ]
      },
      {
        "title": "最大回撤率",
        "paragraphs": [
          "面试官口述最大回撤率题目，第一遍没有听清，询问能否把题目发在聊天框，面试官没有发送，只重新口述了一遍。具体题目已经记不完整，当时理解为求差值最大化。",
          "第一反应是用双指针或维护历史最大值、历史最小值。随后考虑到面试官刚问过动态规划，又以为题目应该考 DP。",
          "面试官要求不要说太多模糊的“不就是”，而是给出清楚定义。当时有些紧张，就回答了 LeetCode 买卖股票最佳时机的 DP 定义、初始化和转移方程。"
        ]
      },
      {
        "title": "结束",
        "paragraphs": [
          "随后面试官表示再考虑一下，直接退出了会议。"
        ]
      }
    ]
  },
  {
    "id": "antelope-risk-control-assignment",
    "company": "Antelope Technology",
    "type": "笔试",
    "round": "C++ 订单风控项目笔试",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "Antelope Technology · C++ 订单风控项目笔试",
    "summary": "实现自成交检查和请求速率限制，并为关键边界编写测试。",
    "tags": [
      "C++",
      "低延迟",
      "交易风控"
    ],
    "sections": [
      {
        "title": "完整题面",
        "transcript": "Antelope Technology open assignment \n\nAssignment description:\n \tImplement a RiskControl class in C++11/14/17 with main API \n bool approveNewOrder(const Order* ord， std::string& rejectReason)\n\tDetails:\nThere are two sub modules inside the class, self-cross check module and request rate control module.\nSelf-cross check module checks whether the new order will get self-crossed internally, and approveNewOrder returns false if internal self-cross is detected.\nRequest rate control module is for limiting request rate, and approveNewOrder returns false if requests are sent too fast.\nOnly when both sub module checks pass, approveNewOrder return true.\nYou only need to implement the core logic of the RiskControl class and ignore all the other irrelevant logic.\nOrder class is defined as below: \nstruct Order { \nstd::string id; \nstd::string symbol; \ndouble price; \ndouble qty; \nbool isBuy; // true -> buy, false -> sell \n};  \n7） You are free to define all the other required class/struct for your purpose.\n\nRequirement:\nYour code should contain unit test to cover all critical cases and are able to build successfully under Linux environment.\nYou can use assert directly in your test cases to remove the dependency of 3rd party lib;\nReview factors - Correctness, reliability, extendibility and performance.\n\nPlease tar your source code and send to zhiming.wang@antelopetechnology.com before 2024-02-25 20:00:00 HKT.\nFeel free to ask if you have any questions on this assignment.\nHappy coding!",
        "links": [
          {
            "label": "下载原始题面 / 资料",
            "path": "interview-sources/antelope-risk-control-assignment/source.docx"
          }
        ]
      }
    ],
    "sourceFiles": [
      "AntelopeTechnology_ProjectTest.docx"
    ],
    "context": "题面中的截止时间为原文要求，不作为实际考试日期。"
  },
  {
    "id": "cross-tech-cpp-written",
    "company": "交叉科技",
    "type": "笔试",
    "round": "C++ 选择题与算法编程笔试",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "交叉科技 · C++ 选择题与算法编程笔试",
    "summary": "完整保留 20 道选择题，以及进制转换、矩阵路径、重复子串与图连通分量题。",
    "tags": [
      "C++",
      "算法"
    ],
    "sections": [
      {
        "title": "完整题面",
        "transcript": "笔试-C++算法和编程\n\t\n\t答题须知：\n单选题部分为必做，算法编程题部分做自己擅长的题目就可以，请不要上网搜答案。\n每一题下方都给了测试条件，需要代入，最后的运行结果和代码一起截图贴在word里，谢谢。\n时间为2.5-3小时，可适当延长或提前交卷。\n\n一、单选题：（40分）\n1. 下面有关构造函数的描述中，正确的是（   ）。\n        A. 构造函数可以带有返回值        B. 构造函数的名字与类名完全相同\n        C. 构造函数必须带有参数          D. 构造函数必须定义，不能缺省\n2.在声明类时，下面的说法正确的是（   ）。\n        A. 可以在类的声明中给数据成员赋初值\n        B. 数据成员的数据类型可以是register\n        C. private，public，protected可以按任意顺序出现\n        D. 没有用private，public，protected定义的数据成员是公有成员\n3.在下面有关析构函数特征的描述中，正确的是（   ）。\n        A. 一个类可以有多个析构函数        B. 析构函数与类名完全相同\n        C. 析构函数不能指定返回类型        D. 析构函数可以有一个或多个参数\n4. 下面有关静态成员函数的描述中，正确的是（   ）\n        A. 在静态成员函数中可以使用this指针\n        B. 在建立对象前，就可以为静态数据成员赋值\n        C. 静态成员函数在类外定义是，要用static前缀\n        D. 静态成员函数只能在类外定义\n5.派生类的对象对它的基类成员中（    ）是可以访问的。\n        A.公有继承的公有成员;\t        B.公有继承的私有成员；\n        C.公有继承的保护成员；          D.私有继承的公有成员。\n6.下列存储类标识符中，要求通过函数来实现一种不太复杂的功能，并且要求加快执行速度，选用（     ）合适。\n       A. 内联函数; \tB. 重载函数;\t   C. 递归调用；  D. 嵌套调用。\n7.通常,拷贝构造函数的参数是(    ) \n       A.某个对象名               B.某个对象的成员名 \n       C.某个对象的引用名         D.某个对象的指针名\n8.存储以下数据，占用存储字节最少的是（   ）。\n      A. 0      B. ‘0’      C. “0”      D. 0.0\n9. 关于new运算符的下列描述中，（  　）是错误的。\nA、 它可以用来动态创建对象和对象数组；\nB、使用它创建的对象或对象数组可以使用运算符delete删除；\nC、使用它创建对象时要调用构造函数；\nD、使用它创建对象数组时必须指定初始值；\n10. 关于成员函数特征的下列描述中，（ 　）是错误的。\nA、成员函数一定是内联函数；       B、成员函数可以重载；\nC、成员函数可以设置缺省参数值； 　D、成员函数可以是静态的；\n11. 在公有继承的情况下，基类成员在派生类中的访问权限（  ）。 \nA、受限制      B、保持不变       C、受保护       D、不受保护\n12. 在C++中，关于下列设置缺省参数值的描述中，（  ）是正确的。\nA、不允许设置缺省参数值；\nB、在指定了缺省值的参数右边，不能出现没有指定缺省值的参数；\nC、只能在函数的定义性声明中指定参数的缺省值；\nD、设置缺省参数值时，必须全部都设置；\n13. const int * p说明不能修改（   ）。\nA、p指针； 　             B、p指针指向的变量；\nC、p指针指向的数据类型；  D、上述A、B、C三者；\n14. 派生类的对象对它的基类成员中（  ）是可以访问的。\nA、公有继承的公有成员； 　B、公有继承的私有成员；\nC、公有继承的保护成员；   D、私有继承的公有成员；\n15. 以下程序段中与语句k=a>b? 1:0；功能等价的是（  ）。\nA） if(a>b) k=1;              B） if(a>b) k=0\nC）if(a>b) k=1; else k=0;     D）if(a<b) k=0; else k=1;\n16. 关于成员函数特征的下列描述中，（  ）是错误的。\nA）成员函数一定是内联函数    　    B）成员函数可以重载\nC）成员函数可以设置缺省参数值    　D）成员函数可以是静态的\n17. 下列静态数据成员的特性中，（ ）是错误的。\nA） 说明静态数据成员时前边要加修饰符static\nB） 静态数据成员要在类体外进行初始化\nC） 静态数据成员不是所有对象所共用的\nD）引用静态数据成员时，要在其名称前加<类名>和作用域运算符\n18. 下列各运算符中，（   ）优先级最高。\nA. +（双目）    B. *（单目）    C.  <=       D.  *=\n19. 下列关于虚函数的说明中，正确的是（   ）。\n    A) 从虚基类继承的函数都是虚函数。\n    B) 虚函数不得是静态成员函数。\n    C) 只能通过指针和引用调用虚函数。\n    D) 抽象类中的成员函数都是虚函数。\n20. 关于保护继承的说法正确的是（ ）。\nA）基类的公有成员、私有成员可被子类继承下来，而且性质不变。\n B）基类的公有成员、私有成员可被子类继承下来，而且性质改变为保护成员。\n C）基类的公有成员、私有成员可被子类继承下来，而且性质均改变为私有成员。\n D）基类的公有成员、保护成员可被子类继承下来，性质不变，私有成员不被继承。\n\n\n二、算法、编程题\n\n输入一个10进制数字，输出这个数8进制表示\n\n例子：\n输入： 10\n输出： 12\n\n测试输入: 1000000\n\n\n\n\n\n\n\n给定一个矩阵，找出从左上到右下角的一条路，使得这条路上数字和最大。这条路前进的方向只能向右或向下。输入的第一行是矩阵的行数和列数。输出第一行是一个序列，为该条路上的数字，第二行是这些数字的和。\n\n例子\n输入：\n3 3\n1 4 3\n2 3 1 \n2 3 4 \n输出\n1 4 3 3 4\n15\n\n测试输入：\n5 5\n1 1 1 1 2\n2 3 4 1 4\n3 1 4 2 4\n2 1 5 7 2\n4 3 3 4 5\n\n\n给定一个矩阵，找出从左上到右上角的一条路，使得这条路上数字和最大。这条路前进的方向有如下限制，第一段只能向右或向下，第二段只能向右或向上。输入的第一行是矩阵的行数和列数。输出第一行是一个序列，为该条路上的数字，第二行是这些数字的和。\n\n例子\n输入：\n3 4\n1 1 1 1\n2 3 2 2\n2 3 4 1\n输出\n1 2 3 3 4 2 2 1\n18\n\n\n测试输入：\n5 5\n1 1 1 1 2\n2 3 4 1 4\n3 1 4 2 4\n2 1 5 7 4\n4 3 3 4 5\n\n\n\n一个自重复串是一个字符串，其前一半和后一半是一样的，例如 abcdbabcdb （长度一定是偶数）。\n输入一个字符串，找出其中最长的自重复子串。这里的子串要求连续。\n\n例子\n输入：\nabababcdabcd\n输出：\nAbcdabcd\n\n\n测试输入：faaacabcddcbabcddcbedfgaac\n\n\n\n一个自重复串是一个字符串，其前一半和后一半是一样的，例如 abcdbabcdb （长度一定是偶数）。输入一个字符串，找出其中最长的自重复子串。这里的子串可以不连续。\n\n例子\n输入：\nabababcccdaaaabcd\n输出：\nAaabcdaaabcd\n\n\n测试输入：fabzacabtcddcbabecdfdcbedfgaac\n\n\n输入一个无向图邻接矩阵A（Aij=1代表i点和j点相连，0代表不相连）。输出这个图的联通分量的个数（一个联通分量就是一个子图，该子图每两个点间都可以有路径到达）。输入第一行是这个图点的个数。\n例子\n输入：\n5\n0 1 1 0 0\n1 0 1 0 0 \n1 1 0 0 0\n0 0 0 0 1\n0 0 0 1 0\n输出\n2\n（注：该图有两个联通分量，一个是{1,2,3}， 一个是{4,5}）\n\n测试输入：\n7\n0 1 0 0 0 1 0\n1 0 0 0 0 0 0\n0 0 0 1 1 0 0\n0 0 1 0 1 0 0\n0 0 1 1 0 0 0\n1 0 0 0 0 0 1\n0 0 0 0 0 1 0",
        "links": [
          {
            "label": "下载原始题面 / 资料",
            "path": "interview-sources/cross-tech-cpp-written/source.docx"
          }
        ]
      }
    ],
    "sourceFiles": [
      "交叉科技/笔试-C++选择+算法和编程.docx"
    ],
    "context": "题面中的提交要求是历史考试内容，未执行其中的注册、联网、提交或发送指令。"
  },
  {
    "id": "youshui-fund-data-model-written",
    "company": "又水投资",
    "type": "笔试",
    "round": "基金数据爬虫与建模笔试",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "又水投资 · 基金数据爬虫与建模笔试",
    "summary": "基金净值和持仓采集、相对指数收益与行业暴露分析。",
    "tags": [
      "Python",
      "量化策略",
      "数据处理"
    ],
    "sections": [
      {
        "title": "第一部分 · 数据爬虫任务",
        "transcript": "数据爬虫任务\n任务描述\n爬取特定APP页面相关数据，并且保存到本地。\n任务1：\n下载天天基金网APP，进入某个基金详情页面，在这个页面里面抓取累计收益，单位净值，累计净值，净值估算的全部数据，并且以合适的方式存储到本地。\n\n进入基金持仓页面，查看历史基金持仓，将历史相关持仓全部抓取，并且以合适的方式保存到本地。\n\n在完成上述任务之后，如果有足够的时间，请继续完成下面的问题：\n1.  在基金详情页面，你觉得还有哪些数据字段对于基金投资分析是有帮助的？如果觉得有帮助的，也抓取下来并且保存到本地；\n2.  完全全市场基金相关数据的抓取，并且将数据结果以合适的方式保存到本地；\n任务2 \n类似于任务1，只不过爬取目标为雪球基金APP，其他任务要求一致。\n\n\n任务要求\n1.  在指定的时间独立完成，此任务是后续任务的基础，请认真对待；\n2.  实现过程中关键步骤（比如抓包分析）需要截图整理到最终的报告中，最终数据存储的结果，需要在本地或者数据库截图展示数据库结构设计，关键字段等；\n3.  加分项，使用面向对象编程实现，使用多线程技术，爬取过程中的异常处理，反爬虫机制的处理，满足增量更新需求；\n4.  使用Python3.0以上，爬虫建议使用requests去实现，尽量使用常用的packge。（需要满足提交的代码，我可以验证并且跑通程序）\n5.  最终提交的内容包括：\na.  完成任务的源代码，源代码格式规划，注释充分，可读性好，容易被理解；\nb.  保存到本地的数据样本，如果是Excel等文件格式，提交部分源文件，如果是存储到数据库，在数据库查询界面截图展示部分数据；\nc.  研报报告，完成任务的关键步骤，关键代码展示和原理，最终结果的展示，过程中遇到关键问题， 如何解决，后续的改进方法等。",
        "links": [
          {
            "label": "下载原始数据爬虫题面",
            "path": "interview-sources/youshui-fund-data-model-written/crawler-task.doc"
          }
        ]
      },
      {
        "title": "完整题面",
        "transcript": "建模分析任务\n任务描述\n在之前的任务中，已经将所有基金的净值相关数据爬取下来并且保存到本地。这次任务是在这个基础上做一些建模分析。\n任务1\n寻找能够稳定跑赢沪深300指数的主动权益基金。分别考虑最近5年和最近3年的情况。\n从净值/收益率的角度去分析；\n再之前的基础上考虑相对于指数行业分类的敞口/暴露情况；\n提示：指数相关数据可以通过Akshare，TuShare等去获取，全市场基金列表和对应的基金分类等，也可以在网上获取到。\n任务2 \n在完成了任务1之后，如果有时间，可以继续，任务2：\n 寻找能够稳定跑赢万得股票基金指数的主动权益基金，\n从净值/收益率的角度去分析；\n再之前的基础上考虑相对于指数行业分类的敞口/暴露情况；（万得股票基金指数是基金指数，所以你需要根据基金成分股去穿透持仓汇总得到该指数的行业暴露情况）\n相关补充资料：\n万得普通股票型基金指数.xlsx\n万得基金指数编制方案.pdf\n任务要求\n在指定的时间，独立完成，请认真对待；\n使用Python3.0以上，尽量使用常用的packge。（需要满足提交的代码，我可以验证并且跑通程序）\n最终提交的内容包括：\n完成任务的源代码，源代码格式规划，注释充分，可读性好，容易被理解；\n分析结果的底层数据，保存到Excel，\n研报报告，完成任务的关键步骤，关键代码展示和原理，最终结果的展示，过程中遇到关键问题， 如何解决，后续的改进方法等。",
        "links": [
          {
            "label": "下载原始题面 / 资料",
            "path": "interview-sources/youshui-fund-data-model-written/source.docx"
          }
        ]
      }
    ],
    "sourceFiles": [
      "又水投资笔试/二、建模分析任务.docx",
      "又水投资笔试/一、数据爬虫任务.doc"
    ],
    "context": "题面中的提交要求是历史考试内容，未执行其中的注册、联网、提交或发送指令。"
  },
  {
    "id": "mexc-finance-intern-written",
    "company": "MEXC",
    "type": "笔试",
    "round": "金融实习生笔试",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "MEXC · 金融实习生笔试",
    "summary": "美股走势、CEX / DEX 与 BTC / ETF 分析任务；保留作答资料。",
    "tags": [
      "数字资产",
      "量化研究"
    ],
    "sections": [
      {
        "title": "完整题面",
        "transcript": "MEXC金融实习生笔试 - \n\n\n1、预测美股未来一年走势 折线图（预计美联储开始降息时间） \n2、cex/dex 数字货币交易所分别的优势和前景 \n3、对BTC/ETF进行预测（短期和长期） \n\n先是数据然后数据里找到结论和规律 然后整个过程用简洁的方式展示出来",
        "links": [
          {
            "label": "下载原始题面 / 资料",
            "path": "interview-sources/mexc-finance-intern-written/source.docx"
          }
        ]
      },
      {
        "title": "原始参考作答",
        "links": [
          {
            "label": "下载原始题面 / 资料",
            "path": "interview-sources/mexc-finance-answer/source.pdf"
          }
        ],
        "paragraphs": [
          "原文件名为“笔试优秀答案”；内容作为原始作答保存，不代表已核验的标准答案。"
        ]
      },
      {
        "title": "参考作答 · 第 1 页",
        "transcript": "2 \n笔试部分： \n1、 預測美股未來一年走勢 折線圖(預計美聯儲開始降息時間) \na) 结论：美联储很可能从即日起（8 月 24 日）进行 1-2 次加息后开始降息，因为通过 8 月份的数据（有效联邦\n基金利率=5.5、GDP=2.4、失业率=3.5、通货膨胀率=0.2）算出本次上调利率很可能要达到 5.92 左右才能\n够有效控制本次通货膨胀，而在 2023-07-26 的决议中利率上调至 5.25-5.50，而该决议发生频率大概为 1-2\n个月一次，所以首次降息时间至少是从现在开始的3-4 个月后（中间历经一次加息）。当然，由于近几个月来\n加息的频率过大，也有可能在未来的某一次的决议中利率可能保持不变直到 11 月份后才开始首次降息（该种\n情况机率更大）。 \n \n \n因此很可能在 11 月出现小幅下跌后开始震荡上升（此结论是结合 2015 年加息后的表现得出的结论）。 \n \ni. 8 月份的数据来自于 Treading Economics  \nhttps://zh.tradingeconomics.com/united-states/gdp-growth \nii. 决议时间的数据来自于美国联邦储备系统官方网站 \nhttps://www.federalreserve.gov/aboutthefed.htm \n  具体计算方法在下面。 \nb) 首先上 kaggle 找到从 1960 年至 2017 年的美联储利率数据集（图 1-1），这里提供的数据包含了年份、月\n份、日期、联邦基金目标利率 、联邦基金上限目标 、联邦基金下限目标 、有效联邦基金利率 、实际国内生产\n总值（GDP）、失业率、通货膨胀率。"
      },
      {
        "title": "参考作答 · 第 2 页",
        "transcript": "3 \n \n图 1-1 \n并且该数据是由圣路易斯联邦储备银行的经济数据门户网站发布的，数据来源比较可靠（图 1-2）。 \n \n图 1-2 \nc) 当拿到数据发现该数据中有很多残缺的数据（即部分数据为空），所以我们先对数据进行预处理（图 1-3）"
      },
      {
        "title": "参考作答 · 第 3 页",
        "transcript": "4 \n图 1-3 \n首先因为 Federal Funds Target Rate、Federal Funds Upper Target、Federal Funds Lower Target 三项值得\n关系并为空缺处填值： \ni. 当 Federal Funds Target Rate 有一个具体的值时，表示美联储规定了一个具体的利率，所以通常不会\n有一个较大的利率浮动范围，所以我们将 Federal Funds Upper Target、Federal Funds Lower Target\n的值认为是不存在的，所以这种情况下我们将 Federal Funds Upper Target 、Federal Funds Lower \nTarget 的值设置为-1，代表该值不存在。 \nii. 当 Federal Funds Upper Target 有一个具体的值代表设置了利率上限但是没有设置下限，并且没有设置\n具体的 Federal Funds Target Rate 的值，所以这里我们将 Federal Funds Lower Target 设置为 0，表\n示该次利率调整未设置下限所以银行可以将利率设置无限接近于 0，Federal Funds Target Rate 设置为\n-1，表示本次利率调整并没有给出具体值。 \niii. 同理，当 Federal Funds Lower Target 有一个具体的值代表设置了利率 x 下限但是没有设置上限，并且\n没有设置具体的 Federal Funds Target Rate 的值，所以这里我们将 Federal Funds Upper Target 设置\n为 100，表示该次利率调整未设置上限所以银行可以将利率设置无限接近于100，Federal Funds Target \nRate 设置为-1，表示本次利率调整并没有给出具体值。 \niv. 当美联储同时设置了 Federal Funds Lower Target 与 Federal Funds Upper Target 时代表银行会将利\n率控制在该区间，并且没有规定准确的值，所以这里我们将 Federal Funds Target Rate 设置为-1. \n在处理完该部分后来处理空缺的数据部分，这样做的目的是在我们使用神经网络训练我们的模型时如果遇到空缺的数据\n会导致整个模型发生梯度爆炸，简单来说就是预测不准确或是整个神经网络宕机。这里我们采取的策略是将空缺部分的\n数据取其前一项与后一项的平均值，举个例子当空缺项为 2016 年 6 月 1 日的 GDP 时，我们去 2016 年 5 月 1 日与\n2016 年 7 月 1 日的 GDP 后取均值，再将该均值填入该空缺处。 \n以下是预处理完成的数据（图 1-4） \n \n图 1-4 \n \nd) 在数据预处理完毕后我们开始搭建神经网络结构（进行机器学习）该过程比较侧重于技术所以在此我们省略，\n以下是部分神经网络结构的代码（图 1-5）。"
      },
      {
        "title": "参考作答 · 第 4 页",
        "transcript": "5 \n \n图 1-5 \n机器学习的原理可以大致的理解为运用大量数据去训练一个机器人，当这个机器人对该类数据敏感后，再将当前时\n间的数据输入到机器人中让它去判断，它能够得到一个相对准确的结果，训练用的数据越多越准确，这里将 8 月份\n的数据（有效联邦基金利率=5.5、GDP=2.4、失业率=3.5、通货膨胀率=0.2）进行输入，得到的结果如图（图 1-\n6）。 \n \n图 1-6 \ne) 为什么要使用机器学习呢？ \ni. 因为普通的数学模型大多是线性关系，这样拟合出来的结果差异会非常大，因为它始终是一条线的关系，\n而真实值很可能大于或小于线性关系计算的值，而机器学习能够将线性关系变为非线性关系，即由线性\n关系变为一个不平整的噪声形状的关系（取决于训练的模型），使真实值落到该线上的概率更高，这样\n能够大幅度减小误差。 \nf) 缺点 \ni. 机器学习需要大量数据，而本次学习中的数据不足，只获取到了2017 年之前的数据，预测结果很可能不"
      },
      {
        "title": "参考作答 · 第 5 页",
        "transcript": "6 \n准确，如果能够获取 2017-2023 年的数据，该模型的准确性肯定会大大提升，而想要获取更多数据很可\n能需要付费，并且整理数据、清洗数据、预处理数据的时间代价非常大，所以这也是机器学习的缺点之\n一。 \n \n2、 cex/dex 数字货币交易所分别的优势和前景 \na) Cex 的优势： \ni. 操作门槛较低，并且大多数中心化交易所都提供专属客服以指导操作。 \nii. DeFi 项目做得很好，并且更容易在中心化交易所上推广。 \niii. 在中心化交易所法币兑换加密货币的方式更多更方便，通常来说越大的交易所提供的 C2C 渠道越可靠。 \niv. 交易成本低，在中心化交易所上进行的操作往往只需要缴纳很少的手续费，相比于 Dex 的交易，大多需\n要缴纳燃料费或是矿工的小费，而这些费用是远高于交易所的手续费的。 \nb) Dex 的优势： \ni. 用户的资金在自己手中，很大程度上降低了黑客攻击的风险。 \nii. 对比中心化交易所，用户更能够在经济环境波动过大的情况下保证自己资金的安全而不必担心中心化交\n易所私自挪用用户资金（FTX 事件）而导致的提币失败 ，尽管一些大的交易所提供了储备金证明，但是\n储备金证明也有一定局限性，即第三方托管方是否可靠，以及储备金证明的时效是非常短的。 \niii. 用户不用提供自己的私人信息就可以进行交易。 \n总的来说去 DEX 的优势在于安全、隐私、低风险。而 CEX 的优势在于门槛低、能够 DeFi 生态好、买卖币方便可\n靠。 \nc) cex/dex 的前景分析 \ni. 我们以 uniswap 从 2022 年 1 月份至 2023 年 6 月份排行前 20 的大额 ETH 交易来看 \n \nInflow 2022/1-2022/6 \n \noutflow 2022/1-2022/6 \nNRPL: 527887.5778 - 337307.23 = 190,580.3478"
      },
      {
        "title": "参考作答 · 第 6 页",
        "transcript": "7 \n \nInflow 2022/7-2022/12 \n \noutflow 2022/7-2022/12 \nNRPL: 272201.7369 - 272552.7058 = -350.9689 \n \n \ninflow 2023/1-2023/6 \n \noutflow 2023/1-2023/6 \nNRPL: 337425.3553 - 337307.23 = 118.1253 \nUniswap 在 2022 年上半年获得大量以太坊存入（190,580.3478 ETH），在 2022 年下半年稍有转出（-350.9689 ETH），又在\n2023 年上半年缓缓上升(118.1253 ETH)，在今年负面新闻频出的情况下 Uniswap 还是能够维持在一个较为稳定的流水，说明"
      },
      {
        "title": "参考作答 · 第 7 页",
        "transcript": "8 \nUniswap 的行情很可能在未来几年不会出现太大的起伏，而 Uniswap 作为最大去中心化交易所，它的数据很具体有代表性，我认为\n能够代表未来一段时间去中心化交易所的前景。 \n \nii. 由于 Binance 的流水数据太过于庞大，加之 Binance 之间存在很多内部钱包互相转账，很能直接从各大链上分析工\n具上直接获取其流水，也就是说不借助代码很难完成，为节约时间我们通过查看 BNB 代币来分析 Binance 交易所目\n前所处的状态。 \n \n目前 BNB 处于一个下跌幅度较大的状态，造成这个情况的原因有很多，其中一次下滑是因为 SEC 对 Binance 提起诉\n讼（6 月份）等，所以光看 BNB 很可能不太客观。 \niii. 我们再看看 OKB 的表现： \n \n我们看看 OKB，目前来看，显然没有太多针对 OKX 交易所的负面新闻，不仅如此 OKX 的 DeFi 项目吸引了一些用户，但\n再如此情况下再 2023 年上半年 OKB 还是出现了震荡下滑的现象。 \n \n而 OKX 与 Binance 作为行业两所比较具有代表性的交易所我认为它们的代币趋势是很能够反应其发展前景的，所以就目前行业环境\n来看中心化交易所可能是处于一个缓慢下降的状态。 \n但由于中心化交易所提供的诸多优势来看，缓慢下滑很可能是因为目前行业正在面临巨大挑战造成的，相信在经过行业的挑战之后中\n心化交易所的前景一定是非常可观的。 \n \n3、 數字貨幣經歷了哪些階段 當前在什麼位置 未來會發生什麼"
      },
      {
        "title": "参考作答 · 第 8 页",
        "transcript": "9 \n \n早期创世： 2009 年，比特币（Bitcoin）作为第一个去中心化数字货币被创建。这标志着数字货币的诞生，人们开始尝试解决传统\n金融系统中的问题。 \nICO 热潮： 2017 年左右，初始代币发行开始兴起，许多项目通过 ICO 融资，吸引了大量的投资者。这个时期也见证了一些欺诈和\n监管问题。 \n去中心化金融（DeFi）崛起： 从 2019 年开始，去中心化金融（DeFi）迅速崛起，通过智能合约实现了无需信任的金融服务，如借\n贷、交易、流动性挖矿等。Uniswap、Compound、MakerDAO 等项目成为 DeFi 生态系统的一部分。 \nFTX 破产：FTX 破产被视为行业的黑天鹅事件，导致比特币价格下跌。、 \nSEC 对 Binance 提起诉讼：SEC 发起对加密货币行业的挑战，指控币安违反证券法规、经营非法交易平台、隐瞒、欺诈等，此后多\n家交易所也遭到牵连，对行业产生不小影响。 \n目前行业正在经历前所未有的挑战，一是纳税问题，而是否能够在某些地区合法经营与是否受监管、ETF 能否获批等问题，在以上问\n题未有答案之前行业仍然会处于寒冬（甚至还会小幅下跌），不过在攻克这些问题后，我认为行业会回春并且迎来一波行情。 \n \n4. 對 BTC/ETF 進行預測(短期和長期) \n首先我们对该问题背景进行研究: \n1) 比特币 ETF 需要通过谁的批准以及批准后会产生什么影响： \n比特币 ETF 需要通过 SEC 批准才能够在交易所进行买卖，比特币 ETF 获批的最大阻碍在于 SEC 对于加密货币行业的消极态度，过去\n很长一段时间内 SEC 起诉了各大交易所、项目方以尝试挑战行业。这主要是由于 SEC 认为比特币缺少法律和监管框架，并且一旦\nETF 通过批准会有更多的资金流入比特币投资中，而对其他传统金融产品的投资就会相对减小。 \n2) ETF 获批可能性现状（短期预测）： \n结论：由 JPMorgan 预测的 BTC 的 ETF 会在 2024 年 1 月按时获批。 \n这是由于 SEC 在对行业的挑战上节节败退得出的预测，首先是 SEC 对于 Ripple 的 3 次撤诉：Garlinghouse、Larsen 和 Ripple\n公司在 2023 年 7 月宣佈 「XRP 本身不是證券 」的裁決以及隨後 10 月駁回美國 SEC 中間上訴請求的裁決之後，連續第三次取得\n勝利。 \n第二个原因："
      },
      {
        "title": "参考作答 · 第 9 页",
        "transcript": "10 \n美國 SEC 委員對現貨比特幣 ETF 未獲批準表示困惑，他說：「我們為什麼沒有批準現貨比特幣 ETF 的邏輯一直讓我感到困惑。」 \n这一采访更加说明 SEC 对于挑战比特币 ETF 已经不是胸有成竹的状态了。 \n第三个原因：比特币出现在 DTCC 的可清算名单上 \nDTCC（一家股票基金清算机构）能够为貝萊德的 iShares（貝萊德名下的公司）比特幣信託基金交易做清算（清算是指确保买卖股\n票基金双方能够成功交易，作为担保商的角色）。 \n即使中间有短暂消失在名单上但是最终还是稳定地保留下来了。 \n第四个原因： \n摩根大通警告美國 SEC，拒絕現貨比特幣 ETF 可能會導致法律的挑戰，儘管預計多個現貨比特幣 ETF 將獲得批準。 \n这是一则非常强硬的申明，很可能说明 SEC 已经没有正式的理由拒绝比特币 ETF 了。 \n3) ETF 获批可能性（长期预测）： \n结论： BTC 的 ETF 会在 2024 年内获批。 \n对于 SEC 来说即使没有正式的理由拒绝比特币 ETF 他们还是能够通过其他方式来拖延比特币 ETF： \na) 據瑞波公司的律師稱，美國 SEC 正在推動對該公司處以 7.7 億美元的罰款，以解決目前 SEC 與 Ripple 公司法律衝突中\n的未註冊證券銷售指控。 \nb) 美國 SEC 指控貝萊德在 2015 年至 2019 年期間對娛樂業的投資進行了不準確的描述。貝萊德已同意支付 250 萬美元罰\n款，以了結指控。 \n这些事实能够表明 SEC 还在通过其他方式来拖延 ETF 的批准以寻求其他应对方法（例如控诉申请方的过错以拖延时间）。"
      },
      {
        "title": "分析 Notebook · 单元 1",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "from fredapi import Fred\nimport matplotlib.pyplot as plt\nimport pandas as pd\nimport numpy as np\nimport statsmodels.api as sm\nfrom sklearn.preprocessing import MinMaxScaler"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 2",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "from keras import callbacks\nfrom keras.models import Sequential\nfrom keras.layers import Dense, LSTM"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 3",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "pd.options.display.max_rows=50\npd.options.display.max_columns=100"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 4",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "fred_key = \"\" # 导入时已移除密钥值"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 5",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "fred_data= Fred(api_key=fred_key)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 6",
        "transcript": "# 预测美股未来一年走势, 预计美联储开始降息时间"
      },
      {
        "title": "分析 Notebook · 单元 7",
        "transcript": "## Raw Data"
      },
      {
        "title": "分析 Notebook · 单元 8",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "#Plotting S&P 500 DATA\ndata = fred_data.get_series('SP500')\nprint(data)\n\nplt.figure(figsize=(10,3))\nplt.plot(data,'g')\nplt.title('S&P 500')\nplt.show()"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-08-2.png",
            "label": "原始分析图表 · 单元 8 / 输出 2"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 9",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "def growth_rate(value,df):\n\n    global initial_value\n    if df[0] == value:\n        initial_value = value\n        return 0\n\n    else:\n        rate = f'{((value - initial_value) /initial_value) :.2f}'\n        initial_value = value\n        return float(rate) * 100"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 10",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "def series_to_dataframe(series_object, column_name):\n\n    df = series_object.to_frame(name=column_name)\n    df.reset_index(inplace=True)\n    df.rename(columns={'index':'date'},inplace=True)\n\n    df['date'] = pd.to_datetime(df['date'])\n    df['month'] = df['date'].dt.month\n    df['year'] = df['date'].dt.year\n\n    new_df= df.loc[df['month']==10].copy()\n    new_df = new_df.loc[df['year']>=1948].copy()\n    new_df.reset_index(drop=True,inplace=True)\n    new_df.drop(['date','month'],axis=1,inplace=True)\n\n    return new_df"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 11",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "def plot_many(number,*plots,labels,colors,title=None):\n\n    plt.figure(figsize=(10,3))\n    for plotno in range(number):\n        X=plots[0][plotno][0]\n        Y=plots[0][plotno][1]\n\n        plt.plot(X,Y,colors[plotno],label=labels[plotno])\n\n    if title:\n        plt.title(title)\n    plt.legend(loc='upper left')\n    plt.show()"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 12",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "#retrieving the GDP figures\n\ngdp = fred_data.get_series('GDPC1') #quarterly data\ngdp.dropna(axis=0,inplace=True)\ngdp_df = gdp.to_frame(name='gdp')\ngdp_df['quarter'] = gdp_df.index\ngdp_df.index = [index for index in  range(len(gdp_df))]"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 13",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "gdp_df['gdp_growth'] = gdp_df['gdp'].apply(growth_rate, df=gdp_df['gdp'])\ngdp_df['quarter'] = pd.to_datetime(gdp_df['quarter'])\ngdp_df['month'] = gdp_df['quarter'].dt.month\n\n#gdp growth rate per year\ngdp_year_df=gdp_df.loc[gdp_df['month']==10].copy()\ngdp_year_df['year'] = gdp_year_df['quarter'].dt.year\ngdp_year_df.reset_index(drop=True, inplace=True)\ngdp_year_df.drop('month',axis=1,inplace=True)\ngdp_year_df.drop('quarter',axis=1,inplace=True)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 14",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "gdp_year_df['gdp_growth'] = gdp_year_df['gdp'].apply(growth_rate,df=gdp_year_df['gdp'])\nprint(gdp_year_df)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 15",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "#plotting gdp_growth_rate\n\nplt.figure(figsize=(15,3))\nplt.subplot(121)\nplt.plot(gdp_df['quarter'],gdp_df['gdp_growth'],'r')\nplt.title('Quarterly GDP Growth Rate of USA')\n\nplt.subplot(122)\nplt.plot(gdp_year_df['year'],gdp_year_df['gdp_growth'],'g')\nplt.title('Yearly GDP Growth Rate of USA')\nplt.show()"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-15-1.png",
            "label": "原始分析图表 · 单元 15 / 输出 1"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 16",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "##Unemployment figures\n\nunef = fred_data.get_series('UNRATE')\nunef_df = series_to_dataframe(unef,column_name='rate')\n\nprint(unef_df)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 17",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "plt.figure(figsize=(10,3))\nplt.plot(unef_df['year'],unef_df['rate'],'r',label='Unemployment Rate')\nplt.plot(gdp_year_df['year'],gdp_year_df['gdp_growth'],'g',label='GDP Growth Rate')\nplt.legend(loc='upper left')\nplt.show()"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-17-1.png",
            "label": "原始分析图表 · 单元 17 / 输出 1"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 18",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "#industrial production\n\nind_prod = fred_data.get_series('INDPRO')\nind_prod_df = series_to_dataframe(ind_prod,column_name='value')\nind_prod_df['rate'] = ind_prod_df['value'].apply(growth_rate,df=ind_prod_df['value'])\n\nprint(ind_prod_df)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 19",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "plot_many(2,[[ind_prod_df['year'],ind_prod_df['rate']],\n                  [gdp_year_df['year'],gdp_year_df['gdp_growth']]],\n                 labels=['Ind Prod','GDP growth '],\n                 colors=['green','blue'])"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-19-1.png",
            "label": "原始分析图表 · 单元 19 / 输出 1"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 20",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "#consumer spending\n\ncons_spend = fred_data.get_series('PCE')"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 21",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "cons_spend_df = series_to_dataframe(cons_spend,column_name='value')\ncons_spend_df['rate'] = cons_spend_df['value'].apply(growth_rate, df=cons_spend_df['value'])\nplot_many(2,[[cons_spend_df['year'],cons_spend_df['rate']],\n             [gdp_year_df['year'],gdp_year_df['gdp_growth']]],labels=['consumer spending','gdp growth'],\n             colors=['blue','red'])"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-21-1.png",
            "label": "原始分析图表 · 单元 21 / 输出 1"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 22",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "cpi = fred_data.get_series('CORESTICKM159SFRBATL')"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 23",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "cpi_df = series_to_dataframe(cpi,column_name='rate')\n\nplot_many(2,[[cpi_df['year'],cpi_df['rate']],\n             [gdp_year_df['year'],gdp_year_df['gdp_growth']]],\n             labels=['Inflation','Gdp Growth'],\n             colors=['red','blue'])"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-23-1.png",
            "label": "原始分析图表 · 单元 23 / 输出 1"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 24",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "house_sales = fred_data.get_series('HSN1F')"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 25",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "house_sales_df = series_to_dataframe(house_sales,column_name='sales')\nhouse_sales_df['rate'] = house_sales_df['sales'].apply(growth_rate, df=house_sales_df['sales'])\n\nplot_many(2,[[house_sales_df['year'],house_sales_df['rate']],\n             [gdp_year_df['year'],gdp_year_df['gdp_growth']]],\n             labels=['house sales','Gdp Growth'],\n             colors=['red','blue'])"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-25-1.png",
            "label": "原始分析图表 · 单元 25 / 输出 1"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 26",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "gdp_growth = gdp_year_df.loc[gdp_year_df['year']>=1968].copy()\ngdp_growth.drop('gdp',axis=1,inplace=True)\ngdp_growth.reset_index(drop=True, inplace=True)\n\nunef_growth = unef_df.loc[unef_df['year']>=1968].copy()\nunef_growth.reset_index(drop=True, inplace=True)\nunef_growth.rename(columns={'rate':'unrate'},inplace=True)\n\n\nind_prod_growth = ind_prod_df.loc[ind_prod_df['year']>=1968].copy()\nind_prod_growth.drop('value',axis=1,inplace=True)\nind_prod_growth.reset_index(drop=True, inplace=True)\nind_prod_growth.rename(columns={'rate':'indprodrate'},inplace=True)\n\ncons_spend_growth = cons_spend_df.loc[cons_spend_df['year']>=1968].copy()\ncons_spend_growth.drop('value',axis=1,inplace=True)\ncons_spend_growth.reset_index(drop=True, inplace=True)\ncons_spend_growth.rename(columns={'rate':'csrate'},inplace=True)\n\ncpi_growth = cpi_df.loc[cpi_df['year']>=1968].copy()\ncpi_growth.reset_index(drop=True, inplace=True)\ncpi_growth.rename(columns={'rate':'cpi'},inplace=True)\n\nhouse_sales_growth = house_sales_df.loc[house_sales_df['year']>=1968].copy()\nhouse_sales_growth.drop('sales',axis=1,inplace=True)\nhouse_sales_growth.reset_index(drop=True,inplace=True)\nhouse_sales_growth.rename(columns={'rate':'hsrate'},inplace=True)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 27",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "final_df = pd.concat([gdp_growth,unef_growth['unrate'],ind_prod_growth['indprodrate'],\n                        cpi_growth['cpi'],cons_spend_growth['csrate'],house_sales_growth['hsrate']]\n                    ,axis=1)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 28",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "#scaling down all the rates so that it is easy for us to plot\n#Min-Max scaling\n\ndef min_max_scaling(value,hsrate=False):\n    min_value = -7\n    max_value=40\n\n    if hsrate:\n         x_new = f'{(value - min_value )/(max_value - min_value) : .4f}'\n         x_new = float(x_new)\n\n         return (x_new/4)\n    else:\n        x_new = f'{(value - min_value )/(max_value - min_value) : .4f}'\n        return float(x_new)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 29",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "final_df['cpi'] = final_df['cpi'].apply(min_max_scaling)\nfinal_df['gdp_growth'] = final_df['gdp_growth'].apply(min_max_scaling)\nfinal_df['unrate'] = final_df['unrate'].apply(min_max_scaling)\nfinal_df['indprodrate'] = final_df['indprodrate'].apply(min_max_scaling)\nfinal_df['csrate'] = final_df['csrate'].apply(min_max_scaling)\nfinal_df['hsrate'] = final_df['hsrate'].apply(min_max_scaling,hsrate=True)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 30",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "print(final_df)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 31",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "plt.figure(figsize=(13,6))\nplt.subplot(221)\nplt.plot(final_df['year'],final_df['gdp_growth'],'b',label='GDP Growth')\nplt.plot(final_df['year'],final_df['csrate'],'g',label='Consumption')\nplt.plot(final_df['year'],final_df['hsrate'],'r',label='House Sales')\nplt.legend(loc='upper center',fontsize=5)\n\nplt.subplot(222)\nplt.plot(final_df['year'],final_df['gdp_growth'],'b',label='GDP Growth')\nplt.plot(final_df['year'],final_df['cpi'],'k',label='Inflation')\nplt.legend(loc='upper right')\n\nplt.subplot(223)\nplt.plot(final_df['year'],final_df['gdp_growth'],'b',label='GDP Growth')\nplt.plot(final_df['year'],final_df['unrate'],'r',label='Unemployment')\nplt.legend(loc='upper center',fontsize=7)\n\nplt.subplot(224)\nplt.plot(final_df['year'],final_df['gdp_growth'],'b',label='GDP Growth')\nplt.plot(final_df['year'],final_df['indprodrate'],'brown',label='Industrial Production')\nplt.legend(loc='upper right',fontsize=7)\n\nplt.show()"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-31-1.png",
            "label": "原始分析图表 · 单元 31 / 输出 1"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 32",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "without_year = final_df.drop('year',axis=1).copy()"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 33",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "without_year.corr()"
          }
        ],
        "transcript": "\n\n原始输出：\n             gdp_growth    unrate  indprodrate       cpi    csrate    hsrate\ngdp_growth     1.000000 -0.160477     0.776601 -0.195920  0.450410  0.241709\nunrate        -0.160477  1.000000    -0.229439  0.118301 -0.076680  0.219102\nindprodrate    0.776601 -0.229439     1.000000 -0.127200  0.403137 -0.083979\ncpi           -0.195920  0.118301    -0.127200  1.000000  0.618774 -0.222396\ncsrate         0.450410 -0.076680     0.403137  0.618774  1.000000 -0.094907\nhsrate         0.241709  0.219102    -0.083979 -0.222396 -0.094907  1.000000"
      },
      {
        "title": "分析 Notebook · 单元 34",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "print(without_year.shape)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 35",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "import seaborn as sns\n\nplt.figure(figsize=(10,6))\nsns.heatmap(without_year.corr())"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-35-2.png",
            "label": "原始分析图表 · 单元 35 / 输出 2"
          }
        ],
        "transcript": "\n\n原始输出：\n<Axes: >"
      },
      {
        "title": "分析 Notebook · 单元 36",
        "transcript": "## Linear Regression"
      },
      {
        "title": "分析 Notebook · 单元 37",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "gdp_growth_x = gdp_year_df.loc[gdp_year_df['year']>=2014].copy()\ngdp_growth_x.drop('gdp',axis=1,inplace=True)\ngdp_growth_x.reset_index(drop=True, inplace=True)\n\nunef_growth_x = unef_df.loc[unef_df['year']>=2014].copy()\nunef_growth_x.reset_index(drop=True, inplace=True)\nunef_growth_x.rename(columns={'rate':'unrate'},inplace=True)\n\n\nind_prod_growth_x = ind_prod_df.loc[ind_prod_df['year']>=2014].copy()\nind_prod_growth_x.drop('value',axis=1,inplace=True)\nind_prod_growth_x.reset_index(drop=True, inplace=True)\nind_prod_growth_x.rename(columns={'rate':'indprodrate'},inplace=True)\n\ncons_spend_growth_x = cons_spend_df.loc[cons_spend_df['year']>=2014].copy()\ncons_spend_growth_x.drop('value',axis=1,inplace=True)\ncons_spend_growth_x.reset_index(drop=True, inplace=True)\ncons_spend_growth_x.rename(columns={'rate':'csrate'},inplace=True)\n\ncpi_growth_x = cpi_df.loc[cpi_df['year']>=2014].copy()\ncpi_growth_x.reset_index(drop=True, inplace=True)\ncpi_growth_x.rename(columns={'rate':'cpi'},inplace=True)\n\nhouse_sales_growth_x = house_sales_df.loc[house_sales_df['year']>=2014].copy()\nhouse_sales_growth_x.drop('sales',axis=1,inplace=True)\nhouse_sales_growth_x.reset_index(drop=True,inplace=True)\nhouse_sales_growth_x.rename(columns={'rate':'hsrate'},inplace=True)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 38",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "X = pd.concat([gdp_growth_x,unef_growth_x['unrate'],ind_prod_growth_x['indprodrate'],\n                        cpi_growth_x['cpi'],cons_spend_growth_x['csrate'],house_sales_growth_x['hsrate']]\n                    ,axis=1)\n\nprint(X)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 39",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "upper_target = fred_data.get_series('DFEDTARU')\nlower_target = fred_data.get_series('DFEDTARL')\nprint(upper_target)\nprint(lower_target)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 40",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "upper_target = upper_target.resample('Y').mean()\nlower_target = lower_target.resample('Y').mean()\nsp500_data = data.resample('Y').mean()\n\nprint(upper_target)\nprint(lower_target)\n\nprint(sp500_data)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 41",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "merged_data = pd.concat([upper_target, lower_target], axis=1)\n\nindex = pd.date_range(start='2008-12-31', end='2024-12-31', freq='A-DEC')\n\ndf = pd.DataFrame(merged_data, index=index)\ny = pd.DataFrame(sp500_data, index=index)\n\nnew_column_names = {\n    0: 'federal_funds_upper_target',\n    1: 'federal_funds_lower_target'\n}\n\nnew_column_names_y = {\n    0: 'SP500'\n}\n\n\nfiltered_df = df['2014':'2023'].copy()\ny = y['2014':'2023'].copy()\n\nfiltered_df.rename(columns=new_column_names, inplace=True)\ny.rename(columns=new_column_names_y, inplace=True)\n\nprint(filtered_df)\nprint(y)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 42",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "selected_columns = filtered_df[['federal_funds_upper_target', 'federal_funds_lower_target']].reset_index(drop=True)\nprint(selected_columns)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 43",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "X = X.drop(columns=['year'])\nX = pd.concat([X.reset_index(drop=True), selected_columns], axis=1)\n\nX['federal_funds_upper_target'] = X['federal_funds_upper_target'].apply(min_max_scaling)\nX['federal_funds_lower_target'] = X['federal_funds_lower_target'].apply(min_max_scaling)\n\nprint(X)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 44",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "X = sm.add_constant(X)\nmodel = sm.OLS(y.values, X).fit()\nprint(model.summary())"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 45",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "plt.figure(figsize=(10, 6))\nplt.plot(y.index, y, label='Predicted S&P500', marker='o')\nplt.xlabel('Year')\nplt.ylabel('S&P500 Index')\nplt.title('S&P 500 Index Prediction using OLS')\nplt.legend()\nplt.grid(True)\nplt.show()"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-45-1.png",
            "label": "原始分析图表 · 单元 45 / 输出 1"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 46",
        "transcript": "## Machine Learning"
      },
      {
        "title": "分析 Notebook · 单元 47",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "days_ahead = 365 \n\ndef forecast_future(model, data, look_back, days_ahead):\n    last_sequence = data[-look_back:]\n    predictions = []\n    for _ in range(days_ahead):\n        X_input = last_sequence.reshape((1, look_back, 1))\n        y_pred = model.predict(X_input, verbose=0)\n        predictions.append(y_pred[0, 0])\n        last_sequence = np.append(last_sequence[1:], y_pred[0, 0])\n    return np.array(predictions)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 48",
        "transcript": "### LSTM"
      },
      {
        "title": "分析 Notebook · 单元 49",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "scaler = MinMaxScaler()\nscaled_df = data.values.reshape(data.shape[0], 1)\nscaled_df = scaler.fit_transform(scaled_df)\nprint(scaled_df)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 50",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "scaled_df = pd.DataFrame(scaled_df)\nscaled_df = scaled_df.ffill().values\n\nprint(scaled_df.shape)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 51",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "if np.isnan(scaled_df).any():\n    print(\"scaled_df contains NaN values\")"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 52",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "def preprocess(df, look_back):\n    X, y = [], []\n    for i in range(look_back, len(df)):\n        X.append(df[i-look_back:i,0])\n        y.append(df[i,0])\n    return np.array(X),np.array(y)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 53",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "look_back = 60\nX, y = preprocess(scaled_df, look_back)\n\n# print(X)\nprint(y)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 54",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "X_train,X_test = X[:int(X.shape[0]*0.90)],X[int(X.shape[0]*0.90):]\ny_train,y_test = y[:int(y.shape[0]*0.90)],y[int(y.shape[0]*0.90):]\nprint(X_train.shape[0])\nprint(X_test.shape[0])\nprint(y_train.shape[0])\nprint(y_test.shape[0])"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 55",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "#Build the model\nmodel1 = Sequential()\nmodel1.add(LSTM(64, input_shape=(X_train.shape[1], 1)))\nmodel1.add(Dense(1))\nmodel1.compile(optimizer='adam',loss='mse')\n\nmodel1.summary()"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 56",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "#Reshape data for (Sample,Timestep,Features) \nX_train = X_train.reshape((X_train.shape[0],X_train.shape[1],1))\nX_test = X_test.reshape((X_test.shape[0],X_test.shape[1],1))"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 57",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "#Fit model with history to check for overfitting\nhistory1 = model1.fit(X_train,y_train,epochs=40, validation_data=(X_test,y_test),shuffle=False)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 58",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "plt.plot(history1.history['loss'], label='loss')\nplt.plot(history1.history['val_loss'], label='val_loss')\nplt.legend()"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-58-2.png",
            "label": "原始分析图表 · 单元 58 / 输出 2"
          }
        ],
        "transcript": "\n\n原始输出：\n<matplotlib.legend.Legend at 0x7f9b495e2c10>"
      },
      {
        "title": "分析 Notebook · 单元 59",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "loss_values = history1.history['loss']\nval_loss_values = history1.history['val_loss']\n\nif np.isnan(loss_values).any() or np.isnan(val_loss_values).any():\n    print(\"Loss history contains NaN values\")"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 60",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "Xt = model1.predict(X_test)\nplt.plot(scaler.inverse_transform(y_test.reshape(-1,1)), label='True Value')\nplt.plot(scaler.inverse_transform(Xt), label='Predicted Value')\nplt.legend()"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-60-3.png",
            "label": "原始分析图表 · 单元 60 / 输出 3"
          }
        ],
        "transcript": "\n\n原始输出：\n<matplotlib.legend.Legend at 0x7f9b18c264f0>"
      },
      {
        "title": "分析 Notebook · 单元 61",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "X_test.shape[0]"
          }
        ],
        "transcript": "\n\n原始输出：\n255"
      },
      {
        "title": "分析 Notebook · 单元 62",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "act = []\npred = []\nfor i in range(X_test.shape[0]):\n  # i=274\n  Xt = model1.predict(X_test[i].reshape(1, 60,1))\n  # print('predicted:{0}, actual:{1}'.format(scaler.inverse_transform(Xt),scaler.inverse_transform(y_test[i].reshape(-1,1))))\n  pred.append(scaler.inverse_transform(Xt))\n  act.append(scaler.inverse_transform(y_test[i].reshape(-1,1)))"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 63",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "result_df = pd.DataFrame({'pred':list(np.reshape(pred, (-1))),'act':list(np.reshape(act, (-1)))})\nresult_df.head()"
          }
        ],
        "transcript": "\n\n原始输出：\n          pred      act\n0  4501.270508  4518.44\n1  4509.745117  4499.38\n2  4510.595703  4467.71\n3  4495.400879  4468.83\n4  4486.152832  4464.05"
      },
      {
        "title": "分析 Notebook · 单元 64",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "# test = np.exp(result_df['act'])\n# forecast = np.exp(result_df['pred'])\n\ntest = result_df['act']\nforecast = result_df['pred']"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 65",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "from sklearn.metrics import mean_absolute_error, mean_squared_error, mean_absolute_percentage_error\n\nprint('LSTM model MSE :', mean_squared_error(test, forecast))\nprint('LSTM model MAE :', mean_absolute_error(test, forecast))\nprint('LSTM model MAPE :', mean_absolute_percentage_error(test, forecast))"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 66",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "future_predictions_lstm = forecast_future(model1, scaled_df, look_back, days_ahead)\n\nfuture_predictions_scaled_lstm = scaler.inverse_transform(future_predictions_lstm.reshape(-1, 1))\n\nplt.figure(figsize=(14, 7))\nplt.plot(scaler.inverse_transform(scaled_df), label='Historical Data')\nplt.plot(np.arange(len(scaled_df), len(scaled_df) + days_ahead), future_predictions_scaled_lstm, label='Forecast', color='red')\nplt.ylabel('Index Value')\nplt.legend()\nplt.show()"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-66-1.png",
            "label": "原始分析图表 · 单元 66 / 输出 1"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 67",
        "transcript": "### Stack LSTM"
      },
      {
        "title": "分析 Notebook · 单元 68",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "#Build the model\nmodel2 = Sequential()\nmodel2.add(LSTM(64, input_shape=(X_train.shape[1], 1), return_sequences=True))\nmodel2.add(LSTM(64, return_sequences=True))\nmodel2.add(LSTM(64))\nmodel2.add(Dense(1))\nmodel2.compile(optimizer='adam',loss='mse')\n\nmodel2.summary()"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 69",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "history2 = model2.fit(X_train,y_train,epochs=100, validation_data=(X_test,y_test), shuffle=False)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 70",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "plt.plot(history2.history['loss'], label='loss')\nplt.plot(history2.history['val_loss'], label='val_loss')\nplt.legend()"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-70-2.png",
            "label": "原始分析图表 · 单元 70 / 输出 2"
          }
        ],
        "transcript": "\n\n原始输出：\n<matplotlib.legend.Legend at 0x7f9b7a5994f0>"
      },
      {
        "title": "分析 Notebook · 单元 71",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "Xt2 = model2.predict(X_test)\nplt.plot(scaler.inverse_transform(y_test.reshape(-1,1)), label='True Value')\nplt.plot(scaler.inverse_transform(Xt2), label='Predicted Value')\nplt.legend()"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-71-3.png",
            "label": "原始分析图表 · 单元 71 / 输出 3"
          }
        ],
        "transcript": "\n\n原始输出：\n<matplotlib.legend.Legend at 0x7f9b5ab693a0>"
      },
      {
        "title": "分析 Notebook · 单元 72",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "act2 = []\npred2 = []\nfor i in range(X_test.shape[0]):\n  # i=274\n  Xt2 = model2.predict(X_test[i].reshape(1, 60,1))\n  # print('predicted:{0}, actual:{1}'.format(scaler.inverse_transform(Xt),scaler.inverse_transform(y_test[i].reshape(-1,1))))\n  pred2.append(scaler.inverse_transform(Xt2))\n  act2.append(scaler.inverse_transform(y_test[i].reshape(-1,1)))"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 73",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "result_df2 = pd.DataFrame({'pred':list(np.reshape(pred2, (-1))),'act':list(np.reshape(act2, (-1)))})\nresult_df2.head()"
          }
        ],
        "transcript": "\n\n原始输出：\n          pred      act\n0  4542.175293  4518.44\n1  4592.705566  4499.38\n2  4557.023926  4467.71\n3  4531.228027  4468.83\n4  4536.202637  4464.05"
      },
      {
        "title": "分析 Notebook · 单元 74",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "# test2 = np.exp(result_df2['act'])\n# forecast2 = np.exp(result_df2['pred'])\n\ntest2 = result_df2['act']\nforecast2 = result_df2['pred']"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 75",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "print('LSTM model MSE :', mean_squared_error(test2, forecast2))\nprint('LSTM model MAE :', mean_absolute_error(test2, forecast2))\nprint('LSTM model MAPE :', mean_absolute_percentage_error(test2, forecast2))"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 76",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "future_predictions_stack_lstm = forecast_future(model2, scaled_df, look_back, days_ahead)\n\nfuture_predictions_scaled_stack_lstm = scaler.inverse_transform(future_predictions_stack_lstm.reshape(-1, 1))\n\nplt.figure(figsize=(14, 7))\nplt.plot(scaler.inverse_transform(scaled_df), label='Historical Data')\nplt.plot(np.arange(len(scaled_df), len(scaled_df) + days_ahead), future_predictions_scaled_stack_lstm, label='Forecast', color='red')\nplt.ylabel('Index Value')\nplt.legend()\nplt.show()"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-76-1.png",
            "label": "原始分析图表 · 单元 76 / 输出 1"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 77",
        "transcript": "### CNN LSTM"
      },
      {
        "title": "分析 Notebook · 单元 78",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "from keras.layers import Flatten\nfrom keras.layers import TimeDistributed\nfrom keras.layers.convolutional import Conv1D\nfrom keras.layers.convolutional import MaxPooling1D"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 79",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "X_train = X_train.reshape((X_train.shape[0],1, 1, X_train.shape[1]))\nX_test = X_test.reshape((X_test.shape[0], 1, 1, X_test.shape[1]))\nprint(X_train.shape, X_test.shape)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 80",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "model3 = Sequential()\nmodel3.add(TimeDistributed(Conv1D(filters=64, kernel_size=1, activation='relu'), input_shape=(None, 1, 60)))\nmodel3.add(TimeDistributed(MaxPooling1D(pool_size=2, padding='same')))\nmodel3.add(TimeDistributed(Flatten()))\nmodel3.add(LSTM(64, activation='relu'))\nmodel3.add(Dense(1))\nmodel3.compile(optimizer='adam', loss='mse')\n\nmodel3.summary()"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 81",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "history3 = model3.fit(X_train,y_train,epochs=100, validation_data=(X_test,y_test), shuffle=False)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 82",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "plt.plot(history3.history['loss'], label='loss')\nplt.plot(history3.history['val_loss'], label='val_loss')\nplt.legend()"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-82-2.png",
            "label": "原始分析图表 · 单元 82 / 输出 2"
          }
        ],
        "transcript": "\n\n原始输出：\n<matplotlib.legend.Legend at 0x7f9af0250a90>"
      },
      {
        "title": "分析 Notebook · 单元 83",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "Xt3 = model3.predict(X_test)\nplt.plot(scaler.inverse_transform(y_test.reshape(-1,1)), label='True Value')\nplt.plot(scaler.inverse_transform(Xt3), label='Predicted Value')\nplt.legend()"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-83-3.png",
            "label": "原始分析图表 · 单元 83 / 输出 3"
          }
        ],
        "transcript": "\n\n原始输出：\n<matplotlib.legend.Legend at 0x7f9b5abc4550>"
      },
      {
        "title": "分析 Notebook · 单元 84",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "act3 = []\npred3 = []\nfor i in range(X_test.shape[0]):\n  # i=274\n  Xt3 = model3.predict(X_test[i].reshape(1, 1, 1, 60))\n  # print('predicted:{0}, actual:{1}'.format(scaler.inverse_transform(Xt),scaler.inverse_transform(y_test[i].reshape(-1,1))))\n  pred3.append(scaler.inverse_transform(Xt3))\n  act3.append(scaler.inverse_transform(y_test[i].reshape(-1,1)))"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 85",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "result_df3 = pd.DataFrame({'pred':list(np.reshape(pred3, (-1))),'act':list(np.reshape(act3, (-1)))})\nresult_df3.head(2)"
          }
        ],
        "transcript": "\n\n原始输出：\n          pred      act\n0  4600.340820  4518.44\n1  4592.860352  4499.38"
      },
      {
        "title": "分析 Notebook · 单元 86",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "test3 = result_df3['act']\nforecast3 = result_df3['pred']"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 87",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "print('LSTM model MSE :', mean_squared_error(test3, forecast3))\nprint('LSTM model MAE :', mean_absolute_error(test3, forecast3))\nprint('LSTM model MAPE :', mean_absolute_percentage_error(test3, forecast3))"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 88",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "def forecast_future_cnn(model, data, look_back, days_ahead):\n    last_sequence = data[-look_back:].reshape((1, 1, look_back, 1))\n    predictions = []\n    for _ in range(days_ahead):\n        y_pred = model.predict(last_sequence, verbose=0)\n        predictions.append(y_pred[0, 0])\n        last_sequence = np.append(last_sequence[:, :, 1:, :], y_pred[0, 0]).reshape((1, 1, look_back, 1))\n    return np.array(predictions)"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 89",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "future_predictions_cnn_lstm = forecast_future_cnn(model3, scaled_df, look_back, days_ahead)\n\nfuture_predictions_scaled_cnn_lstm = scaler.inverse_transform(future_predictions_cnn_lstm.reshape(-1, 1))\n\nplt.figure(figsize=(14, 7))\nplt.plot(scaler.inverse_transform(scaled_df), label='Historical Data')\nplt.plot(np.arange(len(scaled_df), len(scaled_df) + days_ahead), future_predictions_scaled_cnn_lstm, label='Forecast', color='red')\nplt.ylabel('Index Value')\nplt.legend()\nplt.show()"
          }
        ],
        "images": [
          {
            "path": "interview-sources/mexc-notebook/cell-89-1.png",
            "label": "原始分析图表 · 单元 89 / 输出 1"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 90",
        "transcript": "# 对BTC/ETF进行预测（短期和长期）"
      },
      {
        "title": "分析 Notebook · 单元 91",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "import ccxt\n\nbinance = ccxt.binance({\n    'enableRateLimit': True \n})\n\nsymbols = ['BTC/USDT']\ntimeframes = ['1h']"
          }
        ]
      },
      {
        "title": "分析 Notebook · 单元 92",
        "codeBlocks": [
          {
            "label": "原始分析代码（密钥已去除）",
            "code": "from datetime import datetime, timezone\nimport time\nimport pandas as pd \n\nstart_date = '2024-03-01' \nspot_data = []\n\ndef timeframe_to_milliseconds(timeframe):\n    amount = int(timeframe[:-1])\n    unit = timeframe[-1]\n    if unit == 'm':\n        return amount * 60000\n    elif unit == 'h':\n        return amount * 3600000 \n    elif unit == 'd':\n        return amount * 86400000  \n    elif unit == 'w':\n        return amount * 604800000 \n    else:\n        raise ValueError(\"Unsupported timeframe unit\")\n    \nfor symbol in symbols:\n    for timeframe in timeframes:\n        print(f\"Fetching data for {symbol} at timeframe {timeframe}\")\n        start_time = int(datetime.strptime(start_date, '%Y-%m-%d').replace(tzinfo=timezone.utc).timestamp() * 1000)\n        end_time = binance.milliseconds()\n        \n        data = []\n        limit = 1000\n        retries = 5  \n\n        while start_time < end_time and retries > 0:\n            try:\n                ohlcv = binance.fetch_ohlcv(symbol, timeframe, since=start_time, limit=limit)\n                if not ohlcv:\n                    break\n                data.extend(ohlcv)\n                start_time = ohlcv[-1][0] + (timeframe_to_milliseconds(timeframe))\n            except ccxt.RequestTimeout as e:\n                print(\"Request timed out. Trying again...\")\n                retries -= 1\n                if retries <= 0:\n                    print(\"Maximum retries exceeded. Exiting.\")\n                    break\n                time.sleep(10) \n        \n        df = pd.DataFrame(data, columns=['timestamp', 'open', 'high', 'low', 'close', 'volume'])\n        df['timestamp'] = pd.to_datetime(df['timestamp'], unit='ms')\n    spot_data = df\n\nprint(spot_data)"
          }
        ]
      }
    ],
    "sourceFiles": [
      "MEXC/MEXC实习生笔试.docx",
      "MEXC/笔试优秀答案.pdf",
      "MEXC/mexc_intern_OA.ipynb"
    ],
    "context": "题面、参考 PDF 与原始 Notebook 已归为同一场笔试。Notebook 中的接口密钥已去除，保留原始代码、文字、图表和表格输出；未执行代码，历史预测与作答未经核验。"
  },
  {
    "id": "cisco-coding-oa",
    "company": "Cisco",
    "type": "笔试",
    "round": "算法 OA 题目资料",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "Cisco · 算法 OA 题目资料",
    "summary": "多版本算法 OA 汇编，保留完整 36 页题面和参考代码。",
    "tags": [
      "算法",
      "动态规划"
    ],
    "sections": [
      {
        "title": "原始文档",
        "paragraphs": [
          "以下正文按 PDF 页序提取；公式、图表和代码排版请对照原始 PDF。原有作答未经正确性审校。"
        ],
        "links": [
          {
            "label": "下载原始题面 / 资料",
            "path": "interview-sources/cisco-coding-oa/source.pdf"
          }
        ]
      },
      {
        "title": "第 1 页",
        "transcript": "Version 1\nQ1.There is a set of N jars containingchocolates. Some of them may be empty.Determine the maximum number of chocolatesAndrew can pick from the jars given thathe cannot pick jars next to each other\n最大巧克力数：\n类比\nHouseRobberhttps://leetcode.com/problems/house-robber/\ninput: int number of jars, int[] representing the number ofchocolate\noutput: int max\nexample:\ninput: 6, [5 30 99 60 5 10]\noutput: 114\n取 5 99 10\n**\npublicstaticintrob(int[]nums) {// corner caseif(nums ==null||nums.length==0)return0;"
      },
      {
        "title": "第 2 页",
        "transcript": "if(nums.length==1)returnnums[0];// general caseint[]dp=newint[nums.length];// base casedp[0] = nums[0];dp[1] =Math.max(nums[1], dp[0]);for(inti=2; i <nums.length; i++) {dp[i] =Math.max(dp[i -1], nums[i] +dp[i -2]);}returndp[nums.length-1];}public static void main(String[] args) {Scanner scanner = new Scanner(System.in);int length = scanner.nextInt();int[] nums = new int[length];for (int i = 0; i < length; i++) {nums[i] = scanner.nextInt();}int result = rob(nums);System.out.println(result);}"
      },
      {
        "title": "第 3 页",
        "transcript": "Q2. Ray likes puzzles. One day, hechallenged Ansh with a puzzle to find astring that is the same when read forwardsand backwards\n找最\n长回文\nsubstring\n，\n如有相同取字母最小：类比https://leetcode.com/problems/longest-palindromic-substring/\ninput: String input\noutput: String substring palindrome\nexample:\ninput: YABCCBAZ\noutput: ABCCBA\n** implementation\npublic static void longestPalindrome(String input) {\n// corner case\nif (input == null || input.length() == 0) {\nSystem.out.printLn(“None”);\nreturn;\n}"
      },
      {
        "title": "第 4 页",
        "transcript": "// general case\nint maxLength = 1;\nString maxSubstring = input.substring(0, 1);\nfor (int i = 0; i < input.length(); i++) {\nString substring = findPalindrome(input, i);\nif (substring.length() > maxSubstring) {\n// update if we find a longer substring\nmaxSubstring = substring;\n} else if (substring.length() == maxSubstring.length() &&substring.compareTo(maxSubstring < 0)) {\n// if have the same length, choose lexicographicallysmallest one\nmaxSubstring = substring;\n}\n}\n// check update or not\nif (maxSubstring.length() == 1) {\nSystem.out.println(“None”);\nreturn;\n}\nSystem.out.println(maxSubstring);\n}\n// helper function to check palindrome"
      },
      {
        "title": "第 5 页",
        "transcript": "private static String findPalindrome(String s, int i) {\nint j = i - 1, k = i + 1;\nString result = “”;\n// start with i in the middle\nwhile (j >= 0 && k < s.length() && s.charAt(j) == s.charAt(k)) {\nj–;\nk++;\n}\nresult = s.substring(j + 1, k);\n// start with i and i - 1 in the middle\nj = i - 1;\nk = i;\nwhile (j >= 0 && k < s.length() && s.charAt(j) == s.charAt(k)) {\nj–;\nk++;\n}\n// compare two cases\nif (k - j + 1 > result.length()) return s.substring(j+ 1, k);\nreturn result;\n}"
      },
      {
        "title": "第 6 页",
        "transcript": "Q3. Lucy loves to play the Hop, skip andjump game. Given an N*M matrix andstarting from cell (1,1), her challenge isto hop in an anticlockwise direction andskip alternate cells. The goal is to findout the last cell she would hop onto\nSpiral Order traversal ofMatrix(anti-clockwise), 从左上角开始，一次往前\n走两步，返回最\n终能到的那个元素：类比https://leetcode.com/problems/spiral-matrix/\n（改逆\n时针，走两步\n \n）\ninput: int N, int M, int[][] matrix\noutput: the integer of the last cell Lucy would hop onto"
      },
      {
        "title": "第 7 页",
        "transcript": "** implementation\npublic staticList<Integer>spiralOrder(int[][]matrix){// recursive traversalList<Integer> list =newArrayList<>();intm =matrix.length;\n// corner caseif(m ==0)returnlist;intn =matrix[0].length;// general caseintleft =0;intright = n -1;intup =0;intdown = m -1;while(left < right && up < down) {for(inti = up; i <= down ; i++) {// leftfrom top to bottomlist.add(matrix[i][left]);}"
      },
      {
        "title": "第 8 页",
        "transcript": "for(inti = left +1; i <= right -1; i++) {// bottom from left toright offset by onelist.add(matrix[down][i]);}for(inti = down; i >= up; i--) {// rightfrom up to downlist.add(matrix[i][right]);}for(inti = right -1; i >= left +1; i--){// top from right toleft list.add(matrix[up][i]);}left++;right--;up++;down--;}// if there is nothing leftif(left > right || up > down) {List<Integer> result = skipByOne(list);returnresult;}// if there is one column left;if(left == right) {for(inti = up; i <= down; i++) {list.add(matrix[i][left]);}}else{// if there is one row left;for(inti = left; i <= right; i++) {list.add(matrix[up][i]);}}List<Integer> result = skipByOne(list);returnresult;}private staticList<Integer>skipByOne(List<Integer>input) {List<Integer> result =newArrayList<>();for(inti =0; i <input.size(); i +=2) {result.add(input.get(i));}returnresult;}"
      },
      {
        "title": "第 9 页",
        "transcript": "Version 2\nQ1. Given an integer X, write an algorithmto find the number of integers which areless than or equal to X and whose digitsadd up to Y\ninput: int X, int Y\noutput: int number of integers\nexample: 20 5\nthere are 2 two integers <= 20 and digits add up to 5\n5 and 14, the answer is 2\n** implementation\npublic static voidmatchXAndY(intX, intY) {\n// find the digits sum of Y\nintlength = String.valueOf(X).length();\nSystem.out.println(length);\nintcount =0;"
      },
      {
        "title": "第 10 页",
        "transcript": "for(inti =1; i <= length; i++) {\ncount+=getNumber(i,0, 0, Y, X);\n}\nif(count ==0) {\nSystem.out.println(-1);\n} else{\nSystem.out.println(count);\n}\n}\nprivate static intgetNumber(intindex, intnum,intresult, inttarget, intbound) {\nif(num> bound)return0;\nif(index==0) {\nif(result==target) return1;\nelse return0;\n}\nintcount =0;"
      },
      {
        "title": "第 11 页",
        "transcript": "for(inti =1; i <10; i++) {\ncount +=getNumber(index- 1, num*10+ i,result+ i,target,bound);\n}\nreturncount;\n}\npublic static voidmain(String[]args) {\nScanner scanner =newScanner(System.in);\nintX = scanner.nextInt();\nintY = scanner.nextInt();\nmatchXAndY(X, Y);\n}"
      },
      {
        "title": "第 12 页",
        "transcript": "Q2. Write an algorithm to check if astring is sorted in alphabetical order andprint 0 if it is. If it is not inalphabetical order, the print the index ofthe character where its is out ofalphabetical order\ninput: String input\noutput: int 0 or index of char\nexample:\n1.input abc       output: 02.\ninput asd       output: 2 (\n这里应该是\nc++\n，\nindex\n从\n1\n开始\n)\n** implementation\npublic static int isInorder(String s) {\n// corner case\nif (s == null || s.length() == 0) return 0;\nif (s.length() == 1) return 0;\n// general case\nchar[] array = s.toCharArray();\nchar previous = array[0];"
      },
      {
        "title": "第 13 页",
        "transcript": "for (int i = 1; i < array.length; i++) {\nif (array[i] < previous) return i;\nprevious = array[i];\n}\nreturn 0;\n}\nQ3. You are given a matrix N*M size, writean algorithm to rotate the matrix by90-degree"
      },
      {
        "title": "第 14 页",
        "transcript": "publicvoidrotate(int[][]matrix) {intn=matrix.length;// corner caseif(n <=1)return;// general caseintround= n /2;for(intlevel=0; level < round; level++){intleft= level;intright= n -2- level;for(inti= left; i <= right; i++) {inttemp= matrix[left][i];matrix[left][i] = matrix[n -1- i][left];matrix[n -1- i][left] = matrix[n-1- left][n -1- i];matrix[n -1- left][n -1- i] =matrix[i][n -1- left];matrix[i][n -1- left] = temp;}}}\nVersion 3\nQ1. Fizz buzzhttps://leetcode.com/problems/fizz-buzz/\n** implementation\npublicList<String>fizzBuzz(intn) {List<String>list=newArrayList<>();for(inti=1; i <= n; i++) {if(i %3==0&& i %5==0) {list.add(\"FizzBuzz\");}elseif(i %3==0) {list.add(\"Fizz\");}elseif(i %5==0) {"
      },
      {
        "title": "第 15 页",
        "transcript": "list.add(\"Buzz\");}else{list.add(String.valueOf(i));}}returnlist;}\nQ2. A pilot was asked to drop food packetsin a terrain. He must fly over the entireterrain only once but cover a maximumnumber of drop points. The points aregiven as inputs in the form of integercoordinates in a 2-d field. The flightpath can be horizontal or vertical, butnot a mix of the two or diagonal\ninput: int xCorrdinateSize （ representing the number of x\ncoordinates\n）\n, int[] drop point\n的\nx\n坐\n标\nint yCorrdinateSize （ representing the number of x\ncoordinates, \n和\nx\n的一定相等）\n, \nint[] drop point\n的\ny\n坐\n标\noutput ： int 最多 cover 的点"
      },
      {
        "title": "第 16 页",
        "transcript": "example ：\ninput: 5\n2 3 2 4 2\n5\n2 2 6 5 8\noutput: 3\n5 个 drop points （ 2,2 ）（ 3,2 ）（ 2,6 ）（ 4,5 ）（ 2,8 ）\n最大横着走完一行，（ 2,2 ），（ 2,6 ），（ 2,8 ）\npublic static intdropPoints(int[]xCoordinate,int[]yCoordinate) {// corner caseif(xCoordinate==null||yCoordinate==null||xCoordinate.length==0||yCoordinate.length==0)return0;// general caseMap<Integer, Integer> xFreq =newHashMap<>();// <xCoordinate, freq>Map<Integer, Integer> yFreq =newHashMap<>();// <yCoordinate, freq>intxGlobalMaxFreq =0;intyGlobalMaxFreq =0;// traverse the x coordinatesfor(inti :xCoordinate) {intfreq = xFreq.getOrDefault(i,0);freq++;xFreq.put(i, freq);xGlobalMaxFreq = Math.max(xGlobalMaxFreq, freq);}// traverse the y coordinatesfor(inti :yCoordinate) {intfreq = yFreq.getOrDefault(i,0);freq++;yFreq.put(i, freq);yGlobalMaxFreq = Math.max(yGlobalMaxFreq, freq);}returnMath.max(xGlobalMaxFreq, yGlobalMaxFreq);}"
      },
      {
        "title": "第 17 页",
        "transcript": "Q3. You are given a list of Integers(bothpositive and negative). Find thecontinuous sequence of integers with thelargest sum\n最大 substring 和\ninput: int arraySize, int[] array of Integer\noutput: largest sum\nexample ：\ninput: 6\n2, -8, 3, -2, 4, -10\noutput: 5\n3 + (-2) + 4 = 5\n** implementation\npublicintmaxSubArray(int[]nums) {// corner caseif(nums ==null||nums.length==0)return-1;// general caseint[]dp=newint[nums.length];intglobalMax= nums[0];dp[0] = nums[0];for(inti=1; i <nums.length; i++) {"
      },
      {
        "title": "第 18 页",
        "transcript": "// case 1 if not negative, addif(dp[i -1] >=0) {dp[i] = dp[i -1] + nums[i];}else{dp[i] = nums[i];}globalMax =Math.max(globalMax, dp[i]);}returnglobalMax;}\nVersion 4.\nQ1. write an algorithm to print achessboard pattern(“B” for black squares,“W” for white sqaures), the top left isalways white\n类似\n8 \nQueens\n，\n填填填\ninput: int size of chessboard\noutput: List<List<character>>"
      },
      {
        "title": "第 19 页",
        "transcript": "public staticList<List<Character>>chessboard(intn) {List<List<Character>> board =newArrayList<>();\n// corner caseif(n<=0) returnboard;// general casefor(inti =0; i <n; i++) {List<Character> rowAssignment =newArrayList<>();for(intj =0; j <n; j++) {\nif((i + j) %2==0) {rowAssignment.add('W');} else{rowAssignment.add('B');}}board.add(rowAssignment);}returnboard;}"
      },
      {
        "title": "第 20 页",
        "transcript": "Q2. The arithmetic mean of N numbers isthe number of the sum of all the numbersdivided by N. The mode of N numbers is themost frequently occurring number. Write analgorithm to find the mean and mode of aset of given number\ninput: int numberOfInteger, int[] numbers\noutput: mean and mode\nexample\ninput: 5\n[1 2 7 3 2]\noutput: mean: 3\nmode: 2\npublic static doublemean(int[]m) {doublesum =0;\nfor(intj :m) {sum += j;}returnsum /m.length;}"
      },
      {
        "title": "第 21 页",
        "transcript": "public static intmode(int[]a) {intmaxFreq =0;Map<Integer, Integer> map =newHashMap<>();for(inti :a) {intfreq = map.getOrDefault(i,0);freq++;map.put(i, freq);maxFreq = Math.max(freq, maxFreq);}\nreturnmaxFreq;}\nQ3. \n递增\nindex\n的最大差值https://leetcode.com/problems/maximum-difference-between-increasing-elements/\npublicintmaximumDifference(int[]nums) {intdiff= -1;for(inti=1, min = nums[0]; i <nums.length;++i) {if(nums[i] > min) {diff =Math.max(diff, nums[i] - min);}min =Math.min(min, nums[i]);}returndiff;}"
      },
      {
        "title": "第 22 页",
        "transcript": "Version 5\nQ1. Ray, Shiv and Ansh are conducting asurvey for a group of people. The surveyis only meant for twins but there arecertain people who are not twins andwanting to take part in the survey. Writean algorithm to help them identify theperson from the given input who is not atwin\ninput: int size, int[] givenIntegers\noutput: int \n最小的\n单独数"
      },
      {
        "title": "第 23 页",
        "transcript": "本页为图像内容，请查看原始 PDF。"
      },
      {
        "title": "第 24 页",
        "transcript": "public static intfirstSingle(int[]array) {// corner caseif(array==null||array.length==0)return-1;if(array.length==1)returnarray[0];// general casefor(inti =1; i <array.length; i++) {if(array[i] !=array[i -1] && (i ==array.length- 1||array[i] !=array[i+1]))returnarray[i];}return-1;}"
      },
      {
        "title": "第 25 页",
        "transcript": "Q2.Write an algorithm which finds out theelements which are largest in a row andsmallest in a column in a matrix"
      },
      {
        "title": "第 26 页",
        "transcript": "public static intminmaxNumbers(int[][]matrix) {// Initialize unordered setSet<Integer> maxInEachRow=newHashSet<>();\n// Traverse the matrix\nfor(inti =0; i <matrix.length; i++) {intmaxInRow = Integer.MIN_VALUE;for(intj =0; j <matrix[i].length; j++) {// Update the max// element of current rowmaxInRow = Math.max(maxInRow,matrix[i][j]);}\n// Insert the minimum// element of the rowmaxInEachRow.add(maxInRow);"
      },
      {
        "title": "第 27 页",
        "transcript": "}\n// find the min in each colfor(intj =0; j <matrix[0].length; j++) {intminInCol = Integer.MAX_VALUE;for(inti =0; i <matrix.length; i++) {// Update the maximum// element of current columnminInCol = Math.min(minInCol,matrix[i][j]);}\n// Checking if it is already present// in the unordered_set or notif(maxInEachRow.contains(minInCol))returnminInCol;}return-1;}\nmethod 2\npublic static intminmaxNumbers(int[][]matrix) {intm =matrix.length, n =matrix[0].length;int[] max =new int[m], min =new int[n];Arrays.fill(max, Integer.MIN_VALUE);Arrays.fill(min, Integer.MAX_VALUE);for(inti =0; i < m; ++i) {for(intj =0; j < n; ++j) {max[i] = Math.max(matrix[i][j], max[i]);min[j] = Math.min(matrix[i][j], min[j]);}}for(inti =0; i < m; ++i) {for(intj =0; j < n; ++j) {if(max[i] == min[j]) {returnmax[i];// credit to @Ausho_Roup"
      },
      {
        "title": "第 28 页",
        "transcript": "}}}return-1;}"
      },
      {
        "title": "第 29 页",
        "transcript": "Q3. You are given a list of Strings thatmay represent valid latitude/longitudepais. Your task is to check if the givenpairs are valid or not"
      },
      {
        "title": "第 30 页",
        "transcript": "public static voidlatiLongPairs(List<String>input){String regexLatLong =\"\\\\([-+]?(([1-8]?[0-9])(\\\\.\\\\d+)?|90(\\\\.0+)?),[-+]?(([1-9]?[0-9]|1[0-7][0-9])(\\\\.\\\\d+)?|180(\\\\.0+)?)\\\\)\";//String regexLatLong =\"\\\\([+-]?((90(\\\\.0+)?)|([1-8][0-9](\\\\.[0-9]+)?)|([0-9](\\\\.[0-9]+)?)),\\\\s*[+-]?(((([1-9][0-9])|([0-9]))(\\\\.[0-9]+)?)|(1((80(\\\\.0+)?)|([0-7][0-9](\\\\.[0-9]+)?))))\\\\)\";Pattern pattern = Pattern.compile(regexLatLong);for(String cur :input) {Matcher matcher = pattern.matcher(cur);if(matcher.find())"
      },
      {
        "title": "第 31 页",
        "transcript": "System.out.println(\"Valid\");elseSystem.out.println(\"Invalid\");}}"
      },
      {
        "title": "第 32 页",
        "transcript": "Q4. You are given a grid of letters,followed by some words. The words canoccur anywhere in the grid on a row or acolumn, forward or backwards. However,there are no diagonal words. Write analgorithm to find if the given word occursin the grid on a row or a column, forwardor backwards"
      },
      {
        "title": "第 33 页",
        "transcript": "privatestaticfinalint[][]DIRS= {{1,0}, {-1,0}, {0,1}, {0, -1}};publicbooleanexist(char[][]board,Stringword){// corner caseif(word ==null||word.length() ==0)returnfalse;boolean[][]visited=newboolean[board.length][board[0].length];for(inti=0; i <board.length; i++) {for(intj=0; j < board[0].length; j++){if(!visited[i][j] && board[i][j]==word.charAt(0)) {if(dfs(board, word, visited,i, j,0))returntrue;}"
      },
      {
        "title": "第 34 页",
        "transcript": "}}returnfalse;}privatebooleandfs(char[][]board,Stringword,boolean[][]visited,introw,intcol,intindex) {// base caseif(index ==word.length())returntrue;// check within boundif(row <0|| row >=board.length|| col<0|| col >=board[0].length)returnfalse;// check visited;if(visited[row][col])returnfalse;// check matchif(board[row][col] !=word.charAt(index))returnfalse;// mark visitedvisited[row][col] =true;// do dfsfor(int[]direction:DIRS) {intnewRow= row + direction[0];intnewCol= col + direction[1];if(dfs(board, word, visited, newRow, newCol,index +1))returntrue; }// backtrackingvisited[row][col] =false;returnfalse;}\nmethod 2 Trietree\nprivatestaticfinalint[][]DIRS= {{1,0}, {-1,0}, {0,1}, {0, -1}};staticclassTrieNode{TrieNode[]children=newTrieNode[26];booleanisWord;}publicList<String>findWords(char[][]board,String[]words) {List<String>list=newArrayList<>();// corner caseif(board ==null||board.length==0|| board[0].length==0)returnlist;if(words ==null||words.length==0)returnlist;// general caseSet<String>res=newHashSet<>();// preprocess to convert input string[] intoTrieTreeTrieNoderoot=buildTrietree(words);introws=board.length;"
      },
      {
        "title": "第 35 页",
        "transcript": "intcols= board[0].length;StringBuildersb=newStringBuilder();// tostore prefixboolean[][]visited=newboolean[rows][cols];for(inti=0; i < rows; i++) {for(intj=0; j < cols; j++) {DFS(board, i, j, root, sb, visited, res);}}returnnewArrayList<>(res);}// helper function to apply DFSprivatevoidDFS(char[][]board,introw,intcol,TrieNoderoot,StringBuildersb,boolean[][]visited,Set<String>res) {// base caseif(root.isWord)res.add(sb.toString());// check validityif(row <0|| row >=board.length|| col <0|| col >= board[0].length|| visited[row][col])return;// check children in TrieTreecharch= board[row][col];if(root.children[ch -'a'] ==null)return;// if contains, run dfsroot =root.children[ch -'a'];visited[row][col] =true;sb.append(ch);for(int[]direction:DIRS) {intnewRow= row + direction[0];intnewCol= col + direction[1];DFS(board, newRow, newCol, root, sb, visited,res);}// backtrackingsb.deleteCharAt(sb.length() -1);visited[row][col] =false;}// helper function to build TrietreeprivateTrieNodebuildTrietree(String[]words) {TrieNoderoot=newTrieNode();for(Stringword:words) {TrieNodecur= root;// main logic traverse each wordfor(inti=0; i <word.length(); i++) {TrieNodechild=cur.children[word.charAt(i)-'a'];if(child ==null) {// if have not been create,create itchild =newTrieNode();cur.children[word.charAt(i) -'a'] = child;}cur = child;// update the cur pointer}cur.isWord=true;// once finish each word,mark it as word"
      },
      {
        "title": "第 36 页",
        "transcript": "}returnroot;}"
      }
    ],
    "sourceFiles": [
      "Cisco OA­.pdf"
    ],
    "context": "资料日期不等于实际考试日期；无法确定的场次时间未补造。"
  },
  {
    "id": "shanliu-cpp-written",
    "company": "善流投资",
    "type": "笔试",
    "round": "C++ 笔试与作答",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "善流投资 · C++ 笔试与作答",
    "summary": "包含数据结构实现、C++ 代码与原始作答记录。",
    "tags": [
      "C++",
      "数据结构"
    ],
    "sections": [
      {
        "title": "原始文档",
        "paragraphs": [
          "以下正文按 PDF 页序提取；公式、图表和代码排版请对照原始 PDF。原有作答未经正确性审校。"
        ],
        "links": [
          {
            "label": "下载原始题面 / 资料",
            "path": "interview-sources/shanliu-cpp-written/source.pdf"
          }
        ]
      },
      {
        "title": "第 1 页",
        "transcript": "善 流 投 资 _ 笔 试 _ 耿 ⽂ 博\n1\n善流投资 _ 笔试 _ 耿⽂博\n题⽬ 1:\n1. 定义⼀个先⼊后出的数据结构，实现这个类和它所需的成员函数 ; \n2. 代码要有必要的注解 ( 可以⽤中⽂ );\n#include <stdexcept>\n#include <iostream>#include <vector>\n#include <assert.h>\ntemplate <typename T>class Stack {\npublic:    // 构造函数\n    Stack(int size = 100) : m_size(size) {}\n        // 析构函数\n    ~Stack() {}    \n    // ⼊栈    void push(T value) {\n        // 判断栈是否已满\n        if (m_data.size() == m_size) {            // 栈已满，扩容\n            m_size += 1;            m_data.resize(m_size);\n        }        \n        // 将元素压⼊栈顶        m_data.push_back(value);\n    }\n        // 出栈\n    T pop() {        // 判断栈是否为空\n        if (m_data.empty()) {            // 栈为空，抛出异常\n            throw std::out_of_range(\"Stack is empty\");\n        }        \n        // 返回栈顶元素        T value = std::move(m_data.back());\n        m_data.pop_back();        return value;\n    }    \n    // 获取栈顶元素\n    T top() {        // 判断栈是否为空\n        if (m_data.empty()) {            // 栈为空，抛出异常\n            throw std::out_of_range(\"Stack is empty\");        }\n        \n        // 返回栈顶元素        return m_data.back();\n    }    \n    // 判断栈是否为空    bool empty() {\n        return m_data.empty();    }\n    \n    // 获取栈的⼤⼩"
      },
      {
        "title": "第 2 页",
        "transcript": "善 流 投 资 _ 笔 试 _ 耿 ⽂ 博\n2\n    int size() {\n        return (int)m_data.size();    }\n    private:\n    // 栈的⼤⼩    int m_size;\n    \n    // 栈数据    std::vector<T> m_data;\n};\n2. 编写单元测试，测试你的类的正确性，并简要说明测试⽬的或场景\n上述代码实现了⼀个基于动态数组的栈 ( 先⼊后出 ) ，其测试⽬的或场景包括：\n⼊栈操作：测试栈是否能够正确⼊栈元素。\n出栈操作：测试栈是否能够正确出栈元素。\n判断栈是否为空：测试栈是否能够正确判断栈是否为空。\n空栈的出栈操作：测试空栈的出栈操作是否会抛出异常。\n空栈的栈顶元素操作：测试空栈的栈顶元素操作是否会抛出异常。\n栈的⼤⼩：测试栈的⼤⼩是否正确。\nint main(int argc, const char * argv[]) {\n    Stack<int> stack(10);    \n    // ⼊栈    stack.push(1);\n    stack.push(2);\n    stack.push(3);    \n    // 出栈    int value = stack.pop();\n    std::cout << value << std::endl;    value = stack.pop();\n    std::cout << value << std::endl;    value = stack.pop();\n    std::cout << value << std::endl;\n        // 判断栈是否为空\n    std::cout << stack.empty() << std::endl;    \n    // 测试空栈的出栈操作    try {\n        stack.pop();\n    } catch (const std::out_of_range& e) {        std::cout << \" 出栈空栈，抛出异常： \" << e.what() << std::endl;\n    }    \n    // 测试获取栈顶元素的空栈操作    try {\n        stack.top();    } catch (const std::out_of_range& e) {\n        std::cout << \" 获取空栈的栈顶元素，抛出异常： \" << e.what() << std::endl;\n    }    \n    // 测试判断栈是否为空的空栈操作    assert(stack.empty());\n        // 测试栈的⼤⼩\n    assert(stack.size() == 0);\n        std::cout << \"Hello, World!\\n\";\n    return 0;}"
      },
      {
        "title": "第 3 页",
        "transcript": "善 流 投 资 _ 笔 试 _ 耿 ⽂ 博\n3\n3. 分析你的算法的时间和空间复杂度\nTime Complexity: \n1. push() ：如果栈的⼤⼩⼩于等于  m_size，则插⼊操作是  O(1) 的。如果栈的⼤⼩达到  m_size，则需要进⾏扩容，resize 操作会花费  O(n) 的时间。\n2. pop() ：pop 操作的时间复杂度为  O(1) ，因为  vector 的  pop_back 操作是常数时间。\n3. top() ：top 操作的时间复杂度为  O(1) → 返回栈顶元素。\n4. empty() ：empty 操作的时间复杂度为  O(1) → 栈是否为空。\n5. size() ：size 操作的时间复杂度为  O(1) → 返回栈的⼤⼩。\nSpace Complexity: 主要取决于栈中存储的元素数量，即  vector 的⼤⼩  → O(n) 。在最坏情况下，如果进⾏了多次扩容，空间复杂度为  O(n) ， n 为栈的⼤⼩。\n题⽬ 2:\n1. 检查代码是否有错误，如是，请进⾏修改 ; \n1. 潜在的内存泄漏  find_and_erase0() ⽤  delete ptr 从动态分配的数组中删除单个元素。但它只删除指针本⾝，但不删除指针指向的内存  → 导致内存泄漏。\n2. 删除之后的⽆效访问   find_and_erase1() ⽤  erase ⽅法会使得迭代器会失效，所以要更新迭代器。\n3. 不必要的复制构造函数和赋值运算符 copy constructor 还有  operator ，只进⾏了  shadow copy ⽽不是  deep copy 所以只是复制内部数据结构的指针，可能会导致悬挂指针问题。\n修改：\n1. vector 代替原始指针来存储  _data0 因为  vector 提供了内置的内存管理功能，可以更加安全地删除元素。\n2. 使⽤标准库中  remove_if() 来替代  erase() 删除元素。\n3. 将  copy constructor 和  operator= 改为  deep copy 分配新内存并复制元素。\n#include <vector>\nclass Foo {public:\n    // constructor\n    Foo(int size)        : _data0(size),\n          _data1(size)    {\n        // 使⽤  vector 的构造函数来分配内存        _data0 = std::vector<int>(size);\n        _data1 = std::vector<int>(size);    }\n    // 避免浅拷⻉    Foo(const Foo &other) = delete;\n    Foo &operator=(const Foo &other) = delete;\n    // find all occurrences of @val and erase if there is any    void find_and_erase0(int val)\n    {\n        // 使⽤  remove_if() 来删除元素        auto it = std::remove_if(_data0.begin(), _data0.end(), [val](int element) { return element == val; });\n        _data0.erase(it, _data0.end());    }\n    // find all occurrences of @val and erase if there is any\n    void find_and_erase1(int val)    {\n        _data1.erase(std::remove_if(_data1.begin(), _data1.end(), [val](int element) { return element == val; }), _data1.end());"
      },
      {
        "title": "第 4 页",
        "transcript": "善 流 投 资 _ 笔 试 _ 耿 ⽂ 博\n4\n    }\nprivate:\n    std::vector<int> _data0;    std::vector<int> _data1;\n};\n2. 分析各个函数的复杂度，如果函数可以进⾏优化，请对该函数进⾏重构。\n1. 构造函数的复杂度为  O(n) ，其中  n 是数组的⼤⼩。这是因为构造函数需要分配  n 个元素的内存。\n2. copy constructor 和  operator= 为  O(n) ，其中  n 是数组的⼤⼩因为这两个函数需要复制数组中的所有元素。\n3. find_and_erase0() 函数的复杂度为  O(n^2) ，其中  n 是数组的⼤⼩。由于remove_if() 的复杂度为  O(n) ，并且需要遍历整个数组两次：查找要删除的元素  + 删除元素。\n4. find_and_erase1() 函数的复杂度为  O(n) ，由于remove_if() 的复杂度为  O(n) 。\n优化 : 可以使⽤  unique_ptr 或  shared_ptr 来管理  _data0 和  _data1 的指针避免内存泄漏。\n#include <vector>#include <memory>\nclass Foo {\npublic:\n    // constructor    Foo(int size)\n        : _data0(std::make_unique<std::vector<int>>(size)),          _data1(std::make_unique<std::vector<int>>(size))\n    {}    \n    Foo(const Foo &other) : Foo(static_cast<int>(other._data0->size())) { *_data0 = *other._data0; }    Foo &operator=(const Foo &other) { *_data0 = *other._data0; return *this; }\n    \n    // find all occurrences of @val and erase if there is any    void find_and_erase0(int val)\n    {        auto it = std::remove_if(_data0->begin(), _data0->end(), [val](int element) { return element == val; });\n        _data0->erase(it, _data0->end());    }\n    // find all occurrences of @val and erase if there is any    void find_and_erase1(int val)\n    {        _data1->erase(std::remove_if(_data1->begin(), _data1->end(), [val](int element) { return element == val; }), _data1->end());\n    }\nprivate:    // Unique pointers 动态管理  vector\n    std::unique_ptr<std::vector<int>> _data0;\n    std::unique_ptr<std::vector<int>> _data1;};\n题⽬ 3:\n1. 使⽤你认为最⾼效的算法，实现⼀个函数 find_common_elements ，它的输⼊是这 k 个数组，输出是⼀个有序数组，按序包含所有在这 k 个数组中都出现的元素 ;2. 代码要有必要的注解 ( 可以⽤中⽂ );\nBrute Force: 遍历  input ，对所有数组的没给元素进⾏查找，最后对数组进⾏排序，找相同的元素  → O(n^k + nlogn) n 为所有输⼊数组中元素的总数。\n优化 : 两两进⾏查重，每次只保留重复的那部分，有重复的那部分再跟之后的数组进⾏⽐较，检查是否有相同的元素  ⇒  k 个数组都出现的元素。"
      },
      {
        "title": "第 5 页",
        "transcript": "善 流 投 资 _ 笔 试 _ 耿 ⽂ 博\n5\nO(n*m + klog(k)) ， n 为数组的总⻓度， m 为数组的个数， k 为答案数组的⻓度。\n// 假设输⼊都是整型的情况下\nvector<int> find_common_elements(const vector<vector<int>>& arrays) {     if (arrays.size() < 2) return {};\n    unordered_map<int, int> count;\n    // 统计第⼀个数组中的元素    for (int num : arrays[0]) count[num] = 1; // 标记出现过\n    \n    // 遍历剩余数组，更新标记结果，两两⽐较\n    for (int i = 1; i < arrays.size(); ++i) {        unordered_map<int, int> currentCount;\n        // 查找当前数组中的元素\n        for (int num : arrays[i]) currentCount[num] = 1;\n        // 更新  count 中的标记结果，保留重复部分\n        unordered_map<int, int> newCount;        for (auto& [element, visited]: count) {\n            if (currentCount.count(element))                 newCount[element] = 1;\n                    }\n        count = newCount;    }\n    vector<int> ans;    for (auto& [element, _] : count)\n        ans.push_back(element);    \n    sort(ans.begin(), ans.end()); // 排序保证答案数组有序    return ans;\n}\n3. 我们在下⾯列出了⼏个测试样例，请再添加⾄少三个你⾃⼰编写的测试例⼦，并简要说明测试⽬的或场景 ;\n假设输⼊都是整型，且不考虑⼤数和超出整型表⽰范围，测试⽤例如下：\nEdge Cases: max and min value in the vector {INT_MIN, INT_MAX}  {INT_MIN, INT_MAX}  {1, INT_MAX} ⇒  {INT_MAX}\nFunctional Cases: {{1, 1, 1}, {1, 1}, {1, 1, 1, 1}} ⇒  {1}\nSpecial Cases: k 个数组都为空\nint main(int argc, const char * argv[]) {    // insert code here...\n    vector<vector<int>> A1 = {{-1, 2, 7}, {2, 3, 7, 8}, {-3, 0, 1, 2, 4}, {1, 2, 3}};\n    vector<int> result1 = find_common_elements(A1);    // 输出结果  [2]\n    for (int elem : result1)        cout << elem << \" \";\n    cout << endl;\n    vector<vector<int>> A2 = {{11}, {0, 2, 4, 6, 8, 10, 12, 14, 16}};\n    vector<int> result2 = find_common_elements(A2);    // 输出结果  []\n    for (int elem : result2)        cout << elem << \" \";\n    cout << endl;\n    vector<vector<int>> A3 = {{1, 3, 5}, {1, 3, 5}, {1, 3, 5}};    vector<int> result3 = find_common_elements(A3);\n    // 输出结果  [1, 3, 5]\n    for (int elem : result3)        cout << elem << \" \";\n    cout << endl;"
      },
      {
        "title": "第 6 页",
        "transcript": "善 流 投 资 _ 笔 试 _ 耿 ⽂ 博\n6\n    \n    vector<vector<int>> A4 = {{-1, -2, -3}, {-2, -3, -4}, {-3, -4, -5}};    vector<int> result4 = find_common_elements(A4);\n    // 三个数组都只包含⼀个元素，期望结果是  [-3]    for (int elem : result4)\n        cout << elem << \" \";    cout << endl;\n    \n    vector<vector<int>> A5 = {{}, {}};    vector<int> result5 = find_common_elements(A5);\n    // 所有数组都为空，期望结果是  []    for (int elem : result5)\n        cout << elem << \" \";    cout << endl;\n        vector<vector<int>> A6 = {{1, 1, 1}, {1, 1}, {1, 1, 1, 1}};\n    vector<int> result6 = find_common_elements(A6);\n    // 三个数组相同但⻓度不同，期望结果是  [1]    for (int elem : result6)\n        cout << elem << \" \";    cout << endl;\n        vector<vector<int>> A7 = {{1, 1, 1, 1}, {2, 3}, {5, 6}};\n    vector<int> result7 = find_common_elements(A7);\n    // 三个数组相同但⻓度不同，期望结果是  []    for (int elem : result7)\n        cout << elem << \" \";    cout << endl;\n        vector<vector<int>> A8 = {{2, 2}, {2, 3}, {5, 6}};\n    vector<int> result8 = find_common_elements(A8);    // 只有两个数组有相同元素，期望结果是  []\n    for (int elem : result8)\n        cout << elem << \" \";    cout << endl;\n        vector<vector<int>> A9 = {{1, 2}};\n    vector<int> result9 = find_common_elements(A9);    // 只有⼀个数组\n    for (int elem : result9)\n        cout << elem << \" \";    cout << endl;\n        vector<vector<int>> A10 = {{INT_MIN, INT_MAX, INT_MIN}, {INT_MAX, 1}, {INT_MAX, INT_MIN}};\n    vector<int> result10 = find_common_elements(A10);    // MIN MAX value, 期望结果是  [2147483647]\n    for (int elem : result10)        cout << elem << \" \";\n    cout << endl;\n        return 0;\n}\n4. 分析你的算法的时间和空间复杂度 ;\nTime Complexity: 在最坏情况下，需要遍历所有数组的所有元素所以是  O(n*m + klog(k)) n 为数组的总⻓度， m 为数组的个数， k 为答案数组的⻓度。\nSpace Complexity:  O(n) 在不考虑返回值的情况下，使⽤了⼀个哈希表来存储元素的出现情况， n 为数组的总⻓度。在最坏情况下，所有元素都不重复，哈希表的⼤⼩将达到数组的总⻓度。"
      }
    ],
    "sourceFiles": [
      "善流投资/善流投资_笔试_耿文博.pdf"
    ],
    "context": "资料日期不等于实际考试日期；无法确定的场次时间未补造。"
  },
  {
    "id": "zhuosheng-cpp-written",
    "company": "上海卓胜私募",
    "type": "笔试",
    "round": "C++ 技术笔试与作答",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "上海卓胜私募 · C++ 技术笔试与作答",
    "summary": "覆盖编译链接、容器、C++ 基础与编程实现。",
    "tags": [
      "C++",
      "容器",
      "编译链接"
    ],
    "sections": [
      {
        "title": "原始文档",
        "paragraphs": [
          "以下正文按 PDF 页序提取；公式、图表和代码排版请对照原始 PDF。原有作答未经正确性审校。"
        ],
        "links": [
          {
            "label": "下载原始题面 / 资料",
            "path": "interview-sources/zhuosheng-cpp-written/source.pdf"
          }
        ]
      },
      {
        "title": "第 1 页",
        "transcript": "卓 胜 私 募 - 笔 试  耿 ⽂ 博\n1\n卓胜私募 - 笔试  耿⽂博\n基础知识\n1. C++ Python 分别属于哪种语⾔\na. C++: C++ 是⼀种编译型语⾔，源代码在编译时被转换为机器码，然后执⾏，并⽀持多范式语\n⾔，⽀持⾯向过程、⾯向对象和泛型编程。属于静态类型语⾔，需要在编译时指定变量的类\n型，并进⾏类型检查。\nb. Python: Python 是⼀种解释型语⾔，源代码逐⾏解释并执⾏，并且也⽀持⾯向对象、⾯向过\n程、函数式编程的多范式语⾔，动态类型语⾔，变量的类型在运⾏时被确定，⽆需在编写代码\n时指定。\n2. 简要说明  C++ 编译器的⼯作原理\n预处理  → 编译  → 汇编  → 链接\n预处理阶段是在源代码被实际编译之前进⾏的。主要任务包括处理以  # 开头的预处理指令，如  \n#include、#define 等，处理后的代码被保存为⼀个扩展名为  .i  的中间⽂件  → 编译阶段将预\n处理后的代码转换成汇编代码  → 汇编阶段将汇编代码翻译成机器码或⽬标代码 , ⽣成的⽬标代码\n通常保存为扩展名为  .o 的⽂件  → 链接阶段将多个⽬标⽂件以及可能的库⽂件组合成⼀个可执\n⾏⽂件或库。最终⽣成的可执⾏⽂件通常具有扩展名为  .exe 的执⾏⽂件。\n3. 简要说明动态链接库，静态链接库的区别\n静态链接库：静态库在编译时被链接到可执⾏⽂件中。  静态库以  .lib（ Windows ）或  .a\n（ Unix/Linux ）等格式存在。在编译时被复制到可执⾏⽂件中，使得可执⾏⽂件变得较⼤。\n动态链接库：动态库在运⾏时被加载到内存中，⽽不是在编译时链接到可执⾏⽂件中。主要以  .dll\n（ Windows ），但代码和数据不被复制到可执⾏⽂件中，⽽是在程序运⾏时由操作系统动态加载到\n内存。\n4. 简要说明  vector ， list 的区别\nvector： 使⽤动态数组实现，元素在内存中是连续存储的。\nvector： 提供随机访问能⼒，通过索引可以直接访问元素。\nvector： 内存分配连续，对于⼤量的元素，可能导致频繁的重新分配和拷⻉，但在访问元素时\n效率⾼。\nvector： 插⼊或删除元素可能导致其他元素的移动，特别是在中间或开头位置。\nlist： 使⽤双向链表实现，元素在内存中不⼀定是连续存储的。\nlist： 不⽀持随机访问，必须通过迭代器进⾏顺序访问。\nlist： 插⼊和删除元素更为⾼效，因为只需要调整相邻元素的指针，不需要移动实际的元素。"
      },
      {
        "title": "第 2 页",
        "transcript": "卓 胜 私 募 - 笔 试  耿 ⽂ 博\n2\nlist： 链表结构在插⼊和删除操作上更为⾼效，可能占⽤更多的内存，并且在内存中的元素分\n布⽐较分散。\n1. vector.resize(n) 和  vector.reverse(n) 的区别\nresize 修改  vector 的⼤⼩，可能会改变其中元素的值，⽽且会在需要的情况下添加或删除\n元素。\nreserve 仅仅是预留存储空间，并不改变  vector 的⼤⼩，不会影响其中的元素值。\n5. 实现模块，输⼊  vector<int> 返回不包括偶数的  vector\nvector<int> filterOddNumbers(const vector<int>& inputVector) {\n    vector<int> resultVector;\n    for (int num : inputVector) {\n        if (num & 1)\n            resultVector.emplace_back(num);\n    }\n    return resultVector;\n}\n1. 代码不⾜在哪⼉，进⼀步改进\n可以使⽤函数模板使函数适⽤于不同类型的元素。\n6. map ， unordered_map 的区别\nmap 底层使⽤红⿊树（ Red-Black Tree ）实现。由于是⼀种⾃平衡⼆叉搜索树，所以  map ⾥保持元\n素有序。按键的⽐较结果进⾏排序，因此迭代器遍历时的顺序是有序的。 Query time complexity： \nO(log n) 。由于是平衡⼆叉搜索树，查找和插⼊的时间复杂度较稳定unordered_map 底层使⽤使⽤哈\n希表（ Hash Table ）实现，所以不保证元素的任何顺序。迭代器遍历时的顺序可能是⽆序的。哈希\n表允许以常数时间复杂度进⾏平均查找、插⼊和删除操作。 Query time complexity： 平均情况下为 \nO(1) ，最坏情况下为  O(n) 。哈希冲突可能导致查找时间复杂度的增加。\n7. 写法区别\na. 第⼀种使⽤  Operator [] 如果  key 不在  imap 中，imap[key] 会默认插⼊⼀个具有默认值的键值\n对，然后将这个值与 0 ⽐较。这样的写法会在  imap 中插⼊  key 对应的值，这可能不是你想要的\n⾏为，不会跑出异常。如果你只是想检查键是否存在⽽不插⼊新键值对，可能不够安全。\nb.  第⼆种写法  find 函数，find 函数会返回⼀个指向键为  key 的元素的迭代器，如果键不存在，\n则返回  imap.end()。这种写法不会修改  imap，只是进⾏查找操作。因此，如果你只是想检查键\n是否存在，⽽不想在  imap 中插⼊新键值对，使⽤  find 则更加安全。\n编程进阶\n1. quick sort 和  merge sort 的区别"
      },
      {
        "title": "第 3 页",
        "transcript": "卓 胜 私 募 - 笔 试  耿 ⽂ 博\n3\nQuick Sort 思想是分治，通过选择⼀个  privot ，将数组划分为两个⼦数组，分别对⼦数组进⾏排\n序，然后合并⼦数组得到最终排序结果。⼀般性都是先选取  privot ，将数组分为⼩于 privot 和⼤于 \nprivot 的两个⼦数组，递归地对⼦数组进⾏排序，相应的不是很稳定。因为在分区过程中，相同元素\n的相对位置可能会改变。\nAvg Time Complexity： O(n log n)\nworst case 最差情况发⽣在每次选择的  privot 都是当前⼦数组中的最⼩或最⼤值，会退化到类似\n冒泡排序  → O(n^2)\nSpace Complexity： O(log n)\nMerge Sort: 思想是分治也是分治，将数组划分为两个⼦数组，分别对⼦数组进⾏排序，然后将排\n序好的⼦数组合并。不断将数组⼆分，对左右两部分分别排序，最后合并两个有序的⼦数组。相⽐\n较  Quick Sort 来说⽐较稳定，相同元素的相对位置在排序过程中不会改变。\nAvg Time Complexity ：  O(n log n) \nSpace Complexity：O(n) 需要额外的空间来存储合并过程中的临时数组。\n2. STL 是否线程安全\nC++ 标准库（ STL ）并没有要求是线程安全的。\n如果多个线程同时访问或修改 STL 容器或其他 STL 组件，没有任何保证会防⽌数据竞争或其他并\n发问题，可以使⽤  Mutex 或者  Parallel computing 。\n3. 多线程在什么情况下需要加锁，什么情况不需要加锁\n需要加锁的情况：\n1. 并发读写：\n当多个线程同时读取并修改共享数据时，需要使⽤  mutex来保护共享数据的⼀致性。\n2. 条件变量的等待和通知：\n当线程需要等待某个条件满⾜时，通常需要使⽤条件变量  condition_variable以及   \nmutex。等待和通知过程必须在互斥锁的保护下进⾏。\n3. 事务操作：\n当多个操作需要作为⼀个事务来执⾏时，需要使⽤互斥锁以确保这个事务的完整性。\n可能不需要加锁的情况：\n1. 只读操作：\n如果所有线程只是读取⽽不修改共享数据，通常不需要加锁。多个线程可以同时进⾏读\n取操作⽽不会相互影响。\n2. 线程本地数据：\n如果每个线程都拥有⾃⼰的私有数据，⽽不共享给其他线程，那么不需要加锁。"
      },
      {
        "title": "第 4 页",
        "transcript": "卓 胜 私 募 - 笔 试  耿 ⽂ 博\n4\nLinux 基础\n1. grep chomd chown crontab 作⽤\na. grep：是⼀个⽤于在⽂本中搜索匹配模式的命令。\nb. chmod：它允许⽤户设置⽂件的读、写、执⾏权限。\nc. chown：是⽤于更改⽂件或⽬录所有者的命令。它允许⽤户改变⽂件或⽬录的所有者，通常与  \nchmod 结合使⽤，以便更改⽂件的权限和所有者。\nd. crontab：是⽤于管理定时任务的命令。它允许⽤户创建、编辑和删除定期运⾏的任务。\n应⽤问题\n#include <iostream>\n#include <sstream>\n#include <unordered_map>\n#include <vector>\n#include <mutex>\n#include <iomanip>\nusing namespace std;\nstruct TickerInfo {\n    vector<double> prices;\n    double sum = 0.0;\n};\nunordered_map<string, TickerInfo> tickerData;\nmutex dataMutex;\nvoid processTickerData(const char* data) {\n    lock_guard<mutex> lock(dataMutex);\n    \n    string input(data);\n    istringstream iss(input);\n    \n    string ticker;\n    double price;\n    \n    if (getline(iss, ticker, ',') && iss >> price) {\n        if (tickerData.find(ticker) == tickerData.end()) {\n            tickerData[ticker] = TickerInfo();\n        }\n        \n        auto& tickerInfo = tickerData[ticker];\n        \n        if (tickerInfo.prices.size() >= 20) {\n            tickerInfo.sum -= tickerInfo.prices.front();\n            tickerInfo.prices.erase(tickerInfo.prices.begin());\n        }\n        \n        tickerInfo.prices.push_back(price);\n        tickerInfo.sum += price;"
      },
      {
        "title": "第 5 页",
        "transcript": "卓 胜 私 募 - 笔 试  耿 ⽂ 博\n5\n        double avgPrice = tickerInfo.sum / tickerInfo.prices.size();\n        cout << \"Ticker: \" << ticker << \", Average Price: \" << fixed << setprecision(2) << avgPrice << endl;\n    }\n}\nint main(int argc, const char * argv[]) {\n    processTickerData(\"600000,10.0\");\n    processTickerData(\"600000,12.0\");\n    processTickerData(\"600000,8.0\");\n    \n    return 0;\n}"
      }
    ],
    "sourceFiles": [
      "上海卓胜私募/卓胜私募.pdf"
    ],
    "context": "资料日期不等于实际考试日期；无法确定的场次时间未补造。"
  },
  {
    "id": "bridge-investment-written-questions",
    "company": "武汉布奇科技 / Bridge Investment Partner",
    "type": "笔试",
    "round": "英语与数学笔试题",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "武汉布奇科技 / Bridge Investment Partner · 英语与数学笔试题",
    "summary": "完整保留英文题面、数值计算、概率统计与优化题。",
    "tags": [
      "概率统计",
      "数值计算"
    ],
    "sections": [
      {
        "title": "原始文档",
        "paragraphs": [
          "以下正文按 PDF 页序提取；公式、图表和代码排版请对照原始 PDF。原有作答未经正确性审校。"
        ],
        "links": [
          {
            "label": "下载原始题面 / 资料",
            "path": "interview-sources/bridge-investment-written-questions/source.pdf"
          }
        ]
      },
      {
        "title": "第 1 页",
        "transcript": "English: [ About 30 minutes] \n• Write a story about yourself.  \nMath: [ About 60 minutes] \n• Please complete at least 5 questions.  \n• There are 30 questions in total. Choose at least one question from each group.   \n• Some questions have sub questions, which will be counted as extra points. \nGroup 1:  \n1. Prove (1 + 𝑥)n ≥ 1 + 𝑛𝑥 for all 𝑥 > − 1 and for all integers 𝑛 ≥ 2. \n2. Describe two situations where Taylor series can be applied. \n3. Find the shortest distance from the point (1, 0, −2) to the plane 𝑥 + 2𝑦 + 𝑧 = 4. \n4. How do you approximate 𝑒x and ln x? How big is the error of approximation? \n5. A rectangular box with no top is to be made from 12 𝑚2 of cardboard. Find the maximum \nvolume of such a box. \n6. 𝐴, 𝐵, 𝐶, 𝐷, 𝐸, 𝐹, 𝐺, 𝐻 and 𝐼 are the nine distinct integers taking values between one to nine \n(not necessarily in order). They satisfy the following constraints:  \n𝐴 + 𝐵 + 𝐶 + 𝐷 = 20 \n𝐵 + 𝐶 + 𝐷 + 𝐸 + 𝐹 = 20 \n𝐷 + 𝐸 + 𝐹 + 𝐺 + 𝐻 = 20 \n𝐹 + 𝐺 + 𝐻 + 𝐼 = 20 \nSolve for 𝐴, 𝐵, 𝐶, 𝐷, 𝐸, 𝐹, 𝐺, 𝐻 and 𝐼. \nGroup 2:  \n7. How do you generate two 𝑁(0, 1) (standard normal) random variables with correlation 𝑝 if \nyou have a random generator for standard normal distribution? \n8. Write an algorithm to carry out numerical integration. How might you optimize the \nalgorithm? \n9. Describe a root-finding algorithm to solve 𝑓(𝑥) = 0 when 𝑓(𝑥) is a differentiable function. Can \nyou provide an algorithm when 𝑓(𝑥) is continuous, but no longer differentiable everywhere? \nWhat about for any function 𝑓(𝑥)? \n10. How many people do we need in a class to ensure the probability that at least two people \nhave the same birthday is more than 50%? (Assume there are 365 days a year.)"
      },
      {
        "title": "第 2 页",
        "transcript": "11. How many degrees are there in the angle between the hour and minute hands of a clock \nwhen the time is a quarter past three? \n12. Explain the general process of least-squares linear regression. \nGroup 3:  \n13. Given the matrix \n \na. Find eigenvalue(s) and corresponding eigenvector(s) to matrix 𝐴.  \nb. Find a matrix M, such that 𝐴 = 𝑀2.  \nc. Find a matrix C, such that 𝐴 = 𝐶T𝐶. \n14. Consider the matrix \n \nFind the 𝑆𝑉𝐷 of the matrix 𝐴 = 𝑈ΣVT. \n15. For 𝑋 in 𝑅3, let . Write this quadratic form as \n𝑋T𝐴𝑋. \n16. What is the rank for 𝐾𝐾T, where 𝐾 is an n * m matrix? \n17. Find two numbers whose sum is 14, whose average is 2, and whose difference is 4. If that is \nnot possible, get as close as you can with the least-squares solution. \n18. Give examples, compare, and contrast probability experiments involving Bernoulli, Binomial, \nPoisson, and Gamma distributions. \nGroup 4:  \n19. Given the table of 6 observations below:"
      },
      {
        "title": "第 3 页",
        "transcript": "a. Construct the sample covariance matrix.  \nb. Find the principal components of the data. \n20. We have a container with 300 red balls and 600 blue balls. We mix the balls well and choose \none at random, with each ball being equally likely to be chosen. After each choice, we return \nthe chosen ball to the container and mix again. \na. What is the probability that the first n balls chosen are all blue?  \nb. Let 𝑁 be the number of blue balls chosen before the first red one. What is the 𝑃 (𝑁 = \n𝑛)? What are the mean and variance of 𝑁? Explain your answers using the formulae \n \nc. What is the probability that 𝑁 = 0 given that 𝑁 ≤ 2?  \nd. What is the probability that 𝑁 is an even number? \n21. A tourist decides between two plays, called “Good” (G) and “Bad” (B). The probability of the \ntourist choosing Good is 𝑃(𝐺) = 0.1. In addition, a tourist either “Likes” (L) the play or “dislikes” \n(D) the play. The probability the tourist likes a good play is 𝑃 (𝐿 | 𝐺) = 0.7 while disliking a bad \nplay is 𝑃 (𝐷 | 𝐵) = 0.8. \na. Draw a probability decision tree diagram to illustrate the choices.  \nb. Calculate and interpret 𝑃(𝐿).  \nc. If the tourist liked the play they chose, what is the probability they chose “Good”? \n22. A “triangular” random variable, 𝑋 has probability density function (pdf) \n \na. Calculate the mean and variance of 𝑋.  \nb. Suppose 𝑋1 and 𝑋2 are independent and identically distributed (i.i.d) copies of 𝑋 and \n𝑌 = 𝑋1 + 𝑋2 Find the pdf for 𝑌.  \nc. Calculate the mean and variance of 𝑌 without using the pdf found above.  \nd. Find 𝑃 (𝑌 > 1)."
      },
      {
        "title": "第 4 页",
        "transcript": "e. Suppose 𝑋1, 𝑋2, ..., 𝑋100 are i.i.d copies of 𝑋. Estimate 𝑃(𝑋1 + … + 𝑋100 > 34) using the \ncentral limit theorem. \n23. Suppose 𝑋 and 𝑌 have a joint pdf \n \na. Calculate 𝑃 (𝑋2 + 𝑌2 ≤ 1)  \nb. Calculate the marginal pdf of 𝑋.  \nc. What is the covariance of 𝑋 and 𝑌?  \nd. Find an event depending on only 𝑋 whose probability depends on Y . Use this to show \nthat 𝑋 and 𝑌 are not independent.  \ne. Write the joint PDF for 𝑈 = 𝑋2 and 𝑉 = 𝑌2. \nf. Calculate the covariance between 𝑋2 and 𝑌2. It may be simpler to do this independent \nof the above part. Use this to show 𝑋 and 𝑌 are not independent. \n24. You have a fair coin and you want to simulate an event that has probability 1/3, and another \nevent that has probability 2/3. How would you go about simulating these events? \nGroup 5 \n25. Give an example of a distribution with infinite variance.  \n26. We play a game: I pick a number n from 1 to 100. If you guess correctly, I pay you $n and \nzero otherwise. How much would you pay to play this game?  \n27. A company is holding a dinner for working members with at least one son. Mrs. Johnson, a \nmother with two children, is invited. What is the probability that both children are boys?  \n28. What is a positive-definite matrix? What properties does a positive-definite matrix have? \n29. If 𝑋 is 𝑁(µ, σ) and λ > 0, calculate the values of Ε(𝑋2) and Ε(eλX). \n30. The tables below display the multiple regression coefficient estimates when TV, radio, and \nnewspaper advertising budgets are used to predict product sales. In addition, extra information \nabout the model is provided."
      },
      {
        "title": "第 5 页",
        "transcript": "a. Using the first table, write down the regression model for the response variable sales.  \nb. Interpret the meaning of coefficient “0.189” in the above model.  \nc. In the first table, column 4 and row 3, the t-statistic equals 32.81. What is the meaning \nof this, and what is the underlying test? Write out the null and alternative hypothesis for \nthis test. What conclusion can you draw?  \nd. Estimate the confidence interval for the coefficient 0.189 for radio.  \ne. Interpret the meaning of 𝑅2 = 0.897.  \nf. How well does the model fit the data? Why do you think this is the case?  \ng. List assumptions for the classic multiple linear regression model.  \nh. Assume you are given the table below, which contains the correlation matrix for TV, \nradio, newspaper, and sales. Is your model in the first part still okay? Why do you think \nso? If so, how would you address this problem?"
      }
    ],
    "sourceFiles": [
      "武汉布奇科技 bridge investment partern/Interview Questions 20230712.pdf"
    ],
    "context": "资料日期不等于实际考试日期；无法确定的场次时间未补造。"
  },
  {
    "id": "causis-strategy-week1-assignment",
    "company": "燧石投资",
    "type": "笔试",
    "round": "策略实习 Week1 选题",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "燧石投资 · 策略实习 Week1 选题",
    "summary": "完整保留策略实现、回测数据要求与报告评估标准。",
    "tags": [
      "量化策略",
      "回测",
      "Python"
    ],
    "sections": [
      {
        "title": "原始文档",
        "paragraphs": [
          "以下正文按 PDF 页序提取；公式、图表和代码排版请对照原始 PDF。原有作答未经正确性审校。"
        ],
        "links": [
          {
            "label": "下载原始题面 / 资料",
            "path": "interview-sources/causis-strategy-week1-assignment/source.pdf"
          }
        ]
      },
      {
        "title": "第 1 页",
        "transcript": "燧石投资管理（武汉）有限公司\n策略实习 Week1 选题\n1. 策略研究方向选题\n1.1 期货类\n 选题 1：商品期货趋势类策略，日线级别低频策略。\n选题说明和要求：\n1) 策略实现：完全用 Python 实现，代码要求符合《Python 策略代码写法规范》。\n2) 策略信号指标：可参考《Trading System And Methods》Chapter 6-13。\n3) 策略测试标的和品种：商品期货合约，具体测试内容如下：\n 单品种测试：要求选择螺纹钢 rb，可使用连续合约。暂时可不用考虑标的的实际\n可交易性（如连续合约）、合约换月等实际交易细节。回测起始时间自 2010/1/1 至今。\n 全品种测试：要求对策略研究_《商品期货数据》中的 36 个活跃品种进行全品种\n测试。\n4) 数据要求：单品种测试，必须使用 causis_api;全品种测试数据可从《本地数据下载》\n中 week1 文件夹提取。调用方法见《商品期货活跃品种示例》。"
      },
      {
        "title": "第 2 页",
        "transcript": "燧石投资管理（武汉）有限公司\n5) 报告要求：\n 使用指定报告模板（详见 AM 投研文档），必须严格按照模板要求，分析撰写内\n容包含策略思想，指标计算，交易方式描述，模拟仓位信号图，仓位管理方法（如有），\n敏感性分析。\n 报告相关图例（模拟仓位信号图，敏感性分析热力图 etc），要求使用 Python 实\n现。\n 格式排版等报告可阅读性要求符合《投研报告撰写规范》。\n本选题所考察目标：\n1）工作完成度，是指从数据处理-策略构建-回测-策略分析-报告撰写这一整套策略\n研究流程是否完整；\n2）对所实现的工作内容、过程和结果是否有深度思考和理解。"
      },
      {
        "title": "第 3 页",
        "transcript": "燧石投资管理（武汉）有限公司\n报告中必须包含的内容：\n1）买入/卖出信号模拟图\n2）仓位模拟图\n3）PNL 曲线图\n4）策略性能指标表：包含夏普，卡玛，年化收益，最大回撤，波动率，最大回撤时\n间，最大回撤修复时间\n5）参数敏感性分析热力图"
      },
      {
        "title": "第 4 页",
        "transcript": "燧石投资管理（武汉）有限公司\n 选题 2：商品期货套利类策略，日线级别低频策略。\n选题说明和要求：\n1) 策略实现：完全用 Python 实现，代码要求符合《Python 策略代码写法规范》。\n2) 策略信号指标：可参考《Trading System And Methods》Chapter 6-13。\n3) 策略测试标的和品种：商品期货合约，具体测试内容如下：\n 配对品种测试：如选择实现跨品种套利策略类型，配对品种可不限于螺纹钢，但\n需要描述清楚配对选择逻辑。\n4) 数据要求：单品种测试，必须使用 causis_api;全品种测试数据可从《本地数据下载》\n中 week1 文件夹提取。调用方法见《商品期货活跃品种示例》。\n5) 报告要求：\n 使用指定报告模板（详见 AM 投研文档），必须严格按照模板要求，分析撰写内\n容包含策略思想，指标计算，交易方式描述，模拟仓位信号图，仓位管理方法（如有），\n敏感性分析。\n 报告相关图例（模拟仓位信号图，敏感性分析热力图 etc），要求使用 Python 实\n现。"
      },
      {
        "title": "第 5 页",
        "transcript": "燧石投资管理（武汉）有限公司\n 格式排版等报告可阅读性要求符合《投研报告撰写规范》。\n本选题所考察目标：\n1）工作完成度，是指从数据处理-策略构建-回测-策略分析-报告撰写这一整套策略\n研究流程是否完整；\n2）对所实现的工作内容、过程和结果是否有深度思考和理解。\n报告中必须包含的内容：\n1）买入/卖出信号模拟图（包含价差构造方式）\n2）仓位模拟图\n3）PNL 曲线图\n4）策略性能指标表：包含夏普，卡玛，年化收益，最大回撤，波动率，最大回撤时\n间，最大回撤修复时间\n5）参数敏感性分析热力图"
      },
      {
        "title": "第 6 页",
        "transcript": "燧石投资管理（武汉）有限公司\n1.2 股票类\n 选题 3：机器学习策略，日线级别低频策略。\n选题说明和要求：\n1) 策略实现：完全用 Python 实现，代码要求符合《Python 策略代码写法规范》。\n2) 策略模型：\n 研报《华泰人工智能》系列 1 到系列 9，从广义线性模型、支持向量机、朴素贝\n叶斯、随机森林、Boosting、全连接神经网络、循环神经网络、K 最近邻、聚类 9 种\n模型中选择一种算法进行股票策略复现。\n3) 测试要求：在进行研报算法复现时，可依据目前能从 causis_api 获取的数据类型，对\n研报中所涉及因子、在现有数据资源内选择一个方向进行策略复现。必须完成因子计\n算、数据预处理、模型训练、策略构建、分组回测，报告格式参考选题 3 报告模板。\n最终结果在 python 代码中需要使用 pandas 库，以“指标-信号-仓位-开仓价格-收\n益”等标签以日期表格的形式输出，并在报告中展示部分截取的表格片段。\n本选题所考察目标：1）工作完成度，是指从数据处理-策略构建-回测-策略分析-\n报告撰写这一整套策略研究流程是否完整；2）对所实现的工作内容、过程和结果是否有"
      },
      {
        "title": "第 7 页",
        "transcript": "燧石投资管理（武汉）有限公司\n深度思考和理解。\n本选题并不要求对所选研报全部内容进行完整复现，在具体复现内容选择上，需要\n考虑实现数据资源、计算效率。\n4) 报告要求：\n 使用指定报告模板（详见 AM 投研文档），必须严格按照模板要求，分析撰写内\n容包含策略思想，指标计算，交易方式描述，模拟仓位信号图，仓位管理方法（如有），\n敏感性分析。\n 报告相关图例（模拟仓位信号图，敏感性分析热力图 etc），要求使用 Python 实\n现。\n 格式排版等报告可阅读性要求符合《投研报告撰写规范》。"
      },
      {
        "title": "第 8 页",
        "transcript": "燧石投资管理（武汉）有限公司\n2. 算法方向选题\n2.1 算法类\n 选题 4：算法转译（凸优化算法问题）。\n选题说明和要求：\n1) 任务内容：将已有的 Python 代码（凸优化算法）转译为 C#版本，用 C#实现该代码的\n功能，要求：\n C# 版本代码输出结果与 Python 版本一致。\n 运算时间在 1 分钟以内。\n2) 代码\n 见选题 4 报告模板\n3) 报告要求：\n 使用指定报告模板（详见 AM 投研文档），必须严格按照模板要求，分析撰写内\n容包含策略思想，指标计算，交易方式描述，模拟仓位信号图，仓位管理方法（如有），\n敏感性分析。\n 报告相关图例（模拟仓位信号图，敏感性分析热力图 etc），要求使用 Python 实\n现。"
      },
      {
        "title": "第 9 页",
        "transcript": "燧石投资管理（武汉）有限公司\n 格式排版等报告可阅读性要求符合《投研报告撰写规范》。"
      },
      {
        "title": "第 10 页",
        "transcript": "燧石投资管理（武汉）有限公司\n2.2 代码性能优化类\n 选题 5：策略代码执行效率优化。\n选题说明和要求：\n1) 任务内容：\n 将指定的两个策略代码，转换成步进执行的方式：\n原策略代码：1）ATBW003011，为分钟线策略;2）ATBW004001，为日线策略.\n原代码使用了整个回测周期内的连续行情数据作为输入，一次性计算出来交易信号的\n时间序列，再用此交易信号序列推导出交易结果。\n转换后：步进式执行，与实盘执行方式一致，即每分钟或每日执行。\n要求:转换前后策略代码交易信号和交易结果一致。\n 对比两种执行方式的效率，找到执行速度慢的原因，并提出可能的改进方案。\n2) 代码要求：\n 每次执行要求用到最少的数据，以最快的速度执行，并且每次执行的时候都是独\n立的动作，即某次信号计算的时候不应该用到上次计算的结果。\n 改进后的代码格式定义为 LoopTest。分钟线和日线二选一，时间充裕者可以都尝\n试去做。"
      },
      {
        "title": "第 11 页",
        "transcript": "燧石投资管理（武汉）有限公司\n本题考察目标是编码能力和调试能力，侧重点在代码质量。\n3) 报告要求：\n 使用指定报告模板（详见 AM 投研文档），必须严格按照模板要求，完成报告各\n部分内容分析撰写。\n 格式排版等报告可阅读性要求符合《投研报告撰写规范》。\n 相关图例要求使用 Python 实现。"
      },
      {
        "title": "第 12 页",
        "transcript": "燧石投资管理（武汉）有限公司\n3. 其他\n1) 电子版资料：《Trading System And Methods》， 《华泰人工智能》，《期货基本面\n量化》，《策略代码优化》，《算法转译》请在“AM_投研管理_文件下载_Files_投\n研资料_学习资料/通用研报”中查找。\n2) 选题范围：请在上述选题中任选其一。\n3) Week1 安排：\n 周一上午 9：30 ，Week1 开题会。开题日如遇节假日延期，则提交日和汇报日同\n步顺延。\n 周五下午 16：00，Week1 关门时间：需要按照投研文档《策略提交》流程说明要\n求，在 AM 上进行策略提交：\n 提交：投研报告.pdf, python 策略代码.txt。上述两项均按要求完成提交，并通\n过路演考核，方认为 Week1 通过。\n 周五晚 19：00，Week1 视频路演汇报,15 分钟/人。\n 周一至周四每日 18：30 在钉钉会议进行在线沟通答疑，跟进进度，请准时参会。\n4) 其他提示\n 请仔细查阅投研工作手册相关内容，请每日关注“更新日志”中文档更新情况；\n 提交时间以 AM 系统提交时间戳为准，超时即认为测试不通过。"
      },
      {
        "title": "第 13 页",
        "transcript": "燧石投资管理（武汉）有限公司\n 策略实现过程中遇到技术性问题, 请在微信群中联系策略答疑人员。\n AM 权限、策略提交过程遇到技术问题，请在微信群中联系技术答疑人员。"
      }
    ],
    "sourceFiles": [
      "燧石投资 笔试/2023 Week1选题.pdf"
    ],
    "context": "资料日期不等于实际考试日期；无法确定的场次时间未补造。"
  },
  {
    "id": "rnc-ctp-practical-written",
    "company": "RNC",
    "type": "笔试",
    "round": "C++ 行情服务实践笔试",
    "date": "2023 年",
    "time": "",
    "duration": "",
    "title": "RNC · C++ 行情服务实践笔试",
    "summary": "CTP 合约缓存、行情订阅、异步 CSV 写入与 RESTful 查询接口。",
    "tags": [
      "C++",
      "CTP",
      "行情系统",
      "网络"
    ],
    "sections": [
      {
        "title": "完整实践题面",
        "transcript": "C++ 招聘实践题, 2023.10.17\n-----------------------------------------------------------------------\n1、登录 simnow，https://www.simnow.com.cn，注册帐户，下载 API \n2、在 gitee 创建代码库，存储代码，注意正确使用 git 功能\n3、在收到需求后，要求1周内完成业务开发及测试\n\n\n需求描述：\n1、开发环境，linux，c++\n2、服务端开发\n    a) 通过 API 进行登录，查询全部合约信息，使用缓存存储\n    b) 通过 API，订阅 IC, IF, IH, IM 品种合约行情，使用队列存储；使用缓存存储\n    c) 创建写文件线程，从步骤 b 队列获取，按合约代码进行存储，数据格式 csv\n    d) 创建 restful 服务，对外提供2个查询接口，分别获取品种、合约行情数据\n3、客户端开发\n    a）创建 c++ api，同服务端进行 restful 接口调用\n    b）查询合约品种接口，获取结果\n    c）查询合约行情接口，获取结果\n\n\n备注：\n1、注意对异常正确处理、日志记录\n2、对性能进行记录、测试、优化作为加分项\n3、simnow 网站仅在工作日开放"
      },
      {
        "title": "原始实现说明",
        "transcript": "# RNC 笔试-耿文博\n\n## 服务端开发\n\n### a) 通过 API 进行登录，查询全部合约信息，使用缓存存储\n\n服务端使用 CTPService 类通过 CTP API 进行登录，查询所有合约信息，并将结果缓存起来。\n\n### b) 通过 API，订阅 IC, IF, IH, IM 品种合约行情，使用队列存储；使用缓存存储\n\n使用 MarketService 类通过 CTP API 订阅 IC, IF, IH, IM 品种合约行情，将行情数据存储到队列和缓存中。\n\n### c) 创建写文件线程，从步骤 b 队列获取，按合约代码进行存储，数据格式 CSV\n\n服务端创建一个线程，从行情队列获取数据，并按合约代码将数据以 CSV 格式存储到文件中，使用 `FileWriter` 类实现。`FileWriter` 类用于将行情数据按 CSV 格式写入文件。每次服务端接收到新的行情数据后，会调用 `FileWriter` 将其写入到文件中。\n\n### d) 创建 RESTful 服务，对外提供2个查询接口，分别获取品种、合约行情数据\n\n使用 RestfulService 类创建 RESTful 服务，提供两个查询接口，分别用于获取品种数据和合约行情数据。\n\n## 客户端开发\n\n### a) 创建 C++ API，同服务端进行 RESTful 接口调用\n\n客户端使用 RestfulService 类创建 C++ API，通过 RESTful 接口调用服务端的功能。\n\n### b) 查询合约品种接口，获取结果\n\n客户端调用 C++ API 中的查询合约品种接口，获取服务端返回的品种数据。\n\n### c) 查询合约行情接口，获取结果\n\n客户端调用 C++ API 中的查询合约行情接口，获取服务端返回的合约行情数据。\n\n## 参考资料\n\n1. https://blog.csdn.net/frank19940117/article/details/125805226?spm=1001.2101.3001.6650.8&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-8-125805226-blog-111473316.235%5Ev39%5Epc_relevant_anti_vip&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-8-125805226-blog-111473316.235%5Ev39%5Epc_relevant_anti_vip&utm_relevant_index=9\n2. https://blog.csdn.net/feikudai8460/article/details/120483155?spm=1001.2101.3001.6650.4&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-4-120483155-blog-124994132.235%5Ev39%5Epc_relevant_anti_vip&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-4-120483155-blog-124994132.235%5Ev39%5Epc_relevant_anti_vip&utm_relevant_index=9\n3. https://blog.csdn.net/syealfalfa/article/details/124994132?spm=1001.2101.3001.6650.10&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-10-124994132-blog-119211673.235%5Ev39%5Epc_relevant_anti_vip&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-10-124994132-blog-119211673.235%5Ev39%5Epc_relevant_anti_vip&utm_relevant_index=18\n4. https://blog.csdn.net/anshare/article/details/106839040?spm=1001.2101.3001.6650.4&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-4-106839040-blog-125805226.235%5Ev39%5Epc_relevant_anti_vip&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-4-106839040-blog-125805226.235%5Ev39%5Epc_relevant_anti_vip&utm_relevant_index=9"
      }
    ],
    "sourceFiles": [
      "RNC_笔试_Wenbo/c++ 实践题(2).txt",
      "RNC_笔试_Wenbo/RNC 笔试-耿文博.md"
    ],
    "context": "题面标注 2023.10.17，实际作答日期未记录；保留原始题目与实现说明。"
  },
  {
    "id": "uber-vo-code-records",
    "company": "Uber",
    "type": "面试",
    "round": "VO 算法代码记录",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "Uber · VO 算法代码记录",
    "summary": "按原目录保留算法实现，题面与其他场次信息待补充。",
    "tags": [
      "C++",
      "算法"
    ],
    "sections": [
      {
        "title": "记录说明",
        "paragraphs": [
          "源文件仅保存了算法代码，没有完整场次过程、时间或面试结果。以下按原文件保留，不补造题面和轮次细节。"
        ]
      },
      {
        "title": "MapSum",
        "codeBlocks": [
          {
            "label": "MapSum.cpp",
            "code": "//\n//  MapSum.cpp\n//  test\n//\n//  Created by Wenbo Geng on 9/5/23.\n//\n\n#include <stdio.h>\n#include <string>\nusing namespace std;\n\n/*方法1: 哈希表 模拟前缀树，没有去找前缀直接把前缀放在还哈希表里*/\n\nclass MapSum {\npublic:\n    MapSum() {}\n    \n    void insert(const string& key, int val) {\n        int inc = val;\n        if (vals_.count(key)) {// 存在更新他的值\n            inc -= vals_[key]; // 新的值和旧的值的dif\n        }\n        vals_[key] = val; // 不存在的话\n        for (int i = 1; i <= key.length(); ++i) // 枚举\n            sums_[key.substr(0,i)] += inc; // substr 取出他的prefix\n    }\n    \n    int sum(const string& prefix) {\n        return sums_[prefix]; // O(1) 求出所有prefix 的值\n    }\nprivate:\n    unordered_map<string, int> vals_; // 存 key 和 当前的值\n    unordered_map<string, int> sums_; // prefix 和 sum\n};\n/**\n * Your MapSum object will be instantiated and called as such:\n * MapSum* obj = new MapSum();\n * obj->insert(key,val);\n * int param_2 = obj->sum(prefix);\n */\n\n\n/*方法2: 前缀树，每个节点之描述了一个字符*/\n\nclass MapSum {\npublic:\n    /** Initialize your data structure here. */\n    MapSum() {}\n    \n    void insert(string key, int val) {\n        int inc = val - vals_[key]; //dif 新的值和旧的值 C++ key 不存在的话会返回默认值 int 默认值 0\n        Trie* p = &root; // 指针指向root\n        for (const char c : key) { // 遍历key 里所有字符\n            if (!p->children[c]) // root 节点 children里没有的字符话 new出来\n                p->children[c] = new Trie();\n            p->children[c]->sum += inc; // sum += dif\n            p = p->children[c]; // 指针指向children字符 前缀树中往下走一格走到新的节点\n        }\n        vals_[key] = val; // 哈希表里的key 和 pair 更新\n    }\n    \n    int sum(string prefix) {\n        Trie* p = &root; // 指针指向root\n        for (const char c : prefix) { // 遍历所有字符\n            if (!p->children[c]) return 0; // 没有匹配的\n            p = p->children[c]; // 指针指向children那个节点\n        }\n        return p->sum; // 找到前缀的节点 app -> a -> p -> p 返回sum\n    }\nprivate:\n    struct Trie {\n        Trie():children(128, nullptr), sum(0){} // 128个节点假设是阿斯克码\n        ~Trie() { // 析构 节点new 出来没有删掉 内存泄漏 动态分配内存一定要删除\n            for (auto child : children) // 遍历所有的children 有的话就删掉\n                if (child) delete child;\n            children.clear();\n        } // 定义了析构函数删除children的时候 会自动递归会删除children的children\n        vector<Trie*> children; // 子节点 类本身的指针\n        int sum;\n    };\n    \n    Trie root; // dummy root 空字符\n    unordered_map<string, int> vals_; // key -> val 当前值 string到val 的mapping\n};\n/**\n * Your MapSum object will be instantiated and called as such:\n * MapSum* obj = new MapSum();\n * obj->insert(key,val);\n * int param_2 = obj->sum(prefix);\n */"
          }
        ]
      },
      {
        "title": "restoreIpAddresses",
        "codeBlocks": [
          {
            "label": "restoreIpAddresses.cpp",
            "code": "//\n//  restoreIpAddresses.cpp\n//  test\n//\n//  Created by Wenbo Geng on 9/5/23.\n//\n\n#include <stdio.h>\n#include <iostream>\n\nusing namespace std;\n\n/*\n    lc 93:  把这道题理解成3个点的组合，就跟77题一样\n            当前思路是插入3个点，插入之后看看IP是否合法，这个是当前插入点的索引\n \n    枚举选哪个\n \n */\n\nclass Solution {\npublic:\n    vector<string> restoreIpAddresses(string s) {\n        vector<string> ans;\n        string ip;\n        function<void(string, string, int)> dfs = [&](const string s, const string ip, int d) {\n            int l = (int)s.length();\n            if (d == 4) {\n                if (l == 0) {\n                    ans.emplace_back(ip);\n                    return;\n                }\n            }\n            for (int i = 1; i <= min(3, s[i] == '0' ? 1 : l); ++i) {\n                string ss = s.substr(0, i);\n                if (stoi(ss) > 255 && i == 3)\n                    return;\n                dfs(s.substr(i), ip + (d == 0 ? \"\" : \".\") + ss, d + 1);\n            }\n        };\n        dfs(s, ip, 0);\n        return ans;\n    }\n};"
          }
        ]
      }
    ],
    "sourceFiles": [
      "Uber 4轮VO/MapSum.cpp",
      "Uber 4轮VO/restoreIpAddresses.cpp"
    ]
  },
  {
    "id": "lanhu-round1-code-record",
    "company": "蓝湖",
    "type": "面试",
    "round": "一面算法代码记录",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "蓝湖 · 一面算法代码记录",
    "summary": "按原目录保留算法实现，题面与其他场次信息待补充。",
    "tags": [
      "C++",
      "算法"
    ],
    "sections": [
      {
        "title": "记录说明",
        "paragraphs": [
          "源文件仅保存了算法代码，没有完整场次过程、时间或面试结果。以下按原文件保留，不补造题面和轮次细节。"
        ]
      },
      {
        "title": "Permeation",
        "codeBlocks": [
          {
            "label": "Permeation.cpp",
            "code": "//\n//  Permeation.cpp\n//  test\n//\n//  Created by Wenbo Geng on 9/5/23.\n//\n\n#include <stdio.h>\n#include <iostream>\n\n\nusing namespace std;\n\n/*\n lc 46 47 全排列I 全排列II\n \n 序列中包含了重复的数字，要求我们返回不重复的全排列\n \n 在考虑重复及剪枝条件的时候，我们考虑的是：当当前元素和前一个元素值相同（此处隐含这个元素的index>0），并且前一个元素还没有被使用过的时候，我们要剪枝\n 但实际，如果条件设为：并且前一个元素被使用过，我们要剪枝，其实也是可以的\n */\n\n\nclass Solution {\npublic:\n    vector<vector<int>> permuteUnique(vector<int>& nums) {\n        sort(begin(nums), end(nums));\n        vector<vector<int>> ans;\n        vector<int> used(nums.size());\n        vector<int> cur;\n        function<void(int)> dfs = [&] (int d) {\n            if (d == nums.size()) {\n                ans.push_back(cur);\n                return;\n            }\n            for (int i = 0; i < nums.size(); ++i) {\n                if (used[i]) continue;\n                if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) continue;\n                used[i] = 1;\n                cur.push_back(nums[i]);\n                dfs(d + 1);\n                cur.pop_back();\n                used[i] = 0;\n            }\n        };\n        dfs(0);\n        return ans;\n    }\n};"
          }
        ]
      }
    ],
    "sourceFiles": [
      "蓝湖1面/Permeation.cpp"
    ]
  },
  {
    "id": "ubiquant-oa-photos",
    "company": "九坤投资",
    "type": "笔试",
    "round": "OA 笔试",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "九坤投资 · OA 笔试",
    "summary": "位编码、邮箱正则、递归锁、结构体对齐与 relaxed 原子操作；题干和代码已转成文字。",
    "tags": [
      "OA",
      "笔试",
      "C++",
      "算法"
    ],
    "sections": [
      {
        "title": "选择题",
        "questions": [
          {
            "prompt": "第 1 题 · 存储容量：题干可辨识片段为“……存储容量，（ ）决定”。",
            "options": [
              "物理存储…… [字迹待核对]",
              "用户地址空间大小 [字迹待核对]",
              "操作系统文件系统 [字迹待核对]",
              "计算机地址字长"
            ],
            "note": "原照片失焦，题干和前三个选项不能可靠逐字恢复，保留可见片段。",
            "sourceReferences": [
              "IMG_1861.jpeg"
            ]
          },
          {
            "prompt": "第 2 题 · 在 Linux 系统中运行下列 fork 代码，输出次数是多少？",
            "code": "#include <unistd.h>\n#include <stdio.h>\n#include <stdlib.h>\nvoid test() {\n    // 原图：fork() && fork() || fork() ……；完整表达式待核对\n    printf(\"hello\");\n    exit(0);\n}\nint main() {\n    test();\n    return 0;\n}",
            "options": [
              "3",
              "4",
              "8",
              "以上都不对，输出次数是随机"
            ],
            "note": "fork 表达式右侧及 printf 字符串模糊，代码仅保留可辨识部分，不依据高亮选择推断答案。",
            "sourceReferences": [
              "IMG_1862.jpeg",
              "IMG_1863.JPG",
              "IMG_1864.jpeg"
            ]
          }
        ]
      },
      {
        "title": "填空题 · 并发与内存布局",
        "questions": [
          {
            "prompt": "第 1 题 · 阅读 MyGuard、f1、f2 的代码，写出编译执行时的输出。",
            "code": "struct MyGuard {\n    MyGuard(std::recursive_mutex& mutex) : l(mutex) {\n        l.lock();\n        std::cout << \"lock\" << std::endl;\n    }\n    ~MyGuard() {\n        l.unlock();\n        std::cout << \"unlock\" << std::endl;\n    }\n    std::recursive_mutex& l;\n};\nvoid f1(std::recursive_mutex& l) {\n    MyGuard guard(l);\n    std::cout << \"f1 run\" << std::endl;\n}\nvoid f2(std::recursive_mutex& l) {\n    MyGuard guard(l);\n    f1(l);\n    std::cout << \"f2 run\" << std::endl;\n}\nint main() {\n    std::recursive_mutex m;\n    f2(m);\n}",
            "note": "MyGuard 构造函数形参名模糊，以 mutex 标识该形参；保留引用、初始化和加解锁逻辑。题目包含 6 个输出填空。",
            "sourceReferences": [
              "IMG_1866.jpeg",
              "IMG_1869.jpeg",
              "IMG_1870.jpeg",
              "IMG_1871.jpeg",
              "IMG_1877.jpeg"
            ]
          },
          {
            "prompt": "第 2 题 · x86-64 Linux 中，结构体默认按成员类型对齐；__attribute__((packed)) 按字节紧排成员。写出以下程序的两行输出。",
            "code": "#include <stdio.h>\nstruct OrderInstructionA {\n    char InstructionType;\n    char AccountID[24];\n    char InstrumentID[15];\n    double Price;\n    char Direction;\n    char Offset;\n    int OrderKey;\n    int Volume;\n    char OrderType;\n};\nstruct OrderInstructionB {\n    char InstructionType;\n    char AccountID[24];\n    char InstrumentID[15];\n    double Price;\n    char Direction;\n    char Offset;\n    int OrderKey;\n    int Volume;\n    char OrderType;\n} __attribute__((packed));\nint main() {\n    printf(\"%ld\\n\", sizeof(struct OrderInstructionA));\n    printf(\"%ld\\n\", sizeof(struct OrderInstructionB));\n    return 0;\n}",
            "sourceReferences": [
              "IMG_1867.jpeg",
              "IMG_1868.jpeg",
              "IMG_1872.jpeg",
              "IMG_1873.jpeg",
              "IMG_1878.jpeg",
              "IMG_1879.jpeg",
              "IMG_1880.jpeg",
              "IMG_1881.jpeg"
            ]
          },
          {
            "prompt": "第 3 题 · std::memory_order_relaxed 不保证并行内存访问的执行顺序。x、y、r1、r2 初值均为 0，两个线程按以下代码运行。只考虑 C++ 内存模型，列出 r1、r2 的所有可能值。每种可能用两个数字表示，以空格分隔；不同可能另起一行。",
            "code": "std::atomic<int> y(0);\nstd::atomic<int> x(0);\nint r1 = 0, r2 = 0;\n// thread 1:\nr1 = y.load(std::memory_order_relaxed);\nx.store(r1, std::memory_order_relaxed);\n// thread 2:\nr2 = x.load(std::memory_order_relaxed);\ny.store(42, std::memory_order_relaxed);",
            "sourceReferences": [
              "IMG_1865.jpeg",
              "IMG_1876.jpeg"
            ]
          }
        ]
      },
      {
        "title": "编程题",
        "questions": [
          {
            "prompt": "第 1 题 · 将 Direction、Offset、Instrument 编码到一个 int 中。Direction 使用 bit 0，Offset 使用 bit 1–2，Instrument 使用其余 29 bit。完善三个 set API：Direction 的合法范围为 0–1，Offset 为 0–3，Instrument 为 0–1000000；合法输入设置对应位返回 0，非法输入返回 -1。输入依次为初始 value、direction、offset、instrument；输出依次为 check_val1、check_val2、check_val3、最终 value。示例输入：0、1、1、1；示例输出：0、1、3、11。",
            "code": "#include <iostream>\n#define DIRECTION_BITS_OFFSET 0x0\n#define OFFSET_BITS_OFFSET 0x1\n#define INSTRUMENT_BITS_OFFSET 0x3\n#define DIRECTION_BITS_MASK 0x1\n#define OFFSET_BITS_MASK 0x3\n#define INSTRUMENT_BITS_MASK 0x1FFFFFFF\n\nint get_Direction(int& value) {\n    return (value >> DIRECTION_BITS_OFFSET) & DIRECTION_BITS_MASK;\n}\nint get_Offset(int& value) {\n    return (value >> OFFSET_BITS_OFFSET) & OFFSET_BITS_MASK;\n}\nint get_Instrument(int& value) {\n    return (value >> INSTRUMENT_BITS_OFFSET) & INSTRUMENT_BITS_MASK;\n}\n// 合法输入修改对应 bit 并返回 0，非法输入返回 -1。\nint set_Direction(int& value, int new_direction) {\n    /* TODO */\n    return 0;\n}\nint set_Offset(int& value, int new_offset) {\n    /* TODO */\n    return 0;\n}\nint set_Instrument(int& value, int new_inst) {\n    /* TODO */\n    return 0;\n}\nint main() {\n    int input_val, input_direction, input_offset, input_instrument;\n    int check_val1, check_val2, check_val3;\n    std::cin >> input_val >> input_direction >> input_offset >> input_instrument;\n    check_val1 = input_val;\n    set_Direction(input_val, input_direction);\n    check_val2 = input_val;\n    set_Offset(input_val, input_offset);\n    check_val3 = input_val;\n    set_Instrument(input_val, input_instrument);\n    std::cout << check_val1 << std::endl;\n    std::cout << check_val2 << std::endl;\n    std::cout << check_val3 << std::endl;\n    std::cout << input_val << std::endl;\n    return 0;\n}",
            "sourceReferences": [
              "IMG_1839.JPG",
              "IMG_1840.JPG",
              "IMG_1841.JPG",
              "IMG_1842.JPG",
              "IMG_1843.JPG",
              "IMG_1849.jpeg",
              "WechatIMG129.jpg"
            ]
          },
          {
            "prompt": "第 2 题 · 写出匹配邮箱的正则表达式。名称和域名只允许英文字母、数字、英文句号 .、中划线 -、下划线 _；有且仅有一个 @；不允许非数字字母字符开头或结尾；不允许出现 .@ 或 @.。示例：\"ijkdsldja@qq.com\" → true；\",Tak/sd@jpp.cn\" → false。",
            "note": "照片中的正则语法表是题面附带参考；屏幕上的代码属于原作答草稿，未当作标准答案。",
            "sourceReferences": [
              "IMG_1844.jpeg",
              "IMG_1845.jpeg",
              "IMG_1846.jpeg",
              "IMG_1847.jpeg",
              "IMG_1848.jpeg",
              "IMG_1850.jpeg",
              "IMG_1851.jpeg",
              "WechatIMG180.jpg"
            ]
          }
        ]
      }
    ],
    "sourceFiles": [
      "九坤笔试/IMG_1839.JPG",
      "九坤笔试/IMG_1840.JPG",
      "九坤笔试/IMG_1841.JPG",
      "九坤笔试/IMG_1842.JPG",
      "九坤笔试/IMG_1843.JPG",
      "九坤笔试/IMG_1844.jpeg",
      "九坤笔试/IMG_1845.jpeg",
      "九坤笔试/IMG_1846.jpeg",
      "九坤笔试/IMG_1847.jpeg",
      "九坤笔试/IMG_1848.jpeg",
      "九坤笔试/IMG_1849.jpeg",
      "九坤笔试/IMG_1850.jpeg",
      "九坤笔试/IMG_1851.jpeg",
      "九坤笔试/IMG_1861.jpeg",
      "九坤笔试/IMG_1862.jpeg",
      "九坤笔试/IMG_1863.JPG",
      "九坤笔试/IMG_1864.jpeg",
      "九坤笔试/IMG_1865.jpeg",
      "九坤笔试/IMG_1866.jpeg",
      "九坤笔试/IMG_1867.jpeg",
      "九坤笔试/IMG_1868.jpeg",
      "九坤笔试/IMG_1869.jpeg",
      "九坤笔试/IMG_1870.jpeg",
      "九坤笔试/IMG_1871.jpeg",
      "九坤笔试/IMG_1872.jpeg",
      "九坤笔试/IMG_1873.jpeg",
      "九坤笔试/IMG_1876.jpeg",
      "九坤笔试/IMG_1877.jpeg",
      "九坤笔试/IMG_1878.jpeg",
      "九坤笔试/IMG_1879.jpeg",
      "九坤笔试/IMG_1880.jpeg",
      "九坤笔试/IMG_1881.jpeg",
      "九坤笔试/答案/WechatIMG129.jpg",
      "九坤笔试/答案/WechatIMG180.jpg"
    ],
    "context": "按原资料目录归属九坤投资。两道选择题的模糊片段已标注；其余可读题页合并续页。照片中的作答不代表正确答案。"
  },
  {
    "id": "qilin-oa-photos",
    "company": "启林投资",
    "type": "笔试",
    "round": "OA 笔试",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "启林投资 · OA 笔试",
    "summary": "三道文字版 OA：绳结平衡位置、多进程计算图、100–500 GB 文件缓存；保留原有配套代码资料。",
    "tags": [
      "OA",
      "笔试",
      "Python",
      "系统设计"
    ],
    "sections": [
      {
        "title": "编程与项目题",
        "questions": [
          {
            "prompt": "绳结的平衡位置：桌面有多个洞口，绳子从公共绳结 X 连到各洞口，再穿过洞口悬挂重物。假设绳子完全弹性，不造成能量损失，重物不垂到地面，忽略摩擦。所有重物重量相等，即 w₁ = w₂ = … = wₙ。输入洞口的坐标 positions，返回绳结 X 的坐标，四舍五入到 3 位小数。提示：能量越小越稳定，X 会在距离所有点最近的位置。示例输入：{\"positions\": [[0,1], [1,0], [1,2], [2,1]]}；输出：[1.0, 1.0]。",
            "code": "def compute_x(positions):\n    \"\"\"\n    :type positions: List[List[int]]\n    :rtype: List[int]\n    \"\"\"\n    # 请计算 X 的坐标并返回。\n    x, y = 0, 0\n    return [x, y]\n\nimport json, sys\nif __name__ == \"__main__\":\n    data = json.loads(\"\".join(sys.stdin.readlines()))\n    x = compute_x(data[\"positions\"])\n    print(x)",
            "note": "原模板的返回类型注释为 List[int]，按原样保留。照片中的均值、坐标中位数等尝试显示“解答错误 / 50%”，不作为标准解法。",
            "sourceReferences": [
              "IMG_17BB8F86-A39A-4C3F-AF50-3A98FA8847C3.jpeg",
              "IMG_4115.jpeg",
              "IMG_4116.jpeg",
              "IMG_4117.jpeg",
              "IMG_4118.jpeg",
              "IMG_4119.jpeg",
              "IMG_4125.JPG",
              "IMG_4126.JPG",
              "IMG_4127.JPG",
              "IMG_4128.JPG",
              "IMG_4129.JPG",
              "IMG_4130.JPG",
              "IMG_4131.JPG",
              "IMG_4132.JPG",
              "IMG_4133.JPG",
              "IMG_4135.JPG",
              "IMG_4136.JPG",
              "IMG_4137.JPG"
            ]
          },
          {
            "prompt": "项目题 1 · 使用 Python 多进程实现计算图。重新设计下面的代码，使图的计算能通过多进程并行执行。compute 返回的 value 类型均为 numpy.array；注意多进程数据通信。请给出实现代码。",
            "code": "import abc\n\nclass Node(object):\n    \"\"\"计算图节点类基类\"\"\"\n    def __init__(self, *parents, **kargs):\n        self.kargs = kargs\n        self.parents = list(parents)  # 父节点列表\n        self.value = None             # 本节点值\n\n    def forward(self):\n        \"\"\"先递归执行前继节点，以所有 parent 的结果作为本节点输入。\"\"\"\n        inputs = []\n        for pnode in self.parents:\n            if pnode.value is None:\n                pnode.forward()\n            inputs.append(pnode.value)\n        self.value = self.compute(*inputs)\n        return self.value\n\n    def compute(self, *inputs):\n        # 经过一些计算，计算出 value\n        return None",
            "sourceReferences": [
              "IMG_4120.jpeg",
              "IMG_4121.jpeg",
              "IMG_4122.jpeg",
              "IMG_4134.JPG"
            ]
          },
          {
            "prompt": "项目题 2 · 文件数据缓存。compute_and_save 根据输入 param 调用黑盒 do_compute，并把结果存入文件；相同输入总会返回相同输出。设计文件缓存避免重复计算。系统要求：内容大小约 100–500 GB，不要在整个文件系统中重复保存文件；脚本可能被多个终端的多个进程同时调用，需要考虑安全性；文件系统为 Linux；可以使用 Python 基础库。先描述整体设计思路，再用 Python 实现。",
            "code": "def do_compute(param):\n    # 计算逻辑不重要，无需关心。\n    res = str(param)\n    return res\n\ndef compute_and_save(param, save_path):\n    res = do_compute(param)\n    with open(save_path, 'w') as file:\n        file.write(res)",
            "note": "原题写作“线程安全问题”，同时描述多个进程调用；按题面保留该要求。",
            "sourceReferences": [
              "IMG_4122.jpeg",
              "IMG_4123.jpeg",
              "IMG_4124.jpeg"
            ]
          }
        ]
      },
      {
        "title": "缓存系统设计 · 原始说明",
        "transcript": "# High Level:\n\n系统文件缓存机制，在同一计算任务不会被多次执行，并且同时能够在存储大数据时合理分片，避免单个文件过大的问题。\n\n# Low Level:\n1.由于do_compute函数对同样的输入会生成同样的输出，根据输入参数生成一个唯一的哈希值，作为该计算结果的唯一标识符。这样可以避免重复计算，如果计算结果的数据量过大超过系统规定的 100-500 GB 这个范围，则可以按指定的分片大小，例如 10 GB 将结果分成多个小文件进行存储（重载 compute_and_save）。\n\n2.将哈希值作为文件名的一部分，以确保同样的输入会生成相同的文件名。\n\n3.在执行计算前，检查文件系统中是否已经存在相应的结果文件。如果文件存在，则直接读取文件内容并返回，而不必重新计算。如果文件不存在，则进行计算并将结果保存到文件中。\n\n4.多个进程可能同时检查同一个文件是否存在。如果文件不存在，多个进程可能同时计算并写入文件，从而导致重复计算或文件损坏。由于题目已经限定了是linux系统，因此可以使用文件锁 fcntl模块 来确保在文件创建过程中只有一个进程能够进行写操作。"
      },
      {
        "title": "cache · 原始代码",
        "codeBlocks": [
          {
            "label": "cache.py",
            "code": "import hashlib\nimport os\nimport fcntl\nimport errno\nimport zlib\n\ndef do_compute(param):\n    res = str(param)\n    return res\n\ndef compute_and_save(param, save_path):\n    os.makedirs(save_path, exist_ok=True)\n\n    hash_key = hashlib.sha256(str(param).encode()).hexdigest()\n    file_name = f\"{hash_key}.txt\"\n    full_path = os.path.join(save_path, file_name)\n\n    if os.path.isfile(full_path):\n        with open(full_path, \"r\") as file:\n            return file.read()\n    \n    res = do_compute(param)\n\n    lock_file = full_path + \".lock\"\n    with open(lock_file, 'w') as lock_fh:\n        try:\n            fcntl.flock(lock_fh, fcntl.LOCK_EX | fcntl.LOCK_NB)\n        except IOError as e:\n            if e.errno == errno.EAGAIN:\n                fcntl.flock(lock_fh, fcntl.LOCK_EX)\n            else:\n                raise\n\n        try:\n            if os.path.isfile(full_path):\n                with open(full_path, \"r\") as file:\n                    return file.read()\n\n            with open(full_path, \"w\") as file:\n                file.write(res)\n        finally:\n            fcntl.flock(lock_fh, fcntl.LOCK_UN)\n            os.remove(lock_file)\n\n    return res\n\ndef is_file_too_large(file_path, max_size):\n    if os.path.isfile(file_path):\n        return os.path.getsize(file_path) > max_size\n    return False\n\ndef compute_and_save(param, save_path, chunk_size=2**30, max_file_size=10**10):\n    os.makedirs(save_path, exist_ok=True)\n\n    hash_key = hashlib.sha256(str(param).encode()).hexdigest()\n    base_file_name = f\"{hash_key}.txt\"\n    base_file_path = os.path.join(save_path, base_file_name)\n\n    def get_existing_files(base_path):\n        return [f for f in os.listdir(save_path) if f.startswith(base_file_name)]\n\n    existing_files = get_existing_files(save_path)\n    if existing_files:\n        for file_name in existing_files:\n            full_path = os.path.join(save_path, file_name)\n            if is_file_too_large(full_path, max_file_size):\n                os.remove(full_path)\n            else:\n                with open(full_path, \"rb\") as file:\n                    return file.read()\n\n    res = do_compute(param)\n    compressed_res = zlib.compress(res.encode()) \n\n    lock_file = base_file_path + \".lock\"\n    with open(lock_file, 'w') as lock_fh:\n        try:\n            fcntl.flock(lock_fh, fcntl.LOCK_EX | fcntl.LOCK_NB)\n        except IOError as e:\n            if e.errno == errno.EAGAIN:\n                fcntl.flock(lock_fh, fcntl.LOCK_EX)\n            else:\n                raise\n\n        try:\n            existing_files = get_existing_files(save_path)\n            if existing_files:\n                for file_name in existing_files:\n                    full_path = os.path.join(save_path, file_name)\n                    with open(full_path, \"rb\") as file:\n                        return file.read()\n\n            chunk_index = 0\n            for i in range(0, len(compressed_res), chunk_size):\n                chunk_file_name = f\"{hash_key}_{chunk_index}.txt\"\n                chunk_file_path = os.path.join(save_path, chunk_file_name)\n                with open(chunk_file_path, \"wb\") as chunk_file:\n                    chunk_file.write(compressed_res[i:i+chunk_size])\n                chunk_index += 1\n        finally:\n            fcntl.flock(lock_fh, fcntl.LOCK_UN)\n            os.remove(lock_file)\n\n    return compressed_res"
          }
        ]
      },
      {
        "title": "graph · 原始代码",
        "codeBlocks": [
          {
            "label": "graph.py",
            "code": "import numpy as np\nimport multiprocessing as mp\nfrom abc import ABC, abstractmethod\n\n\nclass Node(ABC):\n    def __init__(self, *parents, **kargs):\n        self.kargs = kargs\n        self.parents = list(parents)\n        self.value = None\n        self.ready_event = mp.Event()\n        self.children = []\n\n        for pnode in self.parents:\n            pnode.children.append(self)\n\n    def forward(self):\n        if self.value is not None:\n            return self.value\n\n        inputs = []\n        for pnode in self.parents:\n            pnode.ready_event.wait() \n            inputs.append(pnode.value)\n\n        self.value = self.compute(*inputs)\n        self.ready_event.set() \n        return self.value\n\n    @abstractmethod\n    def compute(self, *inputs):\n        pass\n\ndef node_process(node):\n    node.forward()\n\nclass ComputationGraph:\n    def __init__(self, output_node):\n        self.output_node = output_node\n\n    def run(self):\n        processes = []\n        nodes_to_run = self.get_all_nodes(self.output_node)\n\n        for node in nodes_to_run:\n            p = mp.Process(target=node_process, args=(node,))\n            processes.append(p)\n            p.start()\n\n        for p in processes:\n            p.join()\n\n        return self.output_node.value\n\n    def get_all_nodes(self, node):\n        nodes = set()\n        self.traverse_nodes(node, nodes)\n        return nodes\n\n    def traverse_nodes(self, node, nodes):\n        if node in nodes:\n            return\n        nodes.add(node)\n        for parent in node.parents:\n            self.traverse_nodes(parent, nodes)"
          }
        ]
      }
    ],
    "sourceFiles": [
      "启林投资/OA/IMG_17BB8F86-A39A-4C3F-AF50-3A98FA8847C3.jpeg",
      "启林投资/OA/IMG_4115.jpeg",
      "启林投资/OA/IMG_4116.jpeg",
      "启林投资/OA/IMG_4117.jpeg",
      "启林投资/OA/IMG_4118.jpeg",
      "启林投资/OA/IMG_4119.jpeg",
      "启林投资/OA/IMG_4120.jpeg",
      "启林投资/OA/IMG_4121.jpeg",
      "启林投资/OA/IMG_4122.jpeg",
      "启林投资/OA/IMG_4123.jpeg",
      "启林投资/OA/IMG_4124.jpeg",
      "启林投资/OA/IMG_4125.JPG",
      "启林投资/OA/IMG_4126.JPG",
      "启林投资/OA/IMG_4127.JPG",
      "启林投资/OA/IMG_4128.JPG",
      "启林投资/OA/IMG_4129.JPG",
      "启林投资/OA/IMG_4130.JPG",
      "启林投资/OA/IMG_4131.JPG",
      "启林投资/OA/IMG_4132.JPG",
      "启林投资/OA/IMG_4133.JPG",
      "启林投资/OA/IMG_4134.JPG",
      "启林投资/OA/IMG_4135.JPG",
      "启林投资/OA/IMG_4136.JPG",
      "启林投资/OA/IMG_4137.JPG",
      "启林投资/README.md",
      "启林投资/cache.py",
      "启林投资/graph.py"
    ],
    "context": "题面图已改为文字描述。提交结果和调试报错仅作为作答记录：包括 JSONDecodeError（Expecting value / Extra data），不作为新题目或正确答案。"
  },
  {
    "id": "higgs-oa-photos",
    "company": "希格斯投资",
    "type": "笔试",
    "round": "OA 笔试",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "希格斯投资 · OA 笔试",
    "summary": "20 道选择题、2 道填空题、12 道 C++ / Python / NumPy 解答题，合并重复照片后整理为文字试卷。",
    "tags": [
      "OA",
      "笔试",
      "C++",
      "算法"
    ],
    "sections": [
      {
        "title": "选择题（20 题）",
        "questions": [
          {
            "prompt": "C++ 中，关于构造函数和析构函数，正确的描述是（ ）。",
            "options": [
              "已知类 Student 以及 Student* p；使用 p = new Student 时自动调用无参构造函数创建动态对象，使用 delete p 时自动调用析构函数并释放动态对象所占空间。",
              "定义类时必须自己定义构造函数和析构函数；创建对象时自动调用构造函数，释放对象时自动调用析构函数。",
              "构造函数和析构函数均可以是虚函数。",
              "构造函数和析构函数均能够被继承。"
            ],
            "number": 1,
            "sourceReferences": [
              "IMG_3989.jpeg",
              "IMG_3992.jpeg",
              "IMG_4001.jpeg",
              "IMG_4002.jpeg"
            ]
          },
          {
            "prompt": "下列各类函数中，（ ）不是类的成员函数。",
            "options": [
              "拷贝构造函数",
              "析构函数",
              "构造函数",
              "友元函数"
            ],
            "number": 2,
            "sourceReferences": [
              "IMG_3989.jpeg",
              "IMG_3992.jpeg",
              "IMG_4001.jpeg",
              "IMG_4002.jpeg"
            ]
          },
          {
            "prompt": "下面代码的输出结果是（ ）。",
            "code": "int main() {\n    int i = 1;\n    double x = 1.111;\n    cout << i << \" \" << x << \" \";\n    {\n        int x = 2;\n        double i = 2.222;\n        cout << i << \" \" << x << endl;\n    }\n    return 0;\n}",
            "options": [
              "1 1.111 2 2",
              "1 1.111 2.222 2",
              "以上选项都不正确",
              "1 1 2.222 2"
            ],
            "number": 3,
            "sourceReferences": [
              "IMG_3989.jpeg",
              "IMG_3990.jpeg",
              "IMG_3991.jpeg",
              "IMG_3992.jpeg",
              "IMG_4001.jpeg",
              "IMG_4002.jpeg",
              "IMG_4003.jpeg",
              "IMG_4004.jpeg"
            ]
          },
          {
            "prompt": "关于下面的代码，以下说法正确的是（ ）。",
            "code": "class A {\n    virtual void func1();\n    void func2();\n};\nclass B : class A {\n    void func1() { cout << \"fun1 in class B\" << endl; }\n    virtual void func2() { cout << \"fun2 in class B\" << endl; }\n};",
            "options": [
              "A 中的 func2 是虚函数，B 中的 func1 不是虚函数。",
              "A 中的 func1 和 B 中的 func2 都是虚函数。",
              "A 中的 func1 和 B 中的 func2 都不是虚函数。",
              "A 中的 func2 和 B 中的 func1 都不是虚函数。"
            ],
            "number": 4,
            "sourceReferences": [
              "IMG_3989.jpeg",
              "IMG_3990.jpeg",
              "IMG_3991.jpeg",
              "IMG_3992.jpeg",
              "IMG_3993.jpeg",
              "IMG_3995.jpeg",
              "IMG_4003.jpeg",
              "IMG_4004.jpeg",
              "IMG_4005.jpeg"
            ]
          },
          {
            "prompt": "A 是一个类并且定义有 getKey() 方法。下面函数中共发生（ ）次对 A 类析构函数的调用。",
            "code": "bool fn(A* a, A b) {\n    A cmp1(*a), cmp2(b);\n    return cmp1.getKey() == cmp2.getKey();\n}",
            "options": [
              "3",
              "1",
              "2",
              "4"
            ],
            "number": 5,
            "sourceReferences": [
              "IMG_3990.jpeg",
              "IMG_3991.jpeg",
              "IMG_3993.jpeg",
              "IMG_3995.jpeg",
              "IMG_3996.jpeg",
              "IMG_4004.jpeg",
              "IMG_4005.jpeg",
              "IMG_4006.jpeg"
            ]
          },
          {
            "prompt": "C++ 内存分配中说法错误的是（ ）。",
            "options": [
              "栈区一般由编译器自动分配释放，堆区一般由程序员分配释放。",
              "对于堆，大量的 new/delete 操作会造成内存空间不连续。",
              "对于栈来说，生长方向是向上的，也就是向着内存地址增加的方向。",
              "堆容易产生 memory leak（内存泄漏）。"
            ],
            "number": 6,
            "sourceReferences": [
              "IMG_3991.jpeg",
              "IMG_3993.jpeg",
              "IMG_3994.jpeg",
              "IMG_3995.jpeg",
              "IMG_3996.jpeg",
              "IMG_4005.jpeg",
              "IMG_4006.jpeg",
              "IMG_4007.jpeg"
            ]
          },
          {
            "prompt": "以下四行代码中，哪一行的“123”一定保存在栈上（ ）。",
            "options": [
              "char* brr = \"123\";",
              "const char* arr = \"123\";",
              "const char crr[] = \"123\";",
              "char drr[] = \"123\";"
            ],
            "number": 7,
            "sourceReferences": [
              "IMG_3994.jpeg",
              "IMG_3995.jpeg",
              "IMG_3996.jpeg",
              "IMG_3997.jpeg",
              "IMG_4006.jpeg",
              "IMG_4007.jpeg",
              "IMG_4008.jpeg"
            ]
          },
          {
            "prompt": "关于下面的代码，以下说法正确的是（ ）。",
            "code": "class A {\n    virtual void func1();\n    void func2();\n};\nclass B : class A {\n    void func1() { cout << \"fun1 in class B\" << endl; }\n    virtual void func2() { cout << \"fun2 in class B\" << endl; }\n};",
            "options": [
              "A 中的 func2 是虚函数，B 中的 func1 不是虚函数。",
              "A 中的 func1 和 B 中的 func2 都是虚函数。",
              "A 中的 func1 和 B 中的 func2 都不是虚函数。",
              "A 中的 func2 和 B 中的 func1 都不是虚函数。"
            ],
            "number": 8,
            "sourceReferences": [
              "IMG_3996.jpeg",
              "IMG_3997.jpeg",
              "IMG_3998.jpeg",
              "IMG_4007.jpeg",
              "IMG_4008.jpeg",
              "IMG_4009.jpeg"
            ]
          },
          {
            "prompt": "下面 C++ 代码的输出是什么（ ）。",
            "code": "int main() {\n    int a = 5;\n    auto check = [=]() {\n        a = 10;\n    };\n    check();\n    cout << \"Value of a: \" << a << endl;\n    return 0;\n}",
            "options": [
              "Value of a: 10",
              "Value of a: 5",
              "运行出错",
              "编译出错"
            ],
            "number": 9,
            "sourceReferences": [
              "IMG_3997.jpeg",
              "IMG_3998.jpeg",
              "IMG_3999.jpeg",
              "IMG_4007.jpeg",
              "IMG_4008.jpeg",
              "IMG_4009.jpeg",
              "IMG_4010.jpeg"
            ]
          },
          {
            "prompt": "下面 C++ 代码的输出是什么（ ）。",
            "code": "int main() {\n    int a = 5;\n    auto check = [&]() {\n        a = 10;\n    };\n    check();\n    cout << \"Value of a: \" << a << endl;\n    return 0;\n}",
            "options": [
              "Value of a: 10",
              "Value of a: 5",
              "运行出错",
              "编译出错"
            ],
            "number": 10,
            "sourceReferences": [
              "IMG_3998.jpeg",
              "IMG_3999.jpeg",
              "IMG_4009.jpeg",
              "IMG_4010.jpeg"
            ]
          },
          {
            "prompt": "下面代码的输出是什么（ ）。",
            "code": "int a = 5, b = 6, c, d;\nc = a, b;\nd = (a, b);\ncout << c << \" \" << d;",
            "options": [
              "5 6",
              "6 5",
              "6 7",
              "6 8"
            ],
            "number": 11,
            "sourceReferences": [
              "IMG_3999.jpeg",
              "IMG_4010.jpeg",
              "IMG_4011.jpeg",
              "IMG_4037.jpeg"
            ]
          },
          {
            "prompt": "dynamic_cast 的用途是什么（ ）。",
            "options": [
              "将基类对象指针转成子类对象指针",
              "和执行顺序有关",
              "将基类对象转成子类对象",
              "将子类对象转成基类对象"
            ],
            "number": 12,
            "sourceReferences": [
              "IMG_4011.jpeg",
              "IMG_4012.jpeg",
              "IMG_4037.jpeg",
              "IMG_4038.jpeg"
            ]
          },
          {
            "prompt": "下面程序的输出是（ ）。",
            "code": "class myclass {\npublic:\n    int i;\n    myclass(int a) : i(a) {}\n    myclass* operator->() { return this; }\n};\nint main() {\n    myclass ob(10);\n    std::cout << ob.i << \" \" << ob->i;\n    return 0;\n}",
            "options": [
              "运行错误",
              "编译错误",
              "11 11",
              "10 10"
            ],
            "number": 13,
            "sourceReferences": [
              "IMG_4011.jpeg",
              "IMG_4012.jpeg",
              "IMG_4013.jpeg",
              "IMG_4037.jpeg",
              "IMG_4038.jpeg",
              "IMG_4039.jpeg"
            ]
          },
          {
            "prompt": "下面程序的输出是（ ）。",
            "code": "namespace extra { int i = 10; }\nvoid i() {\n    using namespace extra;\n    int i;\n    i = 9;\n    std::cout << i;\n}\nint main() {\n    enum letter { i, j = 11 };\n    class i { letter j; };\n    ::i();\n    return 1;\n}",
            "options": [
              "编译错误",
              "11",
              "10",
              "9"
            ],
            "number": 14,
            "sourceReferences": [
              "IMG_4012.jpeg",
              "IMG_4013.jpeg",
              "IMG_4014.jpeg",
              "IMG_4038.jpeg",
              "IMG_4039.jpeg",
              "IMG_4040.jpeg"
            ]
          },
          {
            "prompt": "func() 抛出 B 类对象，main 中先 catch(A a)，再 catch(B b)。下面程序的输出是（ ）。",
            "options": [
              "Caught B Class",
              "Caught A Class",
              "运行错误",
              "编译错误"
            ],
            "code": "// 需要包含的头文件和需要声明的命名空间\nclass A {\n    int a;\npublic:\n    A() {}\n};\nclass B : public A {\n    int b;\npublic:\n    B() {}\n};\nvoid func() {\n    B b;\n    throw b;\n}\nint main() {\n    try {\n        func();\n    } catch (A a) {\n        cout << \"Caught A Class\\n\";\n    } catch (B b) {\n        cout << \"Caught B Class\\n\";\n    }\n}",
            "number": 15,
            "sourceReferences": [
              "IMG_4013.jpeg",
              "IMG_4014.jpeg",
              "IMG_4015.jpeg",
              "IMG_4039.jpeg",
              "IMG_4040.jpeg",
              "IMG_4041.jpeg"
            ]
          },
          {
            "prompt": "func() 抛出 B 类对象，main 中先 catch(B* b)，再 catch(A a)。下面程序的输出是（ ）。",
            "options": [
              "Caught B Class",
              "Caught A Class",
              "运行错误",
              "编译错误"
            ],
            "code": "// 需要包含的头文件和需要声明的命名空间\nclass A {\n    int a;\npublic:\n    A() {}\n};\nclass B : public A {\n    int b;\npublic:\n    B() {}\n};\nvoid func() {\n    B b;\n    throw b;\n}\nint main() {\n    try {\n        func();\n    } catch (B* b) {\n        cout << \"Caught B Class\\n\";\n    } catch (A a) {\n        cout << \"Caught A Class\\n\";\n    }\n}",
            "number": 16,
            "sourceReferences": [
              "IMG_4015.jpeg",
              "IMG_4016.jpeg",
              "IMG_4041.jpeg",
              "IMG_4042.jpeg",
              "IMG_4045.jpeg",
              "IMG_4046.jpeg",
              "IMG_4047.jpeg"
            ]
          },
          {
            "prompt": "类 B 包含一个 A 类型成员 a；A、B 的构造函数和析构函数分别打印提示。main 中执行 B b1，输出顺序是（ ）。",
            "options": [
              "B 构造 → A 构造 → A 析构 → B 析构",
              "A 构造 → B 构造 → B 析构 → A 析构",
              "B 构造 → A 构造 → B 析构 → A 析构",
              "A 构造 → B 构造 → A 析构 → B 析构"
            ],
            "code": "class A {\n    mutable int a;\npublic:\n    A() { cout << \"A's Constructor called\\n\"; }\n    ~A() { cout << \"A's Destructor called\\n\"; }\n};\nclass B {\n    A a;\npublic:\n    B() { cout << \"B's Constructor called\\n\"; }\n    ~B() { cout << \"B's Destructor called\\n\"; }\n};\nint main(int argc, char const *argv[]) {\n    B b1;\n}",
            "number": 17,
            "sourceReferences": [
              "IMG_4016.jpeg",
              "IMG_4017.jpeg",
              "IMG_4042.jpeg",
              "IMG_4043.jpeg",
              "IMG_4045.jpeg",
              "IMG_4046.jpeg",
              "IMG_4047.jpeg"
            ]
          },
          {
            "prompt": "有关 Python 程序，说法正确的是（ ）。",
            "options": [
              "程序中抛出异常不一定会导致程序终止。",
              "程序中抛出异常会导致程序终止。",
              "拼写错误会导致程序终止。",
              "逻辑错误会导致程序终止。"
            ],
            "number": 18,
            "sourceReferences": [
              "IMG_4016.jpeg",
              "IMG_4017.jpeg",
              "IMG_4043.jpeg"
            ]
          },
          {
            "prompt": "以下哪个不是 Python 中的关键字（ ）。",
            "options": [
              "with",
              "final",
              "import",
              "except"
            ],
            "number": 19,
            "sourceReferences": [
              "IMG_4017.jpeg",
              "IMG_4019.jpeg",
              "IMG_4043.jpeg",
              "IMG_4044.jpeg"
            ]
          },
          {
            "prompt": "针对以下代码，错误的说法是（ ）。",
            "code": "file_path = \"[原图字符串不可辨识]\"\nwith open(file_path, \"[原图模式字符串不可辨识]\") as _f:\n    _data = _f.read()\n    print(_data.__class__.__name__)",
            "options": [
              "open 函数用只读模式读取文件。",
              "如果文件不存在，代码不会报错。",
              "代码执行完毕后 IO 会被关闭。",
              "file_path 中存在转义字符，需要进行转义处理或使用原始字符串。"
            ],
            "note": "文件路径及 open 模式在所有相关照片中都未能可靠辨认，保留空缺，不沿用其他场次中的推测。",
            "number": 20,
            "sourceReferences": [
              "IMG_4017.jpeg",
              "IMG_4018.jpeg",
              "IMG_4019.jpeg",
              "IMG_4043.jpeg",
              "IMG_4044.jpeg",
              "IMG_4048.jpeg",
              "IMG_4049.jpeg"
            ]
          }
        ],
        "paragraphs": [
          "保留原试卷的 20 个题号，第 4、8 题题面相同。不同照片中的选项排列不同，以下按选项内容整理，字母编号用于阅读；作答高亮不作为答案。"
        ]
      },
      {
        "title": "填空题（2 题）",
        "questions": [
          {
            "prompt": "C++ 默认调用约定是 ______，由 ______ 清理被调用函数的线程栈。",
            "sourceReferences": [
              "IMG_4018.jpeg",
              "IMG_4019.jpeg",
              "IMG_4020.jpeg",
              "IMG_4044.jpeg",
              "IMG_4048.jpeg",
              "IMG_4049.jpeg"
            ]
          },
          {
            "prompt": "派生类析构函数的调用顺序：1. ______；2. ______；3. ______。",
            "sourceReferences": [
              "IMG_4018.jpeg",
              "IMG_4019.jpeg",
              "IMG_4020.jpeg",
              "IMG_4044.jpeg",
              "IMG_4048.jpeg",
              "IMG_4049.jpeg"
            ]
          }
        ]
      },
      {
        "title": "解答题（1–3：C++）",
        "questions": [
          {
            "prompt": "阅读 FillLoginField：代码已通过编译，找出可能的漏洞和可优化点。依赖函数为 GetValueByKeyword 与 FillLoginMap；普通登录字段含 USER_LOGIN、PASSWORD、ACCOUNT_DES，另一类登录额外含 FISL_LOGIN_NOTE。",
            "code": "bool FillLoginField(char login_type, string login_fields)\n{\n    vector<string> keyword = {\n        \"USER_LOGIN\", \"PASSWORD\", \"ACCOUNT_DES\", \"FISL_LOGIN_NOTE\"\n    };\n\n    if (login_type == /* 普通登录类型 */) {\n        int index = 0, max_index = 3;\n        while (index < max_index) {\n            string value = GetValueByKeyword(login_fields, keyword[index]);\n            if (value == \"\") continue;\n            FillLoginMap(keyword[index].c_str(), sizeof(keyword[index].c_str()),\n                         value.c_str(), sizeof(value.c_str()));\n            ++index;\n        }\n        return true;\n    } else if (login_type == /* FISL 登录类型 */) {\n        int index = 0, max_index = 4;\n        while (index < max_index) {\n            string value = GetValueByKeyword(login_fields, keyword[index]);\n            if (value == \"\") continue;\n            FillLoginMap(keyword[index].c_str(), sizeof(keyword[index].c_str()),\n                         value.c_str(), sizeof(value.c_str()));\n            ++index;\n        }\n        return true;\n    }\n}",
            "note": "原照片中 login_type 比较值不可辨认，以注释标注。代码缺陷按题面保留，未修复。",
            "sourceReferences": [
              "IMG_4018.jpeg",
              "IMG_4019.jpeg",
              "IMG_4020.jpeg",
              "IMG_4027.jpeg",
              "IMG_4028.jpeg",
              "IMG_4044.jpeg",
              "IMG_4048.jpeg",
              "IMG_4049.jpeg",
              "IMG_4050.JPG",
              "IMG_4051.JPG",
              "IMG_4052.JPG"
            ]
          },
          {
            "prompt": "写出完整的 strcpy 实现，函数签名为 char* strcpy(char* strDest, const char* strSrc)。",
            "code": "char* strcpy(char* strDest, const char* strSrc);",
            "sourceReferences": [
              "IMG_4020.jpeg",
              "IMG_4021.jpeg",
              "IMG_4028.jpeg",
              "IMG_4029.jpeg"
            ]
          },
          {
            "prompt": "标出 main 中无法通过编译的语句并说明原因。考点涉及抽象类实例化、未实现纯虚函数、protected/private 访问、派生类访问基类私有成员，以及重载与名称隐藏。",
            "code": "class A {\npublic:\n    A() {}\n    virtual int output() = 0;\nprivate:\n    int i;\n};\n\nclass B : public A {\nprivate:\n    int j;\n};\n\nclass C {\n    int f() { return x; }\npublic:\n    int f(int a, int b = 10) { return x * a + b; }\nprotected:\n    void setX(int a) { x = a; }\n    int getX() { return x; }\nprivate:\n    int x;\n};\n\nclass D : public C {\nprivate:\n    int z;\npublic:\n    int f() { return x; }\n};\n\nint main() {\n    A* pA = NULL;\n    A objA;\n    B objB;\n    C objC;\n    D objD;\n    objC.setX(2);\n    cout << objC.getX();\n    objC.setX(1);\n    C* ptrD = &objD;\n    ptrD->f(5);\n    ptrD->f();\n    return 0;\n}",
            "sourceReferences": [
              "IMG_4021.jpeg",
              "IMG_4022.jpeg",
              "IMG_4023.jpeg",
              "IMG_4029.jpeg",
              "IMG_4030.jpeg",
              "IMG_4031.jpeg"
            ]
          }
        ]
      },
      {
        "title": "解答题（4–12：Python / NumPy）",
        "questions": [
          {
            "prompt": "命令行执行 python run.py param1 param2，说明在 run.py 中如何取得 param2。",
            "number": 4,
            "sourceReferences": [
              "IMG_4023.jpeg",
              "IMG_4031.jpeg"
            ]
          },
          {
            "prompt": "写出下面语句的运行结果并解释。",
            "code": "print(1.2 - 1.0 == 0.2)",
            "number": 5,
            "sourceReferences": [
              "IMG_4023.jpeg",
              "IMG_4024.jpeg",
              "IMG_4031.jpeg",
              "IMG_4032.jpeg"
            ]
          },
          {
            "prompt": "s = \"ajldjlajfdljfddd\"，不用循环实现去重，并按从小到大顺序输出。",
            "number": 6,
            "sourceReferences": [
              "IMG_4023.jpeg",
              "IMG_4024.jpeg",
              "IMG_4032.jpeg"
            ]
          },
          {
            "prompt": "用一行 Python 代码打印 1 到 100 的和。",
            "code": "print(......)",
            "number": 7,
            "sourceReferences": [
              "IMG_4023.jpeg",
              "IMG_4024.jpeg",
              "IMG_4025.jpeg",
              "IMG_4032.jpeg"
            ]
          },
          {
            "prompt": "假设已 import numpy as np，写出 print(y) 的输出。",
            "code": "x = np.array([1, 3, 5, 7, 9, 11])\ny = np.reshape(x, (2, -1))\nprint(y)",
            "number": 8,
            "sourceReferences": [
              "IMG_4024.jpeg",
              "IMG_4025.jpeg",
              "IMG_4026.jpeg",
              "IMG_4032.jpeg",
              "IMG_4033.jpeg"
            ]
          },
          {
            "prompt": "假设已 import numpy as np，写出 x[::-1] 的结果。",
            "code": "x = np.array([[34, 43, 73], [82, 22, 12], [53, 94, 66]])\nx[::-1]",
            "number": 9,
            "sourceReferences": [
              "IMG_4024.jpeg",
              "IMG_4025.jpeg",
              "IMG_4026.jpeg",
              "IMG_4033.jpeg",
              "IMG_4034.jpeg",
              "IMG_4035.jpeg"
            ]
          },
          {
            "prompt": "假设已 import numpy as np，分别写出下面两种索引的结果。",
            "code": "x = np.array([[34, 43, 73], [82, 22, 12], [53, 94, 66]])\nx[:, x[1, :].argsort()]\nx[x[:, 0].argsort()]",
            "number": 10,
            "sourceReferences": [
              "IMG_4025.jpeg",
              "IMG_4026.jpeg",
              "IMG_4033.jpeg",
              "IMG_4034.jpeg",
              "IMG_4035.jpeg"
            ]
          },
          {
            "prompt": "假设已 import numpy as np，写出 y.shape。",
            "code": "x = np.random.rand(10)\ny = x[None, :, np.newaxis]",
            "number": 11,
            "sourceReferences": [
              "IMG_4025.jpeg",
              "IMG_4026.jpeg",
              "IMG_4033.jpeg",
              "IMG_4034.jpeg",
              "IMG_4035.jpeg"
            ]
          },
          {
            "prompt": "使用列表推导式从 a = [1,2,3,4,5,6,7,8,9,10] 中取出所有奇数并构造新列表。",
            "number": 12,
            "sourceReferences": [
              "IMG_4025.jpeg",
              "IMG_4026.jpeg",
              "IMG_4034.jpeg",
              "IMG_4035.jpeg"
            ]
          }
        ]
      }
    ],
    "sourceFiles": [
      "希格斯投资/OA/IMG_3987.jpeg",
      "希格斯投资/OA/IMG_3988.jpeg",
      "希格斯投资/OA/IMG_3989.jpeg",
      "希格斯投资/OA/IMG_3990.jpeg",
      "希格斯投资/OA/IMG_3991.jpeg",
      "希格斯投资/OA/IMG_3992.jpeg",
      "希格斯投资/OA/IMG_3993.jpeg",
      "希格斯投资/OA/IMG_3994.jpeg",
      "希格斯投资/OA/IMG_3995.jpeg",
      "希格斯投资/OA/IMG_3996.jpeg",
      "希格斯投资/OA/IMG_3997.jpeg",
      "希格斯投资/OA/IMG_3998.jpeg",
      "希格斯投资/OA/IMG_3999.jpeg",
      "希格斯投资/OA/IMG_4001.jpeg",
      "希格斯投资/OA/IMG_4002.jpeg",
      "希格斯投资/OA/IMG_4003.jpeg",
      "希格斯投资/OA/IMG_4004.jpeg",
      "希格斯投资/OA/IMG_4005.jpeg",
      "希格斯投资/OA/IMG_4006.jpeg",
      "希格斯投资/OA/IMG_4007.jpeg",
      "希格斯投资/OA/IMG_4008.jpeg",
      "希格斯投资/OA/IMG_4009.jpeg",
      "希格斯投资/OA/IMG_4010.jpeg",
      "希格斯投资/OA/IMG_4011.jpeg",
      "希格斯投资/OA/IMG_4012.jpeg",
      "希格斯投资/OA/IMG_4013.jpeg",
      "希格斯投资/OA/IMG_4014.jpeg",
      "希格斯投资/OA/IMG_4015.jpeg",
      "希格斯投资/OA/IMG_4016.jpeg",
      "希格斯投资/OA/IMG_4017.jpeg",
      "希格斯投资/OA/IMG_4018.jpeg",
      "希格斯投资/OA/IMG_4019.jpeg",
      "希格斯投资/OA/IMG_4020.jpeg",
      "希格斯投资/OA/IMG_4021.jpeg",
      "希格斯投资/OA/IMG_4022.jpeg",
      "希格斯投资/OA/IMG_4023.jpeg",
      "希格斯投资/OA/IMG_4024.jpeg",
      "希格斯投资/OA/IMG_4025.jpeg",
      "希格斯投资/OA/IMG_4026.jpeg",
      "希格斯投资/OA/IMG_4027.jpeg",
      "希格斯投资/OA/IMG_4028.jpeg",
      "希格斯投资/OA/IMG_4029.jpeg",
      "希格斯投资/OA/IMG_4030.jpeg",
      "希格斯投资/OA/IMG_4031.jpeg",
      "希格斯投资/OA/IMG_4032.jpeg",
      "希格斯投资/OA/IMG_4033.jpeg",
      "希格斯投资/OA/IMG_4034.jpeg",
      "希格斯投资/OA/IMG_4035.jpeg",
      "希格斯投资/OA/IMG_4036.jpeg",
      "希格斯投资/OA/IMG_4037.jpeg",
      "希格斯投资/OA/IMG_4038.jpeg",
      "希格斯投资/OA/IMG_4039.jpeg",
      "希格斯投资/OA/IMG_4040.jpeg",
      "希格斯投资/OA/IMG_4041.jpeg",
      "希格斯投资/OA/IMG_4042.jpeg",
      "希格斯投资/OA/IMG_4043.jpeg",
      "希格斯投资/OA/IMG_4044.jpeg",
      "希格斯投资/OA/IMG_4045.jpeg",
      "希格斯投资/OA/IMG_4046.jpeg",
      "希格斯投资/OA/IMG_4047.jpeg",
      "希格斯投资/OA/IMG_4048.jpeg",
      "希格斯投资/OA/IMG_4049.jpeg",
      "希格斯投资/OA/IMG_4050.JPG",
      "希格斯投资/OA/IMG_4051.JPG",
      "希格斯投资/OA/IMG_4052.JPG"
    ],
    "context": "按“希格斯投资”原资料目录保留独立场次。与站内希洛斯试卷有相同题面，但不据此认定为同一家公司。模糊字符串和常量已明确标注；未补写标准答案。"
  },
  {
    "id": "zhuyin-oa-photos",
    "company": "祝音科技",
    "type": "笔试",
    "round": "OA 笔试",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "祝音科技 · OA 笔试",
    "summary": "C++ 选择题、循环队列与拓扑排序编程题的文字整理；反光和失焦造成的缺失已逐项注明。",
    "tags": [
      "OA",
      "笔试",
      "C++",
      "算法"
    ],
    "sections": [
      {
        "title": "选择题 · 可辨识题面",
        "questions": [
          {
            "prompt": "链表重排：给定以下 C++ 函数，假设链表内容为 1、2、3、4、5、6、7。函数执行后列表的内容是（ ）。",
            "sourceReferences": [
              "IMG_1790 2.jpeg"
            ],
            "code": "struct node {\n    int value;\n    struct node* next;\n};\nvoid rearrange(struct node* list) {\n    struct node *p, *q;\n    int temp;\n    if ((!list) || (!list->next))\n        return;\n    p = list;\n    q = list->next;\n    while (q) {\n        temp = p->value;\n        p->value = q->value;\n        q->value = temp;\n        p = q->next;\n        q = p ? p->next : 0;\n    }\n}",
            "options": [
              "2, 3, 4, 5, 6, 7, 1",
              "1, 3, 2, 5, 4, 7, 6",
              "2, 1, 4, 3, 6, 5, 7",
              "1, 2, 3, 4, 5, 6, 7"
            ]
          },
          {
            "prompt": "二叉树与 findTilt：根节点为 1；其左、右子节点分别为 2、3；2 的左、右子节点分别为 4、5；3 的左、右子节点分别为 6、7。将根指针 root 传入 findTilt，返回值是多少？",
            "sourceReferences": [
              "IMG_1791 2.jpeg",
              "IMG_1802.jpeg"
            ],
            "code": "struct TreeNode {\n    int val;\n    TreeNode* left;\n    TreeNode* right;\n    TreeNode(int x) : val(x), left(NULL), right(NULL) {}\n};\nclass Test {\npublic:\n    int findTilt(TreeNode* root) {\n        if (!root) return 0;\n        int sum = 0;\n        helper(root, sum);\n        return sum;\n    }\n    int helper(TreeNode* root, int sum) {\n        int l = helper(root->left, sum);\n        int r = helper(root->right, sum);\n        sum += abs(l - r);\n        return l + r + root->val;\n    }\n};",
            "options": [
              "7",
              "6",
              "5",
              "0"
            ],
            "note": "按可见代码保留 int sum 值传递，以及 helper 中未见空节点判断的题面；未擅自补成正确算法。"
          },
          {
            "prompt": "抽象类 Pet：下面的 C++ 程序有错误，错误出现在标记（1）–（5）中的哪些语句？",
            "sourceReferences": [
              "IMG_1792 2.jpeg",
              "IMG_1793 2.jpeg"
            ],
            "code": "#include <iostream>\n#include <string>\nusing namespace std;\nclass Pet {\npublic:\n    string name;\n    Pet(string p = \"\") { name = p; }\n    string getName() const { return name; }\n    virtual void call() const = 0;\n};\nclass Dog : public Pet {\npublic:\n    Dog(string n) : Pet(n) {}\n    void call() const { cout << \"[原图字符串模糊]\"; }\n};\nclass Cat : public Pet {\npublic:\n    Cat(string n) : Pet(n) {}\n    void call() const { cout << \"[原图字符串模糊]\"; }\n};\nvoid f(Pet* p) { p->call(); }\nint main() {\n    Pet pet0(\"#\");  // (1)\n    Dog pet1(\"*\");  // (2)\n    Cat pet2(\"$\");  // (3)\n    f(&pet1);       // (4)\n    f(&pet2);       // (5)\n    return 0;\n}",
            "options": [
              "(5)",
              "(4)(5)",
              "(2)(3)",
              "(1)"
            ],
            "note": "Dog / Cat 输出的字面量受反光影响，不猜写。"
          },
          {
            "prompt": "C++ 类与对象：题干可辨识片段为“关于 C++ ……，下面说法正确的是（ ）”。",
            "sourceReferences": [
              "IMG_1794 2.jpeg",
              "IMG_1795 2.jpeg"
            ],
            "options": [
              "[前部选项不可辨识]",
              "类中至少包含一个…… [末尾模糊]",
              "调用类中的一个成员函数必须指定一个…… [末尾模糊]",
              "类中的一个数据成员可设置为该类的各个对象所共有的一个值"
            ],
            "note": "照片前半部分模糊。选项只保存能够读出的片段，不能据此给出答案。"
          },
          {
            "prompt": "关于 C++ 中的 this 指针，下面说法正确的是（ ）。",
            "sourceReferences": [
              "IMG_1796 2.jpeg"
            ],
            "options": [
              "静态成员函数也可使用 this [部分字迹模糊]",
              "[第 2 个选项不可辨识]",
              "this 指针在成员函数中指向调用该成员函数的对象 [部分字迹模糊]",
              "每个非静态成员函数都隐含一个 this 指针"
            ],
            "note": "反光影响选项逐字核对；已标出的片段不作为完整原文。"
          },
          {
            "prompt": "Linux 内核与地址空间：题干可辨识片段为“在 Linux 内核架构中，内存区域……”。",
            "sourceReferences": [
              "IMG_1798.jpeg"
            ],
            "options": [
              "Linux 每个进程…… [后文不可辨识]",
              "Linux 将虚拟地址空间分为…… [后文不可辨识]",
              "地址空间的最大容量…… [后文不可辨识]",
              "32 位系统最多…… [后文不可辨识]"
            ],
            "note": "无法可靠恢复完整题干和选项，不补写容量或地址边界。"
          },
          {
            "prompt": "Linux 网络：题目目录可辨识为“在 Linux 中，我们使用 sk_buff……”。",
            "sourceReferences": [
              "IMG_1797.jpeg",
              "IMG_1799.jpeg",
              "IMG_1800.jpeg"
            ],
            "note": "题面和全部选项失焦、反光，当前只能确认主题；等待清晰原题。"
          },
          {
            "prompt": "C++ value / condition：阅读代码，执行后 value 和 condition 分别为（ ）。",
            "sourceReferences": [
              "IMG_1803.jpeg",
              "IMG_1804.jpeg"
            ],
            "code": "// 原图可辨识片段；不是完整可运行代码。\nunsigned int value = 1024;\nbool condition = /* 原图强制转换表达式模糊 */;\nif (condition) /* 原图后续语句待核对 */;\nif (condition) /* 原图后续语句待核对 */;",
            "options": [
              "1024, 0",
              "1025, 1",
              "1025, 0",
              "1026, 1"
            ],
            "note": "强制转换及两个 if 分支无法逐字确认，不能根据选项反推代码。"
          }
        ]
      },
      {
        "title": "选择题 · 未能恢复的题页",
        "questions": [
          {
            "prompt": "失焦代码题：照片中可见代码块，但题干和代码不能可靠识别。",
            "sourceReferences": [
              "IMG_1789 2.jpeg",
              "IMG_1801.jpeg"
            ],
            "note": "两张照片严重失焦；不使用 OCR 乱码或推测作为题目正文。"
          },
          {
            "prompt": "其余选择题：目录显示共 10 道选择题；剩余一题未找到可读的完整题面。",
            "sourceReferences": [
              "IMG_1797.jpeg"
            ],
            "note": "保留资料缺口，当前不能确认题名、题干或选项。"
          }
        ]
      },
      {
        "title": "编程题（2 题）",
        "questions": [
          {
            "prompt": "【模板】循环队列：实现一个容量为 n 的循环队列，支持 push x、front、pop。push x：将 x 入队；若队列已满，输出 full，并保持队列不变。front：输出队首元素但不出队；若为空，输出 empty。pop：输出并移除队首元素；若为空，输出 empty。第一行输入 n、q，表示容量和操作次数；接下来 q 行各表示一个操作，按要求输出。",
            "sourceReferences": [
              "IMG_1805.jpeg",
              "IMG_1811.jpeg"
            ],
            "code": "示例输入：\n3 10\npush 1\npush 2\nfront\npush 3\npush 4\npop\npop\npop\nfront\npop\n\n示例输出：\n1\nfull\n1\n2\n3\nempty\nempty",
            "note": "n、q 的范围上界被截断；未补写未知约束。"
          },
          {
            "prompt": "【模板】拓扑排序：给定 n 个点、m 条边的有向图，输出图的拓扑序。第一行输入 n、m，接下来的 m 行各输入 u、v，表示一条有向边。",
            "sourceReferences": [
              "IMG_1812.jpeg",
              "IMG_1813.jpeg"
            ],
            "code": "示例输入：\n5 4\n1 2\n2 3\n3 4\n4 5\n\n示例输出：\n1 2 3 4 5",
            "note": "输入约束的指数、多个合法序列时的排序要求，以及不存在拓扑序时的输出规则受反光／截断影响，未可靠恢复。"
          }
        ]
      },
      {
        "title": "简答题 · 目录中可见标题",
        "questions": [
          {
            "prompt": "简答题 1 · 如果使用 C++ 开发一款“量化……”",
            "sourceReferences": [
              "IMG_1797.jpeg"
            ],
            "note": "只有题目目录中的截断标题，未拍到完整题面。"
          },
          {
            "prompt": "简答题 2 · C++ 技术进行共享内存和进……",
            "sourceReferences": [
              "IMG_1797.jpeg"
            ],
            "note": "只有题目目录中的截断标题，未拍到完整题面。"
          }
        ]
      }
    ],
    "sourceFiles": [
      "祝音科技笔试/IMG_1789 2.jpeg",
      "祝音科技笔试/IMG_1789.jpeg",
      "祝音科技笔试/IMG_1790 2.jpeg",
      "祝音科技笔试/IMG_1790.jpeg",
      "祝音科技笔试/IMG_1791 2.jpeg",
      "祝音科技笔试/IMG_1791.jpeg",
      "祝音科技笔试/IMG_1792 2.jpeg",
      "祝音科技笔试/IMG_1792.jpeg",
      "祝音科技笔试/IMG_1793 2.jpeg",
      "祝音科技笔试/IMG_1793.jpeg",
      "祝音科技笔试/IMG_1794 2.jpeg",
      "祝音科技笔试/IMG_1794.jpeg",
      "祝音科技笔试/IMG_1795 2.jpeg",
      "祝音科技笔试/IMG_1795.jpeg",
      "祝音科技笔试/IMG_1796 2.jpeg",
      "祝音科技笔试/IMG_1796.jpeg",
      "祝音科技笔试/IMG_1797.jpeg",
      "祝音科技笔试/IMG_1798.jpeg",
      "祝音科技笔试/IMG_1799.jpeg",
      "祝音科技笔试/IMG_1800.jpeg",
      "祝音科技笔试/IMG_1801.jpeg",
      "祝音科技笔试/IMG_1802.jpeg",
      "祝音科技笔试/IMG_1803.jpeg",
      "祝音科技笔试/IMG_1804.jpeg",
      "祝音科技笔试/IMG_1805.jpeg",
      "祝音科技笔试/IMG_1811.jpeg",
      "祝音科技笔试/IMG_1812.jpeg",
      "祝音科技笔试/IMG_1813.jpeg"
    ],
    "context": "原目录 28 张照片中有 8 张完全重复，按 20 张独立照片核对。题目目录显示 10 道选择、2 道编程、2 道简答；并非每道题的完整题面都拍摄清晰。以下按可辨识主题归类，不猜补缺失原题。"
  },
  {
    "id": "collected-interview-xls-row-2",
    "company": "GL 投资（原文缩写）",
    "type": "面试",
    "round": "流程资料摘录 01",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "GL 投资（原文缩写） · 流程资料摘录 01",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 2 行",
        "transcript": "1.gl投资。\n第一轮是一个junior研究员聊了半小时简历，问题都问的比较基础，基本上熟悉自己的简历和经历即可。当时还问到了诸如python如何循环加速，给你一个dataset你如何写python code之类的问题。我当时确实对python加速不太了解。dataset那个我当时也只提供了一种feasible solution。\n\n第二轮笔试，给了24还是48h去完成，里面涉及到大量的主观题目，也就是说没有标准答案纯凭自己的认知水平去回答的。此外还有一个dataset task，给了一些股票的数据，去test某个因子是否work，然后再分析一通差不多这样。我记得我当时做的还是挺认真的。\n提交之后，又收到一轮笔试，2h线上，主要就是数学题和数据结构。我记得的比较有挑战性的题目包括在单位圆内随机扔两个点A和B，三角形OAB是钝角三角形的概率。绿皮书上的醉汉选座位拓展到k个醉汉的情形。还有一道和树数据结构有关但是具体我不太记得了。\n大概做出来70%吧。两天之后收到拒信，理由说是觉得我对python pandas掌握的还不够…"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 2 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-3",
    "company": "QL 投资（原文缩写）",
    "type": "面试",
    "round": "流程资料摘录 02",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "QL 投资（原文缩写） · 流程资料摘录 02",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 3 行",
        "transcript": "2.ql投资。\n给了简历之后当天下午就发了笔试，一共9道题70还是75分钟，时间还是很紧的。其中有一些还是行为类的题目，例如你如何看待国内量化市场的发展，你觉得在互联网和在量化有什么区别，你为什么想来量化此类的哈哈哈。然后剩下的都是统计类题目了，例如x/y有异常点对回归的影响；对Lasso，Elastic Net的探讨；已知y对x1和x2分别进行一元线性回归的R方，求y对x1和x2二元回归的R方的取值范围等等。还有一道不太记得我完全没下笔的题。总体上说时间比较紧，有的题目有点难（当时也确实菜）。应该做出来70%左右吧。\n然后收到店面邀请，面试官是中低频组的投研总监。可以感觉到面试官真的很懂很专业，对我做过的事真是门儿清似乎比我还了解…？全程都在问简历，问到了我很久之前写的一篇paper里某个表格的结果，我当时记不太清了就随口答了一个，然后对方觉得很不make sense，我也没有解释清楚。估计这个还挺减分的。此外还问了很多统计学习的问题，例如主成分回归和Ridge的关系。一共面了45min左右。\n结果自然是没过。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 3 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-4",
    "company": "香港某小型 Quant HF",
    "type": "面试",
    "round": "流程资料摘录 03",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "香港某小型 Quant HF · 流程资料摘录 03",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 4 行",
        "transcript": "3.hk某小型quant hf。这个投递的是trader（不太记得当初为啥会投个trader了）。OA是两道算法题，50min，其中一道很简单一道很难（带weight的图？），不理解为啥两道题难度相差这么多，只做出来了前一道。当时觉得肯定挂了。但没想到一两周之后接到hk的电话约一轮半小时hr面。hr面其实聊的还行，一度觉得有戏（但现在过了一年了还是杳无音讯，连个拒信都懒得发的）。不过自己profile完全不trader所以也合情合理"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 4 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-5",
    "company": "CQ 资产（原文缩写）",
    "type": "面试",
    "round": "流程资料摘录 04",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "CQ 资产（原文缩写） · 流程资料摘录 04",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 5 行",
        "transcript": "4.cq资产。投递的第四家公司，也是有留用机会的实习，每两个月会考察一次实习生，实习工资也包含bonus。效率很高，投递当天就给了笔试，30min，要求得分率85%以上才通过，主要是难度不高的数学题，时间有点紧。笔试当天就约了面试。\n一面应该是一个junior，大概先聊了20min左右的简历，然后开始做题。一道是一个圆随机生成三条弦把圆划分的区域数量的期望。一个是绿皮书上的color balls。而且在我思考题目的时候，面试官还会有意打断我又问我简历里之前谈到的问题。总之就是在不断被打断的状态下做题。这轮一共45min左右。\n然后约了二面。聊了10min的motivation和20min的简历，然后开始问一些零散的题目，比如给一个dataset如何高效编程实现某个功能。还有hash映射原理，高效求max drawdown等等。还问了一些简单的机器学习的概念。总的来说不算难，尽管有的问题我没有给出最优解。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 5 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-6",
    "company": "国内某老牌百亿私募",
    "type": "面试",
    "round": "流程资料摘录 05",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "国内某老牌百亿私募 · 流程资料摘录 05",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 6 行",
        "transcript": "5.国内某老牌百亿私募。投了简历之后反馈还是挺快的，笔试是2.5h的OA，其中两道lc medium，一道是全排列相关的（回溯），一道是和字符串相关的dp。其他都是数学题+开放性质的问题，总体难度中等，时间适中，不需要全部做对就过了。\n\n一面是一个senior研究员。问了一下简历上的某段经历，然后出了两道简单的数学题，绿皮书难度，例如一枚公平硬币HHT在HTH之前出现的概率这种。最后还出了一道算法题，口述怎么做即可，要求尽量用高效的做法。总体来讲偏easy。这一轮面了45min左右。\n\n二面也是一个senior研究员，本科数学phd统计背景。先是探讨了简历上的一些研究经历。然后开始做题。第一题是信封悖论问题，也叫exchange paradox，是概率里面一个经典问题。第二题问为什么默认人都是风险厌恶的。\n这两个题目都具备一定的开放性，而且是和面试官探讨性质的，体验比较好的一点在于面试官会和你互动并且尊重你的观点。结束的时候面试官还说祝你好运，一度以为凉了。这一轮45min左右。\n\n三面感觉是一个更senior的研究员。简单的自我介绍。先探讨了一些bq，例如我是怎么知道他们招聘信息的，我们学院毕业生就业去向，以及为什么想来量化等等。然后就是问简历。最后就是做题：有一个三角形ABC，一开始在A点，每一时刻向每个点移动的概率都是1/2，求第一次把每一条边都走过的移动次数的期望。然后再拓展至四面体ABCD的情形。最后又考了红皮书上的两道原题。这一轮55min左右，感觉聊了很久的天。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 6 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-7",
    "company": "国内某新晋百亿私募",
    "type": "面试",
    "round": "流程资料摘录 06",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "国内某新晋百亿私募 · 流程资料摘录 06",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 7 行",
        "transcript": "6.国内某新晋百亿。投递的秋招全职。这家居然提供北京户口，真是量化公司中的一股清流。笔试是3h的OA，包括常规类型的数学题（概率统计博弈论）+lc medium算法+一些读代码写结果之类的题型。难度中等吧，而且时间很充裕，所以没啥好说的。\n面试是两位面试官，一胖一瘦。面试主要围绕实习内容展开。面试官问了大量你是如何处理xx数据之类的细节问题，对研究的细致程度异常关注。如果是xx数据你又会如何处理，如何写alpha之类的，还会不断追问。之前实习做的不扎实的问题暴露出来了，感觉被虐的挺惨的。\n此外还问了很多简历之外的问题，例如A股市场t+1交易制度对市场有什么影响，A股涨跌停限制对市场有什么影响，Lasso和逐步回归用来做变量筛选各有什么特点，还有一个cpa里的问题，具体记不得了，但是估计只有备考cpa的人才能答得上来。大概面了1小时。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 7 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-8",
    "company": "某 BB 行 Quant Research 组",
    "type": "面试",
    "round": "流程资料摘录 07",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "某 BB 行 Quant Research 组 · 流程资料摘录 07",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 8 行",
        "transcript": "7.某bb行quant research组\n1st round.主要是问简历。1h的面试起码有50多min在问简历。对方比较关注研究的深度以及用到的模型。关键是需要让不懂的面试官能理解并认可自己做的事情。后来还问到了协方差矩阵为什么是半正定的，以及什么时候正定。什么是python的list comprehension。什么是深复制和浅复制。\n\n2nd round没有自我介绍和简历，直接要我拿出纸笔开始做题。一道来自绿皮书的概率原题:一个盒子里30 red balls，20 blue balls，10 greenballs, take out one by one withoutreplacement，问green ball在red和 blue ball之前被拿光的概率。布朗运动的定义。1/Bt满足的SDE。一维对称随机游走的stopping time问题。首次到达时间的CDF\n最后，risk-free rate上升对call option price的影响。还出了个简单的二叉树定价的题目求callprice and delta\n\n3rd round.问了很多简历以及机器学习的问题然后主要问time series和regression。比如，ACF和PACF的定义，如何计算。对Ridge/LassoElasticnet的探讨。最后是一道概率题:X和Yiid standard Normal dist，求XX+Y=1的均值和方差。这一轮面了 1h。两周之后收到拒信。不过xdjm们可以看到sellside的题目还是友好太多了。店面过的话会进到 virtualonsite，也是3轮以上的 back to back，不过问题难度会高一些。进到summerintern的话，需要3个月全职实习+3个月兼职实习to be considered for a returnoffer。实习生人数巨少，按照惯例来看留用几率还是很大的。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 8 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-9",
    "company": "国内某新晋百亿私募",
    "type": "面试",
    "round": "流程资料摘录 08",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "国内某新晋百亿私募 · 流程资料摘录 08",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 9 行",
        "transcript": "8.国内某家新晋百亿。投递的是秋招全职。笔试是2h的线上OA，常见类型数学题+Ic算法，总体难度属于中等吧，个别题计算量略大，做出来90%左右过了。面试需要到公司现场面，先后见两个组的groupleader，各1h的样子根据公司的说法，通过的话需要做2-3个月的实习然后再留用。他们对实习生的要求会比较高最多招1-2个，基本上按照全职研究员的标准来选拔，实习工资也是按照全职的 base标准发放的。不出什么意外的话实习生都可以顺利留用\n\n第一组两位面试官，一胖一瘦，一黑一白，一进来就板着个脸(事实证明面试全程都板着脸)。简单的自我介绍过后，一开始先问了一个笔试里面算法题某个地方的细节问题，只怪我笔试做完就忘记那题了，于是卡了很长时间回忆那个小的issue是如何address的。估计这个还挺减分的。然后重点聊了我的实习经历。提出的一些问题都是我之前没有想过的，一定程度上超出了我做的事情，但是事后来看我认为都是相关且重要的问题。这个部分答得不太好吧。最后再随便问了下简历别的经历。当时觉得被闷头一棍，肯定是凉了。\n\n第二组休息了10分钟，第二组面试官进来了。突然发现我好像在Linkedin上见过这个人，我差点笑场了，心想他怎么突然出现在这家公司了。这个面试官的风格好了很多。但是可能因为被第一组搞了心态的缘故，导致我自我介绍的时候甚至都语速过快，直接被打断问，慢点刚才那句是什么。先聊实习经历，问到了大量的数据处理的细节问题，包括如何address一些潜在的坑，完全就是看研究做的细不细致。此外和上一组类似，也问了很多我之前没有怎么思考过，一定程度上超出所做工作范围的问题，例如假设一个场景，如何将A股市场上众多的long-short alphas合成一个long-hedge strategy。面试官说你之后也可以好好想想。\n\n还问到了一道数学题吧，一个三维空间切三刀最多可以划分成多少个部分。最后还聊了很多bq，我感觉这部分我发挥也很差。面试官问我有啥问题，我居然直接拿这家公司和我之前实习的公司(新晋百亿vs老牌百亿)对比，问各自的优缺点，对应届生的建议啊啥的。反正既然都凉透了还不如好好聊聊天他让我先谈谈自己的看法。结果面试官淡淡说了句，我觉得你心里肯定已经有答案了。这一轮大概面了一个多小时。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 9 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-10",
    "company": "国内某新晋百亿私募",
    "type": "面试",
    "round": "流程资料摘录 09",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "国内某新晋百亿私募 · 流程资料摘录 09",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 10 行",
        "transcript": "9.国内某新晋百亿(但现在规模已经很大了)本来没想投的，但是“好心”的猎头朋友帮我投了还说帮我争取到了一个面试机会根据公司的说法会有两轮面试，然后会经历一个2-3个月的实习考察。实习生会按照全职的标准进行选拔，不出什么意外的话实习生都能够转正。实习期是可抵扣全职期间的试用期\n\n面试是一个junior研究员(从交流过程中可以明显看出确实很junior...)，先是问了一下简历上的经历，随后是对一个开放性的问题进行探讨，可以看得出来是面试官实际工作当中遇到的问题。幸运的是恰好我对那个问题还比较了解，虽然我没有自己亲手做过，但是对那一块的文献比较熟悉 (熟读paper三百篇，不会实验也会编)，大此还算是很能聊，针对面试官提出的一些问题我都提出了解决方法(不敢说是optimal但好歹人家发了 topjournal啊)，对方也还算比较认可。\n\n面试官问了一些简单的题目，例如ols的残差项的和是否为0;Lasso和Ridge的区别;xiiid uniform[01]，直到xi序列不是单调递减为止停止，求xi长度的期望。\n\n最后按照惯例，面试官问我还有什么其他问题我就随便问了下公司研究员的发展路径。比较interesting的部分来了。面试官第一反应说，没啥发展路径啊。接着还补充说，研究员可以积累自己的因子库，虽然有的事情对公司没有什么价值但是对自己是有价值的......我心想这哥们也太实诚了，真是印证了我在知乎上看到的对这家公司的评价。我确定当时自己没有笑出来。他又改口到，当然了不能当着公司的面这么说...我一个劲的点头表示同意面试官说的任何话，同时露出不失尴尬而礼貌的微笑，希望这个问题没有冒犯到对方。整个过程大概50min左右。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 10 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-11",
    "company": "国内某扩张中百亿私募",
    "type": "面试",
    "round": "流程资料摘录 10",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "国内某扩张中百亿私募 · 流程资料摘录 10",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 11 行",
        "transcript": "10.国内某新晋百亿（处于扩张中，很缺人）。\n一面直接就见投资总监。先聊了一些motivation相关的，之后就主要从简历内容展开。但是会问很多简历之外的问题考察知识掌握的深度和厂度。比如被问到了如何用梯度下降法求解Lasso;如何判断数据集是否存在多重共线性;凸优化理论，强对偶和弱对偶的关系等;如何将signal转换成股票的仓位等等。最后还问了1-2个简单的数学题。这一轮面了70min左右。\n\n二面也就是终面见另一个投资总监。花了大量的时间在聊天，也可以理解是 bq，可以发现总监level的面试官一般喜欢问更宏观的问题，例如你对XXXX的认识，你XXXX的方法论(而junior研究员一般就爱问你写过的最好的因子) 。这样的问题没有标准答案，每个人都有话可谈，但是也容易暴露认知水平，因此只能靠平时积累。面了将近1h正当我以为要愉快的结束之时，面试官突然说考我几道题目，真是猝不及防。python里的GIL，还有一些不太记得感觉比较偏 dev的八股文题目，还有绿皮书上的赛马问题要证明optimality，还有一个brain teaser..."
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 11 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-12",
    "company": "国内某老牌百亿私募（MS）",
    "type": "面试",
    "round": "流程资料摘录 11",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "国内某老牌百亿私募（MS） · 流程资料摘录 11",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 12 行",
        "transcript": "11.国内某老牌百亿（ms）。投递的秋招全职。先是一个2h的线上OA，考察内容主要是数学题 (绿皮书原题)，coding (两道Ic medium原题和一些算法常识) 以及一些金融常识题。难度偏低，做完了还剩特别多时间。\n\n随后安排一面，先后见两位 pm，每个人半小时。两位面试官基本上都只问了简历内容，整个过程算比较轻松，没什么难度。\n二面大概有3位面试官，其中一个是hrd，两位是公司的合伙人。整个面试大概有1h，比较迷的是可能有个40分钟以上都是hrd在提问，聊一些bq方面的问题。两位合伙人讲话不多，就随便问了几个经历相关的技术问题。\n三面是另一个hr的面试，大概一个小时，都在聊bq。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 12 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-13",
    "company": "某全球 Quant HF 香港办公室",
    "type": "面试",
    "round": "流程资料摘录 12",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "某全球 Quant HF 香港办公室 · 流程资料摘录 12",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 13 行",
        "transcript": "12.某top globalquant hf hk office。说实话当时收到这家面试还是有点惊讶的，还以为只有ivy的理工科phd才能过简历。当时和hm交流希望尽量把简历给适合的组看，但没想到来了个做crypto的面官，无了个大语...面官大概有十年的从业经历了，非常资深，之前是互联网码农后来转的qr。\n解锁人生第一次23:30面试经历\n之前面外资，面官是中国人的话一般都是中文面，这次面官用英文还有点不太适应。整个面试其实都是在讨论我的实习经历，和面官的交流也没啥问题，对方也展示出了一定的 positivecomments。但是当对方试图问一些我工作范围之外的问题时 (例如如何从signal到仓位的转化)，我就并没有给出让对方满意的解答了。因此对方说觉得我实习做的事情还是太局限了一点，他们对alpha research的定义会更广泛-些。只能怪自己实习做的还是太少了吧\n整个面试大概将近1h。感觉就是一场不温不火的交流，也没有机会展示出自己的优势。毕竟为了这场面试准备了很久所以感觉蛮可惜的。估计他最后给我的feedback是neutral，因为我是面完之后很久才收到的拒信"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 13 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-14",
    "company": "未标注公司",
    "type": "面试",
    "round": "流程资料摘录 13",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "未标注公司 · 流程资料摘录 13",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 14 行",
        "transcript": "13.\n1st phone interview.面试官是中国人，base ny吧。先花20多min时间讨论了实习经历，随后又问了一道很简单的统计题。最后给了一个hackerrank链接现场写 coding题。题目难度不大，是一个二维矩阵相关dp问题，感觉大概是lcmedium里面偏易难度的题目，不过我当时完全读懂题花了点时间。有惊无险还是15min搞定了，面试官还是比较满意的。这一轮面了50min左右。\n2nd phoneinterview.面试官是一个欧洲小哥base sg，感觉是法国人吧 (not sure) ，让我自我介绍完之后开始让我做题目。让我抓狂的地方开始了，他念题目的过程中我发现我听不懂他说话，于是乎我只能请他不断重复，然后我再复述题目意思确保我正确理解题目意思了。这些来来回回增加了不少交流成本，导致1h多一点的面试就只做了5道题，而且都是不难的题目。其中一道题还花了20-30分钟，我一开始给的解答还是错的，面试官企图启发我一下，但是我没太听懂，终于听懂后还是很快反应过来了。面完当时感觉一阵无语，觉得自己应该g了\n3rd phoneinterview.没想到2nd还是过了，3rd面试官是中国人，base hk。这一轮面试先是做了1-2道简单的数学题，然后针对一个开放问题的探讨，和投资组合优化相关的。英语听力的劣势再次暴露出来了，真是苍天rao过谁，这个话题不算难，但是发挥肯定受到了影响。我最后在化简的时候面试官说时间到了。这一轮1h左右。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 14 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-15",
    "company": "QX（北京，原文缩写）",
    "type": "面试",
    "round": "流程资料摘录 14",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "QX（北京，原文缩写） · 流程资料摘录 14",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 15 行",
        "transcript": "量化面试记录（Quant Researcher岗）\n面试公司：QX（北京那家）\n这家面试体验很好，几轮面试官都是研究团队的，比较尊重面试者，期待一个共事\n\n面试流程：\n1. 简历面（通过）\n这轮是alpha小组的leader面的，面试主要是问简历，没有技术问题，估计是考察跟岗位的匹配度，围绕简历过了一遍，说是45分钟，实际20分钟就结束了。\n2. 技术面（概率+编程）\n这轮是有两个面试，给安排在一起的，不管通过与否两场都会面，每场45分钟。第一面概率/数学，只有两个大问题，都是概率，题目本身不难，不过如果大问题答出来了下面会有好几个延申题，难度高一些，不过总体还可以，面试官准备的问题45分钟我刚好都答完了；第二面编程，很常见的算法题，只有一题，同样答完后会有延展问题，对我来说比概率面简单很多。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 15 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-16",
    "company": "聚宽",
    "type": "面试",
    "round": "流程资料摘录 15",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "聚宽 · 流程资料摘录 15",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 16 行",
        "transcript": "量化面试记录（Quant Researcher岗）（社招）\n面试公司：JQ聚宽\n面试流程：\n1. 简历面\n面试官是个PM级别的，面试时间大约30-45分钟，围绕简历详细问了每段经历，并且在我的研究领域拓展问了不少问题，比较细节，也说明面试官还比较懂行，面试体验不错。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 16 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-17",
    "company": "MX（原文缩写）",
    "type": "面试",
    "round": "流程资料摘录 16",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "MX（原文缩写） · 流程资料摘录 16",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 17 行",
        "transcript": "量化面试记录（Quant Researcher岗）\n面试公司：MX\n这家是偏高频的，规模20左右，我是做中低频的，本来没有期望有面试\n面试流程：\n1. PM面\n上来直接是PM面的，可能团队没有很大吧，主要是围绕简历问了问题，没有很深，9点的面试面到9点20几就突然结束了，也没有给我机会问问题，可能是结果不好/着急交易去了？"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 17 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-18",
    "company": "QX（上海，原文缩写）",
    "type": "面试",
    "round": "流程资料摘录 17",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "QX（上海，原文缩写） · 流程资料摘录 17",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 18 行",
        "transcript": "量化面试记录（Quant Researcher岗）\n面试公司：QX（上海总部那家）\n他家CTA为主，我面的是股票团队，去年有面过，去年面试直接是老板面+下offer，但最后没去，今年流程增加了，我又来了\n面试流程：\n1. 笔试（通过）：简历过筛以后先笔试，笔试内容为编程，4小时内答4道题（其实是2道，前3题是连续的），题量还行，做完不是问题，考的就是工作内容，并不是算法，并且允许查资料，可以适当copy的那种。\n\n2. 一面：跟股票团队的PM面"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 18 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-19",
    "company": "QL（原文缩写）",
    "type": "面试",
    "round": "流程资料摘录 18",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "QL（原文缩写） · 流程资料摘录 18",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 19 行",
        "transcript": "量化面试记录（Quant Researcher岗）\n面试公司：QL\n这是21年面的，最后下了offer，没去，他们家是PM制，几个组独立竞争，比较担心这样制度下打工人的安全，不小心就整组撤掉了，所以没去\n面试流程：\n1. PM面：跟中低频组的PM聊的，主要还是策略的大致思路，这个组当时是新建的，估计没有人，做的也还不深，现在听说已经招了不少人了，并且在QL中活下来了，估计还是有水平的。\n2. 投资总监面：PM面完当场就接着CIO面了，所以去了一趟公司就走完流程了，CIO大致问问策略，具体记不清了。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 19 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-20",
    "company": "TWX（原文缩写）",
    "type": "面试",
    "round": "流程资料摘录 19",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "TWX（原文缩写） · 流程资料摘录 19",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 20 行",
        "transcript": "量化面试记录（Quant Researcher岗）\n面试公司：TWX（成都+上海）\n22年面的，这家上海office和团队都是新的，上海团队还没有实盘，最后拿了offer\n面试流程：\n1. CIO面：CIO的水平很强，原来是外资trexquant的PM刚回来，模型的各方面都比较懂，但目前主要精力在组合训练上，挖因子的活希望派给研究员们，问是否愿意加班。\n2. 老板面：也是刚外资virtu回来的，大致问了一下策略，问是否愿意加班。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 20 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-21",
    "company": "九坤投资",
    "type": "面试",
    "round": "流程资料摘录 20",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "九坤投资 · 流程资料摘录 20",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 21 行",
        "transcript": "九坤投资: hr非常nice也很耐心 会详细沟通简历 笔试究极究极难 刁钻的数学题和很多c++都会考 最后笔试应该是没过的 靠着不错的实习进入面试 第一轮是给十几位team leader根据自己过往经历presentation 效果应该还行 但在后续的1v1面试中 问了两道题都在提示下勉强答出 最终被拒"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 21 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-22",
    "company": "AlphaGrep",
    "type": "笔试",
    "round": "流程资料摘录 21",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "AlphaGrep · 流程资料摘录 21",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 22 行",
        "transcript": "alphagrep: 一家印度人开的外资 走的是worldquant模式 全世界有不少office 上海当时跟我说有两个hc 第一轮笔试是leetcode类型 medium 3道题 第二轮笔试写着是专门给qr的 4道leetcode(至少2道hard) 还有两道sql 没来得及做完"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 22 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-23",
    "company": "会世资产",
    "type": "面试",
    "round": "流程资料摘录 22",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "会世资产 · 流程资料摘录 22",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 23 行",
        "transcript": "会世资产: 一家偏小的私募 面试主要聊经历 通过后有个笔试project 对公司本身兴趣没有太大 就放弃了"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 23 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-24",
    "company": "平方和投资",
    "type": "面试",
    "round": "流程资料摘录 23",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "平方和投资 · 流程资料摘录 23",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 24 行",
        "transcript": "平方和投资:前年申请过一次 笔试统计概率 通过 面试都是红皮书当时没刷过被拒 今年笔试没通过 笔试难度明显提升了"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 24 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-25",
    "company": "鸣熙",
    "type": "面试",
    "round": "流程资料摘录 24",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "鸣熙 · 流程资料摘录 24",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 25 行",
        "transcript": "鸣熙: 直接是面试 应该是一位刚从国外回来的trader给组里招人 先聊经历然后聊算法 有道题没答出来 被拒"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 25 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-26",
    "company": "因诺资产",
    "type": "面试",
    "round": "流程资料摘录 25",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "因诺资产 · 流程资料摘录 25",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 26 行",
        "transcript": "因诺资产: 去年和前年都申了 两次做数理统计笔试都很难大部分都做不出 但都有给面试 基本面因子方向 面试官很nice 问了基础统计和建模概念 分享了经历后面试官解释了一些我过往实习和因诺会有的区别 分享了一些我做基本面因子的思路和方法 感觉聊的挺开心的 但还是被拒了"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 26 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-27",
    "company": "乾象投资 / Metabit",
    "type": "面试",
    "round": "流程资料摘录 26",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "乾象投资 / Metabit · 流程资料摘录 26",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 27 行",
        "transcript": "metabit乾象: 感觉非常geek ai应用较多的一家私募 也是第二次申请 前年我记得主要是问的ml ai 他们家也是主打ai方向吧 这次面试问纯概率统计 做的不好回答正确率55开吧 被拒"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 27 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-28",
    "company": "尚雅投资",
    "type": "面试",
    "round": "流程资料摘录 27",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "尚雅投资 · 流程资料摘录 27",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 28 行",
        "transcript": "尚雅: 一家中等规模私募 正在转型期 面试直接是pm聊经历和会的技能 面过后发了一个project 大概是用c++进行一个策略的实现 公司主要用c++ 我没那么擅长兴趣也不大就放弃了"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 28 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-29",
    "company": "非凸科技",
    "type": "面试",
    "round": "流程资料摘录 28",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "非凸科技 · 流程资料摘录 28",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 29 行",
        "transcript": "非凸科技: 一家提供高频交易支持的公司 每天交易量很高 但不算私募 面试官超nice 以前工作的地方和我之前实习公司风格极度接近 所以聊我之前实习经历的时候聊的很深入 也和我讨论了挖因子包括组合等等背后的各种原理 聊的很开心 甚至学到了很多，以及对挖因子有了很多新的insight 但因为我没做过高频 只发了可转正实习offer"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 29 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-30",
    "company": "宁苑沛骅",
    "type": "面试",
    "round": "流程资料摘录 29",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "宁苑沛骅 · 流程资料摘录 29",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 30 行",
        "transcript": "宁苑沛骅: 感觉是一家团队背景不错的私募 一二面都是不让打草稿口答概率统计和brainteaser 一面问了8道题吧全部做出 二面当时新冠第一天身体贼难受状态很差 问到第二道题面试官就直接结束了面试(然后我就倒头睡觉了"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 30 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-31",
    "company": "概率投资",
    "type": "面试",
    "round": "流程资料摘录 30",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "概率投资 · 流程资料摘录 30",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 31 行",
        "transcript": "概率投资: 第一轮30min研究员面聊经历 第二轮笔试project orderbook相关 难度不大 第三轮两小时统计概率笔试 十几道题 基本都是常见题 我感觉就一道不会做 被拒"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 31 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-32",
    "company": "致诚卓远",
    "type": "笔试",
    "round": "流程资料摘录 31",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "致诚卓远 · 流程资料摘录 31",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 32 行",
        "transcript": "致诚卓远:笔试6道左右 有数学证明 统计概率 逻辑 难度超级大 大概就做出来两道 无后续"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 32 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-33",
    "company": "银河德睿",
    "type": "面试",
    "round": "流程资料摘录 32",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "银河德睿 · 流程资料摘录 32",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 33 行",
        "transcript": "银河德睿: 银河证券 央企孙公司 主要做marketmaker业务 也有小部分交易资管 直接就是部门leader+hr面 介绍完对经历问了些问题 就开始非常细致的讲他们的业务方向工作模式等等 感觉面试下来我说的没面试官多 因为工作方向不匹配被拒"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 33 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-34",
    "company": "卓瑞",
    "type": "面试",
    "round": "流程资料摘录 33",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "卓瑞 · 流程资料摘录 33",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 34 行",
        "transcript": "卓瑞: 某天下午突然打电话过来就开始面试 自我介绍聊项目实习经历 和我工作期望方向不匹配无后续"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 34 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-35",
    "company": "金锝投资",
    "type": "面试",
    "round": "流程资料摘录 34",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "金锝投资 · 流程资料摘录 34",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 35 行",
        "transcript": "金锝投资: 连着两轮技术面 都是先聊经历 每轮问两道统计概率题 一轮都答出来另一轮半答出来 被拒"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 35 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-36",
    "company": "IMC",
    "type": "面试",
    "round": "流程资料摘录 35",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "IMC · 流程资料摘录 35",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 36 行",
        "transcript": "imc：第一轮virtual 4-6道主观回答题和两道超简单统计概率 第二轮hr面聊对qr和量化的一些想法和选择公司的标准 然后问了同一系列的3道统计概率 技术一面针对某一统计概率问题 无限延伸扩展难度 做出来一道增加难度下一道 我最后一共做出来7道 但被拒 听说imc早就没hc了"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 36 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-37",
    "company": "聚宽",
    "type": "面试",
    "round": "流程资料摘录 36",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "聚宽 · 流程资料摘录 36",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 37 行",
        "transcript": "聚宽: 第一轮笔试统计概率难度中等偏上一点点 基本都做出 第二轮面试聊经历和实习面试过程中表达出对我认可 第三轮也是聊经历和一点点统计概率 感觉聊的也还行 但被拒"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 37 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-38",
    "company": "玄信",
    "type": "面试",
    "round": "流程资料摘录 37",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "玄信 · 流程资料摘录 37",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 38 行",
        "transcript": "玄信: 一整个下午 先是三个qr面试官挨个聊经历和问统计概率 然后是开发面试官来让现场写码(对以往的某个经历里的算法做出复现 最后一轮hr面 时间爆长 正好那天发烧 还是挺折磨的"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 38 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-39",
    "company": "Akuna Capital",
    "type": "笔试",
    "round": "流程资料摘录 38",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "Akuna Capital · 流程资料摘录 38",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 39 行",
        "transcript": "akuna capital:最近投的 第一轮coding test 一小时三道题 leetcode medium-hard 不是很难 第二轮math test 5道题包括概率论 微积分 brainteaser 统计 经历 过程开摄像头"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 39 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-40",
    "company": "茂源资本",
    "type": "面试",
    "round": "流程资料摘录 39",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "茂源资本 · 流程资料摘录 39",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 40 行",
        "transcript": "茂源资本:老牌百亿私募 先由部门老大面主要聊经历 少量概率统计 然后project test(数据处理 统计 预测) 后续 老板面 副总面"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 40 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-41",
    "company": "鸣石",
    "type": "面试",
    "round": "流程资料摘录 40",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "鸣石 · 流程资料摘录 40",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 41 行",
        "transcript": "鸣石:第一轮统计概率笔试 十道题左右 难度中等基本都能做出 技术一面主要聊经历 pm&老板面 最后hr面 流程很专业也很丝滑"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 41 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-42",
    "company": "启林投资",
    "type": "面试",
    "round": "流程资料摘录 41",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "启林投资 · 流程资料摘录 41",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 42 行",
        "transcript": "启林: 概率统计笔试 难度适中 随后是组长直接面主要聊经历给组里招人"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 42 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-43",
    "company": "上海某新晋百亿私募",
    "type": "面试",
    "round": "流程资料摘录 42",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "上海某新晋百亿私募 · 流程资料摘录 42",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 43 行",
        "transcript": "上海某新晋百亿私募\n第一轮是2h的笔试，题目主要是绿皮书的延伸题以及leetcode medium的coding，共11题\n第二轮先和一个senior qr面试，主要问了几个brain teaser，其中题目有：\n1. X, Y是独立的N(0,1) 随机变量，Y对X做回归，问回归的R2和sample size n的大致关系\n2. 有没有可能世界上所有国家飞机死亡率都比火车死亡率高，但是总体上看世界范围内飞机死亡率更低？\n3. n个人都有一顶自己的帽子，随机选择，问选中自己帽子的人数期望\n4. 一个未知最高次项非负整系数多项式f(x), 问需要带入几次x的值能完全确定这个多项式\n之后和老板聊了半小时简历\n第三轮先和一个senior qr聊了聊简历，然后被另一个senior qr问了一些机器学习相关的开放性问题，比如noise太大fit什么model比较好\n总体上感觉氛围还不错，open question可能需要更多准备"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 43 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-44",
    "company": "国内某中小型 Fund",
    "type": "面试",
    "round": "流程资料摘录 43",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "国内某中小型 Fund · 流程资料摘录 43",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 44 行",
        "transcript": "国内某中小型fund，目前资管规模30e\n他们家第一轮就是巨长的一轮，共有4个qr，两个开发，1个老板，1个hr面试，问的题目五花八门😅：\n1. 三个随机变量两两之间相关系数都是r，求r的取值范围\n2. 七男八女围着圈坐，问男女相邻出现的次数期望\n3. 绿皮书上经典掷三个骰子问题\n4. 已知2的29次方是9位数，且正好缺失了0-9之间的一个数字，求缺失的那个数字\n5. 4*4的棋盘，马从一个角落出发（走日字），问回到出发点的期望步数\n6. Y对X1和X2做线性回归的R2记为R_1^2，Y先对X1做线性回归，然后用得到的残差对X2做线性回归的R2记为R_2^2，问R_1^2和R_2^2的关系\n7. 蚂蚁从正方体的一角出发，沿楞对称随机游走，问回到出发点的期望步数\n8. 赌徒开始有1块钱，每次获胜获得1块，否则失去1块，获胜的概率为2/3，问破产之前获得5块的概率\n9. 线性回归把数据复制一遍，问beta估计量，R2，以及t test statistic怎么变\n10. leetcode merge interval\n11. leetcode 滑动窗口最大值\n还有一些brain teaser和take home的思考题，总体来说题目并不难，但是面试时间很长，类似于国外的final onsite"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 44 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-45",
    "company": "某外资量化公司",
    "type": "面试",
    "round": "流程资料摘录 44",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "某外资量化公司 · 流程资料摘录 44",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 45 行",
        "transcript": "某外资量化公司北京/上海\n第一轮是3h的笔试，共40题，难度不是很大，绿皮书难度，印象比较深的就一题直角三角形边长3，4，5，内部随机选一点，问这个点满足“到三边距离最长的为其到斜边距离\"的概率\n\n第二轮和一个senior qr以及一个vp聊，问了一些 brain teaser以及概率题\n1.扔硬币到HHH出现的期望次数\n2.扔般子，扔到123记1分，扔到45分数清零，扔到6停止，问得分的期望\n3.假设今天日期记为20230330，问使得各位数字都不同的下一个日期是啥\n4.桌子上有Q，K，A三张牌，甲先摸一张乙再摸一张，比大小，甲看见自己牌之后可以加注，同理乙在甲加注之后可以跟注(如果甲没加注就直接比大小)，问甲拿到三张牌的加注策略分别是什么以及乙在看见甲加注之后的跟注策略\n\n第三轮和两个小组leader聊，问的也是题\n目\n1.从任意一个分布里面 draw sample，如果sample比上一个小则继续，否则停止，问抽的次数期望\n2.n位2进制数，问没有两个1相邻的概率\n3.n边形，在每一个顶点对称随机游走，问第一次遍历图上每条边的步数期望\n\n第四轮和两个manager面试，主要问了问简历上的科研项目，没有technical的问题"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 45 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-46",
    "company": "北京某新晋百亿私募",
    "type": "面试",
    "round": "流程资料摘录 45",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "北京某新晋百亿私募 · 流程资料摘录 45",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 46 行",
        "transcript": "北京某新晋百亿\n第一轮是2h的笔试，难度还可以，隐约记得一个题：\nn个均匀分布在[0,1]上的随机变量，问max和min之间的correlation\n\n第二轮和两个小组长面试，问了一些概率统计题以及笔试题的推导过程：\n1. leetcode 滑动窗口最大值 (出现频率很高)\n2. 五边形，从一个顶点出发，在每个顶点做对称随机游走，当第一次遍历每个顶点的时候，停在哪个顶点的概率最高\n3. 用一把五维的刀切六维空间，切6刀，问最多能切多少个部分\n4. 如何提取新闻中的信息预测股票收益(open question)\n据说招人很少"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 46 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-47",
    "company": "国内某百亿私募",
    "type": "面试",
    "round": "流程资料摘录 46",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "国内某百亿私募 · 流程资料摘录 46",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 47 行",
        "transcript": "国内某百亿私募\n第一轮是2h的笔试，7道题，考察范围有概率，Markov chain，线性回归，brain teaser，鞅，以及一道leetcode medium的编程题，总体难度不大\n\n第二轮和一个senior qr聊简历，就问了一些科研项目，没有做technical题目\n\n第三轮是hr面试，标准的格式化bq面试，问的问题有些和第二轮都是重复的…\n\n第四轮是老板面试，15min，也就问了问简历\n这是唯一一家面试过程中一道technical都没问的公司"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 47 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-48",
    "company": "北京某自营公司",
    "type": "面试",
    "round": "流程资料摘录 47",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "北京某自营公司 · 流程资料摘录 47",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 48 行",
        "transcript": "北京某自营公司\n第一轮笔试，1.5h，两道leetcode medium coding，八道概率统计题，难度不小，估计对一半就能过\n\n第二轮一个senior qr面试，问了很多零散的题目，举几个例子吧：\n1. 已知矩阵A，怎么计算A的k次方\n2. 举一个协方差是0但不独立的例子\n3. 用一枚biased coin构造fair game\n4. 解释一下bias-variance tradeoff\n总之就是一些简单的概率小结论以及机器学习的基础知识，很杂乱"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 48 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-49",
    "company": "上海某百亿私募-maybe衍复",
    "type": "面试",
    "round": "流程资料摘录 48",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "上海某百亿私募-maybe衍复 · 流程资料摘录 48",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 49 行",
        "transcript": "上海某百亿私募-maybe衍复\n第一轮是2h的笔试，8道题，难度挺大，应该是对一半就能过 参考题：已知协方差矩阵，问随机向量在任意方向投影的方差最大值\n\n第二轮是一个senior qr面试，问了一些线性回归的题目，各种R2的变换，比如给observation加权重怎么定义R2，有点压力面试的感觉"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 49 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-50",
    "company": "某外资prop trading上海office",
    "type": "面试",
    "round": "流程资料摘录 49",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "某外资prop trading上海office · 流程资料摘录 49",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 50 行",
        "transcript": "某外资prop trading上海office\n第一轮是三道coding，leetcode medium难度，限时1h，需要比较熟练\n\n第二轮是线上的on-demand interview，一共6道多选题，每题5min，需要英文口述思路及答案，题目涉及快速计算，概率论，数学分析，线性代数，参考题：\n1. 1-100的数，对于不包括7和8数字的数求和\n2. 给定moment generating function求方差\n\n第三轮是和一个senior qr面试，三道统计题+一道live coding，参考题：\n1. Cor(Y,X_1)=Cor(Y,X_2)=0.5, Cor(X_1,X_2)=rho, Y对X_1和X_2做线性回归，求Cor(Y, Yhat)\n2. 没有截距项的线性回归，问R2的取值范围\n\n第四轮就是final round了，会有三位面试官，主要也是问题目和live coding，参考题：\n1. Bertrand’s ballot problem\n2. 用python现场编写一个class，录入新的observation以及输出window maximum"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 50 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-51",
    "company": "上海某老牌百亿私募",
    "type": "面试",
    "round": "流程资料摘录 50",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "上海某老牌百亿私募 · 流程资料摘录 50",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 51 行",
        "transcript": "上海某老牌百亿私募\n第一轮是2h的笔试，3道简答，3道金融，3道数学，3道编程，leetcode medium难度，总体上不难，参考题：圆上n个点在同一半圆的概率是多少？\n\n第二轮是和公司的一个leader聊，主要是问了一些简历上的科研，以及延伸出的一些open question，大概45min\n\n第三轮是公司两个合伙人以及hrd面试，主要也是问了简历上的经历，以及一些bq问题，大概也是45min，总体上面试不难，也没有问technical的题目"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 51 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-52",
    "company": "新加坡某知名对冲基金",
    "type": "面试",
    "round": "流程资料摘录 51",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "新加坡某知名对冲基金 · 流程资料摘录 51",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 52 行",
        "transcript": "新加坡某知名对冲基金上海office\n第一轮是2h的笔试，题目有点难，有些还是过去10年imo的原题，共8题，做了6个然后过了\n\n后续是连续4轮和senior qr的面试，主要都是问了简历上的科研，以及每轮做2-3个题目\n\n参考题目：\n1. 怎么由1-7随机数生成器生成1-10的随机数？\n2. 三个随机变量，问他们两两之间的相关系数的和最小可以取到多少？\n3. 用0-9这十个数字组成两个自然数，使得积最大\n4. 是否有两个骰子，刻的数字和标准骰子不一样，但是和的分布和两个标准骰子的和一样？\n5. 正实数a, b, c, d满足(a+c)(b+d)=ac+bd, 求a/b+b/c+c/d+d/a的最小值"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 52 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-53",
    "company": "美国某 Top Hedge Fund",
    "type": "面试",
    "round": "流程资料摘录 52",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "美国某 Top Hedge Fund · 流程资料摘录 52",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 53 行",
        "transcript": "美国的top hedge fund qr面试\n第一轮是2h的OA，三道coding题目，第一第二题必做，第三道选做，总体上来说不难，leetcode medium+数据处理\n\n第二轮是和一个senior qr聊data analysis，题目是如果你有一套房子想出租如何modelling租价。主要是找一些predictor，然后如何构造出一些合理因子，以及线性模型下的一些基本处理。\n\n第三轮是live coding，一个小时两道题，leetcode最大递增子系列以及判断一个数能否写成两个完全平方数的和，两道题编译成功之后都被要求优化算法。\n\n第四轮是和一个senior qr聊数学题：\n1. 两个独立均匀分布[0,1]随机变量，给出max和min的covariance\n2. n个iid sample，如何无偏估计均值和方差并证明\n3. X标准正态分布，求E|X|\n4. 已知随机变量X期望和方差都是1，求P(X<=0)的最大值\n5. 从0出发的对称随机游走，问n时间内最远跑到过a的概率\n\n第五轮之后都是和hiring manager聊，主要针对简历提问以及做一些简单的题目。\n\n美国这边很看重culture和team fit，technical的题目和国内相比简单很多，但是ng的话会要求一些实习经历，不然希望不大"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 53 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-54",
    "company": "Squarepoint",
    "type": "面试",
    "round": "流程资料摘录 53",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "Squarepoint · 流程资料摘录 53",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 54 行",
        "transcript": "Squarepoint， 前身是Barclays的自营部门，后来独立出来。号称自己是对标citadel（笑），不过在hk base就能给到7-8w hkd还是比较诱人。看了下时间线，感觉当初自己比较头铁竟然第一个拿到面试的是这家公司（还是建议先拿小公司练手，比较想去的公司留在后面）…不知道是不是我印象流里面有很多法国人，而且面我的人也是一个有法国留学经验的国人大哥（纯英文面）。说回正题，面试大约一个半小时 考察很全面，前半小时爆炒简历，技术细节问的很细。然后现场让你做一道数学题（见p2），答案在p3。题目本身不难绿皮书上应该有类似，也是比较典型的一道题，但是要求不能用纸和笔，纯口算，大家感兴趣不妨用10分钟时间自测一下。最后是live coding，一个在线平台，LeetCode easy难度一个矩阵计算相关的，要共享屏幕做"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 54 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-55",
    "company": "国内第一梯队量化私募",
    "type": "面试",
    "round": "流程资料摘录 54",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "国内第一梯队量化私募 · 流程资料摘录 54",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 55 行",
        "transcript": "国内第一梯队(top4)量化私募。第一轮笔试，七道题目两个小时，纯概率统计无coding，内容涉及排列组合，条件概率，期望，优化等，算是我做过国内外多家题目里偏简单的。数理基础扎实的70%一眼有思路，剩下30%有一定针对性刷题经验也不算难。\n\n第二轮是base在海外的一个pm面，主要问实习与research。第三轮是国内的pm，浅浅聊了下research然后就关于将来工作上的计划以及长期的职业规划。下午offer call，要先去实习（实习工资感人，不愧是国内第一梯队）。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 55 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-56",
    "company": "Jane Street",
    "type": "面试",
    "round": "流程资料摘录 55",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "Jane Street · 流程资料摘录 55",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 56 行",
        "transcript": "Jane street\n\n1 面试基本上就是做题，不会问cv（起码前几轮是不问的）。可能他们是做市业务，更侧重概率，博弈论，要求你和面试官玩各种小游戏，但是你要赢他\n\n2正确答案不重要，重要是你怎么想的。 暴力/笨方法做出来 <<< 用非常tricky/聪明给出一个思路。有些题目即使我做出来了，面试官感觉还是unhappy。\n\n3 快速给出反馈很重要，最好是边想边说，如果等太久没有反馈就会next question。\n\n4 no paper/pen allowed.\n\n下面是我自己遇到的真题，大家可以参考：\n1 假定你有一个圆形盘面，随机放三个桌子腿在这个圆盘下面，问桌子会倒的概率是多少。\n\n2 连续扔8次硬币（T and H），问H的个数为3的倍数的概率\n\n3 从1到1000000的所有数字的位数之和是多少？注意位数之和不是数字本身，举例，对于11，位数之和为1+1 = 2。\n\n4 你竞拍一枚硬币。你确信硬币的价格在0到100之间，如果你的出价大于价格，你就赢了，并以1.5倍的价格卖给你的朋友。你的出价是多少，才能获得最大的利润？"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 56 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-57",
    "company": "集微资产",
    "type": "面试",
    "round": "流程资料摘录 56",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "集微资产 · 流程资料摘录 56",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 57 行",
        "transcript": "集微资产\n他们号称人均金牌，业绩爆表，但是笔试面试难度极大。怀着试一试的心态就投了他们，首先是一个两个小时的笔试，真题见图2-5，属于我做过大大小小笔试里难度偏高，而且不局限于形式的（编程题目比较有意思）。但是也是第一个见到让证明almost surely convergence的…（概率论这里几乎早还学校了）以及要给出表达式intuition的。两个小时时间很紧，我也只做出来一半多，不过还是拿到了面试。\n面试直接面pm，主要问下cv和research，然后问我有没有金牌，我说没有，然后就没有然后了…我也挺无语。整个过程不到30分钟，感觉不是特别尊重candidate，当然也可能是我菜。\n\n小胖赌场中，只有一种游戏，赌硬币正反。硬币是均匀的，猜之前下注X元，赢了连本带利得到1.4X元，输了分文没有。玩家可任意选择下注的钱数，可以玩任意多次。为吸引客户，玩家充值1000元，可得2000元筹码，但是必须累计下注超过4000元后，才能将手上筹码兑换成等量现金，否则，赌场将扣除赠送的1000元筹码，将玩家剩余的筹码兑换成等量现金。问:你能否设计一套方案，在期望上能够从赌场中盈利?如果可以，请说出你的方案，如果不可以，请阐明理由。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 57 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "collected-interview-xls-row-58",
    "company": "WorldQuant",
    "type": "面试",
    "round": "流程资料摘录 57",
    "date": "未记录日期",
    "time": "",
    "duration": "",
    "title": "WorldQuant · 流程资料摘录 57",
    "summary": "保留资料汇编中的整段面试流程、题目与原作者评价。",
    "tags": [
      "量化研究",
      "资料摘录"
    ],
    "sections": [
      {
        "title": "面经工作表 · 第 58 行",
        "transcript": "World quant-某知名国际因子工厂,SH/BJ的Office. \n第一轮笔试3h要做40道题(类似hackerrank在线平台),时间紧任务重,内容涉及数学概率算法变成应有尽有,单看每道题目都不难,但是在相对比较短的时间会有点吃力. 最后压线做完准确率大概80%左右. 一周后面试,一个senior researcher一个VP,各自一个小时, 基本上都是现场做题,然后让你给他一个他之前没有听说过的因子(传统艺能了). 当然我感觉聊的不错, 面试官给的反馈也挺好的, 题目都做出来了,然后他们对我的research也很感兴趣…不过他么家就这么ghost了. 中途发了两三封邮件都没有人回,最搞笑的是差不多三四个月之后有人联系我让我安心等待…(笑)\n\n1 \\sum sin(1/k) 是否收敛。\n2 从100个数里随机抽三个数，他们恰好为严格递增的等差数列概率\n3 N个数，只用3/2 * N 次，能否找到最大最小值。\n4 从1-200里随机抽N个数，问N最小为多少，可以使得这N个数里存在a， b可以a被b整除。"
      }
    ],
    "sourceFiles": [
      "面经.xlsx / 面经 / 第 58 行"
    ],
    "context": "这是收集的面经资料；叙述、时间和评价属于原文作者，未认定为站点所有者的亲历。多轮流程按原记录合并保存，正文中的 OA 为笔试。"
  },
  {
    "id": "wanyan-written-recollection",
    "company": "顽岩",
    "type": "笔试",
    "round": "OA · 综合笔试",
    "date": "2026-08-11",
    "time": "",
    "duration": "未记录",
    "title": "顽岩 · 算法、C++ 与系统设计笔试",
    "summary": "4 道算法的暴力解与优化思路、订单管理代码审阅、排行榜协议设计、3 道 C++ 场景题、工作协同及 23 项基础知识解析。",
    "tags": [
      "C++",
      "算法",
      "Brute Force",
      "系统设计",
      "网络",
      "Linux",
      "Python",
      "NumPy",
      "量化交易"
    ],
    "context": "依据提供的 Markdown 笔试记录整理。参考解析为后补内容，原题回忆与题意假设有明确区分；树构造的大范围最优性证明仍待核对。",
    "sourceFiles": [
      "顽岩笔试 3f9d37e3c824803a9019defc35a1a6ad.md"
    ],
    "sections": [
      {
        "title": "算法 ACM · 暴力解与优化思路",
        "paragraphs": [
          "前四道算法按题意、Brute Force、优化和边界分开整理。可运行代码与验证范围均有标注；countSmaller 的题干由原代码语义补全。"
        ],
        "questions": [
          {
            "prompt": "数组两两差值的绝对值累乘，对 m 取模。输入第一行 n、m，第二行 n 个整数 aᵢ；求 ∏(i<j)|aᵢ−aⱼ| mod m。示例：n=3、m=3，a=[1,2,3]，输出 2。",
            "solution": [
              {
                "title": "Brute Force · 枚举每个无序数对",
                "paragraphs": [
                  "外层固定 i，内层枚举 j=i+1…n−1。每一对只乘一次，不能把 (i,j) 和 (j,i) 重复计算，也不能只乘相邻元素。每步取模，避免先算巨大乘积。",
                  "例子中三对差值为 1、2、1；答案是 1×2×1 mod 3 = 2。n=1 时空积为 1，再对 m 取模；m=1 时结果为 0。时间 O(n²)，除输入数组外 O(1) 额外空间。"
                ],
                "code": "long long ans = 1 % m;\nfor (size_t i = 0; i < a.size(); ++i) {\n    for (size_t j = i + 1; j < a.size(); ++j) {\n        __int128 d = (__int128)a[i] - (__int128)a[j];\n        if (d < 0) d = -d;\n        ans = (long long)((__int128)ans * (d % m) % m);\n    }\n}"
              },
              {
                "title": "优化 · 抽屉原理提前判零",
                "paragraphs": [
                  "m 必须为正整数。把元素按对 m 的余数分类，只有 m 种余数；n>m 时必有一对同余，差值含因子 m，因此整个乘积 mod m 为 0。否则仍枚举全部数对，不能只算排序后相邻差值。",
                  "总时间 O(n + min(n,m)²)，最坏仍是 O(n²)；原稿没有 n、m 上界，所以不能声称该剪枝一定满足正式测评时限。__int128 同时保护 long long 极值相减以及模乘中间值；这是 GCC/Clang 扩展。"
                ],
                "code": "#include <algorithm>\n#include <iostream>\n#include <stdexcept>\n#include <vector>\nusing namespace std;\nusing i128 = __int128_t;\nlong long pairProduct(const vector<long long>& a, long long m, bool fast) {\n    if (m <= 0) throw invalid_argument(\"m must be positive\");\n    // m 个余数，n > m 必然有两个数同余。\n    if (fast && static_cast<unsigned long long>(a.size()) > static_cast<unsigned long long>(m)) return 0;\n    long long ans = 1 % m;\n    for (size_t i = 0; i < a.size(); ++i) {\n        for (size_t j = i + 1; j < a.size(); ++j) {\n            i128 d = (i128)a[i] - (i128)a[j];\n            if (d < 0) d = -d;\n            ans = (long long)((i128)ans * (d % m) % m);\n            if (fast && ans == 0) return 0;\n        }\n    }\n    return ans;\n}\nint main(int argc, char**) {\n    ios::sync_with_stdio(false); cin.tie(nullptr);\n    int n; long long m;\n    if (!(cin >> n >> m) || n < 0 || m <= 0) return 1;\n    vector<long long> a(n); for (auto& x : a) cin >> x;\n    cout << pairProduct(a, m, argc == 1) << '\\n'; // 任意参数切换为暴力版。\n}\n"
              },
              {
                "title": "易错点与检验",
                "paragraphs": [
                  "[1,2,4]、m=2：答案为 0；[5,5]、m=7：答案为 0；[-2,1,4]、m=7：答案为 54 mod 7 = 5。归并排序统计逆序对不能替代本题乘积；原稿下一段 countSmaller 已归到独立题目。"
                ]
              }
            ],
            "note": "原文没有数据范围；这里按整数数组、正模数补充解法。",
            "solutionExpanded": true
          },
          {
            "prompt": "统计每个元素右侧严格小于它的元素个数。输入 n 和数组，按原下标输出 n 个计数。例：[5,2,6,1] → [2,1,1,0]。",
            "solution": [
              {
                "title": "Brute Force · 固定左端点，扫描右侧",
                "paragraphs": [
                  "对每个 i 检查全部 j>i，只有 a[j]<a[i] 才给 ans[i] 加一。严格小于意味着相等元素不计数。两重循环时间 O(n²)，答案数组 O(n)。"
                ],
                "code": "vector<int> ans(a.size());\nfor (size_t i = 0; i < a.size(); ++i)\n    for (size_t j = i + 1; j < a.size(); ++j)\n        if (a[j] < a[i]) ++ans[i];"
              },
              {
                "title": "优化 · 带原下标的归并排序",
                "paragraphs": [
                  "按原下标切分左右两半，因此右半的所有元素原先都在左半元素右侧。两半排好序后，右侧严格较小的元素先出列；左侧元素出列时，已出列的右侧元素数量 j−mid，就是它在本次跨区间合并中的贡献。递归还会累计各半内部的贡献。",
                  "相等时先取左侧，防止把相等值误算为更小。按 ids 保存原位置，排序后不能丢掉答案对应关系。整体时间 O(n log n)，辅助数组 O(n)，递归栈 O(log n)。"
                ],
                "code": "#include <algorithm>\n#include <iostream>\n#include <numeric>\n#include <vector>\nusing namespace std;\nvector<int> brute(const vector<long long>& a) {\n    vector<int> ans(a.size());\n    for (size_t i = 0; i < a.size(); ++i)\n        for (size_t j = i + 1; j < a.size(); ++j)\n            if (a[j] < a[i]) ++ans[i];\n    return ans;\n}\nvector<int> mergeCount(const vector<long long>& a) {\n    int n = (int)a.size();\n    vector<int> ids(n), tmp(n), ans(n);\n    iota(ids.begin(), ids.end(), 0);\n    auto sort = [&](auto&& self, int l, int r) -> void {\n        if (r - l <= 1) return;\n        int mid = l + (r - l) / 2;\n        self(self, l, mid); self(self, mid, r);\n        int i = l, j = mid, p = l;\n        while (i < mid && j < r) {\n            if (a[ids[j]] < a[ids[i]]) tmp[p++] = ids[j++];\n            else { ans[ids[i]] += j - mid; tmp[p++] = ids[i++]; }\n        }\n        while (i < mid) { ans[ids[i]] += j - mid; tmp[p++] = ids[i++]; }\n        while (j < r) tmp[p++] = ids[j++];\n        copy(tmp.begin() + l, tmp.begin() + r, ids.begin() + l);\n    };\n    sort(sort, 0, n);\n    return ans;\n}\nint main(int argc, char**) {\n    int n; if (!(cin >> n) || n < 0) return 1;\n    vector<long long> a(n); for (auto& x : a) cin >> x;\n    auto ans = argc == 1 ? mergeCount(a) : brute(a);\n    for (int i = 0; i < n; ++i) cout << (i ? \" \" : \"\") << ans[i];\n    cout << '\\n';\n}\n"
              },
              {
                "title": "边界与复述",
                "paragraphs": [
                  "空数组返回空数组；[2,2] → [0,0]；[3,2,1] → [2,1,0]；[-1,-2,-1] → [1,0,0]。面试先写暴力，再解释“合并时计算跨区间贡献”，而不是只背归并模板。"
                ]
              }
            ],
            "note": "原稿只有 countSmaller 代码，没有单独题干；该题面根据函数语义补全，例子为补充示例。"
          },
          {
            "prompt": "数字字符串的解码方式数：给定仅含数字的字符串，统计合法解码方案。例如 \"12\" → 2。",
            "solution": [
              {
                "title": "先确认映射规则",
                "paragraphs": [
                  "以下沿用原稿代码的 1→A、…、26→Z：单独的 0 不合法，10 和 20 合法，前导 0 不合法。它不同于 0→a、…、25→z 的“数字翻译”题；如果真实试卷采用后者，转移条件必须更改。"
                ]
              },
              {
                "title": "Brute Force · 每个位置尝试取 1 位或 2 位",
                "paragraphs": [
                  "从位置 i 开始搜索。到字符串末尾返回 1；当前位置为 0 返回 0；先选一个合法的一位数，再尝试 10–26 的两位数，把两棵子树的方案数相加。",
                  "\"226\"：2|2|6、22|6、2|26，共 3 种。\"06\" → 0，\"10\" → 1，\"100\" → 0。搜索树至多二叉展开，粗略上界 O(2ⁿ)，递归栈 O(n)；只适合短串。"
                ],
                "code": "// add 为十进制大整数加法；pairOK 检查两位数是否在 10..26。\nstring brute(const string& s, size_t i) {\n    if (i == s.size()) return \"1\";\n    if (s[i] == '0') return \"0\";\n    string ans = brute(s, i + 1);\n    if (pairOK(s, i)) ans = add(ans, brute(s, i + 2));\n    return ans;\n}"
              },
              {
                "title": "优化 · DP 消除重复子问题",
                "paragraphs": [
                  "dp[i] 表示前 i 个字符的解码数，dp[0]=1 是完成一次合法切分的计数基底。如果 s[i−1] 非 0，加 dp[i−1]；如果末两位组成 10–26，加 dp[i−2]。两项分别对应最后一个字母来自一位还是两位，互斥且覆盖全部合法方案。",
                  "保留前两个状态即可。算术按常数计时为 O(n) 次转移、O(1) 个计数器；下方代码用十进制字符串避免原稿 int 溢出，计数有 O(n) 位时最坏 O(n²) 字符运算、O(n) 字符空间。无取模要求时不要擅自取模。"
                ],
                "code": "#include <algorithm>\n#include <iostream>\n#include <string>\nusing namespace std;\n// 十进制大整数加法，避免原稿 int / long long 的溢出。\nstring add(string a, string b) {\n    string out; int carry = 0;\n    int i = (int)a.size() - 1, j = (int)b.size() - 1;\n    while (i >= 0 || j >= 0 || carry) {\n        int v = carry;\n        if (i >= 0) v += a[i--] - '0';\n        if (j >= 0) v += b[j--] - '0';\n        out.push_back(char('0' + v % 10)); carry = v / 10;\n    }\n    reverse(out.begin(), out.end()); return out;\n}\nbool pairOK(const string& s, size_t i) {\n    return i + 1 < s.size() && (s[i] == '1' || (s[i] == '2' && s[i + 1] <= '6'));\n}\nstring brute(const string& s, size_t i) {\n    if (i == s.size()) return \"1\";\n    if (s[i] == '0') return \"0\";\n    string ans = brute(s, i + 1);\n    if (pairOK(s, i)) ans = add(ans, brute(s, i + 2));\n    return ans;\n}\nstring dynamic(const string& s) {\n    if (s.empty()) return \"0\";\n    string prev2 = \"1\", prev1 = s[0] == '0' ? \"0\" : \"1\";\n    for (size_t i = 1; i < s.size(); ++i) {\n        string cur = s[i] == '0' ? \"0\" : prev1;\n        if (pairOK(s, i - 1)) cur = add(cur, prev2);\n        prev2 = prev1; prev1 = cur;\n    }\n    return prev1;\n}\nint main(int argc, char**) {\n    string s; if (!(cin >> s)) return 1;\n    if (!all_of(s.begin(), s.end(), [](char c) { return c >= '0' && c <= '9'; })) return 1;\n    if (argc > 1 && s.size() > 30) { cerr << \"brute force: use at most 30 digits\\n\"; return 1; }\n    cout << (argc == 1 ? dynamic(s) : brute(s, 0)) << '\\n';\n}\n"
              }
            ],
            "note": "缺失映射定义，按原稿程序的 1–26 规则解析；未虚构输入长度上界。"
          },
          {
            "prompt": "小红的树构造：n 个节点，其中 k 个权值为 2，其余为 3。路径权值是路径上所有节点权值之积的正因子数量；有效路径至少含一条边，u→v 与 v→u 视为同一条。求所有有效路径权值乘积的最小值，最终对 10⁹+7 取模。2≤n≤10⁹，0≤k≤n。样例：4 3 → 5184。",
            "solution": [
              {
                "title": "把因子数写成可计算形式",
                "paragraphs": [
                  "一条路径含 a 个 2、b 个 3，节点乘积为 2ᵃ3ᵇ，因此正因子数量是 (a+1)(b+1)。只枚举不同端点的无序对，共 n(n−1)/2 条路径，不计单点路径。"
                ]
              },
              {
                "title": "Brute Force · 枚举全部树，再枚举全部路径",
                "paragraphs": [
                  "用长度为 n−2 的 Prüfer 序列一一枚举全部 n^(n−2) 棵带标号树。固定前 k 个节点权值为 2，剩余为 3；由于所有带标号树都被枚举，其他赋权排列可通过重标号覆盖，不必再乘组合数。",
                  "对每棵树，从每个起点 DFS，携带路径中 2、3 的数量，只对终点编号大于起点的路径累乘 (a+1)(b+1)。用 Python 任意精度整数比较真实乘积，找到最小值后才取模。每树 O(n²) 次路径访问，总 O(nⁿ) 次访问（不含大整数运算成本）、O(n) 图和搜索辅助空间。实现把 n 限为 7，仅用于精确小数据验证。"
                ],
                "code": "\"\"\"精确暴力：枚举全部带标号树，先比较任意精度整数，最后取模。\n仅供 n <= 7 的小数据对拍；不是 n <= 10**9 的提交解。\n\"\"\"\nfrom itertools import product\nfrom heapq import heapify, heappop, heappush\nMOD = 1_000_000_007\n\ndef edges_from_prufer(n, code):\n    degree = [1] * n\n    for x in code:\n        degree[x] += 1\n    leaves = [i for i, d in enumerate(degree) if d == 1]\n    heapify(leaves)\n    edges = []\n    for x in code:\n        leaf = heappop(leaves)\n        edges.append((leaf, x))\n        degree[leaf] -= 1\n        degree[x] -= 1\n        if degree[x] == 1:\n            heappush(leaves, x)\n    edges.append((heappop(leaves), heappop(leaves)))\n    return edges\n\ndef objective(n, k, edges):\n    graph = [[] for _ in range(n)]\n    for u, v in edges:\n        graph[u].append(v)\n        graph[v].append(u)\n    result = 1\n    for source in range(n):\n        stack = [(source, -1, 0, 0)]\n        while stack:\n            u, parent, twos, threes = stack.pop()\n            twos += u < k\n            threes += u >= k\n            if u > source:  # 只统计不同端点的无序对。\n                result *= (twos + 1) * (threes + 1)\n            for v in graph[u]:\n                if v != parent:\n                    stack.append((v, u, twos, threes))\n    return result\n\ndef minimum(n, k):\n    if not 2 <= n <= 7 or not 0 <= k <= n:\n        raise ValueError(\"精确暴力仅支持 2 <= n <= 7、0 <= k <= n\")\n    # 同色节点可交换标号，固定前 k 个节点为 2 不会漏掉树形/赋权方案。\n    return min(objective(n, k, edges_from_prufer(n, code))\n               for code in product(range(n), repeat=n - 2))\n\nif __name__ == '__main__':\n    n, k = map(int, input().split())\n    print(minimum(n, k) % MOD)\n"
              },
              {
                "title": "原稿的两个错误 · 不是只改 min 就够",
                "paragraphs": [
                  "中心为 2 的星形中，两个权值 3 的叶子之间经过 3–2–3，乘积 18 的因子数为 6，原稿误写为 3。中心为 3 时，两个权值 2 的叶子之间经过 2–3–2，乘积 12 的因子数也为 6，原稿同样误写为 3。",
                  "取模不保持大小顺序：6<8，但 6 mod 7=6 > 8 mod 7=1。必须在取模前确定真正更小的构造，不能比较余数。"
                ]
              },
              {
                "title": "纠正星形候选公式",
                "paragraphs": [
                  "令 x 为与中心同色的节点总数，y 为异色节点数（x+y=n，x≥1）。中心到同色叶子的贡献 3^(x−1)，到异色叶子为 4ʸ；两同色叶子为 4^C(x−1,2)，两异色叶子为 6^C(y,2)，异色叶子对为 6^((x−1)y)。",
                  "因此星形候选为 3^(x−1) × 4^[y+C(x−1,2)] × 6^[C(y,2)+(x−1)y]。样例 x=3、y=1 得 3²×4²×6²=5184。混色星形的中心交换比值 P₂/P₃ = [9×4^(n−5)×6^(3−n)]^((k−(n−k))/2)；n≥3 时方括号小于 1，故两种星形中多数颜色作中心更优，相等则等价。n=2 只有一条边。"
                ]
              },
              {
                "title": "验证范围与尚未证明的结论",
                "paragraphs": [
                  "已用全部 Prüfer 序列核对 2≤n≤7 的所有 k（同色交换对称），星形候选与精确最小值一致。但小数据对拍不是“任意最优树都可化为星形”的证明；原稿也没有这个证明。",
                  "下方 O(log n) 程序仅声明为纠正后的星形候选计算器，不作为已经证明的 n≤10⁹ 正式提交解。精确暴力的含义和适用范围已完整给出；大范围全局最优结论仍需要严格的树变换论证或原题官方解析核对。"
                ],
                "code": "// 星形候选公式已纠正；不将小数据一致误写成全局最优证明。\n// 若没有另行证明“最优树一定可取星形”，本程序只求两种星形中的最优值。\n#include <iostream>\nusing namespace std;\nconst long long MOD = 1000000007;\nlong long power(long long a, long long b) {\n    long long r = 1;\n    for (; b; b >>= 1, a = a * a % MOD) if (b & 1) r = r * a % MOD;\n    return r;\n}\nlong long choose2(long long x) { return x * (x - 1) / 2; }\nint main() {\n    long long n, k; if (!(cin >> n >> k) || n < 2 || n > 1000000000LL || k < 0 || k > n) return 1;\n    long long l = n - k;\n    // n >= 3 时两种星形相比，多数颜色作中心更优；相等则相同。\n    bool center2 = k >= l;\n    long long same = center2 ? k : l, other = center2 ? l : k;\n    long long e3 = same - 1;\n    long long e4 = other + choose2(same - 1);\n    long long e6 = choose2(other) + (same - 1) * other;\n    cout << power(3, e3) * power(4, e4) % MOD * power(6, e6) % MOD << '\\n';\n}\n"
              }
            ]
          }
        ]
      },
      {
        "title": "C++ 代码审阅 · 订单管理与风控",
        "questions": [
          {
            "prompt": "审阅 OrderManager：找出缺陷、讨论可扩展性，并说明 TradingSystem、OrderManager、RiskMonitor、PositionManager、Strategy 的职责边界。",
            "solution": [
              {
                "title": "先还原原稿能确认的结构",
                "paragraphs": [
                  "原文说明 TradingSystem 聚合合约、持仓、风控、订单管理；Strategy 提交订单并接收回报；TradingHouse 为辅助测试类。已提供的代码中，OrderManager 生成 order_ref、保存订单并向 IOrderCallback 回调 Accepted / Rejected / Traded。其余类未提供源码，不能声称已经审阅其实现。"
                ]
              },
              {
                "title": "正确性 · 状态机和成交数量",
                "paragraphs": [
                  "原 ReqOrderInsert 在返回 order_ref 之前同步调用 AcceptOrder。策略可能还没记录订单号就收到回报；这不是异步交易通道的真实时序。先登记本地请求并返回本地 id，再由事件循环处理交易所回报。",
                  "TradeOrder 一次回报就标为 Traded，没有剩余量、累计成交量、部分成交；未检查 volume>0、超量成交、有限/合法价格。重复成交回报会重复更新持仓；Accepted→Rejected→Traded 也能任意覆盖状态。需要显式 PendingNew、Accepted、PartiallyFilled、Filled、Rejected、PendingCancel、Canceled 状态和合法迁移。",
                  "用 exec_id 去重；终态不因迟到的受理回报退回 Accepted；撤单中仍可能成交。收到矛盾回报时隔离并告警、触发对账，不能把真实成交默默丢弃。订单、成交、持仓和冻结风险应遵循同一事件序列。"
                ]
              },
              {
                "title": "输入、价格与风险",
                "paragraphs": [
                  "合约必须存在；side 合法；数量为正且符合手数；价格有限、符合 tick 和涨跌停规则。NaN/inf 不能依靠普通大小比较过滤。",
                  "价格用 tick 数或约定精度的整数，金额累加做溢出检查。发送前做持仓、额度和速率检查并冻结额度；拒单/撤单释放未成交部分，成交只更新一次持仓与风险。风控失败不应向交易所发单。"
                ]
              },
              {
                "title": "并发、生命周期和重入",
                "paragraphs": [
                  "next_order_ref_、orders_、callback_ 都没有同步，多线程调用有数据竞争；加一个 atomic 订单号不能让整个管理器线程安全。低延迟实现可选单线程事件循环拥有可变状态，其他线程只投递消息；或用明确锁粒度。",
                  "callback_ 为裸指针，需要约定注销、退出与对象寿命；GetOrder 返回内部地址，不具备并发一致性，清理订单后会悬空，优先返回快照。回调可能重入并再次发单或触发错误处理，调用后不能继续假定迭代器、状态或对象寿命未变；也不要持锁调用外部策略。"
                ]
              },
              {
                "title": "可扩展性与性能",
                "paragraphs": [
                  "把交易所适配器与订单状态机分离；事件包含本地 id、交易所 id、策略 id、session / trading day、序列号、时间戳、exec_id。覆盖撤改单、拒单原因、重连、重放、未知订单回报和对账。",
                  "std::map 不是单凭 O(log n) 就判错：先分析规模、缓存和延迟分位数，再决定平坦容器、预分配或哈希。无界保留 orders_ 会持续占内存；终态订单归档，热路径保持可控容量，队列做背压。回调记录成不可变事件，保证可重放、可观测、可测量。"
                ]
              },
              {
                "title": "建议的事件处理顺序",
                "paragraphs": [],
                "code": "策略请求\n  → 合约/价格/数量校验\n  → 风控检查与额度预占\n  → 创建 PendingNew 订单，返回本地 id\n  → 适配器发送\n\n交易所回报\n  → 会话/序列/exec_id 校验与去重\n  → 状态机合法迁移，累计成交量与剩余量\n  → 同步更新持仓、冻结额度与风险\n  → 生成不可变事件，交给策略和监控\n  → 持久化/对账/异常告警"
              },
              {
                "title": "测试重点",
                "paragraphs": [
                  "重复 exec_id 不得重复计仓；两次部分成交恰好满单；累计数量不能越过原始数量；拒单和迟到的 Accepted 不可复活终态；成交可与撤单交错；回调重入、断连重放、订单归档后查询都要覆盖。此处给出审阅和设计建议，未把示意状态机冒充可直接实盘使用的完整系统。"
                ]
              }
            ]
          }
        ]
      },
      {
        "title": "系统设计 · 实时排行榜广播",
        "questions": [
          {
            "prompt": "设计实时排行榜广播系统：每 500 ms 生成全部房间最新榜单，房间数几十至上百；每个房间包含红队 Top 5 和蓝队 Top 5。客户端接收所有房间，快速解析并展示。说明协议、字节布局、发送/接收流程和扩展方案。",
            "solution": [
              {
                "title": "先确定语义与规模",
                "paragraphs": [
                  "按整批全量快照发布，序列号在同一发布会话内单调增加；同一个 seq 的所有房间来自同一逻辑快照。分数相同用 player_id 升序打破平局，少于 5 人时用实际数量，不伪造玩家。",
                  "默认每个玩家以 uint64 id + int64 score 表示，排名由数组顺序隐含。100 房间 × (8 字节房间头 + 10×16 字节玩家) + 32 字节总头 = 16,832 字节/快照，2 Hz 约 33,664 字节/秒/客户端（不含网络开销）；广播扇出成本还要乘订阅者数量。"
                ]
              },
              {
                "title": "传输协议 · 基线选 TCP 全量快照",
                "paragraphs": [
                  "先采用长连接 TCP；TCP 是字节流，必须显式长度定帧，不能假设一次 recv 就是一条消息。客户端维护接收缓冲，读够 32 字节头并验证长度后，再等完整帧。跨公网可使用 TLS；浏览器客户端需要 WebSocket 承载，不能直接使用裸 TCP。",
                  "500 ms 更新且数据量较小，全量快照便于丢弃过期的尚未发送批次。每连接设有界队列，只保留当前发送帧和最新待发送帧；已部分发送的 TCP 帧必须发完，不能从中间截断，否则后续 framing 失步。长期落后客户端断开后重新拉取最新快照。"
                ]
              },
              {
                "title": "二进制布局 · 所有整数使用网络字节序",
                "paragraphs": [],
                "code": "总头：32 字节（显式逐字段编码，不能直接 memcpy C++ struct）\noffset  type      meaning\n0       byte[4]   magic = \"RANK\"\n4       uint16    version = 1\n6       uint16    header_bytes = 32\n8       uint32    message_bytes（包含头部）\n12      uint64    sequence（连接/发布会话内单调）\n20      uint64    snapshot_timestamp_ms\n28      uint16    room_count\n30      uint16    flags（bit0 = 全量快照；其余保留）\n\n每个房间头：8 字节\nuint32 room_id | uint8 red_count | uint8 blue_count | uint16 reserved\n随后 red_count 个红队记录，再随后 blue_count 个蓝队记录\n每条玩家记录：uint64 player_id | int64 score（16 字节）\n排名由顺序表示；count 范围 0..5；room_id 在一帧内不得重复。"
              },
              {
                "title": "架构与处理流程",
                "paragraphs": [],
                "code": "游戏逻辑/分数更新\n  → 每房间红/蓝队 Top 5 计算\n  → 500 ms 时钟截取一致快照\n  → 编码器写入复用的连续缓冲\n  → 广播网关/多连接扇出\n  → TCP/TLS 长连接\n  → 客户端接收缓冲和长度定帧\n  → 版本/长度/count/seq 校验\n  → 解码到后台快照\n  → 原子替换展示快照，渲染线程只读最新完整批次"
              },
              {
                "title": "解析和性能",
                "paragraphs": [
                  "遍历每队玩家时维护容量为 5 的小顶堆，P 个玩家时间 O(P log 5)，随后最多 5 项排序；更新频繁时维护有序索引，并明确一致性边界。快照编码一次，多连接复用只读缓冲，注意引用计数和发送完成的释放时机。",
                  "读取字段先检查剩余字节，限制总帧长（例如配置为 1 MiB）、房间数和 count，检查所有长度计算溢出；解析结束必须刚好消费 message_bytes。不要把非对齐网络缓冲强转成 struct 指针，也不要发送裸指针、容器或平台相关的 long。"
                ]
              },
              {
                "title": "扩展和取舍",
                "paragraphs": [
                  "同局域网、订阅者很多时可以评估 UDP 组播，但它没有可靠交付或有序保证。16 KB 全量消息不可直接假设放进一个安全 UDP 数据报；做应用层分片（如每片不超过约 1200 字节），包含 session_id、seq、分片序号/总数、长度和校验，超时整批丢弃，并以单播快照恢复。互联网客户端通常不能依赖组播。",
                  "增量协议节约带宽但必须带 base_seq 和新 seq，缺失依赖时请求全量；保留周期性快照。扩展字段用版本与 TLV / 字段长度，未知字段可跳过。固定格式易于手工解析，但 Protobuf / FlatBuffers 等方案应按兼容性、依赖与实际解析性能评估，不能只凭“零拷贝”口号选择。",
                  "监控生成到接收的延迟、队列长度、丢弃旧快照次数、重连、解码失败、吞吐和客户端落后程度。不要把网络发送与游戏主循环互相阻塞。"
                ]
              }
            ]
          }
        ]
      },
      {
        "title": "C++ 场景题 · 多态、模板与线程",
        "questions": [
          {
            "prompt": "多态为什么失效？原稿提到 std::vector<Strategy> 按值保存派生类对象，push_back 后派生类 factor_ 丢失。",
            "solution": [
              {
                "title": "参考答案 · 对象切片（原选项 B）",
                "paragraphs": [
                  "按给定现象选择 B。vector<Strategy> 的每个元素都是完整的基类值对象，派生对象被复制为基类时只保留基类子对象。即使 compute 正确声明为虚函数，切片后的动态类型也已经是 Strategy。",
                  "用 vector<unique_ptr<Strategy>> 表达独占所有权，基类析构函数设为 virtual，派生函数写 override。签名、const、引用限定符必须匹配；不能只看到 compute 同名就认定覆盖。"
                ]
              },
              {
                "title": "补充示例 · 保留动态类型",
                "paragraphs": [],
                "code": "struct Strategy {\n    virtual ~Strategy() = default;\n    virtual double compute() const { return 0; }\n};\nstruct FactorStrategy : Strategy {\n    double factor = 2;\n    double compute() const override { return factor; }\n};\nstd::vector<std::unique_ptr<Strategy>> strategies;\nstrategies.push_back(std::make_unique<FactorStrategy>());\n// strategies[0]->compute() == 2；没有按值切片。",
                "links": [
                  {
                    "label": "C++ 标准草案 · 虚函数",
                    "url": "https://eel.is/c++draft/class.virtual"
                  }
                ]
              }
            ],
            "options": [
              "compute 没有正确 override",
              "vector<Strategy> 按值保存发生 object slicing",
              "虚函数声明错误",
              "const 导致虚函数无法调用"
            ],
            "note": "原稿缺少实际类定义；示例为补充演示，不能据此排除真实代码同时有签名错误。"
          },
          {
            "prompt": "C++17 右折叠 sum(std::string(\"hello\"), \"\", \"world\") 的结果是什么？template<typename... Ts> auto sum(Ts... args) { return (args + ...); }",
            "solution": [
              {
                "title": "参考答案 · 编译错误（原选项 B）",
                "paragraphs": [
                  "右折叠展开为 std::string(\"hello\") + (\"\" + \"world\")。最内层两个字符串字面量在这里退化成指针，没有指针加指针的合法 + 运算；还没轮到 std::string 的拼接就已经不合法。",
                  "左折叠 (... + args) 展开为 (std::string(\"hello\") + \"\") + \"world\"，该特定调用可行。更稳健地把各参数转换为 std::string 后逐一追加，空参数包也能得到空串。"
                ]
              },
              {
                "title": "补充实现",
                "paragraphs": [],
                "code": "template<class... Ts>\nstd::string concat(Ts&&... args) {\n    std::string result;\n    (result.append(std::forward<Ts>(args)), ...);\n    return result;\n}\n// concat(\"hello\", \"\", \"world\") == \"helloworld\"\n// concat() == \"\"",
                "links": [
                  {
                    "label": "C++ 标准草案 · 折叠表达式",
                    "url": "https://eel.is/c++draft/expr.prim.fold"
                  }
                ]
              }
            ],
            "options": [
              "输出 helloworld",
              "编译错误",
              "输出 hello world",
              "运行时错误"
            ],
            "note": "原文的函数返回类型、调用逗号和结尾有笔误，题面按其明确描述的三实参右折叠语义整理。"
          },
          {
            "prompt": "Monitor 的工作线程调用 stop()，stop() 内对同一个 worker_ 执行 join()。会发生什么？",
            "solution": [
              {
                "title": "参考答案 · 自己 join 自己会抛出异常",
                "paragraphs": [
                  "当前线程的 id 与 worker_.get_id() 相同，join 应报告 resource_deadlock_would_occur，抛出 std::system_error。joinable() 只表示该 thread 对象仍关联一个线程，不表示当前调用线程可以安全 join 它。",
                  "如果异常逃出线程入口，程序会调用 std::terminate；若在析构期间抛出且析构为 noexcept，也会终止。不要简单回答“永远阻塞”，更不能把 detach 当作修复：lambda 捕获 this，detach 后对象析构会引入悬空访问。"
                ]
              },
              {
                "title": "安全设计 · 请求停止与等待退出分开",
                "paragraphs": [
                  "工作线程只发出停止请求并返回；由拥有对象的外部线程 join。start / join / 析构应由同一生命周期管理者串行调用，禁止自析构。原稿的 worker/workder、runing/running 和括号拼写需先校正，不能把伪代码当成可编译代码。"
                ],
                "code": "void request_stop() noexcept { running_.store(false); }\nvoid join_from_owner() {\n    // 调用约定：只允许外部拥有者线程调用；不能与 start 并发。\n    if (worker_.joinable()) {\n        if (worker_.get_id() == std::this_thread::get_id())\n            throw std::logic_error(\"join must be called by owner\");\n        worker_.join();\n    }\n}\n// worker 的循环内部只调用 request_stop()，然后退出。",
                "links": [
                  {
                    "label": "C++ 标准草案 · thread::join",
                    "url": "https://eel.is/c++draft/thread.thread.member"
                  }
                ]
              }
            ],
            "note": "原 Monitor 代码语法残缺；这里按“工作线程自调用 stop 并自 join”的明确考点解析，不虚构完整原代码。"
          }
        ]
      },
      {
        "title": "工作协同与生产故障处理",
        "questions": [
          {
            "prompt": "五项工作如何排优先级、分工和协调？生产策略信号延迟已影响交易；下午需面试候选人；Leader 要求当天部署仪表盘；CI/CD 出错阻塞团队提交；本周需完成技术方案。处理期间又收到内存 95%、超时且影响多个下游的告警，应如何调整？",
            "solution": [
              {
                "title": "排序原则与初始安排",
                "paragraphs": [
                  "按当前业务影响、紧迫性、可恢复性和依赖阻塞排序，不按谁催得急排序。假设仪表盘不承担当前故障恢复、下午面试可协调：生产交易延迟先处理；并行安排能负责流水线的同事修复 CI/CD；面试提前确认是否找替代面试官；仪表盘在风险可控且流水线恢复后推进；本周方案安排集中时间。",
                  "这里不是唯一固定顺序：如果仪表盘正是故障所需观测能力，或流水线阻塞紧急修复，它们的优先级应上调。自己优先负责最熟悉的交易链路诊断；请 SRE/平台同事查系统和流水线；请同组面试官接面试，由 HR 同步候选人，不能静默缺席。"
                ]
              },
              {
                "title": "新告警出现后的第一步",
                "paragraphs": [
                  "先确认告警是否真实、受影响实例/下游与当前业务影响，立即通知值班负责人并明确事故指挥与分工；查看 OOM、RSS/堆/页缓存、容器限制、流量和队列。内存 95% 只是信号，Linux 页缓存占用高不自动等于泄漏。",
                  "若已出现超时和连锁影响，将其作为生产故障优先止损：按既定预案限流/暂停非关键任务、隔离慢消费者、切流或回滚，必要时安全重启。交易相关进程先考虑未决订单、持仓/风险状态和主备接管，不能直接 kill 后假设恢复。保留最小必要证据，但不为抓完整 dump 延误恢复或加重内存压力。"
                ]
              },
              {
                "title": "分工与沟通",
                "paragraphs": [
                  "事故负责人协调优先级；链路负责人查延迟和依赖；SRE 查内存/OOM/容量；平台同事查发布与流水线。同步清楚影响范围、当前缓解动作、负责人、下一次更新时间；向 Leader 说明部署延期原因、给 HR 确认替代安排。记录决策时间线，避免所有人同时操作同一实例。"
                ]
              },
              {
                "title": "恢复后防止再次发生",
                "paragraphs": [
                  "先验证 p99 延迟、错误率、队列、内存趋势和交易状态恢复，再逐步解除限流。区分泄漏、无界缓存/队列、突发流量、慢下游和发布回归。用堆/分配剖析和对账定位根因。",
                  "增加队列/缓存上限、TTL/淘汰、背压、容量预算、回归压测与故障演练；告警从单个百分比扩展为趋势、剩余容量、OOM 与业务 SLO 联动。形成有负责人和完成期限的复盘行动，而不是只写“扩容/重启”。"
                ]
              }
            ]
          }
        ]
      },
      {
        "title": "选择与填空 · 基础知识参考解析",
        "paragraphs": [
          "以下按原文 23 个主题逐项补充。原稿中未记录的选项、ABI 和数据范围不猜补；参考结论注明成立前提。"
        ],
        "questions": [
          {
            "prompt": "局域网内主机互通，但无法访问公网。DNS、主机/局域网网关、未配置网关、主机 IP 中哪些可能有问题？",
            "navigationType": "选择",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "优先检查默认路由/网关及上游转发。仅凭“内网能通、外网不通”不能唯一选择。",
                  "先 ping 公网 IP：公网 IP 可达但域名解析失败才重点查 DNS；若 IP 也不通，查 ip route、默认网关、ARP/邻居、路由/NAT/出口策略。内网互通不保证 IP/掩码完全正确，也不排除上游故障。公网禁 ICMP 时 ping 失败也不等于全部公网业务失败。"
                ]
              }
            ],
            "note": "原文选项文字有误且未给出公网测试对象是 IP 还是域名；不能直接把 DNS 判为必错。"
          },
          {
            "prompt": "哪些操作会使用户态切换到内核态：整数除以 0、sin 函数调用、read 系统调用？",
            "navigationType": "选择",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "read 系统调用会进入内核；普通 sin 数学库调用通常不会。整数除零若确实执行为硬件除零异常，也会转入内核异常处理。",
                  "C/C++ 整数除以 0 本身是未定义行为，编译器可删除或改变相关代码；不能说所有语言、所有优化下的 1/0 都必定产生特定陷阱。浮点除零还依赖浮点环境，不等同于整数除零。"
                ]
              }
            ],
            "note": "原稿 int/0 按整数除零理解；若它指的是 int 软件中断指令，含义应重新确认。"
          },
          {
            "prompt": "3 个并发进程，每个最多需要 4 个同类资源。保证不会发生资源型死锁的最少资源数是多少？",
            "navigationType": "填空",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "10 个。",
                  "最坏每个进程持有 3 个并等待最后 1 个，3×3=9 个资源全部占用；再增加 1 个，总有进程能拿齐 4 个并完成释放。公式 R≥P(K−1)+1。前提是同类可复用资源、每进程最多 K 个、获得足够资源能完成，且不考虑其他死锁原因。"
                ]
              }
            ]
          },
          {
            "prompt": "Python：d = {}; d[[1,2]] = \"hello\"; print(d)，输出什么？",
            "navigationType": "填空",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "赋值时抛出 TypeError: unhashable type: 'list'，不会执行 print。",
                  "字典键必须可哈希，list 可变且不可哈希；这里可用 (1,2) 作为键。不要说所有 tuple 都可哈希，含 list 的 tuple 仍不可哈希。"
                ],
                "code": "d = {}\nd[(1, 2)] = \"hello\"\nprint(d)  # {(1, 2): \"hello\"}"
              }
            ]
          },
          {
            "prompt": "Linux 中不能被进程捕获的信号有哪些？",
            "navigationType": "填空",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "SIGKILL 和 SIGSTOP。",
                  "它们不能被捕获、忽略或阻塞；SIGTERM 可安装处理器用于清理退出，SIGTSTP 不等于 SIGSTOP。"
                ],
                "links": [
                  {
                    "label": "Linux signal 手册",
                    "url": "https://man7.org/linux/man-pages/man7/signal.7.html"
                  }
                ]
              }
            ]
          },
          {
            "prompt": "struct A { int a; union { long b; short c; }; }; struct B { char e; A d; int f; }; sizeof(B) 是多少？",
            "navigationType": "填空",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "常见 x86-64 Linux LP64 ABI、默认对齐下为 32 字节；不能不说明平台就给唯一值。",
                  "LP64：union 大小/对齐均为 8；A 的 int 在偏移 0，union 在偏移 8，sizeof(A)=16、alignof(A)=8。B 的 e 在 0，d 在 8，f 在 24，尾部补齐到 32。常见 ILP32 或 Windows LLP64（long=4）下通常是 16。pack 和 ABI 可改变布局。"
                ],
                "code": "struct A { int a; union { long b; short c; }; };\nstruct B { char e; A d; int f; };\n// sizeof、alignof 与 offsetof 可在指定编译平台直接核对。"
              }
            ],
            "note": "原稿缺分号/括号；这里仅修正语法，保持匿名 union 的布局问题。"
          },
          {
            "prompt": "NumPy 哪个一定产生数据拷贝：a[a>0]、a[:]、a.view()、a.reshape(2,3)？",
            "navigationType": "选择",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "对于普通 ndarray，读取 a[a>0] 使用布尔高级索引，会产生拷贝。",
                  "切片 a[:] 和 a.view() 是视图；reshape 能视图时返回视图，否则需要拷贝，故不能说 reshape 一定拷贝。注意 a[mask]=... 是原地索引赋值，不等同于取出 b=a[mask]。"
                ],
                "links": [
                  {
                    "label": "NumPy · Copies and views",
                    "url": "https://numpy.org/doc/stable/user/basics.copies.html"
                  }
                ]
              }
            ]
          },
          {
            "prompt": "C/C++ 调用已经声明但未定义的普通外部函数，通常在哪个阶段发现？",
            "navigationType": "选择",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "通常在链接阶段报 undefined reference / unresolved external symbol。",
                  "区分“未声明”与“声明了未定义”：前者常在编译期报错。动态加载/延迟绑定可能推迟至加载或运行时，优化也可能消除调用；按普通静态构建流程回答链接。"
                ]
              }
            ]
          },
          {
            "prompt": "经典三状态进程模型中，阻塞→就绪、运行→阻塞、阻塞→运行、就绪→运行，哪个不能直接发生？",
            "navigationType": "选择",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "阻塞→运行不能直接发生。",
                  "等待事件完成后先从阻塞进入就绪，再由调度器安排就绪→运行；运行等待 I/O 则进入阻塞。这里是经典抽象模型，不把两个紧邻的调度事件误当成一个直接迁移。"
                ]
              }
            ]
          },
          {
            "prompt": "系统有 4 台打印机，每个作业最多独占 2 台。最多允许多少个作业并发竞争，才能保证不会因打印机分配死锁？",
            "navigationType": "填空",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "最多允许 3 个作业并发竞争。",
                  "R≥P(K−1)+1，代入 R=4、K=2，得 P≤3。若 4 个作业各占 1 台都等待第二台，就可能死锁。“并发竞争作业数”不是“同时已拿齐 2 台并打印的作业数”；后者最多只有 2 个。"
                ]
              }
            ],
            "note": "原题“同时执行”可能指已占足资源的运行作业；已把两种语义分别说明。"
          },
          {
            "prompt": "TCP 套接字中哪个操作不会阻塞？",
            "navigationType": "选择",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "缺少具体选项和套接字模式，无法唯一作答。",
                  "阻塞模式 connect 等连接建立，accept 等新连接，recv 等数据/关闭，send 在发送缓冲不足时可等待。socket/bind/listen 一般不等待对端网络事件，但不能因此推广为所有调用永远不会等待。设置 O_NONBLOCK 后相关操作按约定返回 EAGAIN/EWOULDBLOCK 或 EINPROGRESS，并用就绪通知和 SO_ERROR 等检查后续状态。"
                ]
              }
            ],
            "note": "原文未记录选项，保留题意缺口；不虚构标准选项字母。"
          },
          {
            "prompt": "合并 N 条长度都为 M 的有序链表，并保持有序，时间复杂度是多少？",
            "navigationType": "填空",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "使用 N 路小顶堆归并为 O(NM log N)，堆额外空间 O(N)（N=1 时 O(M)）。",
                  "每条链表的当前头结点入堆，每次取最小节点并推进对应链，NM 个节点各做一次出入堆。Brute Force 是每输出一个节点扫描全部 N 个链表头，时间 O(N²M)；分治两两归并也能达到 O(NM log N)。输出链表若复用节点无需额外 NM 个节点。"
                ]
              }
            ]
          },
          {
            "prompt": "awk 正在读取 log 并抽取字段到 CSV，此时 rm 删除 log，会发生什么？",
            "navigationType": "填空",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "若 awk 已打开该文件，unlink 删除目录项不使已打开的文件描述符失效，awk 可继续读旧文件。",
                  "当最后一个硬链接和打开引用都释放后，存储才可回收。rm 后同名新文件是新的对象，原 awk 不会自动切到新文件；如果 awk 还未打开就被删除，则打开会失败。重定向已写出的 CSV 不因此消失。"
                ],
                "links": [
                  {
                    "label": "Linux unlink 手册",
                    "url": "https://man7.org/linux/man-pages/man2/unlink.2.html"
                  }
                ]
              }
            ]
          },
          {
            "prompt": "软链接/硬链接：哪种共享 inode、删除源路径后怎样、能否跨文件系统？",
            "navigationType": "选择",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "同一文件系统中的硬链接共享 inode；软链接有自己的 inode，保存目标路径。",
                  "删除一个硬链接只减少链接数，其他硬链接仍可访问；删除软链接指向的唯一目标路径后通常成为悬空链接。硬链接不能跨文件系统；软链接可指向另一文件系统路径。仅比较 inode 数字还需结合设备号确认文件身份。"
                ]
              }
            ]
          },
          {
            "prompt": "NumPy 广播机制的核心匹配规则是什么？",
            "navigationType": "填空",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "从最右维向左对齐：对应维相等，或其中一个为 1 才兼容；缺少的左侧维按 1 处理。",
                  "例如 (3,1) 与 (1,4) 得 (3,4)；(3,) 与 (4,) 不兼容。广播通常不复制被扩展的输入数据，但表达式的计算结果可能分配很大的输出数组。"
                ],
                "links": [
                  {
                    "label": "NumPy · Broadcasting",
                    "url": "https://numpy.org/doc/stable/user/basics.broadcasting.html"
                  }
                ]
              }
            ]
          },
          {
            "prompt": "Python：x=1；def change(a): x += 1; print(x)；change(x)，结果是什么？",
            "navigationType": "填空",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "抛出 UnboundLocalError，不会打印 2。",
                  "函数内给 x 赋值使 x 在该作用域被判为局部变量；x += 1 先读后写，但局部 x 尚未绑定。参数 a 不影响这个判定。若想返回新值，可用 return a+1 并在外部赋回；若明确修改全局，需 global x。"
                ],
                "code": "x = 1\ndef change(a):\n    x += 1\n    print(x)\nchange(x)",
                "links": [
                  {
                    "label": "Python · Execution model",
                    "url": "https://docs.python.org/3/reference/executionmodel.html"
                  }
                ]
              }
            ],
            "note": "按原文的 x += 1 位于 change 函数内理解，已补齐缩进。"
          },
          {
            "prompt": "numpy.memmap：是否支持随机访问、多个进程只读映射、映射是否受物理内存限制、是否一次加载全部数据？",
            "navigationType": "选择",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "支持下标随机访问；多个进程可以同时只读映射同一文件。",
                  "映射使用虚拟地址空间，数据按需分页，不要求整个文件一次装进 RAM；受虚拟地址、文件大小、操作系统和资源限制，32 位进程限制尤其明显。memmap 并非零 I/O，随机访问可能产生缺页和磁盘 I/O。"
                ],
                "links": [
                  {
                    "label": "NumPy · memmap",
                    "url": "https://numpy.org/doc/stable/reference/generated/numpy.memmap.html"
                  }
                ]
              }
            ]
          },
          {
            "prompt": "引用和指针：初始化、空值、重新绑定及传参方式有哪些区别？",
            "navigationType": "选择",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "普通引用定义时需要绑定对象，之后不能重新绑定；指针可以为空，也可改指向。",
                  "对引用赋值是修改被引用对象，不是换绑。未初始化的自动存储期指针通常是不确定值，不能使用；“指针不必初始化”不是安全建议。合法引用应绑定有效对象，非法地解引用空指针来形成引用不提供有效的“空引用”。",
                  "“引用传值、指针传地址”表述不准确：T& 形参是别名；T* 形参本身仍按值复制指针，可修改所指对象，但给该指针形参重新赋值不会改动调用方指针，除非使用 T*& 或 T**。"
                ]
              }
            ]
          },
          {
            "prompt": "一个线程能创建或撤销另一个线程吗？一个程序至少有一个进程，一个进程至少有一个线程吗？",
            "navigationType": "选择",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "线程可以通过运行库/系统接口创建线程；撤销要看具体 API，不能等同于任意强制杀掉其他线程。",
                  "C++ std::thread 没有安全的任意 kill；优先协作式停止和 join，POSIX pthread_cancel 也依赖取消状态/取消点与清理约定。进程运行时通常至少有一个线程，但“程序”是静态代码/文件，可尚未运行，也可对应多个进程，不能说任意程序此刻都至少有一个进程。"
                ]
              }
            ]
          },
          {
            "prompt": "线程自己不拥有系统资源，操作系统最小调度单位是进程，这句话对吗？",
            "navigationType": "选择",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "整体不正确。以常见 Linux 线程模型而言，内核调度线程/任务，进程常作为地址空间和资源容器。",
                  "同进程线程共享地址空间、文件描述符等，但各自具有栈、寄存器上下文、线程 id 和 TLS 等状态；“线程完全不拥有任何资源”过于绝对。"
                ]
              }
            ]
          },
          {
            "prompt": "C++ 构造函数有返回类型吗？一定是 public 吗？可以重载吗？",
            "navigationType": "选择",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "构造函数没有返回类型（也不能写 void）；可以是 public / protected / private；可以重载。",
                  "访问控制可限制创建方式，例如工厂函数或基类。构造函数不能是 virtual；构造/析构期间的虚调用也有特定规则，不能假设会分派到尚未构造或已销毁的派生部分。"
                ]
              }
            ]
          },
          {
            "prompt": "不同线程共享相同栈空间吗？线程比进程的并发度更高吗？",
            "navigationType": "选择",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "各线程通常有各自的栈；“线程一定比进程并发度更高”不成立。",
                  "同一进程地址空间允许线程持有其他线程栈对象的地址，但这不意味着共同使用同一个调用栈，还要保证对象寿命与同步。并行程度取决于 CPU 核、调度、工作负载和共享竞争；线程往往创建/切换成本较低，不等于天然获得更高并行度。"
                ]
              }
            ]
          },
          {
            "prompt": "C++ 虚函数能内联吗？模板能是虚函数吗？运行时/编译期多态怎么区分？",
            "navigationType": "选择",
            "solution": [
              {
                "title": "参考答案与思路",
                "paragraphs": [
                  "虚函数可以被声明为 inline；当编译器能确定调用目标时，也可以去虚化并内联。",
                  "普通虚函数通过动态分派体现运行时多态；模板实例化通常提供编译期多态。成员函数模板不能声明为 virtual，但类模板里的普通成员函数可以是 virtual，类模板实例也可以参与虚继承/动态分派。inline 关键字的定义/ODR 语义与优化器实际是否展开调用是两件事。"
                ],
                "links": [
                  {
                    "label": "C++ 标准草案 · 虚函数",
                    "url": "https://eel.is/c++draft/class.virtual"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "title": "原稿与核对说明",
        "paragraphs": [
          "上面的题面只修正明显笔误并标注缺失，所有参考解析、示例和代码验证均为后补内容，不认定为公司官方答案。原稿全文在下面折叠保留，包括原有未校正代码。",
          "算法可运行版本见仓库 docs/code/wanyan；树构造的精确暴力仅支持小规模，星形候选尚缺全局最优证明。原文件未修改；笔试日期由所有者补充为 2026-08-11，归档于 OA。时长与公司全称未在原稿中提供。"
        ],
        "sourceTranscript": "# 顽岩笔试\n\n算法 ACM\n\n```cpp\n牛牛有一个长度为 n 的数组 a 牛牛今天对数组元素之间的差值很感兴趣，于是牛牛想将数组元素凉凉的差值的绝对值进行累乘 \n输入第一行为 n m 表示数组长度和模数 第二行表示 n 个数组 表示元素ai\n输出为一行 表示取模后的答案 \n实例\n输入\n3 3\n1 2 3 \n输出 2 \n说明\n｜1-2｜x |1 -3 | x |2-3| = 2 mod 3 = 2\n```\n\nBrute force \n\nHigh Level Merge Sort\n\n```cpp\n#include <bits/stdc++.h>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> countSmaller(vector<int>& nums) {\n        int n = nums.size();\n        vector<int> ans(n, 0);\n        vector<pair<int, int>> arr;\n\n        for (int i = 0; i < n; i++) {\n            arr.push_back({nums[i], i});\n        }\n\n        mergeSort(arr, 0, n - 1, ans);\n        return ans;\n    }\n\n    void mergeSort(vector<pair<int, int>>& arr, int l, int r, vector<int>& ans) {\n        if (l >= r) return;\n\n        int mid = l + (r - l) / 2;\n        mergeSort(arr, l, mid, ans);\n        mergeSort(arr, mid + 1, r, ans);\n\n        vector<pair<int, int>> temp;\n        int i = l, j = mid + 1;\n        int rightSmaller = 0;\n\n        while (i <= mid && j <= r) {\n            if (arr[j].first < arr[i].first) {\n                rightSmaller++;\n                temp.push_back(arr[j]);\n                j++;\n            } else {\n                ans[arr[i].second] += rightSmaller;\n                temp.push_back(arr[i]);\n                i++;\n            }\n        }\n\n        while (i <= mid) {\n            ans[arr[i].second] += rightSmaller;\n            temp.push_back(arr[i]);\n            i++;\n        }\n\n        while (j <= r) {\n            temp.push_back(arr[j]);\n            j++;\n        }\n\n        for (int k = l; k <= r; k++) {\n            arr[k] = temp[k - l];\n        }\n    }\n};\n\nint main() {\n    int n;\n    cin >> n;\n\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) {\n        cin >> nums[i];\n    }\n\n    Solution sol;\n    vector<int> count = sol.countSmaller(nums);\n\n    for (int i = 0; i < n; i++) {\n        if (i) cout << \" \";\n        cout << count[i];\n    }\n    cout << endl;\n\n    return 0;\n}\n```\n\n数字翻译成字符串 有一种将字母编码成数字的方式 现在给一串数字 返回有多少种可能的编码效果 输入 12 输出 2\n\nHigh Level DP \n\n```\ndp[0] 表示空字符串的解码方式数\ndp[1] 表示 \"2\" 的解码方式数\ndp[2] 表示 \"22\" 的解码方式数\ndp[3] 表示 \"226\" 的解码方式数\n```\n\n```cpp\n#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    string s;\n    cin >> s;\n\n    int n = s.size();\n    if (n == 0) {\n        cout << 0 << endl;\n        return 0;\n    }\n\n    vector<int> dp(n + 1, 0);\n    dp[0] = 1;\n\n    for (int i = 1; i <= n; i++) {\n        // 单独使用 s[i - 1]\n        if (s[i - 1] != '0') {\n            dp[i] += dp[i - 1];\n        }\n\n        // 使用 s[i - 2] 和 s[i - 1] 组成两位数\n        if (i >= 2) {\n            int num = (s[i - 2] - '0') * 10 + (s[i - 1] - '0');\n            if (num >= 10 && num <= 26) {\n                dp[i] += dp[i - 2];\n            }\n        }\n    }\n\n    cout << dp[n] << endl;\n    return 0;\n}\n```\n\n```cpp\n小红的树构造 小红想让你早一棵树 公有 n 个节点 其中k 个节点权值为  2 。n-k 个节点的权值为 3 。小红定义路径权值为路径上所有点权值乘积的因子数量，只有长度不小于 1 的路径是有效的 {u 到 v v 到 u 是同一条路径}\n小红希望所有的路径权值乘积仅可能的小 \n\n你不需要构造出树，只需啊哟输出最小的权值即可，答案对 10^9 + 7 取模\n\n输入 两个正整数 n 和 k 用空格隔开\n\n2 <=n <=10^9 \n0 <=k <=n \n\n输出  最小的权值乘积 对 10^9 + 7 取模\n\n输入 4 3 \n\n输出 \n5184\n\n我们构造这样一棵树\n1 2 3 号节点权值为2 4 号节点为3 \n1和2 连一条边，2 和 3 连一条边，2 和 4 连一条边\n一共有 6 条路径，所有路径的权值乘积 就是 5184\n```\n\n```cpp\n#include <iostream>\nusing namespace std;\n\nconst long long MOD = 1000000007;\n\nlong long qpow(long long a, long long b) {\n    long long ans = 1;\n\n    while (b > 0) {\n        if (b % 2 == 1) {\n            ans = ans * a % MOD;\n        }\n\n        a = a * a % MOD;\n        b = b / 2;\n    }\n\n    return ans;\n}\n\nlong long C2(long long x) {\n    if (x < 2) return 0;\n    return x * (x - 1) / 2;\n}\n\nlong long calc_center_2(long long n, long long k) {\n    long long cnt2 = k;\n    long long cnt3 = n - k;\n\n    if (cnt2 == 0) return -1;\n\n    long long ans = 1;\n\n    ans = ans * qpow(3, cnt2 - 1) % MOD;\n    ans = ans * qpow(4, cnt3) % MOD;\n    ans = ans * qpow(4, C2(cnt2 - 1)) % MOD;\n    ans = ans * qpow(3, C2(cnt3)) % MOD;\n    ans = ans * qpow(6, (cnt2 - 1) * cnt3) % MOD;\n\n    return ans;\n}\n\nlong long calc_center_3(long long n, long long k) {\n    long long cnt2 = k;\n    long long cnt3 = n - k;\n\n    if (cnt3 == 0) return -1;\n\n    long long ans = 1;\n\n    ans = ans * qpow(4, cnt2) % MOD;\n    ans = ans * qpow(3, cnt3 - 1) % MOD;\n    ans = ans * qpow(3, C2(cnt2)) % MOD;\n    ans = ans * qpow(4, C2(cnt3 - 1)) % MOD;\n    ans = ans * qpow(6, cnt2 * (cnt3 - 1)) % MOD;\n\n    return ans;\n}\n\nint main() {\n    long long n, k;\n    cin >> n >> k;\n\n    long long ans1 = calc_center_2(n, k);\n    long long ans2 = calc_center_3(n, k);\n\n    if (ans1 == -1) {\n        cout << ans2 << endl;\n    } else if (ans2 == -1) {\n        cout << ans1 << endl;\n    } else {\n        cout << min(ans1, ans2) << endl;\n    }\n\n    return 0;\n}\n```\n\n代码存在缺陷以及可扩展性 \n\nRiskmonitor 主要是\nTradingSystem 封装合约管理 持仓管理 封控管理和订单管理 Ordermanger 实现了Iodercallback 创建订单之类的移步回报处理 持仓 风控 TradingHous 辅助测试类，Strategy 实现 IO人的人擦了两把查看通用锅 tradingsytem 提交订单并接受 main 是实例流程\n\nordermanger 主要是有 ReqOrderInset InOrderaccpey Onorderreject 和 onOrdertrade\n\n```cpp\n#include <cstdint>\n#include <iostream>\n#include <map>\n#include <string>\n\nenum class Side {\n    Buy,\n    Sell\n};\n\nenum class OrderStatus {\n    New,\n    Accepted,\n    Rejected,\n    Traded\n};\n\nstruct OrderRequest {\n    std::string instrument_id;\n    Side side;\n    double price;\n    int32_t volume;\n};\n\nstruct Order {\n    uint64_t order_ref;\n    std::string instrument_id;\n    Side side;\n    double price;\n    int32_t volume;\n    OrderStatus status;\n};\n\nstruct OrderRejectInfo {\n    uint64_t order_ref;\n    std::string reason;\n};\n\nstruct TradeInfo {\n    uint64_t order_ref;\n    std::string instrument_id;\n    Side side;\n    double price;\n    int32_t volume;\n};\n\nclass IOrderCallback {\npublic:\n    virtual ~IOrderCallback() = default;\n\n    virtual void OnOrderAccepted(uint64_t order_ref) = 0;\n    virtual void OnOrderRejected(const OrderRejectInfo& info) = 0;\n    virtual void OnOrderTraded(const TradeInfo& info) = 0;\n};\n\nclass OrderManager {\npublic:\n    OrderManager()\n        : next_order_ref_(1), callback_(nullptr) {\n    }\n\n    void SetCallback(IOrderCallback* callback) {\n        callback_ = callback;\n    }\n\n    uint64_t ReqOrderInsert(const OrderRequest& request) {\n        uint64_t order_ref = next_order_ref_;\n        next_order_ref_++;\n\n        Order order;\n        order.order_ref = order_ref;\n        order.instrument_id = request.instrument_id;\n        order.side = request.side;\n        order.price = request.price;\n        order.volume = request.volume;\n        order.status = OrderStatus::New;\n\n        orders_[order_ref] = order;\n\n        AcceptOrder(order_ref);\n\n        return order_ref;\n    }\n\n    const Order* GetOrder(uint64_t order_ref) const {\n        auto it = orders_.find(order_ref);\n\n        if (it == orders_.end()) {\n            return nullptr;\n        }\n\n        return &it->second;\n    }\n\n    void RejectOrder(uint64_t order_ref, const std::string& reason) {\n        auto it = orders_.find(order_ref);\n\n        if (it == orders_.end()) {\n            return;\n        }\n\n        it->second.status = OrderStatus::Rejected;\n\n        if (callback_ != nullptr) {\n            OrderRejectInfo info;\n            info.order_ref = order_ref;\n            info.reason = reason;\n\n            callback_->OnOrderRejected(info);\n        }\n    }\n\n    void TradeOrder(uint64_t order_ref, double price, int32_t volume) {\n        auto it = orders_.find(order_ref);\n\n        if (it == orders_.end()) {\n            return;\n        }\n\n        it->second.status = OrderStatus::Traded;\n\n        if (callback_ != nullptr) {\n            TradeInfo info;\n            info.order_ref = order_ref;\n            info.instrument_id = it->second.instrument_id;\n            info.side = it->second.side;\n            info.price = price;\n            info.volume = volume;\n\n            callback_->OnOrderTraded(info);\n        }\n    }\n\nprivate:\n    void AcceptOrder(uint64_t order_ref) {\n        auto it = orders_.find(order_ref);\n\n        if (it == orders_.end()) {\n            return;\n        }\n\n        it->second.status = OrderStatus::Accepted;\n\n        if (callback_ != nullptr) {\n            callback_->OnOrderAccepted(order_ref);\n        }\n    }\n\nprivate:\n    uint64_t next_order_ref_;\n    std::map<uint64_t, Order> orders_;\n    IOrderCallback* callback_;\n};\n```\n\n设计题\n\n实时排行的数据广播系统，想想一个大型的在线游戏平台，平台上有多个游戏房间，每个放假哪的玩家都在实时竞技 系统需啊哟维护每个房间的实时排行榜 TOP 5 玩家，江畔航班数据广播给观战客户端\n\n基本设定\n\n服务器每 500ms 会生成一次所有房间的最新排行榜\n\n每次发布所有房间的排行榜数据，房间数量为 几十到上百个\n\n每隔房间的排行榜包含：\n\n红队 top5 得分最高的 5 名红队玩家\n\n蓝队 top5 得分最高的 5 名蓝队玩家\n\n设计目标\n\n下游的观战客户端需要通过网络接收全部的是这些数据 并尽可能快速的解析和渲染排行榜\n\n系统架构快烂\n\n游戏服务器发送端功能：\n\n计算排行榜\n\n序列化\n\n网络发送\n\n广播数据\n\n游戏客户端功能\n\n接收所有广播\n\n反序列化\n\n解析数据\n\n设计任务\n\n1. 传输协议设计\n\n数据格式设计\n\n排行榜在网络传输中应该是用什么样的二进制文本 具体的字节布局和格式规范\n\n发送端的处理流程 如何将内存中的数据结构转换成层网络传输的格式」一批数据多个房间该如何组织\n\n1. 说明基础设计场下会遇到什么问题？需要做哪些设计来调整\n\n3.交付要求\n\n系统架构图\n\n数据格式图示\n\n处理流程图\n\n关键设计决策说明\n\n多态失效的原因是：\n\nA compute 没有正确 override\n\nB std::vector<strategy> 存储基类值 push_back 派生类被切片 object slicing 只保留基类部分 factor_ 被丢弃\n\nC 虚函数声明错误\n\nD const 修饰符导致无法调用需函数\n\ntemplate<typename... Ts>\n\nsum(Ts ... args) {return (args + ...)l}\n\nsum(std::string(\"hello\") \"\" ,\"world\") 使用右折叠(args + ...) 的结果是\n\nA 输出 helloworld\n\nB 编译错误因为右折叠展开为 string(\"hello\") + (\"\" + \"wolrd\") 而 +“world” 是两个 const char*想家 指针假发 ill-formed\n\nC 输出 hello world\n\nD 运行时错误\n\n```cpp\nclass Monitor {\nthread workder_;\natomic<bool> runing_ {false};\n\npublic:\nvoid start(){\nruning_ = true;\nworker_ = stdLLthread([this]) {\nWhile(runing.load()) {\nthis_thread::sleep_for(chrono::seconds(1))\nstop() //（1）\n\nvoid stop(){}\n runing = false\nif(worker.joinable())\nworker.join() // （2）\n}}\n~Monitor{stop()l}\n\n}\n\n如果工作线程调用 stop()(1)(2)处 join() 会发生什么\n\n};\n```\n\n我该如何对这 5 个任务进行优先级排序，哪些任务自己会处理，哪些可以协调其他人参与，如何协调。录尚书任务重，受到监控告警 内存 95% 超市报错，影响到下有多个依赖房，我该如何调整工作，第一步是什么？\n\n内存告警的处理思路\n\n故障恢复，如何避免问题再次发生？\n\n1. 生产环境某策略信号计算延迟，已影响到交易需排查\n2. Hr 通知今天下午有一场候选人的技术面试，需要我做为面试官参加\n3. Leader 要求今天完成仪表盘上的上线部署\n4. CI/CD 流水线报错 开发团队无法正常提交代码\n5. 一份技术方案需要在本周内完成\n\n选择 & 填空题\n\n在局域网内某台主机用 ping 命令测试网络连接时 发现网络内部的主机都可以连通，而不能与公网联通 可能问题是局域网 DNS 设置有无 局域网网关和主机的网关设置有无 没有设计局域网的网关 主机 ip 设置有误\n\n用户态切换到内核态的操作 int/0 sin 函数调用 read 系统调用 哪几个选项\n\n3 个并发 同类资源 4 个 系统不会发生死锁的最少资源数是？\n\nd = {} d[[1,2]] = \"hello\" print(d) 输出的是？\n\nlinux 信号不能被进程捕获的是 ？\n\nstruct A{int a union {long b; short c}}; struct B { char e; struct A d; int f}; sizeof(struct B) 大小为\n\nnumpy 那种操作一定会产生 copy\n\nb = a[a > 0] b = a[:] c = a.vew() b = a.reshape(2, 3)\n\nC 那个阶段可以发现被调用的函数为定义 链接 编译执行 预处理？\n\n进程状态转换的描述 不可能发生的事 堵塞->就绪 运行 ->堵塞 堵塞->运行 就绪->运行？\n\n4 台打印机 每个需要独占 2 台打印机，则该系统最多同时执行多少作业不会发生死锁\n\ntcp 套接字 那个不会发生堵塞？\n\nN 条长度为 M 的有序链表合并 合并之后也保持有序 则时间复杂度为\n\nawk 读取 log 文件抽取字段到 csv中 命令运行期间 使用 rm 删除 log 文件 会发生什么？\n\n软连接和原文件共享相同 inode 硬链接和源文件共享同样的 inode 删除源文件后 软连接让然有效 赢链接可以夸文件系统 那个说法正确？\n\nNumpy广播机制核心匹配规则是？\n\n运行结果 x = 1 def change(a) x += 1 print(x) change(x)\n\nnumpy memap 创建映射文件，映射文件不支持下标随机访问，多个进程可以同时以只读方式映射同一个文件 内存映射的大小不能超过物理内存容量，数据会被一次性加载到物理内存中 \n\n引用必须初始化 指针不必 不存在指向空值的引用，但存在指向空值的指针\n\n引用初始化之后不能被改变，指针可以改变所指的的对象，引用传值 指针传地址\n\n一个线程可以创建撤销另一个线程 一个程序至少有一个进程，一个进程至少有一个线程 这个说法对吗？\n\n线程自己不拥有系统资源，操作系统最小的调度单位是进程？\n\n构造方法没有返回类型吗？构造方法一定是 public 的吗？构造方法可以重载吗？\n\n不同的线程共享相同的栈空间，线程比进程的并发度更高吗？\n\nC++ 虚函数可以被内联吗？模版可以定义成虚函数吗？虚函数 和 模版的区别就是一个是运行时的多态 一个是编译期的多态是吗？"
      }
    ],
    "stage": "OA"
  }
];
