//1번
const path = require('path');
const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath);

//2번
console.log(`파일 절대 경로 :${__filename}`);

const dir = path.dirname(__filename);
console.log(`경로만 : ${dir}`);

//3번
const fn1 = path.basename(__filename);
const fn2 = path.basename(__filename, '.js');
console.log(`파일 이름 : ${fn1}`);
console.log(`파일 이름(확장자 제외) : ${fn2}`);

//4번
const ext = path.extname(__filename);
console.log(`파일 확장자 : ${ext}`);

//5번
const parsedPath = path.parse(__dirname);
console.log(parsedPath);
