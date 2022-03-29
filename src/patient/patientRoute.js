import express from "express";
import { auth } from "../shared/middlewares.js";
import { deletePatient, getPatient, postPatient, updatePatient, getVisit, cancelVisit, postVisit } from './patientController.js';
const router = express.Router();

router.get('/', auth('Patient'), getPatient); // Patient will only see his own profile
router.get('/visits', auth('Patient'), getVisit); // Patient will only see his own appointments
router.patch('/visits/cancellation/:id', auth('Patient'), cancelVisit); // User can only cancel its own visits
router.post('/visits/create', auth('Patient'), postVisit); // Patient can request appointments for itself
router.post('/register', postPatient);
router.patch("/:id", auth('Patient'), updatePatient); // Patient can update his own information (not login-related)
router.delete("/", auth('Patient'), deletePatient); // Patient can delete its own profile

export default router;