import express from "express";
import {
  google,
  login,
  register,
  signout,
} from "../controllers/auth.controller.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.post("/google", google);
router.get("/signout", signout);
export default router;
