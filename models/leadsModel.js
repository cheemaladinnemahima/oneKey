const _sequelize = require('../config/db');
const DataTypes=require('sequelize');
const Product=require('./productModel')
const Leads=_sequelize.define('leads',{
    lead_id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    product_id:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    leads_info:{
        type:DataTypes.JSON,
        references:{
            model:Product,
            key:'Product_id'
        }
    }
});
const createLeads=async()=>{
    await Leads.sync({force:true});
    console.log('Product table is created...')
}
createLeads();
module.exports={Leads,createLeads}