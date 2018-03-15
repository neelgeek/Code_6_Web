exports.functionToCheckIfUserIsFarmer = (req, res, next) => {

    if (req.session.user!=undefined && req.session.user.isFarmer && !req.session.user.isBlocked ){
        next();
    }
    else {
        res.status(403).send('not allowed');
    }
}

exports.functionToCheckIfUserIsBuyer = (req,res,next) =>{
	if(req.session.user != undefined && !req.session.user.isFarmer  && !req.session.user.isBlocked)
		next();
	else
		res.status(403).send('not allowed');
}

<<<<<<< HEAD
=======
exports.checkifTruckCompany = (req,res,next) =>{
  if(req.session.truckadmin != undefined )
    next();
  else
    res.status(403).send('not allowed');
}
>>>>>>> 3eb32943d3c41782eee68ff3377d5f433cb08327
