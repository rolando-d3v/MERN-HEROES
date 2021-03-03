const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

//CONFIGURACION APP
require("./config");
require("dotenv").config();

//BASE DE DATOS
require("./db");

const app = express();
const port = process.env.PORT;

app.listen(port, () => console.log("server run in port " + port))


//MIDDLEWARES
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());
