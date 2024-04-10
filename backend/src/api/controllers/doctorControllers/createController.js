const doctorModel = require("../../models/doctor/doctor")

exports.createDoctor= async (req, res)=>{

    try{
      // Destructuring user data from request body
        const { fullName, 
            userName, 
            email, 
            password, 
            contactNumber, 
            address, 
            city, 
            country,
            licenseSide1,
            licenseSide2,
            specialization,
            qualification,
            availableDays,
            availableTimesDay1,
            availableTimesDay2,
            availableTimesDay3,
            availableTimesDay4,
            availableTimesDay5,
            availableTimesDay6,
            availableTimesDay7,
            proPic,
            bio} = req.body;

        // Encrypting the password using bcrypt with a salt factor of 10
        const encryptedPwd = await bycrypt.hash(password, 10)

        // Calling the createRegularUser service to create a new user
        const newUser = await doctorModel.create({ 
            fullName, 
            userName, 
            email:email.toLowerCase(), 
            password:encryptedPwd, 
            contactNumber, 
            address, 
            city, 
            country,
            licenseSide1,
            licenseSide2,
            specialization,
            qualification,
            availableDays,
            availableTimesDay1,
            availableTimesDay2,
            availableTimesDay3,
            availableTimesDay4,
            availableTimesDay5,
            availableTimesDay6,
            availableTimesDay7,
            proPic,
            bio
        
        });
        
        // Sending success response with status code 201 and a success message
        return res.status(201).json({ message: 'User created successfully' });

    }catch (err) { 

      // Handling validation errors
        if (err.name === 'ValidationError') {
          const validationErrors = err.message; 

          // Sending validation error response with status code 400 and error details
          return res.status(400).json({ error: 'User creation failed', details: validationErrors });

        } else {
            // Handling other errors
            // Sending internal server error response with status code 500 and error details
          res.status(500).json({ error: 'User creation failed', details: err });
        }
      }
}