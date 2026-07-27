let nombres = [
  "Roxana Hsu",
  "Trystan Lowery",
  "Max Devries",
  "Camden Hull",
  "Isabelle Maciel",
  "Dora Bailey",
  "Enoch Brien",
  "Dana Kinsey",
  "Amir Scroggins",
  "Collin Ingram",
  "Mariana Diaz"
];

//bucle Clasico
for (let i = 0; i < nombres.length; i ++){
    //console.log(nombres[i]);
}

//For of Para acceder al contenido

for(let nombre of nombres){
    console.log(nombre)
}

//For in Para acceder al indice, sirve tambien para json

for(let indice in nombres){
    console.log(indice)
}

//ForEach

nombres.forEach(function(nombre_actual, indice){
    console.log(indice, nombre_actual)
});

//Iterables : bjeto que contiene una secuencia de datos 
// y permite recorrer sus elementos uno a uno de forma secuencial:
// Arrays Cadenas de texto (Strings)Maps y Sets

const numeros = [1, 2, 3];

for (const numero of numeros) {
  console.log(numero);
}