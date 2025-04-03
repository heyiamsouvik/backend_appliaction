
const {Router} = require("express");
const useRouter = Router();



useRouter.post('/signup', function(req, res) {
    res.json({
      massage: "Signup endpoint"
    })
  })
  
  useRouter.post('/signin', function(req, res) {
    res.json({
      massage: "signin endpoint"
    })
  })
  
  
  useRouter.get('/purchases', function(req, res) {
    res.json({
      massage: "my course endpoint"
    })
  })
  
  



module.exports = {
    useRouter: useRouter
    
}