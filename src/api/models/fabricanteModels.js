const { Model, DataTypes } = require('sequelize');

class Fabricante extends Model{
    static init(sequelize){
        super.init({
            fab_nome: DataTypes.STRING,
            fab_fantasia: DataTypes.STRING,
            fab_pais: DataTypes.STRING,
            fab_fundacao: DataTypes.INTEGER,
        },{
            sequelize,
            tableName: 'fabricante',
        }

        );
        return this;
    }
}

module.exports = Fabricante;