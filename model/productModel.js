// mongoose 
const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    isAdmin: {
        type: Boolean,
        default: false

    }
});


module.exports = mongoose.model("Product", userSchema);

