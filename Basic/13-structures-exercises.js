/*
Clase 4 en vídeo | 31/07/2024
Mapas, bucles y funciones
https://www.youtube.com/live/xg1GeHKiNzU?si=oiWHK8bDTZ1c98hF&t=885
*/

// 1. Crea un array que almacene cinco animales
console.log("-------------------------------------------")
console.log("1. Crea un array que almacene cinco animales")
console.log("-------------------------------------------")

let animmals = new Array("perro", "gato", "leon", "mono", "pez")
// otra forma   let animals2 = ["Jirafa"]
console.log(animmals)

// 2. Añade dos más. Uno al principio y otro al final
console.log("-------------------------------------------")
console.log("2. Añade dos más. Uno al principio y otro al final")
console.log("-------------------------------------------")

animmals[0] = "Hiena"
animmals.push("jirafa")
console.log(animmals)

// 3. Elimina el que se encuentra en tercera posición
console.log("-------------------------------------------")
console.log("3. Elimina el que se encuentra en tercera posición")
console.log("-------------------------------------------")

console.log(animmals)
animmals.splice(2)
console.log(animmals)

// 4. Crea un set que almacene cinco libros
console.log("-------------------------------------------")
console.log("4. Crea un set que almacene cinco libros")
console.log("-------------------------------------------")

let = books = new Set(["book-1", "book-2", "book-3", "book-4", "book-5"])
console.log(books)

// 5. Añade dos más. Uno de ellos repetido
console.log("-------------------------------------------")
console.log("5. Añade dos más. Uno de ellos repetido")
console.log("-------------------------------------------")

books.add("Midudev aprender git y github")
books.add("Como salir del club de lso fracasados")
books.add("book-1")
console.log(books.has("book-1"))
console.log(books)

// 6. Elimina uno concreto a tu elección
console.log("-------------------------------------------")
console.log("6. Elimina uno concreto a tu elección")
console.log("-------------------------------------------")

books.delete("book-4")
console.log(books)

// 7. Crea un mapa que asocie el número del mes a su nombre
console.log("-------------------------------------------")
console.log("7. Crea un mapa que asocie el número del mes a su nombre")
console.log("-------------------------------------------")

let month = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"]
]);
console.log(month)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
console.log("-------------------------------------------")
console.log("8. Comprueba si el mes número 5 existe en el map e imprime su valor")
console.log("-------------------------------------------")

console.log(month.has(5), "El numero 5 esta en map")

// 9. Añade al mapa una clave con un array que almacene los meses de verano
console.log("-------------------------------------------")
console.log("9. Añade al mapa una clave con un array que almacene los meses de verano")
console.log("-------------------------------------------")

month.set(66, "June")
month.set(77, "July")
month.set(88, "August")
console.log(month)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
console.log("-------------------------------------------")
console.log("10. Crea un Array, transfórmalo a un Set y almacénalo en un Map")
console.log("-------------------------------------------")

let myArray = ["water", " Earth", " Forest", " wind"]
console.log("El Array es: " + myArray)

let mySet = new Set(myArray)
console.log("El Set es: " + [...mySet])
console.log("El Set es: " + Array.from(mySet))
/*El operador de "spread" (...) es una herramienta muy útil para copiar arrays y convertir iterables como Set en arrays. La copia es superficial, por lo que es importante tener en cuenta que si trabajas con objetos dentro de arrays, las referencias a esos objetos se copian, no los objetos en sí.*/ 

// Almacena el Set en un Map
let myMap = new Map();
myMap.set('key', mySet);

// Mostrar el Map con su contenido
console.log("El Map es:")

myMap.forEach((value, key) => {
    console.log(`clave: ${key}`)  
    console.log(`valor: ${[...value]}`)
});






