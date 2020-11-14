const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();

const routes = require("./routes");
const app = express();
const server = require("http").Server(app);


app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(process.env.PORT, process.env.HOST);