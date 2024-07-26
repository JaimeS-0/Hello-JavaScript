// String

// Concatenacion 
let myName = "Jaime"
let greeting = "Hola, " + myName + "!"

//Saludo
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[11])

// Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Jaime"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Jaime"))
console.log(greeting.includes("Midu"))

console.log(greeting.slice(0, 10))
console.log(greeting.replace("Jaime", "Dios del codigo"))

// Template literals (Plantillas literales)
let message = `Hola, este es mi 
curso de JavaScript en varias 
lineas`

console.log(message)

console.log(`Hola, ${myName}!`)