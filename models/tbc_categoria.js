'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbc_categoria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbc_categoria.init({
    nombre: {
      type:DataTypes.STRING(150),
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'tbc_categoria',
  });
  //--------------------------------------------
  tbc_categoria.associate = (models) => {
    tbc_categoria.hasMany(models.tbb_producto, {
      foreignKey: 'id_categoria',
      as:'tbb_producto'
    })
  };
//---------------------------------------------
  return tbc_categoria;
};