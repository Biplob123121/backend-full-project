const mongoose = require('mongoose');
const validator = require('validator');

const categoryShema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a category name."],
        trim: true,
        unique: true,
        lowercase: true
    },
    description: String,
    imageUrl: {
        type: String,
        validate: [validator.isURL, "Please provide a valid URL."]
    }
}, {
    timestamps: true
})

const Categories = mongoose.model("Categories", categoryShema);
module.exports = Categories