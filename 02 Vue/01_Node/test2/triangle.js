let getTriangle = (base, height) => {
  return (base * height) / 2;
};

let getTriangle2 = (base, height) => (base * height) / 2; //함수 본체가 한 줄이라면 return {} 생략 가능

console.log('삼각형 면적 : ' + getTriangle(5, 2));
