 document.addEventListener("DOMContentLoaded", function() {
      var audioPlayer = document.getElementById("audioPlayer");
      var playButton = document.getElementById("playButton");
      var pauseButton = document.getElementById("pauseButton");

      playButton.addEventListener("click", function() {
        audioPlayer.play();
      });

      pauseButton.addEventListener("click", function() {
        audioPlayer.pause();
      });

      audioPlayer.play(); // Automatically play the audio upon page load
    });