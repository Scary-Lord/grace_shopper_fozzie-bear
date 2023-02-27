const Sequelize = require('sequelize');
const db = require('./_db');

const User = db.define('user', {
    fName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    lName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    email:{ type: Sequelize.STRING, allowNull: false, notEmpty: true,  
        validate:{isEmail: true} },

    city:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    State:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    zipcode:{ type: Sequelize.INTEGER, validate:{ min:00000, max:99999}},

    // orderhistory:{}  leaving blank for now. 

    
});

module.exports = User;