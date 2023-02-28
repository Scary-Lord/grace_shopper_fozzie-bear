const Sequelize = require('sequelize');
const db = require('./_db');
const usersModel = require('./usersModel')
const productsModel = require('./productsModel')

const Cart = db.define('cart',{
  user: {
    type: Sequelize.INTEGER,
    references: {
      model: usersModel,
      key: 'id'
    }
  },
  products: {
    type: Sequelize.INTEGER,
    references: {
      model: productsModel,
			key: 'id'
    }
  }
})

module.exports = Cart