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
      //resolve(productos);
      reject(Error("A ocurrido un error!!"));
    }, 3000);
  });
}

//async function getMisProductos() {
  //let mis_productos = await conseguirProductos();
  //console.log(mis_productos);
//}


//TryCatch para capturar error 
async function getMisProductos() {
    try{
         let mis_productos = await conseguirProductos();
  console.log(mis_productos);
    }catch(error){
        console.log(error.message);
    }
    console.log("fuera del try")
}

getMisProductos();