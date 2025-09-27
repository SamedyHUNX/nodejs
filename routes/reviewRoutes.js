const {
  getAllReviews,
  createReview,
  deleteReview,
  updateReview,
  setTourUserIds,
} = require("./../controllers/reviewController");
const { protect, restrictTo } = require("./../controllers/authController");
const express = require("express");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(getAllReviews)
  .post(protect, restrictTo("user"), setTourUserIds, createReview);

router.route("/:id").patch(updateReview).delete(deleteReview);

module.exports = router;
