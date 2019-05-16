const express = require('express');

const router = express.Router();

// @route     GET api/data
// @desc      Index
// @access    Public
router.get('/', (req, res) => {
  res.send('Data Route');
});

module.exports = router;
