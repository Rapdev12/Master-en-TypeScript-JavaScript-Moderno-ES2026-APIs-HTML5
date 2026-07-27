//son plantillas de código que permiten escribir componentes, funciones y clases reutilizables, 
//trabajando con diversos tipos de datos sin perder la seguridad en el tipado estricto. <T> hace que 
//sea con ese simbolo generica

function mostrarMensaje<T>(parametro:any){
    return parametro;
}

console.log(mostrarMensaje("Hola que tal"));

//Otro ejempro del uso generico

function identidad<T>(valor: T): T {
    return valor;
}
let resultadoNumero = identidad<number>(5); // T es number
let resultadoTexto = identidad<string>("Hola"); // T es string

console.log(resultadoNumero);
console.log(resultadoTexto);