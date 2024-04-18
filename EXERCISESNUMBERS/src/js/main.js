


// 25. Calcular la resta entre 50 y 25.
// 26. Multiplicar 7 por 9.
// 27. Dividir 144 por 12.
// 28. Obtener el módulo de 17 dividido por 4.
// 29. Generar un número aleatorio entre 20 y 30.
// 30. Elevar 2 a la potencia de 8.
// 31. Calcular la raíz cuadrada de 144.
// 32. Convertir 100 grados Celsius a Fahrenheit.
// 33. Calcular el área de un rectángulo de base 5 y altura 10.
// 34. Calcular el perímetro de un círculo con radio 6.
// 35. Calcular el volumen de un cubo con lado 4.
// 36. Calcular el área de un rombo con diagonales de 8 y 10.
// 37. Calcular el área de un trapecio con bases 6 y 10 y altura 4.
// 38. Generar la tabla de multiplicar del número 8.
// 39. Encontrar el número mayor entre 15, 20 y 25.
// 40. Encontrar el número menor entre 50, 75 y 100.
// 41. Calcular el promedio de 7, 9 y 12.
// 42. Calcular la factorial de 7.
// 43. Redondear el número 7.9.
// 44. Calcular el doble de 15.
// 45. Calcular el triple de 6.
// 46. Calcular el cuadrado de 8.
// 47. Calcular el cubo de 4.
// 48. Calcular la suma de los primeros 15 números naturales.
// 49. Calcular la resta entre 100 y 55.
// 50. Multiplicar 6 por 8.
// 51. Dividir 225 por 15.
// 52. Obtener el módulo de 20 dividido por 7.
// 53. Generar un número aleatorio entre 40 y 50.
// 54. Elevar 3 a la potencia de 4.
// 55. Calcular la raíz cuadrada de 169.
// 56. Convertir 80 grados Celsius a Fahrenheit.
// 57. Calcular el área de un rectángulo de base 8 y altura 12.
// 58. Calcular el perímetro de un círculo con radio 8.
// 59. Calcular el volumen de un cubo con lado 5.
// 60. Calcular el área de un rombo con diagonales de 12 y 16.
// 61. Calcular el área de un trapecio con bases 8 y 12 y altura 6.
// 62. Generar la tabla de multiplicar del número 9.
// 63. Encontrar el número mayor entre 25, 30 y 35.
// 64. Encontrar el número menor entre 80, 95 y 110.
// 65. Calcular el promedio de 8, 10 y 14.
// 66. Calcular la factorial de 8.
// 67. Redondear el número 9.2.
// 68. Calcular el doble de 18.
// 69. Calcular el triple de 7.
// 70. Calcular el cuadrado de 10.
// 71. Calcular el cubo de 5.
// 72. Calcular la suma de los primeros 20 números naturales.
// 73. Calcular la resta entre 200 y 75.
// 74. Multiplicar 9 por 11.
// 75. Dividir 300 por 25.
// 76. Obtener el módulo de 30 dividido por 9.
// 77. Generar un número aleatorio entre 60 y 70.
// 78. Elevar 4 a la potencia de 5.
// 79. Calcular la raíz cuadrada de 196.
// 80. Convertir 120 grados Celsius a Fahrenheit.
// 81. Calcular el área de un rectángulo de base 10 y altura 15.
// 82. Calcular el perímetro de un círculo con radio 10.
// 83. Calcular el volumen de un cubo con lado 6.
// 84. Calcular el área de un rombo con diagonales de 14 y 18.
// 85. Calcular el área de un trapecio con bases 10 y 15 y altura 8.
// 86. Generar la tabla de multiplicar del número 10.
// 87. Encontrar el número mayor entre 35, 40 y 45.
// 88. Encontrar el número menor entre 90, 105 y 120.
// 89. Calcular el promedio de 9, 11 y 15.
// 90. Calcular la factorial de 9.
// 91. Redondear el número 10.8.
// 92. Calcular el doble de 21.
// 93. Calcular el triple de 8.
// 94. Calcular el cuadrado de 12.
// 95. Calcular el cubo de 6.
// 96. Calcular la suma de los primeros 25 números naturales

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
    console.log(resultado)
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
let sum = 0
for (let i = 0; i <= 10; i++) {
    sum += i
}
console.log("La suma de los primeros números naturales es " + sum)
console.groupEnd();

console.groupCollapsed("Ejercicio 25");
// Ejercicio 25
console.groupEnd();

console.groupCollapsed("Ejercicio 26");
// Ejercicio 26
console.groupEnd();

console.groupCollapsed("Ejercicio 27");
// Ejercicio 27
console.groupEnd();

console.groupCollapsed("Ejercicio 28");
// Ejercicio 28
console.groupEnd();

console.groupCollapsed("Ejercicio 29");
// Ejercicio 29
console.groupEnd();

console.groupCollapsed("Ejercicio 30");
// Ejercicio 30
console.groupEnd();

console.groupCollapsed("Ejercicio 31");
// Ejercicio 31
console.groupEnd();

console.groupCollapsed("Ejercicio 32");
// Ejercicio 32
console.groupEnd();

console.groupCollapsed("Ejercicio 33");
// Ejercicio 33
console.groupEnd();

console.groupCollapsed("Ejercicio 34");
// Ejercicio 34
console.groupEnd();

console.groupCollapsed("Ejercicio 35");
// Ejercicio 35
console.groupEnd();

console.groupCollapsed("Ejercicio 36");
// Ejercicio 36
console.groupEnd();

console.groupCollapsed("Ejercicio 37");
// Ejercicio 37
console.groupEnd();

console.groupCollapsed("Ejercicio 38");
// Ejercicio 38
console.groupEnd();

console.groupCollapsed("Ejercicio 39");
// Ejercicio 39
console.groupEnd();

console.groupCollapsed("Ejercicio 40");
// Ejercicio 40
console.groupEnd();

console.groupCollapsed("Ejercicio 41");
// Ejercicio 41
console.groupEnd();

console.groupCollapsed("Ejercicio 42");
// Ejercicio 42
console.groupEnd();

console.groupCollapsed("Ejercicio 43");
// Ejercicio 43
console.groupEnd();

console.groupCollapsed("Ejercicio 44");
// Ejercicio 44
console.groupEnd();

console.groupCollapsed("Ejercicio 45");
// Ejercicio 45
console.groupEnd();

console.groupCollapsed("Ejercicio 46");
// Ejercicio 46
console.groupEnd();

console.groupCollapsed("Ejercicio 47");
// Ejercicio 47
console.groupEnd();

console.groupCollapsed("Ejercicio 48");
// Ejercicio 48
console.groupEnd();

console.groupCollapsed("Ejercicio 49");
// Ejercicio 49
console.groupEnd();

console.groupCollapsed("Ejercicio 50");
// Ejercicio 50
console.groupEnd();

console.groupCollapsed("Ejercicio 51");
// Ejercicio 51
console.groupEnd();

console.groupCollapsed("Ejercicio 52");
// Ejercicio 52
console.groupEnd();

console.groupCollapsed("Ejercicio 53");
// Ejercicio 53
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