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
const photoCheckBoxAll = document.getElementsByName('photo')[0];
const photoCheckBoxItem = document.getElementsByName('photo-item');
const videoCheckBoxAll = document.getElementsByName('video')[0];
const videoCheckBoxItem = document.getElementsByName('video-item');
const volunteerCheckBoxAll = document.getElementsByName('volunteer')[0];
const volunteerCheckBoxItem = document.getElementsByName('volunteer-item');
const travelCheckBoxAll = document.getElementsByName('travel')[0];
const travelCheckBoxItem = document.getElementsByName('travel-item');
const dailyCheckBoxAll = document.getElementsByName('daily')[0];
const dailyCheckBoxItem = document.getElementsByName('daily-item');
const VolunteerBtn = document.getElementsByClassName('volunteer')[0];
const travelBtn = document.getElementsByClassName('travel')[0];
const dailyBtn = document.getElementsByClassName('daily')[0];
const volunteerHead = document.getElementsByClassName('volunteer-head')[0];
const travelHead = document.getElementsByClassName('travel-head')[0];
const dailyHead = document.getElementsByClassName('daily-head')[0];
const volunteerView = document.getElementsByClassName('volunteer-view')[0];
const travelView = document.getElementsByClassName('travel-view')[0];
const dailyView = document.getElementsByClassName('daily-view')[0];
const mailListItem = document.getElementsByClassName('mail-list-item');

const listTitle = document.getElementsByClassName('list-title');
const listImg = document.getElementsByClassName('list-img');
const listVideo = document.getElementsByClassName('list-video');

const previewImg = document.getElementsByClassName('preview-img');
const modifyTitle = document.getElementsByClassName('modify-title');
const modifySrc = document.getElementsByClassName('modify-src');

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

  //WORK BTN SELEC
  VolunteerBtn.addEventListener('click', btnFunc);
  travelBtn.addEventListener('click', btnFunc);
  dailyBtn.addEventListener('click', btnFunc);

  //CHECK BOX
  photoCheckBoxAll.addEventListener('click', checkAllPhotoFunc);
  videoCheckBoxAll.addEventListener('click', checkAllVideoFunc);
  volunteerCheckBoxAll.addEventListener('click', checkAllVolunteerFunc);
  travelCheckBoxAll.addEventListener('click', checkAllTravelFunc);
  dailyCheckBoxAll.addEventListener('click', checkAllDailyFunc);

  //MAIL SELECT
  for(let i = 0; i < mailListItem.length; i++) {
    mailListItem[i].addEventListener('click', mailClickFunc,true);
  }

  //IMG PREVIEW
  for(let i = 0; i < listImg.length; i++) {
    listImg[i].parentNode.addEventListener('click', previewImgFunc);
  }
  for(let i = 0; i < listVideo.length; i++) {
    listVideo[i].parentNode.addEventListener('click', previewImgFunc);
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

function checkAllPhotoFunc(e) {
  if (photoCheckBoxAll.checked === true) {
    for(let i = 0; i < photoCheckBoxItem.length; i++) {
      photoCheckBoxItem[i].checked = true;
    }
  } else {
    for(let i = 0; i < photoCheckBoxItem.length; i++) {
      photoCheckBoxItem[i].checked = false;
    }
  }
}

function checkAllVideoFunc(e) {
  if (videoCheckBoxAll.checked === true) {
    for(let i = 0; i < videoCheckBoxItem.length; i++) {
      videoCheckBoxItem[i].checked = true;
    }
  } else {
    for(let i = 0; i < videoCheckBoxItem.length; i++) {
      videoCheckBoxItem[i].checked = false;
    }
  }
}

function checkAllVolunteerFunc(e) {
  if (volunteerCheckBoxAll.checked === true) {
    for(let i = 0; i < volunteerCheckBoxItem.length; i++) {
      volunteerCheckBoxItem[i].checked = true;
    }
  } else {
    for(let i = 0; i < volunteerCheckBoxItem.length; i++) {
      volunteerCheckBoxItem[i].checked = false;
    }
  }
}

function checkAllTravelFunc(e) {
  if (travelCheckBoxAll.checked === true) {
    for(let i = 0; i < travelCheckBoxItem.length; i++) {
      travelCheckBoxItem[i].checked = true;
    }
  } else {
    for(let i = 0; i < travelCheckBoxItem.length; i++) {
      travelCheckBoxItem[i].checked = false;
    }
  }
}

function checkAllDailyFunc(e) {
  if (dailyCheckBoxAll.checked === true) {
    for(let i = 0; i < dailyCheckBoxItem.length; i++) {
      dailyCheckBoxItem[i].checked = true;
    }
  } else {
    for(let i = 0; i < dailyCheckBoxItem.length; i++) {
      dailyCheckBoxItem[i].checked = false;
    }
  }
}

function btnFunc(e) {
  if (e.target === VolunteerBtn) {
    volunteerHead.classList.remove('off');
    volunteerView.classList.remove('off');
    travelHead.classList.add('off');
    travelView.classList.add('off');
    dailyHead.classList.add('off');
    dailyView.classList.add('off');
  } else if(e.target === travelBtn) {
    volunteerHead.classList.add('off');
    volunteerView.classList.add('off');
    travelHead.classList.remove('off');
    travelView.classList.remove('off');
    dailyHead.classList.add('off');
    dailyView.classList.add('off');
  } else if(e.target === dailyBtn) {
    volunteerHead.classList.add('off');
    volunteerView.classList.add('off');
    travelHead.classList.add('off');
    travelView.classList.add('off');
    dailyHead.classList.remove('off');
    dailyView.classList.remove('off');
  }
}

function mailClickFunc(e) {
  const target = e.target.parentNode
  for(let i = 0; i < mailListItem.length; i++) {
    mailListItem[i].style.background = '';
  }
  target.style.background = '#ffffff';
}

function previewImgFunc(e) {
  const target = e.target.parentNode.childNodes[5].innerText;
  const mainParent = e.target.parentNode.parentNode.parentNode.parentNode.classList[0];
  const parent = e.target.parentNode.parentNode.classList[0]
  if(mainParent === 'photo') {
    previewImg[0].setAttribute('src', `./images/${target}`);
    previewImg[0].setAttribute('alt', target);
    modifyTitle[0].setAttribute('value', target)
  } else if (mainParent === 'video') {
    previewImg[1].setAttribute('src', `./videos/${target}`);
    modifyTitle[1].setAttribute('value', target)
  } else if (parent === 'volunteer-item-container') {
    previewImg[2].setAttribute('src', `./images/${target}`);
    previewImg[2].setAttribute('alt', target);
    modifyTitle[2].setAttribute('value', target)
  } else if (parent === 'travel-item-container') {
    previewImg[3].setAttribute('src', `./images/${target}`);
    previewImg[3].setAttribute('alt', target);
    modifyTitle[3].setAttribute('value', target)
  } else if (parent === 'daily-item-container') {
    previewImg[4].setAttribute('src', `./images/${target}`);
    previewImg[4].setAttribute('alt', target);
    modifyTitle[4].setAttribute('value', target)
  }
}