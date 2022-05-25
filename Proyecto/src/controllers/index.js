"use strict";

let dom = {}

window.onload = () => {
    dom['listado']=document.getElementById('listado')
    dom['resumen']=document.getElementById('resumen')

    clear()

    obtenerTemporadas()
        .then((r) => r.forEach(addItem))
}

function clear() {
    dom['resumen'].innerHTML = ''
    dom['listado'].innerHTML = '<ul></ul>'
    dom['ul'] = dom['listado'].getElementByTagName('ul')[0]
}

function addItem(item){
    let a = document.createElement('a')
    let id = item.id
    a.innerHTML = item.año
    a.href = `temporadas.html?id=${id}`
    let li = document.createElement('li')
    li.onmouseover = () => {
        dom['resumen'].innerHTML = item.resumen
    }
}

function obtenerTemporadas(){
    let URL = 'localhost:3000/temporadas/'
    return fetch(URL)
        .then((r) => r.json()).then(console.log(r))
}