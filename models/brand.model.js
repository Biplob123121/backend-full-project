const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const brandSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a valid brand Name"],
        unique: true,
        maxLngth: 100,
        trim: true,
        lowercase: true
    },
    description: String,
    email: {
        type: String,
        validate: [validator.isEmail, "Please provide a valid email."]
    },
    website: {
        type: String,
        validate: [validator.isURL, "Please provide a valid url."]
    },
    location: String,
    products: [{
        type: ObjectId,
        ref: "Products"
    }],
    suppliers: [{
        name: {
            type: String,
            required: true
        },
        contact: String,
        id: {
            type: ObjectId,
            ref: "Suppliers"
        }
    }],
    status: {
        type: String,
        enum: ['active', 'inActive'],
        default: 'active'
    }
}, {
    timestamps: true
})

const Brands = mongoose.model('Brands', brandSchema);
module.exports = Brands