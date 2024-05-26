const regularUser = require('../../models/regularUser/regularUser');

exports.deleteRegularUser= async (req, res)=>{

    try{
        const { id } = req.params;

        // Finding and deleting the user by id
        const deletedUser = await regularUser.findByIdAndDelete(id);

        // If user is not found, return a 404 error response
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Sending success response with status code 201 and a success message
        return res.status(201).json({ message: 'User deleted successfully' });

    }catch (err) {
       
        res.status(500).json({ error: 'User delete failed', error:err.message });

      }
}