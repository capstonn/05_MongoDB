import fs from 'node:fs/promises'; // 반환형이 promise
// 위에서 promises까지 작성하지 않으면 따로 fs.promises.readdir 작성해줘야함

async function readDirAsyn() {
  try {
    const files = await fs.readdir('./'); //promise 객체를 return 하는 비동기 함수
    console.log(files);
  } catch (err) {
    console.log(err);
  }
}

readDirAsyn();
