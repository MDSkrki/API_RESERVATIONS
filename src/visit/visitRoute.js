import express from "express";
import { deleteVisit, getVisit, postVisit, updateVisit } from "./visitController.js";
const router = express.Router();

router.get('/', getVisit); // logica de paciente que solo vea las suyas, y doctor todo 
router.post('/', postVisit); // logica solo puede hacer visita para el mismo, auth Doctor, patient
router.patch('/:id', updateVisit); //auth Doctor, Patient
router.delete('/:id', deleteVisit); //auth Doctor

export default router;