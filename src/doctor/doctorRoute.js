import express from "express";
import { auth } from "../shared/middlewares.js";
const router = express.Router();
import { getDoctor, postDoctor, updateDoctor, deleteDoctor } from "./doctorController.js";


router.use(auth('Doctor'));

router.get("/", getDoctor);
router.post("/register", postDoctor);
router.patch("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;