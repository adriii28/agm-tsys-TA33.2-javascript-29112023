const calcularFactorial = (num) => {
    let factorial = 1;

	for (let i = 1; i <= num; i++) {
		factorial = factorial *i;
	}

	return factorial;
}

const numValid = (numValid) => {
    return !isNaN(numValid)
}

let num = prompt('Introduce un numero y se calculara el factorial');

if (numValid(num)) {
    let factorial = calcularFactorial(num);
    console.log('El factorial de ' + num + ' es: '  +factorial);
} else {
    console.log('Error al introducir numero, introduce un numero valido');
}
