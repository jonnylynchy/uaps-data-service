const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv").config();

const app = express();
const routes = require("./routes");

// Constants
const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_CONNSTR)
  .then(() => {
    console.log("Connection to MongoDB successful");
    // start the app
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
  })
  .catch(err => console.error(err));
