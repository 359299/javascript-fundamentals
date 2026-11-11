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
- Visual Studio Code / WebStorm (editor de código)

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
git clone <URL_DEL_REPOSITORIO>
cd javascript-fundamentals
```

## Ejecución

Cada archivo se ejecuta por separado desde la terminal:

```bash
node app.js
node cal.js
node poo.js
```

La salida se muestra directamente en la consola.

## Funcionalidades / uso

| Archivo | Subtema | Contenido |
|---|---|---|
| `app.js` | 2.2.1 Introducción a los lenguajes de scripting | Variables con `var`, `let` y `const`; tipos de datos y objetos; arreglos; funciones tradicionales, anónimas y flecha; funciones como argumentos de otras funciones; enumeraciones con objetos. |
| `cal.js` | 2.2.2 Programación funcional aplicada a la web | Calculadora con multiplicación y división; composición de funciones; callbacks de éxito y error; promesas con `.then()` y `.catch()`; `async/await`. |
| `poo.js` | 2.2.3 Programación orientada a objetos aplicada a la web | Clases y constructores; creación de objetos con `new`; getters y setters; herencia con `extends` y `super`; método estático e `instanceof`; polimorfismo con una jerarquía de animales (`Animal`, `Dog`, `Cat`). |

Salida esperada de `poo.js` (resumen): imprime el nombre del animal, usa el setter para cambiarlo, comprueba con `instanceof` si un objeto es `Animal` y, al final, cada animal emite su propio sonido (polimorfismo).

## Estructura general del proyecto

```text
javascript-fundamentals/
|-- app.js
|-- cal.js
|-- poo.js
`-- README.md
```

## Autor

Carlos Esteban Barragan Bernal — 359299