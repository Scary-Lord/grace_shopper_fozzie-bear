
const Sequelize = require('sequelize');
const db = require('./_db');

const User = db.define('user', {
    id:{
        primaryKey:true,
        type:Sequelize.INTEGER,
        unique:true,
        allowNull:false,
    },
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
    state:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    zipcode:{ type: Sequelize.INTEGER, validate:{ min:00000, max:99999}},

   

  
});

module.exports = User;