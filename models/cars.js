'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    static associate(models) {
    }
  }
  Cars.init({
    id: DataTypes.UUID,
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cars',
  });
  return Cars;
};