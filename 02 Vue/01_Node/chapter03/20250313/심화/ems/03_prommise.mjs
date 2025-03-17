import fs from 'node:fs/promises'; // 반환형이 promise
// 위에서 promises까지 작성하지 않으면 따로 fs.promises.readdir 작성해줘야함

async function getDirectories() {
  try {
    const result = await fs.readdir('./'); //sync가 뒤에 없다면 비동기, 현재폴더 내의 것의 모두 가져오겠음
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

getDirectories();
