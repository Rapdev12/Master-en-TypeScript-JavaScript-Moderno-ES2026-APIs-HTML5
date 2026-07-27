//Array

let personas = ["Ronald","Ariel", "Raul"];
console.log(personas);


//Tuplas: Una tupla es un array tipado o cerrado con una longitud predefinida y tipos para cada índice

// defino una tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

console.log(ourTuple);

//Enum- Enumeracion son solo datos lectura

enum DatosPesonales{
    nombre = "Victor",
    dni = 56456,
    ciudad = "Caracas",
    direccion = "la sabana"
}

console.log(DatosPesonales.nombre, DatosPesonales.dni);

//Cast o convertir a otro tipo

let texto_desconocido: any = "Este dato viene en una peticion Ajax";
let frace_final: string =  <string> texto_desconocido;

