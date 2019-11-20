const router = require("express").Router();
const sightingsController = require("../../controllers/sightingsController");

// Matches with "/api/sightings"
router
  .route("/")
  .get(sightingsController.findAll)
  .post(sightingsController.create);

// Matches with "/api/sightings/:id"
router
  .route("/:id")
  .get(sightingsController.findById)
  .put(sightingsController.update)
  .delete(sightingsController.remove);

module.exports = router;
