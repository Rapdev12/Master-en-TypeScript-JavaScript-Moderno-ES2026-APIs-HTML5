let frutas = ["manzana", "banana", "pera", "naranja"];

//Clasico
//let manzana = frutas[0];
//let pera = frutas[3];

//desestructuracion Array

let [manzana, banana, pera, naranja] = frutas;

console.log(naranja)

//desestructuracion Objeto

let persona ={
    nombre: "Ronald",
    edad:44,
    altura: 190,
    pais: "Venezuela"
};

let {nombre, edad, altura, pais} = persona;