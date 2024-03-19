const regularUser = require('../../models/regularUser/regularUser');

exports.deleteRegularUser= async (req, res)=>{

    try{
        const { id } = req.params;

        const deletedUser = await regularUser.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(201).json({ message: 'User deleted successfully' });

    }catch (err) {
       
        res.status(500).json({ error: 'User delete failed', error:err.message });

      }
}