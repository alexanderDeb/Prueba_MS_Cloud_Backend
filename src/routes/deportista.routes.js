import { Router } from "express";
import { createDeportista, getDeportista } from "../controllers/deportistas.controller.js";

const router = Router();

router.get("/deportistas", getDeportista);
router.post("/deportistas", createDeportista);

export default router