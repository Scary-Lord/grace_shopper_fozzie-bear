const Sequelize = require('sequelize');
const db = require('./_db');
const productsModel = require('./productsModel')

const Categories = db.define('categories',{
  category:{
    type: Sequelize.STRING,
    allowNull: false
  },
  products: {
    type: Sequelize.INTEGER,
    references: {
      model: productsModel,
      key: 'id'
    }
  }
})

module.exports = Categories;