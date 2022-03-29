import express from "express";
import { auth } from "../shared/middlewares.js";
import {deletePatient, getPatient, postPatient, updatePatient, getVisit, cancelVisit, postVisit} from './patientController.js';
const router = express.Router();

router.get('/', auth('Patient'), getPatient); // solo puede ver su perfil, doctor todo
router.get('/visits', auth('Patient'), getVisit) // solo puede ver todas sus visitas
router.patch('/visits/cancellation/:id', auth('Patient'), cancelVisit) // User only can cancel their own visits
router.post('/visits/create', auth('Patient'), postVisit )
router.post('/register', postPatient);
router.patch("/:id", auth('Patient'), updatePatient); // solo paciente
router.delete("/:id", auth('Patient'), deletePatient); // paciente y doctor

export default router;