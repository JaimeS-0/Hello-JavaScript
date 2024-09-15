// Funciones | bloque de codigo para diseñado realizar una tarea especificas

// Simple
function myFunc() {
    console.log("Hello my function!")
}
for(let i = 0; i < 5; i++){
    myFunc()
}

// Con parámetros
function myFuncWithParams(name) {
    console.log(`Hello ${name}!`)
}
myFuncWithParams("Jaime")

// Funciones anónimas
const myFunc2 = function(name) {
    console.log(`¡Hola, ${name}!`)
}
myFunc2("Brais Moure")

// Arrow functions
const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)    
}

const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)    

myFunc3("Brais Moure")
myFunc4("Brais Moure")

// Parámetros

function sum(a, b) {
    console.log(a + b)
}
sum(5, 10)
sum(5) //NaN not a nnumber

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}
// Valor por defecto
defaultSum()
defaultSum(5)
defaultSum(5, 10)
defaultSum(n = 5)

// Retorno de valores
function mult(a, b) {
    return a * b
}
let result = mult(5, 10)
console.log(result)

// Funciones anidadas
function extern() {
    console.log("Funcion externa")
    function intern() {
        console.log("Funcion interna")
    }
    intern()
}
extern()
//intern() Error: Fuera del scope

// Funciones de orden superior | Funciones que reciben otras funciones como argumentos
function appyFunc(func, param) {
    func(param)
}
appyFunc(myFunc4, "Función de orden superior")

// forEach | es una funcion para hacer elemntos iterables
myArray = [1, 2, 3, 4]

myArray.forEach((value) => console.log(value))


mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

mySet.forEach((value) => console.log(value))
myMap.forEach((value) => console.log(value))