document.addEventListener("DOMContentLoaded", function() {
  const mediaPlayer = document.getElementById("mediaPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const shareBtn = document.getElementById("shareBtn");

  playPauseBtn.addEventListener("click", function() {
    if (mediaPlayer.paused) {
      mediaPlayer.play();
      playPauseBtn.textContent = "Pause";
    } else {
      mediaPlayer.pause();
      playPauseBtn.textContent = "Play";
    }
  });

  shareBtn.addEventListener("click", function() {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this media!',
        url: window.location.href
      }).then(() => {
        console.log('Thanks for sharing!');
      }).catch(console.error);
    } else {
      alert('Share feature is not supported in your browser.');
    }
  });

  // Analytics tracking
  mediaPlayer.addEventListener("play", function() {
    console.log("Media played");
    // Code to send play event to analytics
  });

  mediaPlayer.addEventListener("pause", function() {
    console.log("Media paused");
    // Code to send pause event to analytics
  });

  mediaPlayer.addEventListener("ended", function() {
    console.log("Media ended");
    // Code to send end event to analytics
  });

  // Accessibility features
  mediaPlayer.setAttribute('aria-label', 'Media player');
  playPauseBtn.setAttribute('aria-label', 'Play or Pause media');
  shareBtn.setAttribute('aria-label', 'Share media');
});
