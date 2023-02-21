const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },

    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        trim: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please enter a valid email!"
        ]
    },

    password: {
        type: String,
        required: [true, "Please enter a password"],
        minglength: [6, "Minimum password length is 6 characters"],
        maxLength: [28 , "Password cannot exceed 28 characters"]
    },

    photo: {
        type: String,
        required: [true, "Please enter a photo"],
        default : "https://i.bb.co/4pDNDk1/avatar.png"
    },  
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)
module.exports = User