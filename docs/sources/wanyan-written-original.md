# 顽岩笔试

算法 ACM

```cpp
牛牛有一个长度为 n 的数组 a 牛牛今天对数组元素之间的差值很感兴趣，于是牛牛想将数组元素凉凉的差值的绝对值进行累乘 
输入第一行为 n m 表示数组长度和模数 第二行表示 n 个数组 表示元素ai
输出为一行 表示取模后的答案 
实例
输入
3 3
1 2 3 
输出 2 
说明
｜1-2｜x |1 -3 | x |2-3| = 2 mod 3 = 2
```

Brute force 

High Level Merge Sort

```cpp
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> countSmaller(vector<int>& nums) {
        int n = nums.size();
        vector<int> ans(n, 0);
        vector<pair<int, int>> arr;

        for (int i = 0; i < n; i++) {
            arr.push_back({nums[i], i});
        }

        mergeSort(arr, 0, n - 1, ans);
        return ans;
    }

    void mergeSort(vector<pair<int, int>>& arr, int l, int r, vector<int>& ans) {
        if (l >= r) return;

        int mid = l + (r - l) / 2;
        mergeSort(arr, l, mid, ans);
        mergeSort(arr, mid + 1, r, ans);

        vector<pair<int, int>> temp;
        int i = l, j = mid + 1;
        int rightSmaller = 0;

        while (i <= mid && j <= r) {
            if (arr[j].first < arr[i].first) {
                rightSmaller++;
                temp.push_back(arr[j]);
                j++;
            } else {
                ans[arr[i].second] += rightSmaller;
                temp.push_back(arr[i]);
                i++;
            }
        }

        while (i <= mid) {
            ans[arr[i].second] += rightSmaller;
            temp.push_back(arr[i]);
            i++;
        }

        while (j <= r) {
            temp.push_back(arr[j]);
            j++;
        }

        for (int k = l; k <= r; k++) {
            arr[k] = temp[k - l];
        }
    }
};

int main() {
    int n;
    cin >> n;

    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }

    Solution sol;
    vector<int> count = sol.countSmaller(nums);

    for (int i = 0; i < n; i++) {
        if (i) cout << " ";
        cout << count[i];
    }
    cout << endl;

    return 0;
}
```

数字翻译成字符串 有一种将字母编码成数字的方式 现在给一串数字 返回有多少种可能的编码效果 输入 12 输出 2

High Level DP 

```
dp[0] 表示空字符串的解码方式数
dp[1] 表示 "2" 的解码方式数
dp[2] 表示 "22" 的解码方式数
dp[3] 表示 "226" 的解码方式数
```

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;

    int n = s.size();
    if (n == 0) {
        cout << 0 << endl;
        return 0;
    }

    vector<int> dp(n + 1, 0);
    dp[0] = 1;

    for (int i = 1; i <= n; i++) {
        // 单独使用 s[i - 1]
        if (s[i - 1] != '0') {
            dp[i] += dp[i - 1];
        }

        // 使用 s[i - 2] 和 s[i - 1] 组成两位数
        if (i >= 2) {
            int num = (s[i - 2] - '0') * 10 + (s[i - 1] - '0');
            if (num >= 10 && num <= 26) {
                dp[i] += dp[i - 2];
            }
        }
    }

    cout << dp[n] << endl;
    return 0;
}
```

```cpp
小红的树构造 小红想让你早一棵树 公有 n 个节点 其中k 个节点权值为  2 。n-k 个节点的权值为 3 。小红定义路径权值为路径上所有点权值乘积的因子数量，只有长度不小于 1 的路径是有效的 {u 到 v v 到 u 是同一条路径}
小红希望所有的路径权值乘积仅可能的小 

你不需要构造出树，只需啊哟输出最小的权值即可，答案对 10^9 + 7 取模

输入 两个正整数 n 和 k 用空格隔开

2 <=n <=10^9 
0 <=k <=n 

输出  最小的权值乘积 对 10^9 + 7 取模

输入 4 3 

输出 
5184

我们构造这样一棵树
1 2 3 号节点权值为2 4 号节点为3 
1和2 连一条边，2 和 3 连一条边，2 和 4 连一条边
一共有 6 条路径，所有路径的权值乘积 就是 5184
```

```cpp
#include <iostream>
using namespace std;

const long long MOD = 1000000007;

long long qpow(long long a, long long b) {
    long long ans = 1;

    while (b > 0) {
        if (b % 2 == 1) {
            ans = ans * a % MOD;
        }

        a = a * a % MOD;
        b = b / 2;
    }

    return ans;
}

long long C2(long long x) {
    if (x < 2) return 0;
    return x * (x - 1) / 2;
}

long long calc_center_2(long long n, long long k) {
    long long cnt2 = k;
    long long cnt3 = n - k;

    if (cnt2 == 0) return -1;

    long long ans = 1;

    ans = ans * qpow(3, cnt2 - 1) % MOD;
    ans = ans * qpow(4, cnt3) % MOD;
    ans = ans * qpow(4, C2(cnt2 - 1)) % MOD;
    ans = ans * qpow(3, C2(cnt3)) % MOD;
    ans = ans * qpow(6, (cnt2 - 1) * cnt3) % MOD;

    return ans;
}

long long calc_center_3(long long n, long long k) {
    long long cnt2 = k;
    long long cnt3 = n - k;

    if (cnt3 == 0) return -1;

    long long ans = 1;

    ans = ans * qpow(4, cnt2) % MOD;
    ans = ans * qpow(3, cnt3 - 1) % MOD;
    ans = ans * qpow(3, C2(cnt2)) % MOD;
    ans = ans * qpow(4, C2(cnt3 - 1)) % MOD;
    ans = ans * qpow(6, cnt2 * (cnt3 - 1)) % MOD;

    return ans;
}

int main() {
    long long n, k;
    cin >> n >> k;

    long long ans1 = calc_center_2(n, k);
    long long ans2 = calc_center_3(n, k);

    if (ans1 == -1) {
        cout << ans2 << endl;
    } else if (ans2 == -1) {
        cout << ans1 << endl;
    } else {
        cout << min(ans1, ans2) << endl;
    }

    return 0;
}
```

代码存在缺陷以及可扩展性 

Riskmonitor 主要是
TradingSystem 封装合约管理 持仓管理 封控管理和订单管理 Ordermanger 实现了Iodercallback 创建订单之类的移步回报处理 持仓 风控 TradingHous 辅助测试类，Strategy 实现 IO人的人擦了两把查看通用锅 tradingsytem 提交订单并接受 main 是实例流程

ordermanger 主要是有 ReqOrderInset InOrderaccpey Onorderreject 和 onOrdertrade

```cpp
#include <cstdint>
#include <iostream>
#include <map>
#include <string>

enum class Side {
    Buy,
    Sell
};

enum class OrderStatus {
    New,
    Accepted,
    Rejected,
    Traded
};

struct OrderRequest {
    std::string instrument_id;
    Side side;
    double price;
    int32_t volume;
};

struct Order {
    uint64_t order_ref;
    std::string instrument_id;
    Side side;
    double price;
    int32_t volume;
    OrderStatus status;
};

struct OrderRejectInfo {
    uint64_t order_ref;
    std::string reason;
};

struct TradeInfo {
    uint64_t order_ref;
    std::string instrument_id;
    Side side;
    double price;
    int32_t volume;
};

class IOrderCallback {
public:
    virtual ~IOrderCallback() = default;

    virtual void OnOrderAccepted(uint64_t order_ref) = 0;
    virtual void OnOrderRejected(const OrderRejectInfo& info) = 0;
    virtual void OnOrderTraded(const TradeInfo& info) = 0;
};

class OrderManager {
public:
    OrderManager()
        : next_order_ref_(1), callback_(nullptr) {
    }

    void SetCallback(IOrderCallback* callback) {
        callback_ = callback;
    }

    uint64_t ReqOrderInsert(const OrderRequest& request) {
        uint64_t order_ref = next_order_ref_;
        next_order_ref_++;

        Order order;
        order.order_ref = order_ref;
        order.instrument_id = request.instrument_id;
        order.side = request.side;
        order.price = request.price;
        order.volume = request.volume;
        order.status = OrderStatus::New;

        orders_[order_ref] = order;

        AcceptOrder(order_ref);

        return order_ref;
    }

    const Order* GetOrder(uint64_t order_ref) const {
        auto it = orders_.find(order_ref);

        if (it == orders_.end()) {
            return nullptr;
        }

        return &it->second;
    }

    void RejectOrder(uint64_t order_ref, const std::string& reason) {
        auto it = orders_.find(order_ref);

        if (it == orders_.end()) {
            return;
        }

        it->second.status = OrderStatus::Rejected;

        if (callback_ != nullptr) {
            OrderRejectInfo info;
            info.order_ref = order_ref;
            info.reason = reason;

            callback_->OnOrderRejected(info);
        }
    }

    void TradeOrder(uint64_t order_ref, double price, int32_t volume) {
        auto it = orders_.find(order_ref);

        if (it == orders_.end()) {
            return;
        }

        it->second.status = OrderStatus::Traded;

        if (callback_ != nullptr) {
            TradeInfo info;
            info.order_ref = order_ref;
            info.instrument_id = it->second.instrument_id;
            info.side = it->second.side;
            info.price = price;
            info.volume = volume;

            callback_->OnOrderTraded(info);
        }
    }

private:
    void AcceptOrder(uint64_t order_ref) {
        auto it = orders_.find(order_ref);

        if (it == orders_.end()) {
            return;
        }

        it->second.status = OrderStatus::Accepted;

        if (callback_ != nullptr) {
            callback_->OnOrderAccepted(order_ref);
        }
    }

private:
    uint64_t next_order_ref_;
    std::map<uint64_t, Order> orders_;
    IOrderCallback* callback_;
};
```

设计题

实时排行的数据广播系统，想想一个大型的在线游戏平台，平台上有多个游戏房间，每个放假哪的玩家都在实时竞技 系统需啊哟维护每个房间的实时排行榜 TOP 5 玩家，江畔航班数据广播给观战客户端

基本设定

服务器每 500ms 会生成一次所有房间的最新排行榜

每次发布所有房间的排行榜数据，房间数量为 几十到上百个

每隔房间的排行榜包含：

红队 top5 得分最高的 5 名红队玩家

蓝队 top5 得分最高的 5 名蓝队玩家

设计目标

下游的观战客户端需要通过网络接收全部的是这些数据 并尽可能快速的解析和渲染排行榜

系统架构快烂

游戏服务器发送端功能：

计算排行榜

序列化

网络发送

广播数据

游戏客户端功能

接收所有广播

反序列化

解析数据

设计任务

1. 传输协议设计

数据格式设计

排行榜在网络传输中应该是用什么样的二进制文本 具体的字节布局和格式规范

发送端的处理流程 如何将内存中的数据结构转换成层网络传输的格式」一批数据多个房间该如何组织

1. 说明基础设计场下会遇到什么问题？需要做哪些设计来调整

3.交付要求

系统架构图

数据格式图示

处理流程图

关键设计决策说明

多态失效的原因是：

A compute 没有正确 override

B std::vector<strategy> 存储基类值 push_back 派生类被切片 object slicing 只保留基类部分 factor_ 被丢弃

C 虚函数声明错误

D const 修饰符导致无法调用需函数

template<typename... Ts>

sum(Ts ... args) {return (args + ...)l}

sum(std::string("hello") "" ,"world") 使用右折叠(args + ...) 的结果是

A 输出 helloworld

B 编译错误因为右折叠展开为 string("hello") + ("" + "wolrd") 而 +“world” 是两个 const char*想家 指针假发 ill-formed

C 输出 hello world

D 运行时错误

```cpp
class Monitor {
thread workder_;
atomic<bool> runing_ {false};

public:
void start(){
runing_ = true;
worker_ = stdLLthread([this]) {
While(runing.load()) {
this_thread::sleep_for(chrono::seconds(1))
stop() //（1）

void stop(){}
 runing = false
if(worker.joinable())
worker.join() // （2）
}}
~Monitor{stop()l}

}

如果工作线程调用 stop()(1)(2)处 join() 会发生什么

};
```

我该如何对这 5 个任务进行优先级排序，哪些任务自己会处理，哪些可以协调其他人参与，如何协调。录尚书任务重，受到监控告警 内存 95% 超市报错，影响到下有多个依赖房，我该如何调整工作，第一步是什么？

内存告警的处理思路

故障恢复，如何避免问题再次发生？

1. 生产环境某策略信号计算延迟，已影响到交易需排查
2. Hr 通知今天下午有一场候选人的技术面试，需要我做为面试官参加
3. Leader 要求今天完成仪表盘上的上线部署
4. CI/CD 流水线报错 开发团队无法正常提交代码
5. 一份技术方案需要在本周内完成

选择 & 填空题

在局域网内某台主机用 ping 命令测试网络连接时 发现网络内部的主机都可以连通，而不能与公网联通 可能问题是局域网 DNS 设置有无 局域网网关和主机的网关设置有无 没有设计局域网的网关 主机 ip 设置有误

用户态切换到内核态的操作 int/0 sin 函数调用 read 系统调用 哪几个选项

3 个并发 同类资源 4 个 系统不会发生死锁的最少资源数是？

d = {} d[[1,2]] = "hello" print(d) 输出的是？

linux 信号不能被进程捕获的是 ？

struct A{int a union {long b; short c}}; struct B { char e; struct A d; int f}; sizeof(struct B) 大小为

numpy 那种操作一定会产生 copy

b = a[a > 0] b = a[:] c = a.vew() b = a.reshape(2, 3)

C 那个阶段可以发现被调用的函数为定义 链接 编译执行 预处理？

进程状态转换的描述 不可能发生的事 堵塞->就绪 运行 ->堵塞 堵塞->运行 就绪->运行？

4 台打印机 每个需要独占 2 台打印机，则该系统最多同时执行多少作业不会发生死锁

tcp 套接字 那个不会发生堵塞？

N 条长度为 M 的有序链表合并 合并之后也保持有序 则时间复杂度为

awk 读取 log 文件抽取字段到 csv中 命令运行期间 使用 rm 删除 log 文件 会发生什么？

软连接和原文件共享相同 inode 硬链接和源文件共享同样的 inode 删除源文件后 软连接让然有效 赢链接可以夸文件系统 那个说法正确？

Numpy广播机制核心匹配规则是？

运行结果 x = 1 def change(a) x += 1 print(x) change(x)

numpy memap 创建映射文件，映射文件不支持下标随机访问，多个进程可以同时以只读方式映射同一个文件 内存映射的大小不能超过物理内存容量，数据会被一次性加载到物理内存中 

引用必须初始化 指针不必 不存在指向空值的引用，但存在指向空值的指针

引用初始化之后不能被改变，指针可以改变所指的的对象，引用传值 指针传地址

一个线程可以创建撤销另一个线程 一个程序至少有一个进程，一个进程至少有一个线程 这个说法对吗？

线程自己不拥有系统资源，操作系统最小的调度单位是进程？

构造方法没有返回类型吗？构造方法一定是 public 的吗？构造方法可以重载吗？

不同的线程共享相同的栈空间，线程比进程的并发度更高吗？

C++ 虚函数可以被内联吗？模版可以定义成虚函数吗？虚函数 和 模版的区别就是一个是运行时的多态 一个是编译期的多态是吗？