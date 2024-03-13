const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PORT } = require('./config/env');
const { connect } = require('./config/database.connection.js');



const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/moodEntries',require('./api/routes//moodsInput.routes.js'))

connect();

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
    connect()
})