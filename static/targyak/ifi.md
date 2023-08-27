# Intelligens felhasználói interfészek

[[toc]]

## Előismereti feltételek

- HTML, CSS ismerete
- [JavaScript (...ES2018) alkalmazása](https://developer.mozilla.org/hu/docs/Web/JavaScript)
- SQL nyelv és relációs adatbázisok tervezésének ismerete 

## Tematika

### 1. Callback függvények

- Callback függvény. Promise objektum. Async Functions.
- Párhuzamos programozás, Workers

### 2. Böngésző funkciók

- HTML DOM elérése JS-ből
- HTML APIs (Geolocation, Drag&Drop, Local Storage, Web Workers, SSE )
- Böngésző local tárolók (Session Storage, IndexedDB, Web SQL, Cookies).

### 3. Vue.js

- Hello World!
- Feltételek és iterátorok, események, komponensek
- Adatok, Metódusok
- Életciklus, életciklus-diagram
- Template szintaxis
- Dinamukus argumentek
- Számított jellemzők, setter és getter
- v-if szintaxis
- v-for szintaxis, :key
- Vue.set, ForceUpdate
- Eseménykezelés, módosítók
- Form-input hozzárendelés, refs
- Komponensek, props
- Slot
- Single File Components
- Routing

### 4. Node.js

#### 4.1. Node.js alapok

- nodejs telepítése
- command line interface
- js fájl futtatása
- online felületek (runkit, repl.it, codesandbox.io...)

#### 4.2. Globals

- console ( log, time, table, ... )
- Internationalization
- eseményvezérelt programozás, events, EventEmitter
- __dirname, __filename, TextDecoder, util, stream
- process ( argv, execPath, chdir, env, exit, getid, stdout, ... )
- process.stdin.on( 'data', callback ), .setRawMode( true )
- readline
- setImmediate, setInterval, setTimeout
- Worker Threads, cluster, Child Processes *
- File System
- HTTP

#### 4.3. JS könyvtárak és Node.js modulok

- module.exports
- require
- import ( mjs mudules )
- npm
  - install
  - semantic versioning (major, minor, patch)
  - publish
- nodemon

#### 4.4. Fejlesztés közbeni feladatok

- Debugolás
- Logolás
- Hibakezelés ( Jest, Nightwatch.js )
- Hibakeresés
- Tesztelés ( Mocha )
- Automatikus tesztelés
- Dokumentáció generálás ( JSDoc, ... )

#### 4.5. Node Fejlesztői környezetek

- Webpack
- Grunt

#### 4.6. MVC Frameworks ( Koa, Express, Adonis, Basys, Nuxt, ... )

- 'Hello world' app
- serving static files
- routing (get, post, put, del, all, ...)
- Middleware, params
- koa-body, kcors
- cookies, session variables
- hibakezelés
- adatbázis-integráció
- template engines (edge, swig, vue-server-renderer, ejs, ...)

#### 4.7. Egyéb modulok és kezelésük

- Vue-CLI module
- Vue-CLI konfiguráció (vue.config.js, baseUrl, publicPath, outputDir, crossorigin)
- Vizualizációs könyvtárak (Chart.js, Vis, ...)
- Hasonlósági mértékek (damerau-levenshtein, fuzzy-matching, string-similarity)
- Titkosítás, digitális aláírás (crypto-js, bigint-crypto-utils, ...)
- Egyéb node package-k és alkalmazásuk

#### 4.8. Tartalomkezelő rendszerek

- Ghost, KeystoneJS, ApostropheCMS, Strapi, Siberian CMS
- Install CMS
- Run CMS
- Configure and management
- Deploy

#### 4.9. Webszerverek üzemeltetési kérdései

- Forever, PM2. Statikus webszerverek, Serve static files. http-server, VuePress.

### 5. Adatbáziskezelés

#### 5.1. Áttekintés

- Kapcsolódás NoSQL és SQL adatbázisokhoz (NeDB, MongoDB, SQLite, MySQL, PostgreSQL...).

#### 5.2 NoSQL adatbázisok speciális kérdései

- Kulcs-érték adatbázisok
- Gráf adatbázisok
- Dokumentumtárolók (NeDB, MongoDB, ...)
- Objektum-adatbázisok

### 6. WEB API-k

#### 6.1 OAuth 2.0

#### 6.2 Google API-k

#### 6.3. Egyéb API-k

### 7. Full-stack alkalmazásfejlesztés

- Webes alkalmazások felépítése, működési elve, kliens és szerver oldal, RESTful API-k, axios.
- Vue UI-k ( Bootstrap-VUE, Semantic, Vuetify, ... ), VUEX, Vue Router.
- Vue Material Dashboard.
- Google API-k az alkalmazásfejlesztésben
  - autentikáció folyamata (vue-google-oauth2)
  - Google analitics (vue-analitics)
- Cloud platormok ( HEROKU, Firebase, ... ).
- Komplex skálázható webes rendszerek, webes kommunikációs interfészek ( ws, sse ).
- Esemény-alapú kliens-szerver kommunikáció (socket.io).
- Platformfüggetlen alkalmazásfejlesztés (NW.js, ElectronJS, Cordova, ...).
- Mobil alkalmazások fejlesztése: accelerometer, GPS, kamera, ... ( NativeScript, ... ).
- Server side rendering, ( koa-vue-ssr, express-vue, ... ).
- Starter kitek.
- Full stack web frameworks ( Basys, NUXT, Quasar ).
- Webes IOT és beágyazott rendszerek programozása, RPI-GPIO.

[![RapidAPI](https://rapidapi.com/static-assets/default/logo.svg)](https://rapidapi.com/)

## Gyakorlási lehetőségek, hasznos linkek

- [Példaprogramok](/examples/webexamples/)
