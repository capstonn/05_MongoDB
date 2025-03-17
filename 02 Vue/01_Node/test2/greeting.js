const user = '홍길동'; //data

const hello = (name) => {
  console.log(`${name}님. 안녕하세영`);
}; //가공

exports.hello = hello;
exports.user = user; // module.exports = {hello, user} 와 동일
