// Nullish coalescing operator

function multiplicacion(numero1, numero2) {
  numero1 = numero1 == null ? 1 : numero1; //Forma clasica
  numero2 = numero2 == null ? 1 : numero2;

  numero1 = numero1 ?? 1; //Asi es el metodo nullish
  return numero1 * numero2;
}

console.log(multiplicacion(10,5));
