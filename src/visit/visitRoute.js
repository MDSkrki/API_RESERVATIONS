import express from "express";
import { getVisits, postVisit } from "./visitController.js";
const router = express.Router();

router.get('/', getVisits);
router.post('/', postVisit);
router.patch('/');
router.delete('/');

export default router;