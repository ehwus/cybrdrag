const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Performer = require('../../models/Performer');

// @todo
// @route   GET api/performers
// @desc    Get all performers
// @access  Public
router.get('/', async (req, res) => {
  try {
    const performers = await Performer.find(req.performers).sort({ worth: -1 });
    res.json(performers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/performers/top
// @desc    Get all performers sorted by worth - Not in use for now
// @access  Public

router.get('/top', async (req, res) => {
  try {
    const performers = await Performer.find({}).sort({ worth: -1 });
    res.json(performers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route GET api/performers/id
// @desc Get individual performer object by id
// @access Public

router.get('/:id', async (req, res) => {
  try {
    const performer = await Performer.findById(req.params.id);
    res.json(performer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route GET api/performers/history/id
// @desc Get individual performer history by id
// @access Public
router.get('/history/:id', async (req, res) => {
  try {
    const history = await PerformanceHistory.find({ performer: req.params.id });
    res.json(history);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
