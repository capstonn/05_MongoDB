const fs = require('fs');

if (fs.existsSync('./20250313/기본/test2/test3/test4')) {
  console.log('폴더가 이미 존재합니다.');
} else {
  fs.mkdir('./20250313/기본/test2/test3/test4', { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('폴더가 생성되었습니다.');
  });
}
