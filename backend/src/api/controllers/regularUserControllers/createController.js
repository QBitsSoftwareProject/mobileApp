const { createRegularUser } = require('../../services/regularUserServices')

exports.createRegularUser= async (req, res)=>{

    try{
      // Destructuring user data from request body
        const { fullName, userName, email, password, contactNumber, address, city, country} = req.body;

        // Calling the createRegularUser service to create a new user
        const newUser = createRegularUser({ fullName, userName, email, password, contactNumber, address, city, country});
        
        // Sending success response with status code 201 and a success message
        return res.status(201).json({ message: 'User created successfully' });

    }catch (err) { 

      // Handling validation errors
        if (err.name === 'ValidationError') {
          const validationErrors = err.message; 

          // Sending validation error response with status code 400 and error details
          return res.status(400).json({ error: 'User creation failed', details: validationErrors });

        } else {
            // Handling other errors
            // Sending internal server error response with status code 500 and error details
          res.status(500).json({ error: 'User creation failed', details: err });
        }
      }
}