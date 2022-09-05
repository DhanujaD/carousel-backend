const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const carouselRoute = require('./src/routes/carousel');

const port = process.env.PORT || 3600;
const apiPath = '/api';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(`${apiPath}/carousel`, carouselRoute);

app.listen(port, () => {
  console.log(`Carousel API is running on port ${port}.`);
});
