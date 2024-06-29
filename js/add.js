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
      "nectarine",
      "orange",
      "papaya",
      "quince",
      "raspberry",
      "strawberry",
      "tangerine",
      "ugli",
      "vanilla",
      "watermelon",
      "xigua",
      "yellowfruit",
      "zucchini",
      "avocado",
      "blackberry",
      "cantaloupe",
      "dragonfruit",
      "elderflower",
      "feijoa",
    ],
    translations: {
      여기: "빅뱅 - 판타스틱 베이비",
      여긴: "윤하 - 사건의 지평선",
      케익: "티라미수 케익",
      노바: "에스파 - Supernova",
      쏟아지는: "QWER - 고민중독 , 트와이스 - Dance The Night Away",
      해야: "IVE - 해야",
      빵을: "아이들 - 나는 아픈건 딱 질색이니까",
      첫만남: "TWS - 첫 만남은 계획대로 되지 않아",
      BOOM: "RIIZE - Boom Boom base , 르세라핌 / 이브 프시케 ...",
      저_거위도: "악뮤 - 후라이의 꿈",
      떠나는길에: "비비 - 밤양갱",
      nectarine: "넥타린",
      orange: "오렌지",
      papaya: "파파야",
      quince: "모과",
      raspberry: "라즈베리",
      strawberry: "딸기",
      tangerine: "귤",
      ugli: "우글리",
      vanilla: "바닐라",
      watermelon: "수박",
      xigua: "수박",
      yellowfruit: "노란과일",
      zucchini: "주키니",
      avocado: "아보카도",
      blackberry: "블랙베리",
      cantaloupe: "칸탈루프",
      dragonfruit: "용과",
      elderflower: "엘더플라워",
      feijoa: "페이조아",
    },
  },
  animals: {
    words: [
      "lion",
      "tiger",
      "bear",
      "elephant",
      "giraffe",
      "zebra",
      "kangaroo",
      "panda",
      "koala",
      "dolphin",
      "whale",
      "shark",
      "eagle",
      "owl",
      "parrot",
      "peacock",
      "penguin",
      "flamingo",
      "ostrich",
      "cheetah",
      "leopard",
      "wolf",
      "fox",
      "rabbit",
      "squirrel",
      "raccoon",
      "beaver",
      "otter",
      "hippopotamus",
      "rhinoceros",
    ],
    translations: {
      lion: "사자",
      tiger: "호랑이",
      bear: "곰",
      elephant: "코끼리",
      giraffe: "기린",
      zebra: "얼룩말",
      kangaroo: "캥거루",
      panda: "판다",
      koala: "코알라",
      dolphin: "돌고래",
      whale: "고래",
      shark: "상어",
      eagle: "독수리",
      owl: "부엉이",
      parrot: "앵무새",
      peacock: "공작새",
      penguin: "펭귄",
      flamingo: "플라밍고",
      ostrich: "타조",
      cheetah: "치타",
      leopard: "표범",
      wolf: "늑대",
      fox: "여우",
      rabbit: "토끼",
      squirrel: "다람쥐",
      raccoon: "너구리",
      beaver: "비버",
      otter: "수달",
      hippopotamus: "하마",
      rhinoceros: "코뿔소",
    },
  },
  celebrities: {
    words: [
      "Beyonce",
      "Brad Pitt",
      "Taylor Swift",
      "Leonardo DiCaprio",
      "Angelina Jolie",
      "Tom Cruise",
      "Scarlett Johansson",
      "Will Smith",
      "Jennifer Lawrence",
      "Robert Downey Jr.",
      "Chris Hemsworth",
      "Emma Watson",
      "Chris Evans",
      "Rihanna",
      "Lady Gaga",
      "Johnny Depp",
      "Ariana Grande",
      "Selena Gomez",
      "Dwayne Johnson",
      "Katy Perry",
      "Justin Bieber",
      "Miley Cyrus",
      "Kim Kardashian",
      "Kanye West",
      "Oprah Winfrey",
      "Ellen DeGeneres",
      "Keanu Reeves",
      "Tom Hanks",
      "Julia Roberts",
      "Morgan Freeman",
    ],
    translations: {
      Beyonce: "비욘세",
      "Brad Pitt": "브래드 피트",
      "Taylor Swift": "테일러 스위프트",
      "Leonardo DiCaprio": "레오나르도 디카프리오",
      "Angelina Jolie": "안젤리나 졸리",
      "Tom Cruise": "톰 크루즈",
      "Scarlett Johansson": "스칼렛 요한슨",
      "Will Smith": "윌 스미스",
      "Jennifer Lawrence": "제니퍼 로렌스",
      "Robert Downey Jr.": "로버트 다우니 주니어",
      "Chris Hemsworth": "크리스 헴스워스",
      "Emma Watson": "엠마 왓슨",
      "Chris Evans": "크리스 에반스",
      Rihanna: "리아나",
      "Lady Gaga": "레이디 가가",
      "Johnny Depp": "조니 뎁",
      "Ariana Grande": "아리아나 그란데",
      "Selena Gomez": "셀레나 고메즈",
      "Dwayne Johnson": "드웨인 존슨",
      "Katy Perry": "케이티 페리",
      "Justin Bieber": "저스틴 비버",
      "Miley Cyrus": "마일리 사이러스",
      "Kim Kardashian": "킴 카다시안",
      "Kanye West": "카니예 웨스트",
      "Oprah Winfrey": "오프라 윈프리",
      "Ellen DeGeneres": "엘렌 드제너러스",
      "Keanu Reeves": "키아누 리브스",
      "Tom Hanks": "톰 행크스",
      "Julia Roberts": "줄리아 로버츠",
      "Morgan Freeman": "모건 프리먼",
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
