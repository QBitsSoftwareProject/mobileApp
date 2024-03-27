const userSchema = require("../../models/users/usersModels");

exports.createUser = async (req, res) => {

    try {
        
        const { name } = req.body;

        const newUser = new userSchema( {name} );

        await newUser.save();

        return res.state(210).json({ message:"New user created."});

    } catch (error) {
        
        return res.status(201).json({err:error});
    }
}