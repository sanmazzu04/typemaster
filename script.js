const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
  ];


  function randomWords(max){
    return Math.floor(Math.random() * max.length);
  }

  let palabraRandom = (words [randomWords(words)]);
  document.querySelector("h1").textContent = palabraRandom;

  let tiempo = 10

  let timeSpan = document.getElementById("timeSpan")
  timeSpan.textContent = tiempo + "s"

  let puntaje = 0

  let puntos = document.getElementById("score")
  puntos.textContent = puntaje


  let textoUsuario = "1"


document.querySelector("input").addEventListener('keyup', function usuario (e){
  document.getElementById("text");
  textoUsuario = e.target.value;
  console.log(textoUsuario);
  console.log(palabraRandom);
  if (textoUsuario === palabraRandom && tiempo !== 0){
    palabraRandom = (words [randomWords(words)]);
    document.querySelector("h1").textContent = palabraRandom;
    document.querySelector("input").value = "";
    puntaje++;
    puntos.textContent = puntaje;
    tiempo+=3;
    timeSpan.textContent = tiempo + "s";
  }
})



document.getElementById("playAgain").addEventListener("click", function restart(){
tiempo = 10;
timeSpan.textContent = tiempo + "s";
puntaje = 0;
puntos.textContent = puntaje;
})

var perdiste = document.getElementById("end-game-container");
var jugando = document.getElementById("main");
let puntosFinales = 0

let hola = ""


document.getElementById("start").addEventListener("click", function start(){
  tiempo = 10;
  puntaje = 0;
  var id = setInterval(function(){ 
  if(tiempo==0){
     clearInterval(id);
     perdiste.style.display = "block";
     jugando.style.display = "none";
     let puntosFinales = document.getElementById("puntosUsuario");
  puntosFinales.textContent = puntaje;
  }
  else
  {
     tiempo = tiempo-1; 
     timeSpan.textContent = tiempo + "s"
     perdiste.style.display = "none";
     jugando.style.display = "block";
  }
}, 1000);
})


// document.getElementById("start").addEventListener("keyup", function startmeme(){
//   if (puntaje >= 0 && puntaje < 5){
//     document.getElementById("1").style.display = "block";
//     alert("alfrcmo")
//   }
  
//   else if (puntaje >= 5 &&  puntaje <10){
//     document.getElementById("1").style.display = "none";
//     document.getElementById("2").style.display = "block";
//   }
  
//   else if (puntaje >= 10 && puntaje <15){
//     document.getElementById("3").style.display = "block";
//     document.getElementById("2").style.display = "none";
//   }
  
//   else if (puntaje >= 15 &&  puntaje <20){
//     document.getElementById("4").style.display = "block";
//     document.getElementById("3").style.display = "none";
//   }
  
//   else if (puntaje >= 20 &&  puntaje <25){
//     document.getElementById("5").style.display = "block";
//     document.getElementById("4").style.display = "none";
//   }
  
//   else if (puntaje >= 25 &&  puntaje <30){
//     document.getElementById("6").style.display = "block";
//     document.getElementById("5").style.display = "none";
//   }
  
//   else if (puntaje >= 30 &&  puntaje <35){
//     document.getElementById("7").style.display = "block";
//     document.getElementById("6").style.display = "none";
//   }
  
//   else if (puntaje >= 35 &&  puntaje <40){
//     document.getElementById("8").style.display = "block";
//     document.getElementById("7").style.display = "none";
//   }
  
//   else if (puntaje >= 40 &&  puntaje <45){
//     document.getElementById("9").style.display = "block";
//     document.getElementById("8").style.display = "none";
//   }
  
//   else if (puntaje >= 45 &&  puntaje <50){
//     document.getElementById("10").style.display = "block";
//     document.getElementById("9").style.display = "none";
//   }
  
//   else if (puntaje >= 50 &&  puntaje <55){
//     document.getElementById("11").style.display = "block";
//     document.getElementById("10").style.display = "none";
//   }
  
//   else if (puntaje >= 55){
//     document.getElementById("12").style.display = "block";
//     document.getElementById("11").style.display = "none";
//   }
// });