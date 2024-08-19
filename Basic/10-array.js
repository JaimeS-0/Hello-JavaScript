// array | Estructura de datos

// Declaracion

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

myArray = ["Naruto", "Uzumaky", "Hokague", 32, true]

myArray2 = new Array("Naruto", "Uzumaky", "Hokague", 32, true)
console.log(myArray)
console.log(myArray2)

// Añadir valores
myArray2 = new Array(3)
myArray2[0] = "Naruto"
myArray2[1] = "Uzumaky"
myArray2[4] = "Hokague"
console.log(myArray2)

myArray = []
myArray[2] = "Uchiha"
//myArray[0] = "Sasuke"
myArray[3] = "Emo vengador"
console.log(myArray)

// metodos comunes
myArray = []

// push y pop
myArray.push("Sakura") // Introduce elementos
myArray.push("Haruno")
myArray.push("Medico")
myArray.push(30)
console.log(myArray)

console.log(myArray.pop()) // Elimina el ultimo elemento del array y lo devuelve
console.log(myArray)

// shift y unshift
console.log(myArray.shift()) // Elimina el primer elemnto 
console.log(myArray)

myArray.unshift() // Agrega 1 o mas elementos al principio del array
myArray.unshift("Sakura")
console.log(myArray)

// length
console.log(myArray.length + " Tiene estos elementos")

// clear

myArray = []
myArray.length = 0
console.log(myArray)

// slice va por elementos

myArray = ["Naruto", "Uzumaky", "Hokague", 32, true]
let myNewArray = myArray.slice(1, 2)   // nuevo array pero con el padazo que yo quiero del array
console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3) // elimina elementos 1 y 3
console.log(myArray)

myArray = ["Naruto", "Uzumaky", "Hokague", 32, true]

myArray.splice(1, 2, "Nuevo elemento")
console.log(myArray)














/*
//Impar
let n = 10

myDato = 2* n + 1
console.log(myDato)

//Par
let j = 10

myDato2 = 2* j
console.log(myDato2)

let i = 0
for (let i = 1; i < 101; i++) {
    if(i %2 === 0) {
        console.log(i)
    }
}
console.log(typeof(i))
*/