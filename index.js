var sounds = ["sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3", "sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3"];

function addSound(key) {
  switch (key) {
    case 'w':
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case 'a':
      var kb = new Audio("sounds/kick-bass.mp3");
      kb.play();
      break;
    case 's':
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case 'd':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case 'j':
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case 'k':
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case 'l':
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log(key);

  }
}

function buttonClick(button) {
  var bPressed = document.querySelector("." + button);
  bPressed.classList.add("pressed");
  setTimeout(function () {
    bPressed.classList.remove("pressed");
  }, 100);
}

for(var i=0; i<document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    addSound(this.innerHTML);
    buttonClick(this.innerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  addSound(event.key);
  buttonClick(event.key);
})

// var audio = new Audio("sounds/crash.mp3");
// audio.play();
