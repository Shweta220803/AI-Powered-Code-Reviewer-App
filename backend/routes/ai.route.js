import express from "express";
import { getReviewFromAI } from "../controllers/ai.controller.js";
const router = express.Router();

router.post("/get-review", getReviewFromAI);

export default router;
