"use strict";
let dom = {};
window.onload = () => {
    dom['nombre'] = document.getElementById('nombre');
    dom['dorsal'] = document.getElementById('dorsal');
    dom['equipo'] = document.getElementById('equipo');
    dom['temporadas'] = document.getElementById('temporadas');

    obtenerDatos();
}
function obtenerDatos() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id = urlParams.get('id');
    let URL = `http://localhost:3000/api/pilotos/${id}`;
    fetch(URL).then(r => r.json()).then(data => {
        console.log(data);
        dom['nombre'].innerHTML = data.nombre;
        dom['dorsal'].innerHTML = "Dorsal: " + data.dorsal;
        dom['equipo'].innerHTML = "Equipo: " + data.equipo;
        
        
        /*data.circuitos.map(obtenerCircuitos)*/
    })
}

