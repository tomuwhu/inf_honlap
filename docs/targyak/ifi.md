# Intelligens felhasználói interfészek

## Bash

- Fájltendszer, könyvtárstruktúra
  - fájltípusok, kiterjesztések
  - fa könyvtár-struktúra
  - abszolút-, relatív elérési út
  - file, könyvtár
  - futtatható fájl, command line applications
- Terminál app beállítása
  - Alacritty
  - Powerlevel10k
- Terminál parancsok
  - ls, cd, mkdir, chmod
  - touch, rm, cp, mv
  - su, sudo, pwd, cat (type)
  - apt-get, brew
- Windows CMD
  - dir
  - set PATH=%PATH%;C:/php
- Környezeti változók

## Github

- github regisztráció
- git telepítés
- git beállítása
  - git init, clone, add, commit, push, pull
  - .gitignore
- GitHub Desktop
- index.html, README.md
- Beállítások, GitHub Pages
- Domain beállítások
- Adatvédelmi tudnivalók, GitGuardian

## [VSCode](https://code.visualstudio.com/) használata

- kód bevitel
- UTF-8, Szimbólumok
- témák használata
- pluginek
  - ESLint, Prettier
  - Indent-rainbow, Material Icons
  - Live Server
  - Live Share
  - Markdown All in One
  - IntelliCode/Codeium
  - Svelte preview
- Svelte counter példaalkalmazás

## HTML/CSS/Markdown/SVG/JS ismétlés

- [Markdown](https://www.markdownguide.org/basic-syntax/)
- HTML objektumok, attribútumok, szelektorok
- CSS szelektorok
- Táblázatok
- Grid
- FlexBox
- Űrlapok, Űrlapelemek
- Események
- Favicon
- .css file, \<link>
- CSS Szintaxis, Szelektorok, Színek, Háttér, Opacity
- Display, Box model, Border, Text, Font
- Position
- Külső CSS/JS könyvtárak és egyebek
  - [Google Fonts](https://fonts.google.com/)
  - [Bootstrap](https://getbootstrap.com/)
  - [BootstrapVue](https://bootstrap-vue.org/)
  - [SVELTESTRAP](https://sveltestrap.js.org/?path=/docs/sveltestrap-overview--docs)
  - [Material UI](https://materializecss.com/)
  - [Vue Material UI](https://www.creative-tim.com/vuematerial/)
  - [Svelte Material UI](https://sveltematerialui.com/)
  - [React Material UI](https://mui.com/)
- SVG formátum, SVG használata HTML-ben
- CSS Transform
- CSS Animációk
  - animation
  - @keyframes
- SCSS/SASS
- JavaScript online editor
  - [Vanilla](https://playcode.io/javascript)
  - [JQuery](https://playcode.io/jquery)
  - [React](https://playcode.io/react)
  - [Vue](https://playcode.io/vue)
  - [Svelte](https://playcode.io/svelte)

## JavaScript/TypeScript/Svelte/Vue (Browser)

- JavaScript megjelenítés
  - Browser DevTools: elemek, vizsgálat, konzol, források
  - window, document objects, DOM
  - getElementById, querySelectorAll()
  - element attribútumok (id, class, draggable, ...)
  - \<script src='...'\>, \<script type="module" src="./main.js"></script>
  - _SVELTE {}, bind:value, ..._
  - _VUE API Styles_
- Eseménykezelés __~Függvények__
  - böngésző események
  - onclick, keydown, keyup, onmousemove, onmouseout, ...
  - oncontextmenu="return false"
  - eseménybuborékozás, event.stopPropagation()
  - oninput, onchange, dragstart, dragover, drop...
  - _SVELTE, VUE Binding bind:value, :value_
  - _SVELTE események (on:click, on:dragstart, ...)_
  - _VUE események (@click, @dragstart, :value, ...)_
- Szintaxis
  - Értékek, típusok (számok, szöveg)
  - Változók, definiálás, értékadás
  - _SVELTE var, let, const_
  - _SVELTE számított értékek: $: ௐ_
  - _VUE reactive, computed_
  - JavaScript / TypeScript
    - alap típusok: string, number, boolean
    - bigint, symbol, object, funtion, any
  - Kulcsszavak
  - Kommentek: //, /⁕ &lt;!-- ண -->
  - Operátorok, kifejezések, precedencia
  - String függvények, template
  - Feltételes értékadás: ண ? ண : ண
- Függvények
  - function f() {}
  - f = (...) => { ... ; return ௐ}
  - f = ௐ => ண
  - alapértelmezett érték
  - objektum paraméter
  - get, set
  - beépített függvények
  - generátorfüggvények, yield, yield*
- Tömbök (listák)
  - Lista létrehozása
  - Elem hozzáadása, adott elem kiválasztása
  - Elem törlése, adott elem keresése
  - Szűrés, rendezés, elemek módosítása
- Utasítások
  - if, elseif, else, switch...case
  - for, .forEach(ண), .map(ண), ...
  - _SVELTE_
    - _{#if ண} ... {:else if ண} ... {:else} ... {/if}_
    - _{#each ஃ as obj, index (key)} ... {:else} ... {/each}_
    - _{#each items as { id, name, qty }, i (id)} ... {/each}_
    - _{#await expression}...{:then name}...{:catch name}...{/await}_
    - _{#key expression}...{/key}_
  - _VUE: v-if, v-for, ..._
  - body onload()
  - _SVELTE, VUE: onMount(), onMounted_
  - try...catch
- Objektumok
  - jellemzők
  - metódusok
- Osztályok
  - jellemzők (property - tulajdon)
  - private, public
  - metódusok (method - módszer)
  - constructor
  - extends, static
  - példányosítás, new (instance - eset)
  - statikus metódusok
  - statikus jellemzők
- Beépített osztályok
  - Math
    - E, LN10, LN2, LOG10E, LOG2E, PI, SQRT1_2, SQRT2
    - abs, sin, cos, asin, acos, ceil, trunc, floor, round
    - sin, cos, exp, sgn, sqrt, log, log2, log10
    - max, min, pow, random
  - Object
    - Constructor
    - Static methods
    - Instance methods
  - Array
    - length
    - fill, every, join, keys, values, push, pop, *shift*, *unshift*
    - splice, toSpliced, reverse, toReversed
    - forEach, map, filter, sort, toSorted
  - Set
    - size
    - add, delete, has, keys (values), forEach, clear
    - union, intersection, symmetricDifference
  - Map, WeakMap
    - size
    - set, has, gat, delete, forEach, keys, values, clear
  - String
    - Instance methods and propery
  - Date
  - eval()
  - JSON
  - RegExp
  - Promise
  - FormData
  - Screen
- Beépített objektumok
  - document
    - getElementById
    - createElement
    - querySelectorAll
  - cookieStore
- Browser DevTools: Alkalmazás
  - Helyi tárhely (localStorage)
  - Cookie-k
  - IndexedDB
  - ReadableStream
- TypeScript: interface, implements, private, protected, \<T>
- [JavaScript referencia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)

## JavaScript fogások

- String template, Filterprefix
- Array (map, forEach, fill, sort, filter, reduce)
- SetInterval, SetTimeout
- Callback
- async, await
- Promisse
- Fetch
  - Stream
  - Stream => Text
  - Stream => JSON
- Cookie-k
- EventSource
- Date, Time
- JSON
- RegExp
- DOMParser
- Modulok, CDN
  - [jQuery](https://jquery.com/)
  - [Axios](https://axios-http.com/docs/intro), RestAPI
  - [Google Sheets Parser](https://www.npmjs.com/package/public-google-sheets-parser)
  - [Socket.io<sup>*</sup>](https://socket.io/)
  - [levenshtein](https://github.com/gf3/Levenshtein)
  - [marked](https://marked.js.org/)
  - [highlight.js](https://highlightjs.org/) v. [prism.js](https://prismjs.com/)
  - [Chart.js](https://www.chartjs.org/) v. [vis.js](https://visjs.org/)
- Browser Alkalmazás
  - Helyi tárhey (localStorage, sessionStorage)
  - Firefox: Svelte Dev Tools
- FrontEnd technológiák, fogások
  - JS => HTML Táblázat generálása
    - Table, Flex, Grid
  - JS => SVG grafika generálása
  - &lt;select> - optionok JavaScriptes kitöltése
  - Egér és billentyűzet események
    - eseménykezelés JS-ben
    - eseménykezelés generálása
  - Levenshtein Filter készítése
  - Egyszerű HTML-CSS-JS játékok készítése
    - Amőba, Aknakereső, Tron, Tetris, Tologatós kirakó, ...
  - Pozíció (relative, fixed) és méret módosítása JS segítségével
    - naptár megjelenítő alkalmazás fejlesztése
    - órarend megjelenítő alkalmazás fejlesztése
  - Drag & Drop
    - drag, dragstart, dragenter, dragover, dragend, dragleave, drop
    - Drag & Drop - fájl feltöltés  
    - Kártyajáték, Kirakó készítése, Mondrian Blocks
  - Animációk, fizikai szimulációk
    - SVG objektumok mozgatása
    - Egyenes vonalú egyenletes mozgás, sebességvektor
    - Gyorsulás, Lassulás, Gravitáció
    - Ütközésdetektálás
    - Lendületmegmaradás törvénye és alkalmazása
  - HTML, CSS, JS Játékok készítése
  - Design fogások
    - BootStrap

## HTML/CSS/JS Mobile

- viewport
- @media
- inspect
- device toolbar
- touchstart, touchend, touchmove, touchcancel események
- dragndrop speciális tulajdonságok
- navigator.geolocation
- DeviceOrientationEvent
- DeviceMotionEvent
  - acceleration, accelerationIncludingGravity
  - interval
  - rotationRate

## JQuery, JQuery UI

- HTML
- JavaScript
- Options
- Metódusok
- Események
- Styílusok
- Interakciók
- Widgetek
- Effektek
- Eszközök

## JQuery Mobile

- ThemeRoller
- Eszközök

## NodeJS frontend

## [Svelte](https://svelte.dev/docs/introduction)

- [Tutorial](https://learn.svelte.dev/tutorial/welcome-to-svelte)
- [Examples, Játszótér](https://svelte.dev/examples/hello-world)
- Svelte komponensek
  - export prop
  - reactivitás, számított változók
  - state management, store
  - style :global
- Logikai blokkok (#if, #each, #await, #key)
  - speciális elemek (@html, @debug, @const)
- Direktívák
  - on:__, bind:__, class:__, style:__
  - use:__, transition:__, animate:__
- Svelte runtime
  - onMount, beforeUpdate, afterUpdate, onDestroy, tick
  - setContext, getContext, hasContext, getAllContexts
  - createEventDispatcher
- Svelte Store
- Motion, Transition, Animation

## [SvelteUI](https://svelteui.dev/theming/dark-theme)

- Telepítés
- Funkciók
- Beállítás
- Tartalom
- Űrlapok
- Komponensek

## Full-stack multiplatform alkalmazás fejlesztése (SvelteKit - SQLite)

  {Tárgyak közötti együttműködéssel}

- Felhasználó kezelő modul
  - Bejelentkező űrlap¹
  - Regisztrációs űrlap¹
  - Felhasználói profil szerkesztő¹
- Funkcionális modul¹
  - Rendszerelemek, komponensek azonosítása
  - Komponensek tervezése
  - Komponenstesztek tervezése
  - Komponensek fejlesztése
  - Komponensek tesztelése
- Elkészült rendszer tesztelése
- Elkészült rendszer közzététele

  {¹ tervezése és fejlesztése}

### Mérföldkövek

1. GIT/VSCode beállítása, használata + HTML/CSS
2. JavaScript nyelv + gyakorlat
3. JavaScript programozás + gyakorlat
4. JavaScript szoftverfejlesztés, keretrendszerek
