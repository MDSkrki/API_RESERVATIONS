import express from "express";
import {getAllUsers, postUser} from './userController.js'


//Router initialisation
const router = express.Router();

router.get('/', getAllUsers);

// Post user
router.post('/',postUser);

export default router;