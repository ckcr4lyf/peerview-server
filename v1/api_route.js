const express = require('express');
const router = express.Router();
const rateLimit = require("express-rate-limit");

const getLimit = rateLimit({
    windowMs: 60 * 1000, //1 minute
    max: 5,
    message: "Request files at a slower rate please."
});

const get_ips = require('./controllers/get_ips');

router.get('/:hash', getLimit, get_ips);

module.exports = router;