
require('dotenv').config();
const jwt = require("jsonwebtoken");
const jwtUserSecret = process.env.JWT_USER_PASSOWRD;



function userMiddleware(req,res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,jwtUserSecret)

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
    userMiddleware: userMiddleware
}


