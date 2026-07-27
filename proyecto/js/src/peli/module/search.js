import Storage from "./storage";
import List from "./list";


export default function(){

    let storage = new Storage();
    let list = new List();

    //conseguir elementos dom

    let content = document.querySelector("#content");
    let search_btn = document.querySelector("#search");

    //Aplicar evento al formulario de busqueda

    search_btn.onclick = (e) => {
        e.preventDefault();

        //conseguir el texto introducido en el campo de busqueda

        let wanted = document.querySelector("#search_field").value;
        
        //Conseguir datos de peliculas actualizadas
        let pelis_stored = storage.getData();

        //Aplicar filtro para encontrar pelicula

        const new_pelis = pelis_stored.filter(peli =>{
            return peli.title.toLowerCase().includes(wanted.toLowerCase());
        });

        //Mostrar el listado de coincidencias
        if (new_pelis.length <= 0){
            content.innerHTML = "<div><h2>No hay concidencia</h2></div>";
        }else{
            list.show(new_pelis);
        }
        return false;
    };

}