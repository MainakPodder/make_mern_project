const mongoose = require("mongoose")

const mySchema = new mongoose.Schema({
    name : String,
    roll : {
        type : String,
        required : true
    }
})
module.exports = mongoose.model("Mern",mySchema);