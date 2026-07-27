class Coche {
    constructor(
        public marca: string, 
        public modelo: string, 
        public color: string, 
        public velocidad: number, 
        public year:number
    ){}
    static saludar():string{
        return "Hola que tal";
    }      
};

//Herencia

class Camioneta extends Coche{
    constructor(
        public marca: string, 
        public modelo: string, 
        public color: string, 
        public velocidad: number, 
        public year:number
    ){
        super(marca,modelo,color,velocidad,year)
    }
}
let mi_camioneta:Camioneta = new Camioneta("Jepp", "Wrangle", "negra", 200, 2026);
let mi_coche:Coche = new Coche("Renoult","Clio","verde", 150, 2025);
console.log(mi_coche.marca);
console.log(mi_camioneta.modelo);

console.log(Coche.saludar())

//Clases Abstracta

abstract class Autobus { 
// es una plantilla base que no se puede instanciar directamente,
//  diseñada para ser heredada por otras clases
}


