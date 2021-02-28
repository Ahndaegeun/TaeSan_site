//EVENT VARIABLE
const bodyContainer = document.getElementsByClassName('body__container')[0];
const viewSection = document.getElementsByClassName('section');
const workContainer = document.getElementsByClassName('work-container')[0];
const cameraContainer = document.getElementsByClassName('camera-container')[0];
const videoContainer = document.getElementsByClassName('video-container')[0];
const imgs = document.getElementsByClassName('my-work-imgs');
const cameraImg = document.getElementsByClassName('camera-img')[0];
const videoImg = document.getElementsByClassName('video-img')[0];
const hiddenCamera = document.getElementsByClassName('hidden-camera')[0];
const hiddenVideo = document.getElementsByClassName('hidden-video')[0];
const mainMenu = document.getElementsByTagName('nav')[0];
const menuLink = document.getElementsByTagName('a');
const buttons = document.getElementsByClassName('btn');
const menuH1 = document.getElementsByTagName('h1')[0];
const menuUl = document.getElementsByTagName('ul')[0];
const menuBtn = document.getElementsByClassName('prev-btn')[0];
const clickedImg = document.getElementsByClassName('hidden-img');
const openMenu = document.getElementsByClassName('open-menu')[0];
const closeMenu = document.getElementsByClassName('close-menu')[0];

//MOUSE MOVE VARIABLE
let x = 0;
let y = 0;
let mx = 0;
let my = 0;
const speed = .1;

//ONLOAD
window.onload = function() {
  //STYLE
  buttons[0].style.borderBottom = '1px solid #a8a0a0';

  //MOUSE MOVE
  cameraContainer.addEventListener('mousemove', moveFunc);
  videoContainer.addEventListener('mousemove', moveFunc);
  loop();

  //MOUSE WHEEL
  for (let i = 0; i < viewSection.length; i++) {
    viewSection[i].addEventListener('mousewheel', wheelHandler);
  }
  hiddenCamera.addEventListener('mousewheel', propFunc);
  hiddenVideo.addEventListener('mousewheel', propFunc);
  workContainer.addEventListener('mousewheel', propFunc);

  //MOUSE CLICK
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', workClick);
  }
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', workClick);
  }
  cameraContainer.addEventListener('click', imgClick);
  videoContainer.addEventListener('click', imgClick);
  menuBtn.addEventListener('click', prevClick);
  openMenu.addEventListener('click', onpenMenuClick);
  closeMenu.addEventListener('click', closeMenuClick);
  for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', linkClick);
  }

  //IMG CLICK
  for (let i = 0; i < clickedImg.length; i++) {
    clickedImg[i].addEventListener('click', mainImgClick);
  }

  //RESIZE
  window.addEventListener('resize', resizeFunc)
}

//EVENT FUNCTION
function moveFunc(e) {
  x = e.clientX;
  y = e.clientY;
  target = e.target.classList[0];
  if (target === 'camera-img') {
    cameraImg.style.transform = `translate(${mx/50}px, ${my/50}px)`;
  } else if (target === 'video-img') {
    videoImg.style.transform = `translate(${mx/50}px, ${my/50}px)`;
  }
}

function loop() {
  mx += (x - mx) * speed;
  my += (y - my) * speed;
  window.requestAnimationFrame(loop);
}

function wheelHandler(e) {
  e.preventDefault();
  if (e.deltaY === 100) {
    if (e.currentTarget === viewSection[0]) {
      window.scrollTo(0, viewSection[1].offsetTop);
    } else if (e.currentTarget === viewSection[1]) {
      window.scrollTo(0, viewSection[2].offsetTop);
    }
  } else if (e.deltaY === -100) {
    if (e.currentTarget === viewSection[2]) {
      window.scrollTo(0, viewSection[1].offsetTop);
    } else if (e.currentTarget === viewSection[1]) {
      window.scrollTo(0, viewSection[0].offsetTop);
    }
  }
}

function propFunc(e) {
  e.stopPropagation();
}

function workClick(e) {
  function clickFunc(x,y,z) {
    imgs[x].classList.add('display-on');
    imgs[y].classList.remove('display-on');
    imgs[z].classList.remove('display-on');
    imgs[y].classList.add('display-none');
    imgs[z].classList.add('display-none');

    buttons[x].style.borderBottom = '1px solid #a8a0a0';
    buttons[y].style.borderBottom = '';
    buttons[z].style.borderBottom = '';
  }
  if (e.target === buttons[0]) {
    clickFunc(0,1,2);
  } else if (e.target === buttons[1]) {
    clickFunc(1,2,0);
  } else if (e.target === buttons[2]) {
    clickFunc(2,0,1);
  }
}

function imgClick(e) {
  const target = e.target.classList[0];
  cameraContainer.removeEventListener('mousemove', moveFunc);
  videoContainer.removeEventListener('mousemove', moveFunc);
  cameraContainer.removeEventListener('click', imgClick);
  videoContainer.removeEventListener('click', imgClick);
  cameraImg.style.transform = `translate(0, 0)`;
  videoImg.style.transform = `translate(0, 0)`;
  if (target === 'camera-img') {
    cameraContainer.classList.add('view');
    videoContainer.classList.add('hide');
    hiddenCamera.classList.add('on');
    hiddenVideo.classList.add('off');
    hiddenCamera.classList.remove('off');
    hiddenVideo.classList.remove('on');
  } else if (target === 'video-img') {
    videoContainer.classList.add('view');
    cameraContainer.classList.add('hide');
    hiddenCamera.classList.add('off');
    hiddenVideo.classList.add('on');
    hiddenCamera.classList.remove('on');
    hiddenVideo.classList.remove('off');
  }
  function displayFunc() {
    cameraContainer.style.display = 'none';
    videoContainer.style.display = 'none';
    viewSection[0].style.display = 'none';
    menuBtn.style.display = 'block';
  }
  function opacityFunc() {
    cameraContainer.style.opacity = '0';
    videoContainer.style.opacity = '0';
  }

  setTimeout(displayFunc, 3000);
  setTimeout(opacityFunc, 1000);

  menuH1.style.display = 'none';
  menuUl.style.display = 'none';

  viewSection[1].style.display = 'none';
  viewSection[2].style.display = 'none';
}

function prevClick(e) {
  if (cameraContainer.classList[1] === 'view') {
    function displayFunc() {
      cameraContainer.classList.remove('view');
      videoContainer.classList.remove('hide');
    }
  } else if (videoContainer.classList[1] === 'view') {
    function displayFunc() {
      videoContainer.classList.remove('view');
      cameraContainer.classList.remove('hide');
    }
  }
  function opacityFunc() {
    cameraContainer.style.opacity = '1';
    videoContainer.style.opacity = '1';
  }
  function addEvent() {
    cameraContainer.addEventListener('mousemove', moveFunc);
    videoContainer.addEventListener('mousemove', moveFunc);
    cameraContainer.addEventListener('click', imgClick);
    videoContainer.addEventListener('click', imgClick);
    menuH1.style.display = '';
    if (window.innerWidth > 400) {
      menuUl.style.display = 'grid';
    } else {
      menuUl.style.display = 'none';
    }
  }
  cameraContainer.style.display = '';
  videoContainer.style.display = '';
  viewSection[0].style.display = '';
  
  setTimeout(opacityFunc, 100);
  setTimeout(displayFunc, 500);
  setTimeout(addEvent, 3000);
  
  menuBtn.style.display = '';
  viewSection[1].style.display = '';
  viewSection[2].style.display = '';
}

function mainImgClick(e) {
  const srcValue = e.target.getAttribute('src');
  const altValue = e.target.getAttribute('alt');
  const naturalW = e.target.naturalWidth;
  const naturalH = e.target.naturalHeight;
  bodyContainer.insertAdjacentHTML('afterbegin', '<div class="zoom-img"><img src="" alt=""></div>');
  menuBtn.style.display = 'none';
  
  const background = document.getElementsByTagName('div')[1];
  const zoomImg = document.getElementsByClassName('zoom-img')[0];
  
  zoomImg.firstChild.setAttribute('src', srcValue);
  zoomImg.firstChild.setAttribute('alt', altValue);

  background.addEventListener('click', closeFunc);
  zoomImg.firstChild.addEventListener('click', zoomFunc);

  function closeFunc(e) {
    bodyContainer.removeChild(zoomImg);
    menuBtn.style.display = 'block';
  }

  function zoomFunc(e) {
    e.stopPropagation();
  }
}

function onpenMenuClick(e) {
  menuUl.style.display = 'flex';
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
}

function  closeMenuClick(e) {
  menuUl.style.display = 'none';
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
}

function linkClick(e) {
  if (window.innerWidth < 400) {
    menuUl.style.display = 'none';
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
  }
}

function resizeFunc(e) {
  if(window.innerWidth > 400) {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'none';
    menuUl.style.display = 'grid';
  } else {
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    menuUl.style.display = 'none';
  }
}