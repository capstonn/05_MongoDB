let totalQuestions = 10; // 총 문제 수
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
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    quizType: params.get('type'), // 'type' 파라미터 가져오기
    difficultyLevel: params.get('difficult'), // 'difficult' 파라미터 가져오기
  };
}
// 퀴즈 데이터 매핑
const quizDataMap = {
  HTML1: quizDataHTML_Level1,
  HTML2: quizDataHTML_Level2,
  HTML3: quizDataHTML_Level3,
  CSS1: quizDataCSS_Level1,
  CSS2: quizDataCSS_Level2,
  CSS3: quizDataCSS_Level3,
  JavaScript1: quizDataJavaScript_Level1,
  JavaScript2: quizDataJavaScript_Level2,
  JavaScript3: quizDataJavaScript_Level3,
};

let selectedType = null;
let selectedDifficult = null;

// URL에서 전달된 퀴즈 유형과 난이도 가져오기
quizType = getQueryParams().quizType;
difficultyLevel = getQueryParams().difficultyLevel;

let selectedQuizKey = null;

const questionElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-btn');
const resultMessage = document.getElementById('result-message');
const quizElement = document.getElementById('quiz');
const resultsElement = document.getElementById('results');
const scoreElement = document.getElementById('score');
const summaryElement = document.getElementById('summary');
const retryButton = document.getElementById('retry-btn');
// 선택된 퀴즈 데이터
let quizData = null;
// 변수 초기화
let currentQuestion = 0;
let score = 0;
let quizCompleted = false;
let correctAnswerCount = 0;
let length = 0;
let userAnswers = []; // 답안을 저장할 배열 선언

function selectAnswer(answerIndex) {
  // 사용자가 선택한 답안을 배열에 저장
  userAnswers[currentQuestion] = answerIndex;
  console.log(userAnswers); // 확인용
}

document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-quiz-btn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      window.location.href = 'quiz-selection.html';
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.querySelector('#start-btn');

  if (startButton) {
    startButton.addEventListener('click', () => {
      const selectedTypeElement = document.querySelector(
        'input[name="type"]:checked'
      );
      const selectedDifficultElement = document.querySelector(
        'input[name="difficult"]:checked'
      );

      console.log('선택된 문제 유형:', selectedTypeElement.value); // 문제 유형 선택 여부 확인
      console.log('선택된 난이도:', selectedDifficultElement.value); // 난이도 선택 여부 확인

      if (selectedTypeElement) {
        selectedType = selectedTypeElement.value;
      }

      if (selectedDifficultElement) {
        selectedDifficult = selectedDifficultElement.value;
      }

      console.log('1. quizType:', selectedType); // 전역 변수 출력
      console.log('1. difficultyLevel:', selectedDifficult); // 전역 변수 출력

      if (!selectedType || !selectedDifficult) {
        alert('문제 유형과 난이도를 골라주세요');
        return;
      }
      console.log('selectedType:', selectedType); // 선택된 유형 출력
      console.log('selectedDifficult:', selectedDifficult); // 선택된 난이도 출력

      const typeAndDifficult = selectedType.value + selectedDifficult.value;
      let haveToSolveProblems = null;

      if (typeAndDifficult == 'HTML1')
        haveToSolveProblems = quizDataHTML_Level1;
      else if (typeAndDifficult == 'HTML2')
        haveToSolveProblems = quizDataHTML_Level2;
      else if (typeAndDifficult == 'HTML3')
        haveToSolveProblems = quizDataHTML_Level3;
      else if (typeAndDifficult == 'CSS1')
        haveToSolveProblems = quizDataCSS_Level1;
      else if (typeAndDifficult == 'CSS2')
        haveToSolveProblems = quizDataCSS_Level2;
      else if (typeAndDifficult == 'CSS3')
        haveToSolveProblems = quizDataCSS_Level3;
      else if (typeAndDifficult == 'JavaScript1')
        haveToSolveProblems = quizDataJavaScript_Level1;
      else if (typeAndDifficult == 'JavaScript2')
        haveToSolveProblems = quizDataJavaScript_Level2;
      else if (typeAndDifficult == 'JavaScript3')
        haveToSolveProblems = quizDataJavaScript_Level3;

      initQuiz();
      window.location.href = `quiz.html?type=${selectedType}&difficult=${selectedDifficult}`;
    });
  }
});
function initializeButtons() {
  // 처음에는 모든 버튼 숨김
  document.getElementById('checkAnswerButton').style.display = 'none';
  document.getElementById('nextButton').style.display = 'none';
  document.getElementById('submitButton').style.display = 'none';
}
// 퀴즈 시작 시 초기화
function initQuiz() {
  localStorage.removeItem('quizResults'); // 초기화 시 localStorage 삭제
  const params = getQueryParams();
  quizType = params.quizType;
  difficultyLevel = params.difficultyLevel;
  currentQuestion = 0;
  score = 0;
  userAnswers = new Array(quizData.length).fill(-1);

  loadQuestion();
  updateQuizInfo();
  updateUI();

  quizCompleted = false;
  console.log('quizType:', selectedType); // quizType 출력
  console.log('difficultyLevel:', selectedDifficult); // difficultyLevel 출력

  // const selectedQuizKey = `${quizType}${difficultyLevel}`;
  // quizData = quizDataMap[selectedQuizKey] || []; // 선택된 데이터 매핑
  // console.log('~Selected Quiz Key:', selectedQuizKey); // 여기서 콘솔에 출력
  console.log('==length : ' + quizData.length);

  if (quizData.length === 0) {
    console.error('퀴즈 데이터가 없습니다. 올바른 유형과 난이도를 선택하세요.');
    return;
  }

  if (quizElement) {
    quizElement.classList.remove('hide');
  }
  if (resultsElement) {
    resultsElement.classList.add('hide');
  }
  if (resultMessage) {
    resultMessage.textContent = '';
    resultMessage.className = '';
  }
}
// Check Answer 클릭 시
function onAnswerChecked() {
  // Check Answer 클릭 후 Check Answer 버튼 숨기고 Next 버튼 표시
  document.getElementById('checkAnswerButton').style.display = 'none';
  document.getElementById('nextButton').style.display = 'block';
  document.getElementById('submitButton').style.display = 'none';
}
function onNextClicked() {
  if (currentQuestion === quizData.length - 1) {
    // 마지막 문제라면 Submit 버튼 보이기
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('checkAnswerButton').style.display = 'none';
    document.getElementById('submitButton').style.display = 'block';
  } else {
    // 마지막 문제가 아니라면 Next 버튼으로 계속 진행
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('nextButton').style.display = 'block';
    document.getElementById('submitButton').style.display = 'none';
  }
}

// 문제를 불러오는 함수
function loadQuestion() {
  // currentQuestion이 quizData 배열 범위 내에 있는지 확인
  if (!quizData || quizData.length === 0) {
    console.error('퀴즈 데이터가 없거나 빈 배열입니다.');
    return; // 더 이상 진행하지 않음
  }

  if (quizData[currentQuestion] === undefined) {
    console.error('Invalid question index:', currentQuestion);
    return; // 더 이상 진행하지 않음
  }

  console.log('length : ' + quizData.length);
  const currentQuizData = quizData[currentQuestion];

  questionElement.textContent = `${currentQuestion + 1}. ${
    currentQuizData.question
  }`;
  optionsContainer.innerHTML = '';
  currentQuizData.options.forEach((option, index) => {
    const label = document.createElement('label');
    label.className = 'answer-option';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'answer'; // 같은 name으로 묶어야 하나만 선택됨
    input.value = index;
    input.onclick = () => selectAnswer(index);

    const span = document.createElement('span');
    span.classList.add('option-number');
    span.textContent = `${index + 1}.`;

    label.appendChild(input);
    label.appendChild(span);

    label.appendChild(document.createTextNode(option));
    optionsContainer.appendChild(label);
  });

  // 문제 정보 업데이트
  document.getElementById('check-answer-btn').style.display = 'inline-block';
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('submit-btn').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', () => {
  // 쿼리 파라미터에서 문제 유형과 난이도 값 가져오기
  const { quizType, difficultyLevel } = getQueryParams();

  // quizType과 difficultyLevel 변수에 값을 설정
  selectedType = quizType || '알 수 없음';
  selectedDifficult = difficultyLevel || '알 수 없음';

  console.log('===quizType:', selectedType); // 확인용 출력
  console.log('===difficultyLevel:', selectedDifficult); // 확인용 출력

  updateQuizInfo();
});

function updateQuizInfo() {
  const quizTypeElement = document.getElementById('quiz-type');
  const difficultyLevelElement = document.getElementById('difficulty-level');
  const currentQuestionElement = document.getElementById('current-question');

  selectedQuizKey = `${selectedType}${selectedDifficult}`;

  console.log('====. quizType:', selectedType); // 전역 변수 출력
  console.log('---- difficultyLevel:', selectedDifficult); // 전역 변수 출력
  console.log('Selected Quiz Key:', selectedQuizKey); // Debugging

  // 선택된 퀴즈 데이터
  quizData = quizDataMap[selectedQuizKey] || [];
  if (quizTypeElement) {
    quizTypeElement.textContent = selectedType || '알 수 없음';
    console.log('?? ' + selectedType);
  }

  if (difficultyLevelElement) {
    difficultyLevelElement.textContent =
      'Level ' + selectedDifficult || '알 수 없음';
    console.log('?? ' + selectedDifficult);
  }
  console.log('a. quizType:', selectedType); // 전역 변수 출력
  console.log('a. difficultyLevel:', selectedDifficult); // 전역 변수 출력
  if (currentQuestionElement) {
    currentQuestionElement.textContent = `${currentQuestion + 1} / ${
      quizData.length
    }`;
  }

  console.log(
    '1. currentQuestionElement:',
    currentQuestionElement
      ? currentQuestionElement.textContent
      : 'Element not found'
  );
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

function updateUI() {
  // 다음 버튼 활성화/비활성화
  if (nextButton) {
    nextButton.disabled = currentQuestion === quizData.length - 1;
  }
}
function selectAnswer(answerIndex) {
  userAnswers[currentQuestion] = answerIndex; // 사용자가 선택한 답안을 배열에 저장

  const options = document.querySelectorAll('.answer-option');
  options.forEach((option) => {
    option.classList.remove('selected'); // 기존 선택 해제
  });

  // 선택된 답안에 'selected' 클래스 추가
  options[answerIndex].classList.add('selected');
  console.log(`선택한 답안은: ${answerIndex}`); // 선택한 답안 확인
}
function checkAnswer() {
  const currentQuizData = quizData[currentQuestion]; // 현재 문제 데이터 가져오기
  const selectedAnswer = userAnswers[currentQuestion]; // 사용자가 선택한 답안
  const options = document.querySelectorAll('.answer-option');
  if (selectedAnswer === -1 || selectedAnswer === undefined) {
    alert('답안을 선택해주세요.');
    return;
  }
  // 모든 옵션 초기화
  options.forEach((option) => {
    option.classList.remove('correct', 'incorrect', 'selected'); // 이전 상태 리셋
    option.style.pointerEvents = 'none'; // 클릭 불가 상태로 변경
  });

  const correctAnswer = currentQuizData.answer;
  console.log(`정답은 ${correctAnswer}, 선택한 답안은 ${selectedAnswer}`); // 정답 확인
  options[correctAnswer].classList.add('correct'); // 정답 선택지에 'correct' 클래스 추가

  // 내가 선택한 답이 틀리면 빨간색 처리
  if (selectedAnswer !== correctAnswer) {
    options[selectedAnswer].classList.add('incorrect'); // 오답 선택지에 'incorrect' 클래스 추가
  } else {
    correctAnswerCount++;
    console.log('맞은 문제 수:', correctAnswerCount);
  }

  // 버튼 처리
  document.getElementById('check-answer-btn').style.display = 'none';
  document.getElementById('next-btn').style.display = 'inline-block';

  if (currentQuestion === quizData.length - 1) {
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'inline-block';
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion(currentQuestion); // 문제 로드 함수 호출
    updateQuestionNumber(currentQuestion); // 문제 번호 업데이트
    resetAnswerSelection(); // 답안 선택 리셋
  }
  if (currentQuestion === quizData.length) {
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'inline-block';
  }
}
function resetAnswerSelection() {
  // 모든 라디오 버튼을 선택 해제
  const radios = document.querySelectorAll('input[type="radio"]');
  radios.forEach((radio) => {
    radio.checked = false;
    // 라디오 버튼의 배경색 초기화 (선택 해제 시)
    const label = radio.closest('label');
    label.classList.remove('selected');
    label.classList.remove('correct');
    label.classList.remove('incorrect');
  });
}

function updateQuestionNumber(questionIndex) {
  const totalQuestions = quizData.length; // 전체 문제 수
  const questionNumberDisplay = document.getElementById('current-question'); // 문항 번호 표시 요소
  questionNumberDisplay.innerText = `${questionIndex + 1} / ${totalQuestions}`; // 1부터 시작하도록 표시
}

// submit-btn이 있는지 확인한 후 이벤트 리스너 추가
if (submitButton) {
  submitButton.addEventListener('click', function () {
    alert('퀴즈를 제출합니다!');

    console.log('====== selectedType :  ' + selectedType);
    const answerData = {
      level: 'Level ' + selectedDifficult, // 예: 'Level 1'
      totalQuestions: quizData.length, // 총 문제 수
      score: correctAnswerCount, // 맞은 문제 수
      questionType: selectedType, // 문제 유형
    };

    // localStorage에 퀴즈 결과 저장
    localStorage.setItem('quizResults', JSON.stringify(answerData));

    // 점수 페이지로 이동
    window.location.href = 'score.html'; // 점수 페이지로 이동
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // localStorage에서 저장된 퀴즈 결과 데이터 가져오기
  const quizResults = JSON.parse(localStorage.getItem('quizResults'));

  if (!quizResults) {
    // 퀴즈 초기화 로직
    initQuiz();
  } else {
    console.log('------selectedType :  ' + quizResults.questionType);
    console.log('------ selectedLevel :  ' + quizResults.level);

    // 퀴즈 결과 데이터가 있다면 화면에 표시
    const quizTypeElement = document.getElementById('score-quiz-type');
    if (quizTypeElement) {
      quizTypeElement.textContent = quizResults.questionType || 'HTML'; // 기본값 'HTML'
    }

    const difficultyLevelElement = document.getElementById(
      'score-difficulty-level'
    );
    if (difficultyLevelElement) {
      difficultyLevelElement.textContent = quizResults.level || 'Level 1'; // 기본값 'Level 1'
    }

    const correctAnswerCountElement = document.getElementById(
      'correct-answer-count'
    );
    if (correctAnswerCountElement) {
      correctAnswerCountElement.textContent = `${quizResults.score} / ${quizResults.totalQuestions} 문제`;
    }
  }
});

// 재시작 버튼
document.addEventListener('DOMContentLoaded', () => {
  const restartBtn = document.getElementById('restart-btn');
  if (restartBtn) {
    restartBtn.addEventListener('click', () => {
      // 상태 초기화
      localStorage.removeItem('quizResults'); // 저장된 퀴즈 결과 삭제
      score = 0; // 점수 초기화
      currentQuestionIndex = 0; // 현재 문제 인덱스 초기화
      window.location.href = 'quiz-selection.html'; // 퀴즈 선택 화면으로 이동
    });
  }
});

// 문제 로드 시 초기화
// 나가기 버튼
document.addEventListener('DOMContentLoaded', () => {
  const exitBtn = document.getElementById('exit-btn');
  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      // 나가면 퀴즈 결과 삭제
      localStorage.removeItem('quizResults'); // 저장된 퀴즈 결과 삭제
      window.location.href = 'index.html'; // 메인 페이지로 이동
    });
  }
});
