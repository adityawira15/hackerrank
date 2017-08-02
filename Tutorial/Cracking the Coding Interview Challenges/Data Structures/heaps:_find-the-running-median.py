#!/bin/python3
import bisect
import sys


n = int(input().strip())
a = []
a_i = 0
listt = []
mid = 0

for a_i in range(n):
    a_t = int(input().strip())
    a.append(a_t)
    
for i in range(n):
    bisect.insort(listt,a[i])
    if (i+1)%2==0:
        print('{:0.1f}'.format((listt[mid]+listt[mid-1])/2))
    else:
        print('{:0.1f}'.format(listt[mid]))
        mid+=1
