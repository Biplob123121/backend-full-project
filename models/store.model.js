const mongoose = require('mongoose');
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const storeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a valid brand Name"],
        unique: true,
        enum: {
            values: ["dhaka", "rajshahi", "chattogram", "khulna", "barishal", "sylhet", "mymensingh", "rangpur"],
            message: "{VALUE} is not a valid store name."
        },
        lowercase: true
    },
    description: String,
    status: {
        type: String,
        enum: ['active', 'inActive'],
        default: 'active'
    },
    manager: {
        name: String,
        contact: String,
        id: {
            type: ObjectId,
            ref: "Users"
        }
    }
}, {
    timestamps: true
})

const Stores = mongoose.model('Stores', storeSchema);
module.exports = Stores