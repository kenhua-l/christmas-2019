window.addEventListener('load', function(){
  var music = document.querySelector('audio');
  var musicButton = document.querySelector('[aria-label="music"]');
  music.load();
  var playPromise = music.play();
  if(playPromise !== undefined){
    playPromise.then(changeMusicButtonIcon(musicButton, 'pause', 'play')).catch(changeMusicButtonIcon(musicButton, 'play', 'pause'));
  }else{
    changeMusicButtonIcon(musicButton, 'pause', 'play');
  }
  musicButton.onclick = function(){
    if (musicButton.classList.contains('play')) {
      music.play();
      changeMusicButtonIcon(musicButton, 'pause', 'play');
    } else {
      music.pause();
      changeMusicButtonIcon(musicButton, 'play', 'pause');
    }
  };
});
function changeMusicButtonIcon(button, add, remove){button.classList.add(add);button.classList.remove(remove);}