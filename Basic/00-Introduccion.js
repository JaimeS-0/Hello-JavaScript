


//Es un lenguaje dinamico es que puedes cambiar los tipos de las variables en tiempo de ejecucion
//it is a dynamic language where you can change the types of variables at runtime

let text = 'Hola mundo'
console.log(text)
text = 2
console.log(text)

// En un lenguaje de tipado débil, no necesitas asignar un tipo fijo a la variable.
// In a weakly typed language, you don't need to assing a fixed type to a variable


//Tipos de datos JavaScript hay 7
//tips of dates JavaScript here seven

// primitives
console.log(typeof undefined)   // undefined
console.log(typeof true)        // boolean
console.log(typeof 2)           // number
console.log(typeof "string")    // string
console.log(typeof 2n)          //bigInt
console.log(typeof Symbol())    //symbol

console.log(typeof null)        //null es especial por un error de js deberia dar null pero da object


//Objetos   objects
typeof {}
typeof []
const set = new Map()
typeof set

//Funcion   fuction
typeof function () {}

// Console.log()


console.assert(false, "Esto es un error");
console.clear();
console.count("contador");
console.countReset("contador");
console.debug("Mensaje de depuración");
console.dir({nombre: "Alice", edad: 28});
console.dirxml(document.body);
console.error("Esto es un error");
console.group("Grupo 1");
console.log("Mensaje dentro del grupo");
console.groupEnd();
console.groupCollapsed("Grupo colapsado");
console.log("Mensaje dentro del grupo colapsado");
console.groupEnd();
console.info("Mensaje informativo");
console.log("Mensaje general");
console.profile("Perfil 1");
console.profileEnd();
console.table([{nombre: "Alice", edad: 28}, {nombre: "Bob", edad: 32}]);
console.time("Temporizador");
console.timeEnd("Temporizador");
console.timeLog("Temporizador");
console.trace("Traza de la pila");
console.warn("Mensaje de advertencia");





