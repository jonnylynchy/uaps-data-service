"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sightingSchema = new Schema({
    caption: { type: String, required: true },
    witness: { type: String, required: true },
    location: { type: Object, required: true },
    detail: { type: String, required: true },
    images: Array,
    date: { type: Date, default: Date.now }
});
const Sighting = mongoose.model("Sighting", sightingSchema);
exports.default = Sighting;
//# sourceMappingURL=sighting.js.map