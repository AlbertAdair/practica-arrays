let frutas = ["mandarina", "maracuya", "chirimoya"];

//ejercicio1//
console.log(frutas[1]);

//ejercicio2//
console.log(frutas[2]);

//ejercicio3//
frutas.unshift("granadilla")
console.log(frutas);

//ejercicio4//
frutas.shift();
console.log(frutas);

//ejercicio5//
frutas.push("toronja");
console.log(frutas);

//ejercicio6//
frutas.pop();
console.log(frutas);

//ejercicio7//
let verduras = ["cebolla china", "lechuga", "huacatay"];
let combinacion = frutas.concat(verduras);
console.log(combinacion);

//ejercicio8//
console.log(verduras.includes("lechuga"));

//ejercicio9//

let posicion = verduras.indexOf("lechuga")
console.log(posicion)
//let primerElemento = frutas[1];
//console.log (primerElemento);

//ejercicio10/  
verduras.splice(1, 1, "remolacha");
console.log(verduras);

//ejercicio11//
let numeros = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33];
const sumatotal = numeros.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(sumatotal);

//ejercicio12//
const multiplicaciontotal = numeros.reduce(
    (accumulator, currentValue) => accumulator * currentValue
);
console.log(multiplicaciontotal);

//ejercicio13//
let mayores = numeros.filter(function (num) {
    return num > 7;
});
console.log (mayores)

//ejercicio14//