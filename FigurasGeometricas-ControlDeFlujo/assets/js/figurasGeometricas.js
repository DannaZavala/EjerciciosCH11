alert ("Estoy vivo!");
// EJERCICIO DE UN MENÚ PARA DIBUJAR 4 FIGURAS GEOMÉTRICAS, AÑADIENDO OPCIONES PARA CALCULAR ÁREA Y PERIMETRO.

console.log("Menú de Figuras Geométricas");
let menu= prompt("Elige la figura geométrica a conocer. \n 1.Cuadrado \n 2.Círculo \n 3.Rectángulo \n 4.Triángulo Equilátero ");

switch(menu){
    case "1":
//CUADRADO
    // area y perimetro
    function Cuadrado(){
        let lado=prompt("Ingresa la medida del lado de tu cuadrado ");
        let area= lado*lado;
        console.log("El área del Cuadrado es: ", area);
        let perimetro= lado*4;
        console.log("El perimetro del Cuadrado es: ", perimetro);
    }
    Cuadrado();
    break;

    case "2" :
//CIRCULO
    // area y perimetro
    function Circulo(){
        let radio=prompt("Ingresa la medida del radio de tu círculo");
        let area= Math.PI*radio*radio;
        console.log("El área del Círculo es: ", area);
        let perimetro= 2*Math.PI*radio;
        console.log("El perimetro del Círculo es: ", perimetro);
    }
    Circulo();
    break;

    case "3" :
//RECTANGULO
    // area y perimetro
    function Rectangulo(){
        let base=prompt("Ingresa la medida de la base de tu Rectángulo");
        let altura=prompt("Ingresa la medida de la altura de tu Rectángulo");
        let area= base*altura;
        console.log("El área del Rectángulo es: ", area);
        let perimetro= (2*base)+(2*altura);
        console.log("El perimetro del Rectángulo es: ", perimetro);
    }
    Rectangulo();
    break;

    case "4" :
// TRIANGULO
function TrianguloEquilatero(){
    let lado=prompt("Ingrese la medida del lado de su triángulo");
    let altura= Math.sqrt(3)*lado/2;
    let area= lado*altura/2;
    console.log("El área del Triángulo es: ", area);
    let perimetro= (lado*3);
    console.log("El perimetro del Triángulo es: ", perimetro);
}
TrianguloEquilatero();
break;
default: console.log("Ingresa una opción válida");
}
