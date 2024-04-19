
console.groupCollapsed("Ejercicios numbers");
console.groupCollapsed("Ejercicio 1");
// 1. Sumar dos números.
console.log(5+20)
console.groupEnd();

console.groupCollapsed("Ejercicio 2");
// 2. Restar dos números.
console.info(20-5)
console.groupEnd();

console.groupCollapsed("Ejercicio 3");
// 3. Multiplicar dos números.
console.log(2*5)
console.groupEnd();

console.groupCollapsed("Ejercicio 4");
// 4. Dividir dos números.
console.log(10/3)
console.groupEnd();

console.groupCollapsed("Ejercicio 5");
// 5. Calcular el módulo (resto) de una división.
console.log(10%3)
console.groupEnd();

console.groupCollapsed("Ejercicio 6");
// 6. Generar un número aleatorio entre 1 y 10.
console.log(Math.round(Math.random() * (10 - 1)) + 1)
console.groupEnd();

console.groupCollapsed("Ejercicio 7");
// 7. Elevar un número a la potencia de otro.
console.log(Math.pow(2,4))
console.groupEnd();

console.groupCollapsed("Ejercicio 8");
// 8. Calcular la raíz cuadrada de un número.
console.log(Math.sqrt(25))
console.groupEnd();

console.groupCollapsed("Ejercicio 9");
// 9. Convertir grados Celsius a Fahrenheit.
let celcius = 2
console.log((celcius*9/5)+32)
console.groupEnd();

console.groupCollapsed("Ejercicio 10");
// 10. Calcular el área de un círculo.
let radiusC = 10
console.log(Math.PI*Math.pow(radiusC,2))
console.groupEnd();

console.groupCollapsed("Ejercicio 11");
// 11. Calcular el perímetro de un cuadrado.
let sideSqr = 10
console.log(sideSqr*4)
console.groupEnd();

console.groupCollapsed("Ejercicio 12");
// 12. Calcular el volumen de una esfera.
let radiusE = 10
console.log(4/3*Math.PI*Math.pow(radiusE,3))
console.groupEnd();

console.groupCollapsed("Ejercicio 13");
// 13. Calcular el área de un triángulo.
let baseT = 10
let heightT = 20
console.log((baseT*heightT)/2)
console.groupEnd();

console.groupCollapsed("Ejercicio 14");
// 14. Generar la tabla de multiplicar del número 5.
console.log("Tabla del 5")
for (let i = 1; i < 11; i++) {
    console.log(`5x${i} = ${5*i}`)
}
console.groupEnd();

console.groupCollapsed("Ejercicio 15");
// 15. Encontrar el número mayor entre 3, 7 y 2.
console.log(Math.max(3,7,2))
console.groupEnd();

console.groupCollapsed("Ejercicio 16");
// 16. Encontrar el número menor entre 10, 20 y 5.
console.log(Math.min(10, 20, 5))
console.groupEnd();

console.groupCollapsed("Ejercicio 17");
// 17. Calcular el promedio de 4, 6 y 8.
let listNum = [4,6,8]
let suma = listNum.reduce(function(total, numero) {
    return total + numero;
}, 0);
console.log(suma/listNum.length)
console.groupEnd();

console.groupCollapsed("Ejercicio 18");
// 18. Calcular la factorial de 5.
let resultado = 1
for (let i = 1; i <= 5; i++) {
    resultado *= i
}
console.log(`El factorial de 5 es ${resultado}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 19");
// 19. Redondear el número 3.6.
console.log(Math.round(3.6))
console.groupEnd();

console.groupCollapsed("Ejercicio 20");
// 20. Calcular el doble de 9.
console.log(9*2)
console.groupEnd();

console.groupCollapsed("Ejercicio 21");
// 21. Calcular el triple de 4.
console.log(4*3)
console.groupEnd();

console.groupCollapsed("Ejercicio 22");
// 22. Calcular el cuadrado de 6.
console.log(Math.pow(6,2))
console.groupEnd();

console.groupCollapsed("Ejercicio 23");
// 23. Calcular el cubo de 3.
console.log(Math.pow(3,3))
console.groupEnd();

console.groupCollapsed("Ejercicio 24");
// 24. Calcular la suma de los primeros 10 números naturales.
function sumNumeros(numMayor) {
    let sum = 0
    for (let i = 0; i <= numMayor; i++) {
        sum += i
    } 
    return sum
}
console.log(sumNumeros(10))
console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// 25. Calcular la resta entre 50 y 25.
console.log(50 - 25)
console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// 26. Multiplicar 7 por 9.
console.log(7*9)
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// 27. Dividir 144 por 12.
console.log(144 / 12)
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// 28. Obtener el módulo de 17 dividido por 4.
console.log(17 % 4);
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// 29. Generar un número aleatorio entre 20 y 30.
let numeroAleatorio = Math.round(Math.random() * (30 - 20)) + 20
console.log(numeroAleatorio)
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// 30. Elevar 2 a la potencia de 8.
console.log(Math.pow(2,8))
console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// 31. Calcular la raíz cuadrada de 144.
console.log(Math.sqrt(144));
console.groupEnd();

console.groupCollapsed("Ejercicio 32");
// 32. Convertir 100 grados Celsius a Fahrenheit.
let celcius32 = 100
console.log((celcius*9/5)+32)
console.groupEnd();

console.groupCollapsed("Ejercicio 33");
// 33. Calcular el área de un rectángulo de base 5 y altura 10.
function calArea(base, altura) {
    let area = base*altura
    return area
}
console.log(calArea(5,10))
console.groupEnd();

console.groupCollapsed("Ejercicio 34");
// 34. Calcular el perímetro de un círculo con radio 6.
function calPerCirculo(radio) {
    let perCiculo = 2*Math.PI*radio
    return perCiculo
}
console.log(calPerCirculo(6));
console.groupEnd();

console.groupCollapsed("Ejercicio 35");
// 35. Calcular el volumen de un cubo con lado 4.
function calVolCubo(lado) {
    let volCubo = Math.pow(lado, 3)
    return volCubo
}
console.log(calVolCubo(4))
console.groupEnd();

console.groupCollapsed("Ejercicio 36");
// 36. Calcular el área de un rombo con diagonales de 8 y 10.
function calAreaRombo(d, D) {
    let areaRombo = (d * D) / 2
    return areaRombo
}
console.log(calAreaRombo(8, 10));
console.groupEnd();

console.groupCollapsed("Ejercicio 37");
// 37. Calcular el área de un trapecio con bases 6 y 10 y altura 4.
function calAreaTrap(baseMay, baseMen, altura) {
    let areaTrap = ((baseMay + baseMen) * altura ) / 2
    return areaTrap
}
console.log(calAreaTrap(10, 6, 4));
console.groupEnd();

console.groupCollapsed("Ejercicio 38");
// 38. Generar la tabla de multiplicar del número 8.
console.log("Tabla del 8")
for (let i = 1; i < 11; i++) {
    console.log(`8x${i} = ${8*i}`)
}
console.groupEnd();

console.groupCollapsed("Ejercicio 39");
// 39. Encontrar el número mayor entre 15, 20 y 25.

console.log(Math.max(15, 20, 25));
console.groupEnd();

console.groupCollapsed("Ejercicio 40");
// 40. Encontrar el número menor entre 50, 75 y 100.
console.log(Math.min(50, 75, 100));
console.groupEnd();

console.groupCollapsed("Ejercicio 41");
// 41. Calcular el promedio de 7, 9 y 12.
let listNum47 = [7, 9, 12]
let suma47 = listNum47.reduce(function(total, numero) {
    return total + numero;
}, 0);
console.log(suma47/listNum47.length)
console.groupEnd();

console.groupCollapsed("Ejercicio 42");
// 42. Calcular la factorial de 7.
let resultado42 = 1
for (let i = 1; i <= 7; i++) {
    resultado *= i
}
console.log(`El factorial de 7 es ${resultado}`)
console.groupEnd();

console.groupCollapsed("Ejercicio 43");
// 43. Redondear el número 7.9.
console.log(Math.floor(7.9))
console.groupEnd();

console.groupCollapsed("Ejercicio 44");
// 44. Calcular el doble de 15.
let varPunto44 = 15
console.log(varPunto44 * 2)
console.groupEnd();

console.groupCollapsed("Ejercicio 45");
// 45. Calcular el triple de 6.
let varPunto45 = 6
console.log(varPunto45 * 3)
console.groupEnd();

console.groupCollapsed("Ejercicio 46");
// 46. Calcular el cuadrado de 8.
let varPunto46 = 8
console.log(Math.pow(varPunto46, 2))
console.groupEnd();

console.groupCollapsed("Ejercicio 47");
// 47. Calcular el cubo de 4.
let varPunto47 = 4
console.log(Math.pow(varPunto47, 3))
console.groupEnd();

console.groupCollapsed("Ejercicio 48");
// 48. Calcular la suma de los primeros 15 números naturales.
console.log(sumNumeros(15))
console.groupEnd();

console.groupCollapsed("Ejercicio 49");
// 49. Calcular la resta entre 100 y 55.
console.log(100 - 55)
console.groupEnd();

console.groupCollapsed("Ejercicio 50");
// 50. Multiplicar 6 por 8.
console.log(6 * 8)
console.groupEnd();

console.groupCollapsed("Ejercicio 51");
// 51. Dividir 225 por 15.
console.log(255 / 15)
console.groupEnd();

console.groupCollapsed("Ejercicio 52");
// 52. Obtener el módulo de 20 dividido por 7.
console.log(20 % 7)
console.groupEnd();

console.groupCollapsed("Ejercicio 53");
// 53. Generar un número aleatorio entre 40 y 50.

console.groupEnd();

console.groupCollapsed("Ejercicio 54");
// Ejercicio 54
console.groupEnd();

console.groupCollapsed("Ejercicio 55");
// Ejercicio 55
console.groupEnd();

console.groupCollapsed("Ejercicio 56");
// Ejercicio 56
console.groupEnd();

console.groupCollapsed("Ejercicio 57");
// Ejercicio 57
console.groupEnd();

console.groupCollapsed("Ejercicio 58");
// Ejercicio 58
console.groupEnd();

console.groupCollapsed("Ejercicio 59");
// Ejercicio 59
console.groupEnd();

console.groupCollapsed("Ejercicio 60");
// Ejercicio 60
console.groupEnd();

console.groupCollapsed("Ejercicio 61");
// Ejercicio 61
console.groupEnd();

console.groupCollapsed("Ejercicio 62");
// Ejercicio 62
console.groupEnd();

console.groupCollapsed("Ejercicio 63");
// Ejercicio 63
console.groupEnd();

console.groupCollapsed("Ejercicio 64");
// Ejercicio 64
console.groupEnd();

console.groupCollapsed("Ejercicio 65");
// Ejercicio 65
console.groupEnd();

console.groupCollapsed("Ejercicio 66");
// Ejercicio 66
console.groupEnd();

console.groupCollapsed("Ejercicio 67");
// Ejercicio 67
console.groupEnd();

console.groupCollapsed("Ejercicio 68");
// Ejercicio 68
console.groupEnd();

console.groupCollapsed("Ejercicio 69");
// Ejercicio 69
console.groupEnd();

console.groupCollapsed("Ejercicio 70");
// Ejercicio 70
console.groupEnd();

console.groupCollapsed("Ejercicio 71");
// Ejercicio 71
console.groupEnd();

console.groupCollapsed("Ejercicio 72");
// Ejercicio 72
console.groupEnd();

console.groupCollapsed("Ejercicio 73");
// Ejercicio 73
console.groupEnd();

console.groupCollapsed("Ejercicio 74");
// Ejercicio 74
console.groupEnd();

console.groupCollapsed("Ejercicio 75");
// Ejercicio 75
console.groupEnd();

console.groupCollapsed("Ejercicio 76");
// Ejercicio 76
console.groupEnd();

console.groupCollapsed("Ejercicio 77");
// Ejercicio 77
console.groupEnd();

console.groupCollapsed("Ejercicio 78");
// Ejercicio 78
console.groupEnd();

console.groupCollapsed("Ejercicio 79");
// Ejercicio 79
console.groupEnd();

console.groupCollapsed("Ejercicio 80");
// Ejercicio 80
console.groupEnd();

console.groupCollapsed("Ejercicio 81");
// Ejercicio 81
console.groupEnd();

console.groupCollapsed("Ejercicio 82");
// Ejercicio 82
console.groupEnd();

console.groupCollapsed("Ejercicio 83");
// Ejercicio 83
console.groupEnd();

console.groupCollapsed("Ejercicio 84");
// Ejercicio 84
console.groupEnd();

console.groupCollapsed("Ejercicio 85");
// Ejercicio 85
console.groupEnd();

console.groupCollapsed("Ejercicio 86");
// Ejercicio 86
console.groupEnd();

console.groupCollapsed("Ejercicio 87");
// Ejercicio 87
console.groupEnd();

console.groupCollapsed("Ejercicio 88");
// Ejercicio 88
console.groupEnd();

console.groupCollapsed("Ejercicio 89");
// Ejercicio 89
console.groupEnd();

console.groupCollapsed("Ejercicio 90");
// Ejercicio 90
console.groupEnd();

console.groupCollapsed("Ejercicio 91");
// Ejercicio 91
console.groupEnd();

console.groupCollapsed("Ejercicio 92");
// Ejercicio 92
console.groupEnd();

console.groupCollapsed("Ejercicio 93");
// Ejercicio 93
console.groupEnd();

console.groupCollapsed("Ejercicio 94");
// Ejercicio 94
console.groupEnd();

console.groupCollapsed("Ejercicio 95");
// Ejercicio 95
console.groupEnd();

console.groupCollapsed("Ejercicio 96");
// Ejercicio 96
console.groupEnd();
console.groupEnd()