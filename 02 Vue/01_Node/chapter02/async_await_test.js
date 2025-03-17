// async : await를 포함한 함수, 결과로 promise 객체를 반환
async function init() {
  //fetch(주소) : 외부로부터 응답을 가져옴 (비동기)
  // await : 비동기 응답이 처리될 때까지 대기 -> 동기로 변경
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  //response.ok : 응답 성공 시 true, 실패 시 false...
  // -> undefined(정의 안 됨) -> response가 존재하지 않음
  console.log(response.ok);
  if (response.ok) {
    const result = await response.json();
    console.log(result);
  }
  console.log('프로그램 종료');
}

init(); // 함수 호출
// 데이터 도착을 기다리기 위해 비동기 사용함!☆
// 응답받아서 해당하는 코드 사용하기
