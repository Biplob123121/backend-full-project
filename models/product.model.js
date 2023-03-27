const mongoose = require("mongoose");
const validator = require('validator');
const { ObjectId } = mongoose.Schema.Types;

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a product name."],
        trim: true,
        unique: [true, "Name must be uique"],
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
}, {
    timestamps: true
})

const Products = mongoose.model("Products", productSchema);
module.exports = Products