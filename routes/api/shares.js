const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const auth = require('../../middleware/auth');

require('dotenv').config();

// @route   POST api/shares/:id/:amount/buy
// @desc    Buy shares of amount by performer ID
// @access  Private
router.post('/:id/:amount/buy', auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id);
    await user.buy({
      performer: req.params.id,
      quantity: req.params.amount,
    });
    res.status(200).send('Share purchased successfully');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/shares/:id/:amount/sell
// @desc    Sell shares of amount by performer ID
// @access  Private
router.post('/:id/:amount/sell', auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id);
    await user.sell({
      performer: req.params.id,
      quantity: req.params.amount,
    });
    res.status(200).send('Share purchased successfully');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
