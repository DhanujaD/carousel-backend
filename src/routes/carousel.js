const express = require('express');
const { getCarouselData } = require('../controllers/carousel');

const carouselRoute = express.Router();

const serverErrorMessage = 'Internal server error';

carouselRoute.get('/', async (req, res) => {
  const noOfSlides = req.query.slides;
  try {
    const carouselData = getCarouselData(Number(noOfSlides));
    res.status(200).json({
      isSuccess: true,
      message: 'Request successful',
      slides: carouselData,
    });
  } catch (error) {
    console.error('Error in route: /carousel', error);
    res.status(500).json({ isSuccess: false, message: serverErrorMessage });
  }
});

module.exports = carouselRoute;
