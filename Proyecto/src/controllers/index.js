"use strict";

let dom = {}

window.onload = () => {
    dom['listado'] = document.getElementById('listado');
    dom['resumen'] = document.getElementById('resumen');

    clear();
    
    obtenerTemporadas();
    obtenerPilotos();

}

function clear() {
    dom['resumen'].innerHTML = ''
    dom['listado'].innerHTML = '<ul></ul>'
    //dom['ul'] = dom['listado'].getElementByTagName('ul')[0]
}

function addItem(item) {
    let a = document.createElement('a')
    let id = item.id
    a.innerHTML = item.año
    a.href = `temporadas.html?id=${id}`
    let li = document.createElement('li')
    li.onmouseover = () => {
        dom['resumen'].innerHTML = item.resumen
    }
}

function obtenerTemporadas() {
    let URL = "http://localhost:3000/api/temporadas";
    fetch(URL)
        .then(r => r.json()).then(data => console.log(data))


}
function obtenerPilotos() {
    let URL = "http://localhost:3000/api/pilotos";
    fetch(URL).then(r => r.json()).then(data => {
        console.log(data);

    })
}