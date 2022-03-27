import express from "express";
const router = express.Router();
import { getDoctor, postDoctor, updateDoctor, deleteDoctor, doctorLogin } from "./doctorController.js";


router.get("/", getDoctor);
router.post("/", postDoctor);
router.patch("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

router.get('/login', doctorLogin);

export default router;