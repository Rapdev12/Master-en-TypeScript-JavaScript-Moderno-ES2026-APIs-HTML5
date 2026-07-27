import deleteOfList from "./delete.js";
import edit from './edit.js';

export default class List {
  constructor() {
    //Seleccionar elementos del DOM a usa

    this.content = document.querySelector("#content");
  }

    peliTemplate(peli){
        return `
        <article class="peli-item" id="peli-${peli.id}">
                <h3 class="title">${peli.title}</h3>
                <img src="" alt="">${peli.imagen} </img>
                <p class="descripcion">${peli.descripcion}</p>

                <button class="edit" data-id="${peli.id}">Editar</button>
                <button class="delete" data-id="${peli.id}">Borrar</button>
        </article>`;
    }
  addToList(peli, list_peli) {
    
    // Plantilla de peliculas a agregar
    let peli_html = this.peliTemplate(peli)
        

        //Agregar pelicula al contenido en el DOM
        this.content.innerHTML += peli_html;

        // Mostrar el listado de pelicula
        this.show(list_peli);
  }
  show(pelis){
    //vaciar dom del contenedor principal

    this.content.innerHTML = "";

    // Recorrer y mostrar todo los datos objetos peliculas del localstorage
    pelis.forEach(peli => {
        this.content.innerHTML += this.peliTemplate(peli)
       
    });

    // Funcionalidad de botones de Borrado
      deleteOfList();

    // Funcionalidad del boton Edit
    edit();

  }
}
