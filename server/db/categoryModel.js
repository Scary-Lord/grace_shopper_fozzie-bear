const Sequelize = require('sequelize');
const db = require('./_db');
const productsModel = require('./productsModel')

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
  }
})

module.exports = Categories;