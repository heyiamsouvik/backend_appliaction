
const {Router} = require("express");
const {userModel}= require("../db");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const jwtUserSecret = process.env.JWT_USER_PASSOWRD;
const useRouter = Router();



useRouter.post('/signup',async function(req, res) {

    try {
      const { email, password, firstname, lastname } = req.body;
  

      if (!userModel) {
        throw new Error("userModel is undefined");
      }
  
      await userModel.create({ email, password, firstname, lastname });
  
      res.status(201).json({ message: "Signup succeeded" });
  
    } catch (error) {
      console.error("Error in signup:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

  
  useRouter.post('/signin', async function(req, res) {

    const { email, password } = req.body;
    const user = await userModel.findOne({
      email,
      password
    });
    if(user){
      const token = jwt.sign({
        id: user._id
      }, jwtUserSecret);

      res.json({
        token: token
      })

    }
    else{
      res.status(403).json({
        massage: "incorrect credentials!"
      })

    }
    
  })
  
  
  useRouter.get('/purchases', function(req, res) {
    res.json({
      massage: "my course endpoint"
    })
  })
  
  



module.exports = {
    useRouter: useRouter
    
}