const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Project title is required"]
    },
    description: {
        type: String,
        required: [true, "Project description is required"]
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Project", ProjectSchema)