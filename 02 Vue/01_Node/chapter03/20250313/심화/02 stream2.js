const fs = require('fs');

const readStream = fs.createReadStream('./20250313/심화/readMe.txt', 'utf8');
const writeStream = fs.createWriteStream('./20250313/심화/writeMe.txt');

readStream.on('data', (chunk) => {
  console.log('데이터 준비됨');
  writeStream.write(chunk);
});
