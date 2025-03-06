const mongoose = require('mongoose')

const connectToDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo db connceted successfullly");
        
    }catch(e){
        console.error("MongoDB connection failed")
        process.exit(1)
    }
}

module.exports = connectToDB;