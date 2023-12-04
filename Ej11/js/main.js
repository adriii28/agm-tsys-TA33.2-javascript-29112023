const numValid = (numValid) => {
    return !isNaN(numValid)  && numValid > 0;
}

const rellenarArray = (arraySize) => {
    let array1 = new Array();

    for (let i = 0; i < arraySize; i++) {
        let random = Math.random() * (10 - 1 + 1) + 1;
        let numRandom = Math.floor(random);
        array1[i] = numRandom;
    }
    return array1;
}

const multiplicarArrays = (array1, array2) => {
    let tamano = array1.length;
	let resultado = new Array();
		
	for (let i = 0; i < tamano; i++) {
		resultado[i] = array1[i] * array2[i];
	}
	return resultado;
}

const mostrarArrays = (array1, array2, arrayResultMultiplicacion) => {
    console.log('Array 1');
    for (let i = 0; i < array1.length; i++) {
        console.log(array1[i]+ ' ');
    }
    
    console.log('Array 2');
    for (let i = 0; i < array2.length; i++) {
        console.log(array2[i]+ ' ');
    }
    
    console.log('Array Multiplicado');
    for (let i = 0; i < arrayResultMultiplicacion.length; i++) {
        console.log(arrayResultMultiplicacion[i]+ " ");
    }
}

let arraySize = prompt('Introduce el tamaño para crear un array');

if (numValid(arraySize)) {

    let array1 = new Array();
    let array2 = new Array();

    array1 = rellenarArray(arraySize);
    array2 = array1;

    let arrayResultMultiplicacion = multiplicarArrays(array1,array2);

    mostrarArrays(array1, array2, arrayResultMultiplicacion);


} else {
    console.log('Error al introducir numero, introduce un numero valido');
}