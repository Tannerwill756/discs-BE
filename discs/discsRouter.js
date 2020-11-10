const express = require('express');
const router = express.Router();
const Inventory = require('../schema/inventorySchema.js');

router.get('/', (req,res) => {
    res.send('hola')
})

module.exports = router;