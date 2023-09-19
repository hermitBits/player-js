const musicContainer = document.getElementById('music-container');

const audio = document.getElementById('audio');

const durationContainer = document.getElementById('duration-container');
const durationCurr = document.getElementById('durantion-curr');
const durationTotal = document.getElementById('duration-total');
const pausedStatus = document.getElementById('paused');
const progressStatus = document.getElementById('progress');

const songs = [
    '10 - Maglore - Debaixo de Chuva'
];

let songIndex = 0;

loadSong(songs[songIndex]);

function loadSong(song) {
  audio.src = `music/${song}.mp3`;
}

function playSong() {
    audio.play();
}

function pauseSong() {
    pausedStatus.innerHTML = "<b>(PAUSED)</b> "
    audio.pause();
}

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function nextSong() {
    songIndex++;
  
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
  
    loadSong(songs[songIndex]);
  
    playSong();
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
  
    const minuteValue = minutes.toString();
    const secondValue = seconds.toString().padStart(2, '0');
  
    const mediaTime = `${minuteValue}:${secondValue}`;
    return mediaTime;
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;

    const progressPercent = parseFloat((currentTime / duration) * 100).toFixed(0);
    progressStatus.firstChild.textContent = `${progressPercent}%`;

    durationCurr.firstChild.textContent = formatTime(currentTime);
    durationTotal.firstChild.textContent = formatTime(duration)
}   


keyboardCommands = {
    paused: {
        p: {
            key: 'p',
            code: 'keyP',
            keyCode: 80
        },
        space: {
            key: ' ',
            code: 'Space',
            keyCode: 32,
        }
    }
}

document.body.onkeyup = function(e) {
    console.log(e)
    if (e.key == "p" ||
        e.code == "keyP" ||      
        e.keyCode == 80      
    ) {
     pauseSong()
    }
  }

audio.addEventListener('ended', nextSong);
audio.addEventListener('timeupdate', updateProgress);

playSong();