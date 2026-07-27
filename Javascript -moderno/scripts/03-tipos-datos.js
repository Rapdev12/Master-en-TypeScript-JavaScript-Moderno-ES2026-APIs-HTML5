// tipos de dato de texto o String
// tipos de datos de Numero o Number
// tipos de datos booleano Boolean
// tipo de datos Array
// tipos de datos Json: Javascript Object Notation
// tipos de datos null y undefined
// tipos de datos symbol: se utiliza para ocultar una propiedad

//ejemplo de un dato tipo json

let employee = {
  name: "John",
  salary: 56000,
  married: true,
};

console.log(employee);

let peliculas = {
  id: 1,
  titulo: "El Padrino",
  anio: 1972,
  director: "Francis Ford Coppola",
  genero: ["Crimen", "Drama"],
};

peliculas["actor"] = "Al Pacino";  //la manera de agregar datos al json
peliculas["actriz"] = "Talia Shire" //la manera de agregar datos al json

console.log(peliculas)

for (let propiedad in peliculas){
   console.log(peliculas[propiedad]);
}