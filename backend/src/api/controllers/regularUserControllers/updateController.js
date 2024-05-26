const regularUser = require('../../models/regularUser/regularUser');

exports.updateRegularUser= async (req, res)=>{

    try{
      // Destructuring the request body to extract user details
        const { fullName, userName, email, contactNumber, address, city, country, proPic} = req.body;

         // Extracting the user ID from request parameters
        const { id } = req.params;

        // Creating an object with updated user details
        const updateUser = { fullName, userName, email, contactNumber, address, city, country, proPic};

        // Finding and updating the user by ID
        await regularUser.findByIdAndUpdate(id, updateUser);

        // Sending success response with status code 201 and a message
        return res.status(201).json({ message: 'User updated successfully' });

    }catch (err) {
      // Handling validation errors
        if (err.name === 'ValidationError') {
          const validationErrors = err.message; 
          return res.status(400).json({ error: 'User update failed', details: validationErrors });
        } else {
        
          res.status(500).json({ error: 'User update failed', details: err });
        }
      }
}