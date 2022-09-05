const { carouselData } = require('../database/carousel');

const getCarouselData = (noOfSlides) => {
  const fetchedCarouselData = carouselData.slice(0, noOfSlides);
  return fetchedCarouselData;
};

const carouselService = { getCarouselData };
module.exports = carouselService;
