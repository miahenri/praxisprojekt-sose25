
    const fileInput = document.getElementById('fileInput');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const audio = document.getElementById('audioElement');
    const status = document.getElementById('status');

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