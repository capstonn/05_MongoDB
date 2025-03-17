// 퀴즈 문제 데이터
const quizDataHTML_Level1 = [
  {
    question:
      'HTML 문서의 기본 구조를 이루는 태그 중, 문서의 제목을 나타내는 태그는 무엇인가요?',
    options: ['<body>', '<head>', '<title>', '<html>'],
    answer: 2, // <title>
    explanation:
      '<title> 태그는 브라우저 탭이나 제목 표시줄에 표시되는 문서의 제목을 정의합니다.',
  },
  {
    question: 'HTML에서 텍스트를 굵게 표시하는 태그는 무엇인가요?',
    options: ['<bold>', '<strong>', '<b>', '<i>'],
    answer: 1, // <strong>
    explanation:
      '<strong> 태그는 텍스트를 굵게 표시하며, 의미적으로 중요한 내용을 강조할 때 사용합니다. <b> 태그도 굵게 표시하지만, 의미적인 강조는 없습니다.',
  },
  {
    question: 'HTML에서 줄바꿈을 하기 위해 사용하는 태그는 무엇인가요?',
    options: ['<newline>', '<break>', '<br>', '<lb>'],
    answer: 2, // <br>
    explanation:
      '<br> 태그는 줄바꿈을 삽입하는 태그입니다.  닫는 태그가 없는 빈(empty) 태그입니다.',
  },
  {
    question: 'HTML에서 이미지 삽입 시 사용하는 태그와 필수 속성은 무엇인가요?',
    options: [
      '<image> - src',
      '<img> - source',
      '<img> - src',
      '<picture> - url',
    ],
    answer: 2, // <img> - src
    explanation:
      '<img> 태그를 사용하여 이미지를 삽입하며, src 속성은 이미지 파일의 경로를 지정하는 필수 속성입니다.',
  },
  {
    question:
      'HTML에서 링크를 생성하는 태그는 무엇이며, 링크의 주소를 지정하는 속성은 무엇인가요?',
    options: ['<link> - href', '<a> - url', '<a> - href', '<href> - a'],
    answer: 2, // <a> - href
    explanation:
      '<a> 태그는 하이퍼링크를 생성합니다. href 속성은 링크될 URL(주소)을 지정합니다.',
  },
];

const quizDataHTML_Level2 = [
  {
    question:
      'HTML에서 특정 요소를 그룹화하고 스타일을 적용하기 위해 주로 사용하는 태그는 무엇인가요? (의미론적 태그는 제외)',
    options: ['<group>', '<span>', '<div>', '<section>'],
    answer: 2, // <div>
    explanation:
      '<div> 태그는 블록 레벨 요소를 그룹화하는 데 사용되며, 주로 CSS 스타일을 적용하기 위한 컨테이너 역할을 합니다. <span>은 인라인 요소를 그룹화합니다.',
  },
  {
    question:
      'HTML에서 테이블(표)을 만들 때, 행(row)을 나타내는 태그는 무엇인가요?',
    options: ['<table>', '<td>', '<th>', '<tr>'],
    answer: 3, // <tr>
    explanation:
      '<tr> 태그는 테이블의 행(row)을 정의합니다. <table>은 테이블 전체, <td>는 데이터 셀, <th>는 헤더 셀을 나타냅니다.',
  },
  {
    question:
      'HTML에서 <form> 태그 내에서 사용자 입력을 위한 <input> 태그의 type 속성 중, 여러 줄의 텍스트를 입력받을 수 있는 것은 무엇인가요?',
    options: ['text', 'textarea', 'multiline', 'input-text'],
    answer: 1, // textarea.  input type="text"는 한 줄.
    explanation:
      '<textarea>는 여러줄을 입력받는 상자를 만듭니다. name으로 구분합니다.',
  },
  {
    question:
      'HTML에서 인라인 프레임을 나타내는 태그로, 다른 HTML 페이지를 현재 페이지 안에 삽입하는 데 사용되는 태그는 무엇인가요?',
    options: ['<frame>', '<iframe>', '<embed>', '<object>'],
    answer: 1, // <iframe>
    explanation:
      '<iframe> 태그는 현재 HTML 문서 안에 다른 HTML 문서를 포함시키는 데 사용됩니다.',
  },
  {
    question: 'HTML에서 <label> 태그의 for 속성은 어떤 요소와 연결되는가?',
    options: [
      '<input>의 name 속성',
      '<input>의 id 속성',
      '<input>의 class 속성',
      '<form>의 id 속성',
    ],
    answer: 1, // <input>의 id 속성
    explanation:
      '<label> 태그의 for 속성은 <input> 요소의 id 속성과 값을 일치시켜 연결합니다.  이를 통해 접근성을 향상시키고, 레이블을 클릭하면 연결된 입력 요소에 포커스가 이동합니다.',
  },
];

const quizDataHTML_Level3 = [
  {
    question:
      'HTML5에서 시맨틱 태그 중, 웹 페이지의 주요 내용을 담는 영역을 나타내는 태그는 무엇인가요?',
    options: ['<header>', '<main>', '<article>', '<section>'],
    answer: 1, // <main>
    explanation:
      '<main> 태그는 문서의 주요 콘텐츠를 담는 영역을 나타냅니다.  검색 엔진 최적화(SEO)와 웹 접근성에 중요한 역할을 합니다.',
  },
  {
    question:
      'HTML5에서 웹 페이지의 독립적인 콘텐츠 섹션을 나타내는 시맨틱 태그는 무엇인가요?',
    options: ['<section>', '<article>', '<aside>', '<div>'],
    answer: 1, // <article>
    explanation:
      '<article> 태그는 블로그 게시물, 뉴스 기사, 포럼 게시물 등과 같이 독립적으로 배포하거나 재사용할 수 있는 콘텐츠를 나타냅니다.',
  },
  {
    question:
      'HTML에서 <video> 태그를 사용하여 비디오를 재생할 때, 브라우저가 지원하지 않는 비디오 형식일 경우 사용자에게 표시할 대체 텍스트를 지정하는 방법은 무엇인가요?',
    options: [
      '<video> 태그 내부에 텍스트 작성',
      'alt 속성 사용',
      'fallback 속성 사용',
      '<source> 태그의 type 속성 사용',
    ],
    answer: 0, // <video> 태그 내부에 텍스트 작성
    explanation:
      '<video> 태그와 </video> 태그 사이에 텍스트를 작성하면, 브라우저가 비디오를 지원하지 않을 때 해당 텍스트가 표시됩니다.',
  },
  {
    question:
      'HTML에서 웹 페이지의 메타데이터를 정의하는 태그는 무엇이며, 주로 어디에 위치하나요?',
    options: [
      '<meta>, <body> 태그 내부',
      '<metadata>, <head> 태그 내부',
      '<meta>, <head> 태그 내부',
      '<info>, <html> 태그 내부',
    ],
    answer: 2, // <meta>, <head> 태그 내부
    explanation:
      '<meta> 태그는 문자 인코딩, 뷰포트 설정, 키워드, 설명 등 웹 페이지의 메타데이터를 정의하며, <head> 태그 내부에 위치합니다.',
  },
  {
    question:
      'HTML5에서 `<input type="date">`를 지원하지 않는 브라우저를 위해 폴리필(polyfill)을 사용할 때, 주로 어떤 라이브러리나 프레임워크를 활용하나요? (가장 일반적인 것)',
    options: [
      'jQuery UI',
      'Bootstrap Datepicker',
      'Modernizr',
      'Vanilla JS Datepicker',
    ],
    answer: 0, // jQuery UI (가장 범용적이고 오래됨)
    explanation:
      'jQuery UI는 오래되고 널리 사용되는 라이브러리로, datepicker를 포함한 다양한 UI 컴포넌트를 제공하여 `<input type="date">`를 지원하지 않는 브라우저에서도 일관된 날짜 선택 인터페이스를 구현할 수 있게 해줍니다.',
  },
];

const quizDataCSS_Level1 = [
  {
    question:
      'CSS에서 특정 HTML 요소를 선택하는 가장 기본적인 방법은 무엇인가요?',
    options: ['클래스 선택자', 'ID 선택자', '태그 선택자', '속성 선택자'],
    answer: 2, // 태그 선택자
    explanation:
      '태그 선택자는 HTML 태그 이름을 직접 사용하여 요소를 선택합니다. 예: p { color: blue; }',
  },
  {
    question: 'CSS에서 텍스트 색상을 빨간색으로 변경하는 속성은 무엇인가요?',
    options: [
      'text-color: red;',
      'font-color: red;',
      'color: red;',
      'background-color: red;',
    ],
    answer: 2, // color: red;
    explanation: 'color 속성은 텍스트의 색상을 지정합니다.',
  },
  {
    question: 'CSS에서 요소의 배경색을 노란색으로 변경하는 속성은 무엇인가요?',
    options: [
      'color: yellow;',
      'background: yellow;',
      'background-color: yellow;',
      'bgcolor: yellow;',
    ],
    answer: 2, // background-color: yellow;
    explanation: 'background-color 속성은 요소의 배경 색상을 지정합니다.',
  },
  {
    question:
      'CSS에서 클래스 선택자를 사용하여 요소를 선택할 때, 클래스 이름 앞에 붙이는 기호는 무엇인가요?',
    options: ['#', '.', '*', '>'],
    answer: 1, // .
    explanation:
      '클래스 선택자는 마침표(.)로 시작합니다. 예: .my-class { ... }',
  },
  {
    question:
      'CSS에서 ID 선택자를 사용하여 요소를 선택할 때 ID 이름 앞에 붙이는 기호는 무엇인가?',
    options: ['.', '#', '*', '>'],
    answer: 1, // #
    explanation: 'ID 선택자는 # 기호로 시작합니다.  예: #my-id { ... }',
  },
];

const quizDataCSS_Level2 = [
  {
    question:
      'CSS에서 여러 개의 클래스를 가진 요소를 선택하는 방법은 무엇인가요?',
    options: [
      '.class1 .class2',
      '.class1, .class2',
      '.class1.class2',
      '.class1 > .class2',
    ],
    answer: 2, // .class1.class2
    explanation:
      '.class1.class2는 class1과 class2를 *모두* 가진 요소를 선택합니다.  .class1 .class2는 class1 *내부의* class2를 선택합니다.',
  },
  {
    question: 'CSS에서 박스 모델의 구성 요소가 아닌 것은 무엇인가요?',
    options: ['margin', 'padding', 'border', 'outline'],
    answer: 3, // outline
    explanation:
      '박스 모델은 content, padding, border, margin으로 구성됩니다. outline은 박스 모델의 요소는 아니지만, 디버깅 등에 사용되는 요소의 바깥쪽 선입니다.',
  },
  {
    question: 'CSS에서 요소의 가로, 세로 크기를 지정하는 속성은 무엇인가요?',
    options: ['size', 'dimensions', 'width and height', 'scale'],
    answer: 2, // width and height
    explanation:
      'width 속성은 가로 크기, height 속성은 세로 크기를 지정합니다.',
  },
  {
    question: 'CSS에서 텍스트를 가운데 정렬하는 속성은 무엇인가요?',
    options: [
      'text-align: center;',
      'align: center;',
      'vertical-align: center;',
      'justify-content: center;',
    ],
    answer: 0, // text-align: center;
    explanation:
      'text-align: center; 속성은 텍스트를 가로로 가운데 정렬합니다.',
  },
  {
    question:
      'CSS에서 요소를 화면에서 보이지 않게 숨기는 방법으로, 공간까지 완전히 제거하는 속성은 무엇인가?',
    options: [
      'visibility: hidden;',
      'display: none;',
      'opacity: 0;',
      'position: absolute; left: -9999px;',
    ],
    answer: 1, // display: none;
    explanation:
      'display: none;은 요소를 완전히 제거합니다.  visibility: hidden;은 공간은 남겨두고 보이지만 않게 합니다.',
  },
];

const quizDataCSS_Level3 = [
  {
    question:
      'CSS에서 position 속성의 값 중, 부모 요소를 기준으로 상대적인 위치를 지정하는 값은 무엇인가요?',
    options: ['static', 'absolute', 'relative', 'fixed'],
    answer: 2, // relative
    explanation:
      'position: relative;는 원래 위치를 기준으로 상대적인 위치를 지정합니다.  top, right, bottom, left 속성과 함께 사용됩니다.',
  },
  {
    question:
      'CSS에서 position 속성의 값 중, 뷰포트(브라우저 창)를 기준으로 절대적인 위치를 지정하며, 스크롤해도 위치가 고정되는 값은 무엇인가요?',
    options: ['static', 'absolute', 'relative', 'fixed'],
    answer: 3, // fixed
    explanation:
      'position: fixed;는 뷰포트를 기준으로 위치를 고정합니다.  스크롤해도 요소가 움직이지 않습니다.',
  },
  {
    question:
      'CSS Flexbox에서 주축(main axis)의 정렬 방향을 설정하는 속성은 무엇인가요?',
    options: [
      'align-items',
      'justify-content',
      'flex-direction',
      'align-content',
    ],
    answer: 1, // justify-content
    explanation:
      'justify-content 속성은 주축 방향으로 아이템들을 정렬합니다. flex-direction에 따라 주축이 가로 또는 세로가 될 수 있습니다.',
  },
  {
    question:
      'CSS Grid Layout에서 그리드 컨테이너의 행(row)과 열(column)의 크기를 정의하는 속성은 무엇인가요?',
    options: [
      'grid-template-areas',
      'grid-template',
      'grid-template-rows and grid-template-columns',
      'grid-area',
    ],
    answer: 2, // grid-template-rows and grid-template-columns
    explanation:
      'grid-template-rows는 행의 크기, grid-template-columns는 열의 크기를 정의합니다.',
  },
  {
    question:
      'CSS에서 미디어 쿼리(@media)를 사용하여, 화면 너비가 768px 이하일 때 특정 스타일을 적용하는 방법은 무엇인가요?',
    options: [
      '@media screen and (max-width: 768px) { ... }',
      '@media (width <= 768px) { ... }',
      '@media only screen and (min-width: 768px) { ... }',
      '@media screen and (device-width: 768px) { ... }',
    ],
    answer: 0, // @media screen and (max-width: 768px) { ... }
    explanation:
      '@media screen and (max-width: 768px) { ... }는 화면 너비가 768px 이하일 때 중괄호 안의 스타일을 적용합니다.',
  },
];

const quizDataJavaScript_Level1 = [
  {
    question: 'JavaScript에서 변수를 선언하는 키워드가 아닌 것은?',
    options: ['var', 'let', 'const', 'variable'],
    answer: 3, // variable
    explanation:
      'JavaScript에서 변수를 선언할 때는 var, let, const 키워드를 사용합니다.',
  },
  {
    question:
      "JavaScript에서 콘솔에 'Hello, World!'를 출력하는 코드는 무엇인가요?",
    options: [
      "print('Hello, World!')",
      "console.log('Hello, World!')",
      "log('Hello, World!')",
      "system.out.println('Hello, World!')",
    ],
    answer: 1, // console.log('Hello, World!')
    explanation: 'console.log() 함수는 콘솔에 값을 출력하는 데 사용됩니다.',
  },
  {
    question: 'JavaScript에서 주석을 작성하는 방법으로 올바른 것은?',
    options: ['/* 주석 */', '// 주석', '<!-- 주석 -->', '모두 정답'],
    answer: 3, // 모두 정답
    explanation:
      'JavaScript에서는 // (한 줄 주석)과 /* ... */ (여러 줄 주석)을 모두 사용할 수 있습니다. <!-- ... -->는 HTML 주석이지만, JavaScript에서도 가끔 사용됩니다.',
  },
  {
    question:
      "JavaScript에서 'num'이라는 변수에 숫자 10을 할당하는 올바른 방법은 무엇인가요?",
    options: ['num = 10;', 'let num = 10;', 'const num = 10;', '모두 정답'],
    answer: 3, // 모두 정답
    explanation:
      'var, let, const 모두 변수를 선언하고 값을 할당하는 데 사용할 수 있습니다.  let과 const는 블록 스코프를 가지며, const는 재할당이 불가능한 상수를 선언합니다.',
  },
  {
    question: 'JavaScript에서 두 숫자를 더하는 연산자는 무엇인가요?',
    options: ['+', '-', '*', '/'],
    answer: 0, // +
    explanation: '+ 연산자는 두 숫자를 더합니다.',
  },
];

const quizDataJavaScript_Level2 = [
  {
    question: 'JavaScript에서 함수를 선언하는 방법이 아닌 것은?',
    options: [
      'function myFunction() { ... }',
      'const myFunction = function() { ... }',
      'myFunction() => { ... }',
      'let myFunction = () => { ... }',
    ],
    answer: 2, // myFunction() => { ... }  (화살표 함수는 변수에 할당해야 함)
    explanation:
      '함수 선언식(function myFunction() { ... }), 함수 표현식(const myFunction = function() { ... }), 화살표 함수(let myFunction = () => { ... }) 모두 함수를 선언하는 방법입니다.',
  },
  {
    question: 'JavaScript에서 배열의 길이를 알아내는 속성은 무엇인가요?',
    options: ['length()', 'size', 'length', 'count()'],
    answer: 2, // length
    explanation: 'length 속성은 배열의 요소 개수를 반환합니다.',
  },
  {
    question: 'JavaScript에서 객체를 생성하는 방법은 무엇인가요?',
    options: [
      '{ key1: value1, key2: value2 }',
      'new Object({ key1: value1, key2: value2 })',
      'Object.create({ key1: value1, key2: value2 })',
      '모두 정답',
    ],
    answer: 3, // 모두 정답
    explanation:
      '객체 리터럴({ ... }), new Object(), Object.create() 모두 객체를 생성하는 방법입니다.',
  },
  {
    question: 'JavaScript에서 문자열을 숫자로 변환하는 함수는 무엇인가요?',
    options: [
      'toString()',
      'parseInt()',
      'Number()',
      'parseInt() 또는 Number()',
    ],
    answer: 3, // parseInt() 또는 Number()
    explanation:
      'parseInt()는 문자열을 정수로, Number()는 문자열을 숫자(정수 또는 실수)로 변환합니다.',
  },
  {
    question:
      "다음 코드의 실행 결과는 무엇인가요?  `let x = 5;  if (x > 3) { console.log('크다'); } else { console.log('작거나 같다'); }`",
    options: ['크다', '작거나 같다', '오류', 'undefined'],
    answer: 0, // 크다
    explanation: "x는 5이고, 5는 3보다 크므로 '크다'가 콘솔에 출력됩니다.",
  },
];

const quizDataJavaScript_Level3 = [
  {
    question:
      '다음 코드의 실행 결과는 무엇인가요?  `let x = [1, 2, 3];  let y = x;  y.push(4);  console.log(x);`',
    options: ['[1, 2, 3]', '[1, 2, 3, 4]', '오류', 'undefined'],
    answer: 1, // [1, 2, 3, 4]
    explanation:
      'JavaScript에서 배열은 참조 타입입니다.  y = x는 x의 값을 복사하는 것이 아니라, x와 y가 *같은* 배열을 가리키게 합니다.  따라서 y를 변경하면 x도 변경됩니다.',
  },
  {
    question:
      '다음 코드의 실행 결과는 무엇인가요? `function foo() { console.log(this); }  foo();`',
    options: [
      'foo 함수 자체',
      'window 객체 (또는 global 객체)',
      'undefined',
      '오류',
    ],
    answer: 1, // window 객체 (또는 global 객체)
    explanation:
      '일반 함수 호출에서 this는 전역 객체(브라우저에서는 window, Node.js에서는 global)를 가리킵니다.',
  },
  {
    question:
      '`setTimeout` 함수를 사용하여 1초 후에 "Hello"를 콘솔에 출력하는 코드를 작성하세요.',
    options: [
      `setTimeout("console.log('Hello')", 1000);`,
      `setTimeout(function() { console.log('Hello'); }, 1000);`,
      `setTimeout(() => console.log('Hello'), 1000);`,
      '모두 정답',
    ],
    answer: 3, //모두 정답
    explanation:
      'setTimeout(함수, 시간)은 지정된 시간(밀리초 단위) 후에 함수를 실행합니다. 함수는 일반 함수, 익명 함수, 화살표 함수 모두 가능합니다.',
  },
  {
    question:
      '다음 중 Promise를 사용하여 비동기 작업을 처리하는 방법으로 올바르지 *않은* 것은?',
    options: [
      'then() 메서드 사용',
      'catch() 메서드 사용',
      'async/await 사용',
      'callback 함수 사용',
    ],
    answer: 3, // callback 함수 사용
    explanation:
      'Promise는 then(), catch(), async/await를 사용하여 비동기 작업을 처리합니다. 콜백 함수는 Promise 이전의 비동기 처리 방식입니다. (Promise도 내부적으로는 콜백을 사용하지만, 직접적인 콜백 패턴과는 다릅니다.)',
  },
  {
    question:
      'JavaScript에서 클래스를 정의하고, 해당 클래스의 인스턴스를 생성하는 코드를 작성하세요. (클래스 이름은 MyClass, 인스턴스 변수 이름은 myInstance)',
    options: [
      'class MyClass { };  let myInstance = new MyClass();',
      'function MyClass() { }; let myInstance = new MyClass();',
      'const MyClass = class { }; let myInstance = MyClass();',
      '모두 정답은 아님.',
    ],
    answer: 0, // class MyClass { };  let myInstance = new MyClass();
    explanation:
      'class 키워드를 사용하여 클래스를 정의하고, new 키워드를 사용하여 인스턴스를 생성합니다.  2번 보기는 (구형) 함수를 이용한 생성자 방식. 3번 보기는 클래스 표현식.',
  },
];
// URL에서 쿼리 파라미터 가져오기
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    quizType: params.get('quizType'),
    difficultyLevel: params.get('difficultyLevel'),
  };
}

// 퀴즈 데이터 매핑
const quizDataMap = {
  HTML_Level1: quizDataHTML_Level1,
  HTML_Level2: quizDataHTML_Level2,
  HTML_Level3: quizDataHTML_Level3,
  CSS_Level1: quizDataCSS_Level1,
  CSS_Level2: quizDataCSS_Level2,
  CSS_Level3: quizDataCSS_Level3,
  JavaScript_Level1: quizDataJavaScript_Level1,
  JavaScript_Level2: quizDataJavaScript_Level2,
  JavaScript_Level3: quizDataJavaScript_Level3,
};

// URL에서 전달된 퀴즈 유형과 난이도 가져오기
const { quizType, difficultyLevel } = getQueryParams();
const selectedQuizKey = `${quizType}_${difficultyLevel}`;

// 선택된 퀴즈 데이터
let quizData = quizDataMap[selectedQuizKey] || [];
// 변수 초기화
let currentQuestion = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(-1);
let quizCompleted = false;

// DOM 요소 선택
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-btn');
const resultMessage = document.getElementById('result-message');
const quizElement = document.getElementById('quiz');
const resultsElement = document.getElementById('results');
const scoreElement = document.getElementById('score');
const summaryElement = document.getElementById('summary');
const retryButton = document.getElementById('retry-btn');

// 퀴즈 시작 시 초기화
function initQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = new Array(quizData.length).fill(-1);
  quizCompleted = false;

  loadQuestion();
  updateUI();

  quizElement.classList.remove('hide');
  resultsElement.classList.add('hide');
  resultMessage.textContent = '';
  resultMessage.className = '';
}

// 문제를 불러오는 함수
function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = `${currentQuestion + 1}. ${
    currentQuizData.question
  }`;
  optionsContainer.innerHTML = '';

  currentQuizData.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    if (userAnswers[currentQuestion] === index) {
      optionElement.classList.add('selected');
    }
    optionElement.textContent = option;
    optionElement.dataset.index = index;

    optionElement.addEventListener('click', selectOption);
    optionsContainer.appendChild(optionElement);
  });

  // 문제 정보 업데이트
  updateQuizInfo();
}

// 퀴즈 정보 UI 표시
function updateQuizInfo() {
  document.getElementById('quiz-type').textContent = quizType || '알 수 없음'; //퀴즈 유형
  document.getElementById('difficulty-level').textContent =
    difficultyLevel || '알 수 없음'; //난이도
  document.getElementById('current-question').textContent = `${
    currentQuestion + 1
  } / ${quizData.length}`; //현재 문제 번호
  document.getElementById('score-count').textContent = score; // 맞춘 문항 수 업데이트
}

// 옵션 선택 처리
function selectOption() {
  if (quizCompleted) return;

  const selectedIndex = parseInt(this.dataset.index);

  // 이전에 선택된 옵션 클래스 제거
  const options = document.querySelectorAll('.option');
  options.forEach((option) => option.classList.remove('selected'));

  // 현재 선택한 옵션에 클래스 추가
  this.classList.add('selected');

  // 사용자 답변 저장
  userAnswers[currentQuestion] = selectedIndex;

  updateUI();
}

// UI 업데이트
function updateUI() {
  // 이전 버튼 활성화/비활성화
  prevButton.disabled = currentQuestion === 0;

  // 다음 버튼 활성화/비활성화
  nextButton.disabled = currentQuestion === quizData.length - 1;

  // 제출 버튼 표시 여부
  submitButton.style.display =
    userAnswers[currentQuestion] !== -1 ? 'block' : 'none';

  // 다시 시작 버튼 숨기기
  restartButton.style.display = 'none';
}

// 정답 확인
function checkAnswer() {
  if (userAnswers[currentQuestion] === -1) return;

  const currentQuizData = quizData[currentQuestion];
  const userAnswer = userAnswers[currentQuestion];
  const correctAnswer = currentQuizData.answer;
  const options = document.querySelectorAll('.option');

  options.forEach((option, index) => {
    if (index === correctAnswer) {
      option.classList.add('correct');
    } else if (index === userAnswer && userAnswer !== correctAnswer) {
      option.classList.add('incorrect');
    }
  });

  if (userAnswer === correctAnswer) {
    resultMessage.textContent = '정답입니다!';
    resultMessage.className = 'correct-message';
    score++; // 맞춘 문제 수 증가
  } else {
    resultMessage.textContent = `오답입니다. 정답: ${currentQuizData.options[correctAnswer]}`;
    resultMessage.className = 'incorrect-message';
  }

  // UI 업데이트 (맞춘 문항 수 반영)
  updateQuizInfo();

  submitButton.style.display = 'none';
  restartButton.style.display = 'block';
  quizCompleted = true;
}

// 모든 문제 제출 및 결과 표시
function submitQuiz() {
  score = 0;
  let summary = '';

  userAnswers.forEach((answer, index) => {
    if (answer === quizData[index].answer) {
      score++;
    }

    const isCorrect = answer === quizData[index].answer;
    summary += `<div class="summary-item ${
      isCorrect ? 'correct' : 'incorrect'
    }">
            <p><strong>문제 ${index + 1}:</strong> ${
      quizData[index].question
    }</p>
            <p>내 답변: ${
              answer !== -1 ? quizData[index].options[answer] : '응답 없음'
            }</p>
            <p>정답: ${quizData[index].options[quizData[index].answer]}</p>
            <p>${quizData[index].explanation}</p>
        </div>`;
  });

  // 결과 표시
  quizElement.classList.add('hide');
  resultsElement.classList.remove('hide');

  scoreElement.textContent = `${score}/${quizData.length}`;
  summaryElement.innerHTML = summary;
}

// 이벤트 리스너
prevButton.addEventListener('click', () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
    updateUI();
    resultMessage.textContent = '';
    quizCompleted = false;
  }
});

nextButton.addEventListener('click', () => {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
    updateUI();
    resultMessage.textContent = '';
    quizCompleted = false;
  }
});

submitButton.addEventListener('click', checkAnswer);

restartButton.addEventListener('click', () => {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
    updateUI();
    resultMessage.textContent = '';
    quizCompleted = false;
  } else {
    submitQuiz();
  }
});

retryButton.addEventListener('click', initQuiz);

// 퀴즈 초기화
initQuiz();
updateQuizInfo();
