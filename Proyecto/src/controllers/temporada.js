"use strict";

let dom = {}

window.onload = () => {
    dom['año'] = document.getElementById('año');
    dom['edicion'] = document.getElementById('edicion');
    dom['ncarreras'] = document.getElementById('ncarreras');
    dom['campeon'] = document.getElementById('campeon');
   
    obtenerDatos();

}


function obtenerDatos() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id = urlParams.get('id');
    let URL = `http://localhost:3000/api/temporadas/${id}`;
    fetch(URL).then(r => r.json()).then(data => {
        console.log(data);
        dom['año'].innerHTML = data.año;
        dom['edicion'].innerHTML = data.edicion;
        dom['ncarreras'].innerHTML = data.carrerasDisputadas;
        dom['campeon'].innerHTML = data.campeon;

    })
}

function obtenerID(url) {
    return Number(url.match(/([0-9]*)\/?$/)[1]);

}