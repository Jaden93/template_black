var audio = new Audio('./media/presidente.ogg');
var audio1 = new Audio('./media/le_veline.ogg');
var elPresidente = document.getElementById('presidente');
var elGregio = document.getElementById('ezio');



// function checkPresidente(e) {
//     audio.play();
// }

// function checkEzio(e) {
//     audio1.play();
// }


elPresidente.onclick = checkPresidente;
elGregio.onclick = checkEzio;
