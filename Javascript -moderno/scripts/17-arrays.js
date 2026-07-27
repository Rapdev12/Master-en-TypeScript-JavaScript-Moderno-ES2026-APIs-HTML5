let personas = ["victor", "pepe", "paco", "juan", "antonio"];

//buscar en un array - find

let busqueda = personas.find(persona =>persona === "victor");

console.log(busqueda);

//Buscar en un array - findIndex

let busqueda1 = personas.findIndex(persona => persona === "paco" );
console.log(busqueda1);

//Crear array basandome en un objeto iterable

let array_letras = Array.from("Ronald Palacios");
console.log(array_letras);

let array_numeros_cuadros = Array.from([1,2,3,4,5,6], numero => Math.pow(numero, 2));
console.log(array_numeros_cuadros);

//Comprobar si existe un elemento dentro de un array - includes
console.log(personas.includes("marco"));

//Filtrar arrays - filter
let nuevas_personas = personas.filter(persona => persona.length >= 5);
console.log(nuevas_personas);

// Map 
let nuevas_personas1 = personas.map(persona => {
    let nueva = persona + "Hola";
    console.log(nueva);
    return nueva;
});
console.log(nuevas_personas1);

