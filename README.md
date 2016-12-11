# Drum Kit
A sample-based drum kit triggered by keydown events. 

The kit is played with the keyboard - not clicks. Clicking the visual representations of the drum pads does nothing. Their purpose is to illustrate a layout of the sounds triggered by the A-L keys on your keyboard and provide visual feedback given when a key is pressed in the form of a yellow border, but the app would be functional without any visual interface at all.

Since this project uses specific key events, it uses the `<kbd>` tag to display the keys. Each key is a `<div class="key"`, with a `data-key` attribute — the value of which, is that key's data code.

* html layout of 9 keys
* add an event listener to each key
* play a specific sound on press of a specific key
  - add class `playing` to that key
* be able to play a new sound without having to wait for current sound to finish playing

### transitions


### keycodes
[javascript event key codes](http://keycode.info)


### playing audio
[the <audio> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)


___
```js
window.addEventListener('keydown', playSound);

function playSound(e){
  console.log( e )
  // declare an `audio` variable using an attribute selector, taking the keyCode from the event object, and passing it as the value to the `data-key` attribute
  // audio is any audio element with a `data-key` value matching the keyCode of the key pressed
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // `key` variable
  // key is any div element with a 'data-key' value matching the keyCode of the key pressed
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // if no match, do nothing, return
  if (!audio) return;  // otherwise (if there is a match)
  // add class `playing` to that `div.key`
  key.classList.add('playing');  
  // set `currentTime` to 0 — pressing the key while the sound is playing starts the sound from the beginning
  audio.currentTime = 0;  
  // play the sound associated with the `src` attribute
  audio.play();
}

// creates an Array out of all the elements with a class of `.key`
const keys = Array.from(document.querySelectorAll('.key'));

// add an event listener to each key, listening for a `transitionend` event
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Removes the `playing` class from the element
function removeTransition(e){
  // if no match, do nothing and return
  if (e.propertyName!== 'transform') return;
  // remove the `playing` class from the target of the key pressed
  e.target.classList.remove('playing');
}

```
