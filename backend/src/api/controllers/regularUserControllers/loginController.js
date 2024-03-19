const regularUser = require('../../models/regularUser/regularUser');
const bycrypt = require("bcryptjs")

exports.loginUser = async (req, res) =>{
    try{
      const { email, password } = req.body;

      if (!(email && password)) {
        res.status(400).send("All inputs are required");
      }

      const user = await regularUser.findOne({ email });
      if (!user) {
        return res.status(401).send("User not found");
      }

       const isPasswordValid = await bycrypt.compare(password, user.password);

       if (!isPasswordValid) {
        return res.status(401).json({ message: 'Authentication failed. Password is incorrect'});
      }

      res.status(201).json({ message: 'Login Successful', user:user});
        
        
    }catch (error) {
        console.error(error);
        res.status(500)
      }
    
}