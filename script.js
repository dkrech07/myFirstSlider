var slideNumber = 0;
var allSlides = document.querySelectorAll('.slide');
var maxNumber = allSlides.length - 1;

var btnNext = document.querySelector('.btn-next');
var btnPrev = document.querySelector('.btn-prev');

var moveSlider = function() {
  if (slideNumber < maxNumber) {
    for (var i = 0; i < maxNumber; i++) {
      allSlides[i].classList.remove('slide-top-btn-left');
    }
    allSlides[slideNumber].classList.add('slide-top-btn-left');
    slideNumber++

    console.log('Прибавляется: ' + slideNumber);
  } else {
    slideNumber = 0;
    for (var i = 0; i < maxNumber; i++) {
      allSlides[i].classList.remove('slide-top-btn-left');
    }
    console.log('Убавляется: ' + slideNumber);
  }
}

btnNext.addEventListener('click', moveSlider);
btnPrev.addEventListener('click', moveSlider);