const Sequelize = require('sequelize');
const db = require('./_db');
const Products = require('./productsModel')

const Categories = db.define('categories',{
  id:{
    primaryKey:true,
    type:Sequelize.INTEGER,
    unique:true,
    allowNull:false,
},
  category:{
    type: Sequelize.STRING,
    allowNull: false
  },
  // productId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: Products,
  //     key: 'id'
  //   }
  // }
})

module.exports = Categories;