const container = document.querySelector(".container");
const images = ["images/bcg2.jpg", "images/bcg1.jpg", "images/bcg2.jpg"];
let currentImageIndex = 0;

// Устанавливаем начальное фоновое изображение
container.style.backgroundImage = `url('${images[currentImageIndex]}')`;

// Функция для смены фона
function changeBackground() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  container.style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

// Изменение фона каждые 5 секунд
setInterval(changeBackground, 4000);

setInterval(changeBackground, 4000);
let slides = document.querySelectorAll(".testimonial-slide");
let buttons = document.querySelectorAll(".testimonial-btn");

function changeSlide(index) {
  slides.forEach((slide) => slide.classList.remove("testimonial-active"));
  buttons.forEach((btn) => btn.classList.remove("testimonial-active"));
  slides[index].classList.add("testimonial-active");
  buttons[index].classList.add("testimonial-active");
}

const categories = document.querySelectorAll(".category");
const projects = document.querySelectorAll(".project");

categories.forEach((category) => {
  category.addEventListener("click", () => {
    const categoryName = category.dataset.category;

    categories.forEach((cat) => cat.classList.remove("active"));
    category.classList.add("active");

    projects.forEach((project) => {
      if (categoryName === "all" || project.dataset.category === categoryName) {
        project.style.opacity = 1;
        project.classList.add("zoomed");
      } else {
        project.style.opacity = 0.3;
        project.classList.remove("zoomed");
      }
    });
  });
});
document.getElementById("contactForm").addEventListener("submit", function (e) {
  if (!this.checkValidity()) {
    e.preventDefault();
    alert("Please fill out all required fields correctly.");
  } else {
    alert("Form submitted successfully!");
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in-on-load");

  fadeInElements.forEach(function (element) {
    element.style.opacity = 0;
    element.style.transform = "translateY(-20px)";
    element.style.transition = "opacity 1s ease-out, transform 1s ease-out";

    setTimeout(function () {
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    }, 100);
  });
});