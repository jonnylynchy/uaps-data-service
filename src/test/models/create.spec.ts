import assert = require("assert");
import Sighting from "../../models/sighting";

describe("Creating records", () => {
  it("saves a sighting", done => {
    const sighting = new Sighting({
      caption: "My dog went flyin away!",
      witness: "Fred Magoo",
      location: { x: -101.6256584, y: 31.6840154 },
      detail: "This is Marfa yo!",
      images: [
        "https://specialoperations.com/wp-content/uploads/2016/02/maxresdefault.jpg"
      ]
    });

    sighting.save().then(() => {
      assert(!sighting.isNew);
      done();
    });
  });
});
