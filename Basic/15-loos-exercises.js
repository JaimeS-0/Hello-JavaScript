/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios
// for | while | do while | for of

// 1. Crea un bucle que imprima los números del 1 al 20
console.log("-------------------------------------------")
console.log("1. Crea un bucle que imprima los números del 1 al 20")
console.log("-------------------------------------------")

    for(let i = 0; i <= 20; i++){
        console.log("con for: " + i)
    }

    console.log("--------------------")
    i = 0

    while( i <= 20){
        console.log("con while: " + i)
        i++
    }

    console.log("--------------------")
    i = 0

    do {
        console.log("Con do while: " + i)
        i++
    } while(i <= 20)

    console.log("--------------------")
    i = [0, 1, 2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    for(let valor of i) {
        console.log("Con for of: " + valor)
    }

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("-------------------------------------------")
console.log("2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado")
console.log("-------------------------------------------")

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

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

// 8. Usa un bucle para invertir una cadena de texto

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10