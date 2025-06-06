'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class expense extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  expense.init({
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'expense',
  });
  return expense;
};