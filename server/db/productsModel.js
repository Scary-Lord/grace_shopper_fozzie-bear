const Sequelize =require('sequelize');
const db = require('./_db');
const Categories = require('./categoryModel')

const Products = db.define('products', {
    id: { type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      notNull: true,
      notEmpty: true
    },

    price:{ type: Sequelize.DECIMAL,
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

      quantity:{ type: Sequelize.INTEGER,
         validate:{ min: 0 }
        },

     description: { type: Sequelize.TEXT,
       notNull: true,
        notEmpty: true
      },

     shippingInfo:{type: Sequelize.DECIMAL
      , notNull: true,
       notEmpty: true
      },

    //  category:{type: Sequelize.INTEGER,
    //     references: {
    //       model: categories,
    //       key: 'id'
    //       }
    //     }
      }
    )



module.exports  = Products;
