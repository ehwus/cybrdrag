const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Performer = require('../../models/Performer');

// @todo
// @route   GET api/performers
// @desc    Get all performers
// @access  Public
router.get('/', (req, res) => {
  res.send('Performers route is working');
});

// @route GET api/performers/id
// @desc Get individual performer object by id
// @access Public

router.get('/id', async (req, res) => {
  try {
    const performer = await Performer.findById(req)
    res.json(performer)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router;
