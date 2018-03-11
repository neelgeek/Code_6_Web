exports.functionToCheckIfUserIsFarmer = (req, res, next) => {
    if (req.session.user!=undefined && req.session.user.isFarmer )
        next();
    else {
        res.status(403).send('not allowed');
    }
}

exports.functionToCheckifUserIsBuyer = (req,res,next) =>{
	if(req.session.user != undefined && !req.session.user.isFarmer)
		next();
	else
		res.status(403).send('not allowed');
}