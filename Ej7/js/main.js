const numValid = (numValid) => {
    return !isNaN(numValid)  && numValid > 0
}

const conversor = (euros, moneda) => {
    switch (moneda.toLowerCase()) {
        case 'dolar':
            console.log(euros + '€ son: ' + euros*1.8611 + ' dolares');
            break;
        case 'yen':
            console.log(euros + '€ son: ' + euros*129.852 + ' yenes');
            break;

        case 'libra':
            console.log(euros + '€ son: ' + euros*0.86 + ' libras');
            break;
        default:
            console.log('Error al introducir la moneda, introduce una moneda valida');
            break;
    }
}

let euros = prompt('Introduce una cantidad de euros');

if (numValid(euros)) {
    let moneda = prompt('A que moneda desea hacer el cambio (Dolar, yen, libra)');
    conversor(euros, moneda);
} else {
    console.log('Error al introducir numero, introduce un numero valido');

}
