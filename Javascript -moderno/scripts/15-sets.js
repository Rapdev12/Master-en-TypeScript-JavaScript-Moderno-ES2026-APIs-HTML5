//Crear Set

let gadgets = new Set(["movil", "tablet", "portatil"]);

//agregar elementos al set
gadgets.add("mesa");
gadgets.add("maquina de afeitar");
gadgets.add("plancha de cabello");

console.log(gadgets);


//Scar el tamaño del set

console.log(gadgets.size);

//Recorrer el set

for (let item of gadgets) {
  console.log(item);
}
