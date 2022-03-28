import express from "express";
import { auth } from "../shared/middlewares.js";
import {deletePatient, getPatient, postPatient, updatePatient} from './patientController.js';
const router = express.Router();

router.get('/', getPatient); // solo puede ver su perfil, doctor todo
router.get('/visits',)
router.get('/profile',)
router.post('/register', postPatient);
router.patch("/:id", updatePatient); // solo paciente
router.delete("/:id", deletePatient); // paciente y doctor

export default router;