const {Sequelize, sequelize} = require('../db/connection');
const Model = Sequelize.Model;

class Order extends Model{}
Order.init({
    orderId:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    userid: {
        type: Sequelize.UUID,
        validate:{
            isUUID: true
        },
        allowNull: false
    },

    itemId:{
        type: Sequelize.UUID,
        validate:{
            isUUID: true
        },
        allowNull: false
    },

    orderAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },

    orderAmt:{
        type: Sequelize.FLOAT,
        allowNull: false
    },

    orderDateTIme: {
        type: Sequelize.DATE,
    }
},{
    sequelize,
    freezeTableName: true,
    modelName: 'Orders',
    timestamps: true
})

Order.sync({
    force: false,
})
.then(() => {
    console.log(`Orders table synced ..!!`);
})
.catch((error) => {
    console.log(`Orders table could not be suynced ..!!`)
})