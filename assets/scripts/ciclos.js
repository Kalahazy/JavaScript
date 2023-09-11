/*

Condiciones: alterar el orden natural del código
Estructura de control: controlar la ejecución del código


- Ciclos o bucles (loops)

Tambien conocidos como bucles, son estructuras de control que nos van a permitir ejecutar un bloque de código de forma repetida, hasta que se cumpla una condición específica.

Es importante usar ciclos para automatizar tareas repetitivas.

En JS existen los siguientes ciclos:
    - while
    - do while
    - for


* Iterar: proceso de repetir una secuencia de instrucciones un número determinado de veces.
* Estructura de control: herramienta especial para crear algorítmos o programas más dinámicos y flexibles.

*/


/* 

    - while (mientras)
Ejecuta un bloque de código mientras se cumpla una condición específica. Este ciclo se repite mientras la condición sea verdadera, y el bloque de código se ejecuta siempre y cuando la condición se mantenga. La condicion se evalua antes de cada iteración.

while (condicion) {
    // bloque de código a ejecutar
}

*/

// Ejemplo de un consultorio dental
let capacidadPacientes = 50;
let pacientesEnConsultorio = 15;

//mientras 15 sea menor que 50
while (pacientesEnConsultorio < capacidadPacientes) {
    //seguiré dando servicio
    console.log("Seguimos dando servicio");
    //aumento 1 a 1 mis pacientes
    pacientesEnConsultorio++;
}


/*

    - do while (hacer, mientras)
Se ejecuta la instrucción mientras la condición sea verdadera.
El bucle do while se diferencia del while, ya que aquí, se ejecuta la instrucción al menos una vez, y luego se pregunta, para saber si se sigue ejecutando o no.

do {
    // bloque de código a ejecutar
} while (condicion);

*/

// Ejemplo de un consultorio dental
var contadorPacientes = 0;

//hacer:
do {
    var nombre = prompt("Ingresa el nombre del paciente");
    // si se ingresa un nombre
    if (nombre != "") {
        //aumento 1 a 1 mis pacientes
        contadorPacientes++;
    }
    //mientras el contador sea menor a 15 o confirme que desea ingresar otro paciente
} while (contadorPacientes < 15 || confirm("¿Deseas ingresar otro paciente?"));
//el numero de pacientes es:
console.log("Número total de pacientes: " + contadorPacientes);


/*

- for (para)
Se utiliza cuando conocemos el número exacto de iteraciones que vamos a realizar.
Consiste en 3 partes fundamentales:
    * Inicialización: se ejecuta antes de que el bucle comience y, se usa para establecer una variable de control (variable de inicio)
    * Condición: es el detonante que verificamos antes de cada iteración, para saber si se sigue ejecutando o no (siempre y cuando sea verdadera)
    * Expresión de iteración (contador): tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre
    * 
for (inicialización; condición; expresión de iteración) {
    // bloque de código a ejecutar
}

*/

// Crea un código que imprima los números del 0 al 4
//para (valor inicial empieza en 0, mientras sea menor a 5, aumenta 1 a 1)
for (var valorInicial = 0; valorInicial < 5; valorInicial++) {
    //imprime el valor inicial
    console.log(valorInicial);
}

// Versión más "comercial"
for (var i = 0; i < 5; i++) {
    console.log(i);
}

//Ejemplo de consultorio dental
let cantidadDeCitasDiarias = 5;

for (let i = 1; i <= cantidadDeCitasDiarias; i++) {
    var nombre = prompt("Ingresa el nombre del paciente" + i);
    console.log("Paciente con cita" + i + ": " + nombre);
}
