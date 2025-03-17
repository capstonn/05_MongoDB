const c = require('ansi-colors');

function hello(name) {
  console.log(`${c.green(name)} 님, 안녕하세요?`);
}

hello('홍길동');

// npm uninstall ansi-colors (모듈삭제) => cannot find module 에러 발생