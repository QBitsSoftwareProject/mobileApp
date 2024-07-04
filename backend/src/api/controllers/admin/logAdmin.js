const regularUser = require("../../models/regularUser/regularUser");

exports.logAdmin = async (req, res) => {
    try {
        const { email } = req.body;
        const checkUser = await regularUser.findOne({ email });

        //check email with doctor model
        const checkDoctor = await doctorModel.findOne({ email });

        if (!checkUser && !checkDoctor) {
            return res.json({
                message: "User with this email does not exist.",
                user: null,
            });
        }

        res.status(200).json({
            message: "User with this email already exists.",
            user: checkUser._id,
        });
    } catch (error) {
        res
            .status(500)
            .json({ error: "Error fetching user", message: error.message });
    }
};
