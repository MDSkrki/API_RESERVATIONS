import express from "express";
const router = express.Router();
import {
  getDoctor,
  postDoctor,
  updateDoctor,
  deleteDoctor,
  doctorLogin,
  doctorLogout
} from "./doctorController.js";

router.get("/", getDoctor);
router.get("/login", doctorLogin);
router.get("/logout", doctorLogout)
router.post("/", postDoctor);
router.patch("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

export default router;
