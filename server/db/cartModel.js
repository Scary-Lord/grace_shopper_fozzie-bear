const Sequelize = require('sequelize');
const db = require('./_db');
const usersModel = require('./usersModel')
const productsModel = require('./productsModel')

const Cart = db.define('categories',{
  user: {
    type: Sequelize.INTEGER,
    references: {
      model: usersModel,
      key: 'id'
    }
  },
  products: {
    references: {
      model: productsModel,
			key: 'id'
    }
  }
})

module.exports = Cart