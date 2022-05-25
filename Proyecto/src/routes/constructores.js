const { Router } = require('express');
const router = Router();
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    const response = await fetch(`https://ergast.com/api/constructors.json`);
    const constructores = await response.json();
    console.log(constructores);
    res.send(constructores);
}
);

module.exports = router;