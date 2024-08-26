// set

// Declaracion 

let mySet = new Set()

// Inicializacion tienen que ir en corchetes []
mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])
console.log(mySet)

// Metodos comunes


// add y delete

mySet.add("https://moure.dev")
console.log(mySet)

mySet.delete("https://moure.dev") // Se le pasa el elemento en vez del indice por que lo hace con un Hash
console.log(mySet)

console.log(mySet.delete("Brais")) // Retorna true si el elemento esta y es eliminado

// has
console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))

// size (length)
console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set
mySet = new Set(myArray)
console.log(mySet)

// set No admite duplicados 
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)