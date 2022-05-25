const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const equipos = require('../data/equipos.json');

router.get('/', (req, res) => {
    res.json(equipos);
    console.log(equipos);
});
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const equipo = _.findWhere(equipos, { id });
    console.log(equipo);
    res.json(equipo);
});
router.get('/:id/nombre', (req, res) => {
    const { id } = req.params;
    const equipo = _.findWhere(equipos, { id });
    console.log(equipo.nombre);
    res.json(equipo.nombre);
});
router.get('/:id/coches', (req, res) => {
    const { id } = req.params;
    const equipo = _.findWhere(equipos, { id });
    console.log(equipo.coches);
    res.json(equipo.coches);
});
router.get('/:id/pilotos', (req, res) => {
    const { id } = req.params;
    const equipo = _.findWhere(equipos, { id });
    console.log(equipo.pilotos);
    res.json(equipo.pilotos);
});
router.get('/:id/:param', (req, res) => {
    const { id, param } = req.params;
    const equipo = _.findWhere(equipos, { id });
    console.log(equipo[param]);
    res.json(equipo[param]);
});
router.get('/:id/temporadas', (req, res) => {
    const { id } = req.params;
    const equipo = _.findWhere(equipos, { id });
    console.log(equipo.temporadas);
    res.json(equipo.temporadas);
});



module.exports = router;