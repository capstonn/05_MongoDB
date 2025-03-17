function test(name) {
  var output = 'hello' + name + ',,,!';
  return function () {
    console.log(output);
  };
}
var test_1 = test('node');
var test_2 = test('javascript');

test_1();
test_2();
