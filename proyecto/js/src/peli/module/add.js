import Storage from "./storage.js";
import List from "./list.js";

export default class Add {
  constructor() {
    //Crear objeto
    this.storage = new Storage();
    this.list = new List();

    //Conseguir elementos del DOM a utilizar
    this.title = document.querySelector("#title");
    this.description = document.querySelector("#descripcion");
    this.imagen = document.querySelector("#imagen");
    this.save_btn = document.querySelector("#save");
  }

  peliSave() {
    this.save_btn.onclick = (e) => {
      e.preventDefault();

      //conseguir datos aculizados
      let pelis = this.storage.getData();
      let lastId = this.storage.getLastId();

      
      //Datos a guardar
      let title = this.title.value;
      let descripcion = this.description.value;
      let newImagen = this.imagen.files[0];

      // Pequena validacion
      if (title != "" && descripcion != "" ) {
        // Leer el archivo asíncronamente
        const reader = new FileReader();
        reader.onload = () => {
          // e.target.result contiene la imagen convertida a texto almacenable
          //Crear un objeto a guardar
          let peli = {
            id: lastId + 1,
            title,
            descripcion,
            imagen: reader.result,
          };

          //Agregar al array de objeto

          pelis.push(peli);

          // Guardar en el localstorage
          this.storage.save(pelis);

          //Actualizar listado
          this.list.addToList(peli, pelis);
        };
        // Activa la conversión de la imagen
        reader.readAsDataURL(newImagen);
      } else {
        alert("Introduce bien los datos");

        return false;
      }
    };
  }
}
