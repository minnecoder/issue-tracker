const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("User", UserSchema)