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

const age1 = 25
const ageValue = age1 >= 18 ? "adulto" : "menor"
console.log(ageValue)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
console.log("-------------------------------------------")
console.log("6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable mes")
console.log("-------------------------------------------")

let numberMes = 0
let mes
switch(numberMes) {
    case 0: mes = "January" // Enero
        break
    case 1: mes = "February" // Febrero
        break
    case 2: mes = "March" // Marzo
        break
    case 3: mes = "April" // Abril
        break
    case 4: mes = "May" // Mayo
        break
    case 5: mes = "June" // Junio
        break
    case 6: mes = "July" // Julio
        break
    case 7: mes = "August" // Agosto
        break
    case 8: mes = "September" // Septiembre
        break
    case 9: mes = "October" // Octubre
        break
    case 10: mes = "November" // Noviembre
        break
    case 11: mes = "December" // Diciembre
        break
    default: console.log("No conincide con ningun valor")
}
console.log(mes)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
console.log("-------------------------------------------")
console.log("7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior")
console.log("-------------------------------------------")

mes = 2 // March
if (mes === 0 || mes === 2 || mes === 4 || mes === 6 || mes === 7 || mes === 9 || mes === 11) {
    console.log("Este mes tiene 31 días")
} else if (mes === 3 || mes === 5 || mes === 8 || mes === 10) {
    console.log("Este mes tiene 30 días")
} else if (mes === 1) {
    console.log("Este mes tiene 28 días")
} else {
    console.log("Mes no válido")
}

// switch

mes = 11 // December
switch(mes) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
        console.log("Este mes del switch tiene 31 dias")
        break
    case 3:
    case 5:
    case 8:
    case 10:
        console.log("Este mes del switch tiene 30 dias")
        break
    case 1: console.log("Este mes del switch tiene 28 dias")
        break
    default: console.error("No corresponde a ningun mes")
}

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
console.log("-------------------------------------------")
console.log("8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma")
console.log("-------------------------------------------")

const español = "Hola"
const ingles = "Hello"
const aleman = "Hallo"
const frances = "Bonjour"

let saludo = frances

    switch(saludo) {
        case español: console.log(español)
            break
        case ingles: console.log(ingles)
            break
        case aleman: console.log(aleman)
            break
        case frances: console.log(frances)
            break   
        default: console.error("Ningun valor introducido")
    }

// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7