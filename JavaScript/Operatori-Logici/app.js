//1

console.log("Primul scenariu");
let X = 3;

let lunaAlegeri = 6;
let putemVota = lunaAlegeri ==  X;
console.log(putemVota);


console.log("Al doilea scenariu");
let X = 6;

let lunaAlegeri = 6;
let putemVota = lunaAlegeri ==  X;
console.log(putemVota);

//2

console.log("Primul scenariu");
let Y = 2010;
let anCurent = 2024;
let varstaVot = 18;

let putemVota = (anCurent - Y) >= varstaVot;
console.log(putemVota);


console.log("Al doilea scenariu");
let Y = 1990;
let anCurent = 2024;
let varstaVot = 18;

let putemVota = (anCurent - Y) >= varstaVot;
console.log(putemVota);

//3

// Datele fixe ale problemei
const varstaMinimaVot = 18;
const anCurent = 2024;
const lunaVotarii = 6;

// Datele de scenariu
let x = 3;
let y = 1990;
console.log("Scenariu:  x=" + x + " y=" + y);

//Inceput Exercitiu 1

const suntDeschiseUrnele = x === lunaVotarii;
console.log("exercitiul1:" + suntDeschiseUrnele);

// Inceput exercitiu 2
const dataNastereWanda = y;
const varstaWanda = anCurent - dataNastereWanda;
const poateSaVoteze = varstaWanda >= varstaMinimaVot;
console.log("exercitiul2:" + poateSaVoteze);

//Inceput Exercitiu 3
console.log("exercitiul3:" + (suntDeschiseUrnele && poateSaVoteze));







