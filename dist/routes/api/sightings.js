"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const sightingsController_1 = require("../../controllers/sightingsController");
let router;
router = express.Router();
// Matches with "/api/sightings"
router
    .route("/")
    .get(sightingsController_1.default.findAll)
    .post(sightingsController_1.default.create);
// Matches with "/api/sightings/:id"
router
    .route("/:id")
    .get(sightingsController_1.default.findById)
    .put(sightingsController_1.default.update)
    .delete(sightingsController_1.default.remove);
exports.default = router;
//# sourceMappingURL=sightings.js.map