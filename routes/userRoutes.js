const express = require("express");
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
} = require("./../controllers/userController");
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
  updatePassword,
  protect,
  restrictTo,
} = require("../controllers/authController");

const userRouter = express.Router();

// AUTHENTICATION
userRouter.post("/signin", login);
userRouter.post("/signup", signup);

userRouter.post("/forgot-password", forgotPassword);
userRouter.patch("/reset-password/:token", resetPassword);
userRouter.patch("/update-password/", protect, updatePassword);

userRouter.patch("/update-me", protect, updateMe);
userRouter.delete("/delete-me", protect, deleteMe);

// USERS
userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
