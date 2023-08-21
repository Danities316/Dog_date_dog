const mongoose = require("mongoose");
// let promise = require("bluebird");
const config = require("../index.js");
require("dotenv").config();

//---------------------------- Mongoose ---------------------
//connecting to th database
// const dbUrl = 'mongodb://127.0.0.1/datingApp';
const dbUrl = process.env.MONGOOSE_URI;
const dbOptions = {
  // useMonoClient: true,
  // promiseLibrary: promise,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//Establishing Mongoose connections using IIFE
(async () => {
  try {
    mongoose.connect(dbUrl, dbOptions);
    console.log("Mongo has been connected succesfully");
  } catch (error) {
    console.log(error);
  }
})();
