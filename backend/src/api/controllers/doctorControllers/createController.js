const doctorModel = require("../../models/doctor/doctor")
const bcrypt = require("bcryptjs")

exports.createDoctor= async (req, res)=>{
    try{
        const { fullName, userName, email, password, contactNumber, address, city, country, licenseSide1, licenseSide2, specialization, qualification, availableDays, availableTimesDay1, availableTimesDay2, availableTimesDay3, availableTimesDay4, availableTimesDay5, availableTimesDay6, availableTimesDay7, proPic, bio } = req.body;

        const encryptedPwd = await bcrypt.hash(password, 10)

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

        return res.status(201).json({ message: 'User created successfully' });

    } catch (err) { 
        if (err.name === 'ValidationError') {
            const validationErrors = err.message;
            console.log(err)
            return res.status(400).json({ error: 'User creation failed', details: validationErrors });
        } else {
            console.log(err)
            res.status(500).json({ error: 'User creation failed', details: err });
        }
    }
}
