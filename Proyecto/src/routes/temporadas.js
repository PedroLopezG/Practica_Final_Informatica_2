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