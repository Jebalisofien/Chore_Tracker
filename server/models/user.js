const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    password: {type: String},
    job:[{type: mongoose.Schema.Types.ObjectId, ref:"Job"}],
    
});

const User = mongoose.model("User", userSchema);

module.exports = User;