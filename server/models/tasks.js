'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tasks.init({
    task_title: DataTypes.STRING,
    task_desc: DataTypes.STRING,
    user_id: DataTypes.STRING,
    is_deleted: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};