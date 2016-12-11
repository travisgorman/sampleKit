# Drum Kit
A sample-based drum kit triggered by keydown events. 

The kit is played with the keyboard - not clicks. Clicking the visual representations of the drum pads does nothing. Their purpose is to illustrate a layout of the sounds triggered by the A-L keys on your keyboard and provide visual feedback given when a key is pressed in the form of a yellow border, but the app would be functional without any visual interface at all.

Since this project uses specific key events, it uses the `<kbd>` tag to display the keys. Each key is a `<div class="key"`, with a `data-key` attribute — the value of which, is that key's data code.

* html layout of 9 keys
* add an event listener to each key
* play a specific sound on press of a specific key
  - add class `playing` to that key
* be able to play a new sound without having to wait for current sound to finish playing
* remove the `playing` class after a certain amount of time (using transition events, not timers)

[screenshot of my completed drumkit app]('./complete.png')

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
___

### keycodes — `event.keyCode`
all key events have a property called `keyCode`. this a number that identifies the key that was pressed. They also have a `keyName` property. Names can be different, but keyCodes are universal.
Here is a handy website that will tell you the keycode of any key:
[javascript event key codes](http://keycode.info)

The first step to getting a working sampler is to associate specific key elements with specific audio elements.
I'm applying a `data-key` attribute to each key, with the value set to the keyCode of that particular key (65 for 'A', 83 for 'S', etc), and then also giving each of the audio elements a `data-key` attribute, with the value set to match a corresponding key element. 

[Match `.key` elements to <audio> elements with `data` attribute]('./key-to-audio.png')

### playing audio
[the <audio> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
In this project I am using the `play()` method on the web audio API, as well as the `currentTime` property.


### attribute selector
[Attribute Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) select an element using the presence of a given attribute or attribute value.

```js
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
```

If I wanted `audio` to equal something with a static value, like only audio elements that played `boom.wav` the `boom.wav` sample, I could write

```js
const audio = document.querySelector('audio[src="sounds/boom.wav"]');
```
but since I am trying to match a dynamic value (key event) with a static value (the `data-key` value of an `<audio>`element), I am interpolating the value of the attribute on the fly, using [es6 template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

### string interpolation with template literals
To insert a JavaScript expression into a string, wrap the string in **backticks** instead of single-quotes. Remember single-quotes for JS, and double-quotes for attributes. The backticks are replacing the single-quotes, so they go around the entire string. The HTML attribute still needs double-quotes around it. Except it contains an `${expression}` instead
of a string value. 

Anything inside of a `${ }` is evaluated and interpolated into the string.

### `transitionend` event
the [transitionend](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend) is fired when a CSS event has finished. I want the border to only last as long as the scaling effect itself, which I have set to 0.07 seconds in `style.css`

[CSS Transitions:](https://drafts.csswg.org/css-transitions/) the official CSS spec

___

# in this project...

* `event.keyCode`
* `data` attribute
* attribute selectors
* string interpolation with template literals
* vertical centering with Flexbox
* CSS transition / transform
* `transitionend` event
* audio elements & web audio API
