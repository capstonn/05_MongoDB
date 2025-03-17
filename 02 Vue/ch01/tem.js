const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log('arr1 :', arr1);

console.log('arr2 :', arr2);

arr2[0] = 100;
console.log('변경 후');
console.log('arr1 : ', arr1);
console.log('arr2 : ', arr2);

//주소 참조 특징 이용!
// 두 배열 모두 같은 주소를 참조하기 때문ㅇ ㅔ 똑같은 값 => 얕은 복사
// 깊은 복사는 ? 전개 연산자 사용

//얕은 복사 : 주소만 복사
//깊은 복사 :실제 데이터 복사(복제, clone의 개념)
const arr3 = [100, 200, 300];
const arr4 = [...arr3]; //... :전개 연산자
console.log(arr4);

arr4[0] = 99999;

console.log('arr3', arr3);
console.log('arr4', arr4);
