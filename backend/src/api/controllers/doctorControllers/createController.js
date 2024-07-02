const doctorModel = require("../../models/doctor/doctor");
const bcrypt = require("bcryptjs");

exports.createDoctor = async (req, res) => {
  try {
    const {
      fullName,
      userName,
      email,
      password,
      contactNumber,
      address,
      city,
      country,
      licenseSide1,
      licenseSide2,
      workplace,
      qualification,
      availableDays,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
      proPic,
      bio,
    } = req.body;

    const encryptedPwd = await bcrypt.hash(password, 10);

    const newUser = await doctorModel.create({
      fullName,
      userName,
      email: email.toLowerCase(),
      password: encryptedPwd,
      contactNumber,
      address,
      city,
      country,
      licenseSide1,
      licenseSide2,
      workplace,
      qualification,
      availableDays,
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday,
      proPic,
      bio,
    });

    await adminNotification(
      "Your registration is pending. We will notify you once registration is complete. ",
      "system",
      doctorId.id
    );

    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    if (err.name === "ValidationError") {
      const validationErrors = err.message;
      console.log(err);
      return res
        .status(400)
        .json({ error: "User creation failed", details: validationErrors });
    } else {
      console.log(err);
      res.status(500).json({ error: "User creation failed", details: err });
    }
  }
};
