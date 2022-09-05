const carouselService = require('../services/carousel');

const getCarouselData = (noOfSlides) => {
  const carouselData = carouselService.getCarouselData(noOfSlides);
  return carouselData;
};

module.exports = { getCarouselData };
