
/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto

console.log("-------------------------------------------")
console.log("1. Concatena dos cadenas de texto")
console.log("-------------------------------------------")

    const name = `Aitana`
    const secondName = " Ocaña Morales"
    console.log(name + secondName)

    console.log('Hola tengo oro y quiero '
    + 'Un cohete.' )

       
// 2. Muestra la longitud de una cadena de texto

console.log("-------------------------------------------")
console.log("2. Muestra la longitud de una cadena de texto")
console.log("-------------------------------------------")

    const description = `Hola Buenos dias`

    console.log("La cadena de texto tiene " + description.length)

// 3. Muestra el primer y último carácter de un string

console.log("-------------------------------------------")
console.log("3. Muestra el primer y último carácter de un string")
console.log("-------------------------------------------")

    const planet = "Planet central"
    console.log(planet.length + " | " + planet)
    console.log("Muestra el primer caracter: " + planet[0])
    console.log("Muestra el ultimo caracter: " + planet[13])

// 4. Convierte a mayúsculas y minúsculas un string

console.log("-------------------------------------------")
console.log("4. Convierte a mayúsculas y minúsculas un string")
console.log("-------------------------------------------")

    const word = "parque de atracciones" 
    console.log(word.toUpperCase())

    const word1 = "CABAÑA EN EL BOSQUE"
    console.log(word1.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

console.log("-------------------------------------------")
console.log(" 5. Crea una cadena de texto en varias líneas")
console.log("-------------------------------------------")

    const text = 'Hola me quiero ' 
    + 'comprar una estacion'
    console.log(text)

// 6. Interpola el valor de una variable en un string

console.log("-------------------------------------------")
console.log("6. Interpola el valor de una variable en un string")
console.log("-------------------------------------------")

    let goddess  = "Taylor Alison Swift"
    console.log(`Quien es una diosa en la industia musical?  ${goddess}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log("-------------------------------------------")
console.log("7. Reemplaza todos los espacios en blanco de un string por guiones")
console.log("-------------------------------------------")

    let message = "El arbol es azul y la casa esta en el cielo"
    const resultado = message.replace(/ /g, '-')
    console.log(resultado)

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log("-------------------------------------------")
console.log("8. Comprueba si una cadena de texto contiene una palabra concreta")
console.log("-------------------------------------------")

    const texto = 'Hola me quiero ir a vivir a Marte'

    const palabra = texto.includes('Marte')
    console.log('La palabra seleccionada esta en el texto: ' + palabra)

// 9. Comprueba si dos strings son iguales

console.log("-------------------------------------------")
console.log("9. Comprueba si dos strings son iguales")
console.log("-------------------------------------------")

    let Iquals = 'Cerdito'
    let Iquals1 = 'Cerdito'
    if(Iquals == Iquals1) {
        console.log("Los Strings son iguales")
    }else console.log("No son iguales")

// 10. Comprueba si dos strings tienen la misma longitud

console.log("-------------------------------------------")
console.log("10. Comprueba si dos strings tienen la misma longitud")
console.log("-------------------------------------------")

    let letter = 'Cascada'
    let letter1 = 'Arco'
    console.log('La primera palabra tiene: ' + letter.length + ' | ' + ' La ultima palabra tiene: ' + letter1.length)
    if(letter.length == letter1.length) {
        console.log('Tiene la misma longitud')
    } else console.log('No tiene la misma longitud')