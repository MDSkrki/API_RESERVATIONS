import express from "express";
import { auth } from "../shared/middlewares.js";
const router = express.Router();
import { getUser, postUser, updateUser, deleteUser,userLogin,userLogout } from "./userController.js";


router.get("/", auth('Doctor'), getUser); // Doctor
router.get('/login', userLogin) // no auth
router.get('/logout', auth('Patient'), userLogout) // auth Doctor Y Patient
router.post("/", auth('Doctor'), postUser); // Doctor
router.patch("/:id", auth('Doctor'), updateUser); // only Doctors
router.delete("/:id", auth('Doctor'), deleteUser); // only doctors

export default router;
