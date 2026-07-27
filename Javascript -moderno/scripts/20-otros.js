// Separadores numericos

let numero = 4_000_000_000;
console.log(typeof numero,numero);

//Replace y ReplaceAll

let frase = "Voy en mi moto contento por la carretera y veo otra moto";
//let nueva_frase = frase.replace("moto", "coche");
let nueva_frase = frase.replaceAll("mo.to!!/", "coche");

console.log(nueva_frase);
