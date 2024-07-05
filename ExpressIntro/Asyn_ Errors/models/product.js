const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String,
            required: [true, 'name cannot be blank'],
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy', 'bread']
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;