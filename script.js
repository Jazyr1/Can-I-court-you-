document.getElementById('playVideo').addEventListener('click', function() {
    const messageContainer = document.getElementById('messageContainer');
    const videoContainer = document.getElementById('videoContainer');
    const video = document.getElementById('video');
    const emojiBackground = document.querySelector('.emoji-background');

    // Hide the emoji background
    emojiBackground.style.display = 'block';

    // Show message and GIF
    messageContainer.style.display = 'block';

    // Set the YouTube video source and display it
    video.src = "https://www.youtube.com/embed/8yvWcZ8BtrQ?autoplay=1&mute=1"; 
    videoContainer.style.display = 'block';
});