//비동기 작업을 유지하고
// A->B->C 순서대로 출력하고 싶다면?

function displayA() {
  console.log('A');
}

function displayB(callback) {
  setTimeout(() => {
    console.log('B');
    callback();
  }, 2000);
} // 비동기 작업이 끝날 때 콜백함수 호출해줌

function displayC() {
  console.log('C');
}

displayA();
displayB(displayC);
