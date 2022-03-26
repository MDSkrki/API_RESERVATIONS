import express from "express";
import { deleteVisit, getVisit, postVisit, updateVisit } from "./visitController.js";
const router = express.Router();

router.get('/', getVisit);
router.post('/', postVisit);
router.patch('/:id', updateVisit);
router.delete('/:id', deleteVisit);

export default router;