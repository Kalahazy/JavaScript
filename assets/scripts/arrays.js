/*

Un array es un conjunto de datos que se pueden almacenar en una sola variable. Un arreglo es una estructura de datos que podemos definir como una colección de variables (que pueden ser diferentes, pero con un mismo contexto.)

*/

//Variables que están "sueltas"
let nombre = "Felipe";
let edad = 31;
let puesto = "Instructor";

//Usar un array (arreglo) para "juntar" nuestras variables
//Agregamos los elementos al array separados por una coma
let personasDeLaCH31 = ["Felipe", "Jose Angel", "Marco", "Evelyn", "Alejandro"];

//Podemos almacenar cualquier tipo de dato en un array
let cosasRandom = ["Pelota", 31, true, undefined, null];
console.log(typeof (cosasRandom));
console.log(typeof (personasDeLaCH31));
//Al imprimir el tipo de dato de nuestro arreglo, obtenemos un object porque los arrays son objetos (despues veremos que tenemos muchos tipos de objetos)

//Los arreglos al ser objetos, cuentan con métodos que nos permiten manipularlos

//Ya que tengo mi arreglo, como podemos acceder a esa información?
//Para mostrar la cantidad de elementos que tengo en un arreglo, usamos la propiedad llamada "length"

console.log(personasDeLaCH31.length);

//declarar un array
[5, 4, 3, 2, 1]

//inicializar un array
let cuentaRegresiva = [5, 4, 3, 2, 1];

//Acceder a un elemento en específico
console.log(personasDeLaCH31[0]);   //Felipe
console.log(personasDeLaCH31[25]);  //undefined porque el elemento aún no existe

//También podemos acceder a un elemento de mi arreglo por medio de una variable

//Declaro el indice en una variable
let index = 4;
console.log(personasDeLaCH31[index]);   //Alejandro


//Ejemplo de un array para un consultorio dental
let pacientes = [];
let dentistas = ["Dr. Smith", "Dra. García", "Dr. House", "Dr. Simi"];

//Para hacer modificaciones, usamos el index para acceder al dato, y luego lo reasignamos

dentistas[3] = "Similares";
dentistas[8] = "Dr. Strange";

console.log(dentistas);
console.log(typeof (dentistas[7])); //undefined


//Funcion para imprimir asteriscos y poner una division en la información de mi consola
function imprimirAsteriscos() {
    console.log("**********************************************************");
}
//Invocación de la función
imprimirAsteriscos();



//Métodos de arrays
let listaDelSuper = ["Gansitos", "Coca-Colas", "Arroz", "Atún", "Verduritas"];

console.log("\n length");
//Método "length" para conocer la longitus del array
console.log("La cantidad de eleementos de mi array es de: " + listaDelSuper.length);

console.log("\n push()");
//Método "push()" para agregar un elemento al final de mi array
listaDelSuper.push("Jabón para ropa", "Jabon para trastes");
console.log(listaDelSuper);

console.log("\n pop()");
//Metodo "pop()" para eliminar el último elemento de mi array
listaDelSuper.pop();
console.log(listaDelSuper);

console.log("\n unshift()");
//Método "unshift()" para agregar un elemento al inicio de mi array
listaDelSuper.unshift("Sabritones");
console.log(listaDelSuper);

console.log("\n shift()");
//Método "shift()" para eliminar el primer elemento de mi array
listaDelSuper.shift();
console.log(listaDelSuper);

console.log("\n indexOf()");
//Método "indexOf()" para buscar un elemento en mi array
console.log(listaDelSuper.indexOf("Verduritas")); //4

console.log("\n splice()");
//Método "splice()" para agregar, eliminar o reemplazar elementos
//nombreArreglo.splice(inicio, cantidadElementosAEliminar, elementoAInsertar1, elementoAInsertar2, ..., elementoAInsertarN);
//En la posicion 2, no elimino ningun elemento y agrego "Cacahuates" en la posicion 2 y "Manzana" en la posicion 3
listaDelSuper.splice(2, 0, "Cacahuates", "Manzana");
console.log(listaDelSuper);
//En la posicion 5, elimino el elemento 5 y 6 y agrego "Plátano" en la posicion 5
listaDelSuper.splice(5, 2, "Plátano");
console.log(listaDelSuper);

console.log("\n map()");
//Método "map()" para crear un nuevo array con los resultados de la función indicada aplicados a cada uno de sus elementos
/*
let nuevoArreglo = arregloOriginal.map(
    function(elemento, indice, arreglo) {
        //Código para procesar el elemento y devolver un nuevo valor
        return nuevoValor;
    }
);
    * arregloOriginal
Este es el arreglo en el que deseas iterar y aplicar una función a cada elemento.
    * elemento
Es el valor del elemento actual en el arreglo durante la iteración.
    * indice (opcional)
Es el índice del elemento actual en el arreglo durante la iteración.
    * arreglo (opcional)
Es el arreglo original que se está recorriendo. Este argumento es opcional y generalmente no se usa con mucha frecuencia.
    * nuevoArreglo
Es el nuevo arreglo que se crea como resultado de aplicar la función a cada elemento del arreglo original. Este nuevo arreglo contendrá los valores devueltos por la función en lugar de los valores originales del arreglo original.
    * function(elemento, indice, arreglo) { ... }
Este es el argumento de función que defines para especificar cómo se procesará cada elemento del arreglo original. Debes proporcionar el código dentro de esta función que realice alguna operación en el elemento y devuelva el nuevoValor, que será el valor correspondiente en el nuevo arreglo resultante.
*/
let numeros = [1, 2, 3, 4, 5];
//Crear otro arreglo con los números multiplicados x2 [2, 4, 6, 8, 10]
let numerosPorDos = numeros.map(function (numero) { return numero * 2; })
console.log(numerosPorDos);


console.log("\n map() - Ejercicio consultorio");
/*
Imaginemos que tenemos un array de pacientes. Este array tiene datos registrados como nombre, edad, etc. Necesitamos modificar este arreglo para que revisemos la edad de cada paciente, y, si la edad es mayor a 40 años, el paciente necesita una atención especial.

    Aspectos a considerar:
    - 2 arreglos (original y el modificado)
    - condicion if
    - funcion para agregar el nuevo dato a cada elemento
    - método map()
*/

//Arreglo de pacientes original
let pacientesConsultorio = [
    {
        nombre: "Felipe",
        edad: 31,
    },
    {
        nombre: "Fatima",
        edad: 26,
    },
    {
        nombre: "Jesus",
        edad: 51,
    }
];
console.log(pacientesConsultorio);
//Funcion para agregar el texto "Necesita atención especial"
function agregarEstadoSalud(paciente) {
    let estado = "Saludable";
    //Si el paciente tiene mas de 40 años
    if (pacientes.edad > 40) {
        estado = "Necesita atención especial";
    }
    return {
        ...paciente,    //Copia de los datos del paciente
        estadoSalud: estado,   //Para agregar un nuevo campo o propiedad a mi objeto
    }
}
//Vamos a aplicar la funcion en cada elemento del arreglo con el map
let pacientesConsultorioConEstado = pacientesConsultorio.map(agregarEstadoSalud);
console.log(pacientesConsultorioConEstado);


console.log("\n slice()");
//Método "slice()" para copiar un array
let copiaDeListaDelSuper = listaDelSuper.slice();
console.log(copiaDeListaDelSuper);

console.log("\n join()");
//Método "join()" para convertir un array en un string
let listaDelSuperString = listaDelSuper.join();
console.log("Mi lista del super: " + listaDelSuperString + ".");

console.log("\n split()");
//Método "split()" para convertir un string en un array
let listaDelSuperArray = listaDelSuperString.split(",");
console.log(listaDelSuperArray);

console.log("\n sort()");
//Método "sort()" para ordenar un array
listaDelSuper.sort();
console.log(listaDelSuper);


//Ejercicio individual - Carreritas
/*
En una carrera se tienen los siguientes corredores con su respectiva posición:
    - Primer lugar: Roberto
    - Segundo lugar: Andrea
    - Tercer lugar: Jorge
    - Cuarto lugar: Ramiro
    - Quinto lugar: Sofía
Después de 3 vueltas, Jorge adelanta a Roberto, Ramiro adelanta a Jorge y Roberto se lesiona y sale de la carrera. Además, Andrea baja una posición, Ramiro mantiene su lugar y el quinto lugar es reemplazado por José.
¿Cómo quedan las posiciones después de esas 3 vueltas?
*/

let corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía"];
console.log(corredores);
function JorgeAdelantaRoberto() {
    corredores.splice(2, 1);    //Eliminamos a Jorge de su posición original
    corredores.unshift("Jorge");    //Agregamos a Jorge en la primera posición
}
function RamiroAdelantaJorge() {
    corredores.splice(3, 1);    //Eliminamos a Ramiro de su posición original
    corredores.unshift("Ramiro");   //Agregamos a Ramiro en la primera posición, delante de Jorge
}
function RobertoSeLesiona() {
    let indexRoberto = corredores.indexOf("Roberto");    //Obtenemos el indice de Roberto
    corredores.splice(indexRoberto, 1);    //Eliminamos a Roberto de su posición actual
}
function AndreaBajaUnaPosicion() {
    let indexAndrea = corredores.indexOf("Andrea");    //Obtenemos el indice de Andrea
    corredores.splice(indexAndrea, 1);    //Eliminamos a Andrea de su posición actual
    corredores.splice(indexAndrea + 1, 0, "Andrea");    //Agregamos a Andrea en la posición siguiente
}
function QuintoLugarJose() {
    corredores.push("José");    //Agregamos a José en la última posición
}

JorgeAdelantaRoberto();
RamiroAdelantaJorge();
RobertoSeLesiona();
AndreaBajaUnaPosicion();
QuintoLugarJose();
console.log(corredores);