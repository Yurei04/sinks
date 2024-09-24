document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.carousel-item'); // Select carousel-item divs
    let slideIndex = 0;

    function showSlides() {
        slides.forEach(function(slide) {
            slide.style.display = 'none'; // Hide all slides
        });

        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }

        slides[slideIndex].style.display = 'block'; // Show the current slide
    }

    // Initialize slideshow
    showSlides(); // Show the first slide immediately
    setInterval(showSlides, 5000); // Change slides every 5 seconds
});
