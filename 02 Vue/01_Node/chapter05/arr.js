const arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i]);
  }, i * 1000); // i * 1000 ms (즉, 1초 간격으로 실행)
}
