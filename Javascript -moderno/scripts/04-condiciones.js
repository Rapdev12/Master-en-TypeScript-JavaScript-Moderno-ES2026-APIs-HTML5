
//Condicion Clasica
let persona = ["Bayern Munich", 15];

if (persona[1] >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

//Operador Ternario sirve para hacer condiciones faciles y rapida

let edad = (persona[1] >= 18) ? "Es mayor de edad" : "Es menor de edad"
console.log (edad);

//Diferencia entre ==(No evalua el tipo de datos) y ===(Aca si valua el tipo de dato) 
// y != y !== (Lo mismo pasa con los desiguales)

let edad1 = 19;
let edad2 = 13;

if (edad1 === edad2){
    console.log("Edades iguales")
}else{
    console.log("Edades distintas")
}