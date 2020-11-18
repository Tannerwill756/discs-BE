const express = require('express');
const router = express.Router();
const Inventory = require('../schema/inventorySchema.js');

// GET all Inventory Items
router.get('/', async (req,res) => {
    try{
        const items = await Inventory.find();
        res.status(200).json(items);
    }catch (err) {
        res.json({message: err});
    }
});

// GET single inventory item by id
router.get('/:id', async (req, res) => {
    try{
        const item = await Inventory.findById(req.params.id);
        if(item !== null){
            res.status(200).json(item);
        }else{
            res.status(404).json({message: "This Item Doesn't Exist"});
        }
        
    }catch(err){
        res.status(404).json({message: err});
    }
});

// GET putters
router.get('/putters', async (req,res) => {
    try{
        const items = await Inventory.find({ discType: "putter" });
        res.status(200).json(items);
    }catch (err) {
        res.json("idk");
    }
});

// POST inventory item
router.post('/', async (req,res) => {
    const item = new Inventory({
        productName: req.body.productName,
        productDescription: req.body.productDescription,
        quantityAvailable: req.body.quantityAvailable,
        price: req.body.price,
        category: req.body.category,
        discType: req.body.discType ? req.body.discType : ""
    });
    
    try{
        const savedItem = await item.save();
        res.status(201).json(savedItem);

    }catch(err) {
        res.status(400).json({message: err});
    }
});

// UPDATE inventory item by id
router.patch('/:id', (req,res) => {
    Inventory.findByIdAndUpdate(req.params.id, req.body, (err, item) =>{
        if(err){
            res.status(404).json({message: err});
        }else{
            res.status(200).json(item);
        }
    })
})

// DELETE inventory item by id
router.delete('/:id', (req,res) => {
    Inventory.findByIdAndDelete(req.params.id, (err, item) => {
        if(err){
            res.status(404).json({message: err});
        }else{
            res.status(200).json({deleted: item});
        }
    })
    
})





// Inventory.find({ discType: "putter" }, (err,data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// });

module.exports = router;