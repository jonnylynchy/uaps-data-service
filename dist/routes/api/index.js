"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const sightings_1 = require("./sightings");
// Sighting Routes
let router;
router = express.Router();
router.use("/sightings", sightings_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map