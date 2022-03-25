import express from "express";
import { getVisits } from "./visitController.js";
const router = express.Router();

router.get('/', getVisits);
router.post('/');
router.patch('/');
router.delete('/');

export default router;