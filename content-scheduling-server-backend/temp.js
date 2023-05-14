const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

// Load the video file
const videoPath = './Static/Videos/video.mp4';
const video = document.createElement('video');
video.src = videoPath;

// Wait for the video to load
video.onloadedmetadata = async function() {
  // Create a canvas element with the same dimensions as the video
  const canvas = createCanvas(video.videoWidth, video.videoHeight);
  const ctx = canvas.getContext('2d');
  
  // Draw the current frame of the video onto the canvas
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  
  // Get the data URL of the canvas
  const dataUrl = canvas.toDataURL();
  
  // Write the data URL to a file
  const thumbnailPath = './Static/thumbnail.jpg';
  const thumbnailData = dataUrl.replace(/^data:image\/\w+;base64,/, '');
  const thumbnailBuffer = Buffer.from(thumbnailData, 'base64');
  fs.writeFileSync(thumbnailPath, thumbnailBuffer);
  
  console.log('Thumbnail saved to', thumbnailPath);
};
