//Funciones
//Programa para hacer limonada
function exprimirLimones(cantidad) {
    console.log("Exprimiendo " + cantidad + " limones");
    let jugoExtraido = cantidad * 10;   //Considerando obtener 10 ml por limón
    console.log("Se obtuvo " + jugoExtraido + " ml de jugo de limón");
    return jugoExtraido;    //return
}

//Función para mezclar el jugo de limón con agua y azúcar
function mezclarJugoDeLimon(cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar) {
    console.log("Mezclando " + cantidadDeJugo + " ml de jugo de limón con " + cantidadDeAgua + " ml de agua y " + cantidadDeAzucar + " gramos de azúcar");
}

//Función para servir la Limonada
function servirLimonada() {
    console.log("Sirviendo la limonada en un vaso");
    vasoDeLimonada = true;
}

//Funcion principal que prepare mi limonada
function prepararLimonada(cantidadDeLimon) {
    let jugoDeLimon = exprimirLimones(cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10);   //Cantidades de limón, agua y azúcar
    servirLimonada();
}

//LLamamos a la función principal para preparar la limonada
var vasoDeLimonada = false;
prepararLimonada(5); //Llamado de programa


//Programa para verificar un proceso dentro del consultorio dental
