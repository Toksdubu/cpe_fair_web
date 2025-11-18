import { Router } from "express";
import { getMain, createMain, updateMain, deleteMain } from "../controllers/main.controller.js";

const router = Router();


// GET /api/main
router.get("/", getMain);
// POST /api/main
router.post("/", createMain);
// // PUT /api/main/:id
router.put("/:id", updateMain);
// DELETE /api/main/:id
router.delete("/:id", deleteMain);

export default router;
