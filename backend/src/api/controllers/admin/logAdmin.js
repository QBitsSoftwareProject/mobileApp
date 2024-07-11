const adminModel = require("../../models/admin/admin");

const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { TOKEN_KEY } = require("../../../config/env");

exports.loginAdmin = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!(userName && password)) {
      return res.status(400).send("All inputs are required");
    }

    //find admin
    let admin = await adminModel.findOne({ userName });

    if (!admin) {
      return res.status(404).send("Admin not found");
    }

    //password encryption
    const isPasswordValid = await bycrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Authentication failed. Password is incorrect" });
    }

    //create a new token
    const token = jwt.sign({ user_id: admin._id, role: "admin" }, TOKEN_KEY, {
      expiresIn: "24h",
    });

    res
      .status(201)
      .header("authtoken", token)
      .json({ message: "Login Successful", authtoken: token });
  } catch (err) {
    res.status(500).send({ error: "Login is failed", error: err.message });
  }
};
