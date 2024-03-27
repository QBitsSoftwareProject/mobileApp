const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PORT } = require('./config/env');
const { connect } = require('./config/database.connection.js');

const regularUserRoute = require('./api/routes/regularUserRoute.js')

const app = express();

app.use(cors());
app.use(bodyParser.json());


//endpoints
app.use('/api/v1/user', regularUserRoute)


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)

    //database connection
    connect()
})