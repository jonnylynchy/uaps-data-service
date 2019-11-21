import * as chai from "chai";
import chaiHttp = require("chai-http");
import server from "../../";

let should = chai.should();
chai.use(chaiHttp);

describe("api/sightings", () => {
  describe("/GET api/sightings", () => {
    it("it should GET all the sightings", done => {
      chai
        .request(server)
        .get("/api/sightings")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("array");
          //   res.body.length.should.be.eql(0);
          done();
        });
    });
  });
});
