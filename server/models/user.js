const {Sequelize, sequelize}= require('../db/connection');

const Model = Sequelize.Model;

/*Model class */
class User extends Model {
    getfullName(){
        return (this.firstName + this.lastname)
    }

}

User.init({
    /** define attributes of this model */
    userid:{
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4 
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    phone:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },

    lastname:{
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            isEmail: true
        }
    },

    /*this must be a different table as we cant store arrays or nested documents in mysql */
    // tokens:{
    //     auth:{
    //         type: Sequelize.STRING
    //     },
    //     token:{
    //         type:  [Sequelize.STRING]
    //     }
    // }
},
{
    /**define options for this model */
    sequelize,
    freezeTableName: true, /** dont't plularise the table name */
    modelName: 'Users', /**name of the table */
    timestamps: true /* createdAt and updatedAt fields need to be created */
})


// === This will change in production code , will use migration according to docs (unknown concept so far)=== //
User.sync({
    force: false /** true : drop table if it already exists */
})
.then(() => {
    console.log('User Table synced');
    // User.create({
    //     firstName: 'shourya',
    //     lastname: 'mittal',
    //     phone:'9667088044',
    //     email:'shourya.mittal@a.com'
    // })
    // .then(() => {
    //     console.log('Fakse user created Successfully ..!!');
    // })
    // .catch((error) => {
    //     console.log('User could not be created ..!!');
    // })
})
.catch((error) => {
    console.log(`User Table could not be synced ..!!`)
})
