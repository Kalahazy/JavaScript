alert ("Hola Mundo");

/* var frasco = "pastillas";
var frasco = "pasitas con chocolate";
var frasco = "shampoo";

console.log(frasco); */

/* Tipos de datos (primitivos y no primitivos)

string
number
boolean
undefined
null
symbol
object (no es primitivo) */


//string es una cadena de texto, que siempre debe ir entre comillas simples o comillas dobles
var vaso = "leche";

//number no lleva comillas, y se refiere a un número con el cual podemos hacer operaciones
var edad = 31;

//boolean solamente tiene dos salidas que son true o false
var cuentaPremium = false;

//undefined es un tipo de dato que existe pero no está definido o inicializado
var proximaCita;

//null es un valor que no tenemos pero que declaramos
var asistenciaInvitado = null;

var edad = "31";
var peso = 66;
console.log(edad);


//typeof es una palabra reservada que nos dice el tipo de dato que estamos utilizando
console.log(typeof(edad));

//var es una palabra reservada que nos permite declarar una variable, pero con un alcance global

//let es una palabra reservada que nos permite declarar una variable, pero con un alcance limitado o local

//const es una constante, es decir, un valor que no va a cambiar

//Convertir un número a texto
var pesoTexto = peso.toString();
console.log(pesoTexto);
console.log(typeof(pesoTexto));

//Convertir un texto a número
var edadNumero = parseInt(edad);
console.log(edadNumero);
console.log(typeof(edadNumero));