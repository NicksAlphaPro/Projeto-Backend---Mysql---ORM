const express = require('express');
const router = express.Router();
const fabricanteControllers = require('../controllers/fabricanteControllers.js');

router.get('/fabricante', fabricanteControllers.index);

router.post('/fabricante', fabricanteControllers.store);

router.put('/fabricante/:codigo', fabricanteControllers.update);

router.delete('/fabricante/:codigo', fabricanteControllers.delete);

module.exports = router;