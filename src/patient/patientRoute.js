import express from "express";
import {deletePatient, getPatient, postPatient, updatePatient} from './patientController.js';
const router = express.Router();

router.get('/', getPatient);
router.post('/', postPatient);
router.patch("/:id", updatePatient);
router.delete("/:id", deletePatient);

export default router;