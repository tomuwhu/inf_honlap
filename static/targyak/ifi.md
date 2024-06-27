# Intelligens felhasználói interfészek - SvelteKit

## Előismereti feltételek

### Bash

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

### Github

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

### [VSCode](https://code.visualstudio.com/) használata

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

### HTML/CSS/Markdown/SVG/JS ismétlés

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

### JavaScript fogások

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
  - Design fogások
    - BootStrap

### BackEnd alapok

- Cookie-k
- Kommunikációs protokollok:
  - REST API (GET, POST, PUT, PATCH, DELETE)
  - Server Side Enents (SSE)
  - WebSocket (Socket.io)
  - WebRTC (PeerJS)
- Postman alkalmazás telepítése, használata
- MongoDB - Atlas
- MySQL - Aiven
- ExpressJS, mysql2, mysql2-async integráció
- Unit teszt, integrációs tesztelés, rendszertesztelés
- Hash-elés, ujjlenyomat-módszer (MD5, SHA256, ...)
- Titkosítás (egykulcsos, két kulcsos, nyivános kulcsú), RSA Algoritmus
- Tanúsítvány, digitális aláírás, certificate
- Authentikáció, hozzáférés-szabályozási token
- Külső hitelesítés, OAUTH2.0, kulcskarika
- Hitelesítési adatok tárolása: környezeti változók

### Hosting

- *Hosting: [Netlify](https://www.netlify.com/)*
- *[Aiven for MySQL](https://aiven.io/mysql): mysql2-async*

## Tematika

### [Svelte](https://svelte.dev/docs/introduction)

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

### [SvelteUI](https://svelteui.dev/theming/dark-theme) / [Flowbite Svelte](https://flowbite-svelte.com/)

- Telepítés
- Funkciók
- Beállítás
- Tartalom
- Űrlapok
- Komponensek
- Egyéb UI könyvtárak
  - [SVELTESTRAP](https://sveltestrap.js.org/?path=/docs/sveltestrap-overview--docs)
  - [Svelte Material UI](https://sveltematerialui.com/)
  - [Svelte Headless UI](https://svelte-headlessui.goss.io/docs/2.0)
  - [Attractions](https://illright.github.io/attractions/)

### *[Vite](https://vitejs.dev/guide/), [SvelteKit](https://kit.svelte.dev/docs/introduction)*

- Development server: VITE
  - dev server
  - build
  - vite.config.ts
    - plugins
    - rollupOptions
    - build.chunkSizeWarningLimit
- sass: rollup.config, prettierrc
- TypeScript
  - Types
  - Classes
  - Templates
- Vite technológiák:
  - Vanilla
  - React
  - Vue
  - Svelte
    - [tutorial](https://learn.svelte.dev/tutorial/introducing-sveltekit)
    - npm create svelte@latest
    - adapter-static, .nojekyll, svelte.config, {basedir}
    - routes
    - onMount
    - komponensek
    - MVC alkalmazások fejlesztése
    - [SvelteKit FullStack Framework](https://kit.svelte.dev/docs/introduction)
      - routing
      - loading data
      - form actions
      - page options
      - state management, store
      - hooks
      - building, static site generation
      - deploying: *Netlify*
        - Build & Deploy: adapter-netlify
        - Enviroment variables on netlify
    - *Hosting: [Netlify](https://www.netlify.com/)*
    - *[MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)*
    - *[Aiven for MySQL](https://aiven.io/mysql): mysql2-async*

## Számonkérés

Portfólió alapú számonkérés, hallgatói projekt értékelése.
