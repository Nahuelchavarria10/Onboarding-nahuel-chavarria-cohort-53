//low JS Basic Exercises


const myFirstName = "Nahuel";
console.log(myFirstName);


const myLastName = "Chavarria";
console.log(myLastName)


let myAge = 21;
console.log(myAge);


const myPet = "Mauri";
console.log(myPet)


let petAge;
petAge = 1;
console.log(petAge);


const fullName = `${myFirstName} ${myLastName}`;
console.log(fullName);


let Presentationtext = `${myFirstName} ${myLastName} ${myAge} ${myPet} ${petAge}`;
console.log(Presentationtext);



//medium


let sumAges = myAge + petAge;
console.log(`the sum of the ages of ${myPet} and ${myFirstName} is ${sumAges}`);

let subtractAges = myAge - petAge;
console.log(`the rest of the ages of ${myPet} and ${myFirstName} is ${subtractAges}`);

let productAges = myAge * petAge;
console.log(`the multiplication between the ages of ${myPet} and ${myFirstName}is ${productAges}`);

let divisionAges = myAge / petAge;
console.log(`the division between the ages of ${myPet} and ${myFirstName} is ${divisionAges}`);

let student = {
    weight: 70,
    height: 1.72,
    career: "programming",
    os: "windows",
    sport: "soccer"
}
console.table(student);

console.log("the height is", student.height, "the weight is", student.weight, "study the career of", student.career, "your operating system is", student.os, "the sport you practice is", student.sport);


let pet = {
    animal: "dog",
    breed: "dachshund",
    color: "black",
    age: 1,
    weight: 10
}
console.table(pet);
console.log(`my pet is a ${pet.animal} the breed is ${pet.breed} its color is ${pet.color} the age is ${pet.age} year the weight is ${pet.weight} kg`);


let fruits = ["grape", "apple", "banana", "watermelon", "Strawberry"];
console.log(fruits);

console.log(`fruit:\n${fruits[0]}\n${fruits[1]}\n${fruits[2]}\n${fruits[3]}\n${fruits[4]}`);

//high

let IamAdult = (prompt("enter your age")) >= 18;
console.log(`I am an adult: ${IamAdult}`);



const numbers = [1, 2, 3, 4, 5];
console.table(numbers);

console.log(`the numbers are:\n${numbers[0]} ${numbers[1]} ${numbers[2]} ${numbers[3]} ${numbers[4]}`);

const family = [
    {   nombre: `lionel `,
        age: 36,
        birthday: "June24th"
    },
    {   nombre: `antonella `,
        age: 35,
        birthday: "February26th"
    },
    {   nombre: `thiago `,
        age: 11,
        birthday: "November2th"
    },
    {   nombre: `mateo `,
        age: 8,
        birthday: "Semptember11th"
    },
    {   nombre: `ciro `,
        age: 5,
        birthday: "March10th"
    }];
console.table(family);
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
console.log(family[3]);
console.log(family[4]);


let randomText = `${fruits[1]} ${numbers[3]} ${family[4].nombre}`

console.log(randomText);