//Spread ... para usarse antes de los array

let heroes = ["Batman", "Spiderman", "Superman", "Venom", "Aquaman"];

console.log(...heroes);

function mostrarHeroes(heroe1, heroe2) {
  console.log(`
        ***Mis dos super heroes favoritos ***
        - ${heroe1}
        - ${heroe2}
        fin.
        `);
}

mostrarHeroes(...heroes);

//Rest Representa un numero indefido de los array

function peliculas(pelicula1, pelicula2, ...restoDePeliculas) {
  console.log(pelicula1);
  console.log(pelicula2);
  console.log(restoDePeliculas);
}

peliculas(
  "Carrie",
  "Conjuro",
  "Batman vs Superman",
  "El Padrino",
  "Sin limites",
);
