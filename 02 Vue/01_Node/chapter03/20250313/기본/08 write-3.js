const fs = require('fs');

fs.readFile('./20250313/기본/example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return; // 오류 발생 시 함수 종료
  }

  // text-1.txt 파일이 존재하지 않으면 데이터를 저장
  if (!fs.existsSync('./20250313/기본/text-1.txt')) {
    fs.writeFile('./20250313/기본/text-1.txt', data, (err) => {
      if (err) {
        console.log(err);
        return; // 파일 쓰기 오류 처리
      }
      console.log('파일이 성공적으로 작성되었습니다.');
    });
  } else {
    console.log('이미 파일이 존재합니다.');
  }
});
