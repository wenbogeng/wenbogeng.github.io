// 星形候选公式已纠正；不将小数据一致误写成全局最优证明。
// 若没有另行证明“最优树一定可取星形”，本程序只求两种星形中的最优值。
#include <iostream>
using namespace std;
const long long MOD = 1000000007;
long long power(long long a, long long b) {
    long long r = 1;
    for (; b; b >>= 1, a = a * a % MOD) if (b & 1) r = r * a % MOD;
    return r;
}
long long choose2(long long x) { return x * (x - 1) / 2; }
int main() {
    long long n, k; if (!(cin >> n >> k) || n < 2 || n > 1000000000LL || k < 0 || k > n) return 1;
    long long l = n - k;
    // n >= 3 时两种星形相比，多数颜色作中心更优；相等则相同。
    bool center2 = k >= l;
    long long same = center2 ? k : l, other = center2 ? l : k;
    long long e3 = same - 1;
    long long e4 = other + choose2(same - 1);
    long long e6 = choose2(other) + (same - 1) * other;
    cout << power(3, e3) * power(4, e4) % MOD * power(6, e6) % MOD << '\n';
}
