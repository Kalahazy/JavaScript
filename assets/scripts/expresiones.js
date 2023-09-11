console.log("Estoy vivooooooo");

/*
Operador

Un elemento que nos permite realizar una operación entre dos o más elementos.

    -   Operadores aritméticos (+, -, *, /, %)
    -   Operadores de asignación (=)
    -   Operadores de comparación (>, <, >=, <=, ==, ===, !=, !==)
    -   Operadores lógicos (&&, ||, !)
*/

/*
Operadores aritméticos

Son operadores que nos permiten tomar valores numéricos como sus operandos y retornar un valor numérico único. Corresponden a operaciones matemáticas.

    Suma (+)
    Resta (-)
    Multiplicación (+)
    Divison (/)
    Residuo / Módulo (%)
    Exponenciación (**)
    Incremento (++)
    Decremento (--)
*/

//  Suma (+)
//  Se utiliza para sumar dos números.
    let suma = 5 + 3;   // suma contendrá el valor 8

//  Resta (-)
//  Se utiliza para restar un número de otro.
    let resta = 10 - 4;  // resta contendrá el valor 6

//  Multiplicación (*)
//  Se utiliza para multiplicar dos números.
    let multiplicacion = 6 * 3; // multiplicacion contendrá el valor 18

//  División (/)
//  Se utiliza para dividir un número entre otro. La division por cero produce un valor especial llamado "Infinity"
    let division = 15 / 3;  // division contendrá el valor 5

//  Residuo / Módulo (%)
//  Se utiliza para obtener el resto de una división entre dos números.
    let modulo = 10 % 3;    // modulo contendrá el valor 1 (el resto de 10 dividido entre 3)

//  Exponenciación (**)
//  Se utiliza para elevar un número a la potencia de otro.
    let exponenciacion = 2 ** 3;    // exponenciacion contendrá el valor 8 (2 elevado a la potencia de 3)

//  Incremento (++)
//  Se utiliza para incrementar en 1 el valor de una variable.
    let incremento = 5;
    incremento++;   // ahora incremento contendrá el valor 6

//  Decremento (--)
//  Se utiliza para decrementar en 1 el valor de una variable.
    let decremento = 8;
    decremento--;   // ahora decremento contendrá el valor 7


/*
Operadores de asignación

Son operadores que utilizan para asignar un valor a una variable. Se usa el operador =
*/

//  Asignación (=)
let asignacion = 5; // asignacion contendrá el valor 5


/*
Operadores de comparación

Son operadores que nos permiten comparar dos datos, y al hacerlo obtenemos un valor booleano (true o false).

    Mayor que (>)
    Menor que (<)
    Mayor o igual que (>=)
    Menor o igual que (<=)
    Igual que / Igualdad Abstracta (==)
    Estrictamente igual que / Igualdad Estricta (===)
    Distinto de (!=)
    Estrictamente distinto de (!==)
*/

// Mayor que (>)
// Se utiliza para comparar si un número es mayor que otro.
    let mayorQue = 5 > 3;  // true, ya que 5 es mayor que 3

// Menor que (<)
// Se utiliza para comparar si un número es menor que otro.
    let menorQue = 5 < 3;  // false, ya que 5 no es menor que 3

// Mayor o igual que (>=)
// Se utiliza para comparar si un número es mayor o igual que otro.
    let mayorIgualQue = 5 >= 5;    // true, ya que 5 es igual a 5

// Menor o igual que (<=)
// Se utiliza para comparar si un número es menor o igual que otro.
    let menorIgualQue = 5 <= 5;    // true, ya que 5 es igual a 5

// Igual que / Igualdad Abstracta (==)
// Se utiliza para comparar si dos valores son iguales. Si los valores son de distinto tipo, JavaScript intentará convertir uno de los valores para que coincidan.
    let igualQue = 5 == "5";    // true, ya que JavaScript convierte la cadena "5" a un número antes de la comparación

// Estrictamente igual que / Igualdad Estricta (===)
// Se utiliza para comparar si dos valores son iguales. Si los valores son de distinto tipo, JavaScript no intentará convertir uno de los valores para que coincidan.
    let igualQueEstricto = 5 === "5";   // false, ya que no son del mismo tipo y los tipos también difieren

// Distinto de (!=)
// Se utiliza para comparar si dos valores son distintos. Si los valores son de distinto tipo, JavaScript intentará convertir uno de los valores para que coincidan.
    let distintoQue = 5 != "5"; // false, ya que JavaScript convierte la cadena "5" a un número antes de la comparación

// Estrictamente distinto de (!==)
// Se utiliza para comparar si dos valores son distintos. Si los valores son de distinto tipo, JavaScript no intentará convertir uno de los valores para que coincidan.
    let distintoQueEstricto = 5 !== "5";    // true, ya que no son del mismo tipo y los tipos también difieren


/*
Operadores lógicos

Son operadores que nos devuelven un resultado a partir de que se cumpla (o no) una condición, el resultado es un valor booleano (true o false).

    AND (&&)
    OR (||)
    NOT (!)
*/

// AND (&&)
// Sirve para determinar si dos expresiones son verdaderas. Si ambas son verdaderas, el resultado es verdadero. Si alguna de las dos es falsa, el resultado es falso. Si ambas son falsas, el resultado es falso.
    let and = true && true; // true
    let and2 = true && false;   // false
    let and3 = false && true;   // false
    let and4 = false && false;  // false

// OR (||)
// Sirve para determinar si dos expresiones son verdaderas. Si alguna de las dos es verdadera, el resultado es verdadero. Si ambas son falsas, el resultado es falso.
    let or = true || true;  // true
    let or2 = true || false;    // true
    let or3 = false || true;    // true
    let or4 = false || false;   // false

// NOT (!)
// Sirve para negar una expresión. Si la expresión es verdadera, el resultado es falso. Si la expresión es falsa, el resultado es verdadero.
    let not = !true;    // false
    let not2 = !false;  // true


