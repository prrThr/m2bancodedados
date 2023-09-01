const { Sequelize } = require('sequelize');
require('dotenv').config();

const MYSQL_IP = process.env.MYSQL_IP;
const MYSQL_LOGIN = process.env.MYSQL_LOGIN;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const DATABASE = process.env.DATABASE;

const sequelize = new Sequelize(DATABASE, MYSQL_LOGIN, MYSQL_PASSWORD, {
    host: MYSQL_IP,
    dialect: "mysql"
});

module.exports = sequelize;
