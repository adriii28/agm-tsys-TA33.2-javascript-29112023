const areaCirculo = (radio) => {    console.log(Math.PI * Math.pow(radio,2));     }

const areaTriangulo = (base, altura) => {   console.log((base*altura) / 2);    }

const areaCuadrado = (lado) => {   console.log(lado*lado);   }

let figura = prompt('Introduce una figura (circulo, triangulo o cuadrado)');

switch (figura.toLowerCase()) {
    case 'circulo':
        let radio = prompt('Introduce el radio');
        areaCirculo(radio);
        break;

    case 'triangulo':
        let base = prompt('Introduce la base del triangulo');
        let altura = prompt('Introduce la altura del triangulo');
        areaTriangulo(base,altura);
    break;

    case 'cuadrado':
        let lado = prompt('Introduce el lado del cuadrado');
        areaCuadrado(lado);
    break;
    default:
        console.log('Error');
        break;
}