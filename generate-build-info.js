import fs from 'fs';

const buildDate = (new Date()).toLocaleString('hu-HU', { timeZone: 'Europe/Budapest' });

const content = `export const buildDate = '${buildDate}';`;

console.log(`Generated build info: ${buildDate}`);

fs.writeFileSync('src/build-info.js', content);