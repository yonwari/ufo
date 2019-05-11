let ufo = "";
let newUfo = "";
const init = () => {
  window.addEventListener("keydown", keydown);
  ufo = new UFO(document.getElementById("ufo"), 100);
  NewUFO.prototype = ufo;
  newUfo = new NewUFO(100);
}

const keydown = (e) =>  {
  if (e.keyCode === 37) {
    newUfo.moveLeft();
  } else if (e.keyCode === 39) {
    newUfo.moveRight();
  } else if (e.keyCode === 38) {
    newUfo.moveUp();
  } else if (e.keyCode === 40) {
    newUfo.moveDown();
  }
}

function UFO(_elem, _xpos) {
  this.elem = _elem;
  this.xpos = _xpos;

  this.moveLeft = () => {
    this.xpos -= 10;
    this.elem.style.left = this.xpos + "px";
  }

  this.moveRight = () => {
    this.xpos += 10;
    this.elem.style.left = this.xpos + "px";
  }
  this.elem.style.left = this.xpos + "px";
}

function NewUFO(_ypos) {
  this.ypos = _ypos;
  
  this.moveUp = () => {
    this.ypos -= 10;
    this.elem.style.top = this.ypos + "px";
  }
  this.moveDown = () => {
    this.ypos += 10;
    this.elem.style.top = this.ypos + "px";
  }
  this.elem.style.top = this.ypos + "px";
}
