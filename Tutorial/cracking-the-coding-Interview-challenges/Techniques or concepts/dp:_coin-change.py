#!/bin/python3

import sys

def make_change(coins, n):
    coins = sorted(coins)
    d = {}
    for i in range(n+1):
        d[i] = 0
    for i in range(0,n+1,coins[0]):
        d[i] = 1
    for c in coins[1:]:
        for i in range(1,n+1):
            if i-c in d:
                if (i-c ==0 or d[i-c] != 0):
                    d[i] = d[i] + d[i-c]
    return d[n]
    

n,m = input().strip().split(' ')
n,m = [int(n),int(m)]
coins = [int(coins_temp) for coins_temp in input().strip().split(' ')]
print(make_change(coins, n))

