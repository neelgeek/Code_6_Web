exports.functionToCheckIfUserIsFarmer = (req, res, next) => {
    if (req.session.user.isFarmer)
        next();
    else {
        res.status(403).send('not allowed');
    }
}