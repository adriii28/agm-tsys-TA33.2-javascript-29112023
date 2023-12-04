const generarNums = (rangoMin,rangoMax) => {
    let numRandom = Math.floor(Math.random() * (rangoMax - rangoMin + 1) + rangoMin);
    console.log(numRandom);
}


let rangoMinString = prompt("Número mínimo para generar");
let rangoMaxString = prompt("Número máximo para generar");

generarNums(rangoMinString,rangoMaxString)