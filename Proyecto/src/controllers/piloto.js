"use strict";
let dom = {};
window.onload = () => {
    dom['nombre'] = document.getElementById('nombre');
    dom['dorsal'] = document.getElementById('dorsal');
    dom['equipo'] = document.getElementById('equipo');
    dom['equipo'].innerHTML = '<ul><p> Equipos en los que ha participado: </p></ul>'
    dom['temporadas'] = document.getElementById('temporadas');
    dom['temporadas'].innerHTML = '<ul><p> Temporadas en las que ha participado: </p></ul>'

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
        for (let i = 0; i < data.equipo.length; i++) {
            obtenerEquipos(data.equipo[i])
        }
        for (let i = 0; i < data.temporadas.length; i++) {
            obtenerTemporadas(data.temporadas[i])
        }

        /*data.circuitos.map(obtenerCircuitos)*/
    })
}
function obtenerTemporadas(url) {
    return fetch(url)
        .then((r) => r.json())
        .then((e) => {
            const idUrl = obtenerID(url)
            let li = document.createElement("li");
            li.innerHTML += `<a href="temporadas.html?id=${idUrl}">${e.año}</a>`
            dom['temporadas'].appendChild(li)
        })
}
function obtenerEquipos(url) {
    return fetch(url)
        .then((r) => r.json())
        .then((e) => {
            const idUrl = obtenerID(url)
            let li = document.createElement("li");
            li.innerHTML += `<a href="equipos.html?id=${idUrl}">${e.nombre}</a>`
            dom['equipo'] .appendChild(li)
        })

}




function obtenerID(url) {
    return Number(url.match(/([0-9]*)\/?$/)[1]);

}