// containers
const carouselSlide = document.querySelector('.carousel-slide');
const carouselCards = document.querySelectorAll('.carousel-slide .project-card');

// buttons
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

// counter
let counter = 1;
const windowWidth = window.innerWidth;

// initial transition to start on project 1
carouselSlide.style.transform = 'translateX(' + ( -counter * windowWidth) + 'px)';

// button listeners
nextBtn.addEventListener('click', ()=> {
  if(counter >= carouselCards.length - 1) return;
  carouselSlide.style.transition = 'transform 0.6s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + ( -counter * windowWidth ) + 'px)';
})

prevBtn.addEventListener('click', ()=> {
  if(counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.6s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + ( -counter * windowWidth ) + 'px)';
})

carouselSlide.addEventListener('transitionend', ()=>{
  if(carouselCards[counter].id === 'last-card-duplicate'){
    carouselSlide.style.transition = "none";
    counter = carouselCards.length - 2;
    carouselSlide.style.transform = 'translateX(' + ( -counter * windowWidth ) + 'px)';
  }
  else if(carouselCards[counter].id === 'first-card-duplicate'){
    carouselSlide.style.transition = "none";
    counter = 1;
    carouselSlide.style.transform = 'translateX(' + ( -counter * windowWidth ) + 'px)';
  }
})
