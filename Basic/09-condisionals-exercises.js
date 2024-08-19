/*
Clase 3 en vídeo | 24/07/2024
Condicionales, arrays y sets
https://www.twitch.tv/videos/2206228701?t=00h16m02s
*/ 

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
console.log("-------------------------------------------")
console.log("1. Imprime por consola tu nombre si una variable toma su valor")
console.log("-------------------------------------------")

    let Name = "Jaime"
    console.log(Name)

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
console.log("-------------------------------------------")
console.log("2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos")
console.log("-------------------------------------------")

let user = 'Paco';
let password = 123456;

if (user === 'Paco') {
    console.log("El usuario coincide con el nombre: " + user);
} else {
    console.log("El usuario no coincide con el nombre: " + user);
}

if (password === 123456) {
    console.log("La contraseña coincide con el valor establecido.");
} else {
    console.log("La contraseña no coincide.");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
console.log("-------------------------------------------")
console.log("3. Verifica si un número es positivo, negativo o cero e imprime un mensaje")
console.log("-------------------------------------------")

let number_positive = 23
let number_negative = -255
let num = 0

if(number_positive > 0) {
    console.log("El numero es positivo: " + number_positive)
}
if(number_negative < 0) {
    console.log("El numero es negativo: " + number_negative)
} 
if (num === 0) {
    console.log("El numero es cero " + num) 
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
console.log("-------------------------------------------")
console.log("4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan")
console.log("-------------------------------------------")

let age = 13
let ageVote = 18

if(age >= 18) {
    console.log("La persona puede votar: " + age)
} else {
    let añosFaltantes = ageVote - age
    console.log("La persona no puede votar le faltan " + añosFaltantes + " años.")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad 
console.log("-------------------------------------------")
console.log("5. Usa el operador ternario para asignar el valor adulto o menor a una variable dependiendo de la edad ")
console.log("-------------------------------------------")

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7