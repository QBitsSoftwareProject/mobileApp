const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT } = require("./config/env");
const { connect } = require("./config/database.connection.js");

const goalRoute = require("./api/routes/goalRoute.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());

//endpoints
app.use("/api/v1/goal", goalRoute);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connect();
});
