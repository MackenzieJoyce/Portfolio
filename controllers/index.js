const router = require('express').Router();
const emailRoutes = require('./emailRoutes');

router.use('/contact', emailRoutes);

module.exports = router;
