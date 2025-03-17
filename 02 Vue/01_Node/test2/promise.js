let likePizza = true;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) resolve('피자주문');
  else reject('주문실패');
});

pizza.then((result) => console.log(result)).catch((err) => console.log(err));

//reject 매개변수가 catch의 매개변수로 전달됨
//then ->then->then.....catch의 구조일 때
// 앞의 then의 return값이 다음 then의 값으로 전달
