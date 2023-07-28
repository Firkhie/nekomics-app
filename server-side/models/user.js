'use strict';
const {
  Model
} = require('sequelize');
const { hashPass } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Bookmark, { foreignKey: 'UserId' })
      User.hasMany(models.History, { foreignKey: 'UserId' })
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Username already existed'
      },
      validate: {
        notNull: {
          msg: 'Username is required'
        },
        notEmpty: {
          msg: 'Username is required'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'Email already existed'
      },
      validate: {
        notNull: {
          msg: 'Email is required'
        },
        notEmpty: {
          msg: 'Email is required'
        },
        isEmail: {
          msg: 'Input must be an email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password is required'
        },
        notEmpty: {
          msg: 'Password is required'
        },
        len: {
          args: 6,
          msg: 'Password minimum length is 6'
        }
      }
    },
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPass(user.password);
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};