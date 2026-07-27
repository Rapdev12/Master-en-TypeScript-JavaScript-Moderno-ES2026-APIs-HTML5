//son contratos que definen la estructura de un objeto,
//especificando los nombres y tipos de sus propiedades y métodos

interface Videojuego {
    titulo: string;
    categoria: string;
    edad: number;
    duracion?: number; //el signo de pregunta hace que sea opcional
    lanzado?: boolean;
};


//Clase
class Fifa implements Videojuego {
    
    constructor(
        public titulo: string,
        public categoria: string,
        public edad: number,
        public duracion: number, //el signo de pregunta hace que sea opcional
        public lanzado: boolean
    ) { }


    mostra():void{
        console.log(this.titulo, this.categoria, this.edad);
    }
}

let fifa23 = new Fifa ("fifa23", "futbol", 5, 2025, true)
console.log(fifa23.mostra());

//Interface de objeto literal

let gta: Videojuego = {
    titulo: "GTA 5",
    categoria: "Accion",
    edad: 18,
    duracion: 200,
    lanzado: true
}

console.log(gta);