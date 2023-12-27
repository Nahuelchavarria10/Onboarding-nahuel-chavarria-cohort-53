

//conditionals

//low

/* const num1 = 4;
const num2 = 5;
if (num1 > num2) {
    console.log(`el mayor es: ${num1}`);
} else {
    console.log(`el mayor es: ${num2}`);
}

if (num1 > num2) {
    console.log(`el mayor es: ${num1}`);
} else if (num2 > num1) {
    console.log(`el mayo es: ${num2}`);
} else {
    console.log("los numeros son iguales");
}

if (num1 == num2) {
    console.log("los numeros son iguales");
} else {
    console.log("los numeros son diferentes");
}

let date = "2018-9-2"
let date2 = "2023-7-5"
if (date > date2) {
    console.log(`the date ${date} is greater than ${date2}`);
} else {
    console.log(`the date ${date2} is greater than ${date}`);
}

date = "02-09-2018";
date2 = "05-07-2023";
if (date2 > date) {
    console.log(`the date ${date2} is greater than ${date}`);
} else {
    console.log(`the date ${date} is greater than ${date2}`);
}

let number1 = 5;
let number2 = 7;
let number3 = 9;

if (number1 > number2 && number1 > number3) {
    console.log(`the number 1 ${number1} is the largest`);
} else if (number2 > number3) {
    console.log(`the number 2 ${number2} is the largest`);
} else {
    console.log(`the number 3 ${number3} is the largest`);
}

const colorName = prompt("ingrese los siguientes colores: red blue green");
const colorRed = "The color of passion";
const colorBlue = "The color of the sea";
const colorGreen = "The color of nature";

switch (colorName) {
    case "red":
        console.log(colorRed);
        break;
    case "blue":
        console.log(colorBlue);
        break;
    case "green":
        console.log(colorGreen);
        break;
    default:
        console.log("no ingreso los colores especificos");
        break;
}

const valor1 = Number(prompt("enter a value from 1 to 100"));
const valor2 = Number(prompt("enter a second value from 1 to 100"));
let operation = prompt(`please write an option to perform an operation:\nsum subtraction multiplication division`)

if (((valor1 <= 100) && (valor1 > 0)) && ((valor2 <= 100) && (valor2 > 0))){
    switch (operation) {
        case "sum":
            console.log(`the sum of ${valor1} and ${valor2} is ${valor1 + valor2}`);
            break;
        case "subtraction":
            console.log(`the subtraction of ${valor1} and ${valor2} is ${valor1 - valor2}`);
            break;
        case "multiplication":
            console.log(`the multiplication of ${valor1} and ${valor2} is ${valor1 * valor2}`);
            break;
        case "division":
            console.log(`the division of ${valor1} and ${valor2} is ${valor1 / valor2}`);
            break;
        default:
            console.log("no valid option entered");
            break;
    }
} else if (valor1 <= 0 || valor2 <= 0) {
    console.log("the numbers entered are not valid");
} else {
    console.log("You have not entered a number");
}

let person1 = {
    name: "Juan",
    age: 39,
    height: 1.69
}
let person2 = {
    name: "pedro",
    age: 50,
    height: 1.65
}

if (person1.height > person2.height) {
    if (person1.age > person2.age) {
        console.log(`${person1.name} is taller and older than ${person2.name}`);
    }
    else {
        console.log(`${person1.name} is taller and ${person2.name} is older`);
    }
} else {
    if (person2.age > person1.age) {
        console.log(`${person2.name} is taller and older than ${person1.name}`);
    } else {
        console.log(`${person2.name} is taller and ${person1.name} is older`);
    }
}

let name = prompt("ingrese su nombre");
let age = Number(prompt("ingrese su edad"));
let height = Number(prompt("ingrese su altura"));
let vision = Number(prompt("cual es el nivel de su vision"));

if (age >= 18 && height > 110 && vision >= (8 / 10) && vision <= 10/10){
    console.log("Estás calificado para conducir");
} else {
    console.log("NO Estás calificado para conducir");
}

let age = Number(prompt("ingrese su edad"));

if (age >= 0 && age <= 12) {
    alert(`tienes ${age} eres infant`)
} else if (age >= 13 && age <= 18) {
    alert(`tienes ${age} eres adolescent`)
} else if (age >= 19 && age <= 45) {
    alert(`tienes ${age} eres older young`)
} else if (age > 45) {
    alert(`tienes ${age} elderly`)
    alert(`Is he really that old? (more than 100 show)`)
} else {
    alert("lo siento no agregaste bien tu edad por favor utiliza solo numeros la proxima vez")
}

const number = Number(prompt("ingrese un numero del 1 al 3"));

if (number >= 1 && number <= 3) {
    const number2 = Number(prompt("ingrese otro numero"));
    switch (number) {
        case 1: alert(`el numero ingresado es ${number2}`),
            alert(`el doble del numero ingresado es ${number2 * 2}`),
            alert(`Tres veces el número ingresado es ${number2 * 3}`)
            break;
        case 2: alert(`el numero ingresado es ${number2}`),
            alert(`el doble del numero ingresado es ${number2 * 2}`),
            alert(`Tres veces el número ingresado es ${number2 * 3}`)
            break;
        case 3: alert(`el numero ingresado es ${number2}`),
            alert(`el doble del numero ingresado es ${number2 * 2}`),
            alert(`Tres veces el número ingresado es ${number2 * 3}`)
            break;
        default:
            alert(`otro: Ese valor no está permitido`)
            break;
    }
} else {
    alert(`lo siento no es un numero del 1 al 3 por favor utiliza solo esos numeros la proxima vez`)
}



let customerName = prompt("ingrese se nombre")
let entrance = prompt("dispone de entrada?")

if (entrance === "si") {
    let pass = (prompt("ingrese el tipo de entrada vip o normal"));
    if (pass === "vip" || pass === "normal") {
        switch (pass) {
            case "normal":
            case "vip":
                let entrance2 = prompt("quieres utilizar tu entrada?")
                if (entrance2 == "si") {
                    alert("welcome");

                } else if (entrance2 == "no") {
                    alert("farewell");
                }
                else {
                    alert(`usted no ingreso una opcion`)
                }
                break;
            default:
                alert(`no ingreso ni vip ni normal`)
                break;
        }
    } else {
        alert("chauu");
    }

} else if (entrance === "no") {
    let buy = prompt("quieres comprarla?")
    if (buy == "si") {
        let money = Number(prompt("cuanto es el dinero con el que dispone"));
        switch (true) {
            case money >= 1000:
                alert(`usted dispone del saldo para comprar una entrada Bienvenido`);
                break;
            case money < 1000:
                alert(`lo siento no dispone del saldo necesario`);
                break;
            default:
                alert(`lo siento usted no ingreso un numero`);
                break;
        }
    } else if (buy == "no") {
        alert(`adios vuelva cuando desee`);
    } else {
        alert(`usted no ingreso una opcion`);
    }
} else {
    alert(`usted no agrego una opcion valida`);
} */