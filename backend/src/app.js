const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT } = require("./config/env");
const { connect } = require("./config/database.connection.js");

const postRoutes = require("./api/routes/postRoutes.js");
const commentsRoutes = require("./api/routes/commentsRoutes.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/Comments", commentsRoutes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connect();
});
