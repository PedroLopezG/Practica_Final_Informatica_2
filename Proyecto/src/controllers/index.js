"use strict";

let dom = {}

window.onload = () => {
    dom['listado'] = document.getElementById('listado');
    dom['resumen'] = document.getElementById('resumen');

    clear();

    obtenerTemporadas();

}

function clear() {
    dom['resumen'].innerHTML = ''
    dom['listado'].innerHTML = '<ul></ul>'
    dom['listado'].innerHTML = '<h2>Temporadas:</h2>'
}

/*function addItem(item) {
    let a = document.createElement('a')
    let id = item.id
    let lista = dom['listado'];
    a.innerHTML = item.año
    a.href = `temporadas.html?id=${id}`
    let li = document.createElement('li')
    li.appendChild(a);
}*/

function obtenerTemporadas() {
    let URL = "http://localhost:3000/api/temporadas";
    fetch(URL)
        .then(r => r.json()).then(data => {
            console.log(data);
            for(let i=0; i<data.length; i++){
                console.log(data[i].año);
                dom['listado'].innerHTML += `<li><a href="temporadas.html?id=${data[i].id}">${data[i].año}</a></li>`
            }
        })
}



