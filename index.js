const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

const transactions = require("./routes/transactions");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/v1/transactions", transactions);

const PORT = process.env.PORT || 3000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} at port ${PORT}`.yellow.bold
  )
);
