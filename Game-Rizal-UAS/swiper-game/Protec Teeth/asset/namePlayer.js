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

document.addEventListener('DOMContentLoaded', () => {
  const userName = localStorage.getItem('user_name2');
  const userNameSpan = document.getElementById('userName');
  const userNameoutput = document.getElementById('userName-output');
  const userNameoutputlose = document.getElementById('userName-output-lose');
  userNameoutput.textContent = userName ? userName : 'Guest';
  userNameoutputlose.textContent = userName ? userName : 'Guest';
  userNameSpan.textContent = userName ? userName : 'Guest';
});