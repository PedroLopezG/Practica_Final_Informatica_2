const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');
router.get('/', async (req, res) => {
    const response = await fetch('http://ergast.com/api/f1/drivers.JSON');
    const pilotos = await response.json();
    console.log(pilotos);
    res.send(pilotos);
});

module.exports = router;