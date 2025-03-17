async function main() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // console.log('response : ', response);

    const users = await response.json();

    console.log(users);
  } catch (err) {
    console.log(err);
  }
}
main();

// promise : 내부 비동기 코드가 끝나면 성공/실패 결과를 반환하겠다 약속하는 객체
// await : 비동기 코드가 끝날 때까지 대기
