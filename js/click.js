const buttons = document.getElementsByClassName('btn');
const imgs = document.getElementsByClassName('my-work-imgs');

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', workClick);
}

buttons[0].style.borderBottom = '1px solid #a8a0a0';

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