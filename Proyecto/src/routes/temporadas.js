const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');
const temporadas = require('../temporadas.json');

router.get('/', (req, res) => {
    res.json(temporadas);
    console.log(temporadas);
});
module.exports = router;