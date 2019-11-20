"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const dotenv_1 = require("dotenv");
mongoose.Promise = global.Promise;
dotenv_1.config();
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
//# sourceMappingURL=test-helper.js.map