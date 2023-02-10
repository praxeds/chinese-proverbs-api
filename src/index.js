const express = require("express");
const cors  = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

//DB connection
const connection = require("./Database/connect");
connection();

//Routes
const router = require("./Routes/router");
app.use("/api", router);

app.listen(3000, () => {
  console.log(`🥟 Server is listening on http://localhost:3000`);
});

app.get("/", (req, res) => {
  res.status(200).send({
    welcome: "Chinese Proverbs API",
  });
});