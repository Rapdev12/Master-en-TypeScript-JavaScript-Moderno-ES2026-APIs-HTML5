import Storage from "./storage";
import List from "./list";

export default function () {
  //Crear objetos

  const storage = new Storage();
  const list = new List();

  //Datos de las peliculas disponible
  let pelis_stored = storage.getData();
  let pelis_view = document.querySelectorAll("#content .peli-item");

  //recorrer Peliculas mostrada

  pelis_view.forEach((pelis) => {
    let delete_btn = pelis.querySelector(".delete");

    // Aplicarle un evento al click
    delete_btn.onclick = function(){
        // conseguir el id de las peliculas que quiero borrar
      const peli_id = this.getAttribute("data-item");
        // filtrar el array para que elimine las que no quiero
      const new_pelis_store = pelis.stored.filter((peli)=> peli.id !== parseInt(peli_id));

      //actualizar el datos en localstorage
        storage.save(new_pelis_store);

      //volver a mostar listado actualizado
      list.show(new_pelis_store)
    };
  });
}
