const fs = require('fs');

const readStream = fs.createReadStream('./20250313/심화/readMe.txt');

readStream.on('data', (chunk) => {
  console.log('데이터 준비됨');
});
readStream.on('end', () => {
  console.log('읽기 작업이 끝남');
});
readStream.on('error', (err) => {
  console.log(`에러 발생 : ${err}`);
});
