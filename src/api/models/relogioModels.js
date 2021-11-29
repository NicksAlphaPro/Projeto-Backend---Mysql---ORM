const { Model, DataTypes } = require('sequelize');

class Relogio extends Model{
    static init(sequelize){
        super.init({
            rel_descricao: DataTypes.STRING,
            rel_modelo: DataTypes.STRING,
            rel_tipo: DataTypes.STRING,
            rel_pulseira: DataTypes.STRING,
            rel_garantia: DataTypes.INTEGER,
            fab_codigo: DataTypes.INTEGER,
        },{
            sequelize,
            tableName: 'relogio',
        }

        );
        return this;
    }
}

module.exports = Relogio;