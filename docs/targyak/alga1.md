# Algoritmusok és adatszerkezetek I.

## Tematika

### Alapfogalmak

- algoritmus, számítási probléma
- algoritmusok mint technológia
- futási idő
- tárigény
- aszimptotikus jelölések
- helyesség
- algoritmus megadási módszerek

### Rendezési algoritmusok

- beszúró rendezés
- buborékrendezés
- rendezés lineáris időben
- _öszefésülő rendezés_
- _gyorsrendezés_
- _kupacrendezés_
  
### Elemi adatszerkezetek

- tömb
- mutatók és objektumok
- interfész fogalma, absztrakt adatszerkezet
- adatszerkezet típus (osztály létrehozása, példányosítása)
- láncolt lista
- verem
- sor

### Elemi algoritmusok

- keresés adatszerkezetben, adatmódosítás, adat törlése
- leválogatás (szűrés)
- keresés rendezett adatokon
- függvényhívás folyamata
- rekurzió
- rekurzió memorizálása
- oszd meg és uralkodj

### Fejlett adatszerkezetek és kapcsolódó problémák

- hasítótáblázatok
- bináris fa, általános fa
- bináris keresőfa, általános keresőfa
- véletlen építésű bináris keresőfa
- intervallumfák
- bináris kupac
- gráfok, irányított gráfok, súlyozott gráfok, gráfok tulajdonságai
  - pontok, élek, hurokél, izolált pont, párhuzamos élek, út, kör
  - teljes gráf
  - összefüggőség
  - erősen összefüggő komponensek irányított gráfban
  - élek osztályozása irányított gráfban
  - fokszámeloszlás
  - feszítőfák
  - legrövidebb utak
  - A königsbergi hidak problémája, Euler-kör, Euler feltétel
  - Hamilton-kör, Pósa-feltétel
- gráfok szélességi bejárása
- számított gráf problémák, öntögetős játék
- Dijkstra algoritmus
- Diszjunkt halmazok láncolt listás ábrázolása
- Kruskal algoritmus, diszjunkt-halmaz erdő
- Prim algoritmus
- hálózati folyamok, FordésFulkersonalgoritmusa
- párosítási problémák, maximális párosítás, magyar módszer
- gráfok színezése

### Rekurzióval megoldható problémák

- n!, fibonacci, euklideszi algoritmus
- rekurzív ciklus
- hanoi tornyai
- aknakereső játék
- bináris fák bejárása (preorder, inorder)
- gráf mélységi bejárása
- mélységi keresés gráfban
  - topologikus rendezés
  - élek osztályozása
  - erősen összefüggő komponensek
- optimális pénzváltás, mohó stratégia
- hátizsák probléma, töredékes hátizsák

### Dinamikus programozás

- kincskereső játék
- optimális pénzváltás
- palindróma probléma
- hátizsák probléma
- optimális bináris keresőfa
- [Damerau-Levenstein távolság, Wagner–Fischer algoritmus, hasonlósági érték](https://www.codeproject.com/Articles/5342019/An-Optimal-Wagner-Fischer-Algorithm-For-Approximat)
- _Floyd–Warshall-algoritmus_

### Komplex témakörök

- problémák bonyolultsága, Turing-gép
- véletlenített algoritmusok
- approximációs algoritmusok
- online algoritmusok

## Követelmények

### Gyakorlat (gyakorlati jegy)

A félév során a hallgatóknak 4 gyakorlati feladattípusból kell megoldaniuk egy-egy feladatot, melyekre egyenkét 2 pont, összesen 8 pont szerezhető.

#### A gyakorlati jegy a gyakorlati összpontszám alapján

| Összpontszám | Gyakorlati jegy |
| ------:| :------- |
| 8 pont | jeles |
| 7 pont | jó |
| 6 pont | közepes |
| 5 pont | elégséges |
| 0..4 pont | elégtelen |

### Gyakorlat (aláírás)

A félév során a hallgatóknak 4 gyakorlati feladattípusból kell megoldaniuk egy-egy feladatot, melyekre egyenkét 2 pont, összesen 8 pont szerezhető.

#### A gyakorlati aláírás a pontszámok alapján

| Gyakorlati összpontszám | Gyakorlati jegy |
| ------:| :------- |
| 5..8 pont | aláírás |
| 0..4 pont | aláírás megtagadva |

_Javítási lehetőség (gyakorlati jegy pótlása, javítása):_

Mindegyik feladattípusból több is beadható, akár értékelés után is, az adott feladattípusból az utolsó beadott feladat pontszáma számít bele az összpontszámba.
Gyakorlati feladattípus a vizsgaidőszak első hetének végéig javítható.

### Kollokvium (szóbeli)

A kollokviumra el kell készíteni a Kollokvium-feladatot, melyre 2 pont szerezhető.

_Szóbeli vizsga_:
A vizsgáztató kérdései adott válaszok alapján -2 pont, -1 pont, 0 pont, 1 pont, vagy 2 pont szerezhető.
A vuzsgán szóbeli kérdések, tételek, bizonyítások és papiron/táblán kódolási feladatok, valamint algoritmusok végrehajtása fejben/papiron adott inputra várhatók.

_Megajánlott jegy_:
Az összpontszám alapján kérhető a vizsgajegy kiszámítása, ilyenkor a szóbeli vizsga pontszámának 0 pont kerül beszámításra.

_Kollokvium összpontszáma_:
[gyakorlati összpontszám] + [kollokvium feladat pontszáma] + [szóbeli vizsga pontszáma]

#### A kollokvium jegy az összpontszámok alapján

| Kollokvium összpontszáma | Kollokvium jegy |
| ------:| :------- |
| 10..12 pont | jeles |
| 9 pont | jó |
| 8 pont | közepes |
| 7 pont | elégséges |
| -2..6 pont | elégtelen |

_Kollokvium jegy javítása_:

- bármely gyakorlati feladattípusból és a kollokvium-feladatból is új feladatok megoldásai beadhatók, ilyenkor feladattípusonként az utolsó beadott feladat pontszáma számít bele az összpontszámba (de gyakorlati feladattípus a vizsgaidőszak első hetének végéig javítható.)

- a szóbeli vizsga pontszáma pótló/javító vizsgára jelentkezéssel, szóbeli vizsgával javítható

## Feladattípusok, feladatok formai követelményei, feladatok leadása, pontozás

| # | Feladattípus |
| ---: | :------ |
| 1. | Keresés, rendezés, mohó stratégia |
| 2. | Rekurzióval megoldható feladatok |
| 3. | Dinamikus programozási feladat |
| 4. | Fák, Gráfok |
| K. | SPOJ / OKTV |

A hallgatóknak minden feladattípusból a következő fájlokat kell feltöltenie GitHub-ra és az egyes fájlok publikus linkjeit, a megadott Google Űrlapon meg kell adni:

- Feladatlap (a feladat pontos leírása magyar nyelven, markdown formátumban)
- Feladat megoldása:
  - C, C++, C#, Go, Java, JavaScript/TypeScript (NodeJS), Python, PHP programozási nyelvek valamelyikén írt konzolalkalmazás.
  - A program forráskódját kell feltölteni.
  - A program a standard inputról olvasson és a standard outputra írjon.
- A megoldás magyarázata, dokumentációja bármely hivatkozható (```<a href='...'>...</a>```, pl. HTML/CSS, PDF vagy YouTube video) formában
- Egy ellenőrző program és környezet (lehet bash fájl vagy bármi egyéb),
  - mely legalább 10 (köztük több nagy méretű) tesztesetre vizsgálja, hogy a program helyensen működik-e
  - ennek dokumentációja markdown, vagy html/css formátumban

| Feladatrész|  Értékelés szempontjai | Maximális pontszám |
| :--- | :------ | ---: |
| Feladatlap |  választott feladat bonyolultsága, egyértelműség, helyesség, megjelenés | 0,4 pont |
| Megoldás forráskódja | választott feladat bonyolultsága, helyesség, optimális futási idő és tárigény, olvasható, rendezett forráskód | 0,5 pont |
| Megoldás magyarázata | érthetőség, helyesség, megjelenés | 0,6 pont |
| Tesztelő program | helyesség, tesztesetek diverzitása | 0,3 pont |
| Nyilvánossá tétel | igen / nem | 0,2 pont |

Feladattípusonként így maximum 2 pont szerezhető, amit a kerekítés szabályainak megfelelően egész pontra kerekítek.
