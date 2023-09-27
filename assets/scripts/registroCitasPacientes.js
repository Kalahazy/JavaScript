/*
Sistema para registrar pacientes y citas de estos pacientes, utilizando métodos de arrays

Lista de cosas para hacer / cosas por tomar en cuenta

    - Un aray para pacientes
    - Un array para citas

    - Prompt para registrar los datos
    - Datos a registrar: nombre, apellido, fecha, edad, hora, especialista
    - Funcion registrarPaciente
    - Funcion registrarCita
    -Métodos para modificara los arrays (push, forEach, splice)
*/

//La variable pacientes está declarada e inicializada (tiene un nombre, y tiene un valor, a pesar de que su arreglo esté vacío)

//Crear un array para almacenar mis pacientes
//Los indices del arreglo estan undefined, porque no hay elementos pero si hay espacios disponibles
let pacientes = []; //pacientes = definido

//Funcion para registrar un nuevo paciente
//Paso 1. Ejecución de mi función. Pido dos datos
function registrarPaciente(nombre, edad) {
    //Crear un array dentro de otro array
    //Paso 2. Guardo cada par de datos (nombre y la edad en una variable llamada paciente)
    let paciente = {
        nombre,
        edad,
        citas: []
    };

    //Agregar paciente al array
    //Paso 3. Ya tengo el par de datos, le hago un push  a mi array para guardar al paciente
    pacientes.push(paciente);
    return paciente;
}

//Funcion para registrar citas de un paciente
//Cuando ejecuto mi función, necesito un paciente, una hora y una fecha para registrar la cita
function registrarCita(paciente, fecha, hora) {
    //Cuando tenga estos datos, buscaré dentro del paciente el apartado citas, para hacerle un push ahí
    paciente.citas.push(
        {
            fecha,
            hora
        }
    )
}

//Función para mostrar la información del paciente con su cita
function mostrarInfoPaciente(paciente) {
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: " + paciente.edad); //"31"
    //console.log("Edad del paciente: ", paciente.edad); //31
    console.log("Citas registradas: ");

    //forEach para imprimir citas
    paciente.citas.forEach(
        (cita, indice) => {
            console.log("Cita " + (indice) + ": " + cita.fecha + " a las " + cita.hora);
        }
    );
}
/*
Funcionamiento del forEach anterior
1. Definir una variable temporal llamada cita y otra variable temporal llamada indice
2. Cada que se ejecute el forEach, busca y encuentra una cita, asigna esa información a las variables temporales e imprime la información
3. Vuelve a buscar y encontrar otra cita, y reasigna esa información a las variables temporales
*/

//Registrar un paciente desde la invocación de la función
let paciente1 = registrarPaciente("Felipe", 31);
let paciente2 = registrarPaciente("Naruto", 20);
let paciente3 = registrarPaciente("Dr. Simi", 50);

//Registrar la cita de un paciente desde la invocacion de la función
registrarCita(paciente1, "2023-09-12", "1:00 PM");

//Mostrar información del paciente
mostrarInfoPaciente(paciente1);
mostrarInfoPaciente(paciente2);


/*
ForEach
Es un método de arrays, que tiene como objetivo iterar o recorrer cada elemento del array con la finalidad de aplicarle una función establecida.

Generalmente el for each se utiliza para imprimir la información del arreglo.

Sintaxis ForEach

array.forEach(
    function(elemento, indice, arreglo){
        //código a ejecutar
    }
);
    * elemento
El elemento actual del arreglo que se está procesando
    * indice (opcional)
La posicion del elemento actual en el array
    * arreglo (opcional)
El array que se esta recorriendo


Ejemplo del supermercado:
    - elemento: producto que compré y que está en el carrito
    - indice: la posicion de ese producto
    - arreglo: carrito del super
*/

let carritoSuper = ["Manzana", "papitas", "huevo", "jabon de trastes", "pan"];

//Oye JS, 'para cada' elemento del tipo "producto" que tenga una posicion dentro del arreglo llamado "carritoSuper", vas a hacer algo...
carritoSuper.forEach( 
    function(producto, indice){
        console.log("Producto: " + producto + " con la posición: " + indice);
    }
);