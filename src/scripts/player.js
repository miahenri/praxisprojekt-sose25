const fileInput = document.getElementById("fileInput");
const playPauseBtn = document.getElementById("playPauseBtn");
const quieterBtn = document.getElementById("leiser-btn");
const louderBtn = document.getElementById("lauter-btn");
const loopBtn = document.getElementById("loop-btn");
let isLooping = false;
const audio = document.getElementById("audioElement");
const status = document.getElementById("status");
const progressBar = document.getElementById("progressBar");
const progressContainer = document.getElementById("progress-container");
const timeDisplay = document.getElementById("time-display");
const currentTimeDisplay = document.getElementById("current-time");
const durationDisplay = document.getElementById("duration");
const coverImage = document.querySelector(".cover");
const titleElement = document.getElementById("js-title");
const artistElement = document.getElementById("js-artist");
const albumElement = document.getElementById("js-album");

const playerState = {
  playing: false,
  error: false,
};

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];

  if (file) {
    const url = URL.createObjectURL(file);
    audio.src = url;
    status.textContent = "Datei geladen: " + file.name;
    playPauseBtn.disabled = false;
    playerState.error = false;
    progressContainer.hidden = true;

    // Metadaten auslesen mit jsmediatags
    jsmediatags.read(file, {
      onSuccess: function (tag) {
        const tags = tag.tags;
        titleElement.textContent = tags.title || "Unbekannter Titel";
        artistElement.textContent = tags.artist || "Unbekannter Interpret";
        albumElement.textContent = tags.album || "Unbekanntes Album";

        if (tags.picture) {
          const { data, format } = tags.picture;
          const byteArray = new Uint8Array(data);
          const blob = new Blob([byteArray], { type: format });
          const coverUrl = URL.createObjectURL(blob);
          coverImage.src = coverUrl;
        } else {
          coverImage.src = "../assets/images/placeholder-cover.png";
        }
      },
      onError: function (error) {
        console.error("Fehler beim Auslesen der Tags:", error);
        titleElement.textContent = "Unbekannter Titel";
        artistElement.textContent = "Unbekannter Interpret";
        albumElement.textContent = "Unbekanntes Album";
        coverImage.src = "../assets/images/placeholder-cover.png";
      },
    });
  }
});

playPauseBtn.addEventListener("click", () => {
  if (playerState.playing) {
    audio.pause();
  } else {
    audio.play().catch((err) => {
      status.textContent = "Fehler beim Abspielen: " + err.message;
      playerState.error = true;
    });
  }
});

quieterBtn.addEventListener("click", () => {
  audio.volume = Math.max(0, audio.volume - 0.1);
  console.log(`Lautstärke: ${Math.round(audio.volume * 100)}%`);
});

louderBtn.addEventListener("click", () => {
  audio.volume = Math.min(1, audio.volume + 0.1);
  console.log(`Lautstärke: ${Math.round(audio.volume * 100)}%`);
});

audio.addEventListener("loadedmetadata", () => {
  progressBar.max = audio.duration;
  updateTimeDisplay();
  progressContainer.hidden = false;
});

audio.addEventListener("timeupdate", () => {
  progressBar.value = audio.currentTime;
  updateTimeDisplay();
});

progressBar.addEventListener("input", () => {
  audio.currentTime = progressBar.value;
});

audio.addEventListener("play", () => {
  playerState.playing = true;
  playPauseBtn.textContent = "PAUSE";
  status.textContent = "Wiedergabe läuft";
});

audio.addEventListener("pause", () => {
  playerState.playing = false;
  playPauseBtn.textContent = "PLAY";
  status.textContent = "Wiedergabe pausiert";
});

audio.addEventListener("ended", () => {
  playerState.playing = false;
  playPauseBtn.textContent = "Play";
  status.textContent = "Wiedergabe abgeschlossen";
});

audio.addEventListener("waiting", () => {
  status.textContent = "Lade...";
});

audio.addEventListener("canplay", () => {
  if (!playerState.playing && !playerState.error) {
    status.textContent = "Bereit zum Abspielen";
  }
});

audio.addEventListener("error", () => {
  playerState.error = true;
  playPauseBtn.disabled = true;
  status.textContent = "Fehler beim Laden der Audiodatei";
});

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min.toString().padStart(2, "0")}:${sec
    .toString()
    .padStart(2, "0")}`;
}

function updateTimeDisplay() {
  const current = formatTime(audio.currentTime);
  const total = isNaN(audio.duration) ? "00:00" : formatTime(audio.duration);
  currentTimeDisplay.textContent = current;
  durationDisplay.textContent = total;
}

const loopOffIcon = `
<svg width="47" height="53" viewBox="0 0 47 53" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M34.6429 20.875L43 12.4375M43 12.4375L34.6429 4M43 12.4375L4 12.4375V20.875M12.3571 32.125L4 40.5625M4 40.5625L12.3571 49M4 40.5625L43 40.5625V32.125"
    stroke="#F5F5F5" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const loopOnIcon = `
<svg width="47" height="60" viewBox="0 0 47 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.6429 20.875L43 12.4375M43 12.4375L34.6429 4M43 12.4375L4 12.4375V20.875M12.3571 32.125L4 40.5625M4 40.5625L12.3571 49M4 40.5625L43 40.5625V32.125" stroke="#F5F5F5" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="24.5" cy="55.5" r="4.5" fill="#F5F5F5"/>
</svg>`;

loopBtn.addEventListener("click", () => {
  isLooping = !isLooping;
  audio.loop = isLooping;
  loopBtn.innerHTML = isLooping ? loopOnIcon : loopOffIcon;
  status.textContent = isLooping ? "Loop aktiviert" : "Loop deaktiviert";
});

document.addEventListener("keydown", (event) => {
  // Wenn der Fokus gerade auf einem Eingabefeld liegt: nichts tun
  const tag = event.target.tagName.toLowerCase();
  if (tag === "input" || tag === "textarea") return;

  switch (event.key) {
    case " ": // Leertaste
      event.preventDefault(); // Verhindert Scrollen
      if (!playPauseBtn.disabled) {
        playPauseBtn.click();
      }
      break;

    case "ArrowRight":
      audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
      status.textContent = "5 Sekunden vorgespult";
      break;

    case "ArrowLeft":
      audio.currentTime = Math.max(0, audio.currentTime - 5);
      status.textContent = "5 Sekunden zurückgespult";
      break;

    case "ArrowUp":
      event.preventDefault(); // Verhindert Scrollen
      audio.volume = Math.min(1, audio.volume + 0.1);
      status.textContent = `Lautstärke: ${Math.round(audio.volume * 100)}%`;
      break;

    case "ArrowDown":
      event.preventDefault(); // Verhindert Scrollen
      audio.volume = Math.max(0, audio.volume - 0.1);
      status.textContent = `Lautstärke: ${Math.round(audio.volume * 100)}%`;
      break;

    case "l":
    case "L":
      loopBtn.click(); // Löst dieselbe Funktion aus wie Mausklick auf Loop-Button
      break;

    case "m":
    case "M":
      audio.muted = !audio.muted;
      status.textContent = audio.muted ? "Ton aus" : "Ton an";
      break;
  }
});
