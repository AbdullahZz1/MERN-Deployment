const mongoose = require("mongoose");
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [
            3,
            "Name at least 3 letters"
        ],
        required: [
            true,
            "Name is required"
        ],
        unique: [
            true,
            "Name should be unique"
        ]
    },
    type: {
        type: String,
        minlength: [
            3,
            "Type at least 3 letters"
        ],
        required: [
            true,
            "Type is required"
        ]
    },
    description:
    {
        type: String,
        minlength: [
            3,
            "Description at least 3 letters"
        ],
        required: [
            true,
            "Description is required"
        ]
    },
    skill1: {
        type: String
    },
    skill2:
    {
        type: String
    },
    skill3: {
        type: String
    },


}, { timestamps: true });
module.exports.Pet = mongoose.model('Pet', PetSchema);