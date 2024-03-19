const regularUser = require('../../models/regularUser/regularUser');

exports.getRegularUsers= async (req, res)=>{

    try{

        const getUser = await regularUser.find();

        if (!getUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(201).json(getUser);

    }catch (err) {
       
        res.status(500).json({ error: 'Error fetching user', error:err.message });

      }
}

// get one user by Id ------------------------------------------------------------------------------------------------------------------

exports.getARegularUser= async (req, res)=>{

    try{
        const { id } = req.params;

        const getUser = await regularUser.findById(id);

        if (!getUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(201).json(getUser);

    }catch (err) {
       
        res.status(500).json({ error: 'User delete failed', error:err.message });

      }
}