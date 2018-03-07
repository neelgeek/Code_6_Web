//1.2 if user is not loggedIn we will show him all doubts 
var express = require('express');
var route = express.Router();
const fs = require('fs')
// A route defined now we may use as mini app
//This is what express offers



module.exports.controllerFunction = function(app) {
   

route.get('/',(req,res)=>{
	res.send("hello")
	//use this coding guide lines
})



    app.use('/', route);



}
