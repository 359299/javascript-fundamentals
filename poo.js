//programacion orientada a objetos

//4 principios

//Abstraccion->Representar la realidad mediante código.

//Encapsulamiento-> Es la forma en la que definimos o
//                 modificamos el alcance de un elemento.

//Herencia-> Es la capacidad de un elemento para reutilizar las
//           caracteristicas de otros de forma jerarquica.

//Polimorfismo-> Es la capacidad de diferentes elementos de
//              realizar una misma accion de forma distintas.
class Animal {
    constructor(name, soundToEmit) {
        this._name = name;
        this._soundToEmit = soundToEmit;
    }
    sound() {
        return this._soundToEmit();
    }
    comer() {
        console.log("estoy comiendo");
    }
    // get
    get name() {
        return this._name;
    }
    // set
    set name(v) {
        this._name = v;
    }

    static isAnimal(obj) {
        return obj instanceof Animal;
    }
}

class Robot {
    // Definida con mayúscula por convención de clases
}

let a = new Animal("perro", () => "guau");
let x = { "_name": "perro" };
let r = new Robot();

console.log(a.name);
console.log(x);
a.name = "gato";
console.log(a.name);

a.comer();

// Concatenación
console.log(" El objeto es un animal? " + Animal.isAnimal(a));
console.log(" El objeto es un animal? " + Animal.isAnimal(r));

// Interpolación
console.log(` El objeto es un animal? ${Animal.isAnimal(a)}`);

class Dog extends Animal {
    constructor(name, soundToEmit, type) {
        super(name, soundToEmit);
        this._type = type;
    }
    get type() {
        return this._type;
    }
    set type(v) {
        this._type = v;
    }
}

class Cat extends Animal {
    constructor(name, soundToEmit, type) {
        super(name, soundToEmit);
        this._type = type;
    }
    get type() {
        return this._type;
    }
    set type(v) {
        this._type = v;
    }
}

let dog = new Dog("Sparky", () => {
    return "guau guau!";
}, "Golden");

// Corrección: el nombre de la clase es Cat (con mayúscula)
let cat = new Cat("botitas", () => {
    return "Miau Miau!";
}, "Siamés");

let animals = [dog, cat];
animals.forEach(animal => console.log(animal.sound()));