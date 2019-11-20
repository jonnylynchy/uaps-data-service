const router = require("express").Router();
const sightingRoutes = require("./sightings");

// Sighting Routes
router.use("/sightings", sightingRoutes);

module.exports = router;
