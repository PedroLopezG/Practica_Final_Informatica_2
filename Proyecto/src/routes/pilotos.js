const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const pilotos = require('../pilotos.json');

router.get('/', (req, res) => {
    res.json(pilotos);
    console.log(pilotos);
});

module.exports = router;