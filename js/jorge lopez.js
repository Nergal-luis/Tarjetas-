var grupoTarjeta1 = ["🐶", "🐺", "🐱","🐵","💥", "🦧", "🐷","🐪","🦒","🦏","🦛","🐹","🦔","🐨","🐼","🦡","🐣"];
var grupoTarjeta2 = ["🐶", "🐺", "🐱","🐵","💥", "🦧", "🐷","🐪","🦒","🦏","🦛","🐹","🦔","🐨","🐼","🦡","🐣"];

var todasLasTarjetas = grupoTarjeta1.concat(grupoTarjeta2);

function crearTajetas() {
  var mesa = document.querySelector("#mesa");

  todasLasTarjetas.forEach(function mensaje(Element) {
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML = "<p class='ico'>" + Element + "</p>";

    mesa.appendChild(tarjeta);
  });
}

crearTajetas();



document.querySelectorAll(".a").forEach(

function(elemento){
elemento.addEventListener("click", descubrirCarta)

}

);

function descubrirCarta(){
this.classList.add("descubrir");

}