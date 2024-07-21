/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea

    // Esto es un comentario de prueba sisi

// 2. Escribe un comentario en varias líneas

    /* Hola te hablo desde el 
    comentrio de varias lineas de ingles a
    All to well*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

    let yourName = "Taylor Swift"
    let age = 34
    let isBeautiful = true
    let newAlbum
    let albumDate = null
    let mySymbol = Symbol()
    let followers = 97351489n

// 4. Imprime por consola el valor de todas las variables

    console.log("Su nombre es " + yourName)
    console.log("Tiene " + age + " años")
    console.log("Ella es Hermosa " + isBeautiful)
    console.log("Saca Reputation TV " + newAlbum)
    console.log("Que fecha lo sacara " + albumDate)
    console.log(mySymbol)
    console.log("Tiene " + followers + " seguidores en Spoty")

// 5. Imprime por consola el tipo de todas las variables
console.log("-------------------------------------------------")

    console.log(typeof yourName)
    console.log(typeof age)
    console.log(typeof isBeautiful)
    console.log(typeof newAlbum)
    console.log(typeof albumDate)
    console.log(typeof mySymbol)
    console.log(typeof followers)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

    yourName = "Aitana Ocaña"
    age = 25
    isBeautiful = false // Es true Siempre lo hago por el ejercicio
    //newAlbum = undefined
    albumDate = null
    mySymbol = Symbol()
    followers = 100000055555555n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

    yourName = 988
    age = "Holaaaaa"
    isBeautiful = 696
    newAlbum = "undefined"
    albumDate = true
    mySymbol = 97351489n
    followers = Symbol()

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

    const string = "Hola soy un string"
    const number = 88
    const myndefined = undefined
    const myNull = null
    const boolean = true
    const bigInt = 878745896321478559645n
    const mySymbolConst = Symbol()
    

// 9. A continuación, modifica los valores de las constantes
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarser

    // Error: No se puede reasignar un valor a una constante
    //string = 12
    //number = true
    //undefined = undefined
    //myNull = null
    //boolean = "true"
    //bigInt = 878745896321478559645n
    //mySymbolConst = mySymbol()

