const express = require("express");
const {
  getOverview,
  getTour,
  getLoginForm,
} = require("./../controllers/viewController");
const { protect } = require("../controllers/authController");

const router = express.Router();

// Option 1: Redirect root to overview
router.get("/", getOverview);

// Or Option 2: Render overview directly at root
// router.get("/", (req, res) => {
//   res.redirect("/overview");
// });

router.get("/overview", getOverview);
router.get("/tour/:slug", protect, getTour);
router.get("/login", getLoginForm);

module.exports = router;
