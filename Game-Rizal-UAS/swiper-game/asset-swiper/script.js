var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// Kode POP-UP navigation
const openPopupBtn = document.getElementById('openPopupBtn');
const popupBackground = document.getElementById('popupBackground');
const popupContent = document.getElementById('popupContent');
const closePopupBtn = document.getElementById('closePopupBtn');

openPopupBtn.addEventListener('click', () => {
  popupBackground.style.display = 'block';
  popupContent.style.display = 'block';
});

closePopupBtn.addEventListener('click', () => {
  popupBackground.style.display = 'none';
  popupContent.style.display = 'none';
});

