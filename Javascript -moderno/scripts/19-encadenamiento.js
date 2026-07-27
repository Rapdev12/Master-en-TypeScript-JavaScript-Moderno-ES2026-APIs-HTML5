let persona = {
  nombre: "Ronald",
  apellido: "Palacios",
  domicilio: {
    pais: "Argentina",
    ciudad: {
      nombre: "Ciudad de Buenos Aires",
      provincia: "Capital Federal",
    },
  },
};

//let comprobar_provincia = persona && persona.domicilio && persona.domicilio.ciudad && persona.domicilio.ciudad.provincia;

let comprobar_provincia = persona?.domicilio?.ciudad?.provincia; //Esto es el encadenamiento opcional

console.log(comprobar_provincia);
