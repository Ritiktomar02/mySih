import express from "express";
import {
  loginUser,
  logoutUser,
  signupUser,
  updateUser,
} from "../controller/userController.js";
import protectRoute from "../middlewares/protectRoute.js";

const userRouter = express.Router();

userRouter
  .post("/signup", signupUser)
  .post("/login", loginUser)
  .post("/logout", protectRoute, logoutUser)
  .patch("/update", protectRoute, updateUser);

export default userRouter;
