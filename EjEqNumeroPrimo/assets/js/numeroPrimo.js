// Escribe un programa que pida al usuario un numero entero y muestre si es numero primo o no.

let opcion;
do{
numero=prompt("Ingresa un numero entero positivo");

function numPrimo() {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return console.log("No es numero primo");
      }
    }
    return console.log("Es numero primo");
  }

r = numPrimo();

opcion=prompt("Deseas continuar? Escribe 1 \n Deseas salir? Escribe 2");
}
while (opcion==1);





