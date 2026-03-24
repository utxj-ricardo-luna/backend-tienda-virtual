'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbb_producto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbb_producto.init({
    nombre: {
      type:DataTypes.STRING(100),
      allowNull:false
    },
    descripcion: {
      type:DataTypes.STRING(150),
      allowNull:false
    },
    precio: {
      type:DataTypes.DECIMAL(10, 2),
      allowNull:false
    },
    stock: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    id_categoria: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'tbb_producto',
  });
  //----------------------------------------------
  tbb_producto.associate = (models) => {
    tbb_producto.belongsTo(models.tbc_categoria, {
      foreignKey: 'id_categoria',
      as: 'tbc_categoria'
    });
    tbb_producto.hasMany(models.tbd_carrito_detalle, {
      foreignKey: 'id_producto',
      as: 'tbd_carrito_detalle'
    });
  };
//------------------------------------------------
  return tbb_producto;
};