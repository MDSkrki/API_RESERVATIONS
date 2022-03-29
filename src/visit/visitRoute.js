import express from "express";
import { deleteVisit, getVisit, postVisit, updateVisit } from "./visitController.js";
const router = express.Router();

router.use(auth('Doctor'));

router.get('/', getVisit); //Doctors can see all visits
router.post('/', postVisit); // Doctors can create custom visits
router.patch('/:id', updateVisit); // Doctors can change visit information
router.delete('/:id', deleteVisit); // Doctors can remove visits from database

export default router;