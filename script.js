class PlayerMusicComponent {
    constructor() {
        this.audio = document.getElementById('audio');
        this.queue = musics;
        
        this.pausedStatus = document.getElementById('paused');
        this.progressStatus = document.getElementById('progress');

        this.currentTime = document.getElementById('current-time');
        this.duration = document.getElementById('duration');
    }

    play() {
        this.pausedStatus.innerHTML = ""
        
        this.eventListenerProgress()
        this.eventListenerKeyPress()
        
        audio.play();
    }

    pause() {
        this.pausedStatus.innerHTML = "<b>(PAUSED)</b> "
        audio.pause();
    }

    previous() {}
    next() {}
    
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

        params.progressStatus.firstChild.textContent = `(${player.getProgress(currentTime, duration)}%)`;
        params.currentTime.firstChild.textContent = player.formatMediaTime(currentTime);
        params.duration.firstChild.textContent = player.formatMediaTime(duration);
    }   

    switchCommands(e) {
        const commandAction = keyboardCommands[e.code].action;
        switch(commandAction) {
            case 'paused':
                document.params.pause(); break;
            case 'played':
                document.params.play(); break;
            case 'muted':
                //;
                break;
            case 'upVolume':
                //
                break;
            case 'downVolume':
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
player.play()