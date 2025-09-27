const express = require("express");
const {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} = require("./../controllers/tourController");
const { protect, restrictTo } = require("../controllers/authController");
// const { createReview } = require("../controllers/reviewController");
const reviewRouter = require("./reviewRoutes");

const tourRouter = express.Router();

// tourRouter
//   .route("/:tourId/reviews")
//   .post(protect, restrictTo("users"), createReview);
tourRouter.use("/:tourId:/reviews", reviewRouter);

tourRouter.route("/top-5-cheap").get(aliasTopTours, getAllTours);

tourRouter.route("/tour-stats").get(getTourStats);
tourRouter.route("/monthly-plan/:year").get(getMonthlyPlan);

tourRouter.route("/").get(protect, getAllTours).post(createTour);
tourRouter
  .route("/:id")
  .get(getTourById)
  .patch(updateTour)
  .delete(protect, restrictTo("admin", "lead-guide"), deleteTour);

module.exports = tourRouter;
