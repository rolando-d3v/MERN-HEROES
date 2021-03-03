const mongoose = require("mongoose");

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
