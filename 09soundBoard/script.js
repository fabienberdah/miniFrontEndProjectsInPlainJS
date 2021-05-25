const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const body = document.querySelector("body");

sounds.map((sound) => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = sound;
  button.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });
  body.appendChild(button);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
