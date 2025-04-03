const {Router} = require("express");
const adminRouter = Router();
const {adminModel} = require("../db")




adminRouter.post('/signup', function(req, res) {
    res.json({
      massage: "Signup endpoint admin"
    })
  })
  
  adminRouter.post('/signin', function(req, res) {
    res.json({
      massage: "signin endpoint admin"
    })
  })
  
  adminRouter.post('/course', function(req, res) {
    res.json({
      massage: "signin endpoint admin"
    })
  })
  
  adminRouter.put('/course', function(req, res) {
    res.json({
      massage: "signin endpoint admin"
    })
  })
  
  adminRouter.get('/course/bulk', function(req, res) {
    res.json({
      massage: "signin endpoint admin"
    })
  })
  

module.exports ={
    adminRouter: adminRouter
}