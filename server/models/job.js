const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    location: {type: String},
    
    user:[{type: mongoose.Schema.Types.ObjectId, ref:"User"}],
    taker:[{type: mongoose.Schema.Types.ObjectId, ref:"User", default: null}],
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;