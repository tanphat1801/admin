const Sequelize = require('sequelize');

const db = new Sequelize('pharmacy', 'root', '', {
	host: 'localhost',
	dialect: 'mysql',
});

module.exports = db;
