const mongoose = require('mongoose');

const inventorySchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productDescription: {
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
    },
    category: {
        type: String,
        required: true
    },
    discType: String,
    affiliateLink: String,
});


module.exports = mongoose.model('Inventory', inventorySchema);