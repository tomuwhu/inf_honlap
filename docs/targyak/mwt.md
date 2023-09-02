# Informatikai alapismeretek és modern webtechnológiák

[**# Pédaprogramok #**](/examples/webexamples/)

[[toc]]

## 1. Informatikai alapismeretek

### 1.1 Bevezetés az informatikába

- Alapfogalmak (jel, adat, információ)
- Informatikai eszközök működésük és jellemzőik
- Az informatika története
- Az informatika területei

### 1.2. Operációs rendszerek

- Operációs rendszer alapvető feladatai, tulajdonságai, típusai, felületei.
- Számítógép kezelése az operációs rendszer grafikus interfészével.
- Fájlrendszerek, prartíciók, alrendszerek.
- Processzusok, fonalak, erőforrások, ütemezés.
- Shell, kapcsolók, paraméterek, környezeti változók.
- Konzol alkalmazások, ssh, ftp, ...
- Shell parancsok
  - fájl és könyvtárstruktúra és kezelése (cd, ls, mkdir, rm, chmod, chown, ...)
  - processek és kezelésük (&, ps, top, kill, )
  - jogosultságkezelés, felhasználók kezelése
  - linkek, környezeti változók, szűrük
  - ssh, ftp
- Shell Scripting

### 1.3. Felhasználói adatfájlok

- Szövegfájlok, karakterkódolás (ASCII, ISO-8859-2, UTF-8).
- Formázott szöveg (Markdown, KaTeX, HTML, ...)
  
---> 2. fejezet

- Dokumentumkészítés ( Markdown, LaTex, ... )
- Prezentációkészítés ( reveal.js )
- Képformátumok ( pixeles és vektor-grafikus képek )
- Hang digitalizálása, hangformátumok
- Video formátumok + multi formátumok

### 1.4. Informatikai alkalmazások

- Program futtatása, grafikus ablak felépítése, felhasználói intefész elemei, kezelésük
- Internetes alkalmazások:
  - hírportálok
  - felhő alapú szolgáltatások
  - közösségi médiák, profilok, álprofilok
  - elektronikus banki és ügyfélkapcsolati szolgáltatások
  - digitális térképek és alkalmazásai
- Számítógépes játékok:
  - Keretrendszerek (Steam, EPIC, Battle.net, ...) 
  - Arcade játékok: Pacman, Super Mario, ...
  - Stratégiai játékok (StarCraft, Sims, Age of...)
  - FPS (UT, CS:GO, Fortnite, ...)
  - Racing (F1, NFS, ...)
  - Saját játékok és digitális tartalom fejlesztése (Unreal Engine, Unity, ...)
- Virtuális valóság és alkalmazásai.
- Csoportunka szoftverek
  - Felhő-alkalmazások, felhő-szolgáltatások
  - Verziókezelők ( GitHub, GitLab, ... )
  - Collaboration Hubs ( SLACK, ... )
- Kódszerkesztő programok (Visual Studio Code, Coda, ...)
  - programozási környezet kialakítása, lint, beautify
  - editor kezelése és pluginjai, 
  - CodeSandbox (codesandbox.io)
  
### 1.5. Hálózati alapismeretek

- hálózati struktúrák
- hálózati eszközök
- kliens-szerver architektúra
- peer-to-peer hálózatok
- az internet felépítése működése
  - protokollok (http, ftp, tcp/ip, pop3/imap/smtp)
  - címzések (ip-cím, dns)
  - szerver típusok (tűzfal, proxy, NAT, DHCP)
  - hálózati eszközök (router, switch, ...)

### 1.6. Digitális tartalmak létrehozása

- Szövegszerkesztés célszoftverrel
- Tábázatkezelés célszoftverrel
- Diagramtípusok, grafikonok készítése
- Animáció-készítés  célszoftverrel
- Prezentáció-készítés célszoftverrel
- Képszerkesztés, grafikai programok használata
- Zene-szerkesztés célszoftverrel
- Film-vágás célszoftverrel
- Interaktív tartalmak létrehozása célszoftverekkel

### 1.7. Vizuális programozás

( Scratch, Lego Mindstorm, Unity, Unreal Engine, ... )

- Az első programunk.
- Objektum fogalma, jellemzők, adatok, metódusok.
- Események kezelése, interfészek.
- Kommunikáció az objektumok között.
- Komplex példaprogram.

---> 6. fejezet

### 1.8. A számítógép működése

- Számítógép felépítése, Neumann elvek.
- Hardver elemek és funkcióik
  - CPU
  - ALU
  - regiszterek
  - Memória
  - Címbusz
  - Adatbusz
  - Vezérlőbusz
- Program elhelyezkedése a memóriában, program (gépi kód) futása, alapvető gépi utasítások, verem memória.
- Alapvető vezérlési szerkezetek (szekvencia, szelekció, iteráció, alprogram-hívás, rekurzió).
- Operációs rendszer szerepe a programok futtatásában.
- Programok felépítése, felhasználói interfészek típusai.
- A böngésző kezelése, fejlesztői eszközök, bővítmények

### 1.9 Információs társadalom

- informatikai biztonság
- adatvédelmi irányelvek
- szerzői joggal kapcsolatos alapfogalmak
- kommunikációs illemszabályok
- az információ és az informatika 
  - gazdaságra, 
  - környezetre, 
  - kultúrára, 
  - személyiségre, 
  - egészségre gyakorolt hatása.

## 2. Web alapismeretek

### 2.1. HTML

- HTML objektumok (div, br, hr, ...)
- jellemzők (id, class, ...)
- szelektorok
- fejléc
- felsorolás
- táblázatok
- hivatkozások
- képek beillesztése
- SVG
- Szintaxis diagramok
- HTML űrlapok
- HTML események (egér, billentyűzet, ...)
- DOM

---> 3. fejezet

### 2.2. CSS

- szintaxis
- színek
- doboz modell
- szegélyek
- szövegformázás
- igazítás
- színek
- ikonok
- grid
- animáció
- külső ikon- és fontkészletek
  - Feather
  - Font Awesome
  - Google
  - Ionicons
- scss, less

### 2.3 Statikus tartalmak hostingja

- GitHub Hosting
- Google analitics

## 3. JavaScript ( ECMAScript )

### 3.1. Javascript futtatása

- node konzol
- .js file futtatása (node index.js): console.log
- a böngészőben: document objektum 
  - write, 
  - getElementById, 
  - querySelector, 
  - querySelectorAll,
  - title, 
  - oncontextmenu

### 3.2. JavaScript - ES9 szintaxis

#### 3.2.1. Szintaxis (node konzol alkalmazása)

- Változók, utasítások, kifejezések, kommentek, változók. Operátorok és precedencia.

#### 3.2.2. Típusok (sok gyakorlással és pédával node és böngészős futtatás is)

- JavaScript primitívek.
- Függvények, paraméterek, függvény paraméter, objektum paraméter.
- Objektumok, jellemzők, metódusok.
- Stringek, számok és tömbök mint objektumok: mezők, jellemzők, metódusok.
- Osztályok (class, new, constructor, this, ...).
- Consol objektum, ui.

#### 3.2.3. Rekurzió

- a rekurzió működési mechanizmusa, a verem
- példák rekurzióra: faktoriális, fibonacci sorozat, hanoi tornyai
- rekurzióval megoldható további feladatok (6.3)

--- 3.6 alfejezet

#### 3.2.4. Standard built-in objekutumok

- Array
  - fill, map, join, forEach, find, filter, sort, reverse,
  - pop, push, shift, unshift, reduce, slice, splice, includes
- String
  - template, literals
  - slice, split, toLocaleLowerCase, toLocaleUpperCase,
  - search, localeCompare, repeat, includes, replace
- Set
- Map
- Date
- JSON
- Math
- RegExp
- Buffer

#### 3.2.5. Vezérlési szerkezetek

- { ... }
- if ... else
- for
- for ... in
- for ... of
- do ... while
- while
- switch
- brake
- continue
- try ... catch, throw

#### 3.2.6. JS és HTML kapcsolata

- JS Stringkezelés a gyakorlatban
- HTML generálás JS segítségével
- SVG generálás JS segítségével

#### 3.2.7. Callback függvények

- Callback függvény. Promise objektum. Async Functions.
- Párhuzamos programozás, Worker

### 3.3. Böngésző funkciók

- HTML DOM elérése JS-ből
- HTML APIs (Geolocation, Drag&Drop, Local Storage, Web Workers, SSE )
- Böngésző local tárolók (Session Storage, IndexedDB, Web SQL, Cookies).
