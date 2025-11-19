import { Router } from "express";
import { getScores, createScore, updateScore, deleteScore } from "../controllers/score.controller.js";

const router = Router();


// GET /api/score
router.get("/", getScores);
// POST /api/score
router.post("/", createScore);
// // PUT /api/score/:id
router.put("/:id", updateScore);
// DELETE /api/score/:id
router.delete("/:id", deleteScore);

export default router;
