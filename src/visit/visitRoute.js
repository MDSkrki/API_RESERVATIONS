import express from "express";
import { deleteVisit, getVisit, postVisit, updateVisit } from "./visitController.js";
const router = express.Router();

router.get('/', getVisit); //auth doctor todo 
router.post('/', postVisit); // can do it patients and doctors
router.patch('/:id', updateVisit); //auth Doctor
router.delete('/:id', deleteVisit); //auth Doctor

export default router;