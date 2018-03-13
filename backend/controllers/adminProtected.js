//1.2 if user is not loggedIn we will show him all doubts 
const express = require('express');
const route = express.Router();
const fs = require('fs');
const userModel = require('../models/userModel');
const mongoose = require('mongoose');
const protect = require('../middlewares/authProtected')
// A route defined now we may use as mini app
//This is what express offers



module.exports.controllerFunction = function(app) {

	route.get('/get/all/farmers',(req,res)=>{
		let user = new userModel({});
		user.findAll('farmers')
		.then(farmerList =>{
			res.status(200).json(farmerList)
		})
		.catch(err =>{
			res.status(204).json(err.message)
		})

	})

	route.get('/get/all/buyers',(req,res)=>{
		let user = new userModel({});
		user.findAll()
		.then(buyersList =>{
			res.status(200).json(buyersList)
		})
		.catch(err =>{
			res.status(204).json(err.message)
		})

	})

	route.get('/get/all/truckCompanies',(req,res)=>{
		//to complete later
	})





    app.use('/admin', route);   //middleware has to be added



}