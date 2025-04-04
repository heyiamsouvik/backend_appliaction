const {Router} = require("express");
const adminRouter = Router();
const {adminModel} = require("../db");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const jwtAdminSecret = process.env.JWT_ADMIN_PASSOWRD;




adminRouter.post('/signup',async function(req, res) {
  
  try {
    const { email, password, firstname, lastname } = req.body;


    if (!adminModel) {
      throw new Error("userModel is undefined");
    }

    await adminModel.create({ email, password, firstname, lastname });

    res.status(201).json({ message: "Signup succeeded" });

  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: "Internal server error" });
  }
  
  })
  
  adminRouter.post('/signin',async function(req, res) {
    const { email, password } = req.body;
    const admin = await adminModel.findOne({
      email,
      password
    });


    if(admin){
      const token = jwt.sign({
        id: admin._id
      }, jwtAdminSecret);

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
  
  adminRouter.post('/course', function(req, res) {
    res.json({
      massage: "signin endpoint admin"
    })
  })
  
  adminRouter.put('/course', function(req, res) {
    res.json({
      // massage: "signin endpoint admin"
    })
  })
  
  adminRouter.get('/course/bulk', function(req, res) {
    res.json({
      // massage: "signin endpoint admin"
    })
  })
  

module.exports ={
    adminRouter: adminRouter
}