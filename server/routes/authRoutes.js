import express from "express";
import {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  getAllUsers,
  
} from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get(
  "/profile",
  authMiddleware,
  getProfile
);
router.put(
  "/profile",
  authMiddleware,
  updateProfile
);
router.get(
  "/users",
  authMiddleware,
  getAllUsers
);


export default router;