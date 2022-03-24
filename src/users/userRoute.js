import express from "express";
import * as controller from './userController.js'


//Router initialisation
const router = express.Router();

router.get('/', controller.getAllUsers);

// Post user
router.post('/',controller.postUser);

export default router;