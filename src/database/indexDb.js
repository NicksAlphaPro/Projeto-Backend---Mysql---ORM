const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const conexao = new Sequelize(dbConfig);

const fabricante = require('../api/models/fabricanteModels.js')
const relogio = require('../api/models/relogioModels.js')

try {
    conexao.authenticate();
    console.log('Conexão estabelecida!!!');
} catch (error) {
    console.log('Conexão não estabelecida!!!', error);
}

fabricante.init(conexao);
relogio.init(conexao);

module.exports = conexao;