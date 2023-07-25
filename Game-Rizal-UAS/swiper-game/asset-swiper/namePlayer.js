// Kode JavaScript input nama
const openPopupBtnnama = document.getElementById('openPopupBtn-nama');
const popupBackgroundnama = document.getElementById('popupBackground-nama');
const popupContentnama = document.getElementById('popupContent-nama');
const nameInputplayer = document.getElementById('nameInput-player');
const submitNameBtngame = document.getElementById('submitNameBtn-game');
const closePopupBtnnama = document.getElementById('closePopupBtn-nama');

openPopupBtnnama.addEventListener('click', () => {
  popupBackgroundnama.style.display = 'block';
  popupContentnama.style.display = 'block';
});

submitNameBtngame.addEventListener('click', () => {
  const nameplayer = nameInputplayer.value.trim();
  if (nameplayer !== '') {
    localStorage.setItem('user_name', nameplayer);
    closePopup();
  } else {
    alert('Please enter your name.');
  }
});

closePopupBtnnama.addEventListener('click', () => {
  closePopup();
});

function closePopup() {
  nameInputplayer.value = '';
  popupBackgroundnama.style.display = 'none';
  popupContentnama.style.display = 'none';
}

// Input Nama puzzle
// Kode JavaScript input nama
const openPopupBtnnama1 = document.getElementById('openPopupBtn-nama1');
const popupBackgroundnama1 = document.getElementById('popupBackground-nama1');
const popupContentnama1 = document.getElementById('popupContent-nama1');
const nameInputplayer1 = document.getElementById('nameInput-player1');
const submitNameBtngame1 = document.getElementById('submitNameBtn-game1');
const closePopupBtnnama1 = document.getElementById('closePopupBtn-nama1');

openPopupBtnnama1.addEventListener('click', () => {
  popupBackgroundnama1.style.display = 'block';
  popupContentnama1.style.display = 'block';
});

submitNameBtngame1.addEventListener('click', () => {
  const nameplayer1 = nameInputplayer1.value.trim();
  if (nameplayer1 !== '') {
    localStorage.setItem('user_name1', nameplayer1);
    closePopup1();
  } else {
    alert('Please enter your name.');
  }
});

closePopupBtnnama1.addEventListener('click', () => {
  closePopup1();
});

function closePopup1() {
  nameInputplayer1.value = '';
  popupBackgroundnama1.style.display = 'none';
  popupContentnama1.style.display = 'none';
}

// Kode JavaScript input nama
const openPopupBtnnama2 = document.getElementById('openPopupBtn-nama2');
const popupBackgroundnama2 = document.getElementById('popupBackground-nama2');
const popupContentnama2 = document.getElementById('popupContent-nama2');
const nameInputplayer2 = document.getElementById('nameInput-player2');
const submitNameBtngame2 = document.getElementById('submitNameBtn-game2');
const closePopupBtnnama2 = document.getElementById('closePopupBtn-nama2');

openPopupBtnnama2.addEventListener('click', () => {
  popupBackgroundnama2.style.display = 'block';
  popupContentnama2.style.display = 'block';
});

submitNameBtngame2.addEventListener('click', () => {
  const nameplayer2 = nameInputplayer2.value.trim();
  if (nameplayer2 !== '') {
    localStorage.setItem('user_name2', nameplayer2);
    closePopup2();
  } else {
    alert('Please enter your name.');
  }
});

closePopupBtnnama2.addEventListener('click', () => {
  closePopup2();
});

function closePopup2() {
  nameInputplayer2.value = '';
  popupBackgroundnama2.style.display = 'none';
  popupContentnama2.style.display = 'none';
}

// Kode JavaScript input nama
const openPopupBtnnama3 = document.getElementById('openPopupBtn-nama3');
const popupBackgroundnama3 = document.getElementById('popupBackground-nama3');
const popupContentnama3 = document.getElementById('popupContent-nama3');
const nameInputplayer3 = document.getElementById('nameInput-player3');
const submitNameBtngame3 = document.getElementById('submitNameBtn-game3');
const closePopupBtnnama3 = document.getElementById('closePopupBtn-nama3');

openPopupBtnnama3.addEventListener('click', () => {
  popupBackgroundnama3.style.display = 'block';
  popupContentnama3.style.display = 'block';
});

submitNameBtngame3.addEventListener('click', () => {
  const nameplayer3 = nameInputplayer3.value.trim();
  if (nameplayer3 !== '') {
    localStorage.setItem('user_name3', nameplayer3);
    closePopup3();
  } else {
    alert('Please enter your name.');
  }
});

closePopupBtnnama3.addEventListener('click', () => {
  closePopup3();
});

function closePopup3() {
  nameInputplayer3.value = '';
  popupBackgroundnama3.style.display = 'none';
  popupContentnama3.style.display = 'none';
}