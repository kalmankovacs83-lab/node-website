const express = require('express');
const router = express.Router();

const pages = require('./controllers/page.controller');
const features = require('./controllers/feature.controller');

router.get('/', pages.homePage); 
router.get('/szolgaltatasok', features.servicesPage);
router.get('/cikkek', features.articlesPage);
router.get('/cikkek/:id', features.readingPage);
router.get('/kapcsolat', pages.contactPage); 

module.exports = router;