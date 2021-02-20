
  const cameraContainer = document.getElementsByClassName('camera-container')[0];
  const videoContainer = document.getElementsByClassName('video-container')[0];
  const cameraImg = document.getElementsByClassName('camera-img')[0];
  const videoImg = document.getElementsByClassName('video-img')[0];

  const mainMenu = document.getElementsByTagName('nav')[0];
  const menuH1 = document.getElementsByTagName('h1')[0];
  const menuUl = document.getElementsByTagName('ul')[0];
  const menuBtn = document.getElementsByTagName('button')[0];


window.onload = function() {

  cameraContainer.addEventListener('click', imgClick);
  videoContainer.addEventListener('click', imgClick);
  menuBtn.addEventListener('click', prevClick);

  function imgClick(e) {
    const target = e.target.classList[0];
    if (target === 'camera-img') {
      cameraContainer.classList.add('view');
      videoContainer.classList.add('hide');
    } else if (target === 'video-img') {
      videoContainer.classList.add('view');
      cameraContainer.classList.add('hide');
    }
    function displayFunc() {
      cameraContainer.style.display = 'none';
      videoContainer.style.display = 'none';
    }
    function opacityFunc() {
      cameraContainer.style.opacity = '0';
      videoContainer.style.opacity = '0';
    }

    setTimeout(displayFunc, 3000);
    setTimeout(opacityFunc, 1000);

    menuH1.style.display = 'none';
    menuUl.style.display = 'none';
    menuBtn.style.display = 'block';
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
    cameraContainer.style.display = '';
    videoContainer.style.display = '';

    setTimeout(opacityFunc, 100);
    setTimeout(displayFunc, 500);

    menuH1.style.display = '';
    menuUl.style.display = 'grid';
    menuBtn.style.display = '';
  }
}