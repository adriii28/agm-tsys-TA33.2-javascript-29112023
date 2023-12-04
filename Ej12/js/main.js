const numValid = (numValid) => {
    return !isNaN(numValid)  && numValid > 0;
}

const buscarNumero =(numeros, numFilter) => {
    let numerosFiltrados = numeros.filter(numero => numero % 10 === numFilter);

    return numerosFiltrados;
}

const rellenarArray = (arraySize) => {
    let array1 = new Array(arraySize);

    for (let i = 0; i < arraySize; i++) {
        let numRandom = Math.floor(Math.random() * (300 - 1 + 1) + 1);
        array1[i] = numRandom;
    }

    return array1;
}

let arraySize = prompt("Introduce el tamaño para crear un array: ");
let numFilter = prompt("Introduce un numero y se mostraran los numeros almacenados en el array que acaben en ese digito (0 - 9): ");
let numeros = rellenarArray(arraySize);

let arrayFinal = buscarNumero(numeros, numFilter);

console.log("Numeros generados: ");
console.log(numeros.join(" "));

console.log("Numeros acabados con el digito " + numFilter + ": ");
console.log(arrayFinal.join(" "));





