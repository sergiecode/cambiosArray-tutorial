![Tutorial manipulacion de arrays en javascript](https://raw.githubusercontent.com/sergiecode/cambiosArray-tutorial/master/cambiosArray.jpg)

# Cómo hacer cambios en un array utilizando splice y map en JavaScript

En JavaScript, puedes hacer cambios en un array utilizando dos métodos: `splice()` y `map()`. A continuación, explicaremos cómo utilizar cada uno de ellos.

## Splice

El método `splice()` te permite eliminar elementos de un array y/o agregar nuevos elementos en su lugar. Aquí hay un ejemplo de cómo utilizarlo:

    const array = [1, 2, 3, 4, 5];
    
    // Eliminar los dos primeros elementos del array
    array.splice(0, 2);
    
    // Agregar un nuevo elemento al inicio del array
    array.splice(0, 0, 0);
    
    console.log(array); // [0, 3, 4, 5]

En este ejemplo, el primer parámetro de `splice()` indica el índice donde se iniciarán los cambios, y el segundo parámetro indica la cantidad de elementos que se eliminarán a partir de ese índice. En el ejemplo, `array.splice(0, 2)` elimina los dos primeros elementos del array.

Si deseas agregar nuevos elementos en lugar de eliminarlos, puedes pasar más argumentos a `splice()`. En el ejemplo, `array.splice(0, 0, 0)` agrega un nuevo elemento con el valor de `0` al inicio del array.

## Map

El método `map()` te permite crear un nuevo array a partir de uno existente, aplicando una función a cada uno de sus elementos. Aquí hay un ejemplo de cómo utilizarlo:

    let prefijos = ["Bart", "Lisa", "Sergie", "Homero"]
    
    let personajes = "Simpson";
    
    let dev = "Code";
    
    let nombresCompletos = prefijos.map(function (prefijo, indice) {
    
    return (indice == 2) ? prefijo + dev : prefijo + personajes;
    
    });
    
    //salida esperada
    
    nombresCompletos = ["Bart Simpson", "Lisa Simpson", "Sergie Code", "Homero Simpson"]

Modificar un elemento en un objeto en un arreglo:


    
    const techArray = [
    
    { id: 0, name: "React" },
    
    { id: 1, name: "Angular" },
    
    { id: 2, name: "Javascript" },
    
    ];
    
    const newTechArray_ = techArray.map(p =>
    
    p.id === 2
    
    ? { ...p, name: 'TypeScript' }
    
    : p
    
    );
    
    //Salida esperada:
    
    const newTechArray = [
    
    { id: 0, name: "React" },
    
    { id: 1, name: "Angular" },
    
    { id: 2, name: "TypeScript" },
    
    ];
