const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const env = require("dotenv").config();

const testConnection = process.env.MONGODB_TEST_CONNSTR;

before(done => {
  mongoose.connect(testConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection
    .once("open", () => {
      done();
    })
    .on("error", error => console.warn("Error", error));
});

beforeEach(done => {
  mongoose.connection.collections.sightings.drop(() => done());
});
