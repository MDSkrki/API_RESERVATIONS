import express from "express";
import { auth } from "../shared/middlewares.js";
const router = express.Router();
import {
  getDoctor,
  postDoctor,
  updateDoctor,
  deleteDoctor,
} from "./doctorController.js";

router.get("/", auth('Doctor'), getDoctor);
router.post("/register", postDoctor);  // todos los endpoints doctor
router.patch("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;
