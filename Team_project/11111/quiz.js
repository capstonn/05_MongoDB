let score = 0; // 맞힌 문제 수
let quizType = null; // 퀴즈 유형
let difficultyLevel = null; // 난이도
let currentQuestionIndex = 0; //현재 문제 번호
let totalQuestions = 5; // 총 문제 수

// !문제 설정
document.addEventListener('DOMContentLoaded', function () {
  let quizType = null;
  let difficultyLevel = null;
  const typeButtons = document.querySelectorAll(
    '.selection-box:first-of-type .btn'
  );
  const levelButtons = document.querySelectorAll(
    '.selection-box:last-of-type .btn'
  );
  const startButton = document.getElementById('start-btn');

  if (startButton) {
    startButton.disabled = true;
  }

  // 문제 유형 선택
  typeButtons.forEach((button) => {
    button.addEventListener('click', function () {
      typeButtons.forEach((btn) => btn.classList.remove('selected'));
      this.classList.add('selected');
      quizType = this.textContent.trim(); // 문제 유형 저장
      console.log('선택한 문제 유형:', quizType);
      checkSelection();
    });
  });

  // 난이도 선택
  levelButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      levelButtons.forEach((btn) => btn.classList.remove('selected'));
      this.classList.add('selected');

      // ✅ Level 1 → Level1, Level 2 → Level2, Level 3 → Level3 변환
      difficultyLevel = `Level${this.textContent.replace('Level ', '').trim()}`;

      console.log('선택한 난이도:', difficultyLevel);
      checkSelection();
    });
  });

  // 🚨 [2] 선택 완료 여부 확인 후 START 버튼 활성화
  function checkSelection() {
    if (quizType && difficultyLevel) {
      startButton.disabled = false;
    } else {
      startButton.disabled = true;
    }
  }

  // START 버튼 클릭 시 페이지 이동
  startButton.addEventListener('click', function () {
    if (quizType && difficultyLevel) {
      const url = `one.html?quizType=${encodeURIComponent(
        quizType
      )}&difficultyLevel=${difficultyLevel}`;
      window.location.href = url;
    }
  });
});
