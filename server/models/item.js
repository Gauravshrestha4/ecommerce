const {Sequelize, sequelize} = require('../db/connection');

const Model = Sequelize.Model;

class Item extends Model{}
Item.init({
    itemId:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
    },

    brand:{
        type: Sequelize.STRING,
        allowNull: false
    },

    name:{
        type: Sequelize.STRING,
        allowNull: false
    },

    price : {
        type: Sequelize.FLOAT,
        allowNull: false
    },

    short_description :{
        type: Sequelize. STRING,
        allowNull: false
    },

    description:{
        type: Sequelize.STRING,
        allowNull: false
    },

    image: {
        type: Sequelize.STRING,
        allowNull: true
    },

    discount:{
        type: Sequelize.INTEGER,
        allowNull: true
    },

    category:{
        type: Sequelize.STRING,
        allowNull: true
    },

    freeDelivery:{
        type: Sequelize.BOOLEAN,
        allowNull: true
    },

    manufacturer:{
        type: Sequelize.STRING,
        defaultValue: 'Pride Sports'
    }
},{
    sequelize,
    freezeTableName: true,
    modelName: 'Items',
    timestamps: true
})

Item.sync({
    force: false
})
.then(() => {
    console.log(`Item table synced ..!!`)
})
.catch((error) => {
    console.log(`Item table could not be synced ..!!`)
})