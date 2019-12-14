window.addEventListener('load', function(){
  var music = document.querySelector('audio');
  var musicButton = document.querySelector('[aria-label="music"]');
  music.load();
  var playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise.then(function() {
      //autoplay
      musicButton.classList.add('pause');
      musicButton.classList.remove('play');
    }).catch(function(){
      musicButton.classList.add('play');
      musicButton.classList.remove('pause');
    });
  } else {
    musicButton.classList.add('pause');
    musicButton.classList.remove('play');
  }

  musicButton.onclick = function(){
    if (musicButton.classList.contains('play')) {
      music.play();
      musicButton.classList.add('pause');
      musicButton.classList.remove('play');
    } else {
      music.pause();
      musicButton.classList.add('play');
      musicButton.classList.remove('pause');
    }
  };
});