const Sequelize = require('sequelize');
const db = require('./_db');
const User = require('./usersModel')
const Products = require('./productsModel')

const Cart = db.define('cart',{
  user: {
    type: Sequelize.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  // products: {
  //   type: Sequelize.ARRAY(Sequelize.INTEGER),
  //   defaultValue: [],
  //   references: {
  //     model: Products,
	// 		key: 'id'
  //   }
  // }
})

module.exports = Cart
