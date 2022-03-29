import express from "express";
import { auth } from "../shared/middlewares.js";
const router = express.Router();
import { getUser, postUser, updateUser, deleteUser, userLogin, userLogout } from "./userController.js";


router.get("/", auth('Doctor'), getUser); // Doctors can see all users
router.get('/login', userLogin); // If email and password exist in database, will give token to that user
router.get('/logout', auth('Patient'), userLogout); // Doctor and Patient can logout
router.post("/", auth('Doctor'), postUser); // Custom users can only be created by Doctors
router.patch("/:id", auth('Doctor'), updateUser); // Doctors can custom update user data
router.delete("/:id", auth('Doctor'), deleteUser); // Only Doctors can erase ANY profile (including its own!!)

export default router;
