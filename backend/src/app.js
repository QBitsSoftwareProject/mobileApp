const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT } = require("./config/env");
const { connect } = require("./config/database.connection.js");

const regularUserRoute = require("./api/routes/regularUserRoute.js");
const doctorRoute = require("./api/routes/doctorRoute.js");
const goalRoute = require("./api/routes/goalRoute.js");
const appointmentRouter = require("./api/routes/appointmentRoutes/appointmentRoutes.js");
const taskRoute = require("./api/routes/taskRoutes.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());

//endpoints
app.use("/api/v1/user", regularUserRoute);
app.use("/api/v1/doctor", doctorRoute);
app.use("/api/v1/goal", goalRoute);
app.use("/api/v1/appointments", appointmentRouter);
app.use("/api/v1/task", taskRoute);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);

  //database connection
  connect();
});
