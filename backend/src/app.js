const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT } = require("./config/env");
const { connect } = require("./config/database.connection.js");
const moodEntryRoute = require("./api/routes/moodsInputroutes.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/moodEntries", moodEntryRoute);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connect();
});
