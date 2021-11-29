const express = require('express');
const router = express.Router();
const relogioControllers = require('../controllers/relogioControllers.js');

router.get('/relogio', relogioControllers.index);

router.post('/relogio', relogioControllers.store);

router.put('/relogio/:codigo', relogioControllers.update);

router.delete('/relogio/:codigo', relogioControllers.delete);

module.exports = router;