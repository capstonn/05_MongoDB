fetch('https://jsonplaceholder.typicode.com/users') //백엔드미개발시 참고 사이트
  .then((response) => response.json())
  .then((data) => console.log(data)) //앞에서 처리한 비동기작업의 결과가 data로 입력
  .catch((err) => console.log(err));
