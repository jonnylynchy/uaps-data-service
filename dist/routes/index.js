"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const api_1 = require("./api");
// API Routes
let router;
router = express.Router();
router.use("/api", api_1.default);
module.exports = router;
//# sourceMappingURL=index.js.map