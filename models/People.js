const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const People = sequelize.define('People', {
    index: { 
        type: DataTypes.TINYINT,
        autoIncrement: true },

    userId: { type: DataTypes.STRING,
         allowNull: false,
         primaryKey: true },

    firstName: { type: DataTypes.STRING,
         allowNull: false },

    lastName: { type: DataTypes.STRING,
         allowNull: false },

    sex: { type: DataTypes.STRING,
         allowNull: false },

    email: { type: DataTypes.STRING,
         allowNull: false },

    phone: { type: DataTypes.STRING,
         allowNull: false },

    dateOfBirth: { type: DataTypes.DATE,
         allowNull: false },

    jobTitle: { type: DataTypes.STRING,
         allowNull: false },

},
 { tableName: 'People', timestamps: false });

Table.sync();

module.exports = People;