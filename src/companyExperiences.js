// 公司面经按“完整场次”归档，不拆成知识题。
// 新增面经时复制一个对象，正文可继续按 sections 分段整理。
export const companyExperiences = [
  {
    id: "sealos-investment-cpp-python-written-2024",
    company: "希洛斯投资",
    type: "笔试",
    round: "C++ / Python 笔试",
    date: "2024-08-07",
    time: "",
    duration: "时长未记录",
    title: "希洛斯投资 · C++ / Python 笔试",
    summary: "一场覆盖 C++ 基础、继承与多态、内存与异常，以及 Python / NumPy 和代码审阅的综合笔试。",
    tags: ["C++", "Python", "NumPy", "代码审阅", "笔试"],
    sections: [
      {
        title: "选择题（20 题）",
        questions: [
          {
            prompt: "C++ 中，关于构造函数和析构函数，正确的描述是（ ）。",
            options: [
              "已知类 Student 以及 Student* p；使用 p = new Student 时自动调用无参构造函数创建动态对象，使用 delete p 时自动调用析构函数并释放动态对象所占空间。",
              "定义类时必须自己定义构造函数和析构函数；创建对象时自动调用构造函数，释放对象时自动调用析构函数。",
              "构造函数和析构函数均可以是虚函数。",
              "构造函数和析构函数均能够被继承。"
            ]
          },
          {
            prompt: "下列各类函数中，（ ）不是类的成员函数。",
            options: ["拷贝构造函数", "析构函数", "构造函数", "友元函数"]
          },
          {
            prompt: "下面代码的输出结果是（ ）。",
            code: `int main() {
    int i = 1;
    double x = 1.111;
    cout << i << " " << x << " ";
    {
        int x = 2;
        double i = 2.222;
        cout << i << " " << x << endl;
    }
    return 0;
}`,
            options: ["1 1.111 2 2", "1 1.111 2.222 2", "以上选项都不正确", "1 1 2.222 2"]
          },
          {
            prompt: "关于下面的代码，以下说法正确的是（ ）。",
            code: `class A {
    virtual void func1();
    void func2();
};
class B : class A {
    void func1() { cout << "fun1 in class B" << endl; }
    virtual void func2() { cout << "fun2 in class B" << endl; }
};`,
            options: [
              "A 中的 func2 是虚函数，B 中的 func1 不是虚函数。",
              "A 中的 func2 和 B 中的 func1 都不是虚函数。",
              "A 中的 func1 和 B 中的 func2 都不是虚函数。",
              "A 中的 func1 和 B 中的 func2 都是虚函数。"
            ]
          },
          {
            prompt: "A 是一个类并且定义有 getKey() 方法。下面函数中共发生（ ）次对 A 类析构函数的调用。",
            code: `bool fn(A* a, A b) {
    A cmp1(*a), cmp2(b);
    return cmp1.getKey() == cmp2.getKey();
}`,
            options: ["4", "2", "1", "3"]
          },
          {
            prompt: "C++ 内存分配中说法错误的是（ ）。",
            options: [
              "栈区一般由编译器自动分配释放，堆区一般由程序员分配释放。",
              "对于堆，大量的 new/delete 操作会造成内存空间不连续。",
              "对于栈来说，生长方向是向上的，也就是向着内存地址增加的方向。",
              "堆容易产生 memory leak（内存泄漏）。"
            ]
          },
          {
            prompt: "以下四行代码中，哪一行的“123”一定保存在栈上（ ）。",
            options: ["char* brr = \"123\";", "const char* arr = \"123\";", "const char crr[] = \"123\";", "char drr[] = \"123\";"]
          },
          {
            prompt: "关于下面的代码，以下说法正确的是（ ）。",
            code: `class A {
    virtual void func1();
    void func2();
};
class B : class A {
    void func1() { cout << "fun1 in class B" << endl; }
    virtual void func2() { cout << "fun2 in class B" << endl; }
};`,
            options: [
              "A 中的 func2 是虚函数，B 中的 func1 不是虚函数。",
              "A 中的 func2 和 B 中的 func1 都不是虚函数。",
              "A 中的 func1 和 B 中的 func2 都不是虚函数。",
              "A 中的 func1 和 B 中的 func2 都是虚函数。"
            ]
          },
          {
            prompt: "下面 C++ 代码的输出是什么（ ）。",
            code: `int a = 5;
auto check = [=]() {
    a = 10;
};
check();
cout << "Value of a: " << a << endl;`,
            options: ["Value of a: 10", "Value of a: 5", "运行出错", "编译出错"]
          },
          {
            prompt: "下面 C++ 代码的输出是什么（ ）。",
            code: `int a = 5;
auto check = [&]() {
    a = 10;
};
check();
cout << "Value of a: " << a << endl;`,
            options: ["Value of a: 10", "Value of a: 5", "运行出错", "编译出错"]
          },
          {
            prompt: "下面代码的输出是什么（ ）。",
            code: `int a = 5, b = 6, c, d;
c = a, b;
d = (a, b);
cout << c << " " << d;`,
            options: ["5 6", "6 5", "6 7", "6 8"]
          },
          {
            prompt: "dynamic_cast 的用途是什么（ ）。",
            options: ["将基类对象指针转成子类对象指针", "和执行顺序有关", "将基类对象转成子类对象", "将子类对象转成基类对象"]
          },
          {
            prompt: "下面程序的输出是（ ）。",
            code: `class myclass {
public:
    int i;
    myclass(int a) : i(a) {}
    myclass* operator->() { return this; }
};
int main() {
    myclass ob(10);
    std::cout << ob.i << " " << ob->i;
    return 0;
}`,
            options: ["运行错误", "编译错误", "11 11", "10 10"]
          },
          {
            prompt: "下面程序的输出是（ ）。",
            code: `namespace extra { int i = 10; }
void i() {
    using namespace extra;
    int i;
    i = 9;
    std::cout << i;
}
int main() {
    enum letter { i, j = 11 };
    class i { letter j; };
    ::i();
    return 1;
}`,
            options: ["编译错误", "11", "10", "9"]
          },
          {
            prompt: "func() 抛出 B 类对象，main 中先 catch(A a)，再 catch(B b)。下面程序的输出是（ ）。",
            options: ["Caught B Class", "Caught A Class", "运行错误", "编译错误"]
          },
          {
            prompt: "func() 抛出 B 类对象，main 中先 catch(B* b)，再 catch(A a)。下面程序的输出是（ ）。",
            options: ["Caught B Class", "Caught A Class", "运行错误", "编译错误"]
          },
          {
            prompt: "类 B 包含一个 A 类型成员 a；A、B 的构造函数和析构函数分别打印提示。main 中执行 B b1，输出顺序是（ ）。",
            options: [
              "B 构造 → A 构造 → A 析构 → B 析构",
              "A 构造 → B 构造 → B 析构 → A 析构",
              "B 构造 → A 构造 → B 析构 → A 析构",
              "A 构造 → B 构造 → A 析构 → B 析构"
            ]
          },
          {
            prompt: "有关 Python 程序，说法正确的是（ ）。",
            options: [
              "程序中抛出异常不一定会导致程序终止。",
              "程序中抛出异常会导致程序终止。",
              "拼写错误会导致程序终止。",
              "逻辑错误会导致程序终止。"
            ]
          },
          {
            prompt: "以下哪个不是 Python 中的关键字（ ）。",
            options: ["with", "final", "import", "except"]
          },
          {
            prompt: "针对以下代码，错误的说法是（ ）。",
            code: `file_path = "c:/network/demo.txt"
with open(file_path, "r") as _f:
    _data = _f.read()
    print(_data.__class__.__name__)`,
            options: [
              "open 函数用只读模式读取文件。",
              "如果文件不存在，代码不会报错。",
              "代码执行完毕后 IO 会被关闭。",
              "file_path 中存在转义字符，需要进行转义处理或使用原始字符串。"
            ]
          }
        ]
      },
      {
        title: "填空题（2 题）",
        bullets: [
          "C++ 默认调用约定是 ______，由 ______ 清理被调用函数的线程栈。",
          "派生类析构函数的调用顺序：1. ______；2. ______；3. ______。"
        ]
      },
      {
        title: "解答题（1–3：C++）",
        bullets: [
          "阅读 FillLoginField：代码已通过编译，找出可能的漏洞和可优化点。依赖函数为 GetValueByKeyword 与 FillLoginMap；普通登录字段含 USER_LOGIN、PASSWORD、ACCOUNT_DES，另一类登录额外含 FISL_LOGIN_NOTE。",
          "写出完整的 strcpy 实现，函数签名为 char* strcpy(char* strDest, const char* strSrc)。",
          "标出 main 中无法通过编译的语句并说明原因。考点涉及抽象类实例化、未实现纯虚函数、protected/private 访问、派生类访问基类私有成员，以及重载与名称隐藏。"
        ],
        codeBlocks: [
          {
            label: "第 1 题 · 代码审阅",
            code: `bool FillLoginField(char login_type, string login_fields)
{
    vector<string> keyword = {
        "USER_LOGIN", "PASSWORD", "ACCOUNT_DES", "FISL_LOGIN_NOTE"
    };

    if (login_type == /* 普通登录类型 */) {
        int index = 0, max_index = 3;
        while (index < max_index) {
            string value = GetValueByKeyword(login_fields, keyword[index]);
            if (value == "") continue;
            FillLoginMap(keyword[index].c_str(), sizeof(keyword[index].c_str()),
                         value.c_str(), sizeof(value.c_str()));
            ++index;
        }
        return true;
    } else if (login_type == /* FISL 登录类型 */) {
        int index = 0, max_index = 4;
        while (index < max_index) {
            string value = GetValueByKeyword(login_fields, keyword[index]);
            if (value == "") continue;
            FillLoginMap(keyword[index].c_str(), sizeof(keyword[index].c_str()),
                         value.c_str(), sizeof(value.c_str()));
            ++index;
        }
        return true;
    }
}`
          },
          {
            label: "第 3 题 · main 中找出不能编译的语句",
            code: `class A {
public:
    A() {}
    virtual int output() = 0;
private:
    int i;
};

class B : public A {
private:
    int j;
};

class C {
    int f() { return x; }
public:
    int f(int a, int b = 10) { return x * a + b; }
protected:
    void setX(int a) { x = a; }
    int getX() { return x; }
private:
    int x;
};

class D : public C {
private:
    int z;
public:
    int f() { return x; }
};

int main() {
    A* pA = NULL;
    A objA;
    B objB;
    C objC;
    D objD;
    objC.setX(2);
    cout << objC.getX();
    objC.setX(1);
    C* ptrD = &objD;
    ptrD->f(5);
    ptrD->f();
    return 0;
}`
          }
        ]
      },
      {
        title: "解答题（4–12：Python / NumPy）",
        bullets: [
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
    id: "stablebro-technical-written-2023",
    company: "稳博投资",
    type: "笔试",
    round: "技术组笔试",
    date: "2023-08-26",
    time: "",
    duration: "时长未记录",
    title: "稳博投资 · 技术组笔试",
    summary: "两道开放题：Penney’s Game 投币序列策略，以及 C++ 日频股票回测系统框架设计。",
    tags: ["C++", "Python", "概率", "回测系统", "Penney’s Game"],
    sections: [
      {
        title: "问题一 · 投掷硬币序列",
        paragraphs: [
          "背景：小 P 和小 H 分别选择一个由 4 个硬币结果组成的序列，正面用 U 表示，反面用 D 表示。一枚公平硬币不断投掷并记录结果，谁选择的序列先出现，谁就是获胜者。",
          "问题：给定小 P 选择的一个序列，请为小 H 给出胜率最大的对应序列，并给出 C++ / Python 代码。",
          "示例：小 P 选择 DDDD，小 H 可以选择 UDDD。",
          "扩展：将序列长度 4 改为任意有限正整数，如何优化计算？此扩展可以选择回答或不回答。"
        ]
      },
      {
        title: "长度为 4 的作答",
        paragraphs: [
          "这是 Penney’s Game 的变体。若小 P 的序列不是 UDUD 或 DUDU，设其序列为 XYZW，则取第三位 Z 的反面放到前三位之前，小 H 选择 (-Z)XYZ。",
          "若小 P 选择的是正反面逐个交错的 UDUD 或 DUDU，则小 H 选择 ZXYZ。比如小 P 选择 DDDD 时，小 H 选择 UDDD；小 P 只有开局连续四次都是 D 才能先获胜。"
        ],
        codeBlocks: [
          {
            label: "Python · 长度为 4 的策略",
            code: `def strategyForFour(seq_P):
    anti = {"U": "D", "D": "U"}
    alternating = seq_P in ("UDUD", "DUDU")
    X, Y, Z, W = list(seq_P)
    N = Z if alternating else anti[Z]
    return N + X + Y + Z


if __name__ == "__main__":
    print(strategyForFour("DDDD"))  # UDDD`
          }
        ]
      },
      {
        title: "任意长度的扩展作答",
        paragraphs: [
          "对于任意有限长度，枚举小 H 的所有候选序列，计算序列两两之间的 Conway leading number（CLN），再比较每个候选序列对小 P 的获胜概率，选出概率最大的序列。",
          "若定义 |AB| 为序列 A 与 B 的 CLN，则两方胜率之比可由 Pb : Pa = (|AA| - |AB|) : (|BB| - |BA|) 得到。"
        ],
        codeBlocks: [
          {
            label: "Python · 枚举候选序列并计算胜率",
            code: `def getCLN(seq_A, seq_B):
    bits = ""
    for length in range(len(seq_A), 0, -1):
        suffix = seq_A[len(seq_A) - length:]
        prefix = seq_B[:length]
        bits += "1" if suffix == prefix else "0"
    return int(bits, 2)


def getWinP(seq_P, seq_H):
    if seq_P == seq_H:
        return 0.5
    numerator = getCLN(seq_P, seq_P) - getCLN(seq_P, seq_H)
    other = getCLN(seq_H, seq_H) - getCLN(seq_H, seq_P)
    return numerator / (numerator + other)


def getAllSeqs(length):
    results = [""]
    for _ in range(length):
        results = [prefix + side for prefix in results for side in ("U", "D")]
    return results


def bestResponse(seq_P):
    best_seq, best_probability = seq_P, 0.5
    for seq_H in getAllSeqs(len(seq_P)):
        probability = getWinP(seq_P, seq_H)
        if probability >= best_probability:
            best_seq, best_probability = seq_H, probability
    return best_seq, best_probability`
          }
        ]
      },
      {
        title: "问题二 · C++ 日频股票回测框架",
        paragraphs: [
          "使用 C++ 实现一个面向股票日频数据的回测系统框架 Demo，并具体实现统计模块。",
          "统计模块需要包括收益曲线的计算、IC、Sharpe，以及你认为重要的其他统计指标。框架设计可以参考 BackTrader、vn.py 等已有开源框架。"
        ]
      },
      {
        title: "问题二 · 我的实现",
        paragraphs: [
          "我使用 BacktestMetrics 类封装统计模块，构造时传入策略的每日收益率。实现仅依赖 C++ 标准库，并按每年 252 个交易日进行年化。",
          "main.cpp 使用一组日收益率和预测值构造统计对象，逐项输出 Sharpe、最大回撤、胜率、年化收益率、交易次数、交易成本、年化波动率、盈亏比和 IC；接口中还实现了累计收益曲线与 Beta。",
          "当前实现中，Sharpe 按（平均日收益率－无风险利率）÷ 日收益率标准差计算；年化收益率为平均日收益率 × 252，年化波动率为日收益率标准差 × √252。"
        ],
        bullets: [
          "收益指标：累计收益曲线、年化收益率。",
          "风险指标：Sharpe、最大回撤、年化波动率。",
          "交易统计：胜率、交易次数、交易成本、盈亏比（Profit Factor）。",
          "预测与基准：IC（预测值与实际收益率的 Pearson 相关系数）、Beta（策略与市场收益率的协方差 ÷ 市场收益率方差）。"
        ],
        codeBlocks: [
          {
            label: "backtest_metrics.hpp · 统计模块接口",
            language: "cpp",
            code: `class BacktestMetrics {
public:
    BacktestMetrics(const std::vector<double>& dailyReturns);

    double calculateSharpeRatio(double riskFreeRate) const;
    double calculateMaxDrawdown() const;
    double calculateWinRate() const;
    double calculateAnnualizedReturn() const;
    int calculateNumberOfTrades() const;
    double calculateTransactionCosts(double costPerTrade) const;
    double calculateAnnualizedVolatility() const;
    double calculateProfitFactor() const;
    std::vector<double> calculateCumulativeReturns() const;
    double calculateInformationCoefficient(
        const std::vector<double>& predictions) const;
    double calculateBeta(
        const std::vector<double>& marketReturns) const;

private:
    std::vector<double> dailyReturns_;
    double calculateAverage(const std::vector<double>& values) const;
    double calculateStandardDeviation(
        const std::vector<double>& values, double average) const;
};`
          },
          {
            label: "backtest_metrics.cpp · 累计收益、IC 与 Beta",
            language: "cpp",
            code: `std::vector<double> BacktestMetrics::calculateCumulativeReturns() const {
    std::vector<double> cumulativeReturns;
    double cumulativeReturn = 1.0;

    for (double dailyReturn : dailyReturns_) {
        cumulativeReturn *= (1.0 + dailyReturn);
        cumulativeReturns.push_back(cumulativeReturn - 1.0);
    }
    return cumulativeReturns;
}

double BacktestMetrics::calculateInformationCoefficient(
    const std::vector<double>& predictions) const {
    if (predictions.size() != dailyReturns_.size())
        throw std::runtime_error("Predictions size does not match daily returns size.");

    double averageReturns = calculateAverage(dailyReturns_);
    double averagePredictions = calculateAverage(predictions);
    double covariance = 0.0;

    for (std::size_t i = 0; i < dailyReturns_.size(); ++i)
        covariance += (dailyReturns_[i] - averageReturns) *
                      (predictions[i] - averagePredictions);

    covariance /= dailyReturns_.size();
    return covariance /
           (calculateStandardDeviation(dailyReturns_, averageReturns) *
            calculateStandardDeviation(predictions, averagePredictions));
}

double BacktestMetrics::calculateBeta(
    const std::vector<double>& marketReturns) const {
    if (marketReturns.size() != dailyReturns_.size())
        throw std::runtime_error("Market returns size does not match daily returns size.");

    double averageReturns = calculateAverage(dailyReturns_);
    double averageMarketReturns = calculateAverage(marketReturns);
    double covariance = 0.0;
    double marketVariance = 0.0;

    for (std::size_t i = 0; i < dailyReturns_.size(); ++i) {
        covariance += (dailyReturns_[i] - averageReturns) *
                      (marketReturns[i] - averageMarketReturns);
        marketVariance += std::pow(marketReturns[i] - averageMarketReturns, 2);
    }
    return covariance / marketVariance;
}`
          },
          {
            label: "main.cpp · 使用示例",
            language: "cpp",
            code: `std::vector<double> dailyReturns = {
    0.02, -0.01, 0.03, -0.02, 0.01, 0.03, -0.01
};
std::vector<double> predictions = {
    0.01, 0.02, 0.03, -0.01, 0.02, 0.01, -0.02
};

BacktestMetrics metrics(dailyReturns);
double riskFreeRate = 0.02;

std::cout << "Sharpe Ratio: "
          << metrics.calculateSharpeRatio(riskFreeRate) << std::endl;
std::cout << "Maximum Drawdown: "
          << metrics.calculateMaxDrawdown() << std::endl;
std::cout << "Win Rate: "
          << metrics.calculateWinRate() << std::endl;
std::cout << "Annualized Return: "
          << metrics.calculateAnnualizedReturn() << std::endl;
std::cout << "Number of Trades: "
          << metrics.calculateNumberOfTrades() << std::endl;
std::cout << "Transaction Costs: "
          << metrics.calculateTransactionCosts(0.01) << std::endl;
std::cout << "Annualized Volatility: "
          << metrics.calculateAnnualizedVolatility() << std::endl;
std::cout << "Profit Factor: "
          << metrics.calculateProfitFactor() << std::endl;
std::cout << "Information Coefficient: "
          << metrics.calculateInformationCoefficient(predictions) << std::endl;`
          }
        ]
      }
    ]
  },
  {
    id: "wanji-quant-developer-written",
    company: "万济资本",
    type: "笔试",
    round: "量化开发笔试",
    date: "2023 年",
    time: "",
    duration: "45 分钟",
    title: "万济资本 · 量化开发笔试",
    summary: "EasyHire 英文笔试，约 13–14 道题，每道题单独计时。",
    tags: ["量化开发", "概率", "算法", "金融数学"],
    sections: [
      {
        title: "整体体验",
        paragraphs: [
          "海外企业使用的 EasyHire，题目全部是英文。平台是第一次使用，每道题都有计时，大约 10 分钟，整体非常赶。",
          "当时不确定每道题是要求写代码还是只用文字描述。除了几道题明确给了文字描述外，其他题目都写了一个简单代码求解。有些题已经记不清，一共大约 13 或 14 道。"
        ]
      },
      {
        title: "题目记录",
        bullets: [
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
    id: "bytedance-lark-backend-round1",
    company: "字节跳动·飞书",
    type: "面试",
    round: "后端一面",
    date: "2023 年",
    time: "",
    duration: "约 55 分钟",
    title: "字节跳动·飞书 · 后端一面",
    summary: "根据项目追问 C++ 多线程与 Kafka，算法题是升序链表去重。",
    tags: ["C++", "Kafka", "链表"],
    sections: [
      {
        title: "面试过程",
        paragraphs: [
          "没有自我介绍，上来直接问项目，并根据项目问基础知识。先问擅长的语言，因为个人更擅长 C++，所以问了很多 C++ 多线程方向的问题。",
          "印象较深的是“volatile 关键字的作用？”。当时实在没想起来，只记得使用它是为了不让编译器过度优化。",
          "项目涉及 Kafka，因此还问了 Kafka 的实现逻辑、Kafka 如何保证数据一致性，以及 Kafka Consumer Group 的概念。"
        ]
      },
      {
        title: "算法题",
        paragraphs: [
          "算法比较简单：升序单链表去重，需要自己编写测试用例。",
          "当时受 LeetCode 习惯影响，删除元素时直接把指针指向下下个元素。面试结束后才想起来，为了防止内存泄漏，应该先用临时指针保存待删除节点，再 delete 释放。"
        ]
      },
      {
        title: "反问与结果",
        paragraphs: [
          "反问：岗位 JD 要求 Golang，但自己没有使用过，是否接受入职后转语言。",
          "面试结束不久，HR 告知该岗位不再推进，但可以帮助推荐到其他组。"
        ]
      }
    ]
  },
  {
    id: "didi-rd-round2",
    company: "滴滴",
    type: "面试",
    round: "研发岗二面",
    date: "2023 年",
    time: "",
    duration: "约 40 分钟",
    title: "滴滴 · 研发岗二面",
    summary: "网约车订单均衡系统设计，以及链表节点两两交换。",
    tags: ["系统设计", "调度", "链表"],
    sections: [
      {
        title: "面试过程",
        paragraphs: [
          "面试官迟到了接近 10 分钟。自我介绍后出了一道设计题：全国范围内有些网约车司机很繁忙、接单很多，有些司机却很空闲，如何设计一个系统，让司机能够更均衡地接单。",
          "当时不知道如何入手，先询问 Daily Active User 和 Traffic Size。面试官只说可以考虑当前有很多人都在使用打车软件。回答过程中能听到面试官敲键盘的声音，感觉没有在仔细听。",
          "随后询问是否有其他 offer 和高考成绩，然后让写一道算法题。"
        ]
      },
      {
        title: "算法题",
        paragraphs: [
          "两两交换链表节点。本来觉得题目很稳，但最终翻车。面试官在写代码时关闭了摄像头，之后也没有再打开。",
          "写完后输出有问题，自己仍在检查逻辑，面试官询问了解题思路，回答后没有让继续修改。"
        ]
      },
      {
        title: "反问与感受",
        paragraphs: [
          "反问环节觉得大概率无法通过，因此直接表示没有问题。整场体验不太好，面试过程中摄像头不停摆动，感到不太被尊重。"
        ]
      }
    ]
  },
  {
    id: "bytedance-entertainment-backend-round1",
    company: "字节跳动·互娱研发",
    type: "面试",
    round: "后端一面",
    date: "2023 年",
    time: "",
    duration: "约 1 小时",
    title: "字节跳动·互娱研发 · 后端一面",
    summary: "Java 基础问题，以及苹果箱子和单链表右移两道算法题。",
    tags: ["Java", "二进制", "链表"],
    sections: [
      {
        title: "自我介绍与基础知识",
        paragraphs: [
          "先进行自我介绍和项目介绍。JD 没有写具体技术栈，本来以为会根据个人 C++ 方向提问，实际问的主要是 Java 方向基础知识。",
          "由于不熟悉 Java 和 Spring，很多问题无法说清。例如：HashMap 发生哈希冲突后，链表什么时候会转成红黑树？阈值为什么这样设计？"
        ]
      },
      {
        title: "苹果与箱子",
        paragraphs: [
          "剩余约 30 分钟进入算法环节。第一题是 1000 个苹果和 10 个箱子如何分配。题目描述比较奇怪，没有例子，一开始误以为是概率或智力题。",
          "先回答每个盒子平均放 100 个，面试官表示苹果数量不确定；之后又回答苹果数和盒子数取最大公约数，仍然不对。面试官提示 2^10 = 1024，但当时仍没有想到二进制表示。",
          "最终面试官给出的思路是用二进制分配：例如客户需要 3 个苹果，可以用装有 1 和 2 个苹果的箱子组合。"
        ],
        links: [{ label: "苹果箱子原题", url: "https://blog.csdn.net/qq_33732195/article/details/110533422" }]
      },
      {
        title: "单链表右移 K 位",
        paragraphs: [
          "飞书上原本显示有三道题。第一题思考和理解花费太久，看到面试官删掉了一道题。最后约 10 分钟写单链表右移 K 位。",
          "示例：k=3，1→2→3→4→5→6→null，返回 4→5→6→1→2→3→null。题目不难，但因为只有示例没有完整描述，理解花了一些时间。最后没有写测试用例，代码有一个小 bug 被面试官指出。"
        ]
      },
      {
        title: "反问",
        paragraphs: ["当时觉得表现很差、很可能无法通过，因此反问了一个比较私人的问题。"]
      }
    ]
  },
  {
    id: "mechmind-cpp-written",
    company: "梅卡曼德机器人",
    type: "笔试",
    round: "C++ 笔试",
    date: "2023 年",
    time: "",
    duration: "时长未记录",
    title: "梅卡曼德机器人 · C++ 笔试",
    summary: "三次收到内容相同的全选择题笔试，覆盖 C++、算法和操作系统基础。",
    tags: ["C++", "算法", "操作系统"],
    sections: [
      {
        title: "整体经历",
        paragraphs: [
          "不清楚公司的内部管理情况，前后三位 HR 分别发送了笔试链接，做了三次完全相同的题目。笔试全部是选择题，以 C++ 和算法基础为主。",
          "前两次做完后询问结果都没有回复。第三位 HR 在笔试后添加微信，要求提供在校成绩单，表示是审核的一部分；发送成绩单后也没有后续消息。"
        ]
      },
      {
        title: "题目范围",
        bullets: [
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
        title: "未确定的题目",
        paragraphs: [
          "某系统由 Cache 和主存两级构成。Cache 访问时间 10 个周期、缺失率 10%；主存访问时间 100 个周期、缺失率 0%。求平均存储器访问时间。当时不会，GPT-3.5 给出的答案是 20%，但不确定是否正确。"
        ]
      }
    ]
  },
  {
    id: "squarepoint-quant-cpp",
    company: "平方和投资",
    type: "面试与笔试",
    round: "量化开发 C++",
    date: "2023 年",
    time: "",
    duration: "面试 11 分钟；笔试 90 分钟",
    title: "平方和投资 · 量化开发 C++",
    summary: "一面主要问基数排序和 Lambda；笔试覆盖计算机基础及三道 Coding。",
    tags: ["C++", "排序", "算法", "笔试"],
    sections: [
      {
        title: "C++ 一面",
        paragraphs: [
          "约的是半小时，实际只有 11 分钟。面试官迟到接近 10 分钟，先进行自我介绍和项目介绍。由于没有介绍得特别深入，基础知识一共只问了两个问题。",
          "第一个是基数排序。之前刷题没有用过，也没有系统了解；当时以为听到的是计数排序，因此按照计数排序回答，复盘时才发现问的是十大排序算法中的基数排序。",
          "第二个是 C++ Lambda 表达式。回答得比较浅，例子停留在算法使用层面，例如捕获变量后 DFS 可以少传参数。",
          "之后询问期望岗位方向是算法还是开发，并表示需要排序，等待一周；如果没有消息就是被淘汰。最终默认未通过。"
        ]
      },
      {
        title: "笔试体验",
        paragraphs: [
          "笔试 90 分钟，时间比较赶。选择题包含计算机网络、操作系统和数据库，另有三道 Coding。题量很大，因为按顺序作答，Coding 部分最后没有时间仔细思考，最后两个多选题也没来得及做。"
        ]
      },
      {
        title: "Coding 题",
        bullets: [
          "金币问题。",
          "哈夫曼编码。实现过程中发生爆栈，没有时间修改。",
          "LeetCode 123：买卖股票的最佳时机 III。"
        ],
        links: [
          { label: "金币原题", url: "https://www.cnblogs.com/rstz/p/12393227.html" },
          { label: "哈夫曼编码原题", url: "https://blog.csdn.net/Tianyuwoni/article/details/64141585" }
        ]
      }
    ]
  },
  {
    id: "stablebro-quant-trading-system-round1",
    company: "稳博投资",
    type: "面试",
    round: "量化交易系统开发一面",
    date: "2023 年",
    time: "",
    duration: "约 30 分钟",
    title: "稳博投资 · 量化交易系统开发一面",
    summary: "C++ 项目、网络与消息队列基础，以及每秒 100 笔下单限流设计。",
    tags: ["C++", "网络", "交易系统", "限流"],
    sections: [
      {
        title: "面试过程",
        paragraphs: ["面试前 HR 让准备交易策略方向内容，但实际面试完全没有问策略。自我介绍之后主要是基础知识提问。"]
      },
      {
        title: "基础问题",
        bullets: [
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
        title: "场景设计题",
        paragraphs: [
          "交易场景下，系统规定 1 秒内下单不能超过 100 笔。系统调用超过 100 笔时，应该如何拦截？",
          "当时回答可以使用 Rate Limiter 或一些负载均衡算法，并以最熟悉的 Leaky Bucket 为例，但感觉面试官并不满意。",
          "追问应该用什么数据结构检查。回答用队列记录系统调用时间戳，再用哈希表做映射。之后又问上下游控制使用什么数据结构；当时没有完全理解，仍回答用队列解耦上下游。"
        ]
      },
      {
        title: "结果",
        paragraphs: ["反问环节结束后很快收到感谢信，不清楚具体原因，自认为大部分问题都回答了。"]
      }
    ]
  },
  {
    id: "cross-tech-cpp-round1",
    company: "交叉科技",
    type: "面试",
    round: "C++ 一面",
    date: "2023 年",
    time: "",
    duration: "约 20 分钟",
    title: "交叉科技 · C++ 一面",
    summary: "机器学习经历、LSTM、动态规划，以及最大回撤率算法题。",
    tags: ["机器学习", "动态规划", "最大回撤"],
    sections: [
      {
        title: "面试过程",
        paragraphs: [
          "原本约一小时，实际约 20 分钟。自我介绍后，面试官询问在学校做的机器学习和深度学习科研；还没有介绍完，面试官就问是否只是调包，自己回答是。",
          "面试官询问机器学习是否在学校上过课，回答是通过 Coursera 上吴恩达的视频自学。随后追问 LSTM 网络结构，当时已经忘记。",
          "之后问算法是否在学校学过，回答也是自学，因为自己是硬件转码；接着询问是否会动态规划。"
        ]
      },
      {
        title: "最大回撤率",
        paragraphs: [
          "面试官口述最大回撤率题目，第一遍没有听清，询问能否把题目发在聊天框，面试官没有发送，只重新口述了一遍。具体题目已经记不完整，当时理解为求差值最大化。",
          "第一反应是用双指针或维护历史最大值、历史最小值。随后考虑到面试官刚问过动态规划，又以为题目应该考 DP。",
          "面试官要求不要说太多模糊的“不就是”，而是给出清楚定义。当时有些紧张，就回答了 LeetCode 买卖股票最佳时机的 DP 定义、初始化和转移方程。"
        ]
      },
      {
        title: "结束",
        paragraphs: ["随后面试官表示再考虑一下，直接退出了会议。"]
      }
    ]
  }
];
