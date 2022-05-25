const { Router } = require('express');
const router = Router();


router.get('/test', (req, res) => {
    const data = {
        "name": "Fernando",
        "lastname": "Alonso",
    }
    console.log(data);
    res.json(data);
});
module.exports = router;