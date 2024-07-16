
//1 Creaza o funcție care primeste 2 parametri, un array, si un numar, 
//si returneaza un alt array care reprezinta numerele din primul array care sunt divizibile cu numarul specificat.

function filterDivisibles(arr, num) {
    if (num === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    return arr.filter(element => element % num === 0);
}

// Example usage:
const myArray = [1, 3, 7, 10, 17, 20, 25, 30];
const divisor = 5;
const result = filterDivisibles(myArray, divisor);

console.log(result); 
