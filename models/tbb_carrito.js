'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbb_carrito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbb_carrito.init({
    id_usuario: {
      allowNull:false,
      type: DataTypes.INTEGER
    },
    total: {
      allowNull:false,
      type: DataTypes.DECIMAL(10, 2)
    },
    estado: {
      type: DataTypes.ENUM('pendiente','proceso','enviada','recibida','cancelada','finalizada'),
      allowNull:false,
      defaultValue: 'pendiente'
    },
    id_usuario: {
      allowNull:false,
      type: DataTypes.INTEGER
    },
    fecha_creacion:{
      allowNull:false,
      type:DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'tbb_carrito',
  });

  tbb_carrito.associate = (models) => {
    tbb_carrito.belongsTo(models.tbc_usuarios, {
      foreignKey: 'id_usuario',
      as: 'tbc_usuario'
    });
  };

  return tbb_carrito;
};