'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('relogio', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      rel_descricao: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },

      rel_modelo: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },

      rel_tipo: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },

      rel_pulseira: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },

      rel_garantia: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      fab_codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'fabricante',
          key: 'id'
        },
      },

      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
     });
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('relogio');

  }
};