
const esPrimo = (num) => {
    let primo = true;
    if (num <= 1) {
        primo = false;
    }

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            primo = false;
        }
    }
    return primo;

}

let num = prompt('Introduce un numero y te indicare si es un numero primo o no');
let numPrimo = esPrimo(num);

if (numPrimo) {
    console.log('Es un numero primo');
} else {
    console.log('No es un numero primo');
}