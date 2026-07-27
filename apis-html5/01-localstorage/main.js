// Comprobar si el navegador es compatible
console.log(typeof Storage);

if (typeof Storage !== "undefined") {
  console.log("Localstorage Disponible");
} else {
  console.log("Localstorage no Disponible");
}

//Guardar datos en el navegador

localStorage.setItem("nombre", "Ronald Palacios");

//Borrar datos

localStorage.removeItem("nombre");


// 1. Guardar un dato (solo acepta texto)
localStorage.setItem("usuario", "Juan");

// 2. Recuperar el dato
let nombre = localStorage.getItem("usuario");
console.log(nombre); // Imprime: Juan

// 3. Eliminar un dato
localStorage.removeItem("usuario");