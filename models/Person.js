const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Person = sequelize.define('Person', {
     index: {
          type: DataTypes.INTEGER,
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
          type: DataTypes.DATEONLY,
          allowNull: false
     },

     jobTitle: {
          type: DataTypes.STRING,
          allowNull: false
     },


},
     { 
          tableName: 'Person',
          timestamps: false
     });

Person.sync();

module.exports = Person;