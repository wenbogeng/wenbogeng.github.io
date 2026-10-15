#include <algorithm>
#include <iostream>
#include <stdexcept>
#include <vector>
using namespace std;
using i128 = __int128_t;
long long pairProduct(const vector<long long>& a, long long m, bool fast) {
    if (m <= 0) throw invalid_argument("m must be positive");
    // m 个余数，n > m 必然有两个数同余。
    if (fast && static_cast<unsigned long long>(a.size()) > static_cast<unsigned long long>(m)) return 0;
    long long ans = 1 % m;
    for (size_t i = 0; i < a.size(); ++i) {
        for (size_t j = i + 1; j < a.size(); ++j) {
            i128 d = (i128)a[i] - (i128)a[j];
            if (d < 0) d = -d;
            ans = (long long)((i128)ans * (d % m) % m);
            if (fast && ans == 0) return 0;
        }
    }
    return ans;
}
int main(int argc, char**) {
    ios::sync_with_stdio(false); cin.tie(nullptr);
    int n; long long m;
    if (!(cin >> n >> m) || n < 0 || m <= 0) return 1;
    vector<long long> a(n); for (auto& x : a) cin >> x;
    cout << pairProduct(a, m, argc == 1) << '\n'; // 任意参数切换为暴力版。
}
