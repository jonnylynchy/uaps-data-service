"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const sighting_1 = require("../models/sighting");
describe("Creating records", () => {
    it("saves a sighting", done => {
        const sighting = new sighting_1.default({
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
//# sourceMappingURL=create-test.js.map