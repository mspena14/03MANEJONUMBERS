
// CREACIÓN DE NUMEROS
let number1 = 45
let number2 = Number(45)
let number3 = new Number(45)

console.log(number1)
console.log(number2)
console.log(number3)

// RANGOS
console.info(Number.MAX_VALUE)
console.info(Number.MIN_VALUE)

// OPERACIONES MATEMATICAS
const operaNum1 = 5
const operaNum2 = Number("10") // Se puede asignar un numero como un string, pero si coloca el metodo Number() no toma en cuenta las ""

console.log(operaNum1 * operaNum2)
console.log(operaNum1 / operaNum2)
console.log(operaNum1 - operaNum2)
console.log(operaNum1 + operaNum2)

// DECIMALES
let decNum1 = 45
let decNum2 = 89.75

console.info(typeof (decNum1))
console.info(typeof (decNum2))
console.info(Number.isInteger(decNum1))
console.info(Number.isInteger(decNum2))// Validar si es un entero

// Solicitar un numero que sea obligatoriamente entero o decimal 

let parseIntNum = Number.parseInt(50.2)
let parseFloatNum = Number.parseFloat(50.2)

console.log(typeof (parseIntNum))
console.log(typeof (parseFloatNum))
console.log(parseIntNum)
console.log(parseFloatNum)

//CONVERTIR EN STRING
let strNum = 41187 

console.info(String(strNum))// Se pinta negro en la consola cuando es str
console.info(strNum.toString(2))
console.info(strNum.toString(3))
console.info(strNum.toString(8))
console.info(strNum.toString(16))//Se puede pasar a diferentes lenguajes de maquina, por ejemplo 2 es para binario, 16 para exadecimal


// DEFINIR CANTIDAD DECIMALES
const cantDecimales = 502.15225

console.log(cantDecimales)
console.log(cantDecimales.toFixed(1))
console.log(cantDecimales.toFixed(2))
console.log(cantDecimales.toFixed(3))
console.log(cantDecimales.toFixed(4))
console.log(cantDecimales.toFixed(5))
console.log(cantDecimales.toFixed(100))

// PASAR A EXPONENCIAL
const expoNum = 45

console.log(expoNum) //Se escribe automaticamente en exponencial ya que es muy grande
console.log(expoNum.toExponential(1))
console.log(expoNum.toExponential(10))
console.log(expoNum.toExponential(100)) // Define la cantidad de numeros a mostrar en la exponenciación 

// ACROTAR CANTIDAD DE NUMEROS EN EXPONENCIAL
const preciNum = 86514144326649426

console.log(expoNum)
console.log(preciNum.toPrecision(1))
console.log(preciNum.toPrecision(2))
console.log(preciNum.toPrecision(3))

// CLASE Math !!!!!IMPORTANTE¡¡¡¡¡

console.log(2*2*2*2*2)
console.log(Math.pow(2,5))
console.log(2**5)// Potenciación
console.log(Math.sqrt(25))// Raíz cuadrada
console.log(Math.cbrt(8))// Raíz cubica
console.log(Math.cos(20))// Coseno
console.log(Math.abs(-20))// Absoluto distancia entre el numero y el 0

let posOrNegNum = -78
console.log(Math.sign(posOrNegNum))  // Clase Math para saber si es positivo (1) o negativo (-1) o cero (0) reemplaza la condicional de abajo
if (posOrNegNum > 0) {
    console.log("Es positivo")
} else {
    console.log("Es negativo")
}

console.info(Math.max(48,99,55,48.5,30)) //Número más grande 
console.info(Math.min(48,99,55,48.5,30)) //Número más pequeño

let redondearNumber = 2.999999
/* document.write(redondearNumber) */
console.info(Math.round(redondearNumber))//Redondea un número
console.info(Math.floor(redondearNumber))//Redondea pero hacia abajo
console.info(Math.ceil(redondearNumber))//Redondea pero hacia arriba

let randomNum = Math.round(Math.random()*100)//Generar un número aleatorio entre 0 a 1 y se multiplica por 100 para que sea de 0 a 100
console.info(randomNum)
document.write(randomNum)


// Definir el rango mínimo y máximo
let min = 50
let max = 100

// Generar un número aleatorio dentro del rango
let numeroAleatorio = Math.round(Math.random() * (max - min)) + min

// Mostrar el número aleatorio generado
console.log(numeroAleatorio)
