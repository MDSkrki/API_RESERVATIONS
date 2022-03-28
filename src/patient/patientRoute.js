import express from "express";
import { auth } from "../shared/middlewares.js";
import {deletePatient, getPatient, postPatient, updatePatient,patientLogin, patientLogout} from './patientController.js';
const router = express.Router();

router.get('/', auth('patient'), getPatient);
router.get('/login', patientLogin)
router.get('/logout', patientLogout)
router.post('/', postPatient);
router.patch("/:id", updatePatient);
router.delete("/:id", deletePatient);

export default router;