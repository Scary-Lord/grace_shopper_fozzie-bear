const Sequelize = require('sequelize');
const db = require('./_db');
const User = require('./usersModel');

const Cart = db.define('cart',{
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  }
})

module.exports = Cart
