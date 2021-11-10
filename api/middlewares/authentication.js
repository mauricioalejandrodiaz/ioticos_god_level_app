const jwt = require('jsonwebtoken'); 
<<<<<<< HEAD
let checkAuth = (req, res, next) => {
    let token = req.get('token');
    jwt.verify(token, "securePasswordHere", (err, decoded) => {
=======

let checkAuth = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, "securePasswordHere", (err, decoded) => {

>>>>>>> 30a34ac528f454914434031526537c411f60b311
        if (err){
            return res.status(401).json({
              status: "error",
              error: err  
            });
        }
<<<<<<< HEAD
        req.userData = decoded.userData;        
        next();
    });
}
=======

        req.userData = decoded.userData;

        next();

    });

}

>>>>>>> 30a34ac528f454914434031526537c411f60b311
module.exports = {checkAuth}