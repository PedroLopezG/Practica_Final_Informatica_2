"use strict";

let dom = {}

window.onload = () => {
    dom['año'] = document.getElementById('año');
    dom['resumen'] = document.getElementById('resumen');
    dom['edicion'] = document.getElementById('edicion');
    dom['ncarreras'] = document.getElementById('ncarreras');
    dom['campeon'] = document.getElementById('campeon');
    dom['pilotos'] = document.getElementById('pilotos')
    dom['pilotos'].innerHTML = '<ul><p> Pilotos</p></ul>'
    dom['equipos'] = document.getElementById('equipos')
    dom['equipos'].innerHTML = '<ul><p> Equipos</p></ul>'

    obtenerDatos();

}


function obtenerDatos() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id = urlParams.get('id');
    let URL = `http://localhost:3000/api/temporadas/${id}`;
    fetch(URL).then(r => r.json()).then(data => {
        console.log(data);
        dom['año'].innerHTML = "Temporada " + data.año;
        dom['resumen'].innerHTML = data.resumen;
        dom['edicion'].innerHTML = "Edicion: " + data.edicion;
        dom['ncarreras'].innerHTML = "Carreras disputadas: " + data.carrerasDisputadas;
        obtenerCampeon(data.campeon)
        for (let i = 0; i < data.pilotos.length; i++) {
            obtenerPilotos(data.pilotos[i])
        }


        //data.pilotos.map(obtenerPilotos)
        data.equipos.map(obtenerEquipos)
        /*data.circuitos.map(obtenerCircuitos)*/

    })}

    /*function obtenerCircuitos(data) {
        const circuitos = document.createElement("p")
        circuitos.innerHTML = data.circuitos
        let li = document.createElement("li")
        li.appendChild(circuitos)
        dom["circuitos"].appendChild(li)
    
    }*/


    function obtenerCampeon(url) {
        return fetch(url)
            .then((r) => r.json())
            .then((e) => {
                const idUrl = obtenerID(url)
                dom['campeon'].innerHTML = `<a href="pilotos.html?id=${idUrl}">Campeon: ${e.nombre}</a>`
            })
    }
    /*function obtenerPilotos(url) {
        return fetch(url)
            .then((r) => r.json())
            .then((e) => {
                const piloto = document.createElement("p")
                piloto.innerHTML = `<a href="pilotos.html?id=${url}">${e.nombre}</a>`
                let li = document.createElement("li")
                li.appendChild(piloto)
                dom["pilotos"].appendChild(li)
                
            })
    }*/
    function obtenerPilotos(url) {
        return fetch(url)
            .then((r) => r.json())
            .then((e) => {

                const idUrl = obtenerID(url)
                dom['pilotos'].innerHTML += `<li><a href="pilotos.html?id=${idUrl}">${e.nombre}</a></li>`
            })

    }
function obtenerEquipos(url) {
    return fetch(url)
        .then((r) => r.json())
        .then((e) => {
            const idUrl = obtenerID(url)
            dom['equipos'].innerHTML += `<li><a href="equipos.html?id=${idUrl}">${e.nombre}</a></li>`
        })

}
    /*function obtenerEquipos(url) {
        return fetch(url)
            .then((r) => r.json())
            .then((e) => {
                const equipo = document.createElement("p")
                equipo.innerHTML = `<a href="equipos.html?id=${url}">${e.nombre}</a>`
                let li = document.createElement("li")
                li.appendChild(equipo)
                dom["equipos"].appendChild(li)
            })
    }*/



    function obtenerID(url) {
        return Number(url.match(/([0-9]*)\/?$/)[1]);

    }

/*function obtenerPilotos() {


    let URL = "http://localhost:3000/api/pilotos";
    fetch(URL).then(r => r.json()).then(data => {
        console.log(data);
        //let nombre = dom['resumen'];
        // nombre.innerHTML = data[0].nombre;

    })
}*/

