const dropDownBtn = document.getElementsByClassName('drop-down-btn')[0];
const dropDownMenu = document.getElementsByClassName('drop-down')[0];
const photoMenu = document.getElementsByClassName('photo-menu')[0];
const videoMenu = document.getElementsByClassName('video-menu')[0];
const myWorkMenu = document.getElementsByClassName('my-work-menu')[0];

window.onload = function () {
  dropDownBtn.addEventListener('click', showMenu);

  photoMenu.addEventListener('click', showSection);
  videoMenu.addEventListener('click', showSection);
  myWorkMenu.addEventListener('click', showSection);
}

function showSection(e) {
  console.log('show section')
}

function showMenu(e) {
  dropDownMenu.classList.toggle('on');
}