window.addEventListener('keydown', function(e) {
  // selects an 'audio' element. [] selects data type in said element
  // back ticks allow the curly dollar (template string).
  // e.keycode returns keycode of pressed key
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // basically if audio = null, stop running the function
  if(!audio) return;
  // allows audio files to not need to finish before playing the next input
  audio.currentTime = 0;
  // plays the sound!
  audio.play()
});
