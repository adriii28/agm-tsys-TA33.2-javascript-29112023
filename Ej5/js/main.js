const convertirBinario = (num) => {
    let binario = num.toString(2);
    return binario;
}

const numValid = (numValid) => {
    return !isNaN(numValid)
}

let numeroDecimal = prompt('Introduce un numero decimal y se hara la conversion a binario');

numeroDecimal = parseFloat(numeroDecimal);

if (numValid(numeroDecimal)) {
    let numBinario = convertirBinario(numeroDecimal);
    console.log('El numero ' + numeroDecimal +' convertido a binario es: ' + numBinario);
} else {
    console.log('Error al introducir numero, introduce un numero valido');

}
