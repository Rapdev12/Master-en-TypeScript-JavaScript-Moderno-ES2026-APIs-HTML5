function saludo(nombre: string) {
    return "Un saludo para" + nombre;
}
console.log(saludo("Ronald"));

//Nada / void

function mostrarFecha(): void {
    console.log("20-07-2026");
}
mostrarFecha();

//Never / fin de la aplicacion

function finApp(): never {
    throw new Error("La aplicacion se ha cerrado");
}
finApp();

//tipo Funcion

let grupos: (datos: string[]) => string;

grupos = function (datos: string[]) {
    return "Mis grupos favoritos son" + datos.toString();
};

console.log(grupos(["Natos y waor", "La fuga", "Metallica"]));

//Tipo literal

function tekken(personajes: string, atuendo: number): string {
    return `El personaje es ${personajes} y lleva el atuendo ${atuendo}`;
}

console.log(tekken("tigre", 3));
