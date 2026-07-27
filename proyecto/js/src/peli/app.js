import Add from './module/add.js'
import List from './module/list.js';
import Storage from './module/storage.js';
import search from './module/search.js';

export default class App{

    constructor(){
        //Inicializar propiedades

        this.add = new Add();
        this.list = new List();
        this.storage = new Storage();


    }

    load(){
        //agregar pelicula
            this.add.peliSave();

            //conseguir array objetos localstorage
            const pelis = this.storage.getData();
        //listar pelicula
            this.list.show(pelis);
        //buscar pelicula
        search();

        console.log("La aplicacion de las peliculas ya funciona");
    }
}