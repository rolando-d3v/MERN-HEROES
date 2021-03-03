// const mongoose = require("mongoose");


// const db = process.env.URLDB;

// mongoose.connect(
//   db,
//   {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   },
//   () => console.log("db connected successfully")
  
// );



const mongoose = require('mongoose');



require('./config')
mongoose.connect(process.env.URLDB,{
    useCreateIndex: true,
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false,
},() => {
    console.log('db conected');
} )