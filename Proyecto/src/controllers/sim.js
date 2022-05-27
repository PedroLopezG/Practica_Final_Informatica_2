"use strict";


/*let btn = document.getElementById('btn');
btn.addEventListener('click', event => {
    almacenarDatos();
});*/  


function almacenarDatos(){
    let skill = document.getElementById('skill').value;
    console.log(skill);
    let exp = document.getElementById('exp').value;
    console.log(exp);
    let temporada = document.querySelector('#temporada').value
    console.log(temporada);
    
    simular(skill, exp, temporada)
}

function simular(s,e,t){
    /*Math.random() * (max - min) + min;*/
    let puntosskill = s * 200 /10
    let puntosexp = e * 200 /10
    let puntos = puntosskill + puntosexp
    console.log(puntos);
    puntuar(puntos,t);
}

function puntuar(p,t){
    let pos
    let carreras
    let equipos
    let pilotos
    if (t == "2020"){
        p = p - 50
        carreras = 17
        equipos = [
            "http://localhost:3000/api/equipos/1",
            "http://localhost:3000/api/equipos/2",
            "http://localhost:3000/api/equipos/3",
            "http://localhost:3000/api/equipos/4",
            "http://localhost:3000/api/equipos/5",
            "http://localhost:3000/api/equipos/6",
            "http://localhost:3000/api/equipos/7",
            "http://localhost:3000/api/equipos/8",
            "http://localhost:3000/api/equipos/9",
            "http://localhost:3000/api/equipos/10"
        ]
        pilotos = [
            "http://localhost:3000/api/pilotos/1",
            "http://localhost:3000/api/pilotos/2",
            "http://localhost:3000/api/pilotos/3",
            "http://localhost:3000/api/pilotos/4",
            "http://localhost:3000/api/pilotos/5",
            "http://localhost:3000/api/pilotos/6",
            "http://localhost:3000/api/pilotos/7",
            "http://localhost:3000/api/pilotos/8",
            "http://localhost:3000/api/pilotos/9",
            "http://localhost:3000/api/pilotos/10",
            "http://localhost:3000/api/pilotos/11",
            "http://localhost:3000/api/pilotos/12",
            "http://localhost:3000/api/pilotos/13",
            "http://localhost:3000/api/pilotos/14",
            "http://localhost:3000/api/pilotos/15",
            "http://localhost:3000/api/pilotos/16",
            "http://localhost:3000/api/pilotos/17",
            "http://localhost:3000/api/pilotos/18",
            "http://localhost:3000/api/pilotos/19",
            "http://localhost:3000/api/pilotos/20",
            "http://localhost:3000/api/pilotos/21",
            "http://localhost:3000/api/pilotos/22",
            "http://localhost:3000/api/pilotos/23"
        ]
        if (p > 347){
            pos = "Tu posicion simulada es: Primer puesto"
        }else if (p > 223){
            pos = "Tu posicion simulada es: Segundo puesto"
        }else if (p > 214){
            pos = "Tu posicion simulada es: Tercer puesto"
        }else if (p > 125){
            pos = "Tu posicion simulada es: Cuarto puesto"
        }else if (p > 119){
            pos = "Tu posicion simulada es: Quinto puesto"
        }else if (p > 105){
            pos = "Tu posicion simulada es: Sexto puesto"
        }else if (p > 98){
            pos = "Tu posicion simulada es: Octavo puesto"
        }else if (p > 97){
            pos = "Tu posicion simulada es: Noveno puesto"
        }else if (p > 75){
            pos = "Tu posicion simulada es: Decimo puesto"
        }else if (p <= 75){
            pos = "Estas fuera del top 10"
        }
        post(pos,t,carreras,pilotos,equipos)
    }else if (t == "2021"){
        carreras = 22
        equipos = [
            "http://localhost:3000/api/equipos/1",
            "http://localhost:3000/api/equipos/2",
            "http://localhost:3000/api/equipos/3",
            "http://localhost:3000/api/equipos/4",
            "http://localhost:3000/api/equipos/11",
            "http://localhost:3000/api/equipos/6",
            "http://localhost:3000/api/equipos/12",
            "http://localhost:3000/api/equipos/8",
            "http://localhost:3000/api/equipos/9",
            "http://localhost:3000/api/equipos/10"
        ]
        pilotos = [
            "http://localhost:3000/api/pilotos/1",
            "http://localhost:3000/api/pilotos/2",
            "http://localhost:3000/api/pilotos/3",
            "http://localhost:3000/api/pilotos/4",
            "http://localhost:3000/api/pilotos/5",
            "http://localhost:3000/api/pilotos/6",
            "http://localhost:3000/api/pilotos/8",
            "http://localhost:3000/api/pilotos/9",
            "http://localhost:3000/api/pilotos/10",
            "http://localhost:3000/api/pilotos/11",
            "http://localhost:3000/api/pilotos/12",
            "http://localhost:3000/api/pilotos/13",
            "http://localhost:3000/api/pilotos/16",
            "http://localhost:3000/api/pilotos/17",
            "http://localhost:3000/api/pilotos/20",
            "http://localhost:3000/api/pilotos/23",
            "http://localhost:3000/api/pilotos/24",
            "http://localhost:3000/api/pilotos/25",
            "http://localhost:3000/api/pilotos/26",
            "http://localhost:3000/api/pilotos/27"
        ]
        if (p > 395){
            pos = "Tu posicion simulada es: Primer puesto"
        }else if (p > 387){
            pos = "Tu posicion simulada es: Segundo puesto"
        }else if (p > 226){
            pos = "Tu posicion simulada es: Tercer puesto"
        }else if (p > 190){
            pos = "Tu posicion simulada es: Cuarto puesto"
        }else if (p > 165){
            pos = "Tu posicion simulada es: Quinto puesto"
        }else if (p > 160){
            pos = "Tu posicion simulada es: Sexto puesto"
        }else if (p > 159){
            pos = "Tu posicion simulada es: Septimo puesto"
        }else if (p > 115){
            pos = "Tu posicion simulada es: Octavo puesto"
        }else if (p > 110){
            pos = "Tu posicion simulada es: Noveno puesto"
        }else if (p > 81){
            pos = "Tu posicion simulada es: Decimo puesto"
        }else if (p <= 81){
            pos = "Estas fuera del top 10"
        }
    post(pos,t,carreras,pilotos,equipos)
    }
    console.log(pos);
    
}
function post(p,t,n,pilotos,e){
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/api/temporadas/", false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        "año": "Temporada simulada " + t,
        "edicion": "Edicion simulada ",
        "tupos": p,
        "resumen": "",
        "pilotos": pilotos,
        "carrerasDisputadas": "" + n,
        "equipos": e,
        
    }));
}

