const viewSection = document.getElementsByClassName('section');
const menuLink = document.getElementsByTagName('a');
const workContainer = document.getElementsByClassName('work-container')[0];
const buttons = document.getElementsByClassName('btn');
const imgs = document.getElementsByClassName('my-work-imgs');

window.onload = function() {
  for (let i = 0; i < viewSection.length; i++) {
    viewSection[i].addEventListener('mousewheel', wheelHandler);
  }
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', workClick);
  }
  workContainer.addEventListener('mousewheel', propFunc);
}

buttons[0].style.borderBottom = '1px solid #a8a0a0';

function propFunc(e) {
  e.stopPropagation();
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
 
