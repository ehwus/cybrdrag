const express = require('express');
const router = express.Router();

// @route   GET api/performers
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('Performers route is working'));

module.exports = router;
