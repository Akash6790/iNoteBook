// Backend/db.js
const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/inotebook";

const connectToMongoose = async () => {
  try {
    await mongoose.connect(mongoURI);             // no callback — returns a Promise
    console.log("Connected to Mongo Successfully");
  } catch (err) {
    console.error("Failed to connect to Mongo:", err);
    process.exit(1); // optional: stop process if DB connection fails
  }
};

module.exports = connectToMongoose;
