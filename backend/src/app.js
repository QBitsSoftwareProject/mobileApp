const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PORT } = require('./config/env');
const { connect } = require('./config/database.connection.js')

const app = express();

app.use(cors());
app.use(bodyParser.json());

const questionRouter = require("./api/routes/question.route.js");
const markRouter = require("./api/routes/mark.route.js");

// app.use("/questions",questionRouter);
//app.use("/options",optionRouter);
app.use("/mark",markRouter);
app.use('/question',questionRouter)

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
    connect()
})