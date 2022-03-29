import express from "express";
import { auth } from "../shared/middlewares.js";
import {deletePatient, getPatient, postPatient, updatePatient, getVisit, cancelVisit, postVisit} from './patientController.js';
const router = express.Router();

router.get('/', getPatient); // solo puede ver su perfil, doctor todo
router.get('/visits', getVisit) // solo puede ver todas sus visitas
router.patch('/visits/cancellation/:id', cancelVisit) // User only can cancel their own visits
router.post('/visits/create',postVisit )
router.post('/register', postPatient);
router.patch("/:id", updatePatient); // solo paciente
router.delete("/:id", deletePatient); // paciente y doctor

export default router;