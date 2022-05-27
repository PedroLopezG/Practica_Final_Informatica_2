"use strict";


/*let btn = document.getElementById('btn');
btn.addEventListener('click', event => {
    almacenarDatos();
});*/

let dom = {};
window.onload = () => {
    dom['listado'] = document.getElementById('listado');
    

}
function almacenarDatos() {
    let skill = document.getElementById('skill').value;
    console.log(skill);
    let exp = document.getElementById('exp').value;
    console.log(exp);
    let temporada = document.querySelector('#temporada').value
    console.log(temporada);

    simular(skill, exp, temporada)
}

function simular(s, e, t) {
    /*Math.random() * (max - min) + min;*/
    let puntosskill = s * 200 / 10
    let puntosexp = e * 200 / 10
    let puntos = puntosskill + puntosexp
    console.log(puntos);
    puntuar(puntos, t);
}

function puntuar(p, t) {
    let pos
    let carreras
    if (t == "2020") {
        p = p - 50
        carreras = 17
        if (p > 347) {
            pos = "La posicion simulada es: Primer puesto"
        } else if (p > 223) {
            pos = "La posicion simulada es: Segundo puesto"
        } else if (p > 214) {
            pos = "La posicion simulada es: Tercer puesto"
        } else if (p > 125) {
            pos = "La posicion simulada es: Cuarto puesto"
        } else if (p > 119) {
            pos = "La posicion simulada es: Quinto puesto"
        } else if (p > 105) {
            pos = "La posicion simulada es: Sexto puesto"
        } else if (p > 98) {
            pos = "La posicion simulada es: Octavo puesto"
        } else if (p > 97) {
            pos = "La posicion simulada es: Noveno puesto"
        } else if (p > 75) {
            pos = "La posicion simulada es: Decimo puesto"
        } else if (p <= 75) {
            pos = "Estas fuera del top 10"
        }
        post(pos, t, carreras)
    } else if (t == "2021") {
        carreras = 22
        if (p > 395) {
            pos = "La posicion simulada es: Primer puesto"
        } else if (p > 387) {
            pos = "La posicion simulada es: Segundo puesto"
        } else if (p > 226) {
            pos = "La posicion simulada es: Tercer puesto"
        } else if (p > 190) {
            pos = "La posicion simulada es: Cuarto puesto"
        } else if (p > 165) {
            pos = "La posicion simulada es: Quinto puesto"
        } else if (p > 160) {
            pos = "La posicion simulada es: Sexto puesto"
        } else if (p > 159) {
            pos = "La posicion simulada es: Septimo puesto"
        } else if (p > 115) {
            pos = "La posicion simulada es: Octavo puesto"
        } else if (p > 110) {
            pos = "La posicion simulada es: Noveno puesto"
        } else if (p > 81) {
            pos = "La posicion simulada es: Decimo puesto"
        } else if (p <= 81) {
            pos = "Estas fuera del top 10"
        }
        post(pos, t, carreras)
    }
    console.log(pos);
}
function post(p, t, n) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/api/temporadas/", false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "año": "Temporada simulada " + t,
        "edicion": "Edicion simulada ",
        "tupos": p,
        "resumen": "",
        "carrerasDisputadas": "" + n,

    }));
}

