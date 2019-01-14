const mongoose = require('mongoose');

var productSchema = mongoose.Schema({

	Product_URL : {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},

	Brand_Name : {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},

	Product_Name : {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},

	Screencapture_Product_Page: {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},
	Primary_Product_Image: {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},
	Alt_Image1: {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},
	Alt_Image2: {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},
	Product_Description: {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},

	Price: {
		type: Number,
		unique: true,
		allowNull: false,
		index: true
	},

	Style_Number: {
		type: Number,
		unique: true,
		allowNull: false,
		index: true
	},
	Reviews: {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},
	Shoppability: {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},
	Brand_URL: {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	},
	Retailer_ID: {
		type: Number,
		unique: true,
		allowNull: false,
		index: true
	},
	Brand_ID: {
		type: Number,
		unique: true,
		allowNull: false,
		index: true
	},
	error: {
		type: String,
		unique: true,
		allowNull: false,
		index: true
	}
});

module.exports = productSchema;