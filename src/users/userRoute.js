import express from "express";
const router = express.Router();
import { getUser, postUser, updateUser, deleteUser } from "./userController.js";


router.get("/", getUser);
router.post("/", postUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
