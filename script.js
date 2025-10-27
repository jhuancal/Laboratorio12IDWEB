var ejercicio1 = function() { 
  let numero = parseFloat(prompt("Ingrese un número:"));
  var isPar = esPar(numero);
  alert(isPar ? "El numero es par" : "El numero es impar");
}

var esPar = function(numero) {
  return numero % 2 == 0;
}

var ejercicio2 = function() {
  let base = parseFloat(prompt("Ingrese la base del rectangulo"));
  let altura = parseFloat(prompt("Ingrese la altura del rectangulo"));
  alert("El area del rectangulo es: " + areaRectangulo(base, altura));
}

var areaRectangulo = function(base, altura) {
  return base * altura;
}

var ejercicio3 = function() {
  let a = parseFloat(prompt("Ingrese un número A:"));
  let b = parseFloat(prompt("Ingrese un número B:"));
  var isMultiplo = esMultiplo(a, b);
  alert(isMultiplo ? 
    "El numero " + a + " es mupltiplo de " + b 
    : "El numero " + a + " no es multiplo de " + b);
}

var esMultiplo = function(a, b) {
  return b % a == 0;
}

var ejercicio4 = function () {
  let numero1 = parseFloat(prompt("Ingrese un número 1:"));
  let numero2 = parseFloat(prompt("Ingrese un número 2:"));
  let numero3 = parseFloat(prompt("Ingrese un número 3:"));
  alert("El número mayor es: " + mayorDeTres(numero1, numero2, numero3));
}

var mayorDeTres = function(a, b, c) {
  var mayor = a;
  if (b > a && b > c) {
    mayor = b;
  }
  if (c > b && c > a) {
    mayor = c;
  }
  return mayor;
}

var ejercicio5 = function () {
  let nota1 = parseFloat(prompt("Ingrese un nota 1:"));
  let nota2 = parseFloat(prompt("Ingrese un nota 2:"));
  let nota3 = parseFloat(prompt("Ingrese un nota 3:"));
  alert("El promedio es: " + promedioDeTresNotas(nota1, nota2, nota3));
}

var promedioDeTresNotas = function (a, b, c) {
  return (a + b + c) / 3;
}

var ejercicio6 = function() {
  var texto = prompt("Ingrese el texto que desea convertir a mayusculas");
  alert("Texto convertido a Mayusculas: " + convertirAMayusculas(texto));
}

var convertirAMayusculas = function (texto) {
  return texto.toUpperCase();
}

var ejercicio7 = function (){
  let precio = parseFloat(prompt("Ingrese el precio:"));
  let porcentaje = parseFloat(prompt("Ingrese el descuento que desea aplicar:"));
  alert("El precio final del producto seria: " + calcularDescuento(precio, porcentaje)); 
}

var calcularDescuento = function(precio, porcentaje) {
  return precio - (precio * porcentaje / 100);
}

var ejercicio8 = function() {
  var nombre = prompt("Ingrese su nombre: ");
  var saludar = nombre => "Hola " + nombre;
  alert(saludar(nombre));
}

var ejercicio9 = function () {
  let numero = parseFloat(prompt("Ingrese un número:"));
  var esPositivo = numero => numero > 0;
  alert(esPositivo(numero) ? "El número es positivo" : "El numero es negativo");
}

var ejercicio10 = function() {
  var texto = prompt("Ingrese el texto que desea transformar");
  var mayusculas = texto => texto.toUpperCase();
  var agregarSigno = texto => texto + "!";
  var componerTransformacion = texto => agregarSigno(mayusculas(texto));
  alert("Texto transformado: " + componerTransformacion(texto));
}













