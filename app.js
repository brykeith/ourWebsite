// containers
const carouselSlide = document.querySelector('.carousel_slide');
const carouselImages = document.querySelectorAll('.carousel_slide img');

// buttons
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

// counter
let counter = 1;
const size = carouselImages[0].clientWidth;

// initial transition to start on pic 1
carouselSlide.style.transform = 'translateX(' + ( -counter * size ) + 'px)';

// button listeners
nextBtn.addEventListener('click', ()=> {
  if(counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter ++;
  carouselSlide.style.transform = 'translateX(' + ( -counter * size ) + 'px)';
})

prevBtn.addEventListener('click', ()=> {
  if(counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter --;
  carouselSlide.style.transform = 'translateX(' + ( -counter * size ) + 'px)';
})

carouselSlide.addEventListener('transitionend', ()=>{
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + ( -counter * size ) + 'px)';
  }
  else if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = 1;
    carouselSlide.style.transform = 'translateX(' + ( -counter * size ) + 'px)';
  }
})
