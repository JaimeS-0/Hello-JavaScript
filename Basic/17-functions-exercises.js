/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
console.log("-----------------------------------------------------------------------------")
console.log("1. Crea una función que reciba dos números y devuelva su suma")
console.log("-----------------------------------------------------------------------------")

function sum(a, b) {
    console.log(a + b)
}
sum(5, 25)

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
console.log("-----------------------------------------------------------------------------")
console.log("2. Crea una función que reciba un array de números y devuelva el mayor de ellos")
console.log("-----------------------------------------------------------------------------")

let ArrayNumbers = [2, 5, 45, 78, 88, 965, 1822, 74, 23, 36]

const largeNum = (ArrayNumbers) => {
// Inicializamos max con un valor que es menor que cualquier número finito
// Esto asegura que cualquier número en el array será mayor que este valor inicial.
    let max = Number.NEGATIVE_INFINITY
    console.log(Number.NEGATIVE_INFINITY)

    ArrayNumbers.forEach(element => {
        if(element > max) {
            max = element
        }
    });
    console.log(max)
}
largeNum(ArrayNumbers)

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
console.log("-----------------------------------------------------------------------------")
console.log("3. Crea una función que reciba un string y devuelva el número de vocales que contiene")
console.log("-----------------------------------------------------------------------------")

let textVowels = "Buenos dias hoy es 14/09/2024"
let vowals ="aeiou"
let vowelCount = 0

function giveString(textVowels) {

    console.log(typeof(textVowels))
    for (let i = 0; i < textVowels.length; i++) {
        if(vowals.includes(textVowels[i].toLowerCase())) {
            vowelCount++
        }
    }
    console.log(vowelCount)
}
giveString(textVowels)

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
console.log("-----------------------------------------------------------------------------")
console.log("4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas")
console.log("-----------------------------------------------------------------------------")

    let arrayString = ["hay un pájaro pequeño volando por el cielo", "hoy voy a marte", "mañana como pizza"]

    let arrayCapital = []

    const giveArray = (arrayString) => {
        for (let i = 0; i < arrayString.length; i++) {
            arrayCapital.push(arrayString[i].toUpperCase())
        }
        console.log(arrayCapital)
    }
    giveArray(arrayString)

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
console.log("-----------------------------------------------------------------------------")
console.log("5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario")
console.log("-----------------------------------------------------------------------------")

    let number = 1

    const isPrime = (number) => {
        if(number % 2 === 0) return true
        else return false
    }
    console.log(isPrime(number))

    
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

// 10. Crea una función que calcule el factorial de un número dado