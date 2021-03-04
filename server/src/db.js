// const mongoose = require("mongoose");
import mongoose from "mongoose";

const db = process.env.URLDB;

mongoose.connect(
  db,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("db ERROR CONECTED !!");
    } else {
      console.log("db connected successfully");
    }
  }
  );


  
  // mongoose.connect(db, {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useFindAndModify: false,
  //     useUnifiedTopology: true,
  //   })
  //   .then((mongo) => console.log("connected"))
  //   .catch((error) => console.log(error))
