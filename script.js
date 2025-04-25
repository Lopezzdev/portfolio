if(window.innerWidth<510)document.body.style.zoom = "80%";

window.addEventListener("resize", () => {
  if(window.innerWidth>750){
      document.getElementById("contloop").style.cssText = "height: 600px;";
      document.getElementById("contcalculadora").style.cssText = "height: 600px;";
      document.getElementById("contvoley").style.cssText = "height: 600px;";
      document.getElementById("contbrazo").style.cssText = "height: 600px;";
  }else{
      document.getElementById("contloop").style.cssText = "height: 200px;";
      document.getElementById("contcalculadora").style.cssText = "height: 200px;";
      document.getElementById("contvoley").style.cssText = "height: 200px;";
      document.getElementById("contbrazo").style.cssText = "height: 200px;";
  }

  if(window.innerWidth<510)document.body.style.zoom = "80%";
});

const video = document.getElementById('vidloop');
const contvideo=document.getElementById('contloop');

contvideo.addEventListener('mouseenter', () => {
  if(window.innerWidth>750) video.play();
});
contvideo.addEventListener('mouseleave', () => {
  video.pause();
  video.currentTime = 0; // opcional: reinicia el video al salir
});


const video2 = document.getElementById('vidvoley');
const contvideo2=document.getElementById('contvoley');

contvideo2.addEventListener('mouseenter', () => {
  if(window.innerWidth>750) video2.play();
});
contvideo2.addEventListener('mouseleave', () => {
  video2.pause();
  video2.currentTime = 0; // opcional: reinicia el video al salir
});


const video3 = document.getElementById('vidcalc');
const contvideo3=document.getElementById('contcalculadora');

contvideo3.addEventListener('mouseenter', () => {
  if(window.innerWidth>750) video3.play();
});
contvideo3.addEventListener('mouseleave', () => {
  video3.pause();
  video3.currentTime = 0; // opcional: reinicia el video al salir
});


const video4 = document.getElementById('vidbrazo');
const contvideo4=document.getElementById('contbrazo');

contvideo4.addEventListener('mouseenter', () => {
  if(window.innerWidth>750) video4.play();
});
contvideo4.addEventListener('mouseleave', () => {
  video4.pause();
  video4.currentTime = 0; // opcional: reinicia el video al salir
});

const secciones = [
  {contId: "contloop",animId: "aloop",video: video},
  {contId: "contvoley",animId: "avoley",video: video2},
  {contId: "contcalculadora",animId: "acalc",video: video3},
  {contId: "contbrazo",animId: "abrazo",video: video4}
];

function activarSeccion(activaId) {
  if (window.innerWidth >= 751) return;

  secciones.forEach(({ contId, animId, video }) => {
    const cont = document.getElementById(contId);
    const anim = document.getElementById(animId);

    if (contId === activaId) {
      cont.style.cssText = "height:300px;transition:all 1s;opacity:1;";
      anim.style.display = "flex";
      video.play();
    } else {
      cont.style.cssText = "height:200px;transition:all 1s;opacity:0.4;";
      anim.style.display = "none";
      video.pause();
      video.currentTime = 0;
    }
  });
}

// Asignar listeners automáticamente
secciones.forEach(({ contId }) => {
  document.getElementById(contId).addEventListener("click", () => {
    activarSeccion(contId);
  });
});