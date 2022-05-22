const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const response = await fetch(`https://ergast.com/api/f1/drivers/${id}.json`);
    const pilotos = await response.json();
    console.log(pilotos);
    res.send(pilotos);
});
router.get('/', async (req, res) => {
    const response = await fetch(`https://ergast.com/api/f1/drivers.json`);
    const pilotos = await response.json();
    console.log(pilotos);
    res.send(pilotos);
});

module.exports = router;