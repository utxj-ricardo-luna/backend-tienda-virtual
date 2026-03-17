'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbb_carritos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
       total: {
        allowNull:false,
        type: Sequelize.DECIMAL(10, 2)
      },
      estado: {
        type: Sequelize.ENUM('pendiente','proceso','enviada','recibida','cancelada','finalizada'),
        allowNull:false,
        defaultValue: 'pendiente'
      },
      fecha_creacion: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbb_carritos');
  }
};