function preloadVideo() {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.addEventListener('canplaythrough', () => {
        // Set the preload attribute to 'auto' to ensure the video is fully loaded
        videoElement.preload = 'auto';
        // Attempt to play the video to trigger loading
        videoElement.play().catch(err => {
          console.log("Autoplay failed. User interaction might be required.");
        });
      });
    }
  }
  
  window.addEventListener('load', preloadVideo);
  