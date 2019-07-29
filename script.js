var btnNext = document.querySelector('.btn-next');
var btnPrev = document.querySelector('.btn-prev');

var allSlides = document.querySelectorAll('.slide');
var slideNumber = 1;

btnNext.addEventListener('click', function() {
  slideNumber++;
  var currentSlide = allSlides[slideNumber];
  currentSlide.classList.add('slide-top');
  console.log(slideNumber);
  console.log(currentSlide);


});





console.log(allSlides);



// var slideNumber = 1;
// // var currentSlide = document.querySelector('.slide-' + slideNumber);
//
// btnNext.addEventListener('click', function() {
//   slideNumber++;
//   var currentSlide = document.querySelector('.slide-' + slideNumber);
//   currentSlide.classList.add('slide-top');
//   console.log(slideNumber);
//   console.log(currentSlide);
// });