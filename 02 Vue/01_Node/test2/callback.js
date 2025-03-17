const order = (coffee, callback) => {
  console.log(`${coffee} 주문 접수`);
  setTimeout(() => {
    callback(coffee); //비동기작업의 결과
  }, 3000);
}; //컴파일언어에서는 사용하지 못하는 형태
// 클로저 사용

const display = (result) => {
  console.log(`${result} 완료`);
};

order('아메리카노', display);

// 실제 callback(err,결과) 로 구성하기
// 에러가 있나 없나 먼저 체크하기
