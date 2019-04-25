// const DataTypes = require('sequelize');
// const sequelize = require('../sequelize');
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CustomerSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    phoneno : {
        type : String,
        required : true
    },
    image_url : {
        type : String,
    },
    is_active : {
        type : Number,
        required : true
    },
    is_email_verify : {
        type : Number,
        required : true,
        default : 1
    }
})

module.exports = Customer = mongoose.model("customer", CustomerSchema)

// const Customer = sequelize.define('customers',{
// 	id:{
// 		type: DataTypes.INTEGER(11),
// 		allowNull: false,
// 		primaryKey: true,
// 		autoIncrement: true
// 	},
// 	name:{
// 		type: DataTypes.STRING(100),
// 		allowNull: false,
// 		primaryKey: false,
// 		// autoIncrement: true
// 	},
// 	email:{
// 		type: DataTypes.STRING(100),
// 		allowNull: false,
// 		primaryKey: false,
// 		// autoIncrement: true
// 	},
// 	password:{
// 		type: DataTypes.STRING(100),
// 		allowNull: false,
// 		primaryKey: false,
// 		// autoIncrement: true
// 	},
// 	phoneno:{
// 		type: DataTypes.STRING(100),
// 		allowNull: false,
// 		primaryKey: false,
// 		// autoIncrement: true
// 	},
// 	image_url:{
// 		type: DataTypes.STRING(100),
// 		allowNull: true,
// 		primaryKey: false,
// 		// autoIncrement: true
// 	},
// 	is_active: {
//       type: DataTypes.INTEGER(1),
//       allowNull: false,
//       defaultValue: '1'
//     },
//     is_email_verify: {
//       type: DataTypes.INTEGER(1),
//       allowNull: false,
//       defaultValue: '1'
//     },

// });

// module.exports = Customer;
