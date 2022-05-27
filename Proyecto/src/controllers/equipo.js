"use strict";

let dom = {}
window.onload = () => {
    dom['nombre'] = document.getElementById('nombre');
    dom['coches'] = document.getElementById('coches');
    dom['pilotos'] = document.getElementById('pilotos');
    dom['pilotos'].innerHTML = '<ul><p> Pilotos</p></ul>'
    dom['temporadas'] = document.getElementById('temporadas');
    dom['temporadas'].innerHTML = '<ul><p> Temporadas</p></ul>'
    dom['campeonatos'] = document.getElementById('campeonatos');
    obtenerDatos();
}
function obtenerDatos() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id = urlParams.get('id');
    let URL = `http://localhost:3000/api/equipos/${id}`;
    fetch(URL).then(r => r.json()).then(data => {
        console.log(data);
        dom['nombre'].innerHTML = "Nombre: " + data.nombre;
        dom['coches'].innerHTML = "Coches: " + data.coches;
        for (let i = 0; i < data.pilotos.length; i++) {
            obtenerPilotos(data.pilotos[i])
        }
        //dom['pilotos'].innerHTML = "Pilotos: " + data.pilotos;
        for (let i = 0; i < data.temporadas.length; i++) {
            obtenerTemporadas(data.temporadas[i])
        }
        dom['campeonatos'].innerHTML = "Campeonatos: " + data.campeonatos;
    })
}

function obtenerPilotos(url) {
    return fetch(url)
        .then((r) => r.json())
        .then((e) => {

            const idUrl = obtenerID(url)
            dom['pilotos'].innerHTML += `<li><a href="pilotos.html?id=${idUrl}">${e.nombre}</a></li>`
        })

}

function obtenerTemporadas(url) {
    return fetch(url)
        .then((r) => r.json())
        .then((e) => {
            const idUrl = obtenerID(url)
            dom['temporadas'].innerHTML += `<li><a href="temporadas.html?id=${idUrl}">${e.año}</a></li>`
        })
}
function obtenerID(url) {
    return Number(url.match(/([0-9]*)\/?$/)[1]);

}