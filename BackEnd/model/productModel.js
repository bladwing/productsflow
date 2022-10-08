import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Product = db.define('products',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    },    
    height: {
        type: DataTypes.DOUBLE
    },
    width: {
        type: DataTypes.DOUBLE
    },
	length: {
        type: DataTypes.DOUBLE
    },
    weight: {
        type: DataTypes.DOUBLE
    },
    sku:{
        type: DataTypes.STRING
    },
    size: {
        type: DataTypes.DOUBLE
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }

},{
   
});

export default Product;