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
  () => {
    console.log("db connected successfully");
  }
);
