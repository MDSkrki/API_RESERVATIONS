import express from "express";
import { auth } from "../shared/middlewares.js";
import { getDoctor, postDoctor, updateDoctor, deleteDoctor } from "./doctorController.js";

// Router initialisation
const router = express.Router();

router.use(auth('Doctor'));

router.get("/", getDoctor);
router.post("/register", postDoctor);
router.patch("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;