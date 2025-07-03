const fileInput = document.getElementById('fileInput');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const audio = document.getElementById('audioElement');
    const status = document.getElementById('status');
    const progressBar = document.getElementById('progressBar');
    const progressContainer = document.getElementById('progress-container');
    const timeDisplay = document.getElementById('time-display');

    const playerState = {
      playing: false,
      error: false
    };

    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (file) {
        const url = URL.createObjectURL(file);
        audio.src = url;
        status.textContent = "Datei geladen: " + file.name;
        playPauseBtn.disabled = false;
        playerState.error = false;
        progressContainer.hidden = true;
      }
    });

    playPauseBtn.addEventListener('click', () => {
      if (playerState.playing) {
        audio.pause();
      } else {
        audio.play().catch(err => {
          status.textContent = "Fehler beim Abspielen: " + err.message;
          playerState.error = true;
        });
      }
    });

    audio.addEventListener('loadedmetadata', () => {
      progressBar.max = audio.duration;
      updateTimeDisplay();
      progressContainer.hidden = false;
    });

    audio.addEventListener('timeupdate', () => {
      progressBar.value = audio.currentTime;
      updateTimeDisplay();
    });

    progressBar.addEventListener('input', () => {
      audio.currentTime = progressBar.value;
    });

    audio.addEventListener('play', () => {
      playerState.playing = true;
      playPauseBtn.textContent = "Pause";
      status.textContent = "Wiedergabe läuft";
    });

    audio.addEventListener('pause', () => {
      playerState.playing = false;
      playPauseBtn.textContent = "Play";
      status.textContent = "Wiedergabe pausiert";
    });

    audio.addEventListener('ended', () => {
      playerState.playing = false;
      playPauseBtn.textContent = "Play";
      status.textContent = "Wiedergabe abgeschlossen";
    });

    audio.addEventListener('waiting', () => {
      status.textContent = "Lade...";
    });

    audio.addEventListener('canplay', () => {
      if (!playerState.playing && !playerState.error) {
        status.textContent = "Bereit zum Abspielen";
      }
    });

    audio.addEventListener('error', () => {
      playerState.error = true;
      playPauseBtn.disabled = true;
      status.textContent = "Fehler beim Laden der Audiodatei";
    });

    function formatTime(seconds) {
      const min = Math.floor(seconds / 60);
      const sec = Math.floor(seconds % 60);
      return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    }

    function updateTimeDisplay() {
      const current = formatTime(audio.currentTime);
      const total = isNaN(audio.duration) ? "00:00" : formatTime(audio.duration);
      timeDisplay.textContent = `${current} / ${total}`;
    }