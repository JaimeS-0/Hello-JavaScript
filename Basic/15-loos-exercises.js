/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios
// for | while | do while | for of

// 1. Crea un bucle que imprima los números del 1 al 20
console.log("-----------------------------------------------------------------------------")
console.log("1. Crea un bucle que imprima los números del 1 al 20")
console.log("-----------------------------------------------------------------------------")

    for(let i = 0; i <= 20; i++){
        console.log("con for: " + i)
    }

    console.log("-----------------------------------------------------------------------------")
    i = 0

    while( i <= 20){
        console.log("con while: " + i)
        i++
    }

    console.log("-----------------------------------------------------------------------------")
    i = 0

    do {
        console.log("Con do while: " + i)
        i++
    } while(i <= 20)

        console.log("-----------------------------------------------------------------------------")
    i = [0, 1, 2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    for(let valor of i) {
        console.log("Con for of: " + valor)
    }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("-----------------------------------------------------------------------------")
console.log("2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado")
console.log("-----------------------------------------------------------------------------")

    let suma = 0
    
    for(i = 1; i <= 100; i++){
        suma += i
    }
    console.log(`La suma de los numeros con for es ${suma}`)

    suma = 0
    i = 0
    while(i <= 100){
        suma += i
        i++
    }
    console.log("La suma de los numeros con while es: " + suma)

    suma = 0
    i = 0
    do {
        suma += i
        i++
    }while(i <= 100)
    console.log("La suma de los numeros con do while es: " + suma)

    let numerosArray = []
    for(i = 0; i <= 100; i++){
        numerosArray.push(i)
    }
    console.log(numerosArray)
    console.log("Último elemento del array:", numerosArray[numerosArray.length - 1]); // Verifica el último elemento
    
    suma = 0
    for(let valor of numerosArray){
        suma += valor
    }
    console.log(`La suma de los numeros con for of es: ${suma}`)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("-----------------------------------------------------------------------------")
console.log("3. Crea un bucle que imprima todos los números pares entre 1 y 50")
console.log("-----------------------------------------------------------------------------")

for(let i = 0; i <= 50; i++){
    if(i % 2 == 0){
        console.log(`Numeros pares del for ${i}`)
    }
}
console.log("-----------------------------------------------------------------------------")

i = 0
while(i <= 50){
    if(i % 2 == 0) {
        console.log(`Numeros pares del while ${i}`)
    }
    i++
}
console.log("-----------------------------------------------------------------------------")

i = 0
do{
    if(i % 2 == 0){
        console.log(`Numeros pares del do while ${i}`)
    }
    i++
}while(i <= 50)
    console.log("-----------------------------------------------------------------------------")

let numbers = []
i = 0
for(i = 0; i <= 50; i++){
    numbers.push(i)
}

for(let value of numbers){
    if(value % 2 == 0){
        console.log(`Los numeros pares del for of son ${value}`)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("-----------------------------------------------------------------------------")
console.log("4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola")
console.log("-----------------------------------------------------------------------------")

let names = ["Aitana", "Taylor Swift", "Ana mena", "Belen aguilera", "Lola Indigo"]

i = 0
for(i = 0; i < names.length; i++){
    console.log("Los nombres del Array con el for son: " + names[i])
}
console.log("-----------------------------------------------------------------------------")

i = 0
while(i < names.length){
    console.log("Los nombres del Array con el while son: " + names[i])
    i++
}
console.log("-----------------------------------------------------------------------------")

i = 0
do {
    console.log("Los nombres del Array con el Do while son: " + names[i])
    i++
}while(i < names.length)
console.log("-----------------------------------------------------------------------------")

i = 0
for(let value of names){
    console.log("Los nombres del Array con el For of es: " + value)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("-----------------------------------------------------------------------------")
console.log("5. Escribe un bucle que cuente el número de vocales en una cadena de texto")
console.log("-----------------------------------------------------------------------------")

let cadenaText = "Hola soy una cadena de texto con varias vocales nuevas jajaja"

let count = 0

let vocales = "aeiouAEIOU"

for(let i = 0; i < cadenaText.length; i++){
    if(vocales.includes(cadenaText[i])){
        count++
    }       
}
console.log(`La vocales del for son ${count} vocales`)

i = 0
count = 0
while(i < cadenaText.length) {
    if(vocales.includes(cadenaText[i])){
        count++
    }
    i++
}
console.log(`Las vocales del while son ${count} vocales`)

i = 0
count = 0
do{
    if(vocales.includes(cadenaText[i])){
        count++
    }
    i++
}while(i < cadenaText.length)
console.log(`Las vocales del do while son ${count} vocales`)

i = 0
count = 0
for(let valor of cadenaText) {
    if(vocales.includes(valor)){
        count++
    }
}
console.log(`Las vocales del for of son ${count} vocales`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log("-----------------------------------------------------------------------------")
console.log("6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto")
console.log("-----------------------------------------------------------------------------")

let multiply = [2, 5, 8];

let product = 1

for (let i = 0; i < multiply.length; i++) {
    product *= multiply[i]
}
console.log("El producto con el for es: " + product)


product = 1
i = 0
while (i < multiply.length) {
    product *= multiply[i]
    i++
}
console.log("El producto con el while es: " + product)


product = 1;
i = 0
do {
    product *= multiply[i]
    i++
} while (i < multiply.length)
console.log("El producto con el do while es: " + product)


product = 1
for (let value of multiply) {
    product *= value
}
console.log("El producto con el for of es: " + product)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("-----------------------------------------------------------------------------")
console.log("7. Escribe un bucle que imprima la tabla de multiplicar del 5")
console.log("-----------------------------------------------------------------------------")

let table = 5

for(let i = 0; i <= 10; i++) {
    let result = table * i
    console.log(`La tabla de multiplicar con el for es: ${table} X ${[i]} = ${result}`)
}

console.log("---------------------------------------------------------------------")
i = 0
while(i <= 10) {
    result = table * i 
    console.log(`La tabla de multiplicar con el while es: ${table} X ${[i]} = ${result}`)
    i++
}

console.log("---------------------------------------------------------------------")
i = 0
do{
    result = table * i
    i++
    console.log(`La tabla de multiplicar con el do while es: ${table} X ${[i]} = ${result}`)
}while(i <= 10)

console.log("----------------------------------------------------------------------")

// Hacer Array para que sea iterable y poder usar el for of
let TableIterable = []
for(i = 0; i <= 10; i++){
    TableIterable.push(i)
}

for(let value of TableIterable){
    result = table * value
    console.log(`La tabla de multiplicar con el for...of es: ${table} X ${value} = ${result}`)
}

// 8. Usa un bucle para invertir una cadena de texto
console.log("-----------------------------------------------------------------------------")
console.log("8. Usa un bucle para invertir una cadena de texto")
console.log("-----------------------------------------------------------------------------")

let cadena = "Esto es algo Invertido sisi"
let cadenaInvertida = ""

for(let i = cadena.length -1; i >= 0; i--){
    cadenaInvertida += cadena[i]
}
console.log(`Cadena Invertida con el for: ${cadenaInvertida}`)

i = cadenaInvertida.length -1
while(i >= 0) {
    cadenaInvertida += cadena[i]
    i--
}
console.log(`Cadena Invertida con el while: ${cadenaInvertida}`)

do{
    cadenaInvertida += cadena[i]
    i--
} while(i >= 0)
console.log(`Cadena Invertida con el Do while: ${cadenaInvertida}`)

for(let caracter of cadena){
    cadenaInvertida = caracter + cadena
}
console.log(`Cadena Invertida con el For of: ${cadenaInvertida}`)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("-----------------------------------------------------------------------------")
console.log("9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci")
console.log("-----------------------------------------------------------------------------")

const fibonachi = n => {
    const fib = [0, 1] //1 
    
    for (let i = 2; i <= n; i++) { 
        fib[i] = fib[i - 2] + fib[i - 1]
    }// 2 
    return fib[n]
}
console.log(fibonachi(1))
console.log(fibonachi(2))
console.log(fibonachi(3))
console.log(fibonachi(4))
console.log(fibonachi(5))
console.log(fibonachi(6))
console.log(fibonachi(7))
console.log(fibonachi(8))
console.log(fibonachi(9))
console.log(fibonachi(10))


   
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log("-----------------------------------------------------------------------------")
console.log("10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10")
console.log("-----------------------------------------------------------------------------")

let num = [1, 3, 5, 7, 10, 20, 55, 79, 102]
let newNum = []

console.log(`El Array tiene: ${num.length} elemntos ${num}`)

for(let i = 0; i < num.length; i++){
    if(num[i] < 10) {
        newNum.push(num[i])
    }
}
console.log(`Los numeros mayores de 10 son: ${newNum}`)