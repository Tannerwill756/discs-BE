const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    quantityAvailable: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})


module.exports - mongoose.model('Inventory', inventorySchema)