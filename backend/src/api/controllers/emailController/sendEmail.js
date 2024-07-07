const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  try {
    const { email, pin } = req.body;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "www.ravindunethsararc@gmail.com",
        pass: "mtef zmtj brhf yoho",
      },
    });

    let mailOptions = {
      from: "www.ravindunethsararc@gmail.com",
      to: email,
      subject: "Your PIN Code",
      text: `Your PIN code is ${pin}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Email successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};
