const regularUser = require('../models/regularUser/regularUser');
const bycrypt = require("bcryptjs")

exports.createRegularUser = async ({ fullName, userName, email, password, contactNumber, address, city, country}) => {

  try {
    const encryptedPwd = await bycrypt.hash(password, 10)

    const newUser = await regularUser.create({
        fullName,
        userName,
        email:email.toLowerCase(),
        password : encryptedPwd,
        contactNumber,
        address,
        city,
        country,

      })

    return newUser;
  } catch (error) {
    return error;
  }

    
}
