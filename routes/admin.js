const {Router} = require("express");
const adminRouter = Router();
const {adminModel, courseModel} = require("../db");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const jwtAdminSecret = process.env.JWT_ADMIN_PASSWORD;
const {adminMiddleware} = require("../middleware/admin")



adminRouter.post('/signup',async function(req, res) {
  
  try {
    const { email, password, firstname, lastname } = req.body;


    if (!adminModel) {
      throw new Error("AdminModel is undefined");
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
  
  adminRouter.post('/course',adminMiddleware, async function(req, res) {
    const adminId = req.userId;

    const{title, description, imageUrl, price}= req.body;
    const course = await courseModel.create({
      title, description, imageUrl, price, creatorId: adminId
    })
    res.json({
      massage: "Course Created",
      courseId: course._id
    })
  })
  
  adminRouter.put('/course',adminMiddleware, async function(req, res) {
    
    const adminId = req.userId;

    const{title, description, imageUrl, price, courseId}= req.body;
    const course = await courseModel.updateOne({
      _id: courseId,
      creatorId: adminId
    },{
      title, description, imageUrl, price, creatorId: adminId
    })
    res.json({
      massage: "Course updated",
      courseId: course._id
    })
  })
  
  adminRouter.get('/course/bulk',adminMiddleware, async function(req, res) {

    const adminId =req.userId;
    const courses = await courseModel.find({
      creatorId:adminId
    })
    res.json({
      massage: "all courses",
      courses
    })
  })
  

module.exports ={
    adminRouter: adminRouter
}