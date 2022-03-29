import express from "express";
import { auth } from "../shared/middlewares.js";
import { getDoctor, postDoctor, updateDoctor, deleteDoctor } from "./doctorController.js";

// Router initialisation
const router = express.Router();

router.use(auth('Doctor'));

router.get("/", auth('Doctor'), getDoctor);
router.post("/register", postDoctor);
router.patch("/:id", auth('Doctor'), updateDoctor);
router.delete("/:id", auth('Doctor'), deleteDoctor);

export default router;