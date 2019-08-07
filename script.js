var slideNumber = 1;
var allSlides = document.querySelectorAll('.slide');

var btnNext = document.querySelector('.btn-next');
var btnPrev = document.querySelector('.btn-prev');
var slideNumber = 1;
var maxSNumber = allSlides[slideNumber].length;

btnNext.addEventListener('click', function() {
  allSlides[slideNumber].classList.add('slide-top');
  slideNumber++
  console.log(slideNumber);

});

btnPrev.addEventListener('click', function() {
  allSlides[maxSNumber].classList.add('slide-top');
  maxSNumber--;

});


// function showSlides(n) {
//   if (n > allSlides.length) {
//     slideNumber = 1;
//   }
//   if (n < 1) {
//     slideNumber = allSlides.length;
//   }
// }
//
// function slideNext() {
//
// }
//
// function slidePrev() {
//
// }
//
//
// btnNext.addEventListener('click', function() {
//   if (slideNumber < allSlides.length - 1) {
//     var prevSlide = allSlides[slideNumber];
//     slideNumber++;
//     var currentSlide = allSlides[slideNumber];
//     prevSlide.classList.remove('slide-bottom');
//     prevSlide.classList.add('slide-top');
//     currentSlide.classList.add('slide-bottom');
//   } else {
//     slideNumber = 0;
//     prevSlide = allSlides[allSlides.length - 1];
//     currentSlide = allSlides[slideNumber];
//   }
//
//
//   console.log(prevSlide);
//   console.log(slideNumber);
//   console.log(currentSlide);
// });