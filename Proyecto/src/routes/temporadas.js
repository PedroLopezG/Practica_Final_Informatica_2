const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');
const _ = require('underscore');
const temporadas = require('../data/temporadas.json');

router.get('/', (req, res) => {
    res.json(temporadas);
    console.log(temporadas);
});
module.exports = router;


router.get('/:id', (req, res) => {
    const { id } = req.params;
    const temporada = _.findWhere(temporadas, { id });
    console.log(temporada);
    res.json(temporada);
});

router.get('/:id/resumen', (req, res) => {
    const { id } = req.params;
    const temporada = _.findWhere(temporadas, { id });
    console.log(temporada.resumen);
    res.json(temporada.resumen);
});

router.get('/:id/año', (req, res) => {
    const { id } = req.params;
    const temporada = _.findWhere(temporadas, { id });
    console.log(temporada.año);
    res.json(temporada.año);
});
router.get('/:id/pilotos', (req, res) => {
    const { id } = req.params;
    const temporada = _.findWhere(temporadas, { id });
    console.log(temporada.pilotos);
    res.json(temporada.pilotos);
});
router.get('/:id/campeon', (req, res) => {
    const { id } = req.params;
    const temporada = _.findWhere(temporadas, { id });
    console.log(temporada.campeon);
    res.json(temporada.campeon);
});
router.get('/:id/carrerasDisputadas', (req, res) => {
    const { id } = req.params;
    const temporada = _.findWhere(temporadas, { id });
    console.log(temporada.carrerasDisputadas);
    res.json(temporada.carrerasDisputadas);
});



module.exports = router;