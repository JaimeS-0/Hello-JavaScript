// Map

// Diccioario coleccion de elementos 2 elementos clave valor 


// Declaracion
let myMap = new Map()

console.log(myMap)


// Inicializacion
myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])
console.log(myMap)


// Metodos y propiedades

// set | agregar
myMap.set("alias", "mouredev")
myMap.set("name", "Brais Moure") // Si exite se actualiza si no añade nuevo valor
console.log(myMap)

// get | recuperar
console.log(myMap.get("name"))
console.log(myMap.get("surname"))

// has | comprueba si existe una clave
console.log(myMap.has("surname"))
console.log(myMap.has("age"))

// delete | borrar
myMap.delete("email")
console.log(myMap)

// keys, values y entries
console.log(myMap.keys())
console.log(myMap.values())
console.log(myMap.entries()) // Retorna todo el listado

// size 
console.log(myMap.size)
// clear
myMap.clear()
console.log(myMap)
