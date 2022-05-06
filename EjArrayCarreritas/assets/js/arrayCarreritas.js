console.log("-----------Ejercicio CARRERITAS---------");
console.log(" ");

var carreritas = ["Lucia", "Roberto", "Maria", "Jesus", "Andrea", "Jose"];

console.log("Posiciones principales en carreritas", carreritas);

//Andrea adelanta a María
carreritas[2]="Andrea";
carreritas[3]="Maria";
carreritas[4]="Jesus";
console.log("Andrea adelanta a María, nuevas posiciones:", carreritas);

//José es descalificado
carreritas.pop();
console.log("José es descalificado de la carrera, nuevas posiciones:", carreritas);

//Detras de Lucía y antes de Roberto se clasifican tres nuevos corredores: Cristóbal, Fernanda y Armando
carreritas.splice(1,0,"Cristóbal", "Fernanda", "Armando");
console.log("Detras de Lucía y antes de Roberto se clasifican tres nuevos corredores, nuevas posiciones:", carreritas);

//Nuevo concursante toma el primer puesto: Federico

carreritas.unshift("Federico");
console.log("Federico toma el primer puesto. Posiciones finales:", carreritas);