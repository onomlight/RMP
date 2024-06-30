document.addEventListener("DOMContentLoaded", () => {
  const introModal = document.getElementById("introModal");
  const introClose = document.getElementById("introClose");
  const dontShowTodayButton = document.getElementById("dontShowToday");
  const slideContainer = document.querySelector(".slide-container");
  const slides = document.querySelectorAll(".slide");
  const prevSlideButton = document.getElementById("prevSlide");
  const nextSlideButton = document.getElementById("nextSlide");

  let currentSlideIndex = 0;

  function showSlide(index) {
    if (index >= slides.length) {
      currentSlideIndex = 0;
    } else if (index < 0) {
      currentSlideIndex = slides.length - 1;
    } else {
      currentSlideIndex = index;
    }

    slideContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  }

  prevSlideButton.addEventListener("click", () => {
    showSlide(currentSlideIndex - 1);
  });

  nextSlideButton.addEventListener("click", () => {
    showSlide(currentSlideIndex + 1);
  });

  introClose.addEventListener("click", () => {
    introModal.style.display = "none";
  });

  dontShowTodayButton.addEventListener("click", () => {
    introModal.style.display = "none";
   
  });

  // 페이지 로드 시 introModal 표시
  introModal.style.display = "block";
});
