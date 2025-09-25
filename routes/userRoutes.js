const express = require("express");
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("./../controllers/userController");
const {
  signup,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");

const userRouter = express.Router();

// AUTHENTICATION
userRouter.post("/signin", login);
userRouter.post("/signup", signup);

userRouter.post("/forgot-password", forgotPassword);
userRouter.patch("/reset-password/:token", resetPassword);

// USERS
userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = userRouter;
