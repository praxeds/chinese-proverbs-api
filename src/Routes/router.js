const router = require('express').Router();

const servicesRouter = require('./services');

router.use('/', servicesRouter);

module.exports = router;