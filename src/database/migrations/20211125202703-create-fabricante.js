'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface. createTable  ('fabricante', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      fab_nome: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },

      fab_fantasia: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },

      fab_pais: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },

      fab_fundacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
     await queryInterface.dropTable('fabricante');
  
  }
};