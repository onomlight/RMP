// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const disnone = document.getElementById("starthear");
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

  let selectedCategory = [];
  let currentWord = "";
  let displayCount = 0;
  let maxCount = 0;

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

    nextButton.disabled = true; // 다음 버튼을 일단 비활성화

    const timerInterval = setInterval(() => {
      timeLeft--;
      if (timeLeft > 0) {
        timerDisplay.textContent = `Timer: ${timeLeft}`;
      } else {
        clearInterval(timerInterval);
        wordDisplay.textContent = "";
        timerDisplay.textContent = "";
        nextButton.disabled = false; // 타이머가 종료된 후에 다음 버튼을 활성화
      }
    }, 1000);
  }

  nextButton.addEventListener("click", showRandomWord);

  //   categoryButtons.forEach((button) => {
  //     button.addEventListener("click", (event) => {
  //       const category = event.target.getAttribute("data-category");
  //       selectedCategory = categories[category];
  //       countButtonsGroup.style.display = "block";
  //       categoryButtonsGroup.style.display = "none";

  //       wordDisplay.textContent = "";
  //       nextButton.disabled = true;
  //       nextButton.style.display = "none";
  //       showAnswerButton.disabled = true;
  //       showAnswerButton.style.display = "none";
  //       restartButton.style.display = "none";
  //       nextButton.textContent = "다음";
  //     });
  //   });

  categoryButtonsGroup.addEventListener("click", (event) => {
    const button = event.target.closest(".categoryButton");
    if (button) {
      const category = button.getAttribute("data-category");
      selectedCategory = categories[category];
      countButtonsGroup.style.display = "block";
      categoryButtonsGroup.style.display = "none";
      wordDisplay.textContent = "";
      disnone.style.display = "none";
      nextButton.disabled = true;
      nextButton.style.display = "none";
      showAnswerButton.disabled = true;
      showAnswerButton.style.display = "none";
      restartButton.style.display = "none";
      nextButton.textContent = "다음";
    }
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
});
