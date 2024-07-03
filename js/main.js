let selectedCategory = {};
let currentWord = "";
let displayCount = 0;
let maxCount = 0;

const disnone = document.getElementById("starthear");
const wordDisplay = document.querySelector(".word-display");
const timerDisplay = document.querySelector(".timer-display");
const nextButton = document.getElementById("nextButton");
const showAnswerButton = document.getElementById("showAnswerButton");
const restartButton = document.getElementById("restartButton");
const categoryButtonsGroup = document.getElementById("category-buttons");
const countButtonsGroup = document.getElementById("count-buttons");
const categoryButtons = document.querySelectorAll(".categoryButton");
const selectButtons = document.querySelectorAll(".selectButton");

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const answerText = document.getElementById("answerText");

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
  timerDisplay.textContent = `Timer: ${timeLeft}`;
  timerDisplay.style.display = "block"; // 타이머 디스플레이 보이기

  nextButton.disabled = true; // 다음 버튼을 일단 비활성화

  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      timerDisplay.textContent = `Timer: ${timeLeft}`;
    } else {
      clearInterval(timerInterval);
      timerDisplay.textContent = "";
      wordDisplay.textContent = "";
      nextButton.disabled = false; // 타이머가 종료된 후에 다음 버튼을 활성화
    }
  }, 1000);
}

categoryButtonsGroup.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn_set")) {
    const categoryButton = event.target.closest(".categoryButton");
    if (categoryButton) {
      const category = categoryButton.getAttribute("data-category");
      selectedCategory = categories[category];
      countButtonsGroup.style.display = "flex";
      countButtonsGroup.style.flexDirection = "column";
      categoryButtonsGroup.style.display = "none";
      disnone.style.display = "none";
      wordDisplay.textContent = "";
      nextButton.disabled = true;
      nextButton.style.display = "none";
      showAnswerButton.disabled = true;
      showAnswerButton.style.display = "none";
      restartButton.style.display = "none";
      nextButton.textContent = "다음";
    }
  }
});

selectButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    maxCount = parseInt(event.target.getAttribute("data-count"));
    displayCount = 0;
    nextButton.disabled = false;
    showAnswerButton.disabled = false;
    countButtonsGroup.style.display = "none";
    restartButton.style.display = "inline-block"; // 수정: 시작할 때도 버튼이 보이게 함
    showAnswerButton.style.display = "inline-block";
    nextButton.style.display = "inline-block";
    showRandomWord();
  });
});

showAnswerButton.addEventListener("click", () => {
  answerText.textContent = `정답: ${selectedCategory.translations[currentWord]}`;
  modal.style.display = "block";
  modal.style.padding = "0";
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
  // 상태 초기화
  selectedCategory = {};
  currentWord = "";
  displayCount = 0;
  maxCount = 0;

  // 화면 초기화
  categoryButtonsGroup.style.display = "block";
  countButtonsGroup.style.display = "none";
  wordDisplay.textContent = "";
  timerDisplay.textContent = "";
  nextButton.disabled = true;
  nextButton.style.display = "none";
  showAnswerButton.disabled = true;
  showAnswerButton.style.display = "none";
  restartButton.style.display = "none"; // 수정: 처음으로 버튼을 초기화
  timerDisplay.style.display = "none";
  disnone.style.display = "";

  // 타이머 초기화
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});

// 다음 버튼 클릭 이벤트 리스너
nextButton.addEventListener("click", () => {
  showRandomWord();
});

document.addEventListener("DOMContentLoaded", function () {
  const introModal = document.getElementById("introModal");
  const introClose = document.getElementById("introClose");
  const dontShowToday = document.getElementById("dontShowToday");

  const slides = document.getElementsByClassName("slide");
  let slideIndex = 0;

  function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active-slide");
    }
    slides[index].classList.add("active-slide");
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  document.getElementById("nextSlide").addEventListener("click", nextSlide);
  document.getElementById("prevSlide").addEventListener("click", prevSlide);

  showSlide(slideIndex);

  if (!getCookie("introModalShown")) {
    introModal.style.display = "block";
  }

  introClose.addEventListener("click", function () {
    introModal.style.display = "none";
  });

  dontShowToday.addEventListener("click", function () {
    setCookie("introModalShown", "true", 1);
    introModal.style.display = "none";
  });

  function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  function getCookie(name) {
    const cname = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(cname) === 0) {
        return c.substring(cname.length, c.length);
      }
    }
    return "";
  }
});
