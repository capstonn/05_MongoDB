function displayA() {
  console.log('A');
}

function displayB() {
  setTimeout(() => {
    console.log('B');
  }, 2000);
} // 비동기 작업 : callback 함수 호출만 하기 때문에 c 출력을 먼저 하게 됨

function displayC() {
  console.log('C');
}

displayA();
displayB(); // 2초 후 출력
displayC();
