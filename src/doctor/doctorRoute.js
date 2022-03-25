import express from "express";
const router = express.Router();
import { getDoctor, postDoctor, updateDoctor, deleteDoctor } from "./doctorController.js";


router.get("/", getDoctor);
router.post("/", postDoctor);
router.patch("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;