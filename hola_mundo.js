/*
Esto es un comentario de varias líneas
*/

// Esto es un comentario de una línea

console.log("Hola mundo");

//Variables antiguas
var myString = "Esto es una cadena de texto"
console.log(myString)

//Variables nuevas
let myString2 = "Esto es una cadena de texto diferente"
myString2 = "Cambio el valor de la cadena de texto"
console.log(typeof myString2)
myString2 = 6
console.log(myString2)
console.log(typeof myString2)

let myNumber = 7
myNumber = myNumber + 4
console.log(myNumber)
console.log(myNumber - 1)
console.log(myNumber)

console.log(myString + " " + myNumber)

let myNumber2 = 6.5
console.log(myNumber2)
console.log(typeof myNumber2)

let myBool = false
console.log(myBool)
console.log(typeof myBool)

myBool = null
console.log(myBool)
console.log(myBool + myNumber2)
console.log(typeof MyBool)

//Constantes
const MY_CONST = "Mi propiedad constante"
//MY_CONST = "Otro valor" => Generar error en la ejecución
console.log(MY_CONST)

//Control de flujo
myNumber = 11
myString = "Hola"

if (myNumber == 10 && myString == "Hola") {
    console.log("El valor es 10")
}
else if (myNumber == 11 || myString == "Hola") {
    console.log("El valor es 11")
}
else {
    console.log("El valor no es conocido, el valor es ", myNumber)
}

myBool = null
if (myBool == null) {
    console.log("myBool es null")
}

if (myBool) {
    console.log("myBool no es null")
}

if (myBool) {
    console.log("myBool tiene un dato")
}

myBool = "Axel"
if (myBool) {
    console.log("myBool tiene un dato")
}

//Funciones
function myFunction() {
    return "Mi función"
}
console.log(myFunction())

//Listas
let myList = ["Axel", "Zaragoci", "Axel-Zaragoci", 17]
console.log(myList)
console.log(myList[0])

//Set
let mySet = new Set(["Axel", "Zaragoci", "Axel-Zaragoci", 17, "Axel"])
mySet.add("Zaragoci")
console.log(mySet)
console.log(typeof mySet)

//Mapa/Diccionario
let myMap = new Map([["Axel", 17], ["Judith", 18,], ["Teo", 19]])
console.log(myMap)

myMap.set("Didier", 49)
console.log(myMap)
console.log(myMap.get("Judith"))

//Bucles
for (const value of myList) {
    console.log(value)
}

let myCounter = 0
while (myCounter < myList.length) {
    console.log(myList[myCounter])
    myCounter = myCounter + 1
}