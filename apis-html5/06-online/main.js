let conectado = document.querySelector(".online");
let desconectado = document.querySelector(".offline");

conectado.style.display = "none";
desconectado.style.display = "none";

window.addEventListener('online', ()=>{
    conectado.style.display = "block";
    desconectado.style.display = "none";
})

window.addEventListener('offline', ()=>{
    desconectado.style.display = "block";
    conectado.style.display = "none";
})

alert(navigator.onLine);