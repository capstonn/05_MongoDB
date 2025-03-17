function outer() {
  var outvalue = 5678;

  function inner() {
    var invalue = 1234;
    console.log('outervalue' + outvalue);
  }

  inner();
  console.log('invalue=' + invalue); //에러발생
}
outer();
