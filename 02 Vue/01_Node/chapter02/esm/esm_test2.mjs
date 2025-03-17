//export default hi;
// => 가져 올 수 있는게 hi밖에 없다 (무조건 hi)
// 저장할 변수의 이름을 바꿔도 hi가 대입됨

import abc from './greeting-2.mjs';
// default 로 export하면 객체 분해 할당이 안됨 (두개를 export해놓고 하나를  쓰면 안된다)
abc.hi('훈이');
abc.goodbye('짱구');
