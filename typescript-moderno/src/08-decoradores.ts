
//son funciones especiales con sintaxis @expresión. Permiten modificar, 
//anotar o agregar metadatos a clases, métodos, accesores, propiedades y parámetros. 

//decoradores de clase
function proyectar(constructor:Function){
    console.log("Proyectando Pelicula")
}

@proyectar

class Pelicula {
    constructor(
        public titulo: string,
        public genero: string,
        public proyectando:boolean
    ){}
}
//Ejemplo mas complejo de decoradores de metodos

function Saludar(mensaje: string) {
  // La función interna ahora recibe el método original y el contexto (2 argumentos)
  return function (originalMethod: Function, context: ClassMethodDecoratorContext) {
    
    // Validamos que se use estrictamente sobre un método
    if (context.kind !== "method") {
      throw new Error("El decorador @Saludar solo se puede usar en métodos.");
    }

    // Retornamos una nueva función que reemplaza o envuelve la ejecución original
    return function (this: any, ...args: any[]) {
      console.log(`Mensaje: ${mensaje}`); // Tu lógica personalizada
      return originalMethod.apply(this, args); // Ejecuta el método real
    };
  };
}

class Usuario {
  // En TS moderno no necesitas configurar 'experimentalDecorators: true' para esto
  @Saludar("¡Hola desde el decorador!")
  public saludar() {
    console.log("Ejecutando método original");
  }
}

// Prueba de ejecución
const usuario = new Usuario();
usuario.saludar();

