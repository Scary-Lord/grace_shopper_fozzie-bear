const Sequelize = require('sequelize');
const db = require('./_db');
const User = require('./usersModel');
const Products = require('./productsModel');

const Cart = db.define('cart',{
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  productsId: {
    type: Sequelize.INTEGER,
    references: {
      model: Products,
      key: 'id'
    }
  }
})

module.exports = Cart
