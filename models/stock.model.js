const mongoose = require("mongoose");
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const stockSchema = mongoose.Schema({
    productId: {
        type: ObjectId,
        required: true,
        ref: "Products"
    },
    name: {
        type: String,
        required: [true, "Please provide a product name."],
        trim: true,
        unique: [true, "Name must be unique"],
        minLength: [3, "Product name must be atleast 3 characters"],
        maxLength: [100, "Product name is too large"],
        lowercase: true
    },
    description: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "litre", "pcs", "bag"],
            message: "{VALUE} is not valid unit. It must be kg/litre/pcs/bag"
        }
    },
    imageUrls: {
        type: String,
        required: true,
        validate: {
            validator: (value) => {
                if (!Array.isArray(value)) {
                    return false
                }
                let isValid = true
                value.forEach(url => {
                    if (!validator.isURL(url)) {
                        isValid = false
                    }
                })
                return isValid
            },
            message: "Please provide a valid image URL."
        }
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price can't be negative."]
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "Quantity can't be negative."]
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        name: {
            type: String,
            required: true
        },
        id: {
            type: ObjectId,
            ref: "Brands",
            required: true
        }
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: "{VALUE} is not a status"
        }
    },
    store: {
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
        id: {
            type: ObjectId,
            required: true,
            ref: "Stores"
        }
    },
    supplier: {
        type: String,
        required: true,
        trim: true,
        id: {
            type: ObjectId,
            ref: "Suppliers"
        }
    }
}, {
    timestamps: true
})

const Stocks = mongoose.model("Stocks", stockSchema);
module.exports = Stocks