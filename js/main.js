//Mouse Move Event
let homeImg;
let imgContainer;
let target;

let x = 0;
let y = 0;
let mx = 0;
let my = 0;
const speed = 0.03;

window.onload = function() {
  imgContainer = document.getElementsByClassName('img-container');
  homeImg = document.getElementsByClassName('home-img');

  for (let i = 0; i < imgContainer.length; i++) {
    imgContainer[i].addEventListener('mousemove', moveMouse);
  }

  function moveMouse(e) {
    x = e.clientX;
    y = e.clientY;
    //console.log(x,y);
  }
  loop();

}

function loop() {
  mx += (x - mx) * speed;
  my += (y - my) * speed;
  window.requestAnimationFrame(loop);
}