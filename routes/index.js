const express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');
var productSchema = require('../models/productSchema.js');
let Product = mongoose.model('product',productSchema);
const csvFilePath = "/home/ruchika/NodeJs/expressDemo/MongoAssignment/readCSV/xyz.csv";
const csv = require('csvtojson');

mongoose.connect('mongodb://localhost/readCSV', { useNewUrlParser: true });
console.log("Connected to database readCSV");
var db = mongoose.connection;


///Push data into mongoDB
	var result = {};
	csv().fromFile(csvFilePath).then((jsonObj)=>{
	console.log(jsonObj);
	result = jsonObj;

	db.collection('products').insert({result})
.then(function(err, res) {
	if(err){
		console.log(err);
	}
	else{
		console.log(res);
	}
  
});

});





module.exports = router;


