"""Run with python3 tests/wanyan-algorithms.test.py. Requires a C++17 compiler.
Reference calculations use Python exact integers; generated binaries stay in tmp.
"""
import importlib.util
import itertools
import math
import os
from pathlib import Path
import random
import subprocess
import tempfile
import unittest
ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'docs/code/wanyan'
spec = importlib.util.spec_from_file_location('tree', SOURCE / 'tree-brute.py')
tree = importlib.util.module_from_spec(spec)
spec.loader.exec_module(tree)

class Algorithms(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.temp = tempfile.TemporaryDirectory(prefix='wanyan-test-')
        cls.bins = {}
        for name in ['pair-product', 'count-smaller', 'decode', 'tree-star-candidate']:
            target = str(Path(cls.temp.name) / name)
            subprocess.run([os.environ.get('CXX', 'c++'), '-std=c++17', '-O2',
                            str(SOURCE / (name + '.cpp')), '-o', target], check=True)
            cls.bins[name] = target

    @classmethod
    def tearDownClass(cls):
        cls.temp.cleanup()

    def run_code(self, name, data, brute=False):
        return subprocess.check_output([self.bins[name]] + (['--brute'] if brute else []),
                                       input=data, text=True).strip()

    def test_pair_product_exact_and_extreme(self):
        rng = random.Random(20261015)
        cases = [([1, 2, 3], 3), ([-2, 1, 4], 7), ([5, 5], 7), ([9], 1),
                 ([-2**63, 2**63-1], 2**63-1)]
        cases += [([rng.randrange(-30, 31) for _ in range(rng.randrange(1, 10))],
                   rng.randrange(1, 25)) for _ in range(90)]
        for a, m in cases:
            expected = math.prod(abs(x-y) for x, y in itertools.combinations(a, 2)) % m
            data = f'{len(a)} {m}\n' + ' '.join(map(str, a)) + '\n'
            for brute in [False, True]:
                self.assertEqual(int(self.run_code('pair-product', data, brute)), expected)

    def test_count_smaller_duplicates_and_random(self):
        rng = random.Random(11)
        cases = [[], [5,2,6,1], [2,2], [3,2,1], [-1,-2,-1]]
        cases += [[rng.randrange(-9, 10) for _ in range(rng.randrange(30))] for _ in range(100)]
        for a in cases:
            expected = [sum(v < a[i] for v in a[i+1:]) for i in range(len(a))]
            data = f'{len(a)}\n' + ' '.join(map(str, a)) + '\n'
            for brute in [False, True]:
                self.assertEqual(list(map(int, self.run_code('count-smaller', data, brute).split())), expected)

    def test_decoding_enumerates_splits_and_big_counts(self):
        def reference(s):
            if not s: return 1
            if s[0] == '0': return 0
            count = reference(s[1:])
            if len(s) >= 2 and 10 <= int(s[:2]) <= 26: count += reference(s[2:])
            return count
        rng = random.Random(37)
        cases = ['0', '06', '10', '20', '100', '101', '226', '27', '12']
        cases += [''.join(rng.choice('01267') for _ in range(rng.randrange(1, 11))) for _ in range(100)]
        for s in cases:
            for brute in [False, True]:
                self.assertEqual(int(self.run_code('decode', s + '\n', brute)), reference(s))
        f0, f1 = 1, 1
        for _ in range(1, 300): f0, f1 = f1, f0 + f1
        self.assertEqual(int(self.run_code('decode', '1'*300 + '\n')), f1)

    def test_tree_sample_and_all_small_trees(self):
        self.assertEqual(tree.minimum(4,3), 5184)
        total_trees = 0
        for n in range(2,8):
            # Complementing both node colors preserves every path divisor count.
            for k in range(n//2 + 1):
                exact = tree.minimum(n,k)
                total_trees += n**(n-2)
                for color_count in {k, n-k}:
                    actual = int(self.run_code('tree-star-candidate', f'{n} {color_count}\n'))
                    self.assertEqual(actual, exact % tree.MOD)
        print(f'\nTree candidate checked against {total_trees} enumerated labeled trees. This is not a proof for arbitrary n.')

    def test_tree_modulus_cannot_order_candidates(self):
        # Original min(remainder1,remainder2) gives the wrong star at n=7,k=2.
        n,k = 7,2
        def star(x,y): return 3**(x-1)*4**(y+(x-1)*(x-2)//2)*6**(y*(y-1)//2+(x-1)*y)
        a,b = star(k,n-k),star(n-k,k)
        self.assertNotEqual(min(a % tree.MOD,b % tree.MOD), min(a,b) % tree.MOD)

    def test_lp64_layout(self):
        probe = Path(self.temp.name) / 'layout.cpp'
        probe.write_text('#include <iostream>\nstruct A { int a; union { long b; short c; }; };\nstruct B {char e; A d; int f;};\nint main(){std::cout<<sizeof(long)<<" "<<sizeof(B);}\n')
        target = str(probe.with_suffix(''))
        subprocess.run([os.environ.get('CXX','c++'), '-std=c++17',str(probe),'-o',target],check=True)
        size_long,size_b = map(int,subprocess.check_output([target],text=True).split())
        if size_long == 8: self.assertEqual(size_b,32)

if __name__ == '__main__': unittest.main(verbosity=2)
