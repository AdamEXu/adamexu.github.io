function toggleMusic() {
  const music = document.getElementById("music");
  music.volume = 0.3;
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function playBadMusic() {
  const badMusic = document.getElementById("bad-music");
  if (!audioContext) {
    initializeAudio();
  }
  badMusic.play();
  console.log("Bad music started playing");
}

function showBadWebsite() {
  document.getElementById("website").style.display = "none";
  document.getElementById("bad-website").style.display = "block";
  playBadMusic();
  new cursoreffects.rainbowCursor({
    length: 300,
    colors: ["blue"],
    size: 20,
  });
  new cursoreffects.ghostCursor({
    length: 300,
  });
  new cursoreffects.characterCursor({
    element: document.querySelector("#character"),
    characters: ["MERRY CHRISTMAS!", "MERRY CHRISTMAS!", "MERRY CHRISTMAS!"],
    font: "15px serif",
    colors: ["#ff0000", "#00ff00", "#0000ff"],
    characterLifeSpanFunction: function () {
      return Math.floor(Math.random() * 60 + 80);
    },
    initialCharacterVelocityFunction: function () {
      return {
        x: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 5,
        y: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 5,
      };
    },
    characterVelocityChangeFunctions: {
      x_func: function (age, lifeSpan) {
        return (Math.random() < 0.5 ? -1 : 1) / 30;
      },
      y_func: function (age, lifeSpan) {
        return (Math.random() < 0.5 ? -1 : 1) / 15;
      },
    },
    characterScalingFunction: function (age, lifeSpan) {
      let lifeLeft = lifeSpan - age;
      return Math.max((lifeLeft / lifeSpan) * 2, 0);
    },
    characterNewRotationDegreesFunction: function (age, lifeSpan) {
      let lifeLeft = lifeSpan - age;
      console.log(age, lifeSpan);
      return lifeLeft / 5;
    },
  });
}

function showGoodWebsite() {
  document.getElementById("website").style.display = "none";
  document.getElementById("good-website").style.display = "block";
  toggleMusic();
}

let audioContext;
let gainNode;
let source;

function initializeAudio() {
  const badMusic = document.getElementById("bad-music");
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  source = audioContext.createMediaElementSource(badMusic);
  gainNode = audioContext.createGain();
  source.connect(gainNode);
  gainNode.connect(audioContext.destination);
  gainNode.gain.setValueAtTime(1, audioContext.currentTime);
  console.log("Audio initialized with gain:", gainNode.gain.value);
}

function make_bad_music_louder() {
  if (!audioContext) {
    console.log("Audio context not initialized. Initializing now.");
    initializeAudio();
  }

  // Increase the gain (volume) by 50%
  let currentGain = gainNode.gain.value;
  let newGain = currentGain * 1.5;

  // Limit the maximum gain to prevent extreme loudness
  // newGain = Math.min(newGain, 10);

  gainNode.gain.setValueAtTime(newGain, audioContext.currentTime);
  console.log("Gain increased from", currentGain, "to", newGain);

  // Force the audio to play if it's not already playing
  const badMusic = document.getElementById("bad-music");
  if (badMusic.paused) {
    badMusic.play();
    console.log("Forced audio to play");
  }
}

// Initialize audio when the bad music starts playing
document.getElementById("bad-music").addEventListener("play", function () {
  if (!audioContext) {
    initializeAudio();
  }
  console.log("Play event listener triggered");
});
