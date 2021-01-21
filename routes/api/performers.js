const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// @todo
// @route   GET api/performers
// @desc    Get all performers
// @access  Public
router.get('/', (req, res) => {
  res.send('Performers route is working');
});

module.exports = router;
