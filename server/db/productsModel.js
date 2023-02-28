const Sequelize =require('sequelize');
const db = require('./_db');

const Products = db.define('products', {
    price:{ type: Sequelize.INTEGER,
       validate:{ min: .99 }
      },

    name: { type: Sequelize.STRING,
       notNull: true,
        notEmpty: true
      },

    imageUrl: {
        type: Sequelize.TEXT,
        isUrl: true,
        defaultValue: "https://static.thenounproject.com/png/11204-200.png",
      },

      Quantity:{ type: Sequelize.INTEGER,
         validate:{ min: 0 }
        },

     description: { type: Sequelize.TEXT,
       notNull: true,
        notEmpty: true 
      },

     shippingInfo:{type: Sequelize.TEXT
      , notNull: true,
       notEmpty: true 
      },

     reviewRatings:{type: Sequelize.TEXT,
       notNull: true,
        notEmpty: true 
      },

     Category:{type: Sequelize.TEXT,
       notNull: true,
        notEmpty: true
      }

    


  
 
})

module.exports  = Products;