const _sequelize = require('../config/db');
const DataTypes=require('sequelize');
const User=require('./userModel')
const Product=_sequelize.define('Products',{
    product_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT
    },
    owner_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:User,
            key:'user_id'
        }
    },
});
const createProduct=async()=>{
    await Product.sync({force:true});
    console.log('Product table is created...')
}
createProduct();
module.exports={Product,createProduct}
