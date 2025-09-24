const express = require("express");
const {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
  aliasTopTours
} = require("./../controllers/tourController");

const tourRouter = express.Router();

tourRouter.route("/top-5-cheap").get(aliasTopTours, getAllTours);

tourRouter.route("/").get(getAllTours).post(createTour);
tourRouter.route("/:id").get(getTourById).patch(updateTour).delete(deleteTour);

module.exports = tourRouter;
