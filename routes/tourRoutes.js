const express = require('express');
const {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
} = require('./../controllers/tourController');

const tourRouter = express.Router();

tourRouter.param('id', (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);
  next();
});

tourRouter.route('/').get(getAllTours).post(createTour);
tourRouter.route('/:id').get(getTourById).patch(updateTour).delete(deleteTour);

module.exports = tourRouter;
