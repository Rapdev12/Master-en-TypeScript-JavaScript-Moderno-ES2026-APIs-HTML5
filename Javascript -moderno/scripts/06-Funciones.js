//Funcion Flecha
//Con la funcion flecha no puedes usar el metodo this.

let saludo = nombre => "Hola, Te mando un saludo" + nombre;
console.log (saludo("juan"))


let saludo1 = (nombre, pais) => "Hola, Te mando un saludo " + nombre+" "+"de "+pais;
console.log (saludo1("juan", "Mexico"));

let persona = (nombre, pais) => {
    let continente = "America";
    if (pais !== "America"){
        continente = "Asia"
    }
    return "Hola, Te mando un saludo " + nombre+" "+"de "+pais+ "y del continente "+continente;
};

console.log (persona("Salvador", "Mexico"))

let tienda = {
    nombre: "Game",
    videosjuegos:["GTA", "WWE", "FIFA"],
    mostrar(){
        console.log(this.nombre)
    },
    mostrar1:() => { //No debe usar esto para metodo!!!usar la forma mostrar 2
        console.log(tienda.nombre)
    },
    mostrar2(){
        this.videosjuegos.forEach(juego =>{
            if (juego === "FIFA"){
                console.log("El mejor juego de la historia");
            }
            console.log(juego);
        });
    }
};

tienda.mostrar1();
tienda.mostrar2();