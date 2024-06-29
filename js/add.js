const categories = {
  randomall: {
    words: [
      "여기",
      "여긴",
      "케익",
      "노바",
      "쏟아지는",
      "해야",
      "빵을",
      "첫 만남",
      "BOOM",
      "저_거위도",
      "떠나는길에",
      "봄눈",
      "마라탕",
      "hey",
      "사탕",
      "내가S면",
      "만세",
      "음악의신",
      "끼부리지마",
      "let_go",
      "어머님",
      "은하수",
      "소원",
      "뽀삐뽀삐",
      "강남",
      "hallo",
      "Cause ",
      "붉은색",
      "Maniac",
      "touch",
    ],
    translations: {
      여기: "빅뱅 - 판타스틱 베이비",
      여긴: "윤하 - 사건의 지평선",
      케익: "티라미수 케익",
      노바: "에스파 - Supernova",
      쏟아지는: "QWER - 고민중독 / 트와이스 - Dance The Night Away",
      해야: "IVE - 해야",
      빵을: "아이들 - 나는 아픈건 딱 질색이니까",
      첫만남: "TWS - 첫 만남은 계획대로 되지 않아",
      BOOM: "RIIZE - Boom Boom base / 르세라핌 - 이브 프시케 ...",
      저_거위도: "악뮤 - 후라이의 꿈",
      떠나는길에: "비비 - 밤양갱",
      봄눈: "펜타곤 - 봄눈 / 10cm - 봄눈 ",
      마라탕: "서이브 - 마라탕후루",
      hey: "자우림 - hey hey / TWS - HEY HEY",
      사탕: "twice - what is love?",
      내가S면: "TWS - 내가 S면 넌 나의 N이 되어줘",
      만세: "세븐틴 - 만세",
      음악의신: "세븐틴 - 음악의 신",
      끼부리지마: "위너 - 끼부리지마",
      let_go: "윤하 - 오르트구름",
      어머님: "JYP - 어머님이 누구니",
      은하수: "볼빨간사춘기 - 우주를 줄게",
      소원: "소녀시대 - 소원을 말해ㅘ",
      뽀삐뽀삐: "티아라 - 뽀삐뽀삐",
      강남: "싸이 - 강남스타일",
      hallo: "카라 - 루팡",
      Cause: "뉴진스 - Hype boy",
      붉은색: "이무진 - 신호등",
      Maniac: "스테이키즈 , 비비지 - Maniac",
      touch: "씨스타 - touch my body ",
    },
  },
};
let selectedCategory = [];
let currentWord = "";
let displayCount = 0;
let maxCount = 0;

const wordDisplay = document.querySelector(".word-display");
const timerDisplay = document.querySelector(".timer-display");
const nextButton = document.getElementById("nextButton");
const showAnswerButton = document.getElementById("showAnswerButton");
const restartButton = document.getElementById("restartButton");
const categoryButtons = document.querySelectorAll(".categoryButton");
const selectButtons = document.querySelectorAll(".selectButton");
const categoryButtonsGroup = document.getElementById("category-buttons");
const countButtonsGroup = document.getElementById("count-buttons");

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const answerText = document.getElementById("answerText");

let timeLeft = 3;
let timerInterval;

function showRandomWord() {
  if (displayCount >= maxCount) {
    nextButton.disabled = true;
    nextButton.style.display = "none";
    showAnswerButton.disabled = true;
    showAnswerButton.style.display = "none";
    restartButton.style.display = "inline-block";
    return;
  }

  currentWord =
    selectedCategory.words[
      Math.floor(Math.random() * selectedCategory.words.length)
    ];
  wordDisplay.textContent = currentWord;
  displayCount++;

  let timeLeft = 3;
  timerDisplay.textContent = `타이머: ${timeLeft}`;

  nextButton.disabled = true; // 다음 버튼을 일단 비활성화

  const timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      timerDisplay.textContent = `타이머: ${timeLeft}`;
    } else {
      clearInterval(timerInterval);
      wordDisplay.textContent = "";
      timerDisplay.textContent = "";
      nextButton.disabled = false; // 타이머가 종료된 후에 다음 버튼을 활성화
    }
  }, 1000);
}

nextButton.addEventListener("click", showRandomWord);

nextButton.addEventListener("click", showRandomWord);

categoryButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const category = event.target.getAttribute("data-category");
    selectedCategory = categories[category];
    countButtonsGroup.style.display = "block";
    categoryButtonsGroup.style.display = "none";
    wordDisplay.textContent = "";
    nextButton.disabled = true;
    nextButton.style.display = "none";
    showAnswerButton.disabled = true;
    showAnswerButton.style.display = "none";

    restartButton.style.display = "none";
    nextButton.textContent = "다음";
  });
});

selectButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    maxCount = parseInt(event.target.getAttribute("data-count"));
    displayCount = 0;
    nextButton.disabled = false;
    showAnswerButton.disabled = false;
    countButtonsGroup.style.display = "none";
    restartButton.style.display = "inline-block";
    showAnswerButton.style.display = "inline-block";
    nextButton.style.display = "inline-block";
    showRandomWord();
  });
});

showAnswerButton.addEventListener("click", () => {
  answerText.textContent = `정답: ${selectedCategory.translations[currentWord]}`;
  modal.style.display = "block";
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

restartButton.addEventListener("click", () => {
  categoryButtonsGroup.style.display = "block";
  countButtonsGroup.style.display = "none";
  wordDisplay.textContent = "";
  nextButton.disabled = true;
  nextButton.style.display = "none";
  showAnswerButton.disabled = true;
  showAnswerButton.style.display = "none";
  restartButton.style.display = "none";
  timerDisplay.style.display = "none";
});
