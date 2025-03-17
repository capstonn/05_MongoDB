const fs = require('fs');

if (fs.existsSync('./20250313/기본/test')) {
  console.log('이미 디렉토리가 존재합니다.');
} else {
  fs.mkdir('./20250313/기본/test', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('디렉토리를 생성하였습니다.');
  });
}
