import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.querySelector("iframe");
const player = new Player(iframe);

let curTime = parseFloat(localStorage.getItem("videoplayer-current-time")) || 0;

const play = () => {
  console.log("played the video!");
};

const currentProgress = (currentTime) => {
  localStorage.setItem("videoplayer-current-time", currentTime.seconds);
};

const delay = throttle(currentProgress, 1000);

player.on("play", play);
player.on("timeupdate", delay);

player
  .setCurrentTime(curTime)
  .then(function (seconds) {
    player.play(); // Comienza a reproducir el video desde el tiempo guardado
  })
  .catch(function (error) {
    switch (error.name) {
      case "RangeError":
        break;

      default:
        break;
    }
  });
