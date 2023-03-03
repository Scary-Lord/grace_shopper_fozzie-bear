const db = require('./_db');
const User = require('./usersModel');
const Categories  = require('./categoryModel');
const Products  = require('./productsModel');
const Cart  = require('./cartModel');
//place relations here

// User.hasOne(Cart)
// Cart.belongsToMany(User)
// Cart.hasMany(Products)

// Products.hasOne(Categories)
// Products.belongsTo(Categories)
// Categories.hasMany(Products)


module.exports = {
    db,
    User,
    Categories,
    Products,
    Cart
}
