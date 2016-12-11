window.addEventListener('keydown', playSound);

function playSound(e){
  // associate a specific audio element with a specific key using `data-key` and `e.keyCode`
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log( audio )
  audio.play();


  
}