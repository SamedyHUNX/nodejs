const express = require("express");
const {
  getAllUsers,
  createUser,
  getUser,
  updateUser,
  deleteUser,
  updateMe,
  deleteMe,
  getMe,
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

const router = express.Router();

// AUTHENTICATION
router.post("/signin", login);
router.post("/signup", signup);

router.post("/forgot-password", forgotPassword);
router.patch("/reset-password/:token", resetPassword);

router.use(protect);
router.get("/me", protect, getMe, getUser);
router.patch("/update-password/", protect, updatePassword);
router.patch("/update-me", protect, updateMe);
router.delete("/delete-me", protect, deleteMe);

// USERS
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
