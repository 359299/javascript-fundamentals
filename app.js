// Javascript
// Paradigma => Funcional y O.O.
// Nivel => Alto
// Tipo de ejecución => Interpretado
// Tipado => Dinámico

// Variables y constantes (var | let | const)

var saludo = "Hola";
{
    let saludo2 = "Hola como estas";
}
const PI = 3.1416;

// Tipos de datos
let string = "Hola soy una cadena";
let number = 1;
let number2 = 3.14;
let boolean = true; // false
let char = 'a';

let prototype = {
    name: "Rafael",
    lastName: "Acosta Navarro",
    address: {
        street: "Calle ejemplo 23"
    }
};

let funcion = function (){};

// Arreglos y listas
let array = [];
let arrayNumber = [1,2,3,4,5,6];
let arrayBoolean = [false, true, false, false, true];
let arrayChar = ['a', 'b', 'c', 'd'];
let arrayProto = [{name: "Rafael"}, {}, {}, {}, prototype];
// arrayProto[0].name

// funciones
let sumar = function (a, b){
    return a + b;
}

function print(fx, a, b){
    console.log(fx(a,b));
}

function restar(a,b){
    return a - b;
}

print(sumar, 5, 6);
print(restar, 9, 3);

// Funciones anónimas
print(function(x, y){
    return x* y;
},4, 5);

print((x, y) => {
    return x * y;
}, 7,4);

print((x, y) => x * y , 5, 5);

// console.log(sumar(5,6));

// ENUMS

const seasons = {
    SUMMER: {
        name: "Summer"
    },
    WINTER: {},
    SPRING: {},
    AUTUMN: {}
}

console.log(seasons.SUMMER.name);