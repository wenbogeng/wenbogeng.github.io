#include <algorithm>
#include <iostream>
#include <string>
using namespace std;
// 十进制大整数加法，避免原稿 int / long long 的溢出。
string add(string a, string b) {
    string out; int carry = 0;
    int i = (int)a.size() - 1, j = (int)b.size() - 1;
    while (i >= 0 || j >= 0 || carry) {
        int v = carry;
        if (i >= 0) v += a[i--] - '0';
        if (j >= 0) v += b[j--] - '0';
        out.push_back(char('0' + v % 10)); carry = v / 10;
    }
    reverse(out.begin(), out.end()); return out;
}
bool pairOK(const string& s, size_t i) {
    return i + 1 < s.size() && (s[i] == '1' || (s[i] == '2' && s[i + 1] <= '6'));
}
string brute(const string& s, size_t i) {
    if (i == s.size()) return "1";
    if (s[i] == '0') return "0";
    string ans = brute(s, i + 1);
    if (pairOK(s, i)) ans = add(ans, brute(s, i + 2));
    return ans;
}
string dynamic(const string& s) {
    if (s.empty()) return "0";
    string prev2 = "1", prev1 = s[0] == '0' ? "0" : "1";
    for (size_t i = 1; i < s.size(); ++i) {
        string cur = s[i] == '0' ? "0" : prev1;
        if (pairOK(s, i - 1)) cur = add(cur, prev2);
        prev2 = prev1; prev1 = cur;
    }
    return prev1;
}
int main(int argc, char**) {
    string s; if (!(cin >> s)) return 1;
    if (!all_of(s.begin(), s.end(), [](char c) { return c >= '0' && c <= '9'; })) return 1;
    if (argc > 1 && s.size() > 30) { cerr << "brute force: use at most 30 digits\n"; return 1; }
    cout << (argc == 1 ? dynamic(s) : brute(s, 0)) << '\n';
}
