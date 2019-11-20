import * as express from "express";
import apiRoutes from "./api";

// API Routes
let router: express.Router;
router = express.Router();
router.use("/api", apiRoutes);

export default router;
