import { config } from "dotenv";
import * as mongoose from "mongoose";

process.env.NODE_ENV = "test";

(mongoose as mongoose.Mongoose).Promise = global.Promise;
config();

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
