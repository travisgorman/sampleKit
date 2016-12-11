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
