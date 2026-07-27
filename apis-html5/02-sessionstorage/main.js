//propiedad de la API de Almacenamiento Web que permite 
//guardar pares clave-valor de forma temporal en el navegador.

// 1. Guardar un nombre de usuario
sessionStorage.setItem('usuario', 'Ana');

// 2. Recuperar y mostrar el dato
let usuarioGuardado = sessionStorage.getItem('usuario');
console.log(usuarioGuardado); // Imprime: Ana

// 3. Eliminar el dato
sessionStorage.removeItem('usuario');
