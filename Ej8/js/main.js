const pedirValores = (arrayNum) => {
    for (let i = 0; i < arrayNum.length; i++) {
        let numString = prompt('Introduce un valor para asignarle la posición: '+i);
        let num = parseInt(numString);
        arrayNum[i] = num;
    }

    return arrayNum;
}

const mostrarValores = (arrayNum) => {
    for (let i = 0; i < arrayNum.length; i++) {
        console.log('Indice ->' +i +' / Valor asignado -> ' +arrayNum[i]);
    }
}

let array = new Array(10);
arrayNum = pedirValores(array);

mostrarValores(arrayNum);