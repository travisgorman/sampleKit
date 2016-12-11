window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

function playSound(e){
  const audio = document.querySelector( `audio[data-key="${e.keyCode}"]` );
  const key = document.querySelector( `div[data-key="${e.keyCode}"]` );  
  audio.play();
  audio.currentTime = 0;
  key.classList.add('playing');
}

function removeTransition(e){
  this.classList.remove('playing');
}
