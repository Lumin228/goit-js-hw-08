    import throttle from "lodash.throttle";

import Player from '@vimeo/player';

const player = new Player('vimeo-player');

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

function playFunc(){
    player.getCurrentTime().then(function(seconds) {
        const currentTime = seconds;
        localStorage.setItem(LOCAL_STORAGE_KEY, currentTime);
    })
}

player.on('timeupdate', throttle(playFunc, 1500));

function playerFunc(){
    const localStorageValue = localStorage.getItem(LOCAL_STORAGE_KEY);
    player.setCurrentTime(localStorageValue)
}

player.on('play', playerFunc)