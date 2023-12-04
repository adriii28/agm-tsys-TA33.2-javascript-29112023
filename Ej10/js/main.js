const numValid = (numValid) => {
    return !isNaN(numValid)  && numValid > 0;
}

const esPrimo = (num) => {

    if (num<=1) {
        return false;
    }
    
    for (let i = 2; i * i <= num; i++) {
        if (num%i==0) {
            return false;
        }
    }
    return true;
}

const rellenarArray = (medidaArray,numMinimo, numMaximo) => {
    let cont = 0;
    let numsPrimos = new Array(medidaArray);

    do {
        let random = Math.random() * (numMaximo - numMinimo + 1) + numMinimo;
        let numRandom = Math.floor(random);
        if (esPrimo(numRandom)) {
           numsPrimos[cont] = numRandom;
            cont++;
        }

    } while (cont < medidaArray);
     
    return numsPrimos;
}

const imprimirMayor = (arrayPrimo) => {
		
	let numMayor = 0;
		
    for (let i = 0; i < arrayPrimo.length; i++) {	
        console.log('Indice ' + i + ' - ' + arrayPrimo[i]);
        if (arrayPrimo[i] > numMayor) {
            numMayor = arrayPrimo[i];
        }
	}
    console.log('El mayor numero generado es: ' + numMayor);
}

let arraySize = prompt('Introduce el tamaño de el array')

if (numValid(arraySize)) {
    let min = prompt('Introduce el intervalo de numeros en el que quieres generar los numeros primos (Ej: 1-100)'+
    '\nIntroduce el minimo')
    if (numValid(min)) {
        let max = prompt('Introduce el maximo')
        if (numValid(max)) {
            let array = rellenarArray(arraySize,min,max);
            console.log(array);
            imprimirMayor(array);
        }
    }
} else {
    console.log('Error al introducir numero, introduce un numero valido');
}