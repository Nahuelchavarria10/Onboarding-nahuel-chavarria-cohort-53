// Function
// low

/* function agregar() {
    console.log(100*20);
}


agregar() */


/* function agregar(parametro1,parametro2) {
    console.log(parametro1 * parametro2);
    console.log(parametro1);
    console.log(parametro2);
}

agregar(100,20) */

/* function agregar(parametro1, parametro2) {
    console.log(parametro1);
    console.log(parametro2);
    let resultado = parametro1 * parametro2;
    console.log(resultado);
    return resultado
}
let numero1 = 100;
let numero2 = 20;
agregar(numero1,numero2) */



/* let anonymous = function(parametro1, parametro2) {
    console.log(parametro1);
    console.log(parametro2);
    let resultado = parametro1 * parametro2;
    return resultado;
}
console.log(anonymous(10,20)); */



/* function saludar (nombre) {
    console.log(`hola ${nombre}`);
}
saludar("nahuel") */



/* let anonymous = function(num1,num2) {
    let multiplicacion = num1 * num2
    return multiplicacion
}
console.log(anonymous(3,2)); */


/* function area(base, altura) {
    let areaResultado = ((base * altura)/2);
    return areaResultado
}
console.log(area(10,20)); */



/* function perimeter(sideA,sideB,sideC) {
    let sumSides = sideA + sideB + sideC
    return sumSides
}
console.log(perimeter(10,20,5)); */


/* function market(prise,quantity) {
    let total = prise * quantity;
    if (quantity >= 10 && quantity < 20) {
        total = ((total / 100) * 10);
        return (`new total prise is ${total} a 10% discount`)
    } else if (quantity >= 20) {
        total = ((total / 100)  * 20);
        return (`new total prise is ${total} a 20% discount`)
    } else {
        return (`total prise is ${total}`)
    }
}
console.log(market(10,30)); */



/* function isAnAdult(age) {
    let messageAge = (`You are an adult`)
    if (age>=18) {
        return messageAge
    } else {
        messageAge = `You are not an adult`
        return messageAge
    }
}

console.log(isAnAdult(20)); */



/* function day(weekday) {
    switch (true) {
        case weekday >= 1 && weekday <= 5:
            alert(`It is a business day`);
            break;
        case weekday == 6 || weekday == 7:
            alert(`It's the weekend`)
        default:
            alert(`the day of the week is invaluable`);
            break;
    }
}
day(5) */

/* function agenda(infoPerson) {
    let names = prompt(`Enter name`)
    let infoTotal = {                    
    }
    if (names == "") {
        console.error(`The name cannot be empty`);
        alert(`your name not entered`);
    } else {
        infoTotal.nombre = names
        let lastName = prompt(`Enter lastname`);
        if (lastName == "") {
            console.error(`The lastname cannot be empty`);
            alert(`your lastname not entered`);
        } else {
            infoTotal.lastName = lastName
            let age = Number(prompt(`Enter Age`))
            if (age == "") {
                console.error(`The age cannot be empty`);
                alert(`your age not entered`);
            } else {
                infoTotal.age = age
                console.log(infoTotal)
            }
        }
    }

}
agenda() */



/* function greet(name) {
    return (`Hello, my name is ${name}`);
}
function calculateAge(yearOfBirth,currentYear) {
        return (`my age is ${currentYear - yearOfBirth}`); 
}

function presentation() {
    let name = prompt(`enter name`)
    let yearOfBirth = Number(prompt(`enter year of birth `))
    let currentYear = Number(prompt(`enter current year`))
    alert(`the presentation is: \n ${greet(name)},${calculateAge(yearOfBirth,currentYear)} years`)
}
presentation() */