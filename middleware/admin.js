
require('dotenv').config();
const jwt = require("jsonwebtoken");
const jwtAdminSecret = process.env.JWT_ADMIN_PASSWORD;



function adminMiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,jwtAdminSecret)

    if(decoded){
        req.userId = decoded.id;
        next()
    }else{
        res.status(403).json({
            massage : "You are not signaed in "
        })
    }

}


module.exports ={
    adminMiddleware: adminMiddleware
}


