// Kode JavaScript
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
