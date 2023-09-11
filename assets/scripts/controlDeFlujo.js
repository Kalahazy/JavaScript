console.log("Hola Generation");

/*
Flujo de control

Cuando hablamos de un flujo de control, hablamos del orden natural en el que se ejecutan las instrucciones de nuestro programa (arriba/abajo, izquierda/derecha). Estas instrucciones pueden ser una función, un console.log, un ciclo, etc.

La importancia que tiene el control de flujo radica en la posibilidad de poder ejecutar cosas o instrucciones dependiendo de una condicional (un elemento o instrucción detonante).

Condicionales

Las condicionales son palabras reservadas que nos permiten evaluar si una condición se cumple o no, bajo ciertos criterios (estipulados por el programador). Las respuestas o salidas esperadas siempre partirás de un true o false.

Tengo la camisa limpia?
    Si: voy a la fiesta
    No: me quedo en casita

Tengo esta variable?
    Si: ejecuto la linea 57 de mi código
    No: ejecuto la linea 80 de mi código

*/


/*
-   if (si)

If nos sirve para validar si una condicion se cumple o no. Si se cumple, entonces ejecutamos un bloque de código que está dentro del if. Si no se cumple, entonces no hacemos nada.
Nota: Es la condicional más sencilla, pero la más limitante porque solo nos da una opción.

if (condicion) {
    //bloque de código que se ejecuta si la condición es verdadera (se cumple)
}

*/
//Ejemplo: Felipe va a ir a una fiesta y necesita tener su camisa favorita limpia para poder ir
if (camisaLimpia = true) {
    console.log("Felipe va a la fiesta con if");
}


/*
-   else (de otro modo, de lo contrario, si no)

if (condicion) {
    //bloque de código que se ejecuta si la condición es verdadera
}
else {
    //bloque de código que se ejecuta si la condición es falsa
}

*/
//Ejemplo: Felipe va a ir a una fiesta y necesita tener su camisa favorita limpia para poder ir
if (camisaLimpia = true) {
    console.log("Felipe va a la fiesta con if else");   //true
} else {
    console.log("Felipe se queda en su casa a hacer la lloración"); //false
}


/*
-   else if (de otro modo, de lo contrario, si no - si)

Esta condicion nos ayuda a jugar con más opciones y más detonantes, para tener muchas posibilidades en el mismo código. Para lograr esto, vamos a unir el else con el if.

if (condicion detonante) {
    //bloque de código que se ejecuta si la condición es verdadera
} else if (condicion detonante 2) {
    //bloque de código que se ejecuta si la condición 1 es falsa y la condición 2 es verdadera
} else {
    //bloque de código que se ejecuta si las 2 condiciones son falsas
}

*/
/*
Ejemplo 2: Felipe tiene hambre y quiere comer chilaquiles verdes
if (hambre = true) {
    console.log("Felipe va a comer");
} else if (chilaquilesVerdes = true) {
    console.log("Felipe come chilaquiles");
} else {
    console.log("Felipe no come y se pone triste");
}
*/
//Ejemplo 3: Escribe un programa que me muestre 3 mensajes diferentes. Primer mensaje se muestra si son las 13:00 hrs y deberá imprimir "vamos a descanso". El segundo mensaje se muestra si son las 14:00 hrs y deberá imprimir "vamor a comer". El tercer mensaje se muestra si no se cumple nada de lo anterior y deberá imprimir "lo 100to mi ciela seguimos programando".

let hora = 15;

if (hora == 13) {
    console.log("Vamos a descanso");
} else if (hora == 14) {
    console.log("Vamos a comer");
} else {
    console.log("Lo 100to mi ciela seguimos programando");
}


/*
Prompt es una forma de ingresar datos y poder hacer uso de ellos
NOTA: El dato que almacena es una cadena de texto
*/
let horaActual = prompt("¿Qué hora es?");

if (horaActual == 13) {
    console.log("Vamos a descanso");
} else if (horaActual == 14) {
    console.log("Vamos a comer");
} else {
    console.log("Lo 100to mi ciela seguimos programando");
}


/*
-   switch (cambiar o intercambiar / según sea el caso)

Ésta condicional nos permite hacer múltiples operaciones y tomar decisiones en función de la opción deseada (estado de la variable).

Evalúa la expresión comparando el valor de una variable con la expresión o caso, y ejecuta las declaraciones asociadas con ese caso, así como los casos que siguen.

Elementos principales del swtich: un valor a evaluar, un detonante para cada caso, una salida para cada caso y una salida en general.

expresión con un valor
switch (expresión) {
    case valor1:
        //bloque de codigo que se ejecuta si la expresión es igual a valor1
        break;
    case valor2:
        //bloque de codigo que se ejecuta si la expresión es igual a valor2
        break;
    case valor3:
        //bloque de codigo que se ejecuta si la expresión es igual a valor3
        break;
    default:
        //bloque de codigo que se ejecuta si ninguna opción coincide
}
*/

//Elevador con else if
let piso = 5;

if (piso == 1) {
    console.log("Llegamos al piso 1");
} else if (piso == 2) {
    console.log("Llegamos al piso 2");
} else if (piso == 3) {
    console.log("Llegamos al piso 3");
} else if (piso == 4) {
    console.log("Llegamos al piso 4");
} else if (piso == 5) {
    console.log("Llegamos al piso 5");
} else {
    console.log("Piso no encontrado");
}

//Elevador con switch
let pisoSwitchOriginal = prompt("¿A qué piso vas?");
console.log(typeof(pisoSwitchOriginal));
pisoSwitch = parseInt(pisoSwitchOriginal);

switch (pisoSwitch) {
    case 1:
        console.log("Llegaste al piso 1");
        break;
    case 2:
        console.log("Llegaste al piso 2");
        break;
    case 3:
        console.log("Llegaste al piso 3");
        break;
    default:
        console.log("Opción no valida");
}


//Funciones aplicables a un consultorio dental

//Funcion calcular costo de una consulta (condicionales)

//Variables para mis datos
let tipoServicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFrecuente;
let costo;

/*
function calcularCostoConsulta (tipoServicio, tiempoConsulta, emergencia, promocion, clienteFrecuente) {
    
    //Datos que necesito para mi función
    tipoServicio = "extracción";
    tiempoConsulta = 120;
    emergencia = true;
    promocion = 0.10;
    clienteFrecuente = true;
    costo = 5000;
    promocionClienteFrecuente = 0.10;

    //Calcular el costo total (antes de validar si es cliente frecuente)
    let costoTotal = costo - promocion;

    //Condicional para saber si agrego otra promoción por ser cliente frecuente
    if (clienteFrecuente == true) {
        costoTotal = promocionClienteFrecuente;
    }

}
*/

//Un ejemplo más sencillo
function calcularCostoConsultaDos (duracionMinutos, costoPorMinuto, clienteFrecuente){
    let costoTotal = duracionMinutos * costoPorMinuto;

    if (clienteFrecuente) {
        costoTotalConDescuento = costoTotal * 0.10;
    }
    return costoTotalConDescuento
}

console.log(calcularCostoConsultaDos(45, 15, true));
console.log("El costo total de la consulta que duró " + duracionMinutos + " con un costo por minuto de " + costoPorMinuto + " es de " + costoTotalConDescuento)



