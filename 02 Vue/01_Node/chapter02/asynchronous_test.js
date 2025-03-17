function displayA() {
  console.log('A');
}
function displayB(callback) {
  //2초 후에 B출력
  // 그 동안 다른 코드 수행하고 있어! ->비동기
  setTimeout(() => {
    console.log('B');
    callback();
  }, 2000);
}

function displayC() {
  console.log('C');
}

displayA();
displayB(displayC);
