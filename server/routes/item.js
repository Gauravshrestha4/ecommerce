const router = require('express').Router();
const Item = require('../models/item');

/*route to save an item in the database */
router.post('/save-item', (req, res) => {
    Item.create({
        brand: req.body.brand,
        name: req.body.name,
        price: req.body.price,
        shortDescription: req.body.shortDescription,
        description: req.body.description,
        image: req.body.image,
        discount: req.body.discount,
        category: req.body.category,
        freeDelivery: req.body.freeDelivery,
        manufacturer: req.body.manufacturer
    })
    .then((response) => {
        res.status(201).send(`Item Enrty Created Successfully ..!!`)
    })
    .catch((error) => {
        res.status(500).send(`Internal Server Error ..!! ${error}`)
    })
});

/*route to get information about all the items in the database */
router.get('/get-all-items', (req, res) => {
    
    /*fetch query params to calculate offset and limit */
    let offset = (+req.query.page) * (+req.query.pageSize);
    let limit = (+req.query.pageSize) + (+offset);

    Item.findAll({
        limit: limit,
        offset: offset
    })
    .then((response) => {
        if((!response)){
            res.status(401).send(`No data found ..!!`);
        }

        res.status(200).send(response);
    })
    .catch((error) => {
        res.status(500).send(`Error: ${error}`)
    })
})

/**route to get information of a single item */
router.get('/get-item', (req, res) => {
    let itemId = req.query.itemId;
    console.log(itemId)
    Item.findOne({
        where:{
            itemId: itemId
        }
    })
    .then((item) => {
        if(!item){
            res.status(401).send(`No item found ..!!`)
        }
        res.status(200).send(item);
    })
    .catch((error) => {
        res.status(500).send(`Error: ${error}`)
    })
})



module.exports = router;