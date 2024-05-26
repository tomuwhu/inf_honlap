# Furcsa algoritmus

---

Időlimit: 1.00 s, Memórialimit: 512 MB

---

Adott egy algoritmus mely bemenetként egy pozitív egész számot kap: $n$. Ha $n$ páros, az algoritmus elosztja $2$-vel, ha páratlan, megszorozza $3$-mal és hozzáad $1$-et, ezt addig ismétli, amíg az $n ≠ 1$.
Például az $n = 3$ bemenetre a következő szekvenciát kapjuk:
$$ 3 \rightarrow 10 \rightarrow 5 \rightarrow 16 \rightarrow 8 \rightarrow 4 \rightarrow 2 \rightarrow 1$$
A feladat, hogy szimuláljuk az algoritmus futását a $n$ adott bemenetre.

---

Bemenet:
Egy sor mely egy egész számot tartalmaz.

Kimenet:
Egy sorban az algoritmus futása során az $n$ felvett értékei.

Feltételek:

$1 \le n \le 10^6$

Példa
Bemenet:

```bash
3
```

Kimenet:

```bash
3 10 5 16 8 4 2 1
```
