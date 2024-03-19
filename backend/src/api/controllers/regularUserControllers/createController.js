const { createRegularUser } = require('../../services/regularUserServices')

exports.createRegularUser= async (req, res)=>{

    try{
        const { fullName, userName, email, password, contactNumber, address, city, country} = req.body;

        const newUser = createRegularUser({ fullName, userName, email, password, contactNumber, address, city, country});
        
        return res.status(201).json({ message: 'User created successfully' });

    }catch (err) {
        if (err.name === 'ValidationError') {
          const validationErrors = err.message; 
          return res.status(400).json({ error: 'User creation failed', details: validationErrors });
        } else {
        
          res.status(500).json({ error: 'User creation failed', details: err });
        }
      }
}