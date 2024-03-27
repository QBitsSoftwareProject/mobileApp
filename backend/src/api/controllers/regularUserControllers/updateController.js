const { updateRegularUser } = require('../../services/regularUserServices')
const regularUser = require('../../models/regularUser/regularUser');

exports.updateRegularUser= async (req, res)=>{

    try{
        const { fullName, userName, email, contactNumber, address, city, country} = req.body;
        const { id } = req.params;

        const updateUser = { fullName, userName, email, contactNumber, address, city, country};

        await regularUser.findByIdAndUpdate(id, updateUser);

        return res.status(201).json({ message: 'User updated successfully' });

    }catch (err) {
        if (err.name === 'ValidationError') {
          const validationErrors = err.message; 
          return res.status(400).json({ error: 'User update failed', details: validationErrors });
        } else {
        
          res.status(500).json({ error: 'User update failed', details: err });
        }
      }
}