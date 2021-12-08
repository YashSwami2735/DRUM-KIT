document.addEventListener('keydown', function(event) {

  playSound(event.key);
});

function playSound(character) {

  if (character=='y') {
    var song1 = new Audio('sounds/crash.mp3');
    song1.play();
  }

  else if (character=='a') {
    var song2 = new Audio('sounds/kick-bass.mp3');
    song2.play();
  }

  else if (character=='s') {
    var song3 = new Audio('sounds/snare.mp3');
    song3.play();
  }

  else if (character=='h') {
    var song4 = new Audio('sounds/tom-1.mp3');
    song4.play();
  }

  else if (character=='u') {
    var song5 = new Audio('sounds/tom-2.mp3');
    song5.play();
  }

  else if (character=='r') {
    var song6 = new Audio('sounds/tom-3.mp3');
    song6.play();
  }

  else if (character=='b') {
    var song7 = new Audio('sounds/tom-4.mp3');
    song7.play();
  }
}
