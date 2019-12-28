const {Sequelize, sequelize} = require('../db/connection');
const Model = Sequelize.Model;

class Product extends Model {} 
Product.init({

    category: {
        type: Sequelize.STRING,
        required: true,
    },

    image: {
        type: Sequelize.STRING,
        defaultValue: 'URL for default picture.'
    }
},{
    sequelize,
    freezeTableName : true,
    modelName:'products',   
    timestamps: true
})

Product.sync({
    force: false
})
.then(() => {
    console.log('Product Table created !!');
})
.catch(() => {
    console.log('Product table could not be synced !!');
})


module.exports = Product;