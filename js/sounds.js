const playerOptions = {
  // baseUrl: "../assets/sounds/",
  baseUrl: "https://pedrogardim.github.io/bcfs-snake-gameboy/assets/sounds/",
  urls: {
    coin: "coin.wav",
    start: "start.wav",
    cursor: "cursor.wav",
    death: "death.wav",
    music: "music.mp3",
  },
};

export const sounds = new Tone.Players(playerOptions).toDestination();

sounds.player("music").loop = true;
sounds.player("music").volume.value = -6;
sounds.player("coin").volume.value = -12;
