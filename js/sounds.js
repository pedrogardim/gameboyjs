const playerOptions = {
  urls: {
    coin: "../../assets/sounds/coin.wav",
    start: "../../assets/sounds/start.wav",
    cursor: "../../assets/sounds/cursor.wav",
    death: "../../assets/sounds/death.wav",
    music: "../../assets/sounds/music.mp3",
  },
};

export const sounds = new Tone.Players(playerOptions).toDestination();

sounds.player("music").loop = true;
sounds.player("music").volume.value = -6;
sounds.player("coin").volume.value = -12;
