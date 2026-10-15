#include <algorithm>
#include <iostream>
#include <numeric>
#include <vector>
using namespace std;
vector<int> brute(const vector<long long>& a) {
    vector<int> ans(a.size());
    for (size_t i = 0; i < a.size(); ++i)
        for (size_t j = i + 1; j < a.size(); ++j)
            if (a[j] < a[i]) ++ans[i];
    return ans;
}
vector<int> mergeCount(const vector<long long>& a) {
    int n = (int)a.size();
    vector<int> ids(n), tmp(n), ans(n);
    iota(ids.begin(), ids.end(), 0);
    auto sort = [&](auto&& self, int l, int r) -> void {
        if (r - l <= 1) return;
        int mid = l + (r - l) / 2;
        self(self, l, mid); self(self, mid, r);
        int i = l, j = mid, p = l;
        while (i < mid && j < r) {
            if (a[ids[j]] < a[ids[i]]) tmp[p++] = ids[j++];
            else { ans[ids[i]] += j - mid; tmp[p++] = ids[i++]; }
        }
        while (i < mid) { ans[ids[i]] += j - mid; tmp[p++] = ids[i++]; }
        while (j < r) tmp[p++] = ids[j++];
        copy(tmp.begin() + l, tmp.begin() + r, ids.begin() + l);
    };
    sort(sort, 0, n);
    return ans;
}
int main(int argc, char**) {
    int n; if (!(cin >> n) || n < 0) return 1;
    vector<long long> a(n); for (auto& x : a) cin >> x;
    auto ans = argc == 1 ? mergeCount(a) : brute(a);
    for (int i = 0; i < n; ++i) cout << (i ? " " : "") << ans[i];
    cout << '\n';
}
