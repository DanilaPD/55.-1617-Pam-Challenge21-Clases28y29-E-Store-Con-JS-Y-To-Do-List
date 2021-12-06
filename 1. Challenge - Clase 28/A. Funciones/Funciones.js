//! Función Declarativa:
function sayHi(name) {
  console.log("Hello, " + name + ".");
}

sayHi("Dani");

//! Función Expresión:
//* Con nombre:
const clima = function temp(grados) {
  console.log("Hoy hace " + grados + "°.");
};

clima(16);

//* Sin nombre:
const juguetes = function (cantidad) {
  console.log("Tengo " + cantidad + " muñequitas.");
};

juguetes(5);

//! Función CON FLECHA:
const hervir = (litros) => {
  console.log("Hay que hervir " + litros + " litro de agua para los ñoquis.");
};

hervir(1);

//! Función IIFE:
//* Con parámetros:
(function (userName) {
  console.log("Hello,", userName);
})("MOTO.");

//* Sin parámetros:
(function () {
  console.log("Hello, MOTO!");
})();
