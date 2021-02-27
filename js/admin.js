const dropDownBtn = document.getElementsByClassName('drop-down-btn')[0];
const dropDownMenu = document.getElementsByClassName('drop-down')[0];
const photoMenu = document.getElementsByClassName('photo-menu')[0];
const videoMenu = document.getElementsByClassName('video-menu')[0];
const myWorkMenu = document.getElementsByClassName('my-work-menu')[0];
const connectMenu = document.getElementsByClassName('connect-menu')[0];
const loadSection = document.getElementsByClassName('load')[0];
const photoSection = document.getElementsByClassName('photo')[0];
const videoSection = document.getElementsByClassName('video')[0];
const myWorkSection = document.getElementsByClassName('my-work')[0];
const connectSection = document.getElementsByClassName('connect')[0];
const workBtnGroup = document.getElementsByClassName('btn-group')[2];
const volunteerSection = document.getElementsByClassName('volunteer-item-container')[0];
const travelSection = document.getElementsByClassName('travel-item-container')[0];
const dailySection = document.getElementsByClassName('daily-item-container')[0];
const allCheck = document.getElementsByClassName('check-all');
const listItemCheck = document.getElementsByClassName('list-item');
const modifySection = document.getElementsByClassName('modify');

window.onload = function () {
  //MAIN MENU
  dropDownBtn.addEventListener('click', showMenu);
  photoMenu.addEventListener('click', showSection);
  videoMenu.addEventListener('click', showSection);
  myWorkMenu.addEventListener('click', showSection);
  connectMenu.addEventListener('click', showSection);

  //MY WORK BTN
  for(let i = 0; i < workBtnGroup.childNodes.length; i ++) {
    if(i%2 !== 0) {
      workBtnGroup.childNodes[i].addEventListener('click', workClickFunc);
    }
  }

  //CHECK BOX
  for(let i = 0; i < allCheck.length; i++) {
    allCheck[i].addEventListener('click', allCheckFunc);
  }
}

//EVENT FUNCTION
function showMenu(e) {
  dropDownMenu.classList.toggle('on');
}

function showSection(e) {
  switch (e.target) {
    case photoMenu:
      photoSection.classList.remove('off');
      videoSection.classList.add('off');
      myWorkSection.classList.add('off');
      connectSection.classList.add('off');
      loadSection.classList.remove('off');
      break;
    case videoMenu:
      photoSection.classList.add('off');
      videoSection.classList.remove('off');
      myWorkSection.classList.add('off');
      connectSection.classList.add('off');
      loadSection.classList.remove('off');
      break;
    case myWorkMenu:
      photoSection.classList.add('off');
      videoSection.classList.add('off');
      myWorkSection.classList.remove('off');
      connectSection.classList.add('off');
      loadSection.classList.remove('off');
      break;
    case connectMenu:
      loadSection.classList.add('off');
      connectSection.classList.remove('off');
      break;
  }
}

function workClickFunc(e) {
  switch (e.target) {
    case workBtnGroup.childNodes[1]:
      volunteerSection.classList.remove('off');
      travelSection.classList.add('off');
      dailySection.classList.add('off');
      break;
    case workBtnGroup.childNodes[3]:
      volunteerSection.classList.add('off');
      travelSection.classList.remove('off');
      dailySection.classList.add('off');
      break;
    case workBtnGroup.childNodes[5]:
      volunteerSection.classList.add('off');
      travelSection.classList.add('off');
      dailySection.classList.remove('off');
      break;
  }
}

function allCheckFunc(e) {
  const check = e.target.checked;
  function maiSselector(x) {
    if (check === true) {
      for (let i = 0; i < modifySection[x].childNodes[1].childNodes[3].childNodes.length; i++) {
        if (i%2 === 1) {
          modifySection[x].childNodes[1].childNodes[3].childNodes[i].childNodes[1].childNodes[0].checked = true;
        }
      }
    } else if (check === false) {
      for (let i = 0; i < modifySection[x].childNodes[1].childNodes[3].childNodes.length; i++) {
        if (i%2 === 1) {
          modifySection[x].childNodes[1].childNodes[3].childNodes[i].childNodes[1].childNodes[0].checked = false;
        }
      }
    }
  }
  function subSelector(x) {
    if (check === true) {
      for (let i = 0; i < modifySection[x].childNodes.length; i++) {
        if (i%2 === 1) {
          modifySection[x].childNodes[i].childNodes[1].childNodes[0].checked = true;
        }
      }
    } else if (check === false) {
      for (let i = 0; i < modifySection[x].childNodes.length; i++) {
        if (i%2 === 1) {
          modifySection[x].childNodes[i].childNodes[1].childNodes[0].checked = false;
        }
      }
    }
  }
  

  if (!(modifySection[0].classList.contains('off'))) {
    maiSselector(0);
  } else if (!(modifySection[1].classList.contains('off')) ){
    maiSselector(1);
  } else if (!(modifySection[3].classList.contains('off'))) {
    subSelector(3);
  } else if (!(modifySection[4].classList.contains('off'))) {
    subSelector(4);
  } else if (!(modifySection[5].classList.contains('off'))) {
    subSelector(5);
  }
}