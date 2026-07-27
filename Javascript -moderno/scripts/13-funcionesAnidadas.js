let nombre = "Ronald";

function mostrarNombre() {

  let apellido = "Palacios";

  function mostrarApellido() {

    let profesion = "Desarrollador Web";
    function mostrarProfesion() {
      return nombre + " " + apellido + " " + profesion;
    }

    return mostrarProfesion;
  }

  return mostrarApellido;
}

console.log(mostrarNombre()()());//Funciones Anidadas
