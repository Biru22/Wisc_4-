const edadSelect = document.getElementById("edad");
const subtestSelect = document.getElementById("Subtest");
var boton = document.getElementById("buttonselect");
const resultado = document.getElementById("resultado");
var button = document.getElementById("buttonConvertir")
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
  filtrar();
});

button.addEventListener("click", function() {
  convertir();
});

function filtrar() {
  const edadSeleccionada = edadSelect.value;
  const subtestSeleccionado = subtestSelect.value;
  boton.innerText = `${edadSeleccionada} - ${subtestSeleccionado}`;
}

var puntaje;
function convertir() {
  const edad = document.getElementById("edad").value;
  const subtest = document.getElementById("Subtest").value;
  puntaje = parseInt(document.getElementById("PuntuacionDirecta").value); 

//Edad 6 a 6,3
//Contrucción con Cubos
if (edad === "6,0" && subtest === "CC") {
for (let i = 0; i <= 68; i++) {
  if (puntaje <= 1) {
    equivalencia = 4;
    }  else if (puntaje <= 4) {
    equivalencia = 5;
    } else if (puntaje <= 6) {
    equivalencia = 6;
    } else if (puntaje <= 8) {
    equivalencia = 7;
    } else if (puntaje <= 11) {
    equivalencia = 8;
    } else if (puntaje <= 13) {
    equivalencia = 9;
    } else if (puntaje <= 15) {
    equivalencia = 10;
    } else if (puntaje <= 18) {
    equivalencia = 11;
    } else if (puntaje <= 20) {
    equivalencia = 12;
    } else if (puntaje <= 22) {
    equivalencia = 13;
    } else if (puntaje <= 25) {
    equivalencia = 14;
    } else if (puntaje <= 27) {
    equivalencia = 15;
    } else if (puntaje <= 29) {
    equivalencia = 16;
    } else if (puntaje <= 31) {
    equivalencia = 17;
    } else if (puntaje <= 34) {
    equivalencia = 18;
    } else {
    equivalencia = 19;
    } 
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
  }
}


//Semejanzas
if (edad === "6,0" && subtest === "S") {
for (let i = 0; i <= 44; i++) {
  if (puntaje == 0) {
    equivalencia = 4;
  } else if (puntaje == 1) {
    equivalencia = 5;
  } else if (puntaje <= 3) {
    equivalencia = 6;
  } else if (puntaje == 4) {
    equivalencia = 7;
  } else if (puntaje == 5) {
    equivalencia = 8;
  } else if (puntaje == 6) {
    equivalencia = 9;
  } else if (puntaje <= 8) {
    equivalencia = 10;
  } else if (puntaje == 9) {
    equivalencia = 11;
  } else if (puntaje <= 11) {
    equivalencia = 12;
  } else if (puntaje == 12) {
    equivalencias = 13;
  } else if (puntaje == 13) {
    equivalencia = 14;
  } else if (puntaje <= 15) {
    equivalencia = 15;
  } else if (puntaje == 16) {
    equivalencia = 16;
  } else if (puntaje <= 18) {
    equivalencia = 17;
  } else if (puntaje == 19) {
    equivalencia = 18;
  } else {
    equivalencia = 19;
  }
  var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
  inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
}
}


//Retencion de Digitos
if (edad === "6,0" && subtest === "RD") {
for (let i = 0; i <= 32; i++) {
    if (puntaje <= 2) {
      equivalencia = 1;
    } else if (puntaje == 3) {
      equivalencia = 2;
    } else if (puntaje == 4) {
      equivalencia = 3;
    } else if (puntaje == 5) {
      equivalencia = 4;
    } else if (puntaje == 6) {
      equivalencia = 5;
    } else if (puntaje == 7) {
      equivalencia = 7;
    } else if (puntaje == 8) {
      equivalencia = 8;
    } else if (puntaje == 9) {
      equivalencia = 9;
    } else if (puntaje == 10) {
      equivalencia = 10;
    } else if (puntaje == 11) {
      equivalencia = 12;
    } else if (puntaje == 12) {
      equivalencia = 13;
    } else if (puntaje == 13) {
      equivalencia = 14;
    } else if (puntaje == 14) {
      equivalencia = 15;
    } else if (puntaje == 15) {
      equivalencia = 17;
    } else if (puntaje == 16) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
  }
}

//Conceptos
  if (edad === "6,0" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje == 0) {
      equivalencia = 1;
    } else if (puntaje == 1) {
      equivalencia = 2;
    } else if (puntaje == 2) {
      equivalencia = 3;
    } else if (puntaje == 3) {
      equivalencia = 4;
    } else if (puntaje == 4) {
      equivalencia = 5;
    } else if (puntaje == 5) {
      equivalencia = 6;
    } else if (puntaje == 6) {
      equivalencia = 7;
    } else if (puntaje == 7) {
      equivalencia = 8;
    } else if (puntaje <= 9) {
      equivalencia = 9;
    } else if (puntaje == 10) {
      equivalencia = 10;
    } else if (puntaje == 11) {
      equivalencia = 11;
    } else if (puntaje == 12) {
      equivalencia = 12;
    } else if (puntaje == 13) {
      equivalencia = 13;
    } else if (puntaje == 14) {
      equivalencia = 14;
    } else if (puntaje <= 16) {
      equivalencia = 15;
    } else if (puntaje == 17) {
      equivalencia = 16;
    } else if (puntaje == 18) {
      equivalencia = 17;
    } else if (puntaje == 19) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
  }
}

//Claves
if (edad === "6,0" && subtest === "CL") {
for (let i = 0; i <= 65; i++) {
  if (puntaje <= 2) {
    equivalencia = 2;
  } else if (puntaje <= 6) {
    equivalencia = 3;
  } else if (puntaje <= 9) {
    equivalencia = 4;
  } else if (puntaje <= 13) {
    equivalencia = 5;
  } else if (puntaje <= 16) {
    equivalencia = 6;
  } else if (puntaje <= 21) {
    equivalencia = 7;
  } else if (puntaje <= 25) {
    equivalencia = 8;
  } else if (puntaje <= 29) {
    equivalencia = 9;
  } else if (puntaje <= 33) {
    equivalencia = 10;
  } else if (puntaje <= 37) {
    equivalencia = 11;
  } else if (puntaje <= 41) {
    equivalencia = 12;
  } else if (puntaje <= 44) {
    equivalencia = 13;
  } else if (puntaje <= 48) {
    equivalencia = 14;
  } else if (puntaje <= 52) {
    equivalencia = 15;
  } else if (puntaje <= 56) {
    equivalencia = 16;
  } else if (puntaje <= 60) {
    equivalencia = 17;
  } else if (puntaje <= 64) {
    equivalencia = 18;
  } else {
    equivalencia = 19;
  }
  var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
  inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
  }
}

//Vocabulario
if (edad === "6,0" && subtest === "V") {
for (let i = 0; i <= 68; i++) {
    if (puntaje <= 2) {
      equivalencia = 1;
    } else if (puntaje <= 5) {
      equivalencia = 2;
    } else if (puntaje <= 7) {
      equivalencia = 3;
    } else if (puntaje <= 9) {
      equivalencia = 4;
    } else if (puntaje <= 11) {
      equivalencia = 5;
    } else if (puntaje <= 13) {
      equivalencia = 6;
    } else if (puntaje <= 16) {
      equivalencia = 7;
    } else if (puntaje <= 18) {
      equivalencia = 8;
    } else if (puntaje <= 20) {
      equivalencia = 9;
    } else if (puntaje <= 22) {
      equivalencia = 10;
    } else if (puntaje <= 24) {
      equivalencia = 11;
    } else if (puntaje <= 26) {
      equivalencia = 12;
    } else if (puntaje <= 28) {
      equivalencia = 13;
    } else if (puntaje <= 30) {
      equivalencia = 14;
    } else if (puntaje <= 33) {
      equivalencia = 15;
    } else if (puntaje <= 35) {
      equivalencia = 16;
    } else if (puntaje <= 37) {
      equivalencia = 17;
    } else if (puntaje <= 39) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//Letras y Numeros
if (edad === "6,0" && subtest === "LN") {
for (let i = 0; i <= 30; i++) {
    if (puntaje <= 1) {
      equivalencia = 6;
    } else if (puntaje == 2) {
      equivalencia = 7;
    } else if (puntaje <= 4) {
      equivalencia = 8;
    } else if (puntaje == 5) {
      equivalencia = 9;
    } else if (puntaje <= 7) {
      equivalencia = 10;
    } else if (puntaje <= 9) {
      equivalencia = 11;
    } else if (puntaje == 10) {
      equivalencia = 12;
    } else if (puntaje <= 12) {
      equivalencia = 13;
    } else if (puntaje == 13) {
      equivalencia = 14;
    } else if (puntaje <= 15) {
      equivalencia = 15;
    } else if (puntaje <= 17) {
      equivalencia = 16;
    } else if (puntaje == 18) {
      equivalencia = 17;
    } else if (puntaje <= 20) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//Matrices
if (edad === "6,0" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje == 0) {
      equivalencia = 1;
    } else if (puntaje == 1) {
      equivalencia = 2;
    } else if (puntaje == 2) {
      equivalencia = 3;
    } else if (puntaje == 3) {
      equivalencia = 4;
    } else if (puntaje == 4) {
      equivalencia = 5;
    } else if (puntaje == 5) {
      equivalencia = 6;
    } else if (puntaje == 6) {
      equivalencia = 7;
    } else if (puntaje <= 8) {
      equivalencia = 8;
    } else if (puntaje == 9) {
      equivalencia = 9;
    } else if (puntaje == 10) {
      equivalencia = 10;
    } else if (puntaje == 11) {
      equivalencia = 11;
    } else if (puntaje == 12) {
      equivalencia = 12;
    } else if (puntaje == 13) {
      equivalencia = 13;
    } else if (puntaje == 14) {
      equivalencia = 15;
    } else if (puntaje == 15) {
      equivalencia = 16;
    } else if (puntaje == 16) {
      equivalencia = 17;
    } else if (puntaje == 17) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//Comprensión
if (edad === "6,0" && subtest === "C") {
for (let i = 0; i <= 42; i++) {
    if (puntaje == 0) {
      equivalencia = 2;
    } else if (puntaje == 1) {
      equivalencia = 3;
    } else if (puntaje <= 3) {
      equivalencia = 4;
    } else if (puntaje == 4) {
      equivalencia = 5;
    } else if (puntaje == 5) {
      equivalencia = 6;
    } else if (puntaje <= 7) {
      equivalencia = 7;
    } else if (puntaje == 8) {
      equivalencia = 8;
    } else if (puntaje == 9) {
      equivalencia = 9;
    } else if (puntaje == 10) {
      equivalencia = 10;
    } else if (puntaje <= 12) {
      equivalencia = 11;
    } else if (puntaje == 13) {
      equivalencia = 12;
    } else if (puntaje <= 15) {
      equivalencia = 13;
    } else if (puntaje == 16) {
      equivalencia = 14;
    } else if (puntaje == 17) {
      equivalencia = 15;
    } else if (puntaje <= 19) {
      equivalencia = 16;
    } else if (puntaje == 20) {
      equivalencia = 17;
    } else if (puntaje == 21) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

  
//Busqueda de Simbolos
if (edad === "6,0" && subtest === "BS") {
for (let i = 0; i <= 45; i++) {
    if (puntaje == 0) {
      equivalencia = 2;
    } else if (puntaje <= 2) {
      equivalencia = 3;
    } else if (puntaje <= 4) {
      equivalencia = 4;
    } else if (puntaje <= 6) {
      equivalencia = 5;
    } else if (puntaje <= 8) {
      equivalencia = 6;
    } else if (puntaje <= 10) {
      equivalencia = 7;
    } else if (puntaje <= 12) {
      equivalencia = 8;
    } else if (puntaje <= 15) {
      equivalencia = 9;
    } else if (puntaje <= 17) {
      equivalencia = 10;
    } else if (puntaje <= 19) {
      equivalencia = 11;
    } else if (puntaje <= 21) {
      equivalencia = 12;
    } else if (puntaje <= 23) {
      equivalencia = 13;
    } else if (puntaje <= 25) {
      equivalencia = 14;
    } else if (puntaje <= 27) {
      equivalencia = 15;
    } else if (puntaje <= 29) {
      equivalencia = 16;
    } else if (puntaje <= 31) {
      equivalencia = 17;
    } else if (puntaje <= 34) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

  
//Completamiento de Figuras
if (edad === "6,0" && subtest === "CF") {
for (let i = 0; i <= 38; i++) {
    if (puntaje == 0) {
      equivalencia = 2;
    } else if (puntaje <= 2) {
      equivalencia = 3;
    } else if (puntaje == 3) {
      equivalencia = 4;
    } else if (puntaje <= 5) {
      equivalencia = 5;
    } else if (puntaje == 6) {
      equivalencia = 6;
    } else if (puntaje <= 8) {
      equivalencia = 7;
    } else if (puntaje <= 10) {
      equivalencia = 8;
    } else if (puntaje == 11) {
      equivalencia = 9;
    } else if (puntaje <= 13) {
      equivalencia = 10;
    } else if (puntaje == 14) {
      equivalencia = 11;
    } else if (puntaje <= 16) {
      equivalencia = 12;
    } else if (puntaje <= 18) {
      equivalencia = 13;
    } else if (puntaje == 19) {
      equivalencia = 14;
    } else if (puntaje <= 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 16;
    } else if (puntaje <= 24) {
      equivalencia = 17;
    } else if (puntaje <= 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//Animales
if (edad === "6,0" && subtest === "A") {
for (let i = 0; i <= 136; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 6) {
      equivalencia = 2;
    } else if (puntaje <= 11) {
      equivalencia = 3;
    } else if (puntaje <= 17) {
      equivalencia = 4;
    } else if (puntaje <= 21) {
      equivalencia = 5;
    } else if (puntaje <= 26) {
      equivalencia = 6;
    } else if (puntaje <= 32) {
      equivalencia = 7;
    } else if (puntaje <= 36) {
      equivalencia = 8;
    } else if (puntaje <= 41) {
      equivalencia = 9;
    } else if (puntaje <= 45) {
      equivalencia = 10;
    } else if (puntaje <= 49) {
      equivalencia = 11;
    } else if (puntaje <= 54) {
      equivalencia = 12;
    } else if (puntaje <= 58) {
      equivalencia = 13;
    } else if (puntaje <= 62) {
      equivalencia = 14;
    } else if (puntaje <= 67) {
      equivalencia = 15;
    } else if (puntaje <= 71) {
      equivalencia = 16;
    } else if (puntaje <= 75) {
      equivalencia = 17;
    } else if (puntaje <= 80) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//Informacion
if (edad === "6,0" && subtest === "I") {
for (let i = 0; i <= 33; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje == 2) {
      equivalencia = 2;
    } else if (puntaje == 3) {
      equivalencia = 3;
    } else if (puntaje == 4) {
      equivalencia = 4;
    } else if (puntaje == 5) {
      equivalencia = 5;
    } else if (puntaje == 6) {
      equivalencia = 7;
    } else if (puntaje == 7) {
      equivalencia = 8;
    } else if (puntaje == 8) {
      equivalencia = 9;
    } else if (puntaje == 9) {
      equivalencia = 11;
    } else if (puntaje == 10) {
      equivalencia = 13;
    } else if (puntaje == 11) {
      equivalencia = 14;
    } else if (puntaje == 12) {
      equivalencia = 15;
    } else if (puntaje == 13) {
      equivalencia = 17;
    } else if (puntaje == 14) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//Aritmetica
if (edad === "6,0" && subtest === "AR") {
for (let i = 0; i <= 34; i++) {
    if (puntaje == 0) {
      equivalencia = 2;
    } else if (puntaje <= 2) {
      equivalencia = 3;
    } else if (puntaje == 3) {
      equivalencia = 4;
    } else if (puntaje == 4) {
      equivalencia = 5;
    } else if (puntaje <= 6) {
      equivalencia = 6;
    } else if (puntaje == 7) {
      equivalencia = 7;
    } else if (puntaje == 8) {
      equivalencia = 8;
    } else if (puntaje == 9) {
      equivalencia = 9;
    } else if (puntaje <= 11) {
      equivalencia = 10;
    } else if (puntaje == 12) {
      equivalencia = 11;
    } else if (puntaje == 13) {
      equivalencia = 12;
    } else if (puntaje <= 15) {
      equivalencia = 13;
    } else if (puntaje == 16) {
      equivalencia = 14;
    } else if (puntaje == 17) {
      equivalencia = 15;
    } else if (puntaje == 18) {
      equivalencia = 16;
    } else if (puntaje <= 20) {
      equivalencia = 17;
    } else if (puntaje == 21) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//Adivinanzas
if (edad === "6,0" && subtest === "AD") {
  for (let i = 0; i <= 24; i++) {
    if (puntaje == 0) {
      equivalencia = 2;
    } else if (puntaje == 1) {
      equivalencia = 3;
    } else if (puntaje == 2) {
      equivalencia = 4;
    } else if (puntaje == 3) {
      equivalencia = 5;
    } else if (puntaje == 4) {
      equivalencia = 6;
    } else if (puntaje == 5) {
      equivalencia = 7;
    } else if (puntaje == 6) {
      equivalencia = 8;
    } else if (puntaje == 7) {
      equivalencia = 9;
    } else if (puntaje == 8) {
      equivalencia = 10;
    } else if (puntaje == 9) {
      equivalencia = 11;
    } else if (puntaje == 10) {
      equivalencia = 12;
    } else if (puntaje == 11) {
      equivalencia = 13;
    } else if (puntaje == 12) {
      equivalencia = 14;
    } else if (puntaje == 13) {
      equivalencia = 15;
    } else if (puntaje == 14) {
      equivalencia = 16;
    } else if (puntaje == 15) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }


//Edad 6,4 a 6,7
//CC
if (edad === "6,4" && subtest === "CC") {
for (let i = 0; i <= 68; i++) {
if (puntaje <= 1) {
  equivalencia = 3;
  } else if (puntaje == 2) {
  equivalencia = 4;
  } else if (puntaje <= 5) {
  equivalencia = 5;
  } else if (puntaje <= 7) {
  equivalencia = 6;
  } else if (puntaje <= 10) {
  equivalencia = 7;
  } else if (puntaje <= 12) {
  equivalencia = 8;
  } else if (puntaje <= 14) {
  equivalencia = 9;
  } else if (puntaje <= 16) {
  equivalencia = 10;
  } else if (puntaje <= 18) {
  equivalencia = 11;
  } else if (puntaje <= 21) {
  equivalencia = 12;
  } else if (puntaje <= 23) {
  equivalencia = 13;
  } else if (puntaje <= 25) {
  equivalencia = 14;
  } else if (puntaje <= 27) {
  equivalencia = 15;
  } else if (puntaje <= 30) {
  equivalencia = 16;
  } else if (puntaje <= 32) {
  equivalencia = 17;
  } else if (puntaje <= 34) {
  equivalencia = 18;
  } else {
  equivalencia = 19;
  }
  var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
  inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
  }
}

//S
if (edad === "6,4" && subtest === "S") {
for (let i = 0; i <= 44; i++) {
  if (puntaje == 0) {
    equivalencia = 4;
  } else if (puntaje <= 2) {
    equivalencia = 5;
  } else if (puntaje == 3) {
    equivalencia = 6;
  } else if (puntaje == 4) {
    equivalencia = 7;
  } else if (puntaje <= 6) {
    equivalencia = 8;
  } else if (puntaje == 7) {
    equivalencia = 9;
  } else if (puntaje == 8) {
    equivalencia = 10;
  } else if (puntaje <= 10) {
    equivalencia = 11;
  } else if (puntaje == 11) {
    equivalencia = 12;
  } else if (puntaje <= 13) {
    equivalencia = 13;
  } else if (puntaje == 14) {
    equivalencia = 14;
  } else if (puntaje == 15) {
    equivalencia = 15;
  } else if (puntaje <= 17) {
    equivalencia = 16;
  } else if (puntaje == 18) {
    equivalencia = 17;
  } else if (puntaje == 19) {
    equivalencia = 18;
  } else {
    equivalencia = 19;
  }
  var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
  inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
  }
}

  //RD
  if (edad === "6,4" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 2) {
      equivalencia = 1;
    } else if (puntaje == 3) {
      equivalencia = 2;
    } else if (puntaje == 4) {
      equivalencia = 3;
    } else if (puntaje == 5) {
      equivalencia = 4;
    } else if (puntaje == 6) {
      equivalencia = 5;
    } else if (puntaje == 7) {
      equivalencia = 6;
    } else if (puntaje == 8) {
      equivalencia = 7;
    } else if (puntaje == 9) {
      equivalencia = 8;
    } else if (puntaje == 10) {
      equivalencia = 9;
    } else if (puntaje == 11) {
      equivalencia = 11;
    } else if (puntaje == 12) {
      equivalencia = 12;
    } else if (puntaje == 13) {
      equivalencia = 13;
    } else if (puntaje == 14) {
      equivalencia = 15;
    } else if (puntaje == 15) {
      equivalencia = 16;
    } else if (puntaje == 16) {
      equivalencia = 17;
    } else {
      equivalencia = 19;
    }
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

  //CO
  if (edad === "6,4" && subtest === "CO") {
    for (let i = 0; i <= 28; i++) {
      if (puntaje == 0) {
        equivalencia = 1;
      } else if (puntaje == 1) {
        equivalencia = 2;
      } else if (puntaje == 2) {
        equivalencia = 3;
      } else if (puntaje == 3) {
        equivalencia = 4;
      } else if (puntaje == 4) {
        equivalencia = 5;
      } else if (puntaje == 5) {
        equivalencia = 6;
      } else if (puntaje == 6) {
        equivalencia = 7;
      } else if (puntaje == 7) {
        equivalencia = 8;
      } else if (puntaje <= 9) {
        equivalencia = 9;
      } else if (puntaje == 10) {
        equivalencia = 10;
      } else if (puntaje == 11) {
        equivalencia = 11;
      } else if (puntaje == 12) {
        equivalencia = 12;
      } else if (puntaje == 13) {
        equivalencia = 13;
      } else if (puntaje <= 15) {
        equivalencia = 14;
      } else if (puntaje == 16) {
        equivalencia = 15;
      } else if (puntaje == 17) {
        equivalencia = 16;
      } else if (puntaje == 18) {
        equivalencia = 17;
      } else if (puntaje == 19) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //C
  if (edad === "6,4" && subtest === "CL") {
  for (let i = 0; i <= 65; i++) {
    if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 6) {
      equivalencia = 3;
    } else if (puntaje <= 10) {
      equivalencia = 4;
    } else if (puntaje <= 13) {
      equivalencia = 5;
    } else if (puntaje <= 17) {
      equivalencia = 6;
    } else if (puntaje <= 22) {
      equivalencia = 7;
    } else if (puntaje <= 26) {
      equivalencia = 8;
    } else if (puntaje <= 31) {
      equivalencia = 9;
    } else if (puntaje <= 36) {
      equivalencia = 10;
    } else if (puntaje <= 40) {
      equivalencia = 11;
    } else if (puntaje <= 45) {
      equivalencia = 12;
    } else if (puntaje <= 49) {
      equivalencia = 13;
    } else if (puntaje <= 54) {
      equivalencia = 14;
    } else if (puntaje <= 58) {
      equivalencia = 15;
    } else if (puntaje <= 60) {
      equivalencia = 16;
    } else if (puntaje <= 62) {
      equivalencia = 17;
    } else if (puntaje <= 64) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

  //V
  if (edad === "6,4" && subtest === "V") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 2) {
      equivalencia = 1;
    } else if (puntaje <= 5) {
      equivalencia = 2;
    } else if (puntaje <= 7) {
      equivalencia = 3;
    } else if (puntaje <= 9) {
      equivalencia = 4;
    } else if (puntaje <= 11) {
      equivalencia = 5;
    } else if (puntaje <= 13) {
      equivalencia = 6;
    } else if (puntaje <= 16) {
      equivalencia = 7;
    } else if (puntaje <= 18) {
      equivalencia = 8;
    } else if (puntaje <= 20) {
      equivalencia = 9;
    } else if (puntaje <= 22) {
      equivalencia = 10;
    } else if (puntaje <= 24) {
      equivalencia = 11;
    } else if (puntaje <= 27) {
      equivalencia = 12;
    } else if (puntaje <= 29) {
      equivalencia = 13;
    } else if (puntaje <= 31) {
      equivalencia = 14;
    } else if (puntaje <= 33) {
      equivalencia = 15;
    } else if (puntaje <= 35) {
      equivalencia = 16;
    } else if (puntaje <= 38) {
      equivalencia = 17;
    } else if (puntaje <= 40) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

  //LN
  if (edad === "6,4" && subtest === "LN") {
  for (let i = 0; i <= 30; i++) {
    if (puntaje == 0) {
    equivalencia = 4;
  } else if (puntaje <= 2) {
    equivalencia = 5;
  } else if (puntaje == 3) {
    equivalencia = 6;
  } else if (puntaje == 4) {
    equivalencia = 7;
  } else if (puntaje <= 6) {
    equivalencia = 8;
  } else if (puntaje == 7) {
    equivalencia = 9;
  } else if (puntaje <= 9) {
    equivalencia = 10;
  } else if (puntaje == 10) {
    equivalencia = 11;
  } else if (puntaje == 11) {
    equivalencia = 12;
  } else if (puntaje <= 13) {
    equivalencia = 13;
  } else if (puntaje == 14) {
    equivalencia = 14;
  } else if (puntaje == 15) {
    equivalencia = 15;
  } else if (puntaje <= 17) {
    equivalencia = 16;
  } else if (puntaje == 18) {
    equivalencia = 17;
  } else if (puntaje <= 20) {
    equivalencia = 18;
  } else {
    equivalencia = 19;
  }
  var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
  inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
  }
}

//M
if (edad === "6,4" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje == 0) {
      equivalencia = 1;
    } else if (puntaje == 1) {
      equivalencia = 2;
    } else if (puntaje == 2) {
      equivalencia = 3;
    } else if (puntaje == 3) {
      equivalencia = 4;
    } else if (puntaje == 4) {
      equivalencia = 5;
    } else if (puntaje == 5) {
      equivalencia = 6;
    } else if (puntaje <= 7) {
      equivalencia = 7;
    } else if (puntaje == 8) {
      equivalencia = 8;
    } else if (puntaje == 9) {
      equivalencia = 9;
    } else if (puntaje == 10) {
      equivalencia = 10;
    } else if (puntaje <= 12) {
      equivalencia = 11;
    } else if (puntaje == 13) {
      equivalencia = 12;
    } else if (puntaje == 14) {
      equivalencia = 13;
    } else if (puntaje == 15) {
      equivalencia = 14;
    } else if (puntaje == 16) {
      equivalencia = 15;
    } else if (puntaje == 17) {
      equivalencia = 16;
    } else if (puntaje == 18) {
      equivalencia = 17;
    } else if (puntaje == 19) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//C
if (edad === "6,4" && subtest === "C") {
for (let i = 0; i <= 42; i++) {
  if (puntaje == 0) {
    equivalencia = 2;
  } else if (puntaje == 1) {
    equivalencia = 3;
  } else if (puntaje <= 3) {
    equivalencia = 4;
  } else if (puntaje == 4) {
    equivalencia = 5;
  } else if (puntaje <= 6) {
    equivalencia = 6;
  } else if (puntaje == 7) {
    equivalencia = 7;
  } else if (puntaje <= 9) {
    equivalencia = 8;
  } else if (puntaje == 10) {
    equivalencia = 9;
  } else if (puntaje <= 12) {
    equivalencia = 10;
  } else if (puntaje == 13) {
    equivalencia = 11;
  } else if (puntaje == 14) {
    equivalencia = 12;
  } else if (puntaje <= 16) {
    equivalencia = 13;
  } else if (puntaje == 17) {
    equivalencia = 14;
  } else if (puntaje == 18) {
    equivalencia = 15;
  } else if (puntaje == 19) {
    equivalencia = 16;
  } else if (puntaje <= 22) {
    equivalencia = 17;
  } else if (puntaje == 23) {
    equivalencia = 18;
  } else {
    equivalencia = 19;
  }
  var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
  inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
  }
}

//BS
if (edad === "6,4" && subtest === "BS") {
for (let i = 0; i <= 45; i++) {
  if (puntaje <= 1) {
    equivalencia = 2;
  } else if (puntaje <= 3) {
    equivalencia = 3;
  } else if (puntaje <= 5) {
    equivalencia = 4;
  } else if (puntaje <= 7) {
    equivalencia = 5;
  } else if (puntaje <= 9) {
    equivalencia = 6;
  } else if (puntaje <= 12) {
    equivalencia = 7;
  } else if (puntaje <= 14) {
    equivalencia = 8;
  } else if (puntaje <= 16) {
    equivalencia = 9;
  } else if (puntaje <= 18) {
    equivalencia = 10;
  } else if (puntaje <= 20) {
    equivalencia = 11;
  } else if (puntaje <= 22) {
    equivalencia = 12;
  } else if (puntaje <= 24) {
    equivalencia = 13;
  } else if (puntaje <= 27) {
    equivalencia = 14;
  } else if (puntaje <= 29) {
    equivalencia = 15;
  } else if (puntaje <= 31) {
    equivalencia = 16;
  } else if (puntaje <= 33) {
    equivalencia = 17;
  } else if (puntaje <= 35) {
    equivalencia = 18;
  } else {
    equivalencia = 19;
  }
  var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
  inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
  }
}

//CF
if (edad === "6,4" && subtest === "CF") {
for (let i = 0; i <= 38; i++) {
  if (puntaje <= 1) {
    equivalencia = 2;
  } else if (puntaje == 2) {
    equivalencia = 3;
  } else if (puntaje <= 4) {
    equivalencia = 4;
  } else if (puntaje <= 6) {
    equivalencia = 5;
  } else if (puntaje == 7) {
    equivalencia = 6;
  } else if (puntaje <= 9) {
    equivalencia = 7;
  } else if (puntaje == 10) {
    equivalencia = 8;
  } else if (puntaje <= 12) {
    equivalencia = 9;
  } else if (puntaje <= 14) {
    equivalencia = 10;
  } else if (puntaje == 15) {
    equivalencia = 11;
  } else if (puntaje <= 17) {
    equivalencia = 12;
  } else if (puntaje == 18) {
    equivalencia = 13;
  } else if (puntaje <= 20) {
    equivalencia = 14;
  } else if (puntaje <= 22) {
    equivalencia = 15;
  } else if (puntaje == 23) {
    equivalencia = 16;
  } else if (puntaje <= 25) {
    equivalencia = 17;
  } else if (puntaje == 26) {
    equivalencia = 18;
  } else {
    equivalencia = 19;
  }
  var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
  inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
  }
}

//A
if (edad === "6,4" && subtest === "A") {
for (let i = 0; i <= 136; i++) {
  if (puntaje <= 2) {
    equivalencia = 1;
  } else if (puntaje <= 6) {
    equivalencia = 2;
  } else if (puntaje <= 12) {
    equivalencia = 3;
  } else if (puntaje <= 17) {
    equivalencia = 4;
  } else if (puntaje <= 22) {
    equivalencia = 5;
  } else if (puntaje <= 27) {
    equivalencia = 6;
  } else if (puntaje <= 32) {
    equivalencia = 7;
  } else if (puntaje <= 37) {
    equivalencia = 8;
  } else if (puntaje <= 42) {
    equivalencia = 9;
  } else if (puntaje <= 46) {
    equivalencia = 10;
  } else if (puntaje <= 51) {
    equivalencia = 11;
  } else if (puntaje <= 56) {
    equivalencia = 12;
  } else if (puntaje <= 61) {
    equivalencia = 13;
  } else if (puntaje <= 66) {
    equivalencia = 14;
  } else if (puntaje <= 71) {
    equivalencia = 15;
  } else if (puntaje <= 76) {
    equivalencia = 16;
  } else if (puntaje <= 80) {
    equivalencia = 17;
  } else if (puntaje <= 83) {
    equivalencia = 18;
  } else {
    equivalencia = 19;
  }
  var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
  inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
  }
}

//I
if (edad === "6,4" && subtest === "I") {
for (let i = 0; i <= 33; i++) {
  if (puntaje <= 2) {
    equivalencia = 1;
  } else if (puntaje == 3) {
    equivalencia = 2;
  } else if (puntaje == 4) {
    equivalencia = 3;
  } else if (puntaje == 5) {
    equivalencia = 4;
  } else if (puntaje == 6) {
    equivalencia = 6;
  } else if (puntaje == 7) {
    equivalencia = 7;
  } else if (puntaje == 8) {
    equivalencia = 9;
  } else if (puntaje == 9) {
    equivalencia = 11;
  } else if (puntaje == 10) {
    equivalencia = 13;
  } else if (puntaje == 11) {
    equivalencia = 14;
  } else if (puntaje == 12) {
    equivalencia = 15;
  } else if (puntaje == 13) {
    equivalencia = 17;
  } else if (puntaje == 14) {
    equivalencia = 18;
  } else {
    equivalencia = 19;
  }
  var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
  inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
  }
}

//AR
if (edad === "6,4" && subtest === "AR") {
for (let i = 0; i <= 34; i++) {
  if (puntaje <= 1) {
    equivalencia = 1;
  } else if (puntaje == 2) {
    equivalencia = 2;
  } else if (puntaje == 3) {
    equivalencia = 3;
  } else if (puntaje <= 5) {
    equivalencia = 4;
  } else if (puntaje == 6) {
    equivalencia = 5;
  } else if (puntaje == 7) {
    equivalencia = 6;
  } else if (puntaje == 8) {
    equivalencia = 7;
  } else if (puntaje <= 10) {
    equivalencia = 8;
  } else if (puntaje == 11) {
    equivalencia = 9;
  } else if (puntaje == 12) {
    equivalencia = 10;
  } else if (puntaje <= 14) {
    equivalencia = 11;
  } else if (puntaje == 15) {
    equivalencia = 12;
  } else if (puntaje == 16) {
    equivalencia = 13;
  } else if (puntaje <= 18) {
    equivalencia = 14;
  } else if (puntaje == 19) {
    equivalencia = 15;
  } else if (puntaje == 20) {
    equivalencia = 16;
  } else if (puntaje == 21) {
    equivalencia = 17;
  } else if (puntaje <= 23) {
    equivalencia = 18;
  } else {
    equivalencia = 19;
  }
  var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
  inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
  }
}

//AD
if (edad === "6,4" && subtest === "AD") {
  for (let i = 0; i <= 24; i++) {
    if (puntaje == 0) {
      equivalencia = 1;
    } else if (puntaje == 1) {
      equivalencia = 2;
    } else if (puntaje == 2) {
      equivalencia = 3;
    } else if (puntaje == 3) {
      equivalencia = 4;
    } else if (puntaje == 4) {
      equivalencia = 5;
    } else if (puntaje == 5) {
      equivalencia = 6;
    } else if (puntaje == 6) {
      equivalencia = 7;
    } else if (puntaje == 7) {
      equivalencia = 8;
    } else if (puntaje == 8) {
      equivalencia = 10;
    } else if (puntaje == 9) {
      equivalencia = 11;
    } else if (puntaje == 10) {
      equivalencia = 12;
    } else if (puntaje == 11) {
      equivalencia = 13;
    } else if (puntaje == 12) {
      equivalencia = 14;
    } else if (puntaje == 13) {
      equivalencia = 15;
    } else if (puntaje == 14) {
      equivalencia = 16;
    } else if (puntaje == 15) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }


//Edad 6,8 a 6,11
//CC
if (edad === "6,8" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 1) {
      equivalencia = 3;
    } else if (puntaje == 2) {
      equivalencia = 4;
    } else if (puntaje <= 5) {
      equivalencia = 5;
    } else if (puntaje <= 8) {
      equivalencia = 6;
    } else if (puntaje <= 11) {
      equivalencia = 7;
    } else if (puntaje <= 13) {
      equivalencia = 8;
    } else if (puntaje <= 16) {
      equivalencia = 9;
    } else if (puntaje <= 19) {
      equivalencia = 10;
    } else if (puntaje <= 22) {
      equivalencia = 11;
    } else if (puntaje <= 25) {
      equivalencia = 12;
    } else if (puntaje <= 27) {
      equivalencia = 13;
    } else if (puntaje <= 30) {
      equivalencia = 14;
    } else if (puntaje <= 33) {
      equivalencia = 15;
    } else if (puntaje <= 36) {
      equivalencia = 16;
    } else if (puntaje <= 38) {
      equivalencia = 17;
    } else if (puntaje <= 41) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "6,8" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
     if (puntaje == 0) {
      equivalencia = 4;
    } else if (puntaje <= 2) {
      equivalencia = 5;
    } else if (puntaje == 3) {
      equivalencia = 6;
    } else if (puntaje <= 5) {
      equivalencia = 7;
    } else if (puntaje == 6) {
      equivalencia = 8;
    } else if (puntaje == 7) {
      equivalencia = 9;
    } else if (puntaje <= 9) {
      equivalencia = 10;
    } else if (puntaje == 10) {
      equivalencia = 11;
    } else if (puntaje <= 12) {
      equivalencia = 12;
    } else if (puntaje == 13) {
      equivalencia = 13;
    } else if (puntaje == 14) {
      equivalencia = 14;
    } else if (puntaje <= 16) {
      equivalencia = 15;
    } else if (puntaje == 17) {
      equivalencia = 16;
    } else if (puntaje <= 19) {
      equivalencia = 17;
    } else if (puntaje == 20) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

  //RD
  if (edad === "6,8" && subtest === "RD") {
    for (let i = 0; i <= 32; i++) {
      if (puntaje <= 2) {
        equivalencia = 1;
      } else if (puntaje == 3) {
        equivalencia = 2;
      } else if (puntaje == 4) {
        equivalencia = 3;
      } else if (puntaje == 5) {
        equivalencia = 4;
      } else if (puntaje == 6) {
        equivalencia = 5;
      } else if (puntaje == 7) {
        equivalencia = 6;
      } else if (puntaje == 8) {
        equivalencia = 7;
      } else if (puntaje == 9) {
        equivalencia = 8;
      } else if (puntaje == 10) {
        equivalencia = 9;
      } else if (puntaje == 11) {
        equivalencia = 10;
      } else if (puntaje == 12) {
        equivalencia = 11;
      } else if (puntaje == 13) {
        equivalencia = 13;
      } else if (puntaje == 14) {
        equivalencia = 14;
      } else if (puntaje == 15) {
        equivalencia = 15;
      } else if (puntaje == 16) {
        equivalencia = 16;
      } else if (puntaje == 17) {
        equivalencia = 17;
      } else if (puntaje == 18) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //CO
  if (edad === "6,8" && subtest === "CO") {
    for (let i = 0; i <= 28; i++) {
      if (puntaje == 0) {
        equivalencia = 1;
      } else if (puntaje == 1) {
        equivalencia = 2;
      } else if (puntaje == 2) {
        equivalencia = 3;
      } else if (puntaje == 3) {
        equivalencia = 4;
      } else if (puntaje == 4) {
        equivalencia = 5;
      } else if (puntaje == 5) {
        equivalencia = 6;
      } else if (puntaje <= 7) {
        equivalencia = 7;
      } else if (puntaje == 8) {
        equivalencia = 8;
      } else if (puntaje == 9) {
        equivalencia = 9;
      } else if (puntaje <= 11) {
        equivalencia = 10;
      } else if (puntaje == 12) {
        equivalencia = 11;
      } else if (puntaje == 13) {
        equivalencia = 12;
      } else if (puntaje <= 15) {
        equivalencia = 13;
      } else if (puntaje == 16) {
        equivalencia = 14;
      } else if (puntaje <= 18) {
        equivalencia = 15;
      } else if (puntaje == 19) {
        equivalencia = 16;
      } else if (puntaje == 20) {
        equivalencia = 17;
      } else if (puntaje <= 22) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //CL
  if (edad === "6,8" && subtest === "CL") {
    for (let i = 0; i <= 65; i++) {
      if (puntaje <= 3) {
        equivalencia = 1;
      } else if (puntaje <= 7) {
        equivalencia = 2;
      } else if (puntaje <= 11) {
        equivalencia = 3;
      } else if (puntaje <= 15) {
        equivalencia = 4;
      } else if (puntaje <= 19) {
        equivalencia = 5;
      } else if (puntaje <= 23) {
        equivalencia = 6;
      } else if (puntaje <= 27) {
        equivalencia = 7;
      } else if (puntaje <= 31) {
        equivalencia = 8;
      } else if (puntaje <= 34) {
        equivalencia = 9;
      } else if (puntaje <= 38) {
        equivalencia = 10;
      } else if (puntaje <= 42) {
        equivalencia = 11;
      } else if (puntaje <= 46) {
        equivalencia = 12;
      } else if (puntaje <= 50) {
        equivalencia = 13;
      } else if (puntaje <= 54) {
        equivalencia = 14;
      } else if (puntaje <= 59) {
        equivalencia = 15;
      } else if (puntaje <= 61) {
        equivalencia = 16;
      } else if (puntaje <= 63) {
        equivalencia = 17;
      } else if (puntaje == 64) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //V
  if (edad === "6,8" && subtest === "V") {
    for (let i = 0; i <= 68; i++) {
      if (puntaje <= 2) {
        equivalencia = 1;
      } else if (puntaje <= 5) {
        equivalencia = 2;
      } else if (puntaje <= 7) {
        equivalencia = 3;
      } else if (puntaje <= 9) {
        equivalencia = 4;
      } else if (puntaje <= 11) {
        equivalencia = 5;
      } else if (puntaje <= 14) {
        equivalencia = 6;
      } else if (puntaje <= 16) {
        equivalencia = 7;
      } else if (puntaje <= 18) {
        equivalencia = 8;
      } else if (puntaje <= 21) {
        equivalencia = 9;
      } else if (puntaje <= 23) {
        equivalencia = 10;
      } else if (puntaje <= 25) {
        equivalencia = 11;
      } else if (puntaje <= 28) {
        equivalencia = 12;
      } else if (puntaje <= 30) {
        equivalencia = 13;
      } else if (puntaje <= 33) {
        equivalencia = 14;
      } else if (puntaje <= 35) {
        equivalencia = 15;
      } else if (puntaje <= 37) {
        equivalencia = 16;
      } else if (puntaje <= 40) {
        equivalencia = 17;
      } else if (puntaje <= 42) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //LN
  if (edad === "6,8" && subtest === "LN") {
    for (let i = 0; i <= 30; i++) {
      if (puntaje == 0) {
        equivalencia = 3;
      } else if (puntaje <= 2) {
        equivalencia = 4;
      } else if (puntaje == 3) {
        equivalencia = 5;
      } else if (puntaje == 4) {
        equivalencia = 6;
      } else if (puntaje == 5) {
        equivalencia = 7;
      } else if (puntaje <= 7) {
        equivalencia = 8;
      } else if (puntaje == 8) {
        equivalencia = 9;
      } else if (puntaje == 9) {
        equivalencia = 10;
      } else if (puntaje <= 11) {
        equivalencia = 11;
      } else if (puntaje == 12) {
        equivalencia = 12;
      } else if (puntaje == 13) {
        equivalencia = 13;
      } else if (puntaje <= 15) {
        equivalencia = 14;
      } else if (puntaje == 16) {
        equivalencia = 15;
      } else if (puntaje == 17) {
        equivalencia = 16;
      } else if (puntaje <= 19) {
        equivalencia = 17;
      } else if (puntaje == 20) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //M
  if (edad === "6,8" && subtest === "M") {
    for (let i = 0; i <= 35; i++) {
      if (puntaje == 0) {
        equivalencia = 1;
      } else if (puntaje == 1) {
        equivalencia = 2;
      } else if (puntaje <= 3) {
        equivalencia = 3;
      } else if (puntaje == 4) {
        equivalencia = 4;
      } else if (puntaje == 5) {
        equivalencia = 5;
      } else if (puntaje == 6) {
        equivalencia = 6;
      } else if (puntaje == 7) {
        equivalencia = 7;
      } else if (puntaje == 8) {
        equivalencia = 8;
      } else if (puntaje == 9) {
        equivalencia = 9;
      } else if (puntaje == 10) {
        equivalencia = 10;
      } else if (puntaje <= 12) {
        equivalencia = 11;
      } else if (puntaje == 13) {
        equivalencia = 12;
      } else if (puntaje == 14) {
        equivalencia = 13;
      } else if (puntaje == 15) {
        equivalencia = 14;
      } else if (puntaje == 16) {
        equivalencia = 15;
      } else if (puntaje == 17) {
        equivalencia = 16;
      } else if (puntaje == 18) {
        equivalencia = 17;
      } else if (puntaje == 19) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //C
  if (edad === "6,8" && subtest === "C") {
    for (let i = 0; i <= 42; i++) {
      if (puntaje == 0) {
        equivalencia = 2;
      } else if (puntaje == 1) {
        equivalencia = 3;
      } else if (puntaje <= 3) {
        equivalencia = 4;
      } else if (puntaje == 4) {
        equivalencia = 5;
      } else if (puntaje <= 6) {
        equivalencia = 6;
      } else if (puntaje <= 8) {
        equivalencia = 7;
      } else if (puntaje == 9) {
        equivalencia = 8;
      } else if (puntaje == 10) {
        equivalencia = 9;
      } else if (puntaje <= 12) {
        equivalencia = 10;
      } else if (puntaje == 13) {
        equivalencia = 11;
      } else if (puntaje == 14) {
        equivalencia = 12;
      } else if (puntaje <= 16) {
        equivalencia = 13;
      } else if (puntaje == 17) {
        equivalencia = 14;
      } else if (puntaje == 18) {
        equivalencia = 15;
      } else if (puntaje <= 20) {
        equivalencia = 16;
      } else if (puntaje <= 22) {
        equivalencia = 17;
      } else if (puntaje == 23) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //BS
  if (edad === "6,8" && subtest === "BS") {
    for (let i = 0; i <= 45; i++) {
      if (puntaje == 0) {
        equivalencia = 1;
      } else if (puntaje <= 3) {
        equivalencia = 2;
      } else if (puntaje <= 5) {
        equivalencia = 3;
      } else if (puntaje <= 8) {
        equivalencia = 4;
      } else if (puntaje <= 10) {
        equivalencia = 5;
      } else if (puntaje <= 12) {
        equivalencia = 6;
      } else if (puntaje <= 15) {
        equivalencia = 7;
      } else if (puntaje <= 17) {
        equivalencia = 8;
      } else if (puntaje <= 19) {
        equivalencia = 9;
      } else if (puntaje <= 22) {
        equivalencia = 10;
      } else if (puntaje <= 24) {
        equivalencia = 11;
      } else if (puntaje <= 26) {
        equivalencia = 12;
      } else if (puntaje <= 29) {
        equivalencia = 13;
      } else if (puntaje <= 31) {
        equivalencia = 14;
      } else if (puntaje <= 33) {
        equivalencia = 15;
      } else if (puntaje <= 36) {
        equivalencia = 16;
      } else if (puntaje <= 38) {
        equivalencia = 17;
      } else if (puntaje <= 40) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //CF
  if (edad === "6,8" && subtest === "CF") {
    for (let i = 0; i <= 38; i++) {
      if (puntaje == 0) {
        equivalencia = 1;
      } else if (puntaje <= 2) {
        equivalencia = 2;
      } else if (puntaje == 3) {
        equivalencia = 3;
      } else if (puntaje <= 5) {
        equivalencia = 4;
      } else if (puntaje <= 7) {
        equivalencia = 5;
      } else if (puntaje == 8) {
        equivalencia = 6;
      } else if (puntaje <= 10) {
        equivalencia = 7;
      } else if (puntaje == 11) {
        equivalencia = 8;
      } else if (puntaje <= 13) {
        equivalencia = 9;
      } else if (puntaje == 14) {
        equivalencia = 10;
      } else if (puntaje <= 16) {
        equivalencia = 11;
      } else if (puntaje == 17) {
        equivalencia = 12;
      } else if (puntaje <= 19) {
        equivalencia = 13;
      } else if (puntaje == 20) {
        equivalencia = 14;
      } else if (puntaje <= 22) {
        equivalencia = 15;
      } else if (puntaje == 23) {
        equivalencia = 16;
      } else if (puntaje <= 25) {
        equivalencia = 17;
      } else if (puntaje <= 27) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //A
  if (edad === "6,8" && subtest === "A") {
    for (let i = 0; i <= 136; i++) {
      if (puntaje <= 4) {
        equivalencia = 1;
      } else if (puntaje <= 6) {
        equivalencia = 2;
      } else if (puntaje <= 13) {
        equivalencia = 3;
      } else if (puntaje <= 17) {
        equivalencia = 4;
      } else if (puntaje <= 23) {
        equivalencia = 5;
      } else if (puntaje <= 28) {
        equivalencia = 6;
      } else if (puntaje <= 34) {
        equivalencia = 7;
      } else if (puntaje <= 39) {
        equivalencia = 8;
      } else if (puntaje <= 45) {
        equivalencia = 9;
      } else if (puntaje <= 49) {
        equivalencia = 10;
      } else if (puntaje <= 53) {
        equivalencia = 11;
      } else if (puntaje <= 58) {
        equivalencia = 12;
      } else if (puntaje <= 62) {
        equivalencia = 13;
      } else if (puntaje <= 67) {
        equivalencia = 14;
      } else if (puntaje <= 71) {
        equivalencia = 15;
      } else if (puntaje <= 77) {
        equivalencia = 16;
      } else if (puntaje <= 80) {
        equivalencia = 17;
      } else if (puntaje <= 84) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }
  
  //I
  if (edad === "6,8" && subtest === "I") {
    for (let i = 0; i <= 33; i++) {
      if (puntaje <= 2) {
        equivalencia = 1;
      } else if (puntaje == 3) {
        equivalencia = 2;
      } else if (puntaje == 4) {
        equivalencia = 3;
      } else if (puntaje == 5) {
        equivalencia = 4;
      } else if (puntaje == 6) {
        equivalencia = 6;
      } else if (puntaje == 7) {
        equivalencia = 7;
      } else if (puntaje == 8) {
        equivalencia = 9;
      } else if (puntaje == 9) {
        equivalencia = 10;
      } else if (puntaje == 10) {
        equivalencia = 12;
      } else if (puntaje == 11) {
        equivalencia = 13;
      } else if (puntaje == 12) {
        equivalencia = 15;
      } else if (puntaje == 13) {
        equivalencia = 16;
      } else if (puntaje == 14) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }
  
  //AR
  if (edad === "6,8" && subtest === "AR") {
    for (let i = 0; i <= 34; i++) {
      if (puntaje <= 1) {
        equivalencia = 1;
      } else if (puntaje == 2) {
        equivalencia = 2;
      } else if (puntaje == 3) {
        equivalencia = 3;
      } else if (puntaje <= 5) {
        equivalencia = 4;
      } else if (puntaje == 6) {
        equivalencia = 5;
      } else if (puntaje == 7) {
        equivalencia = 6;
      } else if (puntaje <= 9) {
        equivalencia = 7;
      } else if (puntaje == 10) {
        equivalencia = 8;
      } else if (puntaje <= 12) {
        equivalencia = 9;
      } else if (puntaje == 13) {
        equivalencia = 10;
      } else if (puntaje == 14) {
        equivalencia = 11;
      } else if (puntaje <= 16) {
        equivalencia = 12;
      } else if (puntaje == 17) {
        equivalencia = 13;
      } else if (puntaje == 18) {
        equivalencia = 14;
      } else if (puntaje <= 20) {
        equivalencia = 15;
      } else if (puntaje == 21) {
        equivalencia = 16;
      } else if (puntaje == 22) {
        equivalencia = 17;
      } else if (puntaje <= 24) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //AD
  if (edad === "6,8" && subtest === "AD") {
    for (let i = 0; i <= 24; i++) {
      if (puntaje == 0) {
        equivalencia = 1;
      } else if (puntaje == 1) {
        equivalencia = 2;
      } else if (puntaje == 2) {
        equivalencia = 3;
      } else if (puntaje == 3) {
        equivalencia = 4;
      } else if (puntaje == 4) {
        equivalencia = 5;
      } else if (puntaje == 5) {
        equivalencia = 6;
      } else if (puntaje == 6) {
        equivalencia = 7;
      } else if (puntaje == 7) {
        equivalencia = 8;
      } else if (puntaje == 8) {
        equivalencia = 9;
      } else if (puntaje == 9) {
        equivalencia = 10;
      } else if (puntaje == 10) {
        equivalencia = 11;
      } else if (puntaje == 11) {
        equivalencia = 13;
      } else if (puntaje == 12) {
        equivalencia = 14;
      } else if (puntaje == 13) {
        equivalencia = 15;
      } else if (puntaje == 14) {
        equivalencia = 16;
      } else if (puntaje == 15) {
        equivalencia = 17;
      } else if (puntaje == 16) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }


//Edad 7 a 7,3
  //CC
  if (edad === "7,0" && subtest === "CC") {
    for (let i = 0; i <= 68; i++) {
      if (puntaje <= 1) {
        equivalencia = 3;
      } else if (puntaje == 2) {
        equivalencia = 4;
      } else if (puntaje <= 5) {
        equivalencia = 5;
      } else if (puntaje <= 8) {
        equivalencia = 6;
      } else if (puntaje <= 12) {
        equivalencia = 7;
      } else if (puntaje <= 15) {
        equivalencia = 8;
      } else if (puntaje <= 18) {
        equivalencia = 9;
      } else if (puntaje <= 21) {
        equivalencia = 10;
      } else if (puntaje <= 24) {
        equivalencia = 11;
      } else if (puntaje <= 27) {
        equivalencia = 12;
      } else if (puntaje <= 30) {
        equivalencia = 13;
      } else if (puntaje <= 34) {
        equivalencia = 14;
      } else if (puntaje <= 37) {
        equivalencia = 15;
      } else if (puntaje <= 40) {
        equivalencia = 16;
      } else if (puntaje <= 43) {
        equivalencia = 17;
      } else if (puntaje <= 46) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //S
  if (edad === "7,0" && subtest === "S") {
    for (let i = 0; i <= 44; i++) {
      if (puntaje == 0) {
        equivalencia = 3;
      } else if (puntaje == 1) {
        equivalencia = 4;
      } else if (puntaje == 2) {
        equivalencia = 5;
      } else if (puntaje <= 4) {
        equivalencia = 6;
      } else if (puntaje == 5) {
        equivalencia = 7;
      } else if (puntaje <= 7) {
        equivalencia = 8;
      } else if (puntaje == 8) {
        equivalencia = 9;
      } else if (puntaje == 9) {
        equivalencia = 10;
      } else if (puntaje <= 11) {
        equivalencia = 11;
      } else if (puntaje == 12) {
        equivalencia = 12;
      } else if (puntaje == 13) {
        equivalencia = 13;
      } else if (puntaje <= 15) {
        equivalencia = 14;
      } else if (puntaje == 16) {
        equivalencia = 15;
      } else if (puntaje <= 18) {
        equivalencia = 16;
      } else if (puntaje <= 21) {
        equivalencia = 17;
      } else if (puntaje == 22) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //RD
  if (edad === "7,0" && subtest === "RD") {
    for (let i = 0; i <= 32; i++) {
      if (puntaje <= 3) {
        equivalencia = 1;
      } else if (puntaje == 4) {
        equivalencia = 2;
      } else if (puntaje <= 6) {
        equivalencia = 3;
      } else if (puntaje == 7) {
        equivalencia = 4;
      } else if (puntaje == 8) {
        equivalencia = 5;
      } else if (puntaje == 9) {
        equivalencia = 7;
      } else if (puntaje == 10) {
        equivalencia = 8;
      } else if (puntaje == 11) {
        equivalencia = 9;
      } else if (puntaje == 12) {
        equivalencia = 11;
      } else if (puntaje == 13) {
        equivalencia = 12;
      } else if (puntaje == 14) {
        equivalencia = 13;
      } else if (puntaje == 15) {
        equivalencia = 14;
      } else if (puntaje == 16) {
        equivalencia = 16;
      } else if (puntaje == 17) {
        equivalencia = 17;
      } else if (puntaje == 18) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }
  
  //CO
  if (edad === "7,0" && subtest === "CO") {
    for (let i = 0; i <= 28; i++) {
      if (puntaje == 0) {
        equivalencia = 1;
      } else if (puntaje == 1) {
        equivalencia = 2;
      } else if (puntaje == 2) {
        equivalencia = 3;
      } else if (puntaje <= 4) {
        equivalencia = 4;
      } else if (puntaje <= 6) {
        equivalencia = 5;
      } else if (puntaje == 7) {
        equivalencia = 6;
      } else if (puntaje <= 9) {
        equivalencia = 7;
      } else if (puntaje == 10) {
        equivalencia = 8;
      } else if (puntaje == 11) {
        equivalencia = 9;
      } else if (puntaje <= 13) {
        equivalencia = 10;
      } else if (puntaje == 14) {
        equivalencia = 11;
      } else if (puntaje == 15) {
        equivalencia = 12;
      } else if (puntaje <= 17) {
        equivalencia = 13;
      } else if (puntaje == 18) {
        equivalencia = 14;
      } else if (puntaje == 19) {
        equivalencia = 15;
      } else if (puntaje <= 21) {
        equivalencia = 16;
      } else if (puntaje == 22) {
        equivalencia = 17;
      } else if (puntaje == 23) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //CL
  if (edad === "7,0" && subtest === "CL") {
    for (let i = 0; i <= 65; i++) {
      if (puntaje <= 4) {
        equivalencia = 1;
      } else if (puntaje <= 10) {
        equivalencia = 2;
      } else if (puntaje <= 13) {
        equivalencia = 3;
      } else if (puntaje <= 19) {
        equivalencia = 4;
      } else if (puntaje <= 22) {
        equivalencia = 5;
      } else if (puntaje <= 28) {
        equivalencia = 6;
      } else if (puntaje <= 31) {
        equivalencia = 7;
      } else if (puntaje <= 37) {
        equivalencia = 8;
      } else if (puntaje <= 40) {
        equivalencia = 9;
      } else if (puntaje <= 45) {
        equivalencia = 10;
      } else if (puntaje <= 50) {
        equivalencia = 11;
      } else if (puntaje <= 52) {
        equivalencia = 12;
      } else if (puntaje <= 55) {
        equivalencia = 13;
      } else if (puntaje <= 57) {
        equivalencia = 14;
      } else if (puntaje <= 60) {
        equivalencia = 15;
      } else if (puntaje <= 62) {
        equivalencia = 16;
      } else if (puntaje == 63) {
        equivalencia = 17;
      } else if (puntaje == 64) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //V
  if (edad === "7,0" && subtest === "V") {
    for (let i = 0; i <= 68; i++) {
      if (puntaje <= 3) {
        equivalencia = 1;
      } else if (puntaje <= 5) {
        equivalencia = 2;
      } else if (puntaje <= 7) {
        equivalencia = 3;
      } else if (puntaje <= 9) {
        equivalencia = 4;
      } else if (puntaje <= 12) {
        equivalencia = 5;
      } else if (puntaje <= 15) {
        equivalencia = 6;
      } else if (puntaje <= 18) {
        equivalencia = 7;
      } else if (puntaje <= 21) {
        equivalencia = 8;
      } else if (puntaje <= 23) {
        equivalencia = 9;
      } else if (puntaje <= 26) {
        equivalencia = 10;
      } else if (puntaje <= 28) {
        equivalencia = 11;
      } else if (puntaje <= 31) {
        equivalencia = 12;
      } else if (puntaje <= 33) {
        equivalencia = 13;
      } else if (puntaje <= 35) {
        equivalencia = 14;
      } else if (puntaje <= 37) {
        equivalencia = 15;
      } else if (puntaje <= 39) {
        equivalencia = 16;
      } else if (puntaje <= 41) {
        equivalencia = 17;
      } else if (puntaje <= 43) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //LN
  if (edad === "7,0" && subtest === "LN") {
    for (let i = 0; i <= 30; i++) {
      if (puntaje == 0) {
        equivalencia = 1;
      } else if (puntaje == 1) {
        equivalencia = 2;
      } else if (puntaje == 2) {
        equivalencia = 3;
      } else if (puntaje == 3) {
        equivalencia = 4;
      } else if (puntaje == 4) {
        equivalencia = 5;
      } else if (puntaje == 5) {
        equivalencia = 6;
      } else if (puntaje == 6) {
        equivalencia = 7;
      } else if (puntaje <= 8) {
        equivalencia = 8;
      } else if (puntaje == 9) {
        equivalencia = 9;
      } else if (puntaje == 10) {
        equivalencia = 10;
      } else if (puntaje <= 12) {
        equivalencia = 11;
      } else if (puntaje == 13) {
        equivalencia = 12;
      } else if (puntaje <= 15) {
        equivalencia = 13;
      } else if (puntaje == 16) {
        equivalencia = 14;
      } else if (puntaje == 17) {
        equivalencia = 15;
      } else if (puntaje == 18) {
        equivalencia = 16;
      } else if (puntaje == 19) {
        equivalencia = 17;
      } else if (puntaje == 20) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //M
  if (edad === "7,0" && subtest === "M") {
    for (let i = 0; i <= 35; i++) {
      if (puntaje == 0) {
        equivalencia = 1;
      } else if (puntaje <= 2) {
        equivalencia = 2;
      } else if (puntaje == 3) {
        equivalencia = 3;
      } else if (puntaje == 4) {
        equivalencia = 4;
      } else if (puntaje <= 6) {
        equivalencia = 5;
      } else if (puntaje == 7) {
        equivalencia = 6;
      } else if (puntaje == 8) {
        equivalencia = 7;
      } else if (puntaje <= 10) {
        equivalencia = 8;
      } else if (puntaje == 11) {
        equivalencia = 9;
      } else if (puntaje == 12) {
        equivalencia = 10;
      } else if (puntaje <= 14) {
        equivalencia = 11;
      } else if (puntaje == 15) {
        equivalencia = 12;
      } else if (puntaje == 16) {
        equivalencia = 13;
      } else if (puntaje <= 18) {
        equivalencia = 14;
      } else if (puntaje == 19) {
        equivalencia = 15;
      } else if (puntaje == 20) {
        equivalencia = 16;
      } else if (puntaje == 21) {
        equivalencia = 17;
      } else if (puntaje == 22) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //C
  if (edad === "7,0" && subtest === "C") {
    for (let i = 0; i <= 42; i++) {
      if (puntaje == 0) {
        equivalencia = 2;
      } else if (puntaje == 1) {
        equivalencia = 3;
      } else if (puntaje <= 3) {
        equivalencia = 4;
      } else if (puntaje == 4) {
        equivalencia = 5;
      } else if (puntaje <= 6) {
        equivalencia = 6;
      } else if (puntaje <= 8) {
        equivalencia = 7;
      } else if (puntaje == 9) {
        equivalencia = 8;
      } else if (puntaje <= 11) {
        equivalencia = 9;
      } else if (puntaje <= 13) {
        equivalencia = 10;
      } else if (puntaje == 14) {
        equivalencia = 11;
      } else if (puntaje <= 16) {
        equivalencia = 12;
      } else if (puntaje <= 18) {
        equivalencia = 13;
      } else if (puntaje <= 20) {
        equivalencia = 14;
      } else if (puntaje == 21) {
        equivalencia = 15;
      } else if (puntaje <= 23) {
        equivalencia = 16;
      } else if (puntaje <= 25) {
        equivalencia = 17;
      } else if (puntaje == 26) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //BS
  if (edad === "7,0" && subtest === "BS") {
    for (let i = 0; i <= 45; i++) {
      if (puntaje == 0) {
        equivalencia = 1;
      } else if (puntaje <= 3) {
        equivalencia = 2;
      } else if (puntaje <= 5) {
        equivalencia = 3;
      } else if (puntaje <= 8) {
        equivalencia = 4;
      } else if (puntaje <= 11) {
        equivalencia = 5;
      } else if (puntaje <= 13) {
        equivalencia = 6;
      } else if (puntaje <= 16) {
        equivalencia = 7;
      } else if (puntaje <= 18) {
        equivalencia = 8;
      } else if (puntaje <= 21) {
        equivalencia = 9;
      } else if (puntaje <= 24) {
        equivalencia = 10;
      } else if (puntaje <= 26) {
        equivalencia = 11;
      } else if (puntaje <= 29) {
        equivalencia = 12;
      } else if (puntaje <= 31) {
        equivalencia = 13;
      } else if (puntaje <= 33) {
        equivalencia = 14;
      } else if (puntaje <= 35) {
        equivalencia = 15;
      } else if (puntaje <= 37) {
        equivalencia = 16;
      } else if (puntaje <= 40) {
        equivalencia = 17;
      } else if (puntaje <= 42) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //CF
  if (edad === "7,0" && subtest === "CF") {
    for (let i = 0; i <= 38; i++) {
      if (puntaje <= 1) {
        equivalencia = 1;
      } else if (puntaje == 2) {
        equivalencia = 2;
      } else if (puntaje <= 4) {
        equivalencia = 3;
      } else if (puntaje <= 6) {
        equivalencia = 4;
      } else if (puntaje == 7) {
        equivalencia = 5;
      } else if (puntaje <= 9) {
        equivalencia = 6;
      } else if (puntaje <= 11) {
        equivalencia = 7;
      } else if (puntaje == 12) {
        equivalencia = 8;
      } else if (puntaje <= 14) {
        equivalencia = 9;
      } else if (puntaje <= 16) {
        equivalencia = 10;
      } else if (puntaje == 17) {
        equivalencia = 11;
      } else if (puntaje <= 19) {
        equivalencia = 12;
      } else if (puntaje <= 21) {
        equivalencia = 13;
      } else if (puntaje == 22) {
        equivalencia = 14;
      } else if (puntaje <= 24) {
        equivalencia = 15;
      } else if (puntaje == 25) {
        equivalencia = 16;
      } else if (puntaje <= 27) {
        equivalencia = 17;
      } else if (puntaje <= 29) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //A
  if (edad === "7,0" && subtest === "A") {
    for (let i = 0; i <= 136; i++) {
      if (puntaje <= 5) {
        equivalencia = 1;
      } else if (puntaje <= 7) {
        equivalencia = 2;
      } else if (puntaje <= 13) {
        equivalencia = 3;
      } else if (puntaje <= 18) {
        equivalencia = 4;
      } else if (puntaje <= 23) {
        equivalencia = 5;
      } else if (puntaje <= 29) {
        equivalencia = 6;
      } else if (puntaje <= 34) {
        equivalencia = 7;
      } else if (puntaje <= 40) {
        equivalencia = 8;
      } else if (puntaje <= 45) {
        equivalencia = 9;
      } else if (puntaje <= 51) {
        equivalencia = 10;
      } else if (puntaje <= 57) {
        equivalencia = 11;
      } else if (puntaje <= 61) {
        equivalencia = 12;
      } else if (puntaje <= 67) {
        equivalencia = 13;
      } else if (puntaje <= 71) {
        equivalencia = 14;
      } else if (puntaje <= 77) {
        equivalencia = 15;
      } else if (puntaje <= 81) {
        equivalencia = 16;
      } else if (puntaje <= 86) {
        equivalencia = 17;
      } else if (puntaje <= 91) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //I
  if (edad === "7,0" && subtest === "I") {
    for (let i = 0; i <= 33; i++) {
      if (puntaje <= 3) {
        equivalencia = 1;
      } else if (puntaje == 4) {
        equivalencia = 2;
      } else if (puntaje == 5) {
        equivalencia = 3;
      } else if (puntaje == 6) {
        equivalencia = 4;
      } else if (puntaje == 7) {
        equivalencia = 6;
      } else if (puntaje == 8) {
        equivalencia = 7;
      } else if (puntaje == 9) {
        equivalencia = 8;
      } else if (puntaje == 10) {
        equivalencia = 10;
      } else if (puntaje == 11) {
        equivalencia = 11;
      } else if (puntaje == 12) {
        equivalencia = 12;
      } else if (puntaje == 13) {
        equivalencia = 13;
      } else if (puntaje == 14) {
        equivalencia = 15;
      } else if (puntaje == 15) {
        equivalencia = 16;
      } else if (puntaje == 16) {
        equivalencia = 17;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //AR
  if (edad === "7,0" && subtest === "AR") {
    for (let i = 0; i <= 34; i++) {
      if (puntaje <= 3) {
        equivalencia = 1;
      } else if (puntaje == 4) {
        equivalencia = 2;
      } else if (puntaje == 5) {
        equivalencia = 3;
      } else if (puntaje <= 7) {
        equivalencia = 4;
      } else if (puntaje == 8) {
        equivalencia = 5;
      } else if (puntaje <= 10) {
        equivalencia = 6;
      } else if (puntaje == 11) {
        equivalencia = 7;
      } else if (puntaje <= 13) {
        equivalencia = 8;
      } else if (puntaje == 14) {
        equivalencia = 9;
      } else if (puntaje <= 16) {
        equivalencia = 10;
      } else if (puntaje == 17) {
        equivalencia = 11;
      } else if (puntaje == 18) {
        equivalencia = 12;
      } else if (puntaje == 19) {
        equivalencia = 13;
      } else if (puntaje == 20) {
        equivalencia = 14;
      } else if (puntaje == 21) {
        equivalencia = 15;
      } else if (puntaje == 22) {
        equivalencia = 16;
      } else if (puntaje == 23) {
        equivalencia = 17;
      } else if (puntaje == 24) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //AD
  if (edad === "7,0" && subtest === "AD") {
    for (let i = 0; i <= 24; i++) {
      if (puntaje == 0) {
        equivalencia = 1;
      } else if (puntaje == 1) {
        equivalencia = 2;
      } else if (puntaje == 2) {
        equivalencia = 3;
      } else if (puntaje == 3) {
        equivalencia = 4;
      } else if (puntaje == 4) {
        equivalencia = 5;
      } else if (puntaje == 5) {
        equivalencia = 6;
      } else if (puntaje == 6) {
        equivalencia = 7;
      } else if (puntaje == 7) {
        equivalencia = 8;
      } else if (puntaje == 8) {
        equivalencia = 9;
      } else if (puntaje == 9) {
        equivalencia = 10;
      } else if (puntaje == 10) {
        equivalencia = 11;
      } else if (puntaje == 11) {
        equivalencia = 12;
      } else if (puntaje == 12) {
        equivalencia = 13;
      } else if (puntaje <= 14) {
        equivalencia = 14;
      } else if (puntaje == 15) {
        equivalencia = 15;
      } else if (puntaje == 16) {
        equivalencia = 16;
      } else if (puntaje == 17) {
        equivalencia = 17;
      } else if (puntaje == 18) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }


//Edad 7,4 a 7,7
  //CC
  if (edad === "7,4" && subtest === "CC") {
    for (let i = 0; i <= 68; i++) {
      if (puntaje <= 1) {
        equivalencia = 3;
      } else if (puntaje == 2) {
        equivalencia = 4;
      } else if (puntaje <= 5) {
        equivalencia = 5;
      } else if (puntaje <= 8) {
        equivalencia = 6;
      } else if (puntaje <= 12) {
        equivalencia = 7;
      } else if (puntaje <= 15) {
        equivalencia = 8;
      } else if (puntaje <= 18) {
        equivalencia = 9;
      } else if (puntaje <= 21) {
        equivalencia = 10;
      } else if (puntaje <= 24) {
        equivalencia = 11;
      } else if (puntaje <= 27) {
        equivalencia = 12;
      } else if (puntaje <= 30) {
        equivalencia = 13;
      } else if (puntaje <= 34) {
        equivalencia = 14;
      } else if (puntaje <= 37) {
        equivalencia = 15;
      } else if (puntaje <= 40) {
        equivalencia = 16;
      } else if (puntaje <= 43) {
        equivalencia = 17;
      } else if (puntaje <= 46) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }
  
  //S
  if (edad === "7,4" && subtest === "S") {
    for (let i = 0; i <= 44; i++) {
      if (puntaje == 0) {
        equivalencia = 3;
      } else if (puntaje == 1) {
        equivalencia = 4;
      } else if (puntaje == 2) {
        equivalencia = 5;
      } else if (puntaje <= 4) {
        equivalencia = 6;
      } else if (puntaje <= 6) {
        equivalencia = 7;
      } else if (puntaje == 7) {
        equivalencia = 8;
      } else if (puntaje <= 9) {
        equivalencia = 9;
      } else if (puntaje == 10) {
        equivalencia = 10;
      } else if (puntaje == 11) {
        equivalencia = 11;
      } else if (puntaje <= 13) {
        equivalencia = 12;
      } else if (puntaje == 14) {
        equivalencia = 13;
      } else if (puntaje == 15) {
        equivalencia = 14;
      } else if (puntaje <= 17) {
        equivalencia = 15;
      } else if (puntaje == 18) {
        equivalencia = 16;
      } else if (puntaje <= 22) {
        equivalencia = 17;
      } else if (puntaje == 23) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //RD
  if (edad === "7,4" && subtest === "RD") {
    for (let i = 0; i <= 32; i++) {
      if (puntaje <= 4) {
        equivalencia = 1;
      } else if (puntaje == 5) {
        equivalencia = 2;
      } else if (puntaje == 6) {
        equivalencia = 3;
      } else if (puntaje == 7) {
        equivalencia = 4;
      } else if (puntaje == 8) {
        equivalencia = 5;
      } else if (puntaje == 9) {
        equivalencia = 7;
      } else if (puntaje == 10) {
        equivalencia = 8;
      } else if (puntaje == 11) {
        equivalencia = 9;
      } else if (puntaje == 12) {
        equivalencia = 10;
      } else if (puntaje == 13) {
        equivalencia = 12;
      } else if (puntaje == 14) {
        equivalencia = 13;
      } else if (puntaje == 15) {
        equivalencia = 14;
      } else if (puntaje == 16) {
        equivalencia = 16;
      } else if (puntaje == 17) {
        equivalencia = 17;
      } else if (puntaje == 18) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //CO
  if (edad === "7,4" && subtest === "CO") {
    for (let i = 0; i <= 28; i++) {
      if (puntaje == 0) {
        equivalencia = 1;
      } else if (puntaje == 1) {
        equivalencia = 2;
      } else if (puntaje <= 3) {
        equivalencia = 3;
      } else if (puntaje <= 5) {
        equivalencia = 4;
      } else if (puntaje == 6) {
        equivalencia = 5;
      } else if (puntaje == 7) {
        equivalencia = 6;
      } else if (puntaje <= 9) {
        equivalencia = 7;
      } else if (puntaje == 10) {
        equivalencia = 8;
      } else if (puntaje <= 12) {
        equivalencia = 9;
      } else if (puntaje == 13) {
        equivalencia = 10;
      } else if (puntaje <= 15) {
        equivalencia = 11;
      } else if (puntaje == 16) {
        equivalencia = 12;
      } else if (puntaje == 17) {
        equivalencia = 13;
      } else if (puntaje <= 19) {
        equivalencia = 14;
      } else if (puntaje == 20) {
        equivalencia = 15;
      } else if (puntaje == 21) {
        equivalencia = 16;
      } else if (puntaje == 22) {
        equivalencia = 17;
      } else if (puntaje == 23) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //CL
  if (edad === "7,4" && subtest === "CL") {
    for (let i = 0; i <= 65; i++) {
      if (puntaje <= 5) {
        equivalencia = 1;
      } else if (puntaje <= 10) {
        equivalencia = 2;
      } else if (puntaje <= 14) {
        equivalencia = 3;
      } else if (puntaje <= 19) {
        equivalencia = 4;
      } else if (puntaje <= 23) {
        equivalencia = 5;
      } else if (puntaje <= 28) {
        equivalencia = 6;
      } else if (puntaje <= 32) {
        equivalencia = 7;
      } else if (puntaje <= 37) {
        equivalencia = 8;
      } else if (puntaje <= 41) {
        equivalencia = 9;
      } else if (puntaje <= 46) {
        equivalencia = 10;
      } else if (puntaje <= 50) {
        equivalencia = 11;
      } else if (puntaje <= 55) {
        equivalencia = 12;
      } else if (puntaje <= 57) {
        equivalencia = 13;
      } else if (puntaje == 58) {
        equivalencia = 14;
      } else if (puntaje <= 60) {
        equivalencia = 15;
      } else if (puntaje <= 62) {
        equivalencia = 16;
      } else if (puntaje == 63) {
        equivalencia = 17;
      } else if (puntaje == 64) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //V
  if (edad === "7,4" && subtest === "V") {
    for (let i = 0; i <= 68; i++) {
      if (puntaje <= 4) {
        equivalencia = 1;
      } else if (puntaje == 5) {
        equivalencia = 2;
      } else if (puntaje <= 8) {
        equivalencia = 3;
      } else if (puntaje <= 11) {
        equivalencia = 4;
      } else if (puntaje <= 14) {
        equivalencia = 5;
      } else if (puntaje <= 16) {
        equivalencia = 6;
      } else if (puntaje <= 19) {
        equivalencia = 7;
      } else if (puntaje <= 21) {
        equivalencia = 8;
      } else if (puntaje <= 24) {
        equivalencia = 9;
      } else if (puntaje <= 26) {
        equivalencia = 10;
      } else if (puntaje <= 29) {
        equivalencia = 11;
      } else if (puntaje <= 31) {
        equivalencia = 12;
      } else if (puntaje <= 33) {
        equivalencia = 13;
      } else if (puntaje <= 35) {
        equivalencia = 14;
      } else if (puntaje <= 37) {
        equivalencia = 15;
      } else if (puntaje <= 39) {
        equivalencia = 16;
      } else if (puntaje <= 41) {
        equivalencia = 17;
      } else if (puntaje <= 44) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //LN
  if (edad === "7,4" && subtest === "LN") {
    for (let i = 0; i <= 30; i++) {
      if (puntaje == 0) {
        equivalencia = 1;
      } else if (puntaje == 1) {
        equivalencia = 2;
      } else if (puntaje == 2) {
        equivalencia = 3;
      } else if (puntaje == 3) {
        equivalencia = 4;
      } else if (puntaje == 4) {
        equivalencia = 5;
      } else if (puntaje <= 6) {
        equivalencia = 6;
      } else if (puntaje == 7) {
        equivalencia = 7;
      } else if (puntaje == 8) {
        equivalencia = 8;
      } else if (puntaje <= 10) {
        equivalencia = 9;
      } else if (puntaje == 11) {
        equivalencia = 10;
      } else if (puntaje <= 13) {
        equivalencia = 11;
      } else if (puntaje == 14) {
        equivalencia = 12;
      } else if (puntaje == 15) {
        equivalencia = 13;
      } else if (puntaje == 16) {
        equivalencia = 14;
      } else if (puntaje <= 18) {
        equivalencia = 15;
      } else if (puntaje == 19) {
        equivalencia = 16;
      } else if (puntaje == 20) {
        equivalencia = 17;
      } else if (puntaje <= 22) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //M
  if (edad === "7,4" && subtest === "M") {
    for (let i = 0; i <= 35; i++) {
      if (puntaje  <= 1) {
        equivalencia = 1;
      } else if (puntaje == 2) {
        equivalencia = 2;
      } else if (puntaje == 3) {
        equivalencia = 3;
      } else if (puntaje == 4) {
        equivalencia = 4;
      } else if (puntaje <= 6) {
        equivalencia = 5;
      } else if (puntaje == 7) {
        equivalencia = 6;
      } else if (puntaje <= 9) {
        equivalencia = 7;
      } else if (puntaje <= 11) {
        equivalencia = 8;
      } else if (puntaje == 12) {
        equivalencia = 9;
      } else if (puntaje == 13) {
        equivalencia = 10;
      } else if (puntaje == 14) {
        equivalencia = 11;
      } else if (puntaje <= 16) {
        equivalencia = 12;
      } else if (puntaje == 17) {
        equivalencia = 13;
      } else if (puntaje == 18) {
        equivalencia = 14;
      } else if (puntaje == 19) {
        equivalencia = 15;
      } else if (puntaje == 20) {
        equivalencia = 16;
      } else if (puntaje == 21) {
        equivalencia = 17;
      } else if (puntaje == 22) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //C
  if (edad === "7,4" && subtest === "C") {
    for (let i = 0; i <= 42; i++) {
      if (puntaje == 0) {
        equivalencia = 2;
      } else if (puntaje == 1) {
        equivalencia = 3;
      } else if (puntaje <= 3) {
        equivalencia = 4;
      } else if (puntaje == 4) {
        equivalencia = 5;
      } else if (puntaje <= 6) {
        equivalencia = 6;
      } else if (puntaje <= 8) {
        equivalencia = 7;
      } else if (puntaje <= 10) {
        equivalencia = 8;
      } else if (puntaje <= 12) {
        equivalencia = 9;
      } else if (puntaje <= 14) {
        equivalencia = 10;
      } else if (puntaje <= 16) {
        equivalencia = 11;
      } else if (puntaje <= 18) {
        equivalencia = 12;
      } else if (puntaje <= 20) {
        equivalencia = 13;
      } else if (puntaje == 21) {
        equivalencia = 14;
      } else if (puntaje <= 23) {
        equivalencia = 15;
      } else if (puntaje <= 25) {
        equivalencia = 16;
      } else if (puntaje <= 27) {
        equivalencia = 17;
      } else if (puntaje <= 29) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //BS
  if (edad === "7,4" && subtest === "BS") {
    for (let i = 0; i <= 45; i++) {
      if (puntaje <= 1) {
        equivalencia = 1;
      } else if (puntaje <= 4) {
        equivalencia = 2;
      } else if (puntaje <= 6) {
        equivalencia = 3;
      } else if (puntaje <= 9) {
        equivalencia = 4;
      } else if (puntaje <= 11) {
        equivalencia = 5;
      } else if (puntaje <= 14) {
        equivalencia = 6;
      } else if (puntaje <= 16) {
        equivalencia = 7;
      } else if (puntaje <= 19) {
        equivalencia = 8;
      } else if (puntaje <= 21) {
        equivalencia = 9;
      } else if (puntaje <= 24) {
        equivalencia = 10;
      } else if (puntaje <= 26) {
        equivalencia = 11;
      } else if (puntaje <= 29) {
        equivalencia = 12;
      } else if (puntaje <= 31) {
        equivalencia = 13;
      } else if (puntaje <= 34) {
        equivalencia = 14;
      } else if (puntaje <= 36) {
        equivalencia = 15;
      } else if (puntaje <= 38) {
        equivalencia = 16;
      } else if (puntaje <= 41) {
        equivalencia = 17;
      } else if (puntaje == 42) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //CF
  if (edad === "7,4" && subtest === "CF") {
    for (let i = 0; i <= 38; i++) {
      if (puntaje <= 1) {
        equivalencia = 1;
      } else if (puntaje <= 3) {
        equivalencia = 2;
      } else if (puntaje == 4) {
        equivalencia = 3;
      } else if (puntaje <= 6) {
        equivalencia = 4;
      } else if (puntaje <= 8) {
        equivalencia = 5;
      } else if (puntaje <= 10) {
        equivalencia = 6;
      } else if (puntaje <= 12) {
        equivalencia = 7;
      } else if (puntaje == 13) {
        equivalencia = 8;
      } else if (puntaje <= 15) {
        equivalencia = 9;
      } else if (puntaje <= 17) {
        equivalencia = 10;
      } else if (puntaje <= 19) {
        equivalencia = 11;
      } else if (puntaje == 20) {
        equivalencia = 12;
      } else if (puntaje <= 22) {
        equivalencia = 13;
      } else if (puntaje <= 24) {
        equivalencia = 14;
      } else if (puntaje <= 26) {
        equivalencia = 15;
      } else if (puntaje <= 28) {
        equivalencia = 16;
      } else if (puntaje == 29) {
        equivalencia = 17;
      } else if (puntaje <= 31) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //A
  if (edad === "7,4" && subtest === "A") {
    for (let i = 0; i <= 136; i++) {
      if (puntaje <= 5) {
        equivalencia = 1;
      } else if (puntaje <= 11) {
        equivalencia = 2;
      } else if (puntaje <= 13) {
        equivalencia = 3;
      } else if (puntaje <= 19) {
        equivalencia = 4;
      } else if (puntaje <= 23) {
        equivalencia = 5;
      } else if (puntaje <= 30) {
        equivalencia = 6;
      } else if (puntaje <= 35) {
        equivalencia = 7;
      } else if (puntaje <= 42) {
        equivalencia = 8;
      } else if (puntaje <= 47) {
        equivalencia = 9;
      } else if (puntaje <= 52) {
        equivalencia = 10;
      } else if (puntaje <= 57) {
        equivalencia = 11;
      } else if (puntaje <= 62) {
        equivalencia = 12;
      } else if (puntaje <= 67) {
        equivalencia = 13;
      } else if (puntaje <= 72) {
        equivalencia = 14;
      } else if (puntaje <= 77) {
        equivalencia = 15;
      } else if (puntaje <= 82) {
        equivalencia = 16;
      } else if (puntaje <= 87) {
        equivalencia = 17;
      } else if (puntaje <= 92) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //I
  if (edad === "7,4" && subtest === "I") {
    for (let i = 0; i <= 33; i++) {
      if (puntaje <= 3) {
        equivalencia = 1;
      } else if (puntaje == 4) {
        equivalencia = 2;
      } else if (puntaje == 5) {
        equivalencia = 3;
      } else if (puntaje == 6) {
        equivalencia = 4;
      } else if (puntaje == 7) {
        equivalencia = 6;
      } else if (puntaje == 8) {
        equivalencia = 7;
      } else if (puntaje == 9) {
        equivalencia = 8;
      } else if (puntaje == 10) {
        equivalencia = 9;
      } else if (puntaje == 11) {
        equivalencia = 11;
      } else if (puntaje == 12) {
        equivalencia = 12;
      } else if (puntaje == 13) {
        equivalencia = 13;
      } else if (puntaje == 14) {
        equivalencia = 15;
      } else if (puntaje == 15) {
        equivalencia = 16;
      } else if (puntaje == 16) {
        equivalencia = 17;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //AR
  if (edad === "7,4" && subtest === "AR") {
    for (let i = 0; i <= 34; i++) {
      if (puntaje <= 4) {
        equivalencia = 1;
      } else if (puntaje <= 7) {
        equivalencia = 2;
      } else if (puntaje == 8) {
        equivalencia = 3;
      } else if (puntaje == 9) {
        equivalencia = 4;
      } else if (puntaje == 10) {
        equivalencia = 5;
      } else if (puntaje == 11) {
        equivalencia = 6;
      } else if (puntaje == 12) {
        equivalencia = 7;
      } else if (puntaje == 13) {
        equivalencia = 8;
      } else if (puntaje <= 15) {
        equivalencia = 9;
      } else if (puntaje == 16) {
        equivalencia = 10;
      } else if (puntaje == 17) {
        equivalencia = 11;
      } else if (puntaje == 18) {
        equivalencia = 12;
      } else if (puntaje == 19) {
        equivalencia = 13;
      } else if (puntaje == 20) {
        equivalencia = 14;
      } else if (puntaje == 21) {
        equivalencia = 15;
      } else if (puntaje == 22) {
        equivalencia = 16;
      } else if (puntaje == 23) {
        equivalencia = 17;
      } else if (puntaje == 24) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //AD
  if (edad === "7,4" && subtest === "AD") {
    for (let i = 0; i <= 24; i++) {
      if (puntaje <= 1) {
        equivalencia = 1;
      } else if (puntaje == 2) {
        equivalencia = 2;
      } else if (puntaje == 3) {
        equivalencia = 3;
      } else if (puntaje == 4) {
        equivalencia = 4;
      } else if (puntaje == 5) {
        equivalencia = 5;
      } else if (puntaje == 6) {
        equivalencia = 6;
      } else if (puntaje == 7) {
        equivalencia = 7;
      } else if (puntaje == 8) {
        equivalencia = 8;
      } else if (puntaje == 9) {
        equivalencia = 9;
      } else if (puntaje == 10) {
        equivalencia = 10;
      } else if (puntaje == 11) {
        equivalencia = 11;
      } else if (puntaje == 12) {
        equivalencia = 12;
      } else if (puntaje == 13) {
        equivalencia = 13;
      } else if (puntaje == 14) {
        equivalencia = 14;
      } else if (puntaje == 15) {
        equivalencia = 15;
      } else if (puntaje == 16) {
        equivalencia = 16;
      } else if (puntaje == 17) {
        equivalencia = 17;
      } else if (puntaje == 18) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

//Edad 7,8 a 7,11
//CC
if (edad === "7,8" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 1) {
      equivalencia = 3;
    } else if (puntaje <= 3) {
      equivalencia = 4;
    } else if (puntaje <= 5) {
      equivalencia = 5;
    } else if (puntaje <= 8) {
      equivalencia = 6;
    } else if (puntaje <= 12) {
      equivalencia = 7;
    } else if (puntaje <= 15) {
      equivalencia = 8;
    } else if (puntaje <= 18) {
      equivalencia = 9;
    } else if (puntaje <= 21) {
      equivalencia = 10;
    } else if (puntaje <= 25) {
      equivalencia = 11;
    } else if (puntaje <= 28) {
      equivalencia = 12;
    } else if (puntaje <= 32) {
      equivalencia = 13;
    } else if (puntaje <= 34) {
      equivalencia = 14;
    } else if (puntaje <= 37) {
      equivalencia = 15;
    } else if (puntaje <= 40) {
      equivalencia = 16;
    } else if (puntaje <= 43) {
      equivalencia = 17;
    } else if (puntaje <= 46) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "7,8" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
    if (puntaje == 0) {
      equivalencia = 3;
    } else if (puntaje == 1) {
      equivalencia = 4;
    } else if (puntaje <= 3) {
      equivalencia = 5;
    } else if (puntaje <= 5) {
      equivalencia = 6;
    } else if (puntaje == 6) {
      equivalencia = 7;
    } else if (puntaje <= 8) {
      equivalencia = 8;
    } else if (puntaje <= 10) {
      equivalencia = 9;
    } else if (puntaje <= 12) {
      equivalencia = 10;
    } else if (puntaje <= 14) {
      equivalencia = 11;
    } else if (puntaje <= 16) {
      equivalencia = 12;
    } else if (puntaje <= 18) {
      equivalencia = 13;
    } else if (puntaje <= 20) {
      equivalencia = 14;
    } else if (puntaje <= 22) {
      equivalencia = 15;
    } else if (puntaje <= 24) {
      equivalencia = 16;
    } else if (puntaje <= 26) {
      equivalencia = 17;
    } else if (puntaje <= 28) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//RD
if (edad === "7,8" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje == 6) {
      equivalencia = 2;
    } else if (puntaje == 7) {
      equivalencia = 3;
    } else if (puntaje == 8) {
      equivalencia = 4;
    } else if (puntaje == 9) {
      equivalencia = 6;
    } else if (puntaje == 10) {
      equivalencia = 8;
    } else if (puntaje == 11) {
      equivalencia = 9;
    } else if (puntaje == 12) {
      equivalencia = 10;
    } else if (puntaje == 13) {
      equivalencia = 11;
    } else if (puntaje == 14) {
      equivalencia = 13;
    } else if (puntaje == 15) {
      equivalencia = 14;
    } else if (puntaje == 16) {
      equivalencia = 16;
    } else if (puntaje == 17) {
      equivalencia = 17;
    } else if (puntaje == 18) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CO
if (edad === "7,8" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje == 4) {
      equivalencia = 3;
    } else if (puntaje == 5) {
      equivalencia = 4;
    } else if (puntaje <= 7) {
      equivalencia = 5;
    } else if (puntaje == 8) {
      equivalencia = 6;
    } else if (puntaje == 9) {
      equivalencia = 7;
    } else if (puntaje <= 11) {
      equivalencia = 8;
    } else if (puntaje == 12) {
      equivalencia = 9;
    } else if (puntaje == 13) {
      equivalencia = 10;
    } else if (puntaje <= 15) {
      equivalencia = 11;
    } else if (puntaje == 16) {
      equivalencia = 12;
    } else if (puntaje == 17) {
      equivalencia = 13;
    } else if (puntaje <= 19) {
      equivalencia = 14;
    } else if (puntaje == 20) {
      equivalencia = 15;
    } else if (puntaje == 21) {
      equivalencia = 16;
    } else if (puntaje == 22) {
      equivalencia = 17;
    } else if (puntaje == 23) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CL
if (edad === "7,8" && subtest === "CL") {
  for (let i = 0; i <= 65; i++) {
    if (puntaje <= 9) {
      equivalencia = 1;
    } else if (puntaje <= 13) {
      equivalencia = 2;
    } else if (puntaje <= 17) {
      equivalencia = 3;
    } else if (puntaje <= 21) {
      equivalencia = 4;
    } else if (puntaje <= 25) {
      equivalencia = 5;
    } else if (puntaje <= 29) {
      equivalencia = 6;
    } else if (puntaje <= 34) {
      equivalencia = 7;
    } else if (puntaje <= 38) {
      equivalencia = 8;
    } else if (puntaje <= 42) {
      equivalencia = 9;
    } else if (puntaje <= 46) {
      equivalencia = 10;
    } else if (puntaje <= 51) {
      equivalencia = 11;
    } else if (puntaje <= 55) {
      equivalencia = 12;
    } else if (puntaje <= 58) {
      equivalencia = 13;
    } else if (puntaje == 59) {
      equivalencia = 14;
    } else if (puntaje <= 61) {
      equivalencia = 15;
    } else if (puntaje == 62) {
      equivalencia = 16;
    } else if (puntaje == 63) {
      equivalencia = 17;
    } else if (puntaje == 64) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//V
if (edad === "7,8" && subtest === "V") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje == 6) {
      equivalencia = 2;
    } else if (puntaje <= 9) {
      equivalencia = 3;
    } else if (puntaje <= 11) {
      equivalencia = 4;
    } else if (puntaje <= 14) {
      equivalencia = 5;
    } else if (puntaje <= 16) {
      equivalencia = 6;
    } else if (puntaje <= 19) {
      equivalencia = 7;
    } else if (puntaje <= 21) {
      equivalencia = 8;
    } else if (puntaje <= 24) {
      equivalencia = 9;
    } else if (puntaje <= 27) {
      equivalencia = 10;
    } else if (puntaje <= 29) {
      equivalencia = 11;
    } else if (puntaje <= 32) {
      equivalencia = 12;
    } else if (puntaje <= 34) {
      equivalencia = 13;
    } else if (puntaje <= 37) {
      equivalencia = 14;
    } else if (puntaje <= 39) {
      equivalencia = 15;
    } else if (puntaje <= 42) {
      equivalencia = 16;
    } else if (puntaje <= 44) {
      equivalencia = 17;
    } else if (puntaje <= 47) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//LN
if (edad === "7,8" && subtest === "LN") {
  for (let i = 0; i <= 30; i++) {
    if (puntaje == 0) {
      equivalencia = 1;
    } else if (puntaje == 1) {
      equivalencia = 2;
    } else if (puntaje == 2) {
      equivalencia = 3;
    } else if (puntaje == 3) {
      equivalencia = 4;
    } else if (puntaje <= 5) {
      equivalencia = 5;
    } else if (puntaje == 6) {
      equivalencia = 6;
    } else if (puntaje == 7) {
      equivalencia = 7;
    } else if (puntaje <= 9) {
      equivalencia = 8;
    } else if (puntaje == 10) {
      equivalencia = 9;
    } else if (puntaje <= 12) {
      equivalencia = 10;
    } else if (puntaje == 13) {
      equivalencia = 11;
    } else if (puntaje <= 15) {
      equivalencia = 12;
    } else if (puntaje == 16) {
      equivalencia = 13;
    } else if (puntaje <= 18) {
      equivalencia = 14;
    } else if (puntaje <= 20) {
      equivalencia = 15;
    } else if (puntaje == 21) {
      equivalencia = 16;
    } else if (puntaje == 22) {
      equivalencia = 17;
    } else if (puntaje <= 24) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//M
if (edad === "7,8" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje == 2) {
      equivalencia = 2;
    } else if (puntaje <= 4) {
      equivalencia = 3;
    } else if (puntaje == 5) {
      equivalencia = 4;
    } else if (puntaje == 6) {
      equivalencia = 5;
    } else if (puntaje == 7) {
      equivalencia = 6;
    } else if (puntaje <= 9) {
      equivalencia = 7;
    } else if (puntaje <= 11) {
      equivalencia = 8;
    } else if (puntaje <= 13) {
      equivalencia = 9;
    } else if (puntaje == 14) {
      equivalencia = 10;
    } else if (puntaje <= 16) {
      equivalencia = 11;
    } else if (puntaje == 17) {
      equivalencia = 12;
    } else if (puntaje == 18) {
      equivalencia = 13;
    } else if (puntaje <= 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 16;
    } else if (puntaje == 23) {
      equivalencia = 17;
    } else if (puntaje <= 25) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//C
if (edad === "7,8" && subtest === "C") {
  for (let i = 0; i <= 42; i++) {
    if (puntaje <= 1) {
      equivalencia = 2;
    } else if (puntaje <= 3) {
      equivalencia = 3;
    } else if (puntaje <= 5) {
      equivalencia = 4;
    } else if (puntaje == 6) {
      equivalencia = 5;
    } else if (puntaje <= 8) {
      equivalencia = 6;
    } else if (puntaje <= 10) {
      equivalencia = 7;
    } else if (puntaje == 11) {
      equivalencia = 8;
    } else if (puntaje <= 13) {
      equivalencia = 9;
    } else if (puntaje <= 15) {
      equivalencia = 10;
    } else if (puntaje <= 17) {
      equivalencia = 11;
    } else if (puntaje == 18) {
      equivalencia = 12;
    } else if (puntaje <= 20) {
      equivalencia = 13;
    } else if (puntaje <= 22) {
      equivalencia = 14;
    } else if (puntaje <= 24) {
      equivalencia = 15;
    } else if (puntaje == 25) {
      equivalencia = 16;
    } else if (puntaje <= 27) {
      equivalencia = 17;
    } else if (puntaje <= 29) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//BS
if (edad === "7,8" && subtest === "BS") {
  for (let i = 0; i <= 45; i++) {
    if (puntaje <= 4) {
      equivalencia = 1;
    } else if (puntaje <= 6) {
      equivalencia = 2;
    } else if (puntaje <= 8) {
      equivalencia = 3;
    } else if (puntaje <= 11) {
      equivalencia = 4;
    } else if (puntaje <= 13) {
      equivalencia = 5;
    } else if (puntaje <= 15) {
      equivalencia = 6;
    } else if (puntaje <= 18) {
      equivalencia = 7;
    } else if (puntaje <= 20) {
      equivalencia = 8;
    } else if (puntaje <= 22) {
      equivalencia = 9;
    } else if (puntaje <= 24) {
      equivalencia = 10;
    } else if (puntaje <= 27) {
      equivalencia = 11;
    } else if (puntaje <= 29) {
      equivalencia = 12;
    } else if (puntaje <= 31) {
      equivalencia = 13;
    } else if (puntaje <= 34) {
      equivalencia = 14;
    } else if (puntaje <= 36) {
      equivalencia = 15;
    } else if (puntaje <= 38) {
      equivalencia = 16;
    } else if (puntaje <= 41) {
      equivalencia = 17;
    } else if (puntaje <= 43) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CF
if (edad === "7,8" && subtest === "CF") {
  for (let i = 0; i <= 38; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 5) {
      equivalencia = 3;
    } else if (puntaje <= 7) {
      equivalencia = 4;
    } else if (puntaje <= 9) {
      equivalencia = 5;
    } else if (puntaje <= 10) {
      equivalencia = 6;
    } else if (puntaje <= 12) {
      equivalencia = 7;
    } else if (puntaje <= 14) {
      equivalencia = 8;
    } else if (puntaje <= 16) {
      equivalencia = 9;
    } else if (puntaje <= 18) {
      equivalencia = 10;
    } else if (puntaje <= 20) {
      equivalencia = 11;
    } else if (puntaje <= 22) {
      equivalencia = 12;
    } else if (puntaje <= 24) {
      equivalencia = 13;
    } else if (puntaje <= 26) {
      equivalencia = 14;
    } else if (puntaje == 27) {
      equivalencia = 15;
    } else if (puntaje <= 29) {
      equivalencia = 16;
    } else if (puntaje <= 31) {
      equivalencia = 17;
    } else if (puntaje <= 33) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//A
if (edad === "7,8" && subtest === "A") {
  for (let i = 0; i <= 136; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje <= 11) {
      equivalencia = 2;
    } else if (puntaje <= 13) {
      equivalencia = 3;
    } else if (puntaje <= 19) {
      equivalencia = 4;
    } else if (puntaje <= 24) {
      equivalencia = 5;
    } else if (puntaje <= 30) {
      equivalencia = 6;
    } else if (puntaje <= 36) {
      equivalencia = 7;
    } else if (puntaje <= 42) {
      equivalencia = 8;
    } else if (puntaje <= 48) {
      equivalencia = 9;
    } else if (puntaje <= 54) {
      equivalencia = 10;
    } else if (puntaje <= 60) {
      equivalencia = 11;
    } else if (puntaje <= 66) {
      equivalencia = 12;
    } else if (puntaje <= 72) {
      equivalencia = 13;
    } else if (puntaje <= 76) {
      equivalencia = 14;
    } else if (puntaje <= 79) {
      equivalencia = 15;
    } else if (puntaje <= 82) {
      equivalencia = 16;
    } else if (puntaje <= 89) {
      equivalencia = 17;
    } else if (puntaje <= 92) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//I
if (edad === "7,8" && subtest === "I") {
  for (let i = 0; i <= 33; i++) {
    if (puntaje <= 3) {
      equivalencia = 1;
    } else if (puntaje == 4) {
      equivalencia = 2;
    } else if (puntaje == 5) {
      equivalencia = 3;
    } else if (puntaje == 6) {
      equivalencia = 4;
    } else if (puntaje == 7) {
      equivalencia = 5;
    } else if (puntaje == 8) {
      equivalencia = 7;
    } else if (puntaje == 9) {
      equivalencia = 8;
    } else if (puntaje == 10) {
      equivalencia = 9;
    } else if (puntaje == 11) {
      equivalencia = 11;
    } else if (puntaje == 12) {
      equivalencia = 12;
    } else if (puntaje == 13) {
      equivalencia = 13;
    } else if (puntaje == 14) {
      equivalencia = 15;
    } else if (puntaje == 15) {
      equivalencia = 16;
    } else if (puntaje == 16) {
      equivalencia = 17;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AR
if (edad === "7,8" && subtest === "AR") {
  for (let i = 0; i <= 34; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje <= 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 3;
    } else if (puntaje == 9) {
      equivalencia = 4;
    } else if (puntaje <= 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje == 13) {
      equivalencia = 7;
    } else if (puntaje == 14) {
      equivalencia = 8;
    } else if (puntaje <= 16) {
      equivalencia = 9;
    } else if (puntaje == 17) {
      equivalencia = 10;
    } else if (puntaje == 18) {
      equivalencia = 11;
    } else if (puntaje == 19) {
      equivalencia = 12;
    } else if (puntaje <= 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje <= 26) {
      equivalencia = 17;
    } else if (puntaje == 27) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AD
if (edad === "7,8" && subtest === "AD") {
  for (let i = 0; i <= 24; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje == 2) {
      equivalencia = 2;
    } else if (puntaje == 3) {
      equivalencia = 3;
    } else if (puntaje == 4) {
      equivalencia = 4;
    } else if (puntaje == 5) {
      equivalencia = 5;
    } else if (puntaje == 6) {
      equivalencia = 6;
    } else if (puntaje == 7) {
      equivalencia = 7;
    } else if (puntaje == 8) {
      equivalencia = 8;
    } else if (puntaje == 9) {
      equivalencia = 9;
    } else if (puntaje == 10) {
      equivalencia = 10;
    } else if (puntaje == 11) {
      equivalencia = 11;
    } else if (puntaje == 12) {
      equivalencia = 12;
    } else if (puntaje == 13) {
      equivalencia = 13;
    } else if (puntaje == 14) {
      equivalencia = 14;
    } else if (puntaje == 15) {
      equivalencia = 15;
    } else if (puntaje == 16) {
      equivalencia = 16;
    } else if (puntaje == 17) {
      equivalencia = 17;
    } else if (puntaje == 18) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }


//Edad 8 a 8,3
//CC
if (edad === "8,0" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 1) {
      equivalencia = 2;
    } else if (puntaje <= 4) {
      equivalencia = 3;
    } else if (puntaje <= 6) {
      equivalencia = 4;
    } else if (puntaje <= 8) {
      equivalencia = 5;
    } else if (puntaje <= 12) {
      equivalencia = 6;
    } else if (puntaje <= 15) {
      equivalencia = 7;
    } else if (puntaje <= 18) {
      equivalencia = 8;
    } else if (puntaje <= 21) {
      equivalencia = 9;
    } else if (puntaje <= 23) {
      equivalencia = 10;
    } else if (puntaje <= 26) {
      equivalencia = 11;
    } else if (puntaje <= 29) {
      equivalencia = 12;
    } else if (puntaje <= 32) {
      equivalencia = 13;
    } else if (puntaje <= 34) {
      equivalencia = 14;
    } else if (puntaje <= 37) {
      equivalencia = 15;
    } else if (puntaje <= 40) {
      equivalencia = 16;
    } else if (puntaje <= 43) {
      equivalencia = 17;
    } else if (puntaje <= 46) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "8,0" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
    if (puntaje == 0) {
      equivalencia = 3;
    } else if (puntaje <= 2) {
      equivalencia = 4;
    } else if (puntaje == 3) {
      equivalencia = 5;
    } else if (puntaje <= 6) {
      equivalencia = 6;
    } else if (puntaje == 7) {
      equivalencia = 7;
    } else if (puntaje <= 10) {
      equivalencia = 8;
    } else if (puntaje == 11) {
      equivalencia = 9;
    } else if (puntaje <= 13) {
      equivalencia = 10;
    } else if (puntaje <= 15) {
      equivalencia = 11;
    } else if (puntaje <= 17) {
      equivalencia = 12;
    } else if (puntaje <= 19) {
      equivalencia = 13;
    } else if (puntaje <= 21) {
      equivalencia = 14;
    } else if (puntaje <= 23) {
      equivalencia = 15;
    } else if (puntaje <= 25) {
      equivalencia = 16;
    } else if (puntaje <= 27) {
      equivalencia = 17;
    } else if (puntaje <= 29) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//RD
if (edad === "8,0" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje == 6) {
      equivalencia = 2;
    } else if (puntaje == 7) {
      equivalencia = 3;
    } else if (puntaje == 8) {
      equivalencia = 4;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje == 10) {
      equivalencia = 7;
    } else if (puntaje == 11) {
      equivalencia = 8;
    } else if (puntaje == 12) {
      equivalencia = 9;
    } else if (puntaje == 13) {
      equivalencia = 11;
    } else if (puntaje == 14) {
      equivalencia = 13;
    } else if (puntaje == 15) {
      equivalencia = 14;
    } else if (puntaje == 16) {
      equivalencia = 16;
    } else if (puntaje == 17) {
      equivalencia = 17;
    } else if (puntaje == 18) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CO
if (edad === "8,0" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje == 6) {
      equivalencia = 2;
    } else if (puntaje == 7) {
      equivalencia = 3;
    } else if (puntaje == 8) {
      equivalencia = 4;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje <= 11) {
      equivalencia = 6;
    } else if (puntaje == 12) {
      equivalencia = 7;
    } else if (puntaje == 13) {
      equivalencia = 8;
    } else if (puntaje == 14) {
      equivalencia = 9;
    } else if (puntaje == 15) {
      equivalencia = 10;
    } else if (puntaje == 16) {
      equivalencia = 11;
    } else if (puntaje == 17) {
      equivalencia = 12;
    } else if (puntaje == 18) {
      equivalencia = 13;
    } else if (puntaje == 19) {
      equivalencia = 14;
    } else if (puntaje == 20) {
      equivalencia = 15;
    } else if (puntaje == 21) {
      equivalencia = 16;
    } else if (puntaje == 22) {
      equivalencia = 17;
    } else if (puntaje == 23) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CL
if (edad === "8,0" && subtest === "CL") {
  for (let i = 0; i <= 119; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje <= 9) {
      equivalencia = 2;
    } else if (puntaje <= 12) {
      equivalencia = 3;
    } else if (puntaje <= 15) {
      equivalencia = 4;
    } else if (puntaje <= 17) {
      equivalencia = 5;
    } else if (puntaje <= 20) {
      equivalencia = 6;
    } else if (puntaje <= 23) {
      equivalencia = 7;
    } else if (puntaje <= 26) {
      equivalencia = 8;
    } else if (puntaje <= 28) {
      equivalencia = 9;
    } else if (puntaje <= 31) {
      equivalencia = 10;
    } else if (puntaje <= 34) {
      equivalencia = 11;
    } else if (puntaje <= 36) {
      equivalencia = 12;
    } else if (puntaje <= 39) {
      equivalencia = 13;
    } else if (puntaje <= 42) {
      equivalencia = 14;
    } else if (puntaje <= 45) {
      equivalencia = 15;
    } else if (puntaje <= 47) {
      equivalencia = 16;
    } else if (puntaje <= 49) {
      equivalencia = 17;
    } else if (puntaje <= 52) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }
  
//V
if (edad === "8,0" && subtest === "V") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje <= 8) {
      equivalencia = 2;
    } else if (puntaje <= 11) {
      equivalencia = 3;
    } else if (puntaje <= 14) {
      equivalencia = 4;
    } else if (puntaje <= 17) {
      equivalencia = 5;
    } else if (puntaje <= 19) {
      equivalencia = 6;
    } else if (puntaje <= 22) {
      equivalencia = 7;
    } else if (puntaje <= 25) {
      equivalencia = 8;
    } else if (puntaje <= 28) {
      equivalencia = 9;
    } else if (puntaje <= 31) {
      equivalencia = 10;
    } else if (puntaje <= 34) {
      equivalencia = 11;
    } else if (puntaje <= 36) {
      equivalencia = 12;
    } else if (puntaje <= 39) {
      equivalencia = 13;
    } else if (puntaje <= 42) {
      equivalencia = 14;
    } else if (puntaje <= 45) {
      equivalencia = 15;
    } else if (puntaje <= 47) {
      equivalencia = 16;
    } else if (puntaje <= 50) {
      equivalencia = 17;
    } else if (puntaje == 51) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//LN
if (edad === "8,0" && subtest === "LN") {
  for (let i = 0; i <= 30; i++) {
    if (puntaje == 0) {
      equivalencia = 1;
    } else if (puntaje <= 2) {
      equivalencia = 2;
    } else if (puntaje <= 4) {
      equivalencia = 3;
    } else if (puntaje == 5) {
      equivalencia = 4;
    } else if (puntaje == 6) {
      equivalencia = 5;
    } else if (puntaje == 7) {
      equivalencia = 6;
    } else if (puntaje == 8) {
      equivalencia = 7;
    } else if (puntaje <= 10) {
      equivalencia = 8;
    } else if (puntaje == 11) {
      equivalencia = 9;
    } else if (puntaje <= 13) {
      equivalencia = 10;
    } else if (puntaje == 14) {
      equivalencia = 11;
    } else if (puntaje <= 16) {
      equivalencia = 12;
    } else if (puntaje == 17) {
      equivalencia = 13;
    } else if (puntaje <= 19) {
      equivalencia = 14;
    } else if (puntaje == 20) {
      equivalencia = 15;
    } else if (puntaje == 21) {
      equivalencia = 16;
    } else if (puntaje == 22) {
      equivalencia = 17;
    } else if (puntaje <= 24) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//M
if (edad === "8,0" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje == 2) {
      equivalencia = 2;
    } else if (puntaje <= 4) {
      equivalencia = 3;
    } else if (puntaje == 5) {
      equivalencia = 4;
    } else if (puntaje <= 7) {
      equivalencia = 5;
    } else if (puntaje == 8) {
      equivalencia = 6;
    } else if (puntaje <= 10) {
      equivalencia = 7;
    } else if (puntaje <= 12) {
      equivalencia = 8;
    } else if (puntaje == 13) {
      equivalencia = 9;
    } else if (puntaje == 14) {
      equivalencia = 10;
    } else if (puntaje <= 16) {
      equivalencia = 11;
    } else if (puntaje == 17) {
      equivalencia = 12;
    } else if (puntaje == 18) {
      equivalencia = 13;
    } else if (puntaje <= 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15
    } else if (puntaje == 22) {
      equivalencia = 16;
    } else if (puntaje <= 24) {
      equivalencia = 17;
    } else if (puntaje == 25) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//C
if (edad === "8,0" && subtest === "C") {
  for (let i = 0; i <= 42; i++) {
    if (puntaje == 0) {
      equivalencia = 1;
    } else if (puntaje <= 2) {
      equivalencia = 2;
    } else if (puntaje <= 4) {
      equivalencia = 3;
    } else if (puntaje <= 6) {
      equivalencia = 4;
    } else if (puntaje <= 8) {
      equivalencia = 5;
    } else if (puntaje <= 10) {
      equivalencia = 6;
    } else if (puntaje == 11) {
      equivalencia = 7;
    } else if (puntaje <= 13) {
      equivalencia = 8;
    } else if (puntaje <= 15) {
      equivalencia = 9;
    } else if (puntaje <= 17) {
      equivalencia = 10;
    } else if (puntaje <= 19) {
      equivalencia = 11;
    } else if (puntaje == 20) {
      equivalencia = 12;
    } else if (puntaje <= 22) {
      equivalencia = 13;
    } else if (puntaje == 23) {
      equivalencia = 14;
    } else if (puntaje <= 25) {
      equivalencia = 15;
    } else if (puntaje == 26) {
      equivalencia = 16;
    } else if (puntaje <= 28) {
      equivalencia = 17;
    } else if (puntaje <= 30) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//BS
if (edad === "8,0" && subtest === "BS") {
  for (let i = 0; i <= 60; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 5) {
      equivalencia = 3;
    } else if (puntaje == 6) {
      equivalencia = 4;
    } else if (puntaje == 7) {
      equivalencia = 5;
    } else if (puntaje == 8) {
      equivalencia = 6;
    } else if (puntaje == 9) {
      equivalencia = 7;
    } else if (puntaje <= 13) {
      equivalencia = 8;
    } else if (puntaje == 14) {
      equivalencia = 9;
    } else if (puntaje <= 16) {
      equivalencia = 10;
    } else if (puntaje == 17) {
      equivalencia = 11;
    } else if (puntaje <= 19) {
      equivalencia = 12;
    } else if (puntaje <= 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje <= 24) {
      equivalencia = 15;
    } else if (puntaje <= 26) {
      equivalencia = 16;
    } else if (puntaje == 27) {
      equivalencia = 17;
    } else if (puntaje <= 29) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CF
if (edad === "8,0" && subtest === "CF") {
  for (let i = 0; i <= 38; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 5) {
      equivalencia = 3;
    } else if (puntaje <= 7) {
      equivalencia = 4;
    } else if (puntaje <= 9) {
      equivalencia = 5;
    } else if (puntaje <= 11) {
      equivalencia = 6;
    } else if (puntaje <= 13) {
      equivalencia = 7;
    } else if (puntaje <= 15) {
      equivalencia = 8;
    } else if (puntaje <= 17) {
      equivalencia = 9;
    } else if (puntaje <= 19) {
      equivalencia = 10;
    } else if (puntaje <= 21) {
      equivalencia = 11;
    } else if (puntaje <= 23) {
      equivalencia = 12;
    } else if (puntaje <= 25) {
      equivalencia = 13;
    } else if (puntaje == 26) {
      equivalencia = 14;
    } else if (puntaje <= 28) {
      equivalencia = 15;
    } else if (puntaje <= 30) {
      equivalencia = 16;
    } else if (puntaje <= 32) {
      equivalencia = 17;
    } else if (puntaje == 33) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//A
if (edad === "8,0" && subtest === "A") {
  for (let i = 0; i <= 136; i++) {
    if (puntaje <= 11) {
      equivalencia = 1;
    } else if (puntaje <= 16) {
      equivalencia = 2;
    } else if (puntaje <= 21) {
      equivalencia = 3;
    } else if (puntaje <= 26) {
      equivalencia = 4;
    } else if (puntaje <= 31) {
      equivalencia = 5;
    } else if (puntaje <= 36) {
      equivalencia = 6;
    } else if (puntaje <= 41) {
      equivalencia = 7;
    } else if (puntaje <= 46) {
      equivalencia = 8;
    } else if (puntaje <= 51) {
      equivalencia = 9;
    } else if (puntaje <= 56) {
      equivalencia = 10;
    } else if (puntaje <= 62) {
      equivalencia = 11;
    } else if (puntaje <= 67) {
      equivalencia = 12;
    } else if (puntaje <= 72) {
      equivalencia = 13;
    } else if (puntaje <= 77) {
      equivalencia = 14;
    } else if (puntaje <= 79) {
      equivalencia = 15;
    } else if (puntaje <= 84) {
      equivalencia = 16;
    } else if (puntaje <= 89) {
      equivalencia = 17;
    } else if (puntaje <= 93) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//I
if (edad === "8,0" && subtest === "I") {
  for (let i = 0; i <= 33; i++) {
    if (puntaje <= 3) {
      equivalencia = 1;
    } else if (puntaje == 4) {
      equivalencia = 2;
    } else if (puntaje == 5) {
      equivalencia = 3;
    } else if (puntaje == 6) {
      equivalencia = 4;
    } else if (puntaje == 7) {
      equivalencia = 5;
    } else if (puntaje == 8) {
      equivalencia = 6;
    } else if (puntaje == 9) {
      equivalencia = 7;
    } else if (puntaje == 10) {
      equivalencia = 8;
    } else if (puntaje == 11) {
      equivalencia = 9;
    } else if (puntaje == 12) {
      equivalencia = 10;
    } else if (puntaje == 13) {
      equivalencia = 11;
    } else if (puntaje == 14) {
      equivalencia = 12;
    } else if (puntaje == 15) {
      equivalencia = 13;
    } else if (puntaje == 16) {
      equivalencia = 14;
    } else if (puntaje == 17) {
      equivalencia = 15;
    } else if (puntaje == 18) {
      equivalencia = 16;
    } else if (puntaje == 19) {
      equivalencia = 17;
    } else if (puntaje == 20) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AR
if (edad === "8,0" && subtest === "AR") {
  for (let i = 0; i <= 34; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje <= 9) {
      equivalencia = 3;
    } else if (puntaje == 10) {
      equivalencia = 4;
    } else if (puntaje == 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje <= 14) {
      equivalencia = 7;
    } else if (puntaje == 15) {
      equivalencia = 8;
    } else if (puntaje == 16) {
      equivalencia = 9;
    } else if (puntaje == 17) {
      equivalencia = 10;
    } else if (puntaje <= 19) {
      equivalencia = 11;
    } else if (puntaje == 20) {
      equivalencia = 12;
    } else if (puntaje == 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje <= 24) {
      equivalencia = 15;
    } else if (puntaje == 25) {
      equivalencia = 16;
    } else if (puntaje == 26) {
      equivalencia = 17;
    } else if (puntaje == 27) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AD
if (edad === "8,0" && subtest === "AD") {
  for (let i = 0; i <= 24; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje == 2) {
      equivalencia = 2;
    } else if (puntaje <= 4) {
      equivalencia = 3;
    } else if (puntaje == 5) {
      equivalencia = 4;
    } else if (puntaje == 6) {
      equivalencia = 5;
    } else if (puntaje == 7) {
      equivalencia = 6;
    } else if (puntaje == 8) {
      equivalencia = 7;
    } else if (puntaje == 9) {
      equivalencia = 8;
    } else if (puntaje <= 11) {
      equivalencia = 9;
    } else if (puntaje == 12) {
      equivalencia = 10;
    } else if (puntaje == 13) {
      equivalencia = 11;
    } else if (puntaje == 14) {
      equivalencia = 12;
    } else if (puntaje == 15) {
      equivalencia = 13;
    } else if (puntaje == 16) {
      equivalencia = 14;
    } else if (puntaje == 17) {
      equivalencia = 15;
    } else if (puntaje == 18) {
      equivalencia = 16;
    } else if (puntaje == 19) {
      equivalencia = 17;
    } else if (puntaje == 20) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//Edad 8,4 a 8,7
//CC
if (edad === "8,4" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 5) {
      equivalencia = 3;
    } else if (puntaje <= 8) {
      equivalencia = 4;
    } else if (puntaje <= 11) {
      equivalencia = 5;
    } else if (puntaje <= 15) {
      equivalencia = 6;
    } else if (puntaje <= 18) {
      equivalencia = 7;
    } else if (puntaje <= 20) {
      equivalencia = 8;
    } else if (puntaje <= 23) {
      equivalencia = 9;
    } else if (puntaje <= 26) {
      equivalencia = 10;
    } else if (puntaje <= 28) {
      equivalencia = 11;
    } else if (puntaje <= 31) {
      equivalencia = 12;
    } else if (puntaje <= 34) {
      equivalencia = 13;
    } else if (puntaje <= 36) {
      equivalencia = 14;
    } else if (puntaje <= 39) {
      equivalencia = 15;
    } else if (puntaje <= 41) {
      equivalencia = 16;
    } else if (puntaje <= 44) {
      equivalencia = 17;
    } else if (puntaje <= 47) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

  //S
  if (edad === "8,4" && subtest === "S") {
    for (let i = 0; i <= 44; i++) {
      if (puntaje <= 1) {
        equivalencia = 3;
      } else if (puntaje == 2) {
        equivalencia = 4;
      } else if (puntaje <= 4) {
        equivalencia = 5;
      } else if (puntaje <= 6) {
        equivalencia = 6;
      } else if (puntaje <= 8) {
        equivalencia = 7;
      } else if (puntaje <= 10) {
        equivalencia = 8;
      } else if (puntaje <= 13) {
        equivalencia = 9;
      } else if (puntaje == 14) {
        equivalencia = 10;
      } else if (puntaje <= 16) {
        equivalencia = 11;
      } else if (puntaje <= 18) {
        equivalencia = 12;
      } else if (puntaje <= 20) {
        equivalencia = 13;
      } else if (puntaje <= 22) {
        equivalencia = 14;
      } else if (puntaje <= 24) {
        equivalencia = 15;
      } else if (puntaje <= 26) {
        equivalencia = 16;
      } else if (puntaje <= 28) {
        equivalencia = 17;
      } else if (puntaje <= 30) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //RD
  if (edad === "8,4" && subtest === "RD") {
    for (let i = 0; i <= 32; i++) {
      if (puntaje <= 5) {
        equivalencia = 1;
      } else if (puntaje == 6) {
        equivalencia = 2;
      } else if (puntaje == 7) {
        equivalencia = 3;
      } else if (puntaje == 8) {
        equivalencia = 4;
      } else if (puntaje == 9) {
        equivalencia = 5;
      } else if (puntaje == 10) {
        equivalencia = 7;
      } else if (puntaje == 11) {
        equivalencia = 8;
      } else if (puntaje == 12) {
        equivalencia = 9;
      } else if (puntaje == 13) {
        equivalencia = 10;
      } else if (puntaje == 14) {
        equivalencia = 11;
      } else if (puntaje == 15) {
        equivalencia = 13;
      } else if (puntaje == 16) {
        equivalencia = 14;
      } else if (puntaje == 17) {
        equivalencia = 15;
      } else if (puntaje == 18) {
        equivalencia = 16;
      } else if (puntaje == 19) {
        equivalencia = 17;
      } else if (puntaje == 20) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //CO
  if (edad === "8,4" && subtest === "CO") {
    for (let i = 0; i <= 28; i++) {
      if (puntaje <= 6) {
        equivalencia = 1;
      } else if (puntaje == 7) {
        equivalencia = 2;
      } else if (puntaje == 8) {
        equivalencia = 3;
      } else if (puntaje == 9) {
        equivalencia = 4;
      } else if (puntaje == 10) {
        equivalencia = 5;
      } else if (puntaje <= 12) {
        equivalencia = 6;
      } else if (puntaje == 13) {
        equivalencia = 7;
      } else if (puntaje == 14) {
        equivalencia = 8;
      } else if (puntaje == 15) {
        equivalencia = 9;
      } else if (puntaje == 16) {
        equivalencia = 10;
      } else if (puntaje == 17) {
        equivalencia = 11;
      } else if (puntaje == 18) {
        equivalencia = 12;
      } else if (puntaje == 19) {
        equivalencia = 13;
      } else if (puntaje == 20) {
        equivalencia = 14;
      } else if (puntaje == 21) {
        equivalencia = 15;
      } else if (puntaje == 22) {
        equivalencia = 16;
      } else if (puntaje == 23) {
        equivalencia = 17;
      } else if (puntaje == 24) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //CL
  if (edad === "8,4" && subtest === "CL") {
    for (let i = 0; i <= 119; i++) {
      if (puntaje <= 7) {
        equivalencia = 1;
      } else if (puntaje <= 10) {
        equivalencia = 2;
      } else if (puntaje <= 12) {
        equivalencia = 3;
      } else if (puntaje <= 15) {
        equivalencia = 4;
      } else if (puntaje <= 18) {
        equivalencia = 5;
      } else if (puntaje <= 21) {
        equivalencia = 6;
      } else if (puntaje <= 24) {
        equivalencia = 7;
      } else if (puntaje <= 27) {
        equivalencia = 8;
      } else if (puntaje <= 30) {
        equivalencia = 9;
      } else if (puntaje <= 33) {
        equivalencia = 10;
      } else if (puntaje <= 35) {
        equivalencia = 11;
      } else if (puntaje <= 38) {
        equivalencia = 12;
      } else if (puntaje <= 40) {
        equivalencia = 13;
      } else if (puntaje <= 42) {
        equivalencia = 14;
      } else if (puntaje <= 45) {
        equivalencia = 15;
      } else if (puntaje <= 47) {
        equivalencia = 16;
      } else if (puntaje <= 50) {
        equivalencia = 17;
      } else if (puntaje <= 53) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //V
  if (edad === "8,4" && subtest === "V") {
    for (let i = 0; i <= 68; i++) {
      if (puntaje <= 9) {
        equivalencia = 1;
      } else if (puntaje <= 11) {
        equivalencia = 2;
      } else if (puntaje <= 14) {
        equivalencia = 3;
      } else if (puntaje <= 17) {
        equivalencia = 4;
      } else if (puntaje <= 19) {
        equivalencia = 5;
      } else if (puntaje <= 22) {
        equivalencia = 6;
      } else if (puntaje <= 25) {
        equivalencia = 7;
      } else if (puntaje <= 27) {
        equivalencia = 8;
      } else if (puntaje <= 30) {
        equivalencia = 9;
      } else if (puntaje <= 32) {
        equivalencia = 10;
      } else if (puntaje <= 35) {
        equivalencia = 11;
      } else if (puntaje <= 37) {
        equivalencia = 12;
      } else if (puntaje <= 40) {
        equivalencia = 13;
      } else if (puntaje <= 42) {
        equivalencia = 14;
      } else if (puntaje <= 45) {
        equivalencia = 15;
      } else if (puntaje <= 47) {
        equivalencia = 16;
      } else if (puntaje <= 50) {
        equivalencia = 17;
      } else if (puntaje <= 52) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //LN
  if (edad === "8,4" && subtest === "LN") {
    for (let i = 0; i <= 30; i++) {
      if (puntaje <= 1) {
        equivalencia = 1;
      } else if (puntaje <= 3) {
        equivalencia = 2;
      } else if (puntaje == 4) {
        equivalencia = 3;
      } else if (puntaje == 5) {
        equivalencia = 4;
      } else if (puntaje <= 7) {
        equivalencia = 5;
      } else if (puntaje == 8) {
        equivalencia = 6;
      } else if (puntaje == 9) {
        equivalencia = 7;
      } else if (puntaje == 10) {
        equivalencia = 8;
      } else if (puntaje <= 12) {
        equivalencia = 9;
      } else if (puntaje == 13) {
        equivalencia = 10;
      } else if (puntaje <= 15) {
        equivalencia = 11;
      } else if (puntaje == 16) {
        equivalencia = 12;
      } else if (puntaje <= 18) {
        equivalencia = 13;
      } else if (puntaje == 19) {
        equivalencia = 14;
      } else if (puntaje == 20) {
        equivalencia = 15;
      } else if (puntaje <= 22) {
        equivalencia = 16;
      } else if (puntaje == 23) {
        equivalencia = 17;
      } else if (puntaje == 24) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //M
  if (edad === "8,4" && subtest === "M") {
    for (let i = 0; i <= 35; i++) {
      if (puntaje <= 1) {
        equivalencia = 1;
      } else if (puntaje == 2) {
        equivalencia = 2;
      } else if (puntaje <= 4) {
        equivalencia = 3;
      } else if (puntaje == 5) {
        equivalencia = 4;
      } else if (puntaje <= 7) {
        equivalencia = 5;
      } else if (puntaje <= 9) {
        equivalencia = 6;
      } else if (puntaje == 10) {
        equivalencia = 7;
      } else if (puntaje <= 12) {
        equivalencia = 8;
      } else if (puntaje <= 14) {
        equivalencia = 9;
      } else if (puntaje == 15) {
        equivalencia = 10;
      } else if (puntaje <= 17) {
        equivalencia = 11;
      } else if (puntaje <= 19) {
        equivalencia = 12;
      } else if (puntaje == 20) {
        equivalencia = 13;
      } else if (puntaje <= 22) {
        equivalencia = 14;
      } else if (puntaje <= 24) {
        equivalencia = 15;
      } else if (puntaje == 25) {
        equivalencia = 16;
      } else if (puntaje <= 27) {
        equivalencia = 17;
      } else if (puntaje <= 29) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //C
  if (edad === "8,4" && subtest === "C") {
    for (let i = 0; i <= 42; i++) {
      if (puntaje == 0) {
        equivalencia = 1;
      } else if (puntaje <= 3) {
        equivalencia = 2;
      } else if (puntaje == 4) {
        equivalencia = 3;
      } else if (puntaje <= 6) {
        equivalencia = 4;
      } else if (puntaje <= 8) {
        equivalencia = 5;
      } else if (puntaje <= 10) {
        equivalencia = 6;
      } else if (puntaje <= 12) {
        equivalencia = 7;
      } else if (puntaje <= 14) {
        equivalencia = 8;
      } else if (puntaje == 15) {
        equivalencia = 9;
      } else if (puntaje <= 17) {
        equivalencia = 10;
      } else if (puntaje <= 19) {
        equivalencia = 11;
      } else if (puntaje == 20) {
        equivalencia = 12;
      } else if (puntaje <= 22) {
        equivalencia = 13;
      } else if (puntaje == 23) {
        equivalencia = 14;
      } else if (puntaje <= 25) {
        equivalencia = 15;
      } else if (puntaje == 26) {
        equivalencia = 16;
      } else if (puntaje <= 28) {
        equivalencia = 17;
      } else if (puntaje <= 30) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //BS
  if (edad === "8,4" && subtest === "BS") {
    for (let i = 0; i <= 60; i++) {
      if (puntaje <= 1) {
        equivalencia = 1;
      } else if (puntaje <= 3) {
        equivalencia = 2;
      } else if (puntaje <= 5) {
        equivalencia = 3;
      } else if (puntaje == 6) {
        equivalencia = 4;
      } else if (puntaje == 7) {
        equivalencia = 5;
      } else if (puntaje == 8) {
        equivalencia = 6;
      } else if (puntaje <= 10) {
        equivalencia = 7;
      } else if (puntaje <= 13) {
        equivalencia = 8;
      } else if (puntaje <= 15) {
        equivalencia = 9;
      } else if (puntaje <= 17) {
        equivalencia = 10;
      } else if (puntaje == 18) {
        equivalencia = 11;
      } else if (puntaje <= 21) {
        equivalencia = 12;
      } else if (puntaje <= 23) {
        equivalencia = 13;
      } else if (puntaje <= 25) {
        equivalencia = 14;
      } else if (puntaje <= 27) {
        equivalencia = 15;
      } else if (puntaje == 28) {
        equivalencia = 16;
      } else if (puntaje == 29) {
        equivalencia = 17;
      } else if (puntaje <= 32) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //CF
  if (edad === "8,4" && subtest === "CF") {
    for (let i = 0; i <= 38; i++) {
      if (puntaje <= 4) {
        equivalencia = 1;
      } else if (puntaje <= 6) {
        equivalencia = 2;
      } else if (puntaje <= 8) {
        equivalencia = 3;
      } else if (puntaje == 9) {
        equivalencia = 4;
      } else if (puntaje <= 11) {
        equivalencia = 5;
      } else if (puntaje <= 13) {
        equivalencia = 6;
      } else if (puntaje == 14) {
        equivalencia = 7;
      } else if (puntaje <= 16) {
        equivalencia = 8;
      } else if (puntaje <= 18) {
        equivalencia = 9;
      } else if (puntaje <= 20) {
        equivalencia = 10;
      } else if (puntaje == 21) {
        equivalencia = 11;
      } else if (puntaje <= 23) {
        equivalencia = 12;
      } else if (puntaje <= 25) {
        equivalencia = 13;
      } else if (puntaje == 26) {
        equivalencia = 14;
      } else if (puntaje <= 28) {
        equivalencia = 15;
      } else if (puntaje <= 30) {
        equivalencia = 16;
      } else if (puntaje <= 32) {
        equivalencia = 17;
      } else if (puntaje == 33) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //A
  if (edad === "8,4" && subtest === "A") {
    for (let i = 0; i <= 136; i++) {
      if (puntaje <= 17) {
        equivalencia = 1;
      } else if (puntaje <= 22) {
        equivalencia = 2;
      } else if (puntaje <= 27) {
        equivalencia = 3;
      } else if (puntaje <= 31) {
        equivalencia = 4;
      } else if (puntaje <= 36) {
        equivalencia = 5;
      } else if (puntaje <= 41) {
        equivalencia = 6;
      } else if (puntaje <= 45) {
        equivalencia = 7;
      } else if (puntaje <= 50) {
        equivalencia = 8;
      } else if (puntaje <= 55) {
        equivalencia = 9;
      } else if (puntaje <= 59) {
        equivalencia = 10;
      } else if (puntaje <= 64) {
        equivalencia = 11;
      } else if (puntaje <= 67) {
        equivalencia = 12;
      } else if (puntaje <= 72) {
        equivalencia = 13;
      } else if (puntaje <= 77) {
        equivalencia = 14;
      } else if (puntaje <= 80) {
        equivalencia = 15;
      } else if (puntaje <= 84) {
        equivalencia = 16;
      } else if (puntaje <= 90) {
        equivalencia = 17;
      } else if (puntaje <= 93) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //I
  if (edad === "8,4" && subtest === "I") {
    for (let i = 0; i <= 33; i++) {
      if (puntaje <= 3) {
        equivalencia = 1;
      } else if (puntaje == 4) {
        equivalencia = 2;
      } else if (puntaje == 5) {
        equivalencia = 3;
      } else if (puntaje == 6) {
        equivalencia = 4;
      } else if (puntaje <= 8) {
        equivalencia = 5;
      } else if (puntaje == 9) {
        equivalencia = 6;
      } else if (puntaje == 10) {
        equivalencia = 7;
      } else if (puntaje == 11) {
        equivalencia = 8;
      } else if (puntaje == 12) {
        equivalencia = 9;
      } else if (puntaje == 13) {
        equivalencia = 10;
      } else if (puntaje == 14) {
        equivalencia = 11;
      } else if (puntaje == 15) {
        equivalencia = 12;
      } else if (puntaje == 16) {
        equivalencia = 13;
      } else if (puntaje == 17) {
        equivalencia = 14;
      } else if (puntaje == 18) {
        equivalencia = 15;
      } else if (puntaje == 19) {
        equivalencia = 16;
      } else if (puntaje == 20) {
        equivalencia = 17;
      } else if (puntaje == 21) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //AR
  if (edad === "8,4" && subtest === "AR") {
    for (let i = 0; i <= 34; i++) {
      if (puntaje <= 9) {
        equivalencia = 1;
      } else if (puntaje == 10) {
        equivalencia = 2;
      } else if (puntaje == 11) {
        equivalencia = 3;
      } else if (puntaje == 12) {
        equivalencia = 4;
      } else if (puntaje == 13) {
        equivalencia = 5;
      } else if (puntaje == 14) {
        equivalencia = 6;
      } else if (puntaje <= 16) {
        equivalencia = 7;
      } else if (puntaje == 17) {
        equivalencia = 8;
      } else if (puntaje == 18) {
        equivalencia = 9;
      } else if (puntaje == 19) {
        equivalencia = 10;
      } else if (puntaje == 20) {
        equivalencia = 11;
      } else if (puntaje == 21) {
        equivalencia = 12;
      } else if (puntaje == 22) {
        equivalencia = 13;
      } else if (puntaje == 23) {
        equivalencia = 14;
      } else if (puntaje == 24) {
        equivalencia = 15;
      } else if (puntaje <= 26) {
        equivalencia = 16;
      } else if (puntaje == 27) {
        equivalencia = 17;
      } else if (puntaje == 28) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //AD
  if (edad === "8,4" && subtest === "AD") {
    for (let i = 0; i <= 24; i++) {
      if (puntaje <= 3) {
        equivalencia = 1;
      } else if (puntaje == 4) {
        equivalencia = 2;
      } else if (puntaje == 5) {
        equivalencia = 3;
      } else if (puntaje == 6) {
        equivalencia = 4;
      } else if (puntaje == 7) {
        equivalencia = 5;
      } else if (puntaje == 8) {
        equivalencia = 6;
      } else if (puntaje == 9) {
        equivalencia = 7;
      } else if (puntaje == 10) {
        equivalencia = 8;
      } else if (puntaje == 11) {
        equivalencia = 9;
      } else if (puntaje == 12) {
        equivalencia = 10;
      } else if (puntaje == 13) {
        equivalencia = 11;
      } else if (puntaje == 14) {
        equivalencia = 12;
      } else if (puntaje == 15) {
        equivalencia = 13;
      } else if (puntaje == 16) {
        equivalencia = 14;
      } else if (puntaje == 17) {
        equivalencia = 15;
      } else if (puntaje == 18) {
        equivalencia = 16;
      } else if (puntaje == 19) {
        equivalencia = 17;
      } else if (puntaje == 20) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }


//Edades 8,8 a 8,11
//CC
if (edad === "8,8" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 6) {
      equivalencia = 3;
    } else if (puntaje <= 9) {
      equivalencia = 4;
    } else if (puntaje <= 12) {
      equivalencia = 5;
    } else if (puntaje <= 16) {
      equivalencia = 6;
    } else if (puntaje <= 19) {
      equivalencia = 7;
    } else if (puntaje <= 22) {
      equivalencia = 8;
    } else if (puntaje <= 26) {
      equivalencia = 9;
    } else if (puntaje <= 29) {
      equivalencia = 10;
    } else if (puntaje <= 32) {
      equivalencia = 11;
    } else if (puntaje <= 35) {
      equivalencia = 12;
    } else if (puntaje <= 38) {
      equivalencia = 13;
    } else if (puntaje <= 42) {
      equivalencia = 14;
    } else if (puntaje <= 45) {
      equivalencia = 15;
    } else if (puntaje <= 48) {
      equivalencia = 16;
    } else if (puntaje <= 51) {
      equivalencia = 17;
    } else if (puntaje <= 54) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "8,8" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
    if (puntaje <= 1) {
      equivalencia = 3;
    } else if (puntaje <= 3) {
      equivalencia = 4;
    } else if (puntaje == 4) {
      equivalencia = 5;
    } else if (puntaje <= 7) {
      equivalencia = 6;
    } else if (puntaje == 8) {
      equivalencia = 7;
    } else if (puntaje <= 11) {
      equivalencia = 8;
    } else if (puntaje <= 13) {
      equivalencia = 9;
    } else if (puntaje <= 15) {
      equivalencia = 10;
    } else if (puntaje <= 17) {
      equivalencia = 11;
    } else if (puntaje <= 19) {
      equivalencia = 12;
    } else if (puntaje <= 21) {
      equivalencia = 13;
    } else if (puntaje <= 23) {
      equivalencia = 14;
    } else if (puntaje <= 25) {
      equivalencia = 15;
    } else if (puntaje <= 27) {
      equivalencia = 16;
    } else if (puntaje <= 30) {
      equivalencia = 17;
    } else if (puntaje <= 32) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//RD
if (edad === "8,8" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 4;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje == 10) {
      equivalencia = 6;
    } else if (puntaje == 11) {
      equivalencia = 7;
    } else if (puntaje == 12) {
      equivalencia = 8;
    } else if (puntaje == 13) {
      equivalencia = 10;
    } else if (puntaje == 14) {
      equivalencia = 11;
    } else if (puntaje == 15) {
      equivalencia = 12;
    } else if (puntaje == 16) {
      equivalencia = 13;
    } else if (puntaje == 17) {
      equivalencia = 14;
    } else if (puntaje == 18) {
      equivalencia = 15;
    } else if (puntaje == 19) {
      equivalencia = 17;
    } else if (puntaje == 20) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CO
if (edad === "8,8" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje == 8) {
      equivalencia = 2;
    } else if (puntaje == 9) {
      equivalencia = 3;
    } else if (puntaje == 10) {
      equivalencia = 4;
    } else if (puntaje == 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje == 13) {
      equivalencia = 7;
    } else if (puntaje == 14) {
      equivalencia = 8;
    } else if (puntaje == 15) {
      equivalencia = 9;
    } else if (puntaje == 16) {
      equivalencia = 10;
    } else if (puntaje == 17) {
      equivalencia = 11;
    } else if (puntaje == 18) {
      equivalencia = 12;
    } else if (puntaje == 19) {
      equivalencia = 13;
    } else if (puntaje == 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 16;
    } else if (puntaje == 23) {
      equivalencia = 17;
    } else if (puntaje == 24) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CL
if (edad === "8,8" && subtest === "CL") {
  for (let i = 0; i <= 119; i++) {
    if (puntaje <= 11) {
      equivalencia = 1;
    } else if (puntaje <= 14) {
      equivalencia = 2;
    } else if (puntaje <= 16) {
      equivalencia = 3;
    } else if (puntaje <= 19) {
      equivalencia = 4;
    } else if (puntaje <= 21) {
      equivalencia = 5;
    } else if (puntaje <= 24) {
      equivalencia = 6;
    } else if (puntaje <= 26) {
      equivalencia = 7;
    } else if (puntaje <= 28) {
      equivalencia = 8;
    } else if (puntaje <= 31) {
      equivalencia = 9;
    } else if (puntaje <= 33) {
      equivalencia = 10;
    } else if (puntaje <= 36) {
      equivalencia = 11;
    } else if (puntaje <= 38) {
      equivalencia = 12;
    } else if (puntaje <= 40) {
      equivalencia = 13;
    } else if (puntaje <= 43) {
      equivalencia = 14;
    } else if (puntaje <= 45) {
      equivalencia = 15;
    } else if (puntaje <= 48) {
      equivalencia = 16;
    } else if (puntaje <= 50) {
      equivalencia = 17;
    } else if (puntaje <= 53) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//V
if (edad === "8,8" && subtest === "V") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 9) {
      equivalencia = 1;
    } else if (puntaje <= 11) {
      equivalencia = 2;
    } else if (puntaje <= 14) {
      equivalencia = 3;
    } else if (puntaje <= 17) {
      equivalencia = 4;
    } else if (puntaje <= 19) {
      equivalencia = 5;
    } else if (puntaje <= 22) {
      equivalencia = 6;
    } else if (puntaje <= 25) {
      equivalencia = 7;
    } else if (puntaje <= 27) {
      equivalencia = 8;
    } else if (puntaje <= 30) {
      equivalencia = 9;
    } else if (puntaje <= 33) {
      equivalencia = 10;
    } else if (puntaje <= 36) {
      equivalencia = 11;
    } else if (puntaje <= 38) {
      equivalencia = 12;
    } else if (puntaje <= 41) {
      equivalencia = 13;
    } else if (puntaje <= 44) {
      equivalencia = 14;
    } else if (puntaje <= 46) {
      equivalencia = 15;
    } else if (puntaje <= 49) {
      equivalencia = 16;
    } else if (puntaje <= 52) {
      equivalencia = 17;
    } else if (puntaje <= 54) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//LN
if (edad === "8,8" && subtest === "LN") {
  for (let i = 0; i <= 30; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje == 4) {
      equivalencia = 3;
    } else if (puntaje == 5) {
      equivalencia = 4;
    } else if (puntaje <= 7) {
      equivalencia = 5;
    } else if (puntaje == 8) {
      equivalencia = 6;
    } else if (puntaje == 9) {
      equivalencia = 7;
    } else if (puntaje <= 11) {
      equivalencia = 8;
    } else if (puntaje == 12) {
      equivalencia = 9;
    } else if (puntaje <= 14) {
      equivalencia = 10;
    } else if (puntaje == 15) {
      equivalencia = 11;
    } else if (puntaje == 16) {
      equivalencia = 12;
    } else if (puntaje <= 18) {
      equivalencia = 13;
    } else if (puntaje == 19) {
      equivalencia = 14;
    } else if (puntaje == 20) {
      equivalencia = 15;
    } else if (puntaje <= 22) {
      equivalencia = 16;
    } else if (puntaje == 23) {
      equivalencia = 17;
    } else if (puntaje == 24) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//M
if (edad === "8,8" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje == 4) {
      equivalencia = 3;
    } else if (puntaje <= 6) {
      equivalencia = 4;
    } else if (puntaje <= 8) {
      equivalencia = 5;
    } else if (puntaje == 9) {
      equivalencia = 6;
    } else if (puntaje <= 11) {
      equivalencia = 7;
    } else if (puntaje <= 13) {
      equivalencia = 8;
    } else if (puntaje == 14) {
      equivalencia = 9;
    } else if (puntaje <= 16) {
      equivalencia = 10;
    } else if (puntaje <= 18) {
      equivalencia = 11;
    } else if (puntaje == 19) {
      equivalencia = 12;
    } else if (puntaje <= 21) {
      equivalencia = 13;
    } else if (puntaje <= 23) {
      equivalencia = 14;
    } else if (puntaje == 24) {
      equivalencia = 15;
    } else if (puntaje <= 26) {
      equivalencia = 16;
    } else if (puntaje <= 28) {
      equivalencia = 17;
    } else if (puntaje == 29) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//C
if (edad === "8,8" && subtest === "C") {
  for (let i = 0; i <= 42; i++) {
    if (puntaje == 0) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 5) {
      equivalencia = 3;
    } else if (puntaje == 6) {
      equivalencia = 4;
    } else if (puntaje <= 8) {
      equivalencia = 5;
    } else if (puntaje <= 10) {
      equivalencia = 6;
    } else if (puntaje <= 12) {
      equivalencia = 7;
    } else if (puntaje <= 14) {
      equivalencia = 8;
    } else if (puntaje == 15) {
      equivalencia = 9;
    } else if (puntaje <= 17) {
      equivalencia = 10;
    } else if (puntaje <= 19) {
      equivalencia = 11;
    } else if (puntaje <= 21) {
      equivalencia = 12;
    } else if (puntaje <= 23) {
      equivalencia = 13;
    } else if (puntaje <= 25) {
      equivalencia = 14;
    } else if (puntaje <= 27) {
      equivalencia = 15;
    } else if (puntaje == 28) {
      equivalencia = 16;
    } else if (puntaje <= 30) {
      equivalencia = 17;
    } else if (puntaje == 31) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//BS
if (edad === "8,8" && subtest === "BS") {
  for (let i = 0; i <= 60; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 5) {
      equivalencia = 3;
    } else if (puntaje == 6) {
      equivalencia = 4;
    } else if (puntaje <= 8) {
      equivalencia = 5;
    } else if (puntaje <= 10) {
      equivalencia = 6;
    } else if (puntaje <= 12) {
      equivalencia = 7;
    } else if (puntaje <= 14) {
      equivalencia = 8;
    } else if (puntaje <= 16) {
      equivalencia = 9;
    } else if (puntaje == 17) {
      equivalencia = 10;
    } else if (puntaje <= 19) {
      equivalencia = 11;
    } else if (puntaje <= 21) {
      equivalencia = 12;
    } else if (puntaje <= 23) {
      equivalencia = 13;
    } else if (puntaje <= 25) {
      equivalencia = 14;
    } else if (puntaje <= 27) {
      equivalencia = 15;
    } else if (puntaje == 28) {
      equivalencia = 16;
    } else if (puntaje <= 30) {
      equivalencia = 17;
    } else if (puntaje <= 32) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CF
if (edad === "8,8" && subtest === "CF") {
  for (let i = 0; i <= 38; i++) {
    if (puntaje <= 8) {
      equivalencia = 1;
    } else if (puntaje == 9) {
      equivalencia = 2;
    } else if (puntaje <= 11) {
      equivalencia = 3;
    } else if (puntaje == 12) {
      equivalencia = 4;
    } else if (puntaje <= 14) {
      equivalencia = 5;
    } else if (puntaje <= 16) {
      equivalencia = 6;
    } else if (puntaje == 17) {
      equivalencia = 7;
    } else if (puntaje <= 19) {
      equivalencia = 8;
    } else if (puntaje <= 21) {
      equivalencia = 9;
    } else if (puntaje == 22) {
      equivalencia = 10;
    } else if (puntaje <= 24) {
      equivalencia = 11;
    } else if (puntaje == 25) {
      equivalencia = 12;
    } else if (puntaje <= 27) {
      equivalencia = 13;
    } else if (puntaje <= 29) {
      equivalencia = 14;
    } else if (puntaje == 30) {
      equivalencia = 15;
    } else if (puntaje == 31) {
      equivalencia = 16;
    } else if (puntaje == 32) {
      equivalencia = 17;
    } else if (puntaje == 33) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//A
if (edad === "8,8" && subtest === "A") {
  for (let i = 0; i <= 136; i++) {
    if (puntaje <= 20) {
      equivalencia = 1;
    } else if (puntaje <= 25) {
      equivalencia = 2;
    } else if (puntaje <= 29) {
      equivalencia = 3;
    } else if (puntaje <= 33) {
      equivalencia = 4;
    } else if (puntaje <= 38) {
      equivalencia = 5;
    } else if (puntaje <= 42) {
      equivalencia = 6;
    } else if (puntaje <= 46) {
      equivalencia = 7;
    } else if (puntaje <= 51) {
      equivalencia = 8;
    } else if (puntaje <= 55) {
      equivalencia = 9;
    } else if (puntaje <= 59) {
      equivalencia = 10;
    } else if (puntaje <= 64) {
      equivalencia = 11;
    } else if (puntaje <= 68) {
      equivalencia = 12;
    } else if (puntaje <= 72) {
      equivalencia = 13;
    } else if (puntaje <= 77) {
      equivalencia = 14;
    } else if (puntaje <= 81) {
      equivalencia = 15;
    } else if (puntaje <= 85) {
      equivalencia = 16;
    } else if (puntaje <= 90) {
      equivalencia = 17;
    } else if (puntaje <= 94) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//I
if (edad === "8,8" && subtest === "I") {
  for (let i = 0; i <= 33; i++) {
    if (puntaje <= 4) {
      equivalencia = 1;
    } else if (puntaje == 5) {
      equivalencia = 2;
    } else if (puntaje == 6) {
      equivalencia = 3;
    } else if (puntaje == 7) {
      equivalencia = 4;
    } else if (puntaje == 8) {
      equivalencia = 5;
    } else if (puntaje == 9) {
      equivalencia = 6;
    } else if (puntaje == 10) {
      equivalencia = 7;
    } else if (puntaje == 11) {
      equivalencia = 8;
    } else if (puntaje == 12) {
      equivalencia = 9;
    } else if (puntaje == 13) {
      equivalencia = 10;
    } else if (puntaje == 14) {
      equivalencia = 11;
    } else if (puntaje == 15) {
      equivalencia = 12;
    } else if (puntaje == 16) {
      equivalencia = 13;
    } else if (puntaje == 17) {
      equivalencia = 14;
    } else if (puntaje == 18) {
      equivalencia = 15;
    } else if (puntaje == 19) {
      equivalencia = 16;
    } else if (puntaje == 20) {
      equivalencia = 17;
    } else if (puntaje == 21) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AR
if (edad === "8,8" && subtest === "AR") {
  for (let i = 0; i <= 34; i++) {
    if (puntaje <= 10) {
      equivalencia = 1;
    } else if (puntaje == 11) {
      equivalencia = 2;
    } else if (puntaje == 12) {
      equivalencia = 3;
    } else if (puntaje == 13) {
      equivalencia = 4;
    } else if (puntaje == 14) {
      equivalencia = 5;
    } else if (puntaje == 15) {
      equivalencia = 6;
    } else if (puntaje <= 17) {
      equivalencia = 7;
    } else if (puntaje == 18) {
      equivalencia = 8;
    } else if (puntaje == 19) {
      equivalencia = 9;
    } else if (puntaje == 20) {
      equivalencia = 10;
    } else if (puntaje == 21) {
      equivalencia = 11;
    } else if (puntaje == 22) {
      equivalencia = 12;
    } else if (puntaje == 23) {
      equivalencia = 13;
    } else if (puntaje == 24) {
      equivalencia = 14;
    } else if (puntaje == 25) {
      equivalencia = 15;
    } else if (puntaje == 26) {
      equivalencia = 16;
    } else if (puntaje == 27) {
      equivalencia = 17;
    } else if (puntaje <= 29) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AD
if (edad === "8,8" && subtest === "AD") {
  for (let i = 0; i <= 24; i++) {
    if (puntaje <= 3) {
      equivalencia = 1;
    } else if (puntaje == 4) {
      equivalencia = 2;
    } else if (puntaje == 5) {
      equivalencia = 3;
    } else if (puntaje == 6) {
      equivalencia = 4;
    } else if (puntaje == 7) {
      equivalencia = 5;
    } else if (puntaje == 8) {
      equivalencia = 6;
    } else if (puntaje == 9) {
      equivalencia = 7;
    } else if (puntaje == 10) {
      equivalencia = 8;
    } else if (puntaje == 11) {
      equivalencia = 9;
    } else if (puntaje == 12) {
      equivalencia = 10;
    } else if (puntaje == 13) {
      equivalencia = 11;
    } else if (puntaje == 14) {
      equivalencia = 12;
    } else if (puntaje == 15) {
      equivalencia = 13;
    } else if (puntaje == 16) {
      equivalencia = 14;
    } else if (puntaje == 17) {
      equivalencia = 15;
    } else if (puntaje == 18) {
      equivalencia = 16;
    } else if (puntaje == 19) {
      equivalencia = 17;
    } else if (puntaje == 20) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }


//Edad 9 a 9,3
//CC
if (edad === "9,0" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 6) {
      equivalencia = 3;
    } else if (puntaje <= 10) {
      equivalencia = 4;
    } else if (puntaje <= 13) {
      equivalencia = 5;
    } else if (puntaje <= 16) {
      equivalencia = 6;
    } else if (puntaje <= 19) {
      equivalencia = 7;
    } else if (puntaje <= 23) {
      equivalencia = 8;
    } else if (puntaje <= 26) {
      equivalencia = 9;
    } else if (puntaje <= 30) {
      equivalencia = 10;
    } else if (puntaje <= 33) {
      equivalencia = 11;
    } else if (puntaje <= 36) {
      equivalencia = 12;
    } else if (puntaje <= 40) {
      equivalencia = 13;
    } else if (puntaje <= 43) {
      equivalencia = 14;
    } else if (puntaje <= 47) {
      equivalencia = 15;
    } else if (puntaje <= 50) {
      equivalencia = 16;
    } else if (puntaje <= 53) {
      equivalencia = 17;
    } else if (puntaje <= 57) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "9,0" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
    if (puntaje <= 1) {
      equivalencia = 2;
    } else if (puntaje <= 3) {
      equivalencia = 3;
    } else if (puntaje <= 5) {
      equivalencia = 4;
    } else if (puntaje <= 7) {
      equivalencia = 5;
    } else if (puntaje <= 9) {
      equivalencia = 6;
    } else if (puntaje <= 11) {
      equivalencia = 7;
    } else if (puntaje <= 13) {
      equivalencia = 8;
    } else if (puntaje <= 15) {
      equivalencia = 9;
    } else if (puntaje <= 17) {
      equivalencia = 10;
    } else if (puntaje <= 20) {
      equivalencia = 11;
    } else if (puntaje <= 22) {
      equivalencia = 12;
    } else if (puntaje <= 24) {
      equivalencia = 13;
    } else if (puntaje <= 26) {
      equivalencia = 14;
    } else if (puntaje <= 28) {
      equivalencia = 15;
    } else if (puntaje <= 30) {
      equivalencia = 16;
    } else if (puntaje <= 32) {
      equivalencia = 17;
    } else if (puntaje <= 34) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//RD
if (edad === "9,0" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 4;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje == 10) {
      equivalencia = 6;
    } else if (puntaje == 11) {
      equivalencia = 7;
    } else if (puntaje == 12) {
      equivalencia = 8;
    } else if (puntaje == 13) {
      equivalencia = 10;
    } else if (puntaje == 14) {
      equivalencia = 11;
    } else if (puntaje == 15) {
      equivalencia = 12;
    } else if (puntaje == 16) {
      equivalencia = 13;
    } else if (puntaje == 17) {
      equivalencia = 14;
    } else if (puntaje == 18) {
      equivalencia = 15;
    } else if (puntaje == 19) {
      equivalencia = 16;
    } else if (puntaje == 20) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CO
if (edad === "9,0" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje == 8) {
      equivalencia = 2;
    } else if (puntaje == 9) {
      equivalencia = 3;
    } else if (puntaje == 10) {
      equivalencia = 4;
    } else if (puntaje == 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje == 13) {
      equivalencia = 7;
    } else if (puntaje == 14) {
      equivalencia = 8;
    } else if (puntaje == 15) {
      equivalencia = 9;
    } else if (puntaje == 16) {
      equivalencia = 10;
    } else if (puntaje == 17) {
      equivalencia = 11;
    } else if (puntaje == 18) {
      equivalencia = 12;
    } else if (puntaje <= 20) {
      equivalencia = 13;
    } else if (puntaje == 21) {
      equivalencia = 14;
    } else if (puntaje == 22) {
      equivalencia = 15;
    } else if (puntaje == 23) {
      equivalencia = 16;
    } else if (puntaje == 24) {
      equivalencia = 17;
    } else if (puntaje == 25) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CL
if (edad === "9,0" && subtest === "CL") {
  for (let i = 0; i <= 119; i++) {
    if (puntaje <= 11) {
      equivalencia = 1;
    } else if (puntaje <= 14) {
      equivalencia = 2;
    } else if (puntaje <= 16) {
      equivalencia = 3;
    } else if (puntaje <= 19) {
      equivalencia = 4;
    } else if (puntaje <= 22) {
      equivalencia = 5;
    } else if (puntaje <= 24) {
      equivalencia = 6;
    } else if (puntaje <= 27) {
      equivalencia = 7;
    } else if (puntaje <= 30) {
      equivalencia = 8;
    } else if (puntaje <= 33) {
      equivalencia = 9;
    } else if (puntaje <= 35) {
      equivalencia = 10;
    } else if (puntaje <= 38) {
      equivalencia = 11;
    } else if (puntaje <= 41) {
      equivalencia = 12;
    } else if (puntaje <= 43) {
      equivalencia = 13;
    } else if (puntaje <= 46) {
      equivalencia = 14;
    } else if (puntaje <= 49) {
      equivalencia = 15;
    } else if (puntaje <= 51) {
      equivalencia = 16;
    } else if (puntaje <= 54) {
      equivalencia = 17;
    } else if (puntaje <= 57) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//V
if (edad === "9,0" && subtest === "V") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 10) {
      equivalencia = 1;
    } else if (puntaje <= 13) {
      equivalencia = 2;
    } else if (puntaje <= 16) {
      equivalencia = 3;
    } else if (puntaje <= 20) {
      equivalencia = 4;
    } else if (puntaje <= 23) {
      equivalencia = 5;
    } else if (puntaje <= 25) {
      equivalencia = 6;
    } else if (puntaje <= 28) {
      equivalencia = 7;
    } else if (puntaje <= 30) {
      equivalencia = 8;
    } else if (puntaje <= 32) {
      equivalencia = 9;
    } else if (puntaje <= 35) {
      equivalencia = 10;
    } else if (puntaje <= 37) {
      equivalencia = 11;
    } else if (puntaje <= 39) {
      equivalencia = 12;
    } else if (puntaje <= 42) {
      equivalencia = 13;
    } else if (puntaje <= 44) {
      equivalencia = 14;
    } else if (puntaje <= 46) {
      equivalencia = 15;
    } else if (puntaje <= 49) {
      equivalencia = 16;
    } else if (puntaje <= 52) {
      equivalencia = 17;
    } else if (puntaje <= 54) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//LN
if (edad === "9,0" && subtest === "LN") {
  for (let i = 0; i <= 30; i++) {
    if (puntaje <= 4) {
      equivalencia = 1;
    } else if (puntaje == 5) {
      equivalencia = 2;
    } else if (puntaje <= 7) {
      equivalencia = 3;
    } else if (puntaje == 8) {
      equivalencia = 4;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje == 10) {
      equivalencia = 6;
    } else if (puntaje <= 12) {
      equivalencia = 7;
    } else if (puntaje == 13) {
      equivalencia = 8;
    } else if (puntaje == 14) {
      equivalencia = 9;
    } else if (puntaje == 15) {
      equivalencia = 10;
    } else if (puntaje == 16) {
      equivalencia = 11;
    } else if (puntaje == 17) {
      equivalencia = 12;
    } else if (puntaje == 18) {
      equivalencia = 13;
    } else if (puntaje <= 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 16;
    } else if (puntaje == 23) {
      equivalencia = 17;
    } else if (puntaje == 24) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//M
if (edad === "9,0" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje <= 2) {
      equivalencia = 1;
    } else if (puntaje <= 4) {
      equivalencia = 2;
    } else if (puntaje <= 6) {
      equivalencia = 3;
    } else if (puntaje <= 8) {
      equivalencia = 4;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje <= 11) {
      equivalencia = 6;
    } else if (puntaje <= 13) {
      equivalencia = 7;
    } else if (puntaje <= 15) {
      equivalencia = 8;
    } else if (puntaje == 16) {
      equivalencia = 9;
    } else if (puntaje <= 18) {
      equivalencia = 10;
    } else if (puntaje <= 20) {
      equivalencia = 11;
    } else if (puntaje <= 22) {
      equivalencia = 12;
    } else if (puntaje == 23) {
      equivalencia = 13;
    } else if (puntaje <= 25) {
      equivalencia = 14;
    } else if (puntaje == 26) {
      equivalencia = 15;
    } else if (puntaje == 27) {
      equivalencia = 16;
    } else if (puntaje <= 29) {
      equivalencia = 17;
    } else if (puntaje <= 31) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//C
if (edad === "9,0" && subtest === "C") {
  for (let i = 0; i <= 42; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 5) {
      equivalencia = 3;
    } else if (puntaje <= 7) {
      equivalencia = 4;
    } else if (puntaje <= 9) {
      equivalencia = 5;
    } else if (puntaje <= 11) {
      equivalencia = 6;
    } else if (puntaje <= 14) {
      equivalencia = 7;
    } else if (puntaje <= 16) {
      equivalencia = 8;
    } else if (puntaje == 17) {
      equivalencia = 9;
    } else if (puntaje <= 19) {
      equivalencia = 10;
    } else if (puntaje <= 21) {
      equivalencia = 11;
    } else if (puntaje <= 23) {
      equivalencia = 12;
    } else if (puntaje == 24) {
      equivalencia = 13;
    } else if (puntaje <= 26) {
      equivalencia = 14;
    } else if (puntaje == 27) {
      equivalencia = 15;
    } else if (puntaje <= 29) {
      equivalencia = 16;
    } else if (puntaje <= 31) {
      equivalencia = 17;
    } else if (puntaje == 32) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//BS
if (edad === "9,0" && subtest === "BS") {
  for (let i = 0; i <= 60; i++) {
    if (puntaje <= 2) {
      equivalencia = 1;
    } else if (puntaje == 3) {
      equivalencia = 2;
    } else if (puntaje <= 5) {
      equivalencia = 3;
    } else if (puntaje <= 7) {
      equivalencia = 4;
    } else if (puntaje <= 9) {
      equivalencia = 5;
    } else if (puntaje <= 13) {
      equivalencia = 6;
    } else if (puntaje <= 15) {
      equivalencia = 7;
    } else if (puntaje <= 17) {
      equivalencia = 8;
    } else if (puntaje == 18) {
      equivalencia = 9;
    } else if (puntaje <= 20) {
      equivalencia = 10;
    } else if (puntaje == 21) {
      equivalencia = 11;
    } else if (puntaje <= 23) {
      equivalencia = 12;
    } else if (puntaje <= 25) {
      equivalencia = 13;
    } else if (puntaje == 26) {
      equivalencia = 14;
    } else if (puntaje <= 28) {
      equivalencia = 15;
    } else if (puntaje == 29) {
      equivalencia = 16;
    } else if (puntaje <= 31) {
      equivalencia = 17;
    } else if (puntaje == 32) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CF
if (edad === "9,0" && subtest === "CF") {
  for (let i = 0; i <= 38; i++) {
    if (puntaje <= 8) {
      equivalencia = 1;
    } else if (puntaje == 9) {
      equivalencia = 2;
    } else if (puntaje <= 11) {
      equivalencia = 3;
    } else if (puntaje == 12) {
      equivalencia = 4;
    } else if (puntaje <= 14) {
      equivalencia = 5;
    } else if (puntaje <= 16) {
      equivalencia = 6;
    } else if (puntaje == 17) {
      equivalencia = 7;
    } else if (puntaje <= 19) {
      equivalencia = 8;
    } else if (puntaje <= 21) {
      equivalencia = 9;
    } else if (puntaje == 22) {
      equivalencia = 10;
    } else if (puntaje <= 24) {
      equivalencia = 11;
    } else if (puntaje == 25) {
      equivalencia = 12;
    } else if (puntaje <= 27) {
      equivalencia = 13;
    } else if (puntaje <= 29) {
      equivalencia = 14;
    } else if (puntaje == 30) {
      equivalencia = 15;
    } else if (puntaje <= 32) {
      equivalencia = 16;
    } else if (puntaje == 33) {
      equivalencia = 17;
    } else if (puntaje == 34) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//A
if (edad === "9,0" && subtest === "A") {
  for (let i = 0; i <= 136; i++) {
    if (puntaje <= 21) {
      equivalencia = 1;
    } else if (puntaje <= 25) {
      equivalencia = 2;
    } else if (puntaje <= 29) {
      equivalencia = 3;
    } else if (puntaje <= 34) {
      equivalencia = 4;
    } else if (puntaje <= 40) {
      equivalencia = 5;
    } else if (puntaje <= 46) {
      equivalencia = 6;
    } else if (puntaje <= 52) {
      equivalencia = 7;
    } else if (puntaje <= 57) {
      equivalencia = 8;
    } else if (puntaje <= 62) {
      equivalencia = 9;
    } else if (puntaje <= 66) {
      equivalencia = 10;
    } else if (puntaje <= 71) {
      equivalencia = 11;
    } else if (puntaje <= 76) {
      equivalencia = 12;
    } else if (puntaje <= 81) {
      equivalencia = 13;
    } else if (puntaje <= 86) {
      equivalencia = 14;
    } else if (puntaje <= 91) {
      equivalencia = 15;
    } else if (puntaje <= 94) {
      equivalencia = 16;
    } else if (puntaje <= 99) {
      equivalencia = 17;
    } else if (puntaje <= 105) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//I
if (edad === "9,0" && subtest === "I") {
  for (let i = 0; i <= 33; i++) {
    if (puntaje <= 4) {
      equivalencia = 1;
    } else if (puntaje == 5) {
      equivalencia = 2;
    } else if (puntaje <= 7) {
      equivalencia = 3;
    } else if (puntaje == 8) {
      equivalencia = 4;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje == 10) {
      equivalencia = 6;
    } else if (puntaje == 11) {
      equivalencia = 7;
    } else if (puntaje == 12) {
      equivalencia = 8;
    } else if (puntaje == 13) {
      equivalencia = 9;
    } else if (puntaje == 14) {
      equivalencia = 10;
    } else if (puntaje <= 16) {
      equivalencia = 11;
    } else if (puntaje == 17) {
      equivalencia = 12;
    } else if (puntaje == 18) {
      equivalencia = 13;
    } else if (puntaje == 19) {
      equivalencia = 14;
    } else if (puntaje == 20) {
      equivalencia = 15;
    } else if (puntaje == 21) {
      equivalencia = 16;
    } else if (puntaje == 22) {
      equivalencia = 17;
    } else if (puntaje == 23) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AR
if (edad === "9,0" && subtest === "AR") {
  for (let i = 0; i <= 34; i++) {
    if (puntaje <= 10) {
      equivalencia = 1;
    } else if (puntaje == 11) {
      equivalencia = 2;
    } else if (puntaje == 12) {
      equivalencia = 3;
    } else if (puntaje == 13) {
      equivalencia = 4;
    } else if (puntaje == 14) {
      equivalencia = 5;
    } else if (puntaje == 15) {
      equivalencia = 6;
    } else if (puntaje <= 17) {
      equivalencia = 7;
    } else if (puntaje == 18) {
      equivalencia = 8;
    } else if (puntaje == 19) {
      equivalencia = 9;
    } else if (puntaje == 20) {
      equivalencia = 10;
    } else if (puntaje == 21) {
      equivalencia = 11;
    } else if (puntaje == 22) {
      equivalencia = 12;
    } else if (puntaje == 23) {
      equivalencia = 13;
    } else if (puntaje == 24) {
      equivalencia = 14;
    } else if (puntaje == 25) {
      equivalencia = 15;
    } else if (puntaje == 26) {
      equivalencia = 16;
    } else if (puntaje == 27) {
      equivalencia = 17;
    } else if (puntaje <= 29) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AD
if (edad === "9,0" && subtest === "AD") {
  for (let i = 0; i <= 24; i++) {
    if (puntaje <= 3) {
      equivalencia = 1;
    } else if (puntaje == 4) {
      equivalencia = 2;
    } else if (puntaje == 5) {
      equivalencia = 3;
    } else if (puntaje == 6) {
      equivalencia = 4;
    } else if (puntaje == 7) {
      equivalencia = 5;
    } else if (puntaje == 8) {
      equivalencia = 6;
    } else if (puntaje == 9) {
      equivalencia = 7;
    } else if (puntaje == 10) {
      equivalencia = 8;
    } else if (puntaje <= 12) {
      equivalencia = 9;
    } else if (puntaje == 13) {
      equivalencia = 10;
    } else if (puntaje == 14) {
      equivalencia = 11;
    } else if (puntaje == 15) {
      equivalencia = 12;
    } else if (puntaje == 16) {
      equivalencia = 13;
    } else if (puntaje == 17) {
      equivalencia = 14;
    } else if (puntaje == 18) {
      equivalencia = 15;
    } else if (puntaje == 19) {
      equivalencia = 16;
    } else if (puntaje == 20) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }


//Edad 9,4 a 9,7
//CC
if (edad === "9,4" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 6) {
      equivalencia = 3;
    } else if (puntaje <= 10) {
      equivalencia = 4;
    } else if (puntaje <= 14) {
      equivalencia = 5;
    } else if (puntaje <= 18) {
      equivalencia = 6;
    } else if (puntaje <= 21) {
      equivalencia = 7;
    } else if (puntaje <= 25) {
      equivalencia = 8;
    } else if (puntaje <= 28) {
      equivalencia = 9;
    } else if (puntaje <= 32) {
      equivalencia = 10;
    } else if (puntaje <= 35) {
      equivalencia = 11;
    } else if (puntaje <= 38) {
      equivalencia = 12;
    } else if (puntaje <= 42) {
      equivalencia = 13;
    } else if (puntaje <= 45) {
      equivalencia = 14;
    } else if (puntaje <= 47) {
      equivalencia = 15;
    } else if (puntaje <= 52) {
      equivalencia = 16;
    } else if (puntaje <= 54) {
      equivalencia = 17;
    } else if (puntaje <= 58) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "9,4" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
    if (puntaje <= 1) {
      equivalencia = 2;
    } else if (puntaje <= 3) {
      equivalencia = 3;
    } else if (puntaje <= 5) {
      equivalencia = 4;
    } else if (puntaje <= 8) {
      equivalencia = 5;
    } else if (puntaje <= 10) {
      equivalencia = 6;
    } else if (puntaje <= 12) {
      equivalencia = 7;
    } else if (puntaje <= 14) {
      equivalencia = 8;
    } else if (puntaje <= 16) {
      equivalencia = 9;
    } else if (puntaje <= 18) {
      equivalencia = 10;
    } else if (puntaje <= 20) {
      equivalencia = 11;
    } else if (puntaje <= 22) {
      equivalencia = 12;
    } else if (puntaje <= 24) {
      equivalencia = 13;
    } else if (puntaje <= 26) {
      equivalencia = 14;
    } else if (puntaje <= 28) {
      equivalencia = 15;
    } else if (puntaje <= 30) {
      equivalencia = 16;
    } else if (puntaje <= 32) {
      equivalencia = 17;
    } else if (puntaje <= 34) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//RD
if (edad === "9,4" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 4;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje == 10) {
      equivalencia = 6;
    } else if (puntaje == 11) {
      equivalencia = 7;
    } else if (puntaje == 12) {
      equivalencia = 8;
    } else if (puntaje == 13) {
      equivalencia = 9;
    } else if (puntaje == 14) {
      equivalencia = 10;
    } else if (puntaje == 15) {
      equivalencia = 11;
    } else if (puntaje == 16) {
      equivalencia = 12;
    } else if (puntaje == 17) {
      equivalencia = 13;
    } else if (puntaje == 18) {
      equivalencia = 14;
    } else if (puntaje == 19) {
      equivalencia = 15;
    } else if (puntaje == 20) {
      equivalencia = 17;
    } else if (puntaje == 21) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CO
if (edad === "9,4" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje == 8) {
      equivalencia = 2;
    } else if (puntaje == 9) {
      equivalencia = 3;
    } else if (puntaje == 10) {
      equivalencia = 4;
    } else if (puntaje == 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje == 13) {
      equivalencia = 7;
    } else if (puntaje == 14) {
      equivalencia = 8;
    } else if (puntaje == 15) {
      equivalencia = 9;
    } else if (puntaje == 16) {
      equivalencia = 10;
    } else if (puntaje == 17) {
      equivalencia = 11;
    } else if (puntaje == 18) {
      equivalencia = 12;
    } else if (puntaje <= 20) {
      equivalencia = 13;
    } else if (puntaje == 21) {
      equivalencia = 14;
    } else if (puntaje == 22) {
      equivalencia = 15;
    } else if (puntaje == 23) {
      equivalencia = 16;
    } else if (puntaje == 24) {
      equivalencia = 17;
    } else if (puntaje == 25) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CL
if (edad === "9,4" && subtest === "CL") {
  for (let i = 0; i <= 119; i++) {
    if (puntaje <= 11) {
      equivalencia = 1;
    } else if (puntaje <= 14) {
      equivalencia = 2;
    } else if (puntaje <= 17) {
      equivalencia = 3;
    } else if (puntaje <= 19) {
      equivalencia = 4;
    } else if (puntaje <= 22) {
      equivalencia = 5;
    } else if (puntaje <= 26) {
      equivalencia = 6;
    } else if (puntaje <= 30) {
      equivalencia = 7;
    } else if (puntaje <= 33) {
      equivalencia = 8;
    } else if (puntaje <= 36) {
      equivalencia = 9;
    } else if (puntaje <= 39) {
      equivalencia = 10;
    } else if (puntaje <= 43) {
      equivalencia = 11;
    } else if (puntaje <= 46) {
      equivalencia = 12;
    } else if (puntaje <= 49) {
      equivalencia = 13;
    } else if (puntaje <= 52) {
      equivalencia = 14;
    } else if (puntaje <= 56) {
      equivalencia = 15;
    } else if (puntaje <= 59) {
      equivalencia = 16;
    } else if (puntaje <= 62) {
      equivalencia = 17;
    } else if (puntaje <= 65) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//V
if (edad === "9,4" && subtest === "V") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 11) {
      equivalencia = 1;
    } else if (puntaje <= 15) {
      equivalencia = 2;
    } else if (puntaje <= 18) {
      equivalencia = 3;
    } else if (puntaje <= 20) {
      equivalencia = 4;
    } else if (puntaje <= 23) {
      equivalencia = 5;
    } else if (puntaje <= 25) {
      equivalencia = 6;
    } else if (puntaje <= 28) {
      equivalencia = 7;
    } else if (puntaje <= 30) {
      equivalencia = 8;
    } else if (puntaje <= 33) {
      equivalencia = 9;
    } else if (puntaje <= 35) {
      equivalencia = 10;
    } else if (puntaje <= 38) {
      equivalencia = 11;
    } else if (puntaje <= 41) {
      equivalencia = 12;
    } else if (puntaje <= 43) {
      equivalencia = 13;
    } else if (puntaje <= 46) {
      equivalencia = 14;
    } else if (puntaje <= 48) {
      equivalencia = 15;
    } else if (puntaje <= 51) {
      equivalencia = 16;
    } else if (puntaje <= 53) {
      equivalencia = 17;
    } else if (puntaje <= 55) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//LN
if (edad === "9,4" && subtest === "LN") {
  for (let i = 0; i <= 30; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje == 6) {
      equivalencia = 2;
    } else if (puntaje == 7) {
      equivalencia = 3;
    } else if (puntaje == 8) {
      equivalencia = 4;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje <= 11) {
      equivalencia = 6;
    } else if (puntaje == 12) {
      equivalencia = 7;
    } else if (puntaje == 13) {
      equivalencia = 8;
    } else if (puntaje == 14) {
      equivalencia = 9;
    } else if (puntaje == 15) {
      equivalencia = 10;
    } else if (puntaje == 16) {
      equivalencia = 11;
    } else if (puntaje == 17) {
      equivalencia = 12;
    } else if (puntaje == 18) {
      equivalencia = 13;
    } else if (puntaje <= 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 16;
    } else if (puntaje == 23) {
      equivalencia = 17;
    } else if (puntaje == 24) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//M
if (edad === "9,4" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje <= 4) {
      equivalencia = 1;
    } else if (puntaje <= 6) {
      equivalencia = 2;
    } else if (puntaje == 7) {
      equivalencia = 3;
    } else if (puntaje <= 9) {
      equivalencia = 4;
    } else if (puntaje == 10) {
      equivalencia = 5;
    } else if (puntaje <= 12) {
      equivalencia = 6;
    } else if (puntaje <= 14) {
      equivalencia = 7;
    } else if (puntaje == 15) {
      equivalencia = 8;
    } else if (puntaje <= 17) {
      equivalencia = 9;
    } else if (puntaje <= 19) {
      equivalencia = 10;
    } else if (puntaje == 20) {
      equivalencia = 11;
    } else if (puntaje <= 22) {
      equivalencia = 12;
    } else if (puntaje == 23) {
      equivalencia = 13;
    } else if (puntaje <= 25) {
      equivalencia = 14;
    } else if (puntaje == 26) {
      equivalencia = 15;
    } else if (puntaje == 27) {
      equivalencia = 16;
    } else if (puntaje <= 29) {
      equivalencia = 17;
    } else if (puntaje <= 31) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//C
if (edad === "9,4" && subtest === "C") {
  for (let i = 0; i <= 42; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 5) {
      equivalencia = 3;
    } else if (puntaje <= 7) {
      equivalencia = 4;
    } else if (puntaje <= 9) {
      equivalencia = 5;
    } else if (puntaje <= 11) {
      equivalencia = 6;
    } else if (puntaje <= 14) {
      equivalencia = 7;
    } else if (puntaje <= 16) {
      equivalencia = 8;
    } else if (puntaje <= 18) {
      equivalencia = 9;
    } else if (puntaje <= 20) {
      equivalencia = 10;
    } else if (puntaje <= 23) {
      equivalencia = 11;
    } else if (puntaje == 24) {
      equivalencia = 12;
    } else if (puntaje == 25) {
      equivalencia = 13;
    } else if (puntaje <= 27) {
      equivalencia = 14;
    } else if (puntaje <= 29) {
      equivalencia = 15;
    } else if (puntaje == 30) {
      equivalencia = 16;
    } else if (puntaje == 31) {
      equivalencia = 17;
    } else if (puntaje == 32) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//BS
if (edad === "9,4" && subtest === "BS") {
  for (let i = 0; i <= 60; i++) {
    if (puntaje <= 2) {
      equivalencia = 1;
    } else if (puntaje <= 4) {
      equivalencia = 2;
    } else if (puntaje <= 6) {
      equivalencia = 3;
    } else if (puntaje <= 8) {
      equivalencia = 4;
    } else if (puntaje <= 10) {
      equivalencia = 5;
    } else if (puntaje <= 13) {
      equivalencia = 6;
    } else if (puntaje <= 15) {
      equivalencia = 7;
    } else if (puntaje <= 17) {
      equivalencia = 8;
    } else if (puntaje <= 19) {
      equivalencia = 9;
    } else if (puntaje == 20) {
      equivalencia = 10;
    } else if (puntaje <= 22) {
      equivalencia = 11;
    } else if (puntaje <= 24) {
      equivalencia = 12;
    } else if (puntaje <= 26) {
      equivalencia = 13;
    } else if (puntaje <= 28) {
      equivalencia = 14;
    } else if (puntaje <= 30) {
      equivalencia = 15;
    } else if (puntaje <= 32) {
      equivalencia = 16;
    } else if (puntaje <= 34) {
      equivalencia = 17;
    } else if (puntaje == 35) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CF
if (edad === "9,4" && subtest === "CF") {
  for (let i = 0; i <= 38; i++) {
    if (puntaje <= 8) {
      equivalencia = 1;
    } else if (puntaje <= 10) {
      equivalencia = 2;
    } else if (puntaje == 11) {
      equivalencia = 3;
    } else if (puntaje <= 13) {
      equivalencia = 4;
    } else if (puntaje <= 15) {
      equivalencia = 5;
    } else if (puntaje <= 17) {
      equivalencia = 6;
    } else if (puntaje == 18) {
      equivalencia = 7;
    } else if (puntaje <= 20) {
      equivalencia = 8;
    } else if (puntaje == 21) {
      equivalencia = 9;
    } else if (puntaje <= 23) {
      equivalencia = 10;
    } else if (puntaje == 24) {
      equivalencia = 11;
    } else if (puntaje == 25) {
      equivalencia = 12;
    } else if (puntaje <= 27) {
      equivalencia = 13;
    } else if (puntaje <= 29) {
      equivalencia = 14;
    } else if (puntaje == 30) {
      equivalencia = 15;
    } else if (puntaje <= 32) {
      equivalencia = 16;
    } else if (puntaje <= 34) {
      equivalencia = 17;
    } else if (puntaje == 35) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//A
if (edad === "9,4" && subtest === "A") {
  for (let i = 0; i <= 136; i++) {
    if (puntaje <= 21) {
      equivalencia = 1;
    } else if (puntaje <= 25) {
      equivalencia = 2;
    } else if (puntaje <= 29) {
      equivalencia = 3;
    } else if (puntaje <= 35) {
      equivalencia = 4;
    } else if (puntaje <= 41) {
      equivalencia = 5;
    } else if (puntaje <= 46) {
      equivalencia = 6;
    } else if (puntaje <= 52) {
      equivalencia = 7;
    } else if (puntaje <= 57) {
      equivalencia = 8;
    } else if (puntaje <= 63) {
      equivalencia = 9;
    } else if (puntaje <= 68) {
      equivalencia = 10;
    } else if (puntaje <= 74) {
      equivalencia = 11;
    } else if (puntaje <= 79) {
      equivalencia = 12;
    } else if (puntaje <= 81) {
      equivalencia = 13;
    } else if (puntaje <= 87) {
      equivalencia = 14;
    } else if (puntaje <= 91) {
      equivalencia = 15;
    } else if (puntaje <= 95) {
      equivalencia = 16;
    } else if (puntaje <= 100) {
      equivalencia = 17;
    } else if (puntaje <= 105) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//I
if (edad === "9,4" && subtest === "I") {
  for (let i = 0; i <= 33; i++) {
    if (puntaje <= 4) {
      equivalencia = 1;
    } else if (puntaje <= 6) {
      equivalencia = 2;
    } else if (puntaje == 7) {
      equivalencia = 3;
    } else if (puntaje == 8) {
      equivalencia = 4;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje == 10) {
      equivalencia = 6;
    } else if (puntaje == 11) {
      equivalencia = 7;
    } else if (puntaje == 12) {
      equivalencia = 8;
    } else if (puntaje <= 14) {
      equivalencia = 9;
    } else if (puntaje == 15) {
      equivalencia = 10;
    } else if (puntaje == 16) {
      equivalencia = 11;
    } else if (puntaje == 17) {
      equivalencia = 12;
    } else if (puntaje == 18) {
      equivalencia = 13;
    } else if (puntaje == 19) {
      equivalencia = 14;
    } else if (puntaje == 20) {
      equivalencia = 15;
    } else if (puntaje == 21) {
      equivalencia = 16;
    } else if (puntaje == 22) {
      equivalencia = 17;
    } else if (puntaje == 23) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AR
if (edad === "9,4" && subtest === "AR") {
  for (let i = 0; i <= 34; i++) {
    if (puntaje <= 10) {
      equivalencia = 1;
    } else if (puntaje == 11) {
      equivalencia = 2;
    } else if (puntaje == 12) {
      equivalencia = 3;
    } else if (puntaje == 13) {
      equivalencia = 4;
    } else if (puntaje == 14) {
      equivalencia = 5;
    } else if (puntaje == 15) {
      equivalencia = 6;
    } else if (puntaje <= 17) {
      equivalencia = 7;
    } else if (puntaje == 18) {
      equivalencia = 8;
    } else if (puntaje == 19) {
      equivalencia = 9;
    } else if (puntaje == 20) {
      equivalencia = 10;
    } else if (puntaje == 21) {
      equivalencia = 11;
    } else if (puntaje == 22) {
      equivalencia = 12;
    } else if (puntaje == 23) {
      equivalencia = 13;
    } else if (puntaje <= 25) {
      equivalencia = 14;
    } else if (puntaje == 26) {
      equivalencia = 15;
    } else if (puntaje == 27) {
      equivalencia = 16;
    } else if (puntaje == 28) {
      equivalencia = 17;
    } else if (puntaje == 29) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AD
if (edad === "9,4" && subtest === "AD") {
  for (let i = 0; i <= 24; i++) {
    if (puntaje <= 3) {
      equivalencia = 1;
    } else if (puntaje == 4) {
      equivalencia = 2;
    } else if (puntaje == 5) {
      equivalencia = 3;
    } else if (puntaje == 6) {
      equivalencia = 4;
    } else if (puntaje <= 8) {
      equivalencia = 5;
    } else if (puntaje == 9) {
      equivalencia = 6;
    } else if (puntaje == 10) {
      equivalencia = 7;
    } else if (puntaje == 11) {
      equivalencia = 8;
    } else if (puntaje == 12) {
      equivalencia = 9;
    } else if (puntaje == 13) {
      equivalencia = 10;
    } else if (puntaje == 14) {
      equivalencia = 11;
    } else if (puntaje == 15) {
      equivalencia = 12;
    } else if (puntaje == 16) {
      equivalencia = 13;
    } else if (puntaje == 17) {
      equivalencia = 14;
    } else if (puntaje == 18) {
      equivalencia = 15;
    } else if (puntaje == 19) {
      equivalencia = 16;
    } else if (puntaje == 20) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//Edad 9,8 a 9,11
//CC
if (edad === "9,8" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 6) {
      equivalencia = 3;
    } else if (puntaje <= 10) {
      equivalencia = 4;
    } else if (puntaje <= 14) {
      equivalencia = 5;
    } else if (puntaje <= 18) {
      equivalencia = 6;
    } else if (puntaje <= 22) {
      equivalencia = 7;
    } else if (puntaje <= 26) {
      equivalencia = 8;
    } else if (puntaje <= 29) {
      equivalencia = 9;
    } else if (puntaje <= 33) {
      equivalencia = 10;
    } else if (puntaje <= 36) {
      equivalencia = 11;
    } else if (puntaje <= 39) {
      equivalencia = 12;
    } else if (puntaje <= 42) {
      equivalencia = 13;
    } else if (puntaje <= 45) {
      equivalencia = 14;
    } else if (puntaje <= 48) {
      equivalencia = 15;
    } else if (puntaje <= 52) {
      equivalencia = 16;
    } else if (puntaje <= 55) {
      equivalencia = 17;
    } else if (puntaje <= 58) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "9,8" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
    if (puntaje <= 2) {
      equivalencia = 2;
    } else if (puntaje <= 4) {
      equivalencia = 3;
    } else if (puntaje <= 6) {
      equivalencia = 4;
    } else if (puntaje <= 8) {
      equivalencia = 5;
    } else if (puntaje <= 10) {
      equivalencia = 6;
    } else if (puntaje <= 13) {
      equivalencia = 7;
    } else if (puntaje <= 15) {
      equivalencia = 8;
    } else if (puntaje <= 17) {
      equivalencia = 9;
    } else if (puntaje <= 19) {
      equivalencia = 10;
    } else if (puntaje <= 21) {
      equivalencia = 11;
    } else if (puntaje <= 23) {
      equivalencia = 12;
    } else if (puntaje <= 25) {
      equivalencia = 13;
    } else if (puntaje <= 27) {
      equivalencia = 14;
    } else if (puntaje <= 29) {
      equivalencia = 15;
    } else if (puntaje <= 31) {
      equivalencia = 16;
    } else if (puntaje <= 33) {
      equivalencia = 17;
    } else if (puntaje == 34) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//RD
if (edad === "9,8" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 3;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje <= 11) {
      equivalencia = 6;
    } else if (puntaje == 12) {
      equivalencia = 7;
    } else if (puntaje == 13) {
      equivalencia = 8;
    } else if (puntaje == 14) {
      equivalencia = 10;
    } else if (puntaje == 15) {
      equivalencia = 11;
    } else if (puntaje == 16) {
      equivalencia = 12;
    } else if (puntaje == 17) {
      equivalencia = 13;
    } else if (puntaje == 18) {
      equivalencia = 14;
    } else if (puntaje == 19) {
      equivalencia = 15;
    } else if (puntaje == 20) {
      equivalencia = 17;
    } else if (puntaje == 21) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CO
if (edad === "9,8" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje == 8) {
      equivalencia = 2;
    } else if (puntaje == 9) {
      equivalencia = 3;
    } else if (puntaje == 10) {
      equivalencia = 4;
    } else if (puntaje == 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje == 13) {
      equivalencia = 7;
    } else if (puntaje == 14) {
      equivalencia = 8;
    } else if (puntaje == 15) {
      equivalencia = 9;
    } else if (puntaje <= 17) {
      equivalencia = 10;
    } else if (puntaje == 18) {
      equivalencia = 11;
    } else if (puntaje == 19) {
      equivalencia = 12;
    } else if (puntaje == 20) {
      equivalencia = 13;
    } else if (puntaje == 21) {
      equivalencia = 14;
    } else if (puntaje <= 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje == 25) {
      equivalencia = 17;
    } else if (puntaje == 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CL
if (edad === "9,8" && subtest === "CL") {
  for (let i = 0; i <= 119; i++) {
    if (puntaje <= 11) {
      equivalencia = 1;
    } else if (puntaje <= 14) {
      equivalencia = 2;
    } else if (puntaje <= 17) {
      equivalencia = 3;
    } else if (puntaje <= 19) {
      equivalencia = 4;
    } else if (puntaje <= 22) {
      equivalencia = 5;
    } else if (puntaje <= 26) {
      equivalencia = 6;
    } else if (puntaje <= 30) {
      equivalencia = 7;
    } else if (puntaje <= 33) {
      equivalencia = 8;
    } else if (puntaje <= 37) {
      equivalencia = 9;
    } else if (puntaje <= 41) {
      equivalencia = 10;
    } else if (puntaje <= 44) {
      equivalencia = 11;
    } else if (puntaje <= 48) {
      equivalencia = 12;
    } else if (puntaje <= 51) {
      equivalencia = 13;
    } else if (puntaje <= 54) {
      equivalencia = 14;
    } else if (puntaje <= 57) {
      equivalencia = 15;
    } else if (puntaje <= 60) {
      equivalencia = 16;
    } else if (puntaje <= 63) {
      equivalencia = 17;
    } else if (puntaje <= 66) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//V
if (edad === "9,8" && subtest === "V") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 11) {
      equivalencia = 1;
    } else if (puntaje <= 15) {
      equivalencia = 2;
    } else if (puntaje <= 18) {
      equivalencia = 3;
    } else if (puntaje <= 21) {
      equivalencia = 4;
    } else if (puntaje <= 23) {
      equivalencia = 5;
    } else if (puntaje <= 26) {
      equivalencia = 6;
    } else if (puntaje <= 28) {
      equivalencia = 7;
    } else if (puntaje <= 31) {
      equivalencia = 8;
    } else if (puntaje <= 34) {
      equivalencia = 9;
    } else if (puntaje <= 36) {
      equivalencia = 10;
    } else if (puntaje <= 39) {
      equivalencia = 11;
    } else if (puntaje <= 41) {
      equivalencia = 12;
    } else if (puntaje <= 44) {
      equivalencia = 13;
    } else if (puntaje <= 46) {
      equivalencia = 14;
    } else if (puntaje <= 49) {
      equivalencia = 15;
    } else if (puntaje <= 52) {
      equivalencia = 16;
    } else if (puntaje <= 54) {
      equivalencia = 17;
    } else if (puntaje <= 56) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//LN
if (edad === "9,8" && subtest === "LN") {
  for (let i = 0; i <= 30; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje == 6) {
      equivalencia = 2;
    } else if (puntaje <= 8) {
      equivalencia = 3;
    } else if (puntaje == 9) {
      equivalencia = 4;
    } else if (puntaje == 10) {
      equivalencia = 5;
    } else if (puntaje == 11) {
      equivalencia = 6;
    } else if (puntaje == 12) {
      equivalencia = 7;
    } else if (puntaje == 13) {
      equivalencia = 8;
    } else if (puntaje == 14) {
      equivalencia = 9;
    } else if (puntaje <= 16) {
      equivalencia = 10;
    } else if (puntaje == 17) {
      equivalencia = 11;
    } else if (puntaje == 18) {
      equivalencia = 12;
    } else if (puntaje == 19) {
      equivalencia = 13;
    } else if (puntaje == 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 16;
    } else if (puntaje == 23) {
      equivalencia = 17;
    } else if (puntaje <= 25) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//M
if (edad === "9,8" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje <= 4) {
      equivalencia = 1;
    } else if (puntaje <= 6) {
      equivalencia = 2;
    } else if (puntaje <= 8) {
      equivalencia = 3;
    } else if (puntaje == 9) {
      equivalencia = 4;
    } else if (puntaje <= 11) {
      equivalencia = 5;
    } else if (puntaje <= 13) {
      equivalencia = 6;
    } else if (puntaje == 14) {
      equivalencia = 7;
    } else if (puntaje <= 16) {
      equivalencia = 8;
    } else if (puntaje == 17) {
      equivalencia = 9;
    } else if (puntaje <= 19) {
      equivalencia = 10;
    } else if (puntaje == 20) {
      equivalencia = 11;
    } else if (puntaje <= 22) {
      equivalencia = 12;
    } else if (puntaje == 23) {
      equivalencia = 13;
    } else if (puntaje <= 25) {
      equivalencia = 14;
    } else if (puntaje == 26) {
      equivalencia = 15;
    } else if (puntaje <= 28) {
      equivalencia = 16;
    } else if (puntaje == 29) {
      equivalencia = 17;
    } else if (puntaje <= 31) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//C
if (edad === "9,8" && subtest === "C") {
  for (let i = 0; i <= 42; i++) {
    if (puntaje <= 3) {
      equivalencia = 1;
    } else if (puntaje <= 5) {
      equivalencia = 2;
    } else if (puntaje <= 7) {
      equivalencia = 3;
    } else if (puntaje <= 9) {
      equivalencia = 4;
    } else if (puntaje <= 11) {
      equivalencia = 5;
    } else if (puntaje <= 13) {
      equivalencia = 6;
    } else if (puntaje <= 15) {
      equivalencia = 7;
    } else if (puntaje <= 17) {
      equivalencia = 8;
    } else if (puntaje <= 19) {
      equivalencia = 9;
    } else if (puntaje <= 21) {
      equivalencia = 10;
    } else if (puntaje <= 23) {
      equivalencia = 11;
    } else if (puntaje <= 25) {
      equivalencia = 12;
    } else if (puntaje == 26) {
      equivalencia = 13;
    } else if (puntaje <= 28) {
      equivalencia = 14;
    } else if (puntaje <= 30) {
      equivalencia = 15;
    } else if (puntaje == 31) {
      equivalencia = 16;
    } else if (puntaje == 32) {
      equivalencia = 17;
    } else if (puntaje == 33) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//BS
if (edad === "9,8" && subtest === "BS") {
  for (let i = 0; i <= 60; i++) {
    if (puntaje <= 3) {
      equivalencia = 1;
    } else if (puntaje == 4) {
      equivalencia = 2;
    } else if (puntaje <= 6) {
      equivalencia = 3;
    } else if (puntaje <= 8) {
      equivalencia = 4;
    } else if (puntaje <= 10) {
      equivalencia = 5;
    } else if (puntaje <= 14) {
      equivalencia = 6;
    } else if (puntaje <= 16) {
      equivalencia = 7;
    } else if (puntaje <= 18) {
      equivalencia = 8;
    } else if (puntaje <= 20) {
      equivalencia = 9;
    } else if (puntaje <= 22) {
      equivalencia = 10;
    } else if (puntaje <= 24) {
      equivalencia = 11;
    } else if (puntaje <= 26) {
      equivalencia = 12;
    } else if (puntaje <= 28) {
      equivalencia = 13;
    } else if (puntaje <= 30) {
      equivalencia = 14;
    } else if (puntaje <= 32) {
      equivalencia = 15;
    } else if (puntaje == 33) {
      equivalencia = 16;
    } else if (puntaje <= 35) {
      equivalencia = 17;
    } else if (puntaje <= 37) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CF
if (edad === "9,8" && subtest === "CF") {
  for (let i = 0; i <= 38; i++) {
    if (puntaje <= 8) {
      equivalencia = 1;
    } else if (puntaje <= 10) {
      equivalencia = 2;
    } else if (puntaje == 11) {
      equivalencia = 3;
    } else if (puntaje <= 13) {
      equivalencia = 4;
    } else if (puntaje <= 15) {
      equivalencia = 5;
    } else if (puntaje <= 17) {
      equivalencia = 6;
    } else if (puntaje == 18) {
      equivalencia = 7;
    } else if (puntaje <= 20) {
      equivalencia = 8;
    } else if (puntaje == 21) {
      equivalencia = 9;
    } else if (puntaje <= 23) {
      equivalencia = 10;
    } else if (puntaje <= 25) {
      equivalencia = 11;
    } else if (puntaje == 26) {
      equivalencia = 12;
    } else if (puntaje <= 28) {
      equivalencia = 13;
    } else if (puntaje <= 30) {
      equivalencia = 14;
    } else if (puntaje == 31) {
      equivalencia = 15;
    } else if (puntaje <= 33) {
      equivalencia = 16;
    } else if (puntaje == 34) {
      equivalencia = 17;
    } else if (puntaje == 35) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//A
if (edad === "9,8" && subtest === "A") {
  for (let i = 0; i <= 136; i++) {
    if (puntaje <= 21) {
      equivalencia = 1;
    } else if (puntaje <= 25) {
      equivalencia = 2;
    } else if (puntaje <= 29) {
      equivalencia = 3;
    } else if (puntaje <= 35) {
      equivalencia = 4;
    } else if (puntaje <= 42) {
      equivalencia = 5;
    } else if (puntaje <= 47) {
      equivalencia = 6;
    } else if (puntaje <= 54) {
      equivalencia = 7;
    } else if (puntaje <= 59) {
      equivalencia = 8;
    } else if (puntaje <= 65) {
      equivalencia = 9;
    } else if (puntaje <= 69) {
      equivalencia = 10;
    } else if (puntaje <= 74) {
      equivalencia = 11;
    } else if (puntaje <= 79) {
      equivalencia = 12;
    } else if (puntaje <= 82) {
      equivalencia = 13;
    } else if (puntaje <= 88) {
      equivalencia = 14;
    } else if (puntaje <= 91) {
      equivalencia = 15;
    } else if (puntaje <= 96) {
      equivalencia = 16;
    } else if (puntaje <= 100) {
      equivalencia = 17;
    } else if (puntaje <= 106) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//I
if (edad === "9,8" && subtest === "I") {
  for (let i = 0; i <= 33; i++) {
    if (puntaje <= 4) {
      equivalencia = 1;
    } else if (puntaje <= 6) {
      equivalencia = 2;
    } else if (puntaje == 7) {
      equivalencia = 3;
    } else if (puntaje == 8) {
      equivalencia = 4;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje == 10) {
      equivalencia = 6;
    } else if (puntaje <= 12) {
      equivalencia = 7;
    } else if (puntaje == 13) {
      equivalencia = 8;
    } else if (puntaje == 14) {
      equivalencia = 9;
    } else if (puntaje == 15) {
      equivalencia = 10;
    } else if (puntaje <= 17) {
      equivalencia = 11;
    } else if (puntaje == 18) {
      equivalencia = 12;
    } else if (puntaje == 19) {
      equivalencia = 13;
    } else if (puntaje == 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 16;
    } else if (puntaje == 23) {
      equivalencia = 17;
    } else if (puntaje == 24) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AR
if (edad === "9,8" && subtest === "AR") {
  for (let i = 0; i <= 34; i++) {
    if (puntaje <= 11) {
      equivalencia = 1;
    } else if (puntaje == 12) {
      equivalencia = 2;
    } else if (puntaje == 13) {
      equivalencia = 3;
    } else if (puntaje == 14) {
      equivalencia = 4;
    } else if (puntaje == 15) {
      equivalencia = 5;
    } else if (puntaje == 16) {
      equivalencia = 6;
    } else if (puntaje <= 18) {
      equivalencia = 7;
    } else if (puntaje == 19) {
      equivalencia = 8;
    } else if (puntaje == 20) {
      equivalencia = 9;
    } else if (puntaje == 21) {
      equivalencia = 10;
    } else if (puntaje == 22) {
      equivalencia = 11;
    } else if (puntaje == 23) {
      equivalencia = 12;
    } else if (puntaje <= 25) {
      equivalencia = 13;
    } else if (puntaje == 26) {
      equivalencia = 14;
    } else if (puntaje == 27) {
      equivalencia = 15;
    } else if (puntaje == 28) {
      equivalencia = 16;
    } else if (puntaje == 29) {
      equivalencia = 17;
    } else if (puntaje == 30) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AD
if (edad === "9,8" && subtest === "AD") {
  for (let i = 0; i <= 24; i++) {
    if (puntaje <= 3) {
      equivalencia = 1;
    } else if (puntaje == 4) {
      equivalencia = 2;
    } else if (puntaje == 5) {
      equivalencia = 3;
    } else if (puntaje == 6) {
      equivalencia = 4;
    } else if (puntaje <= 8) {
      equivalencia = 5;
    } else if (puntaje <= 10) {
      equivalencia = 6;
    } else if (puntaje == 11) {
      equivalencia = 7;
    } else if (puntaje == 12) {
      equivalencia = 8;
    } else if (puntaje == 13) {
      equivalencia = 10;
    } else if (puntaje == 14) {
      equivalencia = 11;
    } else if (puntaje == 15) {
      equivalencia = 12;
    } else if (puntaje == 16) {
      equivalencia = 13;
    } else if (puntaje == 17) {
      equivalencia = 14;
    } else if (puntaje == 18) {
      equivalencia = 15;
    } else if (puntaje == 19) {
      equivalencia = 16;
    } else if (puntaje == 20) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//Edad 10 a 10,3
//CC
if (edad === "10,0" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 6) {
      equivalencia = 3;
    } else if (puntaje <= 10) {
      equivalencia = 4;
    } else if (puntaje <= 14) {
      equivalencia = 5;
    } else if (puntaje <= 18) {
      equivalencia = 6;
    } else if (puntaje <= 22) {
      equivalencia = 7;
    } else if (puntaje <= 26) {
      equivalencia = 8;
    } else if (puntaje <= 30) {
      equivalencia = 9;
    } else if (puntaje <= 34) {
      equivalencia = 10;
    } else if (puntaje <= 38) {
      equivalencia = 11;
    } else if (puntaje <= 42) {
      equivalencia = 12;
    } else if (puntaje <= 47) {
      equivalencia = 13;
    } else if (puntaje <= 51) {
      equivalencia = 14;
    } else if (puntaje <= 54) {
      equivalencia = 15;
    } else if (puntaje <= 56) {
      equivalencia = 16;
    } else if (puntaje <= 58) {
      equivalencia = 17;
    } else if (puntaje <= 60) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "10,0" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
    if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 5) {
      equivalencia = 3;
    } else if (puntaje <= 7) {
      equivalencia = 4;
    } else if (puntaje <= 9) {
      equivalencia = 5;
    } else if (puntaje <= 11) {
      equivalencia = 6;
    } else if (puntaje <= 13) {
      equivalencia = 7;
    } else if (puntaje <= 15) {
      equivalencia = 8;
    } else if (puntaje <= 17) {
      equivalencia = 9;
    } else if (puntaje <= 19) {
      equivalencia = 10;
    } else if (puntaje <= 21) {
      equivalencia = 11;
    } else if (puntaje <= 23) {
      equivalencia = 12;
    } else if (puntaje <= 25) {
      equivalencia = 13;
    } else if (puntaje <= 27) {
      equivalencia = 14;
    } else if (puntaje <= 29) {
      equivalencia = 15;
    } else if (puntaje <= 31) {
      equivalencia = 16;
    } else if (puntaje <= 33) {
      equivalencia = 17;
    } else if (puntaje == 34) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//RD
if (edad === "10,0" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 3;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje <= 11) {
      equivalencia = 6;
    } else if (puntaje == 12) {
      equivalencia = 7;
    } else if (puntaje == 13) {
      equivalencia = 8;
    } else if (puntaje == 14) {
      equivalencia = 9;
    } else if (puntaje == 15) {
      equivalencia = 10;
    } else if (puntaje == 16) {
      equivalencia = 11;
    } else if (puntaje == 17) {
      equivalencia = 12;
    } else if (puntaje == 18) {
      equivalencia = 13;
    } else if (puntaje == 19) {
      equivalencia = 14;
    } else if (puntaje == 20) {
      equivalencia = 15;
    } else if (puntaje == 21) {
      equivalencia = 16;
    } else if (puntaje == 22) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CO
if (edad === "10,0" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje == 8) {
      equivalencia = 2;
    } else if (puntaje == 9) {
      equivalencia = 3;
    } else if (puntaje == 10) {
      equivalencia = 4;
    } else if (puntaje == 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje == 13) {
      equivalencia = 7;
    } else if (puntaje <= 15) {
      equivalencia = 8;
    } else if (puntaje == 16) {
      equivalencia = 9;
    } else if (puntaje == 17) {
      equivalencia = 10;
    } else if (puntaje == 18) {
      equivalencia = 11;
    } else if (puntaje <= 20) {
      equivalencia = 12;
    } else if (puntaje == 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje == 25) {
      equivalencia = 17;
    } else if (puntaje == 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CL
if (edad === "10,0" && subtest === "CL") {
  for (let i = 0; i <= 119; i++) {
    if (puntaje <= 11) {
      equivalencia = 1;
    } else if (puntaje <= 15) {
      equivalencia = 2;
    } else if (puntaje <= 17) {
      equivalencia = 3;
    } else if (puntaje <= 20) {
      equivalencia = 4;
    } else if (puntaje <= 23) {
      equivalencia = 5;
    } else if (puntaje <= 27) {
      equivalencia = 6;
    } else if (puntaje <= 31) {
      equivalencia = 7;
    } else if (puntaje <= 35) {
      equivalencia = 8;
    } else if (puntaje <= 38) {
      equivalencia = 9;
    } else if (puntaje <= 42) {
      equivalencia = 10;
    } else if (puntaje <= 45) {
      equivalencia = 11;
    } else if (puntaje <= 48) {
      equivalencia = 12;
    } else if (puntaje <= 51) {
      equivalencia = 13;
    } else if (puntaje <= 54) {
      equivalencia = 14;
    } else if (puntaje <= 57) {
      equivalencia = 15;
    } else if (puntaje <= 60) {
      equivalencia = 16;
    } else if (puntaje <= 63) {
      equivalencia = 17;
    } else if (puntaje <= 66) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

  //V
  if (edad === "10,0" && subtest === "V") {
    for (let i = 0; i <= 68; i++) {
      if (puntaje <= 12) {
        equivalencia = 1;
      } else if (puntaje <= 15) {
        equivalencia = 2;
      } else if (puntaje <= 18) {
        equivalencia = 3;
      } else if (puntaje <= 21) {
        equivalencia = 4;
      } else if (puntaje <= 24) {
        equivalencia = 5;
      } else if (puntaje <= 28) {
        equivalencia = 6;
      } else if (puntaje <= 30) {
        equivalencia = 7;
      } else if (puntaje <= 33) {
        equivalencia = 8;
      } else if (puntaje <= 35) {
        equivalencia = 9;
      } else if (puntaje <= 38) {
        equivalencia = 10;
      } else if (puntaje <= 40) {
        equivalencia = 11;
      } else if (puntaje <= 43) {
        equivalencia = 12;
      } else if (puntaje <= 45) {
        equivalencia = 13;
      } else if (puntaje <= 48) {
        equivalencia = 14;
      } else if (puntaje <= 50) {
        equivalencia = 15;
      } else if (puntaje <= 52) {
        equivalencia = 16;
      } else if (puntaje <= 54) {
        equivalencia = 17;
      } else if (puntaje <= 56) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //LN
  if (edad === "10,0" && subtest === "LN") {
    for (let i = 0; i <= 30; i++) {
      if (puntaje <= 5) {
        equivalencia = 1;
      } else if (puntaje <= 7) {
        equivalencia = 2;
      } else if (puntaje == 8) {
        equivalencia = 3;
      } else if (puntaje == 9) {
        equivalencia = 4;
      } else if (puntaje == 10) {
        equivalencia = 5;
      } else if (puntaje == 11) {
        equivalencia = 6;
      } else if (puntaje <= 13) {
        equivalencia = 7;
      } else if (puntaje == 14) {
        equivalencia = 8;
      } else if (puntaje == 15) {
        equivalencia = 9;
      } else if (puntaje == 16) {
        equivalencia = 10;
      } else if (puntaje == 17) {
        equivalencia = 11;
      } else if (puntaje <= 19) {
        equivalencia = 12;
      } else if (puntaje == 20) {
        equivalencia = 13;
      } else if (puntaje == 21) {
        equivalencia = 14;
      } else if (puntaje == 22) {
        equivalencia = 15;
      } else if (puntaje == 23) {
        equivalencia = 16;
      } else if (puntaje == 24) {
        equivalencia = 17;
      } else if (puntaje == 25) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //M
  if (edad === "10,0" && subtest === "M") {
    for (let i = 0; i <= 35; i++) {
      if (puntaje <= 4) {
        equivalencia = 1;
      } else if (puntaje <= 6) {
        equivalencia = 2;
      } else if (puntaje <= 8) {
        equivalencia = 3;
      } else if (puntaje == 9) {
        equivalencia = 4;
      } else if (puntaje <= 11) {
        equivalencia = 5;
      } else if (puntaje <= 13) {
        equivalencia = 6;
      } else if (puntaje <= 15) {
        equivalencia = 7;
      } else if (puntaje == 16) {
        equivalencia = 8;
      } else if (puntaje <= 18) {
        equivalencia = 9;
      } else if (puntaje == 19) {
        equivalencia = 10;
      } else if (puntaje <= 21) {
        equivalencia = 11;
      } else if (puntaje == 22) {
        equivalencia = 12;
      } else if (puntaje <= 24) {
        equivalencia = 13;
      } else if (puntaje == 25) {
        equivalencia = 14;
      } else if (puntaje <= 27) {
        equivalencia = 15;
      } else if (puntaje == 28) {
        equivalencia = 16;
      } else if (puntaje <= 30) {
        equivalencia = 17;
      } else if (puntaje <= 32) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //C
  if (edad === "10,0" && subtest === "C") {
    for (let i = 0; i <= 42; i++) {
      if (puntaje <= 3) {
        equivalencia = 1;
      } else if (puntaje <= 6) {
        equivalencia = 2;
      } else if (puntaje <= 8) {
        equivalencia = 3;
      } else if (puntaje <= 10) {
        equivalencia = 4;
      } else if (puntaje <= 12) {
        equivalencia = 5;
      } else if (puntaje <= 14) {
        equivalencia = 6;
      } else if (puntaje <= 17) {
        equivalencia = 7;
      } else if (puntaje <= 19) {
        equivalencia = 8;
      } else if (puntaje <= 21) {
        equivalencia = 9;
      } else if (puntaje <= 23) {
        equivalencia = 10;
      } else if (puntaje <= 25) {
        equivalencia = 11;
      } else if (puntaje <= 27) {
        equivalencia = 12;
      } else if (puntaje == 28) {
        equivalencia = 13;
      } else if (puntaje <= 30) {
        equivalencia = 14;
      } else if (puntaje == 31) {
        equivalencia = 15;
      } else if (puntaje == 32) {
        equivalencia = 16;
      } else if (puntaje == 33) {
        equivalencia = 17;
      } else if (puntaje == 34) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //BS
  if (edad === "10,0" && subtest === "BS") {
    for (let i = 0; i <= 60; i++) {
      if (puntaje <= 4) {
        equivalencia = 1;
      } else if (puntaje == 5) {
        equivalencia = 2;
      } else if (puntaje <= 7) {
        equivalencia = 3;
      } else if (puntaje == 8) {
        equivalencia = 4;
      } else if (puntaje <= 10) {
        equivalencia = 5;
      } else if (puntaje <= 14) {
        equivalencia = 6;
      } else if (puntaje <= 16) {
        equivalencia = 7;
      } else if (puntaje <= 18) {
        equivalencia = 8;
      } else if (puntaje <= 20) {
        equivalencia = 9;
      } else if (puntaje <= 23) {
        equivalencia = 10;
      } else if (puntaje <= 25) {
        equivalencia = 11;
      } else if (puntaje <= 27) {
        equivalencia = 12;
      } else if (puntaje <= 29) {
        equivalencia = 13;
      } else if (puntaje <= 31) {
        equivalencia = 14;
      } else if (puntaje <= 34) {
        equivalencia = 15;
      } else if (puntaje <= 36) {
        equivalencia = 16;
      } else if (puntaje == 37) {
        equivalencia = 17;
      } else if (puntaje <= 39) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //CF
  if (edad === "10,0" && subtest === "CF") {
    for (let i = 0; i <= 38; i++) {
      if (puntaje <= 9) {
        equivalencia = 1;
      } else if (puntaje <= 11) {
        equivalencia = 2;
      } else if (puntaje == 12) {
        equivalencia = 3;
      } else if (puntaje <= 14) {
        equivalencia = 4;
      } else if (puntaje <= 16) {
        equivalencia = 5;
      } else if (puntaje <= 18) {
        equivalencia = 6;
      } else if (puntaje <= 20) {
        equivalencia = 7;
      } else if (puntaje == 21) {
        equivalencia = 8;
      } else if (puntaje <= 23) {
        equivalencia = 9;
      } else if (puntaje <= 25) {
        equivalencia = 10;
      } else if (puntaje == 26) {
        equivalencia = 11;
      } else if (puntaje <= 28) {
        equivalencia = 12;
      } else if (puntaje == 29) {
        equivalencia = 13;
      } else if (puntaje <= 31) {
        equivalencia = 14;
      } else if (puntaje == 32) {
        equivalencia = 15;
      } else if (puntaje == 33) {
        equivalencia = 16;
      } else if (puntaje == 34) {
        equivalencia = 17;
      } else if (puntaje <= 36) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //A
  if (edad === "10,0" && subtest === "A") {
    for (let i = 0; i <= 136; i++) {
      if (puntaje <= 21) {
        equivalencia = 1;
      } else if (puntaje <= 25) {
        equivalencia = 2;
      } else if (puntaje <= 29) {
        equivalencia = 3;
      } else if (puntaje <= 36) {
        equivalencia = 4;
      } else if (puntaje <= 42) {
        equivalencia = 5;
      } else if (puntaje <= 48) {
        equivalencia = 6;
      } else if (puntaje <= 54) {
        equivalencia = 7;
      } else if (puntaje <= 61) {
        equivalencia = 8;
      } else if (puntaje <= 66) {
        equivalencia = 9;
      } else if (puntaje <= 70) {
        equivalencia = 10;
      } else if (puntaje <= 74) {
        equivalencia = 11;
      } else if (puntaje <= 79) {
        equivalencia = 12;
      } else if (puntaje <= 83) {
        equivalencia = 13;
      } else if (puntaje <= 88) {
        equivalencia = 14;
      } else if (puntaje <= 92) {
        equivalencia = 15;
      } else if (puntaje <= 96) {
        equivalencia = 16;
      } else if (puntaje <= 101) {
        equivalencia = 17;
      } else if (puntaje <= 106) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //I
  if (edad === "10,0" && subtest === "I") {
    for (let i = 0; i <= 33; i++) {
      if (puntaje <= 4) {
        equivalencia = 1;
      } else if (puntaje <= 6) {
        equivalencia = 2;
      } else if (puntaje == 7) {
        equivalencia = 3;
      } else if (puntaje == 8) {
        equivalencia = 4;
      } else if (puntaje == 9) {
        equivalencia = 5;
      } else if (puntaje <= 11) {
        equivalencia = 6;
      } else if (puntaje == 12) {
        equivalencia = 7;
      } else if (puntaje == 13) {
        equivalencia = 8;
      } else if (puntaje == 14) {
        equivalencia = 9;
      } else if (puntaje <= 16) {
        equivalencia = 10;
      } else if (puntaje == 17) {
        equivalencia = 11;
      } else if (puntaje == 18) {
        equivalencia = 12;
      } else if (puntaje <= 20) {
        equivalencia = 13;
      } else if (puntaje == 21) {
        equivalencia = 14;
      } else if (puntaje <= 23) {
        equivalencia = 15;
      } else if (puntaje == 24) {
        equivalencia = 16;
      } else if (puntaje == 25) {
        equivalencia = 17;
      } else if (puntaje == 26) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //AR
  if (edad === "10,0" && subtest === "AR") {
    for (let i = 0; i <= 34; i++) {
      if (puntaje <= 12) {
        equivalencia = 1;
      } else if (puntaje == 13) {
        equivalencia = 2;
      } else if (puntaje == 14) {
        equivalencia = 3;
      } else if (puntaje == 15) {
        equivalencia = 4;
      } else if (puntaje == 16) {
        equivalencia = 5;
      } else if (puntaje == 17) {
        equivalencia = 6;
      } else if (puntaje <= 19) {
        equivalencia = 7;
      } else if (puntaje == 20) {
        equivalencia = 8;
      } else if (puntaje == 21) {
        equivalencia = 9;
      } else if (puntaje == 22) {
        equivalencia = 10;
      } else if (puntaje == 23) {
        equivalencia = 11;
      } else if (puntaje == 24) {
        equivalencia = 12;
      } else if (puntaje == 25) {
        equivalencia = 13;
      } else if (puntaje <= 27) {
        equivalencia = 14;
      } else if (puntaje == 28) {
        equivalencia = 15;
      } else if (puntaje == 29) {
        equivalencia = 16;
      } else if (puntaje == 30) {
        equivalencia = 17;
      } else if (puntaje == 31) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //AD
  if (edad === "10,0" && subtest === "AD") {
    for (let i = 0; i <= 24; i++) {
      if (puntaje <= 3) {
        equivalencia = 1;
      } else if (puntaje == 4) {
        equivalencia = 2;
      } else if (puntaje <= 6) {
        equivalencia = 3;
      } else if (puntaje == 7) {
        equivalencia = 4;
      } else if (puntaje == 8) {
        equivalencia = 5;
      } else if (puntaje <= 10) {
        equivalencia = 6;
      } else if (puntaje == 11) {
        equivalencia = 7;
      } else if (puntaje == 12) {
        equivalencia = 8;
      } else if (puntaje == 13) {
        equivalencia = 9;
      } else if (puntaje <= 15) {
        equivalencia = 10;
      } else if (puntaje == 16) {
        equivalencia = 11;
      } else if (puntaje == 17) {
        equivalencia = 12;
      } else if (puntaje == 18) {
        equivalencia = 13;
      } else if (puntaje == 19) {
        equivalencia = 15;
      } else if (puntaje == 20) {
        equivalencia = 16;
      } else if (puntaje == 21) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }


//Edad 10,4 a 10,7
//CC
if (edad === "10,4" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 6) {
      equivalencia = 3;
    } else if (puntaje <= 10) {
      equivalencia = 4;
    } else if (puntaje <= 14) {
      equivalencia = 5;
    } else if (puntaje <= 18) {
      equivalencia = 6;
    } else if (puntaje <= 22) {
      equivalencia = 7;
    } else if (puntaje <= 27) {
      equivalencia = 8;
    } else if (puntaje <= 31) {
      equivalencia = 9;
    } else if (puntaje <= 36) {
      equivalencia = 10;
    } else if (puntaje <= 40) {
      equivalencia = 11;
    } else if (puntaje <= 43) {
      equivalencia = 12;
    } else if (puntaje <= 47) {
      equivalencia = 13;
    } else if (puntaje <= 51) {
      equivalencia = 14;
    } else if (puntaje <= 55) {
      equivalencia = 15;
    } else if (puntaje <= 57) {
      equivalencia = 16;
    } else if (puntaje <= 59) {
      equivalencia = 17;
    } else if (puntaje <= 61) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "10,4" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 5) {
      equivalencia = 3;
    } else if (puntaje <= 7) {
      equivalencia = 4;
    } else if (puntaje <= 9) {
      equivalencia = 5;
    } else if (puntaje <= 12) {
      equivalencia = 6;
    } else if (puntaje <= 14) {
      equivalencia = 7;
    } else if (puntaje <= 16) {
      equivalencia = 8;
    } else if (puntaje <= 18) {
      equivalencia = 9;
    } else if (puntaje <= 20) {
      equivalencia = 10;
    } else if (puntaje <= 22) {
      equivalencia = 11;
    } else if (puntaje <= 24) {
      equivalencia = 12;
    } else if (puntaje <= 26) {
      equivalencia = 13;
    } else if (puntaje <= 28) {
      equivalencia = 14;
    } else if (puntaje == 29) {
      equivalencia = 15;
    } else if (puntaje <= 31) {
      equivalencia = 16;
    } else if (puntaje <= 33) {
      equivalencia = 17;
    } else if (puntaje == 34) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//RD
if (edad === "10,4" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 3;
    } else if (puntaje <= 10) {
      equivalencia = 5;
    } else if (puntaje == 11) {
      equivalencia = 6;
    } else if (puntaje == 12) {
      equivalencia = 7;
    } else if (puntaje == 13) {
      equivalencia = 8;
    } else if (puntaje == 14) {
      equivalencia = 9;
    } else if (puntaje == 15) {
      equivalencia = 10;
    } else if (puntaje == 16) {
      equivalencia = 11;
    } else if (puntaje == 17) {
      equivalencia = 12;
    } else if (puntaje == 18) {
      equivalencia = 13;
    } else if (puntaje == 19) {
      equivalencia = 14;
    } else if (puntaje == 20) {
      equivalencia = 15;
    } else if (puntaje == 21) {
      equivalencia = 16;
    } else if (puntaje == 22) {
      equivalencia = 17;
    } else if (puntaje == 23) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CO
if (edad === "10,4" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje == 8) {
      equivalencia = 2;
    } else if (puntaje == 9) {
      equivalencia = 3;
    } else if (puntaje == 10) {
      equivalencia = 4;
    } else if (puntaje == 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje == 13) {
      equivalencia = 7;
    } else if (puntaje <= 15) {
      equivalencia = 8;
    } else if (puntaje == 16) {
      equivalencia = 9;
    } else if (puntaje <= 18) {
      equivalencia = 10;
    } else if (puntaje == 19) {
      equivalencia = 11;
    } else if (puntaje == 20) {
      equivalencia = 12;
    } else if (puntaje == 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje == 25) {
      equivalencia = 17;
    } else if (puntaje == 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CL
if (edad === "10,4" && subtest === "CL") {
  for (let i = 0; i <= 119; i++) {
    if (puntaje <= 11) {
      equivalencia = 1;
    } else if (puntaje <= 15) {
      equivalencia = 2;
    } else if (puntaje <= 17) {
      equivalencia = 3;
    } else if (puntaje <= 20) {
      equivalencia = 4;
    } else if (puntaje <= 23) {
      equivalencia = 5;
    } else if (puntaje <= 27) {
      equivalencia = 6;
    } else if (puntaje <= 31) {
      equivalencia = 7;
    } else if (puntaje <= 35) {
      equivalencia = 8;
    } else if (puntaje <= 39) {
      equivalencia = 9;
    } else if (puntaje <= 42) {
      equivalencia = 10;
    } else if (puntaje <= 46) {
      equivalencia = 11;
    } else if (puntaje <= 50) {
      equivalencia = 12;
    } else if (puntaje <= 54) {
      equivalencia = 13;
    } else if (puntaje <= 58) {
      equivalencia = 14;
    } else if (puntaje <= 60) {
      equivalencia = 15;
    } else if (puntaje <= 62) {
      equivalencia = 16;
    } else if (puntaje <= 64) {
      equivalencia = 17;
    } else if (puntaje <= 68) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//V
if (edad === "10,4" && subtest === "V") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 12) {
      equivalencia = 1;
    } else if (puntaje <= 15) {
      equivalencia = 2;
    } else if (puntaje <= 18) {
      equivalencia = 3;
    } else if (puntaje <= 21) {
      equivalencia = 4;
    } else if (puntaje <= 24) {
      equivalencia = 5;
    } else if (puntaje <= 28) {
      equivalencia = 6;
    } else if (puntaje <= 30) {
      equivalencia = 7;
    } else if (puntaje <= 33) {
      equivalencia = 8;
    } else if (puntaje <= 36) {
      equivalencia = 9;
    } else if (puntaje <= 38) {
      equivalencia = 10;
    } else if (puntaje <= 41) {
      equivalencia = 11;
    } else if (puntaje <= 43) {
      equivalencia = 12;
    } else if (puntaje <= 46) {
      equivalencia = 13;
    } else if (puntaje <= 48) {
      equivalencia = 14;
    } else if (puntaje <= 50) {
      equivalencia = 15;
    } else if (puntaje <= 52) {
      equivalencia = 16;
    } else if (puntaje <= 54) {
      equivalencia = 17;
    } else if (puntaje <= 56) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//LN
if (edad === "10,4" && subtest === "LN") {
  for (let i = 0; i <= 30; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje <= 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 3;
    } else if (puntaje == 9) {
      equivalencia = 4;
    } else if (puntaje <= 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje == 13) {
      equivalencia = 7;
    } else if (puntaje <= 15) {
      equivalencia = 8;
    } else if (puntaje == 16) {
      equivalencia = 9;
    } else if (puntaje == 17) {
      equivalencia = 10;
    } else if (puntaje == 18) {
      equivalencia = 11;
    } else if (puntaje == 19) {
      equivalencia = 12;
    } else if (puntaje == 20) {
      equivalencia = 13;
    } else if (puntaje == 21) {
      equivalencia = 14;
    } else if (puntaje == 22) {
      equivalencia = 15;
    } else if (puntaje == 23) {
      equivalencia = 16;
    } else if (puntaje == 24) {
      equivalencia = 17;
    } else if (puntaje == 25) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//M
if (edad === "10,4" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje <= 4) {
      equivalencia = 1;
    } else if (puntaje <= 6) {
      equivalencia = 2;
    } else if (puntaje <= 8) {
      equivalencia = 3;
    } else if (puntaje == 9) {
      equivalencia = 4;
    } else if (puntaje <= 11) {
      equivalencia = 5;
    } else if (puntaje <= 13) {
      equivalencia = 6;
    } else if (puntaje <= 15) {
      equivalencia = 7;
    } else if (puntaje == 16) {
      equivalencia = 8;
    } else if (puntaje <= 18) {
      equivalencia = 9;
    } else if (puntaje <= 20) {
      equivalencia = 10;
    } else if (puntaje <= 22) {
      equivalencia = 11;
    } else if (puntaje == 23) {
      equivalencia = 12;
    } else if (puntaje <= 25) {
      equivalencia = 13;
    } else if (puntaje <= 27) {
      equivalencia = 14;
    } else if (puntaje == 28) {
      equivalencia = 15;
    } else if (puntaje == 29) {
      equivalencia = 16;
    } else if (puntaje <= 31) {
      equivalencia = 17;
    } else if (puntaje == 32) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//C
if (edad === "10,4" && subtest === "C") {
  for (let i = 0; i <= 42; i++) {
    if (puntaje <= 3) {
      equivalencia = 1;
    } else if (puntaje <= 6) {
      equivalencia = 2;
    } else if (puntaje <= 8) {
      equivalencia = 3;
    } else if (puntaje <= 10) {
      equivalencia = 4;
    } else if (puntaje <= 12) {
      equivalencia = 5;
    } else if (puntaje <= 14) {
      equivalencia = 6;
    } else if (puntaje <= 17) {
      equivalencia = 7;
    } else if (puntaje <= 19) {
      equivalencia = 8;
    } else if (puntaje <= 21) {
      equivalencia = 9;
    } else if (puntaje <= 23) {
      equivalencia = 10;
    } else if (puntaje <= 25) {
      equivalencia = 11;
    } else if (puntaje <= 27) {
      equivalencia = 12;
    } else if (puntaje == 28) {
      equivalencia = 13;
    } else if (puntaje <= 30) {
      equivalencia = 14;
    } else if (puntaje == 31) {
      equivalencia = 15;
    } else if (puntaje == 32) {
      equivalencia = 16;
    } else if (puntaje == 33) {
      equivalencia = 17;
    } else if (puntaje == 34) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//BS
if (edad === "10,4" && subtest === "BS") {
  for (let i = 0; i <= 60; i++) {
    if (puntaje <= 4) {
      equivalencia = 1;
    } else if (puntaje == 5) {
      equivalencia = 2;
    } else if (puntaje <= 7) {
      equivalencia = 3;
    } else if (puntaje == 8) {
      equivalencia = 4;
    } else if (puntaje <= 11) {
      equivalencia = 5;
    } else if (puntaje <= 14) {
      equivalencia = 6;
    } else if (puntaje <= 16) {
      equivalencia = 7;
    } else if (puntaje <= 18) {
      equivalencia = 8;
    } else if (puntaje <= 21) {
      equivalencia = 9;
    } else if (puntaje <= 23) {
      equivalencia = 10;
    } else if (puntaje <= 25) {
      equivalencia = 11;
    } else if (puntaje <= 27) {
      equivalencia = 12;
    } else if (puntaje <= 29) {
      equivalencia = 13;
    } else if (puntaje <= 31) {
      equivalencia = 14;
    } else if (puntaje <= 34) {
      equivalencia = 15;
    } else if (puntaje <= 36) {
      equivalencia = 16;
    } else if (puntaje <= 38) {
      equivalencia = 17;
    } else if (puntaje <= 40) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CF
if (edad === "10,4" && subtest === "CF") {
  for (let i = 0; i <= 38; i++) {
    if (puntaje <= 9) {
      equivalencia = 1;
    } else if (puntaje <= 11) {
      equivalencia = 2;
    } else if (puntaje == 12) {
      equivalencia = 3;
    } else if (puntaje <= 14) {
      equivalencia = 4;
    } else if (puntaje <= 16) {
      equivalencia = 5;
    } else if (puntaje <= 18) {
      equivalencia = 6;
    } else if (puntaje <= 20) {
      equivalencia = 7;
    } else if (puntaje <= 22) {
      equivalencia = 8;
    } else if (puntaje == 23) {
      equivalencia = 9;
    } else if (puntaje <= 25) {
      equivalencia = 10;
    } else if (puntaje == 26) {
      equivalencia = 11;
    } else if (puntaje <= 28) {
      equivalencia = 12;
    } else if (puntaje == 29) {
      equivalencia = 13;
    } else if (puntaje <= 31) {
      equivalencia = 14;
    } else if (puntaje == 32) {
      equivalencia = 15;
    } else if (puntaje == 33) {
      equivalencia = 16;
    } else if (puntaje == 34) {
      equivalencia = 17;
    } else if (puntaje <= 36) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//A
if (edad === "10,4" && subtest === "A") {
  for (let i = 0; i <= 136; i++) {
    if (puntaje <= 21) {
      equivalencia = 1;
    } else if (puntaje <= 25) {
      equivalencia = 2;
    } else if (puntaje <= 29) {
      equivalencia = 3;
    } else if (puntaje <= 37) {
      equivalencia = 4;
    } else if (puntaje <= 42) {
      equivalencia = 5;
    } else if (puntaje <= 48) {
      equivalencia = 6;
    } else if (puntaje <= 55) {
      equivalencia = 7;
    } else if (puntaje <= 61) {
      equivalencia = 8;
    } else if (puntaje <= 68) {
      equivalencia = 9;
    } else if (puntaje <= 74) {
      equivalencia = 10;
    } else if (puntaje <= 80) {
      equivalencia = 11;
    } else if (puntaje <= 84) {
      equivalencia = 12;
    } else if (puntaje <= 91) {
      equivalencia = 13;
    } else if (puntaje <= 95) {
      equivalencia = 14;
    } else if (puntaje <= 100) {
      equivalencia = 15;
    } else if (puntaje <= 105) {
      equivalencia = 16;
    } else if (puntaje <= 111) {
      equivalencia = 17;
    } else if (puntaje <= 116) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//I
if (edad === "10,4" && subtest === "I") {
  for (let i = 0; i <= 33; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje == 6) {
      equivalencia = 2;
    } else if (puntaje <= 8) {
      equivalencia = 3;
    } else if (puntaje == 9) {
      equivalencia = 4;
    } else if (puntaje <= 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje == 13) {
      equivalencia = 7;
    } else if (puntaje == 14) {
      equivalencia = 8;
    } else if (puntaje == 15) {
      equivalencia = 9;
    } else if (puntaje <= 17) {
      equivalencia = 10;
    } else if (puntaje == 18) {
      equivalencia = 11;
    } else if (puntaje == 19) {
      equivalencia = 12;
    } else if (puntaje == 20) {
      equivalencia = 13;
    } else if (puntaje <= 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje == 25) {
      equivalencia = 17;
    } else if (puntaje == 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AR
if (edad === "10,4" && subtest === "AR") {
  for (let i = 0; i <= 34; i++) {
    if (puntaje <= 12) {
      equivalencia = 1;
    } else if (puntaje == 13) {
      equivalencia = 2;
    } else if (puntaje == 14) {
      equivalencia = 3;
    } else if (puntaje == 15) {
      equivalencia = 4;
    } else if (puntaje <= 17) {
      equivalencia = 5;
    } else if (puntaje == 18) {
      equivalencia = 6;
    } else if (puntaje == 19) {
      equivalencia = 7;
    } else if (puntaje == 20) {
      equivalencia = 8;
    } else if (puntaje <= 22) {
      equivalencia = 9;
    } else if (puntaje == 23) {
      equivalencia = 10;
    } else if (puntaje == 24) {
      equivalencia = 11;
    } else if (puntaje == 25) {
      equivalencia = 12;
    } else if (puntaje == 26) {
      equivalencia = 13;
    } else if (puntaje == 27) {
      equivalencia = 14;
    } else if (puntaje == 28) {
      equivalencia = 15;
    } else if (puntaje == 29) {
      equivalencia = 16;
    } else if (puntaje == 30) {
      equivalencia = 17;
    } else if (puntaje == 31) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AD
if (edad === "10,4" && subtest === "AD") {
  for (let i = 0; i <= 24; i++) {
    if (puntaje <= 4) {
      equivalencia = 1;
    } else if (puntaje == 5) {
      equivalencia = 2;
    } else if (puntaje == 6) {
      equivalencia = 3;
    } else if (puntaje == 7) {
      equivalencia = 4;
    } else if (puntaje <= 9) {
      equivalencia = 5;
    } else if (puntaje == 10) {
      equivalencia = 6;
    } else if (puntaje == 11) {
      equivalencia = 7;
    } else if (puntaje == 12) {
      equivalencia = 8;
    } else if (puntaje == 13) {
      equivalencia = 9;
    } else if (puntaje <= 15) {
      equivalencia = 10;
    } else if (puntaje == 16) {
      equivalencia = 11;
    } else if (puntaje == 17) {
      equivalencia = 12;
    } else if (puntaje == 18) {
      equivalencia = 13;
    } else if (puntaje == 19) {
      equivalencia = 15;
    } else if (puntaje == 20) {
      equivalencia = 16;
    } else if (puntaje == 21) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }


//Edad 10,8 a 10,11
//CC
if (edad === "10,8" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 6) {
      equivalencia = 3;
    } else if (puntaje <= 10) {
      equivalencia = 4;
    } else if (puntaje <= 14) {
      equivalencia = 5;
    } else if (puntaje <= 19) {
      equivalencia = 6;
    } else if (puntaje <= 23) {
      equivalencia = 7;
    } else if (puntaje <= 27) {
      equivalencia = 8;
    } else if (puntaje <= 32) {
      equivalencia = 9;
    } else if (puntaje <= 36) {
      equivalencia = 10;
    } else if (puntaje <= 40) {
      equivalencia = 11;
    } else if (puntaje <= 44) {
      equivalencia = 12;
    } else if (puntaje <= 48) {
      equivalencia = 13;
    } else if (puntaje <= 51) {
      equivalencia = 14;
    } else if (puntaje <= 56) {
      equivalencia = 15;
    } else if (puntaje <= 58) {
      equivalencia = 16;
    } else if (puntaje <= 60) {
      equivalencia = 17;
    } else if (puntaje <= 62) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "10,8" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 3) {
      equivalencia = 2;
    } else if (puntaje <= 5) {
      equivalencia = 3;
    } else if (puntaje <= 7) {
      equivalencia = 4;
    } else if (puntaje <= 9) {
      equivalencia = 5;
    } else if (puntaje <= 12) {
      equivalencia = 6;
    } else if (puntaje <= 14) {
      equivalencia = 7;
    } else if (puntaje <= 16) {
      equivalencia = 8;
    } else if (puntaje <= 19) {
      equivalencia = 9;
    } else if (puntaje <= 21) {
      equivalencia = 10;
    } else if (puntaje <= 23) {
      equivalencia = 11;
    } else if (puntaje == 24) {
      equivalencia = 12;
    } else if (puntaje <= 26) {
      equivalencia = 13;
    } else if (puntaje <= 28) {
      equivalencia = 14;
    } else if (puntaje == 29) {
      equivalencia = 15;
    } else if (puntaje <= 31) {
      equivalencia = 16;
    } else if (puntaje <= 33) {
      equivalencia = 17;
    } else if (puntaje <= 35) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//RD
if (edad === "10,8" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 3;
    } else if (puntaje == 9) {
      equivalencia = 4;
    } else if (puntaje == 10) {
      equivalencia = 5;
    } else if (puntaje == 11) {
      equivalencia = 6;
    } else if (puntaje == 12) {
      equivalencia = 7;
    } else if (puntaje == 13) {
      equivalencia = 8;
    } else if (puntaje == 14) {
      equivalencia = 9;
    } else if (puntaje == 15) {
      equivalencia = 10;
    } else if (puntaje == 16) {
      equivalencia = 11;
    } else if (puntaje == 17) {
      equivalencia = 12;
    } else if (puntaje == 18) {
      equivalencia = 13;
    } else if (puntaje == 19) {
      equivalencia = 14;
    } else if (puntaje == 20) {
      equivalencia = 15;
    } else if (puntaje == 21) {
      equivalencia = 16;
    } else if (puntaje == 22) {
      equivalencia = 17;
    } else if (puntaje == 23) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CO
if (edad === "10,8" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje == 8) {
      equivalencia = 2;
    } else if (puntaje == 9) {
      equivalencia = 3;
    } else if (puntaje == 10) {
      equivalencia = 4;
    } else if (puntaje == 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje == 13) {
      equivalencia = 7;
    } else if (puntaje <= 15) {
      equivalencia = 8;
    } else if (puntaje == 16) {
      equivalencia = 9;
    } else if (puntaje <= 18) {
      equivalencia = 10;
    } else if (puntaje == 19) {
      equivalencia = 11;
    } else if (puntaje == 20) {
      equivalencia = 12;
    } else if (puntaje == 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje == 25) {
      equivalencia = 17;
    } else if (puntaje == 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CL
if (edad === "10,8" && subtest === "CL") {
  for (let i = 0; i <= 119; i++) {
    if (puntaje <= 12) {
      equivalencia = 1;
    } else if (puntaje <= 18) {
      equivalencia = 2;
    } else if (puntaje <= 20) {
      equivalencia = 3;
    } else if (puntaje <= 25) {
      equivalencia = 4;
    } else if (puntaje <= 28) {
      equivalencia = 5;
    } else if (puntaje <= 32) {
      equivalencia = 6;
    } else if (puntaje <= 35) {
      equivalencia = 7;
    } else if (puntaje <= 39) {
      equivalencia = 8;
    } else if (puntaje <= 42) {
      equivalencia = 9;
    } else if (puntaje <= 45) {
      equivalencia = 10;
    } else if (puntaje <= 48) {
      equivalencia = 11;
    } else if (puntaje <= 52) {
      equivalencia = 12;
    } else if (puntaje <= 55) {
      equivalencia = 13;
    } else if (puntaje <= 58) {
      equivalencia = 14;
    } else if (puntaje <= 60) {
      equivalencia = 15;
    } else if (puntaje <= 63) {
      equivalencia = 16;
    } else if (puntaje <= 65) {
      equivalencia = 17;
    } else if (puntaje <= 68) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//V
if (edad === "10,8" && subtest === "V") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 13) {
      equivalencia = 1;
    } else if (puntaje <= 15) {
      equivalencia = 2;
    } else if (puntaje <= 19) {
      equivalencia = 3;
    } else if (puntaje <= 21) {
      equivalencia = 4;
    } else if (puntaje <= 24) {
      equivalencia = 5;
    } else if (puntaje <= 28) {
      equivalencia = 6;
    } else if (puntaje <= 31) {
      equivalencia = 7;
    } else if (puntaje <= 34) {
      equivalencia = 8;
    } else if (puntaje <= 37) {
      equivalencia = 9;
    } else if (puntaje <= 40) {
      equivalencia = 10;
    } else if (puntaje <= 42) {
      equivalencia = 11;
    } else if (puntaje <= 44) {
      equivalencia = 12;
    } else if (puntaje <= 46) {
      equivalencia = 13;
    } else if (puntaje <= 48) {
      equivalencia = 14;
    } else if (puntaje <= 50) {
      equivalencia = 15;
    } else if (puntaje <= 52) {
      equivalencia = 16;
    } else if (puntaje <= 54) {
      equivalencia = 17;
    } else if (puntaje <= 56) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//LN
if (edad === "10,8" && subtest === "LN") {
  for (let i = 0; i <= 30; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje == 8) {
      equivalencia = 2;
    } else if (puntaje == 9) {
      equivalencia = 3;
    } else if (puntaje <= 11) {
      equivalencia = 4;
    } else if (puntaje == 12) {
      equivalencia = 5;
    } else if (puntaje == 13) {
      equivalencia = 6;
    } else if (puntaje == 14) {
      equivalencia = 7;
    } else if (puntaje == 15) {
      equivalencia = 8;
    } else if (puntaje == 16) {
      equivalencia = 9;
    } else if (puntaje == 17) {
      equivalencia = 10;
    } else if (puntaje == 18) {
      equivalencia = 11;
    } else if (puntaje == 19) {
      equivalencia = 12;
    } else if (puntaje == 20) {
      equivalencia = 13;
    } else if (puntaje == 21) {
      equivalencia = 14;
    } else if (puntaje == 22) {
      equivalencia = 15;
    } else if (puntaje == 23) {
      equivalencia = 16;
    } else if (puntaje == 24) {
      equivalencia = 17;
    } else if (puntaje == 25) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//M
if (edad === "10,8" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje == 6) {
      equivalencia = 2;
    } else if (puntaje <= 8) {
      equivalencia = 3;
    } else if (puntaje <= 10) {
      equivalencia = 4;
    } else if (puntaje == 11) {
      equivalencia = 5;
    } else if (puntaje <= 13) {
      equivalencia = 6;
    } else if (puntaje <= 15) {
      equivalencia = 7;
    } else if (puntaje <= 17) {
      equivalencia = 8;
    } else if (puntaje == 18) {
      equivalencia = 9;
    } else if (puntaje <= 20) {
      equivalencia = 10;
    } else if (puntaje <= 22) {
      equivalencia = 11;
    } else if (puntaje == 23) {
      equivalencia = 12;
    } else if (puntaje <= 25) {
      equivalencia = 13;
    } else if (puntaje <= 27) {
      equivalencia = 14;
    } else if (puntaje == 28) {
      equivalencia = 15;
    } else if (puntaje == 29) {
      equivalencia = 16;
    } else if (puntaje <= 31) {
      equivalencia = 17;
    } else if (puntaje == 32) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

  //C
  if (edad === "10,8" && subtest === "C") {
    for (let i = 0; i <= 42; i++) {
      if (puntaje <= 4) {
        equivalencia = 1;
      } else if (puntaje <= 7) {
        equivalencia = 2;
      } else if (puntaje <= 10) {
        equivalencia = 3;
      } else if (puntaje <= 12) {
        equivalencia = 4;
      } else if (puntaje <= 14) {
        equivalencia = 5;
      } else if (puntaje <= 16) {
        equivalencia = 6;
      } else if (puntaje <= 18) {
        equivalencia = 7;
      } else if (puntaje <= 20) {
        equivalencia = 8;
      } else if (puntaje <= 22) {
        equivalencia = 9;
      } else if (puntaje <= 24) {
        equivalencia = 10;
      } else if (puntaje <= 26) {
        equivalencia = 11;
      } else if (puntaje == 27) {
        equivalencia = 12;
      } else if (puntaje <= 29) {
        equivalencia = 13;
      } else if (puntaje == 30) {
        equivalencia = 14;
      } else if (puntaje == 31) {
        equivalencia = 15;
      } else if (puntaje == 32) {
        equivalencia = 16;
      } else if (puntaje == 33) {
        equivalencia = 17;
      } else if (puntaje == 34) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //BS
  if (edad === "10,8" && subtest === "BS") {
    for (let i = 0; i <= 60; i++) {
      if (puntaje <= 6) {
        equivalencia = 1;
      } else if (puntaje <= 8) {
        equivalencia = 2;
      } else if (puntaje <= 10) {
        equivalencia = 3;
      } else if (puntaje <= 12) {
        equivalencia = 4;
      } else if (puntaje <= 14) {
        equivalencia = 5;
      } else if (puntaje <= 16) {
        equivalencia = 6;
      } else if (puntaje <= 18) {
        equivalencia = 7;
      } else if (puntaje <= 20) {
        equivalencia = 8;
      } else if (puntaje == 21) {
        equivalencia = 9;
      } else if (puntaje <= 23) {
        equivalencia = 10;
      } else if (puntaje <= 25) {
        equivalencia = 11;
      } else if (puntaje <= 27) {
        equivalencia = 12;
      } else if (puntaje <= 29) {
        equivalencia = 13;
      } else if (puntaje <= 31) {
        equivalencia = 14;
      } else if (puntaje <= 34) {
        equivalencia = 15;
      } else if (puntaje <= 36) {
        equivalencia = 16;
      } else if (puntaje <= 38) {
        equivalencia = 17;
      } else if (puntaje <= 40) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //CF
  if (edad === "10,8" && subtest === "CF") {
    for (let i = 0; i <= 38; i++) {
      if (puntaje <= 9) {
        equivalencia = 1;
      } else if (puntaje <= 11) {
        equivalencia = 2;
      } else if (puntaje == 12) {
        equivalencia = 3;
      } else if (puntaje <= 14) {
        equivalencia = 4;
      } else if (puntaje <= 16) {
        equivalencia = 5;
      } else if (puntaje <= 18) {
        equivalencia = 6;
      } else if (puntaje <= 20) {
        equivalencia = 7;
      } else if (puntaje <= 22) {
        equivalencia = 8;
      } else if (puntaje == 23) {
        equivalencia = 9;
      } else if (puntaje <= 25) {
        equivalencia = 10;
      } else if (puntaje == 26) {
        equivalencia = 11;
      } else if (puntaje <= 28) {
        equivalencia = 12;
      } else if (puntaje == 29) {
        equivalencia = 13;
      } else if (puntaje <= 31) {
        equivalencia = 14;
      } else if (puntaje == 32) {
        equivalencia = 15;
      } else if (puntaje == 33) {
        equivalencia = 16;
      } else if (puntaje == 34) {
        equivalencia = 17;
      } else if (puntaje <= 36) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //A
  if (edad === "10,8" && subtest === "A") {
    for (let i = 0; i <= 136; i++) {
      if (puntaje <= 22) {
        equivalencia = 1;
      } else if (puntaje <= 25) {
        equivalencia = 2;
      } else if (puntaje <= 33) {
        equivalencia = 3;
      } else if (puntaje <= 40) {
        equivalencia = 4;
      } else if (puntaje <= 47) {
        equivalencia = 5;
      } else if (puntaje <= 54) {
        equivalencia = 6;
      } else if (puntaje <= 59) {
        equivalencia = 7;
      } else if (puntaje <= 65) {
        equivalencia = 8;
      } else if (puntaje <= 70) {
        equivalencia = 9;
      } else if (puntaje <= 75) {
        equivalencia = 10;
      } else if (puntaje <= 80) {
        equivalencia = 11;
      } else if (puntaje <= 85) {
        equivalencia = 12;
      } else if (puntaje <= 91) {
        equivalencia = 13;
      } else if (puntaje <= 96) {
        equivalencia = 14;
      } else if (puntaje <= 101) {
        equivalencia = 15;
      } else if (puntaje <= 106) {
        equivalencia = 16;
      } else if (puntaje <= 111) {
        equivalencia = 17;
      } else if (puntaje <= 117) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //I
  if (edad === "10,8" && subtest === "I") {
    for (let i = 0; i <= 33; i++) {
      if (puntaje <= 6) {
        equivalencia = 1;
      } else if (puntaje == 7) {
        equivalencia = 2;
      } else if (puntaje == 8) {
        equivalencia = 3;
      } else if (puntaje == 9) {
        equivalencia = 4;
      } else if (puntaje <= 11) {
        equivalencia = 5;
      } else if (puntaje == 12) {
        equivalencia = 6;
      } else if (puntaje == 13) {
        equivalencia = 7;
      } else if (puntaje == 14) {
        equivalencia = 8;
      } else if (puntaje <= 16) {
        equivalencia = 9;
      } else if (puntaje == 17) {
        equivalencia = 10;
      } else if (puntaje == 18) {
        equivalencia = 11;
      } else if (puntaje == 19) {
        equivalencia = 12;
      } else if (puntaje <= 21) {
        equivalencia = 13;
      } else if (puntaje == 22) {
        equivalencia = 14;
      } else if (puntaje == 23) {
        equivalencia = 15;
      } else if (puntaje == 24) {
        equivalencia = 16;
      } else if (puntaje <= 26) {
        equivalencia = 17;
      } else if (puntaje == 27) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //AR
  if (edad === "10,8" && subtest === "AR") {
    for (let i = 0; i <= 34; i++) {
      if (puntaje <= 13) {
        equivalencia = 1;
      } else if (puntaje == 14) {
        equivalencia = 2;
      } else if (puntaje == 15) {
        equivalencia = 3;
      } else if (puntaje == 16) {
        equivalencia = 4;
      } else if (puntaje <= 18) {
        equivalencia = 5;
      } else if (puntaje == 19) {
        equivalencia = 6;
      } else if (puntaje == 20) {
        equivalencia = 7;
      } else if (puntaje == 21) {
        equivalencia = 8;
      } else if (puntaje == 22) {
        equivalencia = 9;
      } else if (puntaje == 23) {
        equivalencia = 10;
      } else if (puntaje == 24) {
        equivalencia = 11;
      } else if (puntaje == 25) {
        equivalencia = 12;
      } else if (puntaje == 26) {
        equivalencia = 13;
      } else if (puntaje == 27) {
        equivalencia = 14;
      } else if (puntaje == 28) {
        equivalencia = 15;
      } else if (puntaje == 29) {
        equivalencia = 16;
      } else if (puntaje == 30) {
        equivalencia = 17;
      } else if (puntaje == 31) {
        equivalencia = 18;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

  //AD
  if (edad === "10,8" && subtest === "AD") {
    for (let i = 0; i <= 24; i++) {
      if (puntaje <= 5) {
        equivalencia = 1;
      } else if (puntaje == 6) {
        equivalencia = 2;
      } else if (puntaje == 7) {
        equivalencia = 3;
      } else if (puntaje == 8) {
        equivalencia = 4;
      } else if (puntaje == 9) {
        equivalencia = 5;
      } else if (puntaje == 10) {
        equivalencia = 6;
      } else if (puntaje == 11) {
        equivalencia = 7;
      } else if (puntaje == 12) {
        equivalencia = 8;
      } else if (puntaje == 13) {
        equivalencia = 9;
      } else if (puntaje <= 15) {
        equivalencia = 10;
      } else if (puntaje == 16) {
        equivalencia = 11;
      } else if (puntaje == 17) {
        equivalencia = 12;
      } else if (puntaje == 18) {
        equivalencia = 13;
      } else if (puntaje == 19) {
        equivalencia = 14;
      } else if (puntaje == 20) {
        equivalencia = 16;
      } else if (puntaje == 21) {
        equivalencia = 17;
      } else {
        equivalencia = 19;
      }  
      var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
      inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
      }
    }

//Edad 11 a 11,3
//CC
if (edad === "11,0" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 4) {
      equivalencia = 2;
    } else if (puntaje <= 6) {
      equivalencia = 3;
    } else if (puntaje <= 11) {
      equivalencia = 4;
    } else if (puntaje <= 15) {
      equivalencia = 5;
    } else if (puntaje <= 20) {
      equivalencia = 6;
    } else if (puntaje <= 24) {
      equivalencia = 7;
    } else if (puntaje <= 28) {
      equivalencia = 8;
    } else if (puntaje <= 32) {
      equivalencia = 9;
    } else if (puntaje <= 36) {
      equivalencia = 10;
    } else if (puntaje <= 40) {
      equivalencia = 11;
    } else if (puntaje <= 44) {
      equivalencia = 12;
    } else if (puntaje <= 48) {
      equivalencia = 13;
    } else if (puntaje <= 51) {
      equivalencia = 14;
    } else if (puntaje <= 56) {
      equivalencia = 15;
    } else if (puntaje <= 58) {
      equivalencia = 16;
    } else if (puntaje <= 60) {
      equivalencia = 17;
    } else if (puntaje <= 62) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "11,0" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
    if (puntaje <= 2) {
      equivalencia = 1;
    } else if (puntaje == 3) {
      equivalencia = 2;
    } else if (puntaje <= 5) {
      equivalencia = 3;
    } else if (puntaje <= 7) {
      equivalencia = 4;
    } else if (puntaje <= 9) {
      equivalencia = 5;
    } else if (puntaje <= 12) {
      equivalencia = 6;
    } else if (puntaje <= 14) {
      equivalencia = 7;
    } else if (puntaje <= 17) {
      equivalencia = 8;
    } else if (puntaje <= 19) {
      equivalencia = 9;
    } else if (puntaje <= 21) {
      equivalencia = 10;
    } else if (puntaje <= 23) {
      equivalencia = 11;
    } else if (puntaje == 24) {
      equivalencia = 12;
    } else if (puntaje <= 26) {
      equivalencia = 13;
    } else if (puntaje <= 28) {
      equivalencia = 14;
    } else if (puntaje == 29) {
      equivalencia = 15;
    } else if (puntaje <= 31) {
      equivalencia = 16;
    } else if (puntaje <= 33) {
      equivalencia = 17;
    } else if (puntaje <= 35) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//RD
if (edad === "11,0" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 3;
    } else if (puntaje == 9) {
      equivalencia = 4;
    } else if (puntaje == 10) {
      equivalencia = 5;
    } else if (puntaje == 11) {
      equivalencia = 6;
    } else if (puntaje == 12) {
      equivalencia = 7;
    } else if (puntaje == 13) {
      equivalencia = 8;
    } else if (puntaje == 14) {
      equivalencia = 9;
    } else if (puntaje == 15) {
      equivalencia = 10;
    } else if (puntaje == 16) {
      equivalencia = 11;
    } else if (puntaje == 17) {
      equivalencia = 12;
    } else if (puntaje == 18) {
      equivalencia = 13;
    } else if (puntaje <= 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 16;
    } else if (puntaje == 23) {
      equivalencia = 17;
    } else if (puntaje == 24) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CO
if (edad === "11,0" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje == 8) {
      equivalencia = 2;
    } else if (puntaje == 9) {
      equivalencia = 3;
    } else if (puntaje == 10) {
      equivalencia = 4;
    } else if (puntaje == 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje <= 14) {
      equivalencia = 7;
    } else if (puntaje == 15) {
      equivalencia = 8;
    } else if (puntaje == 16) {
      equivalencia = 9;
    } else if (puntaje <= 18) {
      equivalencia = 10;
    } else if (puntaje == 19) {
      equivalencia = 11;
    } else if (puntaje == 20) {
      equivalencia = 12;
    } else if (puntaje == 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje == 25) {
      equivalencia = 17;
    } else if (puntaje == 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CL
if (edad === "11,0" && subtest === "CL") {
  for (let i = 0; i <= 119; i++) {
    if (puntaje <= 14) {
      equivalencia = 1;
    } else if (puntaje <= 18) {
      equivalencia = 2;
    } else if (puntaje <= 21) {
      equivalencia = 3;
    } else if (puntaje <= 25) {
      equivalencia = 4;
    } else if (puntaje <= 28) {
      equivalencia = 5;
    } else if (puntaje <= 32) {
      equivalencia = 6;
    } else if (puntaje <= 35) {
      equivalencia = 7;
    } else if (puntaje <= 39) {
      equivalencia = 8;
    } else if (puntaje <= 42) {
      equivalencia = 9;
    } else if (puntaje <= 46) {
      equivalencia = 10;
    } else if (puntaje <= 49) {
      equivalencia = 11;
    } else if (puntaje <= 52) {
      equivalencia = 12;
    } else if (puntaje <= 55) {
      equivalencia = 13;
    } else if (puntaje <= 58) {
      equivalencia = 14;
    } else if (puntaje <= 60) {
      equivalencia = 15;
    } else if (puntaje <= 63) {
      equivalencia = 16;
    } else if (puntaje <= 66) {
      equivalencia = 17;
    } else if (puntaje <= 68) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//V
if (edad === "11,0" && subtest === "V") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 13) {
      equivalencia = 1;
    } else if (puntaje <= 15) {
      equivalencia = 2;
    } else if (puntaje <= 19) {
      equivalencia = 3;
    } else if (puntaje <= 21) {
      equivalencia = 4;
    } else if (puntaje <= 24) {
      equivalencia = 5;
    } else if (puntaje <= 28) {
      equivalencia = 6;
    } else if (puntaje <= 31) {
      equivalencia = 7;
    } else if (puntaje <= 34) {
      equivalencia = 8;
    } else if (puntaje <= 37) {
      equivalencia = 9;
    } else if (puntaje <= 40) {
      equivalencia = 10;
    } else if (puntaje <= 42) {
      equivalencia = 11;
    } else if (puntaje <= 44) {
      equivalencia = 12;
    } else if (puntaje <= 46) {
      equivalencia = 13;
    } else if (puntaje <= 48) {
      equivalencia = 14;
    } else if (puntaje <= 50) {
      equivalencia = 15;
    } else if (puntaje <= 52) {
      equivalencia = 16;
    } else if (puntaje <= 54) {
      equivalencia = 17;
    } else if (puntaje <= 56) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//LN
if (edad === "11,0" && subtest === "LN") {
  for (let i = 0; i <= 30; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje == 8) {
      equivalencia = 2;
    } else if (puntaje <= 10) {
      equivalencia = 3;
    } else if (puntaje == 11) {
      equivalencia = 4;
    } else if (puntaje == 12) {
      equivalencia = 5;
    } else if (puntaje == 13) {
      equivalencia = 6;
    } else if (puntaje == 14) {
      equivalencia = 7;
    } else if (puntaje == 15) {
      equivalencia = 8;
    } else if (puntaje == 16) {
      equivalencia = 9;
    } else if (puntaje == 17) {
      equivalencia = 10;
    } else if (puntaje == 18) {
      equivalencia = 11;
    } else if (puntaje == 19) {
      equivalencia = 12;
    } else if (puntaje == 20) {
      equivalencia = 13;
    } else if (puntaje == 21) {
      equivalencia = 14;
    } else if (puntaje == 22) {
      equivalencia = 15;
    } else if (puntaje == 23) {
      equivalencia = 16;
    } else if (puntaje == 24) {
      equivalencia = 17;
    } else if (puntaje == 25) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//M
if (edad === "11,0" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje == 6) {
      equivalencia = 2;
    } else if (puntaje <= 8) {
      equivalencia = 3;
    } else if (puntaje <= 10) {
      equivalencia = 4;
    } else if (puntaje <= 12) {
      equivalencia = 5;
    } else if (puntaje == 13) {
      equivalencia = 6;
    } else if (puntaje <= 15) {
      equivalencia = 7;
    } else if (puntaje <= 17) {
      equivalencia = 8;
    } else if (puntaje <= 19) {
      equivalencia = 9;
    } else if (puntaje == 20) {
      equivalencia = 10;
    } else if (puntaje <= 22) {
      equivalencia = 11;
    } else if (puntaje <= 24) {
      equivalencia = 12;
    } else if (puntaje == 25) {
      equivalencia = 13;
    } else if (puntaje <= 27) {
      equivalencia = 14;
    } else if (puntaje == 28) {
      equivalencia = 15;
    } else if (puntaje == 29) {
      equivalencia = 16;
    } else if (puntaje <= 31) {
      equivalencia = 17;
    } else if (puntaje == 32) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//C
if (edad === "11,0" && subtest === "C") {
  for (let i = 0; i <= 42; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje <= 8) {
      equivalencia = 2;
    } else if (puntaje <= 11) {
      equivalencia = 3;
    } else if (puntaje <= 13) {
      equivalencia = 4;
    } else if (puntaje <= 15) {
      equivalencia = 5;
    } else if (puntaje <= 17) {
      equivalencia = 6;
    } else if (puntaje == 18) {
      equivalencia = 7;
    } else if (puntaje <= 20) {
      equivalencia = 8;
    } else if (puntaje <= 22) {
      equivalencia = 9;
    } else if (puntaje <= 24) {
      equivalencia = 10;
    } else if (puntaje <= 26) {
      equivalencia = 11;
    } else if (puntaje <= 28) {
      equivalencia = 12;
    } else if (puntaje == 29) {
      equivalencia = 13;
    } else if (puntaje <= 31) {
      equivalencia = 14;
    } else if (puntaje == 32) {
      equivalencia = 15;
    } else if (puntaje <= 33) {
      equivalencia = 16;
    } else if (puntaje <= 34) {
      equivalencia = 17;
    } else if (puntaje <= 35) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//BS
if (edad === "11,0" && subtest === "BS") {
  for (let i = 0; i <= 60; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje <= 9) {
      equivalencia = 2;
    } else if (puntaje <= 11) {
      equivalencia = 3;
    } else if (puntaje <= 14) {
      equivalencia = 4;
    } else if (puntaje == 15) {
      equivalencia = 5;
    } else if (puntaje <= 17) {
      equivalencia = 6;
    } else if (puntaje <= 19) {
      equivalencia = 7;
    } else if (puntaje == 20) {
      equivalencia = 8;
    } else if (puntaje <= 22) {
      equivalencia = 9;
    } else if (puntaje <= 24) {
      equivalencia = 10;
    } else if (puntaje == 25) {
      equivalencia = 11;
    } else if (puntaje <= 27) {
      equivalencia = 12;
    } else if (puntaje <= 29) {
      equivalencia = 13;
    } else if (puntaje <= 31) {
      equivalencia = 14;
    } else if (puntaje <= 34) {
      equivalencia = 15;
    } else if (puntaje <= 36) {
      equivalencia = 16;
    } else if (puntaje <= 38) {
      equivalencia = 17;
    } else if (puntaje <= 40) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CF
if (edad === "11,0" && subtest === "CF") {
  for (let i = 0; i <= 38; i++) {
    if (puntaje <= 10) {
      equivalencia = 1;
    } else if (puntaje <= 12) {
      equivalencia = 2;
    } else if (puntaje == 13) {
      equivalencia = 3;
    } else if (puntaje <= 15) {
      equivalencia = 4;
    } else if (puntaje <= 17) {
      equivalencia = 5;
    } else if (puntaje == 18) {
      equivalencia = 6;
    } else if (puntaje <= 20) {
      equivalencia = 7;
    } else if (puntaje <= 22) {
      equivalencia = 8;
    } else if (puntaje == 23) {
      equivalencia = 9;
    } else if (puntaje <= 25) {
      equivalencia = 10;
    } else if (puntaje == 26) {
      equivalencia = 11;
    } else if (puntaje <= 28) {
      equivalencia = 12;
    } else if (puntaje == 29) {
      equivalencia = 13;
    } else if (puntaje <= 31) {
      equivalencia = 14;
    } else if (puntaje == 32) {
      equivalencia = 15;
    } else if (puntaje == 33) {
      equivalencia = 16;
    } else if (puntaje <= 35) {
      equivalencia = 17;
    } else if (puntaje == 36) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//A
if (edad === "11,0" && subtest === "A") {
  for (let i = 0; i <= 136; i++) {
    if (puntaje <= 22) {
      equivalencia = 1;
    } else if (puntaje <= 26) {
      equivalencia = 2;
    } else if (puntaje <= 34) {
      equivalencia = 3;
    } else if (puntaje <= 40) {
      equivalencia = 4;
    } else if (puntaje <= 48) {
      equivalencia = 5;
    } else if (puntaje <= 54) {
      equivalencia = 6;
    } else if (puntaje <= 60) {
      equivalencia = 7;
    } else if (puntaje <= 65) {
      equivalencia = 8;
    } else if (puntaje <= 71) {
      equivalencia = 9;
    } else if (puntaje <= 78) {
      equivalencia = 10;
    } else if (puntaje <= 83) {
      equivalencia = 11;
    } else if (puntaje <= 87) {
      equivalencia = 12;
    } else if (puntaje <= 92) {
      equivalencia = 13;
    } else if (puntaje <= 97) {
      equivalencia = 14;
    } else if (puntaje <= 102) {
      equivalencia = 15;
    } else if (puntaje <= 107) {
      equivalencia = 16;
    } else if (puntaje <= 112) {
      equivalencia = 17;
    } else if (puntaje <= 117) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//I
if (edad === "11,0" && subtest === "I") {
  for (let i = 0; i <= 33; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 3;
    } else if (puntaje == 9) {
      equivalencia = 4;
    } else if (puntaje <= 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje <= 14) {
      equivalencia = 7;
    } else if (puntaje == 15) {
      equivalencia = 8;
    } else if (puntaje == 16) {
      equivalencia = 9;
    } else if (puntaje <= 18) {
      equivalencia = 10;
    } else if (puntaje == 19) {
      equivalencia = 11;
    } else if (puntaje == 20) {
      equivalencia = 12;
    } else if (puntaje == 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje <= 26) {
      equivalencia = 17;
    } else if (puntaje == 27) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AR
if (edad === "11,0" && subtest === "AR") {
  for (let i = 0; i <= 34; i++) {
    if (puntaje <= 14) {
      equivalencia = 1;
    } else if (puntaje == 15) {
      equivalencia = 2;
    } else if (puntaje == 16) {
      equivalencia = 3;
    } else if (puntaje == 17) {
      equivalencia = 4;
    } else if (puntaje == 18) {
      equivalencia = 5;
    } else if (puntaje <= 20) {
      equivalencia = 6;
    } else if (puntaje == 21) {
      equivalencia = 7;
    } else if (puntaje == 22) {
      equivalencia = 8;
    } else if (puntaje == 23) {
      equivalencia = 10;
    } else if (puntaje == 24) {
      equivalencia = 11;
    } else if (puntaje == 25) {
      equivalencia = 12;
    } else if (puntaje == 26) {
      equivalencia = 13;
    } else if (puntaje == 27) {
      equivalencia = 14;
    } else if (puntaje == 28) {
      equivalencia = 15;
    } else if (puntaje == 29) {
      equivalencia = 16;
    } else if (puntaje == 30) {
      equivalencia = 17;
    } else if (puntaje == 31) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AD
if (edad === "11,0" && subtest === "AD") {
  for (let i = 0; i <= 24; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje == 6) {
      equivalencia = 2;
    } else if (puntaje == 7) {
      equivalencia = 3;
    } else if (puntaje == 8) {
      equivalencia = 4;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje == 10) {
      equivalencia = 6;
    } else if (puntaje == 11) {
      equivalencia = 7;
    } else if (puntaje == 12) {
      equivalencia = 8;
    } else if (puntaje == 13) {
      equivalencia = 9;
    } else if (puntaje <= 15) {
      equivalencia = 10;
    } else if (puntaje == 16) {
      equivalencia = 11;
    } else if (puntaje == 17) {
      equivalencia = 12;
    } else if (puntaje == 18) {
      equivalencia = 13;
    } else if (puntaje == 19) {
      equivalencia = 14;
    } else if (puntaje == 20) {
      equivalencia = 16;
    } else if (puntaje == 21) {
      equivalencia = 17;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }


//Edad 11,4 a 11,7
//CC
if (edad === "11,4" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 1) {
      equivalencia = 1;
    } else if (puntaje <= 4) {
      equivalencia = 2;
    } else if (puntaje <= 6) {
      equivalencia = 3;
    } else if (puntaje <= 11) {
      equivalencia = 4;
    } else if (puntaje <= 16) {
      equivalencia = 5;
    } else if (puntaje <= 20) {
      equivalencia = 6;
    } else if (puntaje <= 24) {
      equivalencia = 7;
    } else if (puntaje <= 28) {
      equivalencia = 8;
    } else if (puntaje <= 32) {
      equivalencia = 9;
    } else if (puntaje <= 36) {
      equivalencia = 10;
    } else if (puntaje <= 40) {
      equivalencia = 11;
    } else if (puntaje <= 44) {
      equivalencia = 12;
    } else if (puntaje <= 48) {
      equivalencia = 13;
    } else if (puntaje <= 52) {
      equivalencia = 14;
    } else if (puntaje <= 56) {
      equivalencia = 15;
    } else if (puntaje <= 58) {
      equivalencia = 16;
    } else if (puntaje <= 60) {
      equivalencia = 17;
    } else if (puntaje <= 62) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "11,4" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
    if (puntaje <= 2) {
      equivalencia = 1;
    } else if (puntaje == 3) {
      equivalencia = 2;
    } else if (puntaje <= 5) {
      equivalencia = 3;
    } else if (puntaje <= 7) {
      equivalencia = 4;
    } else if (puntaje <= 9) {
      equivalencia = 5;
    } else if (puntaje <= 12) {
      equivalencia = 6;
    } else if (puntaje <= 14) {
      equivalencia = 7;
    } else if (puntaje <= 17) {
      equivalencia = 8;
    } else if (puntaje <= 19) {
      equivalencia = 9;
    } else if (puntaje <= 21) {
      equivalencia = 10;
    } else if (puntaje <= 24) {
      equivalencia = 11;
    } else if (puntaje <= 26) {
      equivalencia = 12;
    } else if (puntaje <= 29) {
      equivalencia = 13;
    } else if (puntaje <= 31) {
      equivalencia = 14;
    } else if (puntaje <= 33) {
      equivalencia = 15;
    } else if (puntaje <= 35) {
      equivalencia = 16;
    } else if (puntaje <= 37) {
      equivalencia = 17;
    } else if (puntaje <= 39) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//RD
if (edad === "11,4" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 3;
    } else if (puntaje == 9) {
      equivalencia = 4;
    } else if (puntaje == 10) {
      equivalencia = 5;
    } else if (puntaje == 11) {
      equivalencia = 6;
    } else if (puntaje == 12) {
      equivalencia = 7;
    } else if (puntaje == 13) {
      equivalencia = 8;
    } else if (puntaje == 14) {
      equivalencia = 9;
    } else if (puntaje == 15) {
      equivalencia = 10;
    } else if (puntaje == 16) {
      equivalencia = 11;
    } else if (puntaje <= 18) {
      equivalencia = 12;
    } else if (puntaje == 19) {
      equivalencia = 13;
    } else if (puntaje == 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 16;
    } else if (puntaje == 23) {
      equivalencia = 17;
    } else if (puntaje == 24) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CO
if (edad === "11,4" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje <= 8) {
      equivalencia = 1;
    } else if (puntaje == 9) {
      equivalencia = 2;
    } else if (puntaje == 10) {
      equivalencia = 3;
    } else if (puntaje == 11) {
      equivalencia = 4;
    } else if (puntaje == 12) {
      equivalencia = 5;
    } else if (puntaje == 13) {
      equivalencia = 6;
    } else if (puntaje == 14) {
      equivalencia = 7;
    } else if (puntaje <= 16) {
      equivalencia = 8;
    } else if (puntaje == 17) {
      equivalencia = 9;
    } else if (puntaje == 18) {
      equivalencia = 10;
    } else if (puntaje == 19) {
      equivalencia = 11;
    } else if (puntaje == 20) {
      equivalencia = 12;
    } else if (puntaje == 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje == 25) {
      equivalencia = 17;
    } else if (puntaje == 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CL
if (edad === "11,4" && subtest === "CL") {
  for (let i = 0; i <= 119; i++) {
    if (puntaje <= 14) {
      equivalencia = 1;
    } else if (puntaje <= 18) {
      equivalencia = 2;
    } else if (puntaje <= 22) {
      equivalencia = 3;
    } else if (puntaje <= 25) {
      equivalencia = 4;
    } else if (puntaje <= 29) {
      equivalencia = 5;
    } else if (puntaje <= 33) {
      equivalencia = 6;
    } else if (puntaje <= 37) {
      equivalencia = 7;
    } else if (puntaje <= 41) {
      equivalencia = 8;
    } else if (puntaje <= 44) {
      equivalencia = 9;
    } else if (puntaje <= 47) {
      equivalencia = 10;
    } else if (puntaje <= 50) {
      equivalencia = 11;
    } else if (puntaje <= 52) {
      equivalencia = 12;
    } else if (puntaje <= 55) {
      equivalencia = 13;
    } else if (puntaje <= 58) {
      equivalencia = 14;
    } else if (puntaje <= 60) {
      equivalencia = 15;
    } else if (puntaje <= 63) {
      equivalencia = 16;
    } else if (puntaje <= 66) {
      equivalencia = 17;
    } else if (puntaje <= 68) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//V
if (edad === "11,4" && subtest === "V") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 13) {
      equivalencia = 1;
    } else if (puntaje <= 16) {
      equivalencia = 2;
    } else if (puntaje <= 19) {
      equivalencia = 3;
    } else if (puntaje <= 21) {
      equivalencia = 4;
    } else if (puntaje <= 26) {
      equivalencia = 5;
    } else if (puntaje <= 29) {
      equivalencia = 6;
    } else if (puntaje <= 33) {
      equivalencia = 7;
    } else if (puntaje <= 36) {
      equivalencia = 8;
    } else if (puntaje <= 38) {
      equivalencia = 9;
    } else if (puntaje <= 40) {
      equivalencia = 10;
    } else if (puntaje <= 42) {
      equivalencia = 11;
    } else if (puntaje <= 44) {
      equivalencia = 12;
    } else if (puntaje <= 46) {
      equivalencia = 13;
    } else if (puntaje <= 48) {
      equivalencia = 14;
    } else if (puntaje <= 50) {
      equivalencia = 15;
    } else if (puntaje <= 52) {
      equivalencia = 16;
    } else if (puntaje <= 54) {
      equivalencia = 17;
    } else if (puntaje <= 56) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//LN
if (edad === "11,4" && subtest === "LN") {
  for (let i = 0; i <= 30; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje == 8) {
      equivalencia = 2;
    } else if (puntaje <= 10) {
      equivalencia = 3;
    } else if (puntaje == 11) {
      equivalencia = 4;
    } else if (puntaje == 12) {
      equivalencia = 5;
    } else if (puntaje == 13) {
      equivalencia = 6;
    } else if (puntaje == 14) {
      equivalencia = 7;
    } else if (puntaje == 15) {
      equivalencia = 8;
    } else if (puntaje == 16) {
      equivalencia = 9;
    } else if (puntaje == 17) {
      equivalencia = 10;
    } else if (puntaje == 18) {
      equivalencia = 11;
    } else if (puntaje <= 20) {
      equivalencia = 12;
    } else if (puntaje == 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje == 25) {
      equivalencia = 17;
    } else if (puntaje == 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//M
if (edad === "11,4" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje <= 7) {
      equivalencia = 2;
    } else if (puntaje <= 9) {
      equivalencia = 3;
    } else if (puntaje == 10) {
      equivalencia = 4;
    } else if (puntaje <= 12) {
      equivalencia = 5;
    } else if (puntaje <= 14) {
      equivalencia = 6;
    } else if (puntaje <= 16) {
      equivalencia = 7;
    } else if (puntaje == 17) {
      equivalencia = 8;
    } else if (puntaje <= 19) {
      equivalencia = 9;
    } else if (puntaje <= 21) {
      equivalencia = 10;
    } else if (puntaje == 22) {
      equivalencia = 11;
    } else if (puntaje <= 24) {
      equivalencia = 12;
    } else if (puntaje == 25) {
      equivalencia = 13;
    } else if (puntaje <= 27) {
      equivalencia = 14;
    } else if (puntaje == 28) {
      equivalencia = 15;
    } else if (puntaje == 29) {
      equivalencia = 16;
    } else if (puntaje <= 31) {
      equivalencia = 17;
    } else if (puntaje == 32) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//C
if (edad === "11,4" && subtest === "C") {
  for (let i = 0; i <= 42; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje <= 8) {
      equivalencia = 2;
    } else if (puntaje <= 11) {
      equivalencia = 3;
    } else if (puntaje <= 13) {
      equivalencia = 4;
    } else if (puntaje <= 15) {
      equivalencia = 5;
    } else if (puntaje <= 17) {
      equivalencia = 6;
    } else if (puntaje <= 19) {
      equivalencia = 7;
    } else if (puntaje <= 21) {
      equivalencia = 8;
    } else if (puntaje <= 23) {
      equivalencia = 9;
    } else if (puntaje <= 25) {
      equivalencia = 10;
    } else if (puntaje <= 27) {
      equivalencia = 11;
    } else if (puntaje == 28) {
      equivalencia = 12;
    } else if (puntaje <= 30) {
      equivalencia = 13;
    } else if (puntaje == 31) {
      equivalencia = 14;
    } else if (puntaje == 32) {
      equivalencia = 15;
    } else if (puntaje == 33) {
      equivalencia = 16;
    } else if (puntaje == 34) {
      equivalencia = 17;
    } else if (puntaje == 35) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//BS
if (edad === "11,4" && subtest === "BS") {
  for (let i = 0; i <= 60; i++) {
    if (puntaje <= 8) {
      equivalencia = 1;
    } else if (puntaje <= 10) {
      equivalencia = 2;
    } else if (puntaje <= 12) {
      equivalencia = 3;
    } else if (puntaje <= 14) {
      equivalencia = 4;
    } else if (puntaje <= 16) {
      equivalencia = 5;
    } else if (puntaje == 17) {
      equivalencia = 6;
    } else if (puntaje <= 19) {
      equivalencia = 7;
    } else if (puntaje <= 21) {
      equivalencia = 8;
    } else if (puntaje == 22) {
      equivalencia = 9;
    } else if (puntaje <= 24) {
      equivalencia = 10;
    } else if (puntaje <= 26) {
      equivalencia = 11;
    } else if (puntaje == 27) {
      equivalencia = 12;
    } else if (puntaje <= 29) {
      equivalencia = 13;
    } else if (puntaje <= 31) {
      equivalencia = 14;
    } else if (puntaje <= 34) {
      equivalencia = 15;
    } else if (puntaje <= 36) {
      equivalencia = 16;
    } else if (puntaje <= 38) {
      equivalencia = 17;
    } else if (puntaje <= 40) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CF
if (edad === "11,4" && subtest === "CF") {
  for (let i = 0; i <= 38; i++) {
    if (puntaje <= 10) {
      equivalencia = 1;
    } else if (puntaje <= 12) {
      equivalencia = 2;
    } else if (puntaje == 13) {
      equivalencia = 3;
    } else if (puntaje <= 15) {
      equivalencia = 4;
    } else if (puntaje <= 17) {
      equivalencia = 5;
    } else if (puntaje <= 19) {
      equivalencia = 6;
    } else if (puntaje <= 21) {
      equivalencia = 7;
    } else if (puntaje == 22) {
      equivalencia = 8;
    } else if (puntaje <= 24) {
      equivalencia = 9;
    } else if (puntaje == 25) {
      equivalencia = 10;
    } else if (puntaje == 26) {
      equivalencia = 11;
    } else if (puntaje <= 28) {
      equivalencia = 12;
    } else if (puntaje == 29) {
      equivalencia = 13;
    } else if (puntaje <= 31) {
      equivalencia = 14;
    } else if (puntaje == 32) {
      equivalencia = 15;
    } else if (puntaje == 33) {
      equivalencia = 16;
    } else if (puntaje <= 35) {
      equivalencia = 17;
    } else if (puntaje == 36) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//A
if (edad === "11,4" && subtest === "A") {
  for (let i = 0; i <= 136; i++) {
    if (puntaje <= 22) {
      equivalencia = 1;
    } else if (puntaje <= 27) {
      equivalencia = 2;
    } else if (puntaje <= 35) {
      equivalencia = 3;
    } else if (puntaje <= 41) {
      equivalencia = 4;
    } else if (puntaje <= 48) {
      equivalencia = 5;
    } else if (puntaje <= 54) {
      equivalencia = 6;
    } else if (puntaje <= 60) {
      equivalencia = 7;
    } else if (puntaje <= 66) {
      equivalencia = 8;
    } else if (puntaje <= 72) {
      equivalencia = 9;
    } else if (puntaje <= 78) {
      equivalencia = 10;
    } else if (puntaje <= 84) {
      equivalencia = 11;
    } else if (puntaje <= 91) {
      equivalencia = 12;
    } else if (puntaje <= 97) {
      equivalencia = 13;
    } else if (puntaje <= 103) {
      equivalencia = 14;
    } else if (puntaje <= 109) {
      equivalencia = 15;
    } else if (puntaje <= 115) {
      equivalencia = 16;
    } else if (puntaje <= 121) {
      equivalencia = 17;
    } else if (puntaje <= 127) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//I
if (edad === "11,4" && subtest === "I") {
  for (let i = 0; i <= 33; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 3;
    } else if (puntaje == 9) {
      equivalencia = 4;
    } else if (puntaje <= 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje <= 14) {
      equivalencia = 7;
    } else if (puntaje == 15) {
      equivalencia = 8;
    } else if (puntaje == 16) {
      equivalencia = 9;
    } else if (puntaje <= 18) {
      equivalencia = 10;
    } else if (puntaje == 19) {
      equivalencia = 11;
    } else if (puntaje == 20) {
      equivalencia = 12;
    } else if (puntaje == 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje <= 26) {
      equivalencia = 17;
    } else if (puntaje == 27) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AR
if (edad === "11,4" && subtest === "AR") {
  for (let i = 0; i <= 34; i++) {
    if (puntaje <= 15) {
      equivalencia = 1;
    } else if (puntaje == 16) {
      equivalencia = 2;
    } else if (puntaje == 17) {
      equivalencia = 3;
    } else if (puntaje == 18) {
      equivalencia = 4;
    } else if (puntaje == 19) {
      equivalencia = 5;
    } else if (puntaje == 20) {
      equivalencia = 6;
    } else if (puntaje == 21) {
      equivalencia = 7;
    } else if (puntaje == 22) {
      equivalencia = 8;
    } else if (puntaje == 23) {
      equivalencia = 10;
    } else if (puntaje == 24) {
      equivalencia = 11;
    } else if (puntaje == 25) {
      equivalencia = 12;
    } else if (puntaje == 26) {
      equivalencia = 13;
    } else if (puntaje == 27) {
      equivalencia = 14;
    } else if (puntaje == 28) {
      equivalencia = 15;
    } else if (puntaje == 29) {
      equivalencia = 16;
    } else if (puntaje == 30) {
      equivalencia = 17;
    } else if (puntaje == 31) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AD
if (edad === "11,4" && subtest === "AD") {
  for (let i = 0; i <= 24; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje == 6) {
      equivalencia = 2;
    } else if (puntaje == 7) {
      equivalencia = 3;
    } else if (puntaje == 8) {
      equivalencia = 4;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje == 10) {
      equivalencia = 6;
    } else if (puntaje == 11) {
      equivalencia = 7;
    } else if (puntaje == 12) {
      equivalencia = 8;
    } else if (puntaje == 13) {
      equivalencia = 9;
    } else if (puntaje <= 15) {
      equivalencia = 10;
    } else if (puntaje == 16) {
      equivalencia = 11;
    } else if (puntaje == 17) {
      equivalencia = 12;
    } else if (puntaje == 18) {
      equivalencia = 13;
    } else if (puntaje == 19) {
      equivalencia = 14;
    } else if (puntaje == 20) {
      equivalencia = 16;
    } else if (puntaje == 21) {
      equivalencia = 17;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//Edad 11,8 a 11,11
//CC
if (edad === "11,8" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 2) {
      equivalencia = 1;
    } else if (puntaje <= 4) {
      equivalencia = 2;
    } else if (puntaje <= 7) {
      equivalencia = 3;
    } else if (puntaje <= 11) {
      equivalencia = 4;
    } else if (puntaje <= 16) {
      equivalencia = 5;
    } else if (puntaje <= 20) {
      equivalencia = 6;
    } else if (puntaje <= 24) {
      equivalencia = 7;
    } else if (puntaje <= 29) {
      equivalencia = 8;
    } else if (puntaje <= 33) {
      equivalencia = 9;
    } else if (puntaje <= 37) {
      equivalencia = 10;
    } else if (puntaje <= 42) {
      equivalencia = 11;
    } else if (puntaje <= 46) {
      equivalencia = 12;
    } else if (puntaje <= 50) {
      equivalencia = 13;
    } else if (puntaje <= 53) {
      equivalencia = 14;
    } else if (puntaje <= 56) {
      equivalencia = 15;
    } else if (puntaje <= 58) {
      equivalencia = 16;
    } else if (puntaje <= 60) {
      equivalencia = 17;
    } else if (puntaje <= 62) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "11,8" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
    if (puntaje <= 2) {
      equivalencia = 1;
    } else if (puntaje <= 4) {
      equivalencia = 2;
    } else if (puntaje <= 7) {
      equivalencia = 3;
    } else if (puntaje <= 11) {
      equivalencia = 4;
    } else if (puntaje <= 16) {
      equivalencia = 5;
    } else if (puntaje <= 20) {
      equivalencia = 6;
    } else if (puntaje <= 24) {
      equivalencia = 7;
    } else if (puntaje <= 19) {
      equivalencia = 8;
    } else if (puntaje <= 33) {
      equivalencia = 9;
    } else if (puntaje <= 37) {
      equivalencia = 10;
    } else if (puntaje <= 42) {
      equivalencia = 11;
    } else if (puntaje <= 46) {
      equivalencia = 12;
    } else if (puntaje <= 50) {
      equivalencia = 13;
    } else if (puntaje <= 53) {
      equivalencia = 14;
    } else if (puntaje <= 56) {
      equivalencia = 15;
    } else if (puntaje <= 58) {
      equivalencia = 16;
    } else if (puntaje <= 60) {
      equivalencia = 17;
    } else if (puntaje <= 62) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//RD
if (edad === "11,8" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 3;
    } else if (puntaje == 9) {
      equivalencia = 4;
    } else if (puntaje == 10) {
      equivalencia = 5;
    } else if (puntaje == 11) {
      equivalencia = 6;
    } else if (puntaje == 12) {
      equivalencia = 7;
    } else if (puntaje == 13) {
      equivalencia = 8;
    } else if (puntaje == 14) {
      equivalencia = 9;
    } else if (puntaje == 15) {
      equivalencia = 10;
    } else if (puntaje <= 17) {
      equivalencia = 11;
    } else if (puntaje == 18) {
      equivalencia = 12;
    } else if (puntaje == 19) {
      equivalencia = 13;
    } else if (puntaje == 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 16;
    } else if (puntaje == 23) {
      equivalencia = 17;
    } else if (puntaje == 24) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CO
if (edad === "11,8" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje <= 8) {
      equivalencia = 1;
    } else if (puntaje <= 10) {
      equivalencia = 2;
    } else if (puntaje == 11) {
      equivalencia = 3;
    } else if (puntaje == 12) {
      equivalencia = 4;
    } else if (puntaje == 13) {
      equivalencia = 5;
    } else if (puntaje == 14) {
      equivalencia = 6;
    } else if (puntaje == 15) {
      equivalencia = 7;
    } else if (puntaje == 16) {
      equivalencia = 8;
    } else if (puntaje == 17) {
      equivalencia = 9;
    } else if (puntaje == 18) {
      equivalencia = 10;
    } else if (puntaje == 19) {
      equivalencia = 11;
    } else if (puntaje == 20) {
      equivalencia = 12;
    } else if (puntaje == 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje == 25) {
      equivalencia = 17;
    } else if (puntaje == 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CL
if (edad === "11,8" && subtest === "CL") {
  for (let i = 0; i <= 119; i++) {
    if (puntaje <= 14) {
      equivalencia = 1;
    } else if (puntaje <= 18) {
      equivalencia = 2;
    } else if (puntaje <= 22) {
      equivalencia = 3;
    } else if (puntaje <= 25) {
      equivalencia = 4;
    } else if (puntaje <= 29) {
      equivalencia = 5;
    } else if (puntaje <= 33) {
      equivalencia = 6;
    } else if (puntaje <= 37) {
      equivalencia = 7;
    } else if (puntaje <= 41) {
      equivalencia = 8;
    } else if (puntaje <= 45) {
      equivalencia = 9;
    } else if (puntaje <= 48) {
      equivalencia = 10;
    } else if (puntaje <= 52) {
      equivalencia = 11;
    } else if (puntaje <= 56) {
      equivalencia = 12;
    } else if (puntaje <= 60) {
      equivalencia = 13;
    } else if (puntaje <= 64) {
      equivalencia = 14;
    } else if (puntaje <= 68) {
      equivalencia = 15;
    } else if (puntaje <= 71) {
      equivalencia = 16;
    } else if (puntaje <= 75) {
      equivalencia = 17;
    } else if (puntaje <= 79) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//V
if (edad === "11,8" && subtest === "V") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 13) {
      equivalencia = 1;
    } else if (puntaje <= 16) {
      equivalencia = 2;
    } else if (puntaje <= 19) {
      equivalencia = 3;
    } else if (puntaje <= 23) {
      equivalencia = 4;
    } else if (puntaje <= 26) {
      equivalencia = 5;
    } else if (puntaje <= 30) {
      equivalencia = 6;
    } else if (puntaje <= 33) {
      equivalencia = 7;
    } else if (puntaje <= 36) {
      equivalencia = 8;
    } else if (puntaje <= 38) {
      equivalencia = 9;
    } else if (puntaje <= 40) {
      equivalencia = 10;
    } else if (puntaje <= 42) {
      equivalencia = 11;
    } else if (puntaje <= 44) {
      equivalencia = 12;
    } else if (puntaje <= 46) {
      equivalencia = 13;
    } else if (puntaje <= 48) {
      equivalencia = 14;
    } else if (puntaje <= 51) {
      equivalencia = 15;
    } else if (puntaje <= 53) {
      equivalencia = 16;
    } else if (puntaje <= 55) {
      equivalencia = 17;
    } else if (puntaje <= 57) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//LN
if (edad === "11,8" && subtest === "LN") {
  for (let i = 0; i <= 30; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje == 8) {
      equivalencia = 2;
    } else if (puntaje <= 10) {
      equivalencia = 3;
    } else if (puntaje == 11) {
      equivalencia = 4;
    } else if (puntaje == 12) {
      equivalencia = 5;
    } else if (puntaje == 13) {
      equivalencia = 6;
    } else if (puntaje == 14) {
      equivalencia = 7;
    } else if (puntaje == 15) {
      equivalencia = 8;
    } else if (puntaje == 16) {
      equivalencia = 9;
    } else if (puntaje <= 18) {
      equivalencia = 10;
    } else if (puntaje == 19) {
      equivalencia = 11;
    } else if (puntaje == 20) {
      equivalencia = 12;
    } else if (puntaje == 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje == 25) {
      equivalencia = 17;
    } else if (puntaje == 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//M
if (edad === "11,8" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje <= 7) {
      equivalencia = 2;
    } else if (puntaje <= 9) {
      equivalencia = 3;
    } else if (puntaje <= 11) {
      equivalencia = 4;
    } else if (puntaje <= 13) {
      equivalencia = 5;
    } else if (puntaje == 14) {
      equivalencia = 6;
    } else if (puntaje <= 16) {
      equivalencia = 7;
    } else if (puntaje <= 18) {
      equivalencia = 8;
    } else if (puntaje == 19) {
      equivalencia = 9;
    } else if (puntaje <= 21) {
      equivalencia = 10;
    } else if (puntaje == 22) {
      equivalencia = 11;
    } else if (puntaje <= 24) {
      equivalencia = 12;
    } else if (puntaje == 25) {
      equivalencia = 13;
    } else if (puntaje <= 27) {
      equivalencia = 14;
    } else if (puntaje == 28) {
      equivalencia = 15;
    } else if (puntaje == 29) {
      equivalencia = 16;
    } else if (puntaje <= 31) {
      equivalencia = 17;
    } else if (puntaje == 32) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//C
if (edad === "11,8" && subtest === "C") {
  for (let i = 0; i <= 42; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje <= 8) {
      equivalencia = 2;
    } else if (puntaje <= 11) {
      equivalencia = 3;
    } else if (puntaje <= 13) {
      equivalencia = 4;
    } else if (puntaje <= 15) {
      equivalencia = 5;
    } else if (puntaje <= 17) {
      equivalencia = 6;
    } else if (puntaje <= 19) {
      equivalencia = 7;
    } else if (puntaje <= 21) {
      equivalencia = 8;
    } else if (puntaje <= 23) {
      equivalencia = 9;
    } else if (puntaje <= 26) {
      equivalencia = 10;
    } else if (puntaje == 27) {
      equivalencia = 11;
    } else if (puntaje == 28) {
      equivalencia = 12;
    } else if (puntaje <= 30) {
      equivalencia = 13;
    } else if (puntaje == 31) {
      equivalencia = 14;
    } else if (puntaje <= 33) {
      equivalencia = 15;
    } else if (puntaje == 34) {
      equivalencia = 16;
    } else if (puntaje == 35) {
      equivalencia = 17;
    } else if (puntaje == 36) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//BS
if (edad === "11,8" && subtest === "BS") {
  for (let i = 0; i <= 60; i++) {
    if (puntaje <= 8) {
      equivalencia = 1;
    } else if (puntaje <= 10) {
      equivalencia = 2;
    } else if (puntaje <= 12) {
      equivalencia = 3;
    } else if (puntaje <= 14) {
      equivalencia = 4;
    } else if (puntaje <= 16) {
      equivalencia = 5;
    } else if (puntaje <= 18) {
      equivalencia = 6;
    } else if (puntaje <= 20) {
      equivalencia = 7;
    } else if (puntaje == 21) {
      equivalencia = 8;
    } else if (puntaje <= 23) {
      equivalencia = 9;
    } else if (puntaje <= 25) {
      equivalencia = 10;
    } else if (puntaje <= 27) {
      equivalencia = 11;
    } else if (puntaje <= 29) {
      equivalencia = 12;
    } else if (puntaje == 30) {
      equivalencia = 13;
    } else if (puntaje <= 32) {
      equivalencia = 14;
    } else if (puntaje <= 34) {
      equivalencia = 15;
    } else if (puntaje <= 36) {
      equivalencia = 16;
    } else if (puntaje <= 38) {
      equivalencia = 17;
    } else if (puntaje <= 40) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CF
if (edad === "11,8" && subtest === "CF") {
  for (let i = 0; i <= 38; i++) {
    if (puntaje <= 10) {
      equivalencia = 1;
    } else if (puntaje <= 12) {
      equivalencia = 2;
    } else if (puntaje == 13) {
      equivalencia = 3;
    } else if (puntaje <= 15) {
      equivalencia = 4;
    } else if (puntaje <= 17) {
      equivalencia = 5;
    } else if (puntaje <= 19) {
      equivalencia = 6;
    } else if (puntaje <= 21) {
      equivalencia = 7;
    } else if (puntaje == 22) {
      equivalencia = 8;
    } else if (puntaje <= 24) {
      equivalencia = 9;
    } else if (puntaje == 25) {
      equivalencia = 10;
    } else if (puntaje <= 27) {
      equivalencia = 11;
    } else if (puntaje == 28) {
      equivalencia = 12;
    } else if (puntaje == 29) {
      equivalencia = 13;
    } else if (puntaje <= 31) {
      equivalencia = 14;
    } else if (puntaje == 32) {
      equivalencia = 15;
    } else if (puntaje == 33) {
      equivalencia = 16;
    } else if (puntaje <= 35) {
      equivalencia = 17;
    } else if (puntaje == 36) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//A
if (edad === "11,8" && subtest === "A") {
  for (let i = 0; i <= 136; i++) {
    if (puntaje <= 22) {
      equivalencia = 1;
    } else if (puntaje <= 28) {
      equivalencia = 2;
    } else if (puntaje <= 35) {
      equivalencia = 3;
    } else if (puntaje <= 42) {
      equivalencia = 4;
    } else if (puntaje <= 49) {
      equivalencia = 5;
    } else if (puntaje <= 56) {
      equivalencia = 6;
    } else if (puntaje <= 63) {
      equivalencia = 7;
    } else if (puntaje <= 69) {
      equivalencia = 8;
    } else if (puntaje <= 76) {
      equivalencia = 9;
    } else if (puntaje <= 83) {
      equivalencia = 10;
    } else if (puntaje <= 90) {
      equivalencia = 11;
    } else if (puntaje <= 97) {
      equivalencia = 12;
    } else if (puntaje <= 102) {
      equivalencia = 13;
    } else if (puntaje <= 108) {
      equivalencia = 14;
    } else if (puntaje <= 113) {
      equivalencia = 15;
    } else if (puntaje <= 119) {
      equivalencia = 16;
    } else if (puntaje <= 124) {
      equivalencia = 17;
    } else if (puntaje <= 130) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//I
if (edad === "11,8" && subtest === "I") {
  for (let i = 0; i <= 33; i++) {
    if (puntaje <= 8) {
      equivalencia = 1;
    } else if (puntaje == 9) {
      equivalencia = 2;
    } else if (puntaje == 10) {
      equivalencia = 3;
    } else if (puntaje <= 12) {
      equivalencia = 4;
    } else if (puntaje == 13) {
      equivalencia = 5;
    } else if (puntaje == 14) {
      equivalencia = 6;
    } else if (puntaje == 15) {
      equivalencia = 7;
    } else if (puntaje == 16) {
      equivalencia = 8;
    } else if (puntaje == 17) {
      equivalencia = 9;
    } else if (puntaje == 18) {
      equivalencia = 10;
    } else if (puntaje == 19) {
      equivalencia = 11;
    } else if (puntaje == 20) {
      equivalencia = 12;
    } else if (puntaje == 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje <= 26) {
      equivalencia = 17;
    } else if (puntaje == 27) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AR
if (edad === "11,8" && subtest === "AR") {
  for (let i = 0; i <= 34; i++) {
    if (puntaje <= 15) {
      equivalencia = 1;
    } else if (puntaje == 16) {
      equivalencia = 2;
    } else if (puntaje == 17) {
      equivalencia = 3;
    } else if (puntaje == 18) {
      equivalencia = 4;
    } else if (puntaje == 19) {
      equivalencia = 5;
    } else if (puntaje == 20) {
      equivalencia = 6;
    } else if (puntaje == 21) {
      equivalencia = 7;
    } else if (puntaje == 22) {
      equivalencia = 8;
    } else if (puntaje == 23) {
      equivalencia = 10;
    } else if (puntaje == 24) {
      equivalencia = 11;
    } else if (puntaje == 25) {
      equivalencia = 12;
    } else if (puntaje == 26) {
      equivalencia = 13;
    } else if (puntaje == 27) {
      equivalencia = 14;
    } else if (puntaje == 28) {
      equivalencia = 15;
    } else if (puntaje == 29) {
      equivalencia = 16;
    } else if (puntaje == 30) {
      equivalencia = 17;
    } else if (puntaje == 31) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AD
if (edad === "11,8" && subtest === "AD") {
  for (let i = 0; i <= 24; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje == 6) {
      equivalencia = 2;
    } else if (puntaje == 7) {
      equivalencia = 3;
    } else if (puntaje == 8) {
      equivalencia = 4;
    } else if (puntaje == 9) {
      equivalencia = 5;
    } else if (puntaje == 10) {
      equivalencia = 6;
    } else if (puntaje == 11) {
      equivalencia = 7;
    } else if (puntaje == 12) {
      equivalencia = 8;
    } else if (puntaje <= 14) {
      equivalencia = 9;
    } else if (puntaje == 15) {
      equivalencia = 10;
    } else if (puntaje == 16) {
      equivalencia = 11;
    } else if (puntaje == 17) {
      equivalencia = 12;
    } else if (puntaje == 18) {
      equivalencia = 13;
    } else if (puntaje == 19) {
      equivalencia = 14;
    } else if (puntaje == 20) {
      equivalencia = 16;
    } else if (puntaje == 21) {
      equivalencia = 17;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

  
//Edad 12 a 12,3
//CC
if (edad === "12,0" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje <= 8) {
      equivalencia = 2;
    } else if (puntaje <= 11) {
      equivalencia = 3;
    } else if (puntaje <= 15) {
      equivalencia = 4;
    } else if (puntaje <= 19) {
      equivalencia = 5;
    } else if (puntaje <= 24) {
      equivalencia = 6;
    } else if (puntaje <= 28) {
      equivalencia = 7;
    } else if (puntaje <= 32) {
      equivalencia = 8;
    } else if (puntaje <= 35) {
      equivalencia = 9;
    } else if (puntaje <= 39) {
      equivalencia = 10;
    } else if (puntaje <= 43) {
      equivalencia = 11;
    } else if (puntaje <= 46) {
      equivalencia = 12;
    } else if (puntaje <= 50) {
      equivalencia = 13;
    } else if (puntaje <= 54) {
      equivalencia = 14;
    } else if (puntaje <= 57) {
      equivalencia = 15;
    } else if (puntaje <= 59) {
      equivalencia = 16;
    } else if (puntaje <= 61) {
      equivalencia = 17;
    } else if (puntaje <= 63) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "12,0" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
    if (puntaje <= 3) {
      equivalencia = 1;
    } else if (puntaje <= 5) {
      equivalencia = 2;
    } else if (puntaje <= 7) {
      equivalencia = 3;
    } else if (puntaje <= 10) {
      equivalencia = 4;
    } else if (puntaje <= 12) {
      equivalencia = 5;
    } else if (puntaje <= 15) {
      equivalencia = 6;
    } else if (puntaje <= 18) {
      equivalencia = 7;
    } else if (puntaje <= 20) {
      equivalencia = 8;
    } else if (puntaje <= 22) {
      equivalencia = 9;
    } else if (puntaje <= 24) {
      equivalencia = 10;
    } else if (puntaje <= 27) {
      equivalencia = 11;
    } else if (puntaje <= 29) {
      equivalencia = 12;
    } else if (puntaje <= 31) {
      equivalencia = 13;
    } else if (puntaje <= 33) {
      equivalencia = 14;
    } else if (puntaje <= 35) {
      equivalencia = 15;
    } else if (puntaje <= 37) {
      equivalencia = 16;
    } else if (puntaje <= 39) {
      equivalencia = 17;
    } else if (puntaje <= 41) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//RD
if (edad === "12,0" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 3;
    } else if (puntaje <= 10) {
      equivalencia = 4;
    } else if (puntaje == 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje == 13) {
      equivalencia = 7;
    } else if (puntaje == 14) {
      equivalencia = 8;
    } else if (puntaje == 15) {
      equivalencia = 9;
    } else if (puntaje == 16) {
      equivalencia = 10;
    } else if (puntaje == 17) {
      equivalencia = 11;
    } else if (puntaje == 18) {
      equivalencia = 12;
    } else if (puntaje == 19) {
      equivalencia = 13;
    } else if (puntaje == 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 16;
    } else if (puntaje == 23) {
      equivalencia = 17;
    } else if (puntaje == 24) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CO
if (edad === "12,0" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje <= 9) {
      equivalencia = 1;
    } else if (puntaje == 10) {
      equivalencia = 2;
    } else if (puntaje == 11) {
      equivalencia = 3;
    } else if (puntaje == 12) {
      equivalencia = 4;
    } else if (puntaje == 13) {
      equivalencia = 5;
    } else if (puntaje == 14) {
      equivalencia = 6;
    } else if (puntaje == 15) {
      equivalencia = 7;
    } else if (puntaje == 16) {
      equivalencia = 8;
    } else if (puntaje == 17) {
      equivalencia = 9;
    } else if (puntaje == 18) {
      equivalencia = 10;
    } else if (puntaje <= 20) {
      equivalencia = 11;
    } else if (puntaje == 21) {
      equivalencia = 12;
    } else if (puntaje == 22) {
      equivalencia = 13;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje == 25) {
      equivalencia = 17;
    } else if (puntaje == 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CL
if (edad === "12,0" && subtest === "CL") {
  for (let i = 0; i <= 119; i++) {
    if (puntaje <= 18) {
      equivalencia = 1;
    } else if (puntaje <= 23) {
      equivalencia = 2;
    } else if (puntaje <= 27) {
      equivalencia = 3;
    } else if (puntaje <= 31) {
      equivalencia = 4;
    } else if (puntaje <= 34) {
      equivalencia = 5;
    } else if (puntaje <= 37) {
      equivalencia = 6;
    } else if (puntaje <= 41) {
      equivalencia = 7;
    } else if (puntaje <= 44) {
      equivalencia = 8;
    } else if (puntaje <= 48) {
      equivalencia = 9;
    } else if (puntaje <= 51) {
      equivalencia = 10;
    } else if (puntaje <= 55) {
      equivalencia = 11;
    } else if (puntaje <= 58) {
      equivalencia = 12;
    } else if (puntaje <= 62) {
      equivalencia = 13;
    } else if (puntaje <= 65) {
      equivalencia = 14;
    } else if (puntaje <= 68) {
      equivalencia = 15;
    } else if (puntaje <= 72) {
      equivalencia = 16;
    } else if (puntaje <= 75) {
      equivalencia = 17;
    } else if (puntaje <= 79) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//V
if (edad === "12,0" && subtest === "V") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 14) {
      equivalencia = 1;
    } else if (puntaje <= 17) {
      equivalencia = 2;
    } else if (puntaje <= 20) {
      equivalencia = 3;
    } else if (puntaje <= 23) {
      equivalencia = 4;
    } else if (puntaje <= 27) {
      equivalencia = 5;
    } else if (puntaje <= 30) {
      equivalencia = 6;
    } else if (puntaje <= 33) {
      equivalencia = 7;
    } else if (puntaje <= 36) {
      equivalencia = 8;
    } else if (puntaje <= 39) {
      equivalencia = 9;
    } else if (puntaje <= 42) {
      equivalencia = 10;
    } else if (puntaje <= 45) {
      equivalencia = 11;
    } else if (puntaje <= 49) {
      equivalencia = 12;
    } else if (puntaje <= 52) {
      equivalencia = 13;
    } else if (puntaje <= 55) {
      equivalencia = 14;
    } else if (puntaje <= 58) {
      equivalencia = 15;
    } else if (puntaje <= 60) {
      equivalencia = 16;
    } else if (puntaje <= 62) {
      equivalencia = 17;
    } else if (puntaje <= 64) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }


//LN
if (edad === "12,0" && subtest === "LN") {
  for (let i = 0; i <= 30; i++) {
    if (puntaje <= 8) {
      equivalencia = 1;
    } else if (puntaje == 9) {
      equivalencia = 2;
    } else if (puntaje == 10) {
      equivalencia = 3;
    } else if (puntaje == 11) {
      equivalencia = 4;
    } else if (puntaje == 12) {
      equivalencia = 5;
    } else if (puntaje == 13) {
      equivalencia = 6;
    } else if (puntaje == 14) {
      equivalencia = 7;
    } else if (puntaje == 15) {
      equivalencia = 8;
    } else if (puntaje <= 17) {
      equivalencia = 9;
    } else if (puntaje == 18) {
      equivalencia = 10;
    } else if (puntaje == 19) {
      equivalencia = 11;
    } else if (puntaje == 20) {
      equivalencia = 12;
    } else if (puntaje == 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje == 25) {
      equivalencia = 17;
    } else if (puntaje == 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//M
if (edad === "12,0" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje <= 7) {
      equivalencia = 2;
    } else if (puntaje <= 9) {
      equivalencia = 3;
    } else if (puntaje <= 11) {
      equivalencia = 4;
    } else if (puntaje <= 13) {
      equivalencia = 5;
    } else if (puntaje == 14) {
      equivalencia = 6;
    } else if (puntaje <= 16) {
      equivalencia = 7;
    } else if (puntaje <= 18) {
      equivalencia = 8;
    } else if (puntaje <= 20) {
      equivalencia = 9;
    } else if (puntaje <= 22) {
      equivalencia = 10;
    } else if (puntaje <= 24) {
      equivalencia = 11;
    } else if (puntaje <= 26) {
      equivalencia = 12;
    } else if (puntaje == 27) {
      equivalencia = 13;
    } else if (puntaje == 28) {
      equivalencia = 14;
    } else if (puntaje == 29) {
      equivalencia = 15;
    } else if (puntaje == 30) {
      equivalencia = 16;
    } else if (puntaje == 31) {
      equivalencia = 17;
    } else if (puntaje == 32) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//C
if (edad === "12,0" && subtest === "C") {
  for (let i = 0; i <= 42; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje <= 9) {
      equivalencia = 2;
    } else if (puntaje <= 12) {
      equivalencia = 3;
    } else if (puntaje <= 14) {
      equivalencia = 4;
    } else if (puntaje <= 16) {
      equivalencia = 5;
    } else if (puntaje <= 18) {
      equivalencia = 6;
    } else if (puntaje <= 20) {
      equivalencia = 7;
    } else if (puntaje <= 22) {
      equivalencia = 8;
    } else if (puntaje <= 24) {
      equivalencia = 9;
    } else if (puntaje <= 26) {
      equivalencia = 10;
    } else if (puntaje <= 28) {
      equivalencia = 11;
    } else if (puntaje <= 30) {
      equivalencia = 12;
    } else if (puntaje <= 33) {
      equivalencia = 13;
    } else if (puntaje <= 35) {
      equivalencia = 14;
    } else if (puntaje == 36) {
      equivalencia = 15;
    } else if (puntaje == 37) {
      equivalencia = 16;
    } else if (puntaje == 38) {
      equivalencia = 17;
    } else if (puntaje == 39) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//BS
if (edad === "12,0" && subtest === "BS") {
  for (let i = 0; i <= 60; i++) {
    if (puntaje <= 9) {
      equivalencia = 1;
    } else if (puntaje <= 11) {
      equivalencia = 2;
    } else if (puntaje == 12) {
      equivalencia = 3;
    } else if (puntaje <= 14) {
      equivalencia = 4;
    } else if (puntaje <= 16) {
      equivalencia = 5;
    } else if (puntaje <= 18) {
      equivalencia = 6;
    } else if (puntaje <= 20) {
      equivalencia = 7;
    } else if (puntaje <= 22) {
      equivalencia = 8;
    } else if (puntaje <= 24) {
      equivalencia = 9;
    } else if (puntaje <= 26) {
      equivalencia = 10;
    } else if (puntaje <= 28) {
      equivalencia = 11;
    } else if (puntaje <= 30) {
      equivalencia = 12;
    } else if (puntaje == 31) {
      equivalencia = 13;
    } else if (puntaje <= 33) {
      equivalencia = 14;
    } else if (puntaje == 34) {
      equivalencia = 15;
    } else if (puntaje <= 36) {
      equivalencia = 16;
    } else if (puntaje <= 38) {
      equivalencia = 17;
    } else if (puntaje <= 40) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CF
if (edad === "12,0" && subtest === "CF") {
  for (let i = 0; i <= 38; i++) {
    if (puntaje <= 10) {
      equivalencia = 1;
    } else if (puntaje <= 12) {
      equivalencia = 2;
    } else if (puntaje <= 14) {
      equivalencia = 3;
    } else if (puntaje == 15) {
      equivalencia = 4;
    } else if (puntaje <= 17) {
      equivalencia = 5;
    } else if (puntaje <= 19) {
      equivalencia = 6;
    } else if (puntaje <= 21) {
      equivalencia = 7;
    } else if (puntaje == 22) {
      equivalencia = 8;
    } else if (puntaje <= 24) {
      equivalencia = 9;
    } else if (puntaje <= 26) {
      equivalencia = 10;
    } else if (puntaje == 27) {
      equivalencia = 11;
    } else if (puntaje <= 29) {
      equivalencia = 12;
    } else if (puntaje == 30) {
      equivalencia = 13;
    } else if (puntaje <= 32) {
      equivalencia = 14;
    } else if (puntaje == 33) {
      equivalencia = 15;
    } else if (puntaje == 34) {
      equivalencia = 16;
    } else if (puntaje == 35) {
      equivalencia = 17;
    } else if (puntaje == 36) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//A
if (edad === "12,0" && subtest === "A") {
  for (let i = 0; i <= 136; i++) {
    if (puntaje <= 24) {
      equivalencia = 1;
    } else if (puntaje <= 30) {
      equivalencia = 2;
    } else if (puntaje <= 36) {
      equivalencia = 3;
    } else if (puntaje <= 43) {
      equivalencia = 4;
    } else if (puntaje <= 51) {
      equivalencia = 5;
    } else if (puntaje <= 57) {
      equivalencia = 6;
    } else if (puntaje <= 66) {
      equivalencia = 7;
    } else if (puntaje <= 72) {
      equivalencia = 8;
    } else if (puntaje <= 80) {
      equivalencia = 9;
    } else if (puntaje <= 86) {
      equivalencia = 10;
    } else if (puntaje <= 91) {
      equivalencia = 11;
    } else if (puntaje <= 97) {
      equivalencia = 12;
    } else if (puntaje <= 103) {
      equivalencia = 13;
    } else if (puntaje <= 108) {
      equivalencia = 14;
    } else if (puntaje <= 114) {
      equivalencia = 15;
    } else if (puntaje <= 120) {
      equivalencia = 16;
    } else if (puntaje <= 125) {
      equivalencia = 17;
    } else if (puntaje <= 132) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//I
if (edad === "12,0" && subtest === "I") {
  for (let i = 0; i <= 33; i++) {
    if (puntaje <= 8) {
      equivalencia = 1;
    } else if (puntaje == 9) {
      equivalencia = 2;
    } else if (puntaje == 10) {
      equivalencia = 3;
    } else if (puntaje <= 12) {
      equivalencia = 4;
    } else if (puntaje <= 14) {
      equivalencia = 5;
    } else if (puntaje == 15) {
      equivalencia = 6;
    } else if (puntaje == 16) {
      equivalencia = 7;
    } else if (puntaje == 17) {
      equivalencia = 8;
    } else if (puntaje == 18) {
      equivalencia = 9;
    } else if (puntaje <= 20) {
      equivalencia = 10;
    } else if (puntaje == 21) {
      equivalencia = 11;
    } else if (puntaje == 22) {
      equivalencia = 12;
    } else if (puntaje == 23) {
      equivalencia = 13;
    } else if (puntaje == 24) {
      equivalencia = 14;
    } else if (puntaje <= 26) {
      equivalencia = 15;
    } else if (puntaje == 27) {
      equivalencia = 16;
    } else if (puntaje == 28) {
      equivalencia = 17;
    } else if (puntaje == 29) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AR
if (edad === "12,0" && subtest === "AR") {
  for (let i = 0; i <= 34; i++) {
    if (puntaje <= 15) {
      equivalencia = 1;
    } else if (puntaje == 16) {
      equivalencia = 2;
    } else if (puntaje == 17) {
      equivalencia = 3;
    } else if (puntaje == 18) {
      equivalencia = 4;
    } else if (puntaje == 19) {
      equivalencia = 5;
    } else if (puntaje == 20) {
      equivalencia = 6;
    } else if (puntaje == 21) {
      equivalencia = 7;
    } else if (puntaje == 22) {
      equivalencia = 8;
    } else if (puntaje == 23) {
      equivalencia = 9;
    } else if (puntaje == 24) {
      equivalencia = 10;
    } else if (puntaje == 25) {
      equivalencia = 11;
    } else if (puntaje == 26) {
      equivalencia = 12;
    } else if (puntaje == 27) {
      equivalencia = 13;
    } else if (puntaje == 28) {
      equivalencia = 15;
    } else if (puntaje == 29) {
      equivalencia = 16;
    } else if (puntaje == 30) {
      equivalencia = 17;
    } else if (puntaje == 31) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AD
if (edad === "12,0" && subtest === "AD") {
  for (let i = 0; i <= 24; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje == 8) {
      equivalencia = 3;
    } else if (puntaje == 9) {
      equivalencia = 4;
    } else if (puntaje <= 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje == 13) {
      equivalencia = 7;
    } else if (puntaje == 14) {
      equivalencia = 8;
    } else if (puntaje == 15) {
      equivalencia = 9;
    } else if (puntaje == 16) {
      equivalencia = 10;
    } else if (puntaje == 17) {
      equivalencia = 11;
    } else if (puntaje == 18) {
      equivalencia = 12;
    } else if (puntaje == 19) {
      equivalencia = 13;
    } else if (puntaje == 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 17;
    } else if (puntaje == 23) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//Edad 12,4 a 12,7
//CC
if (edad === "12,4" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje <= 9) {
      equivalencia = 2;
    } else if (puntaje <= 12) {
      equivalencia = 3;
    } else if (puntaje <= 16) {
      equivalencia = 4;
    } else if (puntaje <= 20) {
      equivalencia = 5;
    } else if (puntaje <= 25) {
      equivalencia = 6;
    } else if (puntaje <= 29) {
      equivalencia = 7;
    } else if (puntaje <= 33) {
      equivalencia = 8;
    } else if (puntaje <= 37) {
      equivalencia = 9;
    } else if (puntaje <= 41) {
      equivalencia = 10;
    } else if (puntaje <= 44) {
      equivalencia = 11;
    } else if (puntaje <= 48) {
      equivalencia = 12;
    } else if (puntaje <= 52) {
      equivalencia = 13;
    } else if (puntaje <= 55) {
      equivalencia = 14;
    } else if (puntaje <= 58) {
      equivalencia = 15;
    } else if (puntaje <= 60) {
      equivalencia = 16;
    } else if (puntaje == 61) {
      equivalencia = 17;
    } else if (puntaje <= 63) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "12,4" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
    if (puntaje <= 4) {
      equivalencia = 1;
    } else if (puntaje <= 6) {
      equivalencia = 2;
    } else if (puntaje <= 8) {
      equivalencia = 3;
    } else if (puntaje <= 11) {
      equivalencia = 4;
    } else if (puntaje <= 13) {
      equivalencia = 5;
    } else if (puntaje <= 15) {
      equivalencia = 6;
    } else if (puntaje <= 18) {
      equivalencia = 7;
    } else if (puntaje <= 20) {
      equivalencia = 8;
    } else if (puntaje <= 23) {
      equivalencia = 9;
    } else if (puntaje <= 25) {
      equivalencia = 10;
    } else if (puntaje <= 27) {
      equivalencia = 11;
    } else if (puntaje <= 30) {
      equivalencia = 12;
    } else if (puntaje <= 32) {
      equivalencia = 13;
    } else if (puntaje <= 34) {
      equivalencia = 14;
    } else if (puntaje <= 36) {
      equivalencia = 15;
    } else if (puntaje <= 38) {
      equivalencia = 16;
    } else if (puntaje <= 40) {
      equivalencia = 17;
    } else if (puntaje == 41) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//RD
if (edad === "12,4" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje <= 9) {
      equivalencia = 3;
    } else if (puntaje == 10) {
      equivalencia = 4;
    } else if (puntaje == 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje == 13) {
      equivalencia = 7;
    } else if (puntaje == 14) {
      equivalencia = 8;
    } else if (puntaje == 15) {
      equivalencia = 9;
    } else if (puntaje == 16) {
      equivalencia = 10;
    } else if (puntaje == 17) {
      equivalencia = 11;
    } else if (puntaje == 18) {
      equivalencia = 12;
    } else if (puntaje == 19) {
      equivalencia = 13;
    } else if (puntaje == 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 16;
    } else if (puntaje == 23) {
      equivalencia = 17;
    } else if (puntaje == 24) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CO
if (edad === "12,4" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje <= 9) {
      equivalencia = 1;
    } else if (puntaje == 10) {
      equivalencia = 2;
    } else if (puntaje == 11) {
      equivalencia = 3;
    } else if (puntaje == 12) {
      equivalencia = 4;
    } else if (puntaje == 13) {
      equivalencia = 5;
    } else if (puntaje == 14) {
      equivalencia = 6;
    } else if (puntaje <= 16) {
      equivalencia = 7;
    } else if (puntaje == 17) {
      equivalencia = 8;
    } else if (puntaje == 18) {
      equivalencia = 9;
    } else if (puntaje == 19) {
      equivalencia = 10;
    } else if (puntaje == 20) {
      equivalencia = 11;
    } else if (puntaje == 21) {
      equivalencia = 12;
    } else if (puntaje == 22) {
      equivalencia = 13;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje == 25) {
      equivalencia = 17;
    } else if (puntaje == 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CL    
if (edad === "12,4" && subtest === "CL") {
  for (let i = 0; i <= 119; i++) {
    if (puntaje <= 20) {
      equivalencia = 1;
    } else if (puntaje <= 24) {
      equivalencia = 2;
    } else if (puntaje <= 27) {
      equivalencia = 3;
    } else if (puntaje <= 31) {
      equivalencia = 4;
    } else if (puntaje <= 34) {
      equivalencia = 5;
    } else if (puntaje <= 38) {
      equivalencia = 6;
    } else if (puntaje <= 41) {
      equivalencia = 7;
    } else if (puntaje <= 44) {
      equivalencia = 8;
    } else if (puntaje <= 48) {
      equivalencia = 9;
    } else if (puntaje <= 51) {
      equivalencia = 10;
    } else if (puntaje <= 55) {
      equivalencia = 11;
    } else if (puntaje <= 58) {
      equivalencia = 12;
    } else if (puntaje <= 62) {
      equivalencia = 13;
    } else if (puntaje <= 65) {
      equivalencia = 14;
    } else if (puntaje <= 68) {
      equivalencia = 15;
    } else if (puntaje <= 72) {
      equivalencia = 16;
    } else if (puntaje <= 75) {
      equivalencia = 17;
    } else if (puntaje <= 79) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//V
if (edad === "12,4" && subtest === "V") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 16) {
      equivalencia = 1;
    } else if (puntaje <= 20) {
      equivalencia = 2;
    } else if (puntaje <= 23) {
      equivalencia = 3;
    } else if (puntaje <= 26) {
      equivalencia = 4;
    } else if (puntaje <= 29) {
      equivalencia = 5;
    } else if (puntaje <= 32) {
      equivalencia = 6;
    } else if (puntaje <= 35) {
      equivalencia = 7;
    } else if (puntaje <= 38) {
      equivalencia = 8;
    } else if (puntaje <= 41) {
      equivalencia = 9;
    } else if (puntaje <= 44) {
      equivalencia = 10;
    } else if (puntaje <= 47) {
      equivalencia = 11;
    } else if (puntaje <= 50) {
      equivalencia = 12;
    } else if (puntaje <= 52) {
      equivalencia = 13;
    } else if (puntaje <= 55) {
      equivalencia = 14;
    } else if (puntaje <= 58) {
      equivalencia = 15;
    } else if (puntaje <= 60) {
      equivalencia = 16;
    } else if (puntaje <= 63) {
      equivalencia = 17;
    } else if (puntaje <= 65) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//LN
if (edad === "12,4" && subtest === "LN") {
  for (let i = 0; i <= 30; i++) {
    if (puntaje <= 9) {
      equivalencia = 1;
    } else if (puntaje == 10) {
      equivalencia = 2;
    } else if (puntaje == 11) {
      equivalencia = 3;
    } else if (puntaje == 12) {
      equivalencia = 4;
    } else if (puntaje == 13) {
      equivalencia = 5;
    } else if (puntaje == 14) {
      equivalencia = 6;
    } else if (puntaje == 15) {
      equivalencia = 7;
    } else if (puntaje == 16) {
      equivalencia = 8;
    } else if (puntaje == 17) {
      equivalencia = 9;
    } else if (puntaje == 18) {
      equivalencia = 10;
    } else if (puntaje == 19) {
      equivalencia = 11;
    } else if (puntaje == 20) {
      equivalencia = 12;
    } else if (puntaje == 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje == 25) {
      equivalencia = 17;
    } else if (puntaje == 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//M
if (edad === "12,4" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje <= 9) {
      equivalencia = 2;
    } else if (puntaje == 10) {
      equivalencia = 3;
    } else if (puntaje <= 12) {
      equivalencia = 4;
    } else if (puntaje <= 14) {
      equivalencia = 5;
    } else if (puntaje <= 16) {
      equivalencia = 6;
    } else if (puntaje == 17) {
      equivalencia = 7;
    } else if (puntaje <= 19) {
      equivalencia = 8;
    } else if (puntaje <= 21) {
      equivalencia = 9;
    } else if (puntaje == 22) {
      equivalencia = 10;
    } else if (puntaje <= 24) {
      equivalencia = 11;
    } else if (puntaje <= 26) {
      equivalencia = 12;
    } else if (puntaje == 27) {
      equivalencia = 13;
    } else if (puntaje == 28) {
      equivalencia = 14;
    } else if (puntaje == 29) {
      equivalencia = 15;
    } else if (puntaje == 30) {
      equivalencia = 16;
    } else if (puntaje == 31) {
      equivalencia = 17;
    } else if (puntaje == 32) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//C
if (edad === "12,4" && subtest === "C") {
  for (let i = 0; i <= 42; i++) {
    if (puntaje <= 8) {
      equivalencia = 1;
    } else if (puntaje <= 10) {
      equivalencia = 2;
    } else if (puntaje <= 12) {
      equivalencia = 3;
    } else if (puntaje <= 15) {
      equivalencia = 4;
    } else if (puntaje <= 17) {
      equivalencia = 5;
    } else if (puntaje <= 19) {
      equivalencia = 6;
    } else if (puntaje <= 21) {
      equivalencia = 7;
    } else if (puntaje <= 23) {
      equivalencia = 8;
    } else if (puntaje <= 26) {
      equivalencia = 9;
    } else if (puntaje <= 28) {
      equivalencia = 10;
    } else if (puntaje <= 30) {
      equivalencia = 11;
    } else if (puntaje <= 32) {
      equivalencia = 12;
    } else if (puntaje <= 34) {
      equivalencia = 13;
    } else if (puntaje == 35) {
      equivalencia = 14;
    } else if (puntaje == 36) {
      equivalencia = 15;
    } else if (puntaje == 37) {
      equivalencia = 16;
    } else if (puntaje == 38) {
      equivalencia = 17;
    } else if (puntaje == 39) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//BS
if (edad === "12,4" && subtest === "BS") {
  for (let i = 0; i <= 60; i++) {
    if (puntaje <= 9) {
      equivalencia = 1;
    } else if (puntaje <= 11) {
      equivalencia = 2;
    } else if (puntaje <= 13) {
      equivalencia = 3;
    } else if (puntaje <= 15) {
      equivalencia = 4;
    } else if (puntaje <= 17) {
      equivalencia = 5;
    } else if (puntaje <= 19) {
      equivalencia = 6;
    } else if (puntaje <= 21) {
      equivalencia = 7;
    } else if (puntaje <= 23) {
      equivalencia = 8;
    } else if (puntaje <= 25) {
      equivalencia = 9;
    } else if (puntaje == 26) {
      equivalencia = 10;
    } else if (puntaje <= 28) {
      equivalencia = 11;
    } else if (puntaje <= 30) {
      equivalencia = 12;
    } else if (puntaje == 31) {
      equivalencia = 13;
    } else if (puntaje <= 33) {
      equivalencia = 14;
    } else if (puntaje == 34) {
      equivalencia = 15;
    } else if (puntaje <= 36) {
      equivalencia = 16;
    } else if (puntaje <= 38) {
      equivalencia = 17;
    } else if (puntaje <= 40) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CF
if (edad === "12,4" && subtest === "CF") {
  for (let i = 0; i <= 38; i++) {
    if (puntaje <= 10) {
      equivalencia = 1;
    } else if (puntaje <= 12) {
      equivalencia = 2;
    } else if (puntaje <= 14) {
      equivalencia = 3;
    } else if (puntaje == 15) {
      equivalencia = 4;
    } else if (puntaje <= 17) {
      equivalencia = 5;
    } else if (puntaje <= 19) {
      equivalencia = 6;
    } else if (puntaje <= 21) {
      equivalencia = 7;
    } else if (puntaje <= 23) {
      equivalencia = 8;
    } else if (puntaje == 24) {
      equivalencia = 9;
    } else if (puntaje <= 26) {
      equivalencia = 10;
    } else if (puntaje <= 28) {
      equivalencia = 11;
    } else if (puntaje == 29) {
      equivalencia = 12;
    } else if (puntaje == 30) {
      equivalencia = 13;
    } else if (puntaje <= 32) {
      equivalencia = 14;
    } else if (puntaje == 33) {
      equivalencia = 15;
    } else if (puntaje == 34) {
      equivalencia = 16;
    } else if (puntaje == 35) {
      equivalencia = 17;
    } else if (puntaje == 36) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//A
if (edad === "12,4" && subtest === "A") {
  for (let i = 0; i <= 136; i++) {
    if (puntaje <= 25) {
      equivalencia = 1;
    } else if (puntaje <= 30) {
      equivalencia = 2;
    } else if (puntaje <= 37) {
      equivalencia = 3;
    } else if (puntaje <= 44) {
      equivalencia = 4;
    } else if (puntaje <= 51) {
      equivalencia = 5;
    } else if (puntaje <= 58) {
      equivalencia = 6;
    } else if (puntaje <= 66) {
      equivalencia = 7;
    } else if (puntaje <= 73) {
      equivalencia = 8;
    } else if (puntaje <= 80) {
      equivalencia = 9;
    } else if (puntaje <= 87) {
      equivalencia = 10;
    } else if (puntaje <= 94) {
      equivalencia = 11;
    } else if (puntaje <= 99) {
      equivalencia = 12;
    } else if (puntaje <= 105) {
      equivalencia = 13;
    } else if (puntaje <= 109) {
      equivalencia = 14;
    } else if (puntaje <= 114) {
      equivalencia = 15;
    } else if (puntaje <= 122) {
      equivalencia = 16;
    } else if (puntaje <= 126) {
      equivalencia = 17;
    } else if (puntaje <= 132) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//I
if (edad === "12,4" && subtest === "I") {
  for (let i = 0; i <= 33; i++) {
    if (puntaje <= 8) {
      equivalencia = 1;
    } else if (puntaje == 9) {
      equivalencia = 2;
    } else if (puntaje == 10) {
      equivalencia = 3;
    } else if (puntaje <= 12) {
      equivalencia = 4;
    } else if (puntaje <= 14) {
      equivalencia = 5;
    } else if (puntaje == 15) {
      equivalencia = 6;
    } else if (puntaje == 16) {
      equivalencia = 7;
    } else if (puntaje == 17) {
      equivalencia = 8;
    } else if (puntaje <= 19) {
      equivalencia = 9;
    } else if (puntaje == 20) {
      equivalencia = 10;
    } else if (puntaje == 21) {
      equivalencia = 11;
    } else if (puntaje == 22) {
      equivalencia = 12;
    } else if (puntaje == 23) {
      equivalencia = 13;
    } else if (puntaje == 24) {
      equivalencia = 14;
    } else if (puntaje <= 26) {
      equivalencia = 15;
    } else if (puntaje == 27) {
      equivalencia = 16;
    } else if (puntaje == 28) {
      equivalencia = 17;
    } else if (puntaje == 29) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AR
if (edad === "12,4" && subtest === "AR") {
  for (let i = 0; i <= 34; i++) {
    if (puntaje <= 15) {
      equivalencia = 1;
    } else if (puntaje == 16) {
      equivalencia = 2;
    } else if (puntaje == 17) {
      equivalencia = 3;
    } else if (puntaje == 18) {
      equivalencia = 4;
    } else if (puntaje == 19) {
      equivalencia = 5;
    } else if (puntaje == 20) {
      equivalencia = 6;
    } else if (puntaje == 21) {
      equivalencia = 7;
    } else if (puntaje == 22) {
      equivalencia = 8;
    } else if (puntaje == 23) {
      equivalencia = 9;
    } else if (puntaje == 24) {
      equivalencia = 10;
    } else if (puntaje == 25) {
      equivalencia = 11;
    } else if (puntaje == 26) {
      equivalencia = 12;
    } else if (puntaje == 27) {
      equivalencia = 13;
    } else if (puntaje == 28) {
      equivalencia = 14;
    } else if (puntaje == 29) {
      equivalencia = 15;
    } else if (puntaje == 30) {
      equivalencia = 16;
    } else if (puntaje == 31) {
      equivalencia = 17;
    } else if (puntaje == 32) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AD
if (edad === "12,4" && subtest === "AD") {
  for (let i = 0; i <= 24; i++) {
    if (puntaje <= 7) {
      equivalencia = 1;
    } else if (puntaje == 8) {
      equivalencia = 2;
    } else if (puntaje == 9) {
      equivalencia = 3;
    } else if (puntaje == 10) {
      equivalencia = 4;
    } else if (puntaje == 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje == 13) {
      equivalencia = 7;
    } else if (puntaje == 14) {
      equivalencia = 8;
    } else if (puntaje == 15) {
      equivalencia = 9;
    } else if (puntaje == 16) {
      equivalencia = 10;
    } else if (puntaje == 17) {
      equivalencia = 11;
    } else if (puntaje == 18) {
      equivalencia = 12;
    } else if (puntaje == 19) {
      equivalencia = 13;
    } else if (puntaje == 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 17;
    } else if (puntaje == 23) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//Edad 12,8 a 12,11
//CC
if (edad === "12,8" && subtest === "CC") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje <= 10) {
      equivalencia = 2;
    } else if (puntaje <= 13) {
      equivalencia = 3;
    } else if (puntaje <= 17) {
      equivalencia = 4;
    } else if (puntaje <= 21) {
      equivalencia = 5;
    } else if (puntaje <= 26) {
      equivalencia = 6;
    } else if (puntaje <= 29) {
      equivalencia = 7;
    } else if (puntaje <= 34) {
      equivalencia = 8;
    } else if (puntaje <= 38) {
      equivalencia = 9;
    } else if (puntaje <= 42) {
      equivalencia = 10;
    } else if (puntaje <= 45) {
      equivalencia = 11;
    } else if (puntaje <= 48) {
      equivalencia = 12;
    } else if (puntaje <= 52) {
      equivalencia = 13;
    } else if (puntaje <= 55) {
      equivalencia = 14;
    } else if (puntaje <= 59) {
      equivalencia = 15;
    } else if (puntaje <= 61) {
      equivalencia = 16;
    } else if (puntaje == 62) {
      equivalencia = 17;
    } else if (puntaje == 63) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//S
if (edad === "12,8" && subtest === "S") {
  for (let i = 0; i <= 44; i++) {
    if (puntaje <= 5) {
      equivalencia = 1;
    } else if (puntaje <= 7) {
      equivalencia = 2;
    } else if (puntaje <= 9) {
      equivalencia = 3;
    } else if (puntaje <= 13) {
      equivalencia = 4;
    } else if (puntaje <= 15) {
      equivalencia = 5;
    } else if (puntaje <= 17) {
      equivalencia = 6;
    } else if (puntaje <= 19) {
      equivalencia = 7;
    } else if (puntaje <= 21) {
      equivalencia = 8;
    } else if (puntaje <= 23) {
      equivalencia = 9;
    } else if (puntaje <= 25) {
      equivalencia = 10;
    } else if (puntaje <= 27) {
      equivalencia = 11;
    } else if (puntaje <= 30) {
      equivalencia = 12;
    } else if (puntaje <= 32) {
      equivalencia = 13;
    } else if (puntaje <= 34) {
      equivalencia = 14;
    } else if (puntaje <= 36) {
      equivalencia = 15;
    } else if (puntaje <= 38) {
      equivalencia = 16;
    } else if (puntaje <= 40) {
      equivalencia = 17;
    } else if (puntaje == 41) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//RD
if (edad === "12,8" && subtest === "RD") {
  for (let i = 0; i <= 32; i++) {
    if (puntaje <= 6) {
      equivalencia = 1;
    } else if (puntaje == 7) {
      equivalencia = 2;
    } else if (puntaje <= 9) {
      equivalencia = 3;
    } else if (puntaje == 10) {
      equivalencia = 4;
    } else if (puntaje == 11) {
      equivalencia = 5;
    } else if (puntaje == 12) {
      equivalencia = 6;
    } else if (puntaje == 13) {
      equivalencia = 7;
    } else if (puntaje == 14) {
      equivalencia = 8;
    } else if (puntaje == 15) {
      equivalencia = 9;
    } else if (puntaje == 16) {
      equivalencia = 10;
    } else if (puntaje == 17) {
      equivalencia = 11;
    } else if (puntaje == 18) {
      equivalencia = 12;
    } else if (puntaje == 19) {
      equivalencia = 13;
    } else if (puntaje == 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 16;
    } else if (puntaje == 23) {
      equivalencia = 17;
    } else if (puntaje <= 25) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CO
if (edad === "12,8" && subtest === "CO") {
  for (let i = 0; i <= 28; i++) {
    if (puntaje <= 9) {
      equivalencia = 1;
    } else if (puntaje == 10) {
      equivalencia = 2;
    } else if (puntaje == 11) {
      equivalencia = 3;
    } else if (puntaje == 12) {
      equivalencia = 4;
    } else if (puntaje == 13) {
      equivalencia = 5;
    } else if (puntaje == 14) {
      equivalencia = 6;
    } else if (puntaje <= 16) {
      equivalencia = 7;
    } else if (puntaje == 17) {
      equivalencia = 8;
    } else if (puntaje == 18) {
      equivalencia = 9;
    } else if (puntaje == 19) {
      equivalencia = 10;
    } else if (puntaje == 20) {
      equivalencia = 11;
    } else if (puntaje == 21) {
      equivalencia = 12;
    } else if (puntaje == 22) {
      equivalencia = 13;
    } else if (puntaje == 23) {
      equivalencia = 14;
    } else if (puntaje == 24) {
      equivalencia = 15;
    } else if (puntaje == 25) {
      equivalencia = 16;
    } else if (puntaje == 26) {
      equivalencia = 17;
    } else if (puntaje == 27) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CL
if (edad === "12,8" && subtest === "CL") {
  for (let i = 0; i <= 119; i++) {
    if (puntaje <= 21) {
      equivalencia = 1;
    } else if (puntaje <= 24) {
      equivalencia = 2;
    } else if (puntaje <= 27) {
      equivalencia = 3;
    } else if (puntaje <= 32) {
      equivalencia = 4;
    } else if (puntaje <= 34) {
      equivalencia = 5;
    } else if (puntaje <= 39) {
      equivalencia = 6;
    } else if (puntaje <= 41) {
      equivalencia = 7;
    } else if (puntaje <= 44) {
      equivalencia = 8;
    } else if (puntaje <= 49) {
      equivalencia = 9;
    } else if (puntaje <= 53) {
      equivalencia = 10;
    } else if (puntaje <= 56) {
      equivalencia = 11;
    } else if (puntaje <= 59) {
      equivalencia = 12;
    } else if (puntaje <= 62) {
      equivalencia = 13;
    } else if (puntaje <= 65) {
      equivalencia = 14;
    } else if (puntaje <= 68) {
      equivalencia = 15;
    } else if (puntaje <= 72) {
      equivalencia = 16;
    } else if (puntaje <= 75) {
      equivalencia = 17;
    } else if (puntaje <= 80) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//V
if (edad === "12,8" && subtest === "V") {
  for (let i = 0; i <= 68; i++) {
    if (puntaje <= 17) {
      equivalencia = 1;
    } else if (puntaje <= 21) {
      equivalencia = 2;
    } else if (puntaje <= 25) {
      equivalencia = 3;
    } else if (puntaje <= 29) {
      equivalencia = 4;
    } else if (puntaje <= 32) {
      equivalencia = 5;
    } else if (puntaje <= 34) {
      equivalencia = 6;
    } else if (puntaje <= 37) {
      equivalencia = 7;
    } else if (puntaje <= 39) {
      equivalencia = 8;
    } else if (puntaje <= 42) {
      equivalencia = 9;
    } else if (puntaje <= 45) {
      equivalencia = 10;
    } else if (puntaje <= 47) {
      equivalencia = 11;
    } else if (puntaje <= 50) {
      equivalencia = 12;
    } else if (puntaje <= 52) {
      equivalencia = 13;
    } else if (puntaje <= 55) {
      equivalencia = 14;
    } else if (puntaje <= 58) {
      equivalencia = 15;
    } else if (puntaje <= 60) {
      equivalencia = 16;
    } else if (puntaje <= 63) {
      equivalencia = 17;
    } else if (puntaje <= 65) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//LN
if (edad === "12,8" && subtest === "LN") {
  for (let i = 0; i <= 30; i++) {
    if (puntaje <= 10) {
      equivalencia = 1;
    } else if (puntaje == 11) {
      equivalencia = 2;
    } else if (puntaje == 12) {
      equivalencia = 3;
    } else if (puntaje == 13) {
      equivalencia = 4;
    } else if (puntaje == 14) {
      equivalencia = 5;
    } else if (puntaje == 15) {
      equivalencia = 7;
    } else if (puntaje == 16) {
      equivalencia = 8;
    } else if (puntaje == 17) {
      equivalencia = 9;
    } else if (puntaje == 18) {
      equivalencia = 10;
    } else if (puntaje == 19) {
      equivalencia = 11;
    } else if (puntaje == 20) {
      equivalencia = 12;
    } else if (puntaje == 21) {
      equivalencia = 13;
    } else if (puntaje == 22) {
      equivalencia = 14;
    } else if (puntaje == 23) {
      equivalencia = 15;
    } else if (puntaje == 24) {
      equivalencia = 16;
    } else if (puntaje == 25) {
      equivalencia = 17;
    } else if (puntaje == 26) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//M
if (edad === "12,8" && subtest === "M") {
  for (let i = 0; i <= 35; i++) {
    if (puntaje <= 8) {
      equivalencia = 1;
    } else if (puntaje <= 10) {
      equivalencia = 2;
    } else if (puntaje == 11) {
      equivalencia = 3;
    } else if (puntaje <= 13) {
      equivalencia = 4;
    } else if (puntaje <= 15) {
      equivalencia = 5;
    } else if (puntaje <= 17) {
      equivalencia = 6;
    } else if (puntaje == 18) {
      equivalencia = 7;
    } else if (puntaje <= 20) {
      equivalencia = 8;
    } else if (puntaje <= 22) {
      equivalencia = 9;
    } else if (puntaje == 23) {
      equivalencia = 10;
    } else if (puntaje <= 25) {
      equivalencia = 11;
    } else if (puntaje == 26) {
      equivalencia = 12;
    } else if (puntaje == 27) {
      equivalencia = 13;
    } else if (puntaje == 28) {
      equivalencia = 14;
    } else if (puntaje <= 30) {
      equivalencia = 15;
    } else if (puntaje == 31) {
      equivalencia = 16;
    } else if (puntaje == 32) {
      equivalencia = 17;
    } else if (puntaje == 33) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//C
if (edad === "12,8" && subtest === "C") {
  for (let i = 0; i <= 42; i++) {
    if (puntaje <= 10) {
      equivalencia = 1;
    } else if (puntaje <= 12) {
      equivalencia = 2;
    } else if (puntaje <= 14) {
      equivalencia = 3;
    } else if (puntaje <= 16) {
      equivalencia = 4;
    } else if (puntaje <= 18) {
      equivalencia = 5;
    } else if (puntaje <= 20) {
      equivalencia = 6;
    } else if (puntaje <= 22) {
      equivalencia = 7;
    } else if (puntaje <= 24) {
      equivalencia = 8;
    } else if (puntaje <= 26) {
      equivalencia = 9;
    } else if (puntaje <= 28) {
      equivalencia = 10;
    } else if (puntaje <= 30) {
      equivalencia = 11;
    } else if (puntaje <= 32) {
      equivalencia = 12;
    } else if (puntaje <= 34) {
      equivalencia = 13;
    } else if (puntaje == 35) {
      equivalencia = 14;
    } else if (puntaje == 36) {
      equivalencia = 15;
    } else if (puntaje == 37) {
      equivalencia = 16;
    } else if (puntaje == 38) {
      equivalencia = 17;
    } else if (puntaje == 39) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//BS
if (edad === "12,8" && subtest === "BS") {
  for (let i = 0; i <= 60; i++) {
    if (puntaje <= 9) {
      equivalencia = 1;
    } else if (puntaje <= 11) {
      equivalencia = 2;
    } else if (puntaje <= 13) {
      equivalencia = 3;
    } else if (puntaje <= 15) {
      equivalencia = 4;
    } else if (puntaje <= 17) {
      equivalencia = 5;
    } else if (puntaje <= 19) {
      equivalencia = 6;
    } else if (puntaje <= 21) {
      equivalencia = 7;
    } else if (puntaje <= 23) {
      equivalencia = 8;
    } else if (puntaje <= 25) {
      equivalencia = 9;
    } else if (puntaje <= 27) {
      equivalencia = 10;
    } else if (puntaje <= 29) {
      equivalencia = 11;
    } else if (puntaje <= 31) {
      equivalencia = 12;
    } else if (puntaje == 32) {
      equivalencia = 13;
    } else if (puntaje <= 34) {
      equivalencia = 14;
    } else if (puntaje <= 36) {
      equivalencia = 15;
    } else if (puntaje == 37) {
      equivalencia = 16;
    } else if (puntaje <= 39) {
      equivalencia = 17;
    } else if (puntaje <= 41) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//CF
if (edad === "12,8" && subtest === "CF") {
  for (let i = 0; i <= 38; i++) {
    if (puntaje <= 11) {
      equivalencia = 1;
    } else if (puntaje == 12) {
      equivalencia = 2;
    } else if (puntaje <= 15) {
      equivalencia = 3;
    } else if (puntaje <= 17) {
      equivalencia = 4;
    } else if (puntaje <= 19) {
      equivalencia = 5;
    } else if (puntaje <= 21) {
      equivalencia = 6;
    } else if (puntaje <= 23) {
      equivalencia = 7;
    } else if (puntaje == 24) {
      equivalencia = 8;
    } else if (puntaje <= 26) {
      equivalencia = 9;
    } else if (puntaje == 27) {
      equivalencia = 10;
    } else if (puntaje <= 29) {
      equivalencia = 11;
    } else if (puntaje == 30) {
      equivalencia = 12;
    } else if (puntaje == 31) {
      equivalencia = 13;
    } else if (puntaje == 32) {
      equivalencia = 14;
    } else if (puntaje == 33) {
      equivalencia = 15;
    } else if (puntaje == 34) {
      equivalencia = 16;
    } else if (puntaje == 35) {
      equivalencia = 17;
    } else if (puntaje == 36) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//A
if (edad === "12,8" && subtest === "A") {
  for (let i = 0; i <= 136; i++) {
    if (puntaje <= 26) {
      equivalencia = 1;
    } else if (puntaje <= 31) {
      equivalencia = 2;
    } else if (puntaje <= 38) {
      equivalencia = 3;
    } else if (puntaje <= 46) {
      equivalencia = 4;
    } else if (puntaje <= 52) {
      equivalencia = 5;
    } else if (puntaje <= 60) {
      equivalencia = 6;
    } else if (puntaje <= 67) {
      equivalencia = 7;
    } else if (puntaje <= 74) {
      equivalencia = 8;
    } else if (puntaje <= 80) {
      equivalencia = 9;
    } else if (puntaje <= 87) {
      equivalencia = 10;
    } else if (puntaje <= 94) {
      equivalencia = 11;
    } else if (puntaje <= 100) {
      equivalencia = 12;
    } else if (puntaje <= 105) {
      equivalencia = 13;
    } else if (puntaje <= 110) {
      equivalencia = 14;
    } else if (puntaje <= 115) {
      equivalencia = 15;
    } else if (puntaje <= 122) {
      equivalencia = 16;
    } else if (puntaje <= 127) {
      equivalencia = 17;
    } else if (puntaje <= 132) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//I
if (edad === "12,8" && subtest === "I") {
  for (let i = 0; i <= 33; i++) {
    if (puntaje <= 9) {
      equivalencia = 1;
    } else if (puntaje == 10) {
      equivalencia = 2;
    } else if (puntaje == 11) {
      equivalencia = 3;
    } else if (puntaje == 12) {
      equivalencia = 4;
    } else if (puntaje <= 14) {
      equivalencia = 5;
    } else if (puntaje == 15) {
      equivalencia = 6;
    } else if (puntaje <= 17) {
      equivalencia = 7;
    } else if (puntaje == 18) {
      equivalencia = 8;
    } else if (puntaje == 19) {
      equivalencia = 9;
    } else if (puntaje == 20) {
      equivalencia = 10;
    } else if (puntaje == 21) {
      equivalencia = 11;
    } else if (puntaje <= 23) {
      equivalencia = 12;
    } else if (puntaje == 24) {
      equivalencia = 13;
    } else if (puntaje == 25) {
      equivalencia = 14;
    } else if (puntaje == 26) {
      equivalencia = 15;
    } else if (puntaje == 27) {
      equivalencia = 16;
    } else if (puntaje <= 29) {
      equivalencia = 17;
    } else if (puntaje == 30) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AR
if (edad === "12,8" && subtest === "AR") {
  for (let i = 0; i <= 34; i++) {
    if (puntaje <= 15) {
      equivalencia = 1;
    } else if (puntaje == 16) {
      equivalencia = 2;
    } else if (puntaje == 17) {
      equivalencia = 3;
    } else if (puntaje == 18) {
      equivalencia = 4;
    } else if (puntaje == 19) {
      equivalencia = 5;
    } else if (puntaje <= 21) {
      equivalencia = 6;
    } else if (puntaje == 22) {
      equivalencia = 7;
    } else if (puntaje == 23) {
      equivalencia = 8;
    } else if (puntaje == 24) {
      equivalencia = 9;
    } else if (puntaje == 25) {
      equivalencia = 10;
    } else if (puntaje == 26) {
      equivalencia = 11;
    } else if (puntaje == 27) {
      equivalencia = 12;
    } else if (puntaje == 28) {
      equivalencia = 13;
    } else if (puntaje == 29) {
      equivalencia = 14;
    } else if (puntaje == 30) {
      equivalencia = 16;
    } else if (puntaje == 31) {
      equivalencia = 17;
    } else if (puntaje == 32) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//AD
if (edad === "12,8" && subtest === "AD") {
  for (let i = 0; i <= 24; i++) {
    if (puntaje <= 8) {
      equivalencia = 1;
    } else if (puntaje == 9) {
      equivalencia = 2;
    } else if (puntaje == 10) {
      equivalencia = 3;
    } else if (puntaje == 11) {
      equivalencia = 4;
    } else if (puntaje == 12) {
      equivalencia = 5;
    } else if (puntaje == 13) {
      equivalencia = 6;
    } else if (puntaje == 14) {
      equivalencia = 7;
    } else if (puntaje == 15) {
      equivalencia = 8;
    } else if (puntaje == 16) {
      equivalencia = 10;
    } else if (puntaje == 17) {
      equivalencia = 11;
    } else if (puntaje == 18) {
      equivalencia = 12;
    } else if (puntaje == 19) {
      equivalencia = 13;
    } else if (puntaje == 20) {
      equivalencia = 14;
    } else if (puntaje == 21) {
      equivalencia = 15;
    } else if (puntaje == 22) {
      equivalencia = 16;
    } else if (puntaje == 23) {
      equivalencia = 18;
    } else {
      equivalencia = 19;
    }  
    var inputPuntuacionEscalar = document.getElementById("PuntuacionEscalar");
    inputPuntuacionEscalar.value = PuntuacionEscalar = equivalencia;
    }
  }

//Edad 13 a 13,3
//CC












}