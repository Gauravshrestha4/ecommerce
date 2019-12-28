const router = require('express').Router();
const Product = require('../models/product');

/*This would be used in admin panel only */
router.post('/add-product', (req, res) => {
    Product.create({
        category: req.body.category,
        image: req.body.image
    })
    .then(() => {
        res.status(201).send('Product added successfully !!');
    })
    .catch((error) => {
        res.status(500).send(`Error: ${error}`)
    })
})

/**route to get all the products in the inventory */
router.get('/get-all-products', (req, res) => {
    Product.findAll({})
    .then((products) => {
        if(!products.length){
            res.status(400).send('No Product Found !!');
        }
        else{
            res.status(200).send(products);
        }
    })
    .catch((error) => {
        res.status(500).send(`${error}`)
    })
})

module.exports = router;