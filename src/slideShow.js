let slideIndex = 1;
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

async function showSlides(n) {
    let i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    console.log("2")
    console.log(slides.length)
    console.log(dots.length)

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex)
});