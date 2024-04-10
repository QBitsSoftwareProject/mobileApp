const regularUser = require('../../models/regularUser/regularUser');
const doctorModel = require("../../models/doctor/doctor")

const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { TOKEN_KEY } = require("../../../config/env");


exports.loginUser = async (req, res) =>{
    try{
      const { email, password } = req.body;

      if (!(email && password)) {
        res.status(400).send("All inputs are required"); 
      }

      //find user
      let user = await doctorModel.findOne({ email });

      if (!user) {
        user = await regularUser.findOne({ email });

      }
      
      //password encryption
       const isPasswordValid = await bycrypt.compare(password, user.password);
       
       if (!isPasswordValid) {
        return res.status(401).json({ message: 'Authentication failed. Password is incorrect'});
      }

      //create a new token
      
      const token = jwt.sign({user_id:user._id}, TOKEN_KEY)
      
      
      res.status(201).header("authtoken",token).json({ message: 'Login Successful', user:user});
        
        
    }catch (err) {
        //console.error(err); 
        res.status(500).json({ error: 'Login is failed', error:err.message }); 
      }
    
}