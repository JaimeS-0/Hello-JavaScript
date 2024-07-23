/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Crea una variable para cada operación aritmética

    console.log("--------------------------------------------------------------")
    console.log("Las Operaciones aricmeticas: ")
    console.log("--------------------------------------------------------------")
    let num1 = 10 
    let num2 = 7

    let suma = num1 + num2
    let resta = num1 - num2
    let multiplicacion = num1 * num2
    let division = num1 / num2
    let modulo = num1 % num2
    let exponente = num1 ** num2
    let incremento = num1++
    let decremento = num2--
    
    console.log("La suma da " + suma)
    console.log("La resta " + resta)
    console.log("La multiplicacion " + multiplicacion)
    console.log("La division " + division)
    console.log("El modulo " + modulo)
    console.log("El exponente " + exponente)
    console.log("El incremento " + incremento)
    console.log("El deremento " + decremento)
    
    console.log("--------------------------------------------------------------")
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

    console.log("Operaciones de asignacion con operaciones aricmeticas: ")
    console.log("--------------------------------------------------------------")
    let myAsignation = 5
    console.log(myAsignation)
    myAsignation -= 3
    console.log(myAsignation)
    myAsignation *= 5
    console.log(myAsignation)
    myAsignation /= 2
    console.log(myAsignation)
    myAsignation %= 10
    console.log(myAsignation)
    myAsignation **= 5
    console.log(myAsignation)

    console.log("--------------------------------------------------------------")
// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

    console.log("Operaciones de comparacion Verdaderas: ")
    console.log("---------------------------------------------------------------")
    let first = 100
    let second = 200
    let third = 200

    console.log(first < second)
    console.log("50" == "50")
    console.log(5 < 788)
    console.log(50 == 50)
    console.log(second === third)

    console.log("---------------------------------------------------------------")
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

    console.log("Operaciones de comparacion Falsas: ")
    console.log("---------------------------------------------------------------")
    

// 5. Utiliza el operador lógico and

// 6. Utiliza el operador lógico or

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas