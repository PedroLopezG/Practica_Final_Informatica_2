const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const pilotos = require('../data/pilotos.json');

router.get('/', (req, res) => { //para obtener todos los pilotos
    res.json(pilotos);
    console.log(pilotos);
});

router.get('/:id', (req, res) => { //para obtener un piloto por id
    const { id } = req.params;

    const piloto = _.findWhere(pilotos, { id });
    console.log(piloto);
    res.json(piloto);

}
);
router.get('/:id/nombre', (req, res) => { //obtener el nombre del piloto
    const { id } = req.params;
    const piloto = _.findWhere(pilotos, { id });
    console.log(piloto.nombre);
    res.json(piloto.nombre);
});
router.get('/:id/dorsal', (req, res) => {
    const { id } = req.params;
    const piloto = _.findWhere(pilotos, { id });
    console.log(piloto.dorsal);
    res.json(piloto.dorsal);
});
router.get('/:id/equipo', (req, res) => {
    const { id } = req.params;
    const piloto = _.findWhere(pilotos, { id });
    console.log(piloto.equipo);
    res.json(piloto.equipo);
});
router.get('/:id/campeonatos', (req, res) => {
    const { id } = req.params;
    const piloto = _.findWhere(pilotos, { id });
    console.log(piloto.campeonatos);
    res.json(piloto.campeonatos);
});
router.get('/:id/temporadas', (req, res) => {
    const { id } = req.params;
    const piloto = _.findWhere(pilotos, { id });
    console.log(piloto.temporadas);
    res.json(piloto.temporadas);
});
router.get('/:id/:param/:param2', (req, res) => {
    const { id, param, param2 } = req.params;
    const piloto = _.findWhere(pilotos, { id });
    console.log(piloto[param][param2]);
    res.json(piloto[param][param2]);
});



router.post('/', (req, res) => { //para crear un piloto nuevo
    const { nombre, equipo } = req.body;
    if (nombre, equipo) {
        const id = pilotos.length + 1;
        const nuevoPiloto = { id, nombre, equipo };

        pilotos.push(nuevoPiloto);
        res.json(nuevoPiloto);
    } else {
        console.log('No se pudo crear el piloto por falta de datos');
        res.status(400).json({
            error: 'Faltan datos'
        });
    }
});

router.delete('/:id', (req, res) => { //para borrar un piloto
    const { id } = req.params;
    const piloto = _.findWhere(pilotos, { id });
    if (!piloto) {
        console.log('No existe el piloto');
        res.status(404).json({
            message: 'El piloto no existe'
        })
    } else {
        res.json(piloto);
        pilotos.splice(pilotos.indexOf(piloto), 1);

        console.log('Piloto eliminado');
    }
});


router.put('/:id', (req, res) => { //para actualizar un piloto
    const { id } = req.params;
    const { nombre, equipo } = req.body;
    const piloto = _.findWhere(pilotos, { id });
    if (!piloto) {
        console.log('No existe el piloto');
        res.status(404).json({
            message: 'El piloto no existe'
        })
    } else {
        piloto.nombre = nombre;
        piloto.equipo = equipo;
        res.json(piloto);
        console.log('Piloto actualizado');
    }
});
module.exports = router;