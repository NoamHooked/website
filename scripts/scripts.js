// Accordion functionality
const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;

    // Toggle the display of the accordion content
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

// Animated Numbers functionality
const counters = document.querySelectorAll(".number");

counters.forEach((counter) => {
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    let count = +counter.innerText;

    const increment = target / 200;

    if (count < target) {
      count += increment;
      counter.innerText = Math.ceil(count);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  // Initialize the counter animation
  updateCounter();
});

// Quiz functionality
document.querySelectorAll(".quiz-option").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.getAttribute("data-answer");
    const resultElement = document.getElementById("quiz-result");

    // Display correct or incorrect feedback
    resultElement.textContent =
      answer === "correct" ? "Correct!" : "Try again!";
    resultElement.style.color = answer === "correct" ? "green" : "red";
  });
});

// Countdown Timer functionality
const countdownDate = new Date("2024-12-31T23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update countdown timer on the webpage
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // Check if countdown has ended
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerText = "The event has started!";
  }
}

// Start the countdown timer
const countdownInterval = setInterval(updateCountdown, 1000);

// slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
