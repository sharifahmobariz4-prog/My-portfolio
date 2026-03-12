

const texts = ["Front-End Developer", "Creative Designer", "Web Enthusiast"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

// ===== Typing Effect =====
function typeEffect() {
  if (!typingElement) return; 

  const currentText = texts[textIndex];

  if (!isDeleting) {
    charIndex++;
  } else {
    charIndex--;
  }

  typingElement.textContent = currentText.substring(0, charIndex);

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    speed = 1500; 
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 400; 
  }

  setTimeout(typeEffect, speed);
}

function toggleMode() {
  const body = document.body;
  if (body.getAttribute("data-theme") === "dark") {
    body.setAttribute("data-theme", "light");
  } else {
    body.setAttribute("data-theme", "dark");
  }
}
document.addEventListener("DOMContentLoaded", function() {

  
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.classList.add("show"));


  if (typingElement) typeEffect();


  const bars = document.querySelectorAll(".progress-bar");
  const showBars = () => {
    bars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        bar.style.width = bar.getAttribute("data-width");
      }
    });
  };
  window.addEventListener("scroll", showBars);
  showBars();

  
  const cards = document.querySelectorAll(".card");
  const showCards = () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add("show");
      }
    });
  };
  window.addEventListener("scroll", showCards);
  showCards();

});