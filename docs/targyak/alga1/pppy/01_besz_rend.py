from random import shuffle as sh

t = list(range(1, 20))
sh(t)
print(*t)
n = len(t)
for j in range(0, n - 1):
    for i in range(j, n):
        if t[i] < t[j]:
            t[i], t[j] = t[j], t[i]
print(*t)