// const DataTypes = require('sequelize');
// const sequelize = require('../sequelize');
const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

const UserSchema = new Schema({
	name : {
		type : String,
		required : true
	}
})


// const User = sequelize.define('users',{
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

// });

module.exports = User = mongoose.model("users", UserSchema)
