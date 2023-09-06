var nombreMedico = "Jairo";
var nombrePaciente = "Alejandro";

var edad = 19;
var cantidadProducto = 8;

var cuponDescuento = false;
var pacienteNuevo = true;

var fechaCita;
var horaCita;

var mayorEdad = null;
var promociones = null;

/*
Ejemplos de uso en un consultorio dental

Null
- Si un paciente no tiene un historial previo, podemos definir una variable llamada “historial” y marcarla como null. Así podemos representar la falta información sin afectar los demás procesos.
- Para la cancelación de una cita, ya que podemos definir una variable llamada “cita”. Existe una variable con la información registrada, y en la cancelación cambiamos el estado a null.

Undefined
- Al registrar la información de un paciente, podemos dejar datos opcionales. Si buscamos registrar un tratamiento dental opcional, podemos dejar el valor como undefined para decir que puede o no tenerlo.
- Al registrar una cita podemos dejar de manera predefinida el valor en undefined. Habrá una hora especificada para la cita, pero hasta que no se asigne el valor cambiará el valor de la variable.

De forma general, tanto null como undefined indican la falta de un valor, pero null se usa más cuando esa ausencia es de forma intencional, mientras que undefined es más cuando el valor no se ha iniciado o declarado. 
*/

var cantidadProductoTexto = cantidadProducto.toString();
console.log(cantidadProductoTexto);
console.log(typeof(cantidadProductoTexto));

var edadNew = "24";
var edadNumero = parseInt(edadNew);
console.log(edadNumero);
console.log(typeof(edadNumero));