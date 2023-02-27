const Sequelize = require('sequelize');

//set local db name to 'grace_shopper' to avoid errors when syncing
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/grace_shopper', { logging: false });

module.exports = db;