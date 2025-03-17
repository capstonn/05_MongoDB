// fetch(경로)
// - 비동기로 응답 가져오기
// - 결과로 promise 반환
// - 무조건 성공(resolve 실행 -> then()으로만 처리 가능)
// -> response.ok 등을 이용해서 응답 상태 코드를 확인

//fetch.catch() 해도 실행되지않음

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if (response.ok) {
      //response.status == 200
      return response.json(); //promise 반환
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
