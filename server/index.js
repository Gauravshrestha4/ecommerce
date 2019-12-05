require('./config/config');
require('./db/connection');
const express = require('express');
const bodyParser = require('body-parser');

/*setup body parser to parse the request body */
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

/**Initial test route to ping the server */
app.get('/', (req,res) => {
    res.send('Test Successful ..!!');
})


app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is up and runnig on ${process.env.PORT}`);
})