const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Performer = require('../../models/Performer');

// @todo
// @route   GET api/performers
// @desc    Get all performers
// @access  Public
router.get('/', async(req, res) => {
  try {
    const performers = await Performer.find(req.performers);
    res.json(performers);
  } catch (err) {
    console.error(err.message)
  }
});

// @route GET api/performers/id
// @desc Get individual performer object by id
// @access Public

router.get('/:id', async (req, res) => {
  try {
    const performer = await Performer.findById(req.params.id)
    res.json(performer)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router;
