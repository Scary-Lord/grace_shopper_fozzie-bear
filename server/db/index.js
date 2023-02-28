const db = require('./_db');
const Users = require('./usersModel');
const Category  = require('./categoryModel');
const Products  = require('./productsModel');
const Cart  = require('./cartModel');
//place relations here

Users.hasOne.Cart
Cart.belongsToMany.Users
Cart.hasMany.Products

Products.hasOne.Category
Products.belongsTo.Category
Category.hasMany.Products

module.exports = {
    db,
    Users,
    Category,
    Products,
    Cart
}