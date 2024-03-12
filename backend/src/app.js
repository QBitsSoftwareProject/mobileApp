const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PORT, DB_URI } = require('./config/env');
const { connect } = require('./config/database.connection.js')

const app = express();



app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
    connect();
})