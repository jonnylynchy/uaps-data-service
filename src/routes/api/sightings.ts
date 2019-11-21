import * as express from "express";

import sightingsController from "../../controllers/sightingsController";

let router: express.Router;
router = express.Router();

// /api/sightings
router
  .route("/")
  .get(sightingsController.findAll)
  .post(sightingsController.create);

// /api/sightings/:id
router
  .route("/:id")
  .get(sightingsController.findById)
  .put(sightingsController.update)
  .delete(sightingsController.remove);

export default router;
