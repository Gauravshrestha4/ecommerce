require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const User = require('./models/user');
const Order = require('./models/order');
const Product = require('./models/product');

const ItemRoutes = require('./routes/item');
const ProductItems = require('./routes/product');

app = express();

/*setup body parser to parse the request body */
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors());

app.use(ItemRoutes);
app.use(ProductItems);

/**Initial test route to ping the server */
app.get('/', (req,res) => {
    res.send('Test route Successful ..!!');
})

app.listen(process.env.PORT, (req, res) => {
    console.log(`Server is up and runnig on ${process.env.PORT}`);
})