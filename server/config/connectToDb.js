const mongoose = require("mongoose");
require("dotenv").config();

async function connectToDb() {
    try{
        await mongoose.connect(process.env.DB);
        console.log("connected to database");

    } catch(err){
        console.log(err);
    }
    
}


module.exports = connectToDb;