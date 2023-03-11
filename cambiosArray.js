//MODIFICAR UN ELEMENTO ESPECÍFICO EN UN ARREGLO

//Insertar un elemento en un lugar específico
let arreglo = ['Sergie', 'Programador', 'Frontend']
arreglo.splice(1, 0, 'Code')


//salida esperada:
let arreglo_ = ['Sergie', 'Code', 'Programador', 'Frontend']


//Modificar un elemento en un lugar específico
let array = ['Sergie Code', 'Developer', 'Engineer']
arreglo.splice(1, 2, 'Desarrollador', 'Web')


//salida esperada:
let array_ = ['Sergie', 'Desarrollador', 'Web']


//Modificar elementos condicionalmente
let prefijos = ["Bart", "Lisa", "Sergie", "Homero"]
let personajes = "Simpson";
let dev = "Code";

let nombresCompletos = prefijos.map(function (prefijo, indice) {
    return (indice == 2) ? prefijo + dev : prefijo + personajes;
});

//salida esperada
nombresCompletos = ["Bart Simpson", "Lisa Simpson", "Sergie Code", "Homero Simpson"]

//Modificar UN elemento en UN objeto en UN arreglo
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

