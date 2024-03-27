const regularUser = require('../models/regularUser/regularUser');
const bycrypt = require("bcryptjs")

exports.createRegularUser = async ({ fullName, userName, email, password, contactNumber, address, city, country}) => {

  try {
    // Encrypting the password using bcrypt with a salt factor of 10
    const encryptedPwd = await bycrypt.hash(password, 10)

    // Creating a new regular user using the regularUser model and the provided data
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

  // Returning the newly created user
    return newUser;
    
  } catch (error) {
    return error;
  }

    
}
