# javascript-fundamentals

## Datos académicos

| Campo | Detalle |
|---|---|
| **Universidad** | Universidad Autónoma de Chihuahua |
| **Facultad** | Facultad de Ingeniería |
| **Carrera** | Ingeniería en Computación |
| **Materia** | Desarrollo Basado en Plataformas |
| **Docente** | Mtro. Luis Antonio Ramírez Martínez |
| **Actividad** | Actividad 2. Introducción a JavaScript y sus paradigmas de programación |
| **Alumno** | Carlos Esteban Barragan Bernal |
| **Matrícula** | 359299 |
| **Fecha de entrega** | 10/11/2026 |

## Descripción

Colección de ejemplos desarrollados durante clase para conocer el lenguaje JavaScript y dos de sus paradigmas principales: la programación funcional y la programación orientada a objetos. Cada archivo corresponde a un subtema de la unidad y se ejecuta de forma independiente con Node.js.

## Objetivo

Comprender los fundamentos de JavaScript y aplicar los conceptos básicos de programación funcional y orientada a objetos mediante ejemplos prácticos, utilizando Git y GitHub para gestionar y publicar el código fuente.

## Tecnologías utilizadas

- JavaScript (ES6+)
- Node.js
- Git y GitHub
- WebStorm / IntelliJ IDEA (JetBrains) como editor de código

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- [Git](https://git-scm.com/)

Verifica la instalación:

```bash
node --version
git --version
```

## Instalación

El proyecto no tiene dependencias externas, por lo que basta con clonarlo:

```bash
git clone https://github.com/359299/javascript-fundamentals.git
cd javascript-fundamentals
```

## Ejecución

Cada archivo se ejecuta por separado desde la terminal, dentro de la carpeta del proyecto:

```bash
node app.js
node cal.js
node poo.js
```

La salida se muestra directamente en la consola.

## Scripts / comandos disponibles

El proyecto no define `package.json`; los ejemplos se ejecutan directamente con Node.js.

| Comando | Descripción |
|---|---|
| `node app.js` | Ejecuta los ejemplos de fundamentos de JavaScript. |
| `node cal.js` | Ejecuta la calculadora con funciones, callbacks, promesas y `async/await`. |
| `node poo.js` | Ejecuta los ejemplos de clases, herencia y polimorfismo. |

## Funcionalidades / uso

### `app.js` — Fundamentos de JavaScript (2.2.1)

- Declaración de variables con `var`, `let` y `const`.
- Tipos de datos y objetos (cadenas, números, booleanos, objetos anidados y funciones).
- Arreglos de números, booleanos, caracteres y objetos.
- Funciones tradicionales, anónimas y funciones flecha.
- Funciones usadas como argumentos de otras funciones (`print(fx, a, b)`).
- Enumeración simulada con un objeto (`seasons`).

Salida esperada:

```text
11
6
20
28
25
Summer
```

### `cal.js` — Programación funcional (2.2.2)

- `multiply` y `divide` implementadas con sumas y restas sucesivas.
- Composición de funciones para operaciones consecutivas, por ejemplo `((5 * 4) / 10) * 6 = 12`.
- Callbacks de éxito y error (`multiplyCall`, `divideCall`), incluyendo validación de parámetros faltantes y división entre cero.
- Promesas (`multiplyPromise`, `dividePromise`) encadenadas con `.then()` y `.catch()`.
- Función `operations()` con `async/await`.

Salida esperada (resumen): resultados de la composición directa (`20`, `4`, `2`, `12`), luego los resultados de los callbacks, y al final los de las promesas y de `async/await`, que se muestran como objetos `{ n1: ... }`. El orden de las últimas líneas puede variar porque son operaciones asíncronas.

### `poo.js` — Programación orientada a objetos (2.2.3)

- Clase `Animal` con constructor, propiedades, getter y setter de `name`, método `comer()` y método estático `isAnimal()`.
- Clases `Dog` y `Cat` que heredan de `Animal` con `extends` y `super`.
- Uso de `instanceof` para verificar si un objeto es un `Animal`.
- Polimorfismo: cada animal responde a `sound()` con su propio sonido.

Salida esperada:

```text
perro
{ _name: 'perro' }
gato
estoy comiendo
 El objeto es un animal? true
 El objeto es un animal? false
 El objeto es un animal? true
guau guau!
Miau Miau!
```

## Estructura general del proyecto

```text
javascript-fundamentals/
|-- app.js
|-- cal.js
|-- poo.js
|-- .gitignore
`-- README.md
```

## Autor

Carlos Esteban Barragan Bernal — 359299
