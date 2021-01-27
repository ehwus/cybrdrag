const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Event = require('../../models/Event');

// @route   GET api/performers
// @desc    Get all events
// @access  Public
router.get('/', async (req, res) => {
  try {
    const events = await Event.find({});
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
