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