
/* for (let num = Number(prompt("ingrese un numero")); num >=0 && num <= 100; num--) {
    console.log(num);
    
} */


/* for (let number = Number(prompt(`ingrese un numero`)),i = 1;(number >= 1 && number <= 10)&&(i >= 1 && i <= 10); i++) {
    console.log(`${i}x${number}=${number*i} `);
    
} */

/* let numero = " ";
let suma = 0;
let resultado = 0;

while (numero) {
    numero = Number(prompt(`ingrese un numero`))
    if (numero != " ") {
        suma += numero;
    } else {
        console.log(`your sum is: ${suma}`);
    }
} */


/* let numero;
let suma = 0;

do {
    numero = Number(prompt(`ingrese un numero`))
    suma += numero;
} while (numero != " ");

console.log(`your sum is: ${suma}`); */

/* let alumno = {
    nombre: "nahuel",
    apellido: "chavarria",
    origen: "Argentina",
    estudios: "minhub"
}

for (const key in alumno) {
    console.log(alumno[key]);
}
 */



/* let numeroSecreto = 5;
let numero;
let intentos = 0;

while (numero != numeroSecreto) {
    numero = Number(prompt(`ingrese un numero`))
    intentos++
    if (numero > numeroSecreto) {
        alert(`el número ingresado es mayor que el secreto`)
    } else if (numero < numeroSecreto) {
        alert(`el número ingresado es menor que el secreto`)
    } else {
        alert(`FELICITACIONES ¡Has acertado! El número secreto era ${numeroSecreto} y has hecho ${intentos} intentos`);
    }
} */

/* let number = prompt(`ingrese numero`)
let divisores = []
for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        divisores.push(i);
    }
}
console.log(`Los divisores de ${number} son: ${divisores}`); */


/* function RingBell() {
    console.log("Ding Dong");
    return "Ding Dong,"
}
let numero = prompt(`ingrese un numero`)
let resultado = "";
for (let i = 0; i < numero; i++) {
    resultado += RingBell()
}
console.log(`el resultado es: ${resultado}`); */



/* const dateLimit = "1997-8-3"
const dates = ["1984-18-2", "1998-3-2", "1973-15-7", "2024-31-10", "2081-1-9"]

let dateNew = []

for (const date of dates) {
    if (date >= dateLimit) {
        dateNew.push(date)
    }
}
console.log(`las fechas mayores o iguales son: ${dateNew}`);

 */




/* let colors = [ "red","green","blue","orange","violet","black","white" ]

for (const color of colors) {
    console.log(color);
} */



/* let colors = [ "red","green","blue","orange","violet","green","black","white" ]
function clrs(array) {
    let colors = array
for (const color of colors) {
    console.log(color);
}
}
clrs(colors) */


/* let numeros = [5,7,1,3,50]

for (const num of numeros) {
    let doble = num * 2
    console.log(`el numero es: ${num} y su doble es: ${doble}`);
} */




let familia = [
    { nombre: "norma", apellido: "Lopez", rol: "madre", edad: 38 },
    { nombre: "mateo", apellido: "Perez", rol: "hijo", edad: 15 },
    { nombre: "juan", apellido: "Perez", rol: "padre", edad: 40 },
    { nombre: "agustina", apellido: "Perez", rol: "hija", edad: 18 }
];

/* function presentacion(array) {
    let familia = array
    for (const integrante in familia) {
        console.log(`hola, soy ${familia[integrante].nombre} ${familia[integrante].apellido} (${familia[integrante].rol}) y tengo ${familia[integrante].edad} años`);
        }
    }

presentacion(familia) */




/* let number;
let resultadoSumaPares = 0
let resultadoSumaImpares = 0
do {
    number = Number(prompt(`enter numbers`))
    if (number % 2 === 0) {
        resultadoSumaPares += number
    } else {
        resultadoSumaImpares += number
    }
} while (number != 0);
console.log(`la suma de pares es ${resultadoSumaPares}`);
console.log(`la suma de impares es ${resultadoSumaImpares}`);

 */


/* let numbers = [30,2,3,4,0,20,99,8,9,40];

let maxnumber = numbers[0]


for (const number of numbers) {
    if (maxnumber < number ) {
        maxnumber = number;
    }
}
alert(`el número más grande es ${maxnumber}`) */

