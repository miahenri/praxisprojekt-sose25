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
let queue = [];
let currentIndex = 0;

const playerState = {
  playing: false,
  error: false,
};

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

const playingNowIcon = `<svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 18.865V3.13504C2 2.2872 2.98886 1.82405 3.64018 2.36682L13.0781 10.2318C13.5579 10.6316 13.5579 11.3684 13.0781 11.7682L3.64018 19.6332C2.98886 20.176 2 19.7128 2 18.865Z" stroke="#F5F5F5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const arrowUpIcon = `<svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 14L14 2L2 14" stroke="#F5F5F5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const arrowDownIcon = `<svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2L14 14L26 2" stroke="#F5F5F5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const deleteIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <g clip-path="url(#a)">
    <path fill="#F5F5F5" fill-rule="evenodd" d="M23.392.5c.671.667.674 1.752.006 2.423l-8.98 9.025 9.083 9.129a1.714 1.714 0 1 1-2.43 2.418L12 14.379l-9.07 9.116A1.714 1.714 0 0 1 .5 21.077l9.082-9.129-8.98-9.025A1.714 1.714 0 0 1 3.032.505L12 9.518 20.968.505A1.714 1.714 0 0 1 23.392.5Z" clip-rule="evenodd"/>
  </g>
  <defs>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
  </defs>
</svg>
`;

document.getElementById("warteschlange-btn").addEventListener("click", () => {
  document.getElementById("playerView").style.display = "none";
  document.getElementById("queueView").style.display = "block";
  renderQueue(); // Funktion zum Anzeigen der Queue
});

document.getElementById("backToPlayerBtn").addEventListener("click", () => {
  document.getElementById("queueView").style.display = "none";
  document.getElementById("playerView").style.display = "block";
});

window.addEventListener("DOMContentLoaded", () => {
  const fileName = localStorage.getItem("milo-file-name");
  const fileType = localStorage.getItem("milo-file-type");
  const savedTime = localStorage.getItem("milo-current-time");

  if (fileName && savedTime) {
    status.textContent = `Letzter Track: ${fileName}`;
    // Der Benutzer muss die Datei erneut manuell auswählen:
    status.textContent += " – bitte Datei erneut auswählen";
  }
});

audio.addEventListener("loadedmetadata", () => {
  const savedTime = parseFloat(localStorage.getItem("milo-current-time"));
  if (!isNaN(savedTime)) {
    audio.currentTime = savedTime;
  }
});

fileInput.addEventListener("change", () => {
  const files = [...fileInput.files];

  if (files.length > 0) {
    queue = files;
    currentIndex = 0;
    loadTrack(queue[currentIndex]); // nutzt deine bestehende Logik, aber sauber ausgelagert
  }
});

function loadTrack(file) {
  const url = URL.createObjectURL(file);
  audio.src = url;
  status.textContent = "Datei geladen: " + file.name;
  playPauseBtn.disabled = false;
  playerState.error = false;
  progressContainer.hidden = true;

  localStorage.setItem("milo-file-name", file.name);
  localStorage.setItem("milo-file-type", file.type);
  localStorage.setItem("milo-last-played", Date.now().toString());

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

  audio.play().catch((err) => {
    status.textContent = "Fehler beim Abspielen: " + err.message;
    playerState.error = true;
  });
}

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

  // Position speichern
  localStorage.setItem("milo-current-time", audio.currentTime);
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
  currentIndex++;
  if (currentIndex < queue.length) {
    loadTrack(queue[currentIndex]);
  } else {
    playerState.playing = false;
    playPauseBtn.textContent = "PLAY";
    status.textContent = "Warteschlange beendet";
  }
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

loopBtn.addEventListener("click", () => {
  isLooping = !isLooping;
  audio.loop = isLooping;
  loopBtn.setAttribute("aria-pressed", isLooping ? "true" : "false");
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

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.focus(); // erzwingt Fokus beim Mausklick
  });
});

document
  .getElementById("back-btn")
  .addEventListener("click", playPreviousTrack);
document.getElementById("forward-btn").addEventListener("click", playNextTrack);

function renderQueue() {
  const queueList = document.getElementById("queueList");
  queueList.innerHTML = "";

  queue.forEach((file, index) => {
    const li = document.createElement("li");
    li.textContent = "Lade Informationen...";

    jsmediatags.read(file, {
      onSuccess: (tag) => {
        const tags = tag.tags;
        const artist = tags.artist || "Unbekannter Interpret";
        const title = tags.title || "Unbekannter Titel";

        const tempAudio = new Audio();
        tempAudio.src = URL.createObjectURL(file);

        tempAudio.addEventListener("loadedmetadata", () => {
          const duration = formatTime(tempAudio.duration);

          li.innerHTML = `
            <div class="wl-track-info">
              <p class="fw-bold">${index === currentIndex ? playingNowIcon : ""} ${title}</p> 
              <p class="fw-light">${artist}</p>
            </div> 
            <div class="wl-track-duration fw-light">
              ${duration}
              <div class="wl-nav">
                ${index > 0
                  ? `<button class="queue-btn move-up" aria-label="Nach oben verschieben" data-index="${index}">${arrowUpIcon}</button>`
                  : ""}
                ${
                  index < queue.length - 1
                    ? `<button class="queue-btn move-down" aria-label="Nach unten verschieben" data-index="${index}">${arrowDownIcon}</button>`
                    : ""
                }
                <button class="queue-btn delete" aria-label="Aus Warteschlange entfernen" data-index="${index}">${deleteIcon}</button>
              </div>
            </div>
          `;

          // Event-Listener setzen
          const upBtn = li.querySelector(".move-up");
          const downBtn = li.querySelector(".move-down");
          const deleteBtn = li.querySelector(".delete");

          if (upBtn) {
            upBtn.addEventListener("click", () => {
              const i = parseInt(upBtn.dataset.index);
              [queue[i], queue[i - 1]] = [queue[i - 1], queue[i]];
              if (currentIndex === i) currentIndex--;
              else if (currentIndex === i - 1) currentIndex++;
              renderQueue();
            });
          }

          if (downBtn) {
            downBtn.addEventListener("click", () => {
              const i = parseInt(downBtn.dataset.index);
              [queue[i], queue[i + 1]] = [queue[i + 1], queue[i]];
              if (currentIndex === i) currentIndex++;
              else if (currentIndex === i + 1) currentIndex--;
              renderQueue();
            });
          }

          if (deleteBtn) {
            deleteBtn.addEventListener("click", () => {
              const i = parseInt(deleteBtn.dataset.index);
              queue.splice(i, 1);
              if (i < currentIndex) currentIndex--;
              else if (i === currentIndex) {
                if (queue.length > 0) {
                  currentIndex = Math.min(currentIndex, queue.length - 1);
                  loadTrack(queue[currentIndex]);
                } else {
                  audio.pause();
                  currentIndex = -1;
                  status.textContent = "Warteschlange ist leer.";
                }
              }
              renderQueue();
            });
          }
        });
      },
      onError: () => {
        li.innerHTML = `${
          index === currentIndex ? "▶️ " : ""
        }Unbekannter Interpret – Unbekannter Titel (??:??)`;
      },
    });

    queueList.appendChild(li);
  });
}

function playNextTrack() {
  if (queue.length === 0) return;

  currentIndex++;
  if (currentIndex >= queue.length) {
    currentIndex = 0; // optional: zurück zum ersten Track (Loop)
  }

  loadTrack(queue[currentIndex]);
}

function playPreviousTrack() {
  if (queue.length === 0) return;

  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = queue.length - 1; // optional: zurück zum letzten Track
  }

  loadTrack(queue[currentIndex]);
}
