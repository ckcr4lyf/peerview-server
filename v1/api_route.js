const express = require('express');
const router = express.Router();

const get_ips = require('./controllers/get_ips');

router.get('/:hash', get_ips);

module.exports = router;