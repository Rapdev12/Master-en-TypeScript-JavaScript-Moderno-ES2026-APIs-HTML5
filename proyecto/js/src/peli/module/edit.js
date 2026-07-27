import Storage from "./storage";
import List from "./list";

export default function () {
  // crear los objetos

  let storage = new Storage();
  let list = new List();

  //conseguir datos de peliculas

  let pelis_stored = storage.getData();
  let pelis_viewed = document.querySelectorAll(".peli-item");

  //Recorrer peliculas para mostrar
  pelis_viewed.forEach((peli) => {
    //selecionar el boton de editar
    let edit_btn = peli.querySelector(".edit");
    //Asignar un evento click
    edit_btn.onclick = function () {
      //conseguir id de la peli a editar

      let peli_id = parseInt(this.getAttribute("data-id"));

      // quitar botones
      edit_btn.remove();
      peli.querySelector(".delete").remove();

      //Agregar un trozo de html debajo de los botones
      let peli_edit_html = `
            <div class="edit_form">
            <hr>
            <h3 class="title">Editar Pelicula </h3>
            <form>
                <input type ="text" class="edited_title" value="${peli.querySelector(".title").innerHTML}"/>
                <textarea class= "edited_descripcion">${peli.querySelector(".descripcion").innerHTML}</textarea>
                <input type="submit" class= "update" value ="Actualizar"/>
            </form>
        `;
      peli.innerHTML += peli_edit_html;
      //seleccionar el boton actulizado
        let update_btn = peli.querySelector(".update");
      //aplicar evento click
        update_btn.onclick = function(e){
            // buscar el indice de la pelicula actualizar
            let index = pelis_stored.findIndex(peli => peli.id === peli_id);
            
            // guardar objeto dentro de ese indice
            pelis_stored[index] = {
                id: peli_id,
                title: peli.querySelector("edited_title").value,
                descripcion:peli.querySelector("edited_descripcion").value
                
            }

            // Actualizar el localstorage
            storage.save(pelis_stored);

            // volver a mostrar el listado
            list.show(pelis_stored);

        }
     
    };
  });
}
