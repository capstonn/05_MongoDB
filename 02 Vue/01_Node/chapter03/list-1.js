const fs = require('fs');

let files = fs.readdirSync('./'); // 워킹디렉토리 기준
console.log(files);
