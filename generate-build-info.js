import fs from 'fs';

const buildDate = new Date().toISOString();

const content = `export const buildDate = '${buildDate}';`;

console.log(`Generated build info: ${buildDate}`);

fs.writeFileSync('src/build-info.js', content);