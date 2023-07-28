'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      History.belongsTo(models.User, { foreignKey: 'UserId' })
    }
  }
  History.init({
    ComicId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ChapterId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'History',
  });
  return History;
};