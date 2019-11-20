import * as express from "express";
import * as mongoose from "mongoose";
import { config } from "dotenv";

config();
// const env = require("dotenv").config();

const routes = require("./routes");

// Constants
const PORT = process.env.PORT || 8080;
const HOST = "0.0.0.0";

const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_CONNSTR, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connection to MongoDB successful");
    // start the app
    app.listen(PORT, () => {});
    console.log(`Running on http://${HOST}:${PORT}`);
  })
  .catch(err => console.error(err));
