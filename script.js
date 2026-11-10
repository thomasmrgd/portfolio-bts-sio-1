let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = slides.length - 1;
    } else if (index < 0) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === currentSlide) {
            slide.classList.add("active");
        }
    });
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Navigation au clavier (flèches gauche/droite)
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        changeSlide(1);
    } else if (event.key === 'ArrowLeft') {
        changeSlide(-1);
    }
});