import express from "express";
//controller
import {
  getFavorite,
  loginUser,
  signupUser,
} from "../controllers/userController.js";
import {
  deleteUser,
  getUserProfile,
  updateAddress,
} from "../controllers/userProfileController.js";
import authMiddleware from "../middlewares/authMiddleWare.js";

const router = express.Router();

//signup route
router.post("/signup", signupUser);

//login  user
router.post("/login", loginUser);

//user profile
router.get("/userprofile", authMiddleware, getUserProfile);

//updateAddress
router.put("/updateAddress", authMiddleware, updateAddress);

//deleteUser
router.delete("/delete", authMiddleware, deleteUser);

//favorite
router.post("/favorite", authMiddleware, getFavorite);

export default router;
