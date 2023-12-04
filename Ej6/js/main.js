const contadorCifras = (cifra) => {
    return cifra.toString().length;
}

const numValid = (numValid) => {
    return !isNaN(numValid)  && numValid > 0
}

let num = prompt('Introduce un numero entero positivo y saldra por pantalla el total de cifras de ese numero');

if (numValid(num)) {
    let cifra = contadorCifras(num);
    console.log('El numero ' + num + ' tiene ' + cifra + ' cifras');
} else {
    console.log('Error al introducir numero, introduce un numero valido');

}
