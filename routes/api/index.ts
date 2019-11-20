import * as express from "express";

import sightingRoutes from "./sightings";

// Sighting Routes
let router: express.Router;
router = express.Router();
router.use("/sightings", sightingRoutes);

export default router;
