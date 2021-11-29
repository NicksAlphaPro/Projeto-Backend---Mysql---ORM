const express = require('express');
const http = require('http');

const fabricanteRoutes = require('./api/routes/fabricanteRoutes.js');
const relogioRoutes = require('./api/routes/relogioRoutes.js')

require('./database/indexDb.js');

const app = express();

app.set('porta', 3336);
app.set('url', 'http://localhost:');

app.use(express.json());

app.use(fabricanteRoutes);
app.use(relogioRoutes);

http.createServer(app).listen(app.get('porta'), function() {
    console.log('\nServidor Rodando ' + app.get('url') + app.get('porta'));
});