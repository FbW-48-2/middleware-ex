import express from "express";
const router = express.Router();

import {
  validateInfo,
  ageGreater,
  capitalize,
} from "../controllers/userControllers.js";

router.route("/validateUsers").post(validateInfo, ageGreater);

router.route("/sanitizeUsers").post(capitalize);

export default router;
