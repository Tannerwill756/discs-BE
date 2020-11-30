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
    productImage: {
        type: String
    },
    quantityAvailable: {
        type: Number
    },
    price: {
        type: Number
    },
    category: {
        type: String,
        required: true
    },
    discType: String,
    affiliateLink: String,
});


module.exports = mongoose.model('Inventory', inventorySchema);