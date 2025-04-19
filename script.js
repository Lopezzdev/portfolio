const video = document.getElementById('vidloop');

video.addEventListener('mouseenter', () => {
  video.play();
});

video.addEventListener('mouseleave', () => {
  video.pause();
  video.currentTime = 0; // opcional: reinicia el video al salir
});
const video2 = document.getElementById('vidvoley');

video2.addEventListener('mouseenter', () => {
  video2.play();
});

video2.addEventListener('mouseleave', () => {
  video2.pause();
  video2.currentTime = 0; // opcional: reinicia el video al salir
});
const video3 = document.getElementById('vidcalc');

video3.addEventListener('mouseenter', () => {
  video3.play();
});

video3.addEventListener('mouseleave', () => {
  video3.pause();
  video3.currentTime = 0; // opcional: reinicia el video al salir
});
const video4 = document.getElementById('vidbrazo');

video4.addEventListener('mouseenter', () => {
  video4.play();
});

video4.addEventListener('mouseleave', () => {
  video4.pause();
  video4.currentTime = 0; // opcional: reinicia el video al salir
});