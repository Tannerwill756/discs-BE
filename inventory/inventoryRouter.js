const express = require('express');
const router = express.Router();
const Inventory = require('../schema/inventorySchema.js');

router.get('/', async (req,res) => {
    try{
        const items = await Inventory.find();
        res.status(200).json(items)
    }catch (err) {
        res.json({message: err})
    }
});

router.post('/', async (req,res) => {
    console.log(req.body)
    const item = new Inventory({
        productName: req.body.productName,
        quantityAvailable: req.body.quantityAvailable,
        price: req.body.price
    });
    
    try{
        const savedItem = await item.save();
        res.status(201).json(savedItem)

    }catch(err) {
        res.status(400).json({message: err})
    }
});

module.exports = router;