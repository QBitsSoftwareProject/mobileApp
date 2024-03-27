const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PORT } = require('./config/env');
const { connect } = require('./config/database.connection.js')

const app = express();

const methodRouter = require("./api/routes/method.route.js");

app.use(cors());
app.use(bodyParser.json());
app.use("/method",methodRouter);

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
    connect()
})