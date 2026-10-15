"""精确暴力：枚举全部带标号树，先比较任意精度整数，最后取模。
仅供 n <= 7 的小数据对拍；不是 n <= 10**9 的提交解。
"""
from itertools import product
from heapq import heapify, heappop, heappush
MOD = 1_000_000_007

def edges_from_prufer(n, code):
    degree = [1] * n
    for x in code:
        degree[x] += 1
    leaves = [i for i, d in enumerate(degree) if d == 1]
    heapify(leaves)
    edges = []
    for x in code:
        leaf = heappop(leaves)
        edges.append((leaf, x))
        degree[leaf] -= 1
        degree[x] -= 1
        if degree[x] == 1:
            heappush(leaves, x)
    edges.append((heappop(leaves), heappop(leaves)))
    return edges

def objective(n, k, edges):
    graph = [[] for _ in range(n)]
    for u, v in edges:
        graph[u].append(v)
        graph[v].append(u)
    result = 1
    for source in range(n):
        stack = [(source, -1, 0, 0)]
        while stack:
            u, parent, twos, threes = stack.pop()
            twos += u < k
            threes += u >= k
            if u > source:  # 只统计不同端点的无序对。
                result *= (twos + 1) * (threes + 1)
            for v in graph[u]:
                if v != parent:
                    stack.append((v, u, twos, threes))
    return result

def minimum(n, k):
    if not 2 <= n <= 7 or not 0 <= k <= n:
        raise ValueError("精确暴力仅支持 2 <= n <= 7、0 <= k <= n")
    # 同色节点可交换标号，固定前 k 个节点为 2 不会漏掉树形/赋权方案。
    return min(objective(n, k, edges_from_prufer(n, code))
               for code in product(range(n), repeat=n - 2))

if __name__ == '__main__':
    n, k = map(int, input().split())
    print(minimum(n, k) % MOD)
