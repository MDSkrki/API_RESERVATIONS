import express from "express";
import { deleteVisit, getVisits, postVisit, updateVisit } from "./visitController.js";
const router = express.Router();

router.get('/', getVisits);
router.post('/', postVisit);
router.patch('/:id', updateVisit);
router.delete('/', deleteVisit);

export default router;