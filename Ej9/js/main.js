const numValid = (numValid) => {
    return !isNaN(numValid)  && numValid > 0;
}

const rellenarArray = (medidaA) => {
    const RANGO_MAX = 9;
    const RANGO_MIN = 0;

    let array = new Array(medidaA);

    for (let i = 0; i < medidaA; i++) {
        let numRandom = Math.random() * (RANGO_MAX - RANGO_MIN + 1) + RANGO_MIN;
		array[i] = Math.floor(numRandom);
    }
    return array;
}

const mostrarArray = (arrayRelleno) => {
    let sumaArray = 0;
	for (let i = 0; i < arrayRelleno.length; i++) {
        console.log('En el indice ' + i + ' se ha guardado el numero ' + arrayRelleno[i]);
		sumaArray += arrayRelleno[i];
	}
    console.log('La suma de los valores es: '+sumaArray);
}

let medidaA = prompt('Introduce el tamaño del array');

if (numValid(medidaA)) {
    let array = rellenarArray(medidaA);
    mostrarArray(array);
} else {
    console.log('Error al introducir numero, introduce un numero valido');
}