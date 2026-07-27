//Molde

class Coche {
  //Metodos que se ejecuta primero
  constructor(marca, modelo, color, velocidad, year) {
    //Propiedades o Atributos
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.velocidad = velocidad;
    this.year = year;
  }

  //Metodos SET y GET (Setter y getter)
  set guardarMarca(marca) {
    this.marca = marca;
  }

  get devolverMarca() {
    this.marca = marca;
  }

  //Metodos Estaticos

  static saludar(nombre) {
    return "Hola " + nombre;
  }
}

let mi_coche = new Coche();

mi_coche.guardarMarca = "Toyota";

console.log(mi_coche.marca, mi_coche.modelo);

let segundo_coche = new Coche("Renauld", "Clio");
console.log(segundo_coche.marca, segundo_coche.modelo);

console.log(Coche.saludar("Ronald"));

//Herencia

class Quad extends Coche {
  constructor(marca, modelo, color, velocidad, year, cilindrada) {
    super(marca, modelo, color, velocidad, year);
    this.cilindrada = cilindrada;
  }
}

let mi_quad = new Quad("Susuki", "ninja", "naranja", 300, 2026, 1200);
console.log(mi_quad);
