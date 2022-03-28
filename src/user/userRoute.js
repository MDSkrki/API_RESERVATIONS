import express from "express";
const router = express.Router();
import { getUser, postUser, updateUser, deleteUser,userLogin,userLogout } from "./userController.js";


router.get("/", getUser); // DOCTOR
router.get('/login', userLogin) // no auth
router.get('/logout', userLogout) // auth DOCTOR Y Patient
router.post("/", postUser); // doctor
router.patch("/:id", updateUser); // only Doctors
router.delete("/:id", deleteUser); // only doctors

export default router;
