class PlayerMusicComponent {
    constructor() {
        this.audio = document.getElementById('audio');
        this.queue = musics;
        
        this.pausedStatus = document.getElementById('paused');
        this.progressStatus = document.getElementById('progress');

        this.currentTime = document.getElementById('current-time');
        this.duration = document.getElementById('duration');

        this.nameMusic = document.getElementById('name-music');
        this.artistNameValue = document.getElementById('artist-name-value');
        this.albumNameValue = document.getElementById('album-name-value');
        this.albumDateValue = document.getElementById('album-date-value');
        this.albumGenreValue = document.getElementById('album-genre-value');
        this.titleMusic = document.getElementById('title-music-value');   
    }

    play() {
        this.pausedStatus.innerHTML = ""
        audio.play();
    }

    pause() {
        this.pausedStatus.innerHTML = "<span>(PAUSED)</span> "
        audio.pause();
    }

    previous() {}
    next() {}

    loadMusic(music) {
        this.nameMusic.textContent = music.nameMusic;
        this.artistNameValue.textContent = music.artistName;
        this.albumNameValue.textContent = music.albumName;
        this.albumDateValue.textContent = music.albumDate;
        this.albumGenreValue.textContent = music.albumGenre;
        this.titleMusic.textContent = music.titleMusic;

        this.audio.src = music.src;
    }

    playerLoadQueue() {
        const firstMusicmusics = musics[0];
        this.loadMusic(firstMusicmusics);
    }  

    prepareComponent(){
        this.eventListenerKeyPress()
        this.eventListenerProgress()
    }
    
    formatMediaTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time - minutes * 60);
      
        const minuteValue = minutes.toString();
        const secondValue = seconds.toString().padStart(2, '0');
      
        return `${minuteValue}:${secondValue}`;
    }

    getProgress(currTime, duration) {
        return parseFloat((currTime / duration) * 100).toFixed(0);
    }

    updateProgress(e) {
        const { duration, currentTime, params } = e.srcElement;

        params.progressStatus.firstChild.textContent = `(${params.getProgress(currentTime, duration)}%)`;
        params.currentTime.firstChild.textContent = params.formatMediaTime(currentTime);
        params.duration.firstChild.textContent = params.formatMediaTime(duration);
    }   

    switchCommands(e) {
        const commandAction = keyboardCommands[e.code].action;
        switch(commandAction) {
            case 'pause':
                document.params.pause(); break;
            case 'play':
                document.params.play(); break;
            case 'mute':
                //;
                break;
            case 'volumeUp':
                //
                break;
            case 'volumeDown':
                //
                break;
            default:
                //
                break;
        }
    }

    eventListenerProgress() {
        this.audio.params = this;
        this.audio.addEventListener('timeupdate', this.updateProgress);
    }

    eventListenerKeyPress() {
        document.params = this;
        document.addEventListener('keyup', this.switchCommands)
    }

}

const player = new PlayerMusicComponent();
player.playerLoadQueue();
player.prepareComponent();