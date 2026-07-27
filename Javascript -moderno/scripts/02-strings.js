//String Clasicos

let nombre = "Ronald";
let apellido = "Palacios"
let profesion = "Desarrollo web"
let nya = nombre + " " + apellido + "\n" + profesion;

console.log(nya);


//Template String

let plantilla = `
    hola
    soy
    Ronald

`;
console.log(plantilla)

let template = `${nombre} ${apellido}
${profesion}
`;

console.log(template);