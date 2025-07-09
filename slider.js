console.log("Slider is working!");

// Select all slides
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Function to go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Change slide every 3 seconds (3000ms)
setInterval(nextSlide, 3000);
