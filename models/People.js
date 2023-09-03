const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const People = sequelize.define('People', {
     index: {
          type: DataTypes.TINYINT,
          autoIncrement: true,
          primaryKey: true
     },

     userId: {
          type: DataTypes.STRING,
          allowNull: false,
     },

     firstName: {
          type: DataTypes.STRING,
          allowNull: false
     },

     lastName: {
          type: DataTypes.STRING,
          allowNull: false
     },

     sex: {
          type: DataTypes.STRING,
          allowNull: false
     },

     email: {
          type: DataTypes.STRING,
          allowNull: false
     },

     phone: {
          type: DataTypes.STRING,
          allowNull: false
     },

     dateOfBirth: {
          type: DataTypes.STRING,
          allowNull: false
     },

     jobTitle: {
          type: DataTypes.STRING,
          allowNull: false
     },


},
     { tableName: 'People', timestamps: false });

People.sync();

module.exports = People;