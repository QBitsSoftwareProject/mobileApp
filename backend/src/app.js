const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PORT } = require('./config/env');
const { connect } = require('./config/database.connection.js');
const appointmentRouter = require('./api/routes/appointmentRoutes/appointmentRoutes.js');
const doctorsRouter = require("./api/routes/doctorRouters/doctorRouters.js");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/appointments", appointmentRouter);
app.use("/api/v1/doctors" , doctorsRouter);
app.use("/api/v1/users" , userRoutes);

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
    connect()
})