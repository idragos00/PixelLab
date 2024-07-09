//ex for

//1 Calcularea sumei numerelor impare de la 1 la 15:
let n=0
for(i=1; i<=15; i+=2){
    n = i + n;
}
console.log(n);



//ex function

//1 O functie pt calcularea cubului unui număr

function getCubeNumber(number){
    const result = number * number * number;
    return result;
}

let a = getCubeNumber(7);
console.log(a);

//ex array

//1 Se da un array, care este produsul numerelor din acesta?


let n = 1;

const myArray = [10, 20 , 1, 2];
for (i = 0; i < myArray.length; i++){
  n = n * myArray[i];
}
console.log(n);
