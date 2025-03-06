require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URI=process.env.MONGO_URI
const connectToDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI
    );
    console.log("mongodb is connected successfully !");
  } catch (error) {
    console.error("Mongodb connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDB;