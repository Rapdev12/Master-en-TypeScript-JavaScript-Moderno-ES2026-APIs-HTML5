//Notificianes

if (Notification == "undefined") {
  console.log("tu navegador no es compatible con notificaciones");
} else {
  console.log("Es compatible tu navegador con notificaciones", Notification);

  //pedir permisos
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }
  console.log(Notification.permission);

  //Creo la notificacion

  let principal = "Hola soy una nueva notificacion";
  let opciones = {
    body: "Cuerpo de la notificacion, explicacion, etc",
    icon: "https://lenguajehtml.com/assets/images/topics/html/base.avif",
  };

  const notificacion = new Notification(principal, opciones);

  notificacion.onclick = () => {
    event.preventDefault();
    //window.open("https://www.google.com/?zx=1781534887734")
    window.location.href = "https://www.google.com/?zx=1781534887734";
  };

  notificacion.onclose = () => {
    alert("Ups que pena");
  };

  // El evento onshow se dispara al desplegarse
  notificacion.onshow = function () {
    console.log("La notificación se ha mostrado correctamente en pantalla.");
    // Puedes agregar lógica adicional aquí, como iniciar un contador
  };

  //tiempo de expiracion

  setTimeout(() => {
    notificacion.close();
  }, 5000);
}
