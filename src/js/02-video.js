import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const currentTime = function (data) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data.seconds));
};

const stopTime = Number(localStorage.getItem(LOCALSTORAGE_KEY));
console.log(stopTime);

player.on('timeupdate', throttle(currentTime, 1000));

player
  .setCurrentTime(stopTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        
        break;

      default:
        
        break;
    }
  });
player.on('play', currentTime);
