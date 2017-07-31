import math

p = int(input().strip())
for a0 in range(p):
    n = int(input().strip())
    if n < 2:
        print("Not prime")
        continue
    for i in range(2, math.floor(math.sqrt(n))+1):
        if n % i == 0:
            print("Not prime")
            break
    else:
        print("Prime")