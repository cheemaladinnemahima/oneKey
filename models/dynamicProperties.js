const _sequelize = require('../config/db');
const DataTypes=require('sequelize');
const Product=require('./productModel')
const Dynamic_Properties=_sequelize.define('Dynamic_Properties',{
    property_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:true,
        references:{
            model:Product,
            key:'product'
        }
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    value_type:{
        type:DataTypes.ENUM("STRING", "CHAR", "TEXT", "INTEGER", "BIGINT", "FLOAT", "DOUBLE", "DECIMAL", "BOOLEAN", "DATE", "DATEONLY", "TIME", "DATEONLY", "ENUM", "JSON", "JSONB", "ARRAY"),
        allowNull:false,

    },
    value:{
        type:DataTypes.STRING(255),
        allowNull:false,
    },
});
const createDynamic_Propertiece=async()=>{
    await Dynamic_Properties.sync({force:true});
    console.log('Product table is created...')
}
createDynamic_Propertiece();
module.exports={Dynamic_Properties,createDynamic_Propertiece}