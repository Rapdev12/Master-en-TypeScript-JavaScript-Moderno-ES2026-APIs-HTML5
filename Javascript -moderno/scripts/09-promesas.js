let productos = [
  {
    nombre: "Ordenador Gaming",
    marca: "Asus",
    precio: 1200,
  },
  {
    nombre: "Tablet",
    marca: "Samsung",
    precio: 500,
  },
  {
    nombre: "Monitor",
    marca: "Benq",
    precio: 800,
  },
];

function conseguirProductos() {
  return new Promise((resolve, reject) => {
    console.log("Cargando...");
    setTimeout(() => {
      resolve(productos);
      //reject(Error("A ocurrido un error!!"));
    }, 3000);
  });
}

function productoComprado() {
  return new Promise((resolve, reject) => {
    console.log("Haciendo la compra...");
    setTimeout(() => {
      resolve({
        producto: "Ordenador Gaming",
        cliente: "Ronald Palacios",
      });
    }, 1000);
  });
}

//Metodos then, catch y finally
conseguirProductos()
  .then((items) => {
    console.log("Productos disponibles: ", items);
    return productoComprado();
  })
  .then((venta) => {
    console.log("Producto comprado: ", venta);
    productos = productos.filter(
      (producto) => producto.nombre != venta.producto,
    );
  })

  //.catch((error) => console.log(error.message))
  .finally((items) => {
    console.log("Promesa Finalizada!!!");
    console.log("Productos que quedan disponibles: ", productos);
  });
