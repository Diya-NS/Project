let currentSlide = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dots span");
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        dots[i].classList.remove("active-dot");
        if (i === index) {
            slide.classList.add("active");
            dots[i].classList.add("active-dot");
        }
    });
    currentSlide = index;
}

function nextSlide() {
    let newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
}

function prevSlide() {
    let newIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(newIndex);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 4000); // 4 seconds
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Event Listeners
document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        showSlide(i);
        stopAutoSlide();
        startAutoSlide();
    });
});

// Pause on hover
document.querySelector(".carousel").addEventListener("mouseenter", stopAutoSlide);
document.querySelector(".carousel").addEventListener("mouseleave", startAutoSlide);

// Initialize
showSlide(currentSlide);
startAutoSlide();
