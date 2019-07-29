var btnNext = document.querySelector('.btn-next');
var btnPrev = document.querySelector('.btn-prev');

var allSlides = document.querySelectorAll('.slide');
var slideNumber = 0;



btnNext.addEventListener('click', function() {
  if (slideNumber < allSlides.length - 1) {
    var prevSlide = allSlides[slideNumber];
    slideNumber++;
    var currentSlide = allSlides[slideNumber];
    prevSlide.classList.remove('slide-bottom');
    prevSlide.classList.add('slide-top');
    currentSlide.classList.add('slide-bottom');
  } else {
    slideNumber = 0;
    prevSlide = allSlides[allSlides.length - 1];
    currentSlide = allSlides[slideNumber];
  }


  console.log(prevSlide);
  console.log(slideNumber);
  console.log(currentSlide);
});