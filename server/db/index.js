const db = require('./_db');
const User = require('./usersModel');
const Categories  = require('./categoryModel');
const Products  = require('./productsModel');
const Cart  = require('./cartModel');
//place relations here

// user associations
User.hasOne(Cart, { foreignKey: 'userId' })

// cart associations
Cart.belongsTo(User, { foreignKey: 'userId' })
// Cart.hasMany(Products)

// category associations
// Products.belongsTo(Categories, { foreignKey: 'categoryId' })
// Categories.hasMany(Products, { foreignKey: 'categoryId' })

module.exports = {
    db,
    User,
    Categories,
    Products,
    Cart
}
