const {Router} = require("express");
const courseRouter = Router();

 
      courseRouter.post('/purchase', function(req, res) {
        res.json({
          massage: "buy endpoint"
        })
      })
      courseRouter.get('/preview', function(req, res) {
        res.json({
          massage: "preview Courses endpoint"
        })
      })
      


module.exports = {
  courseRouter: courseRouter
}