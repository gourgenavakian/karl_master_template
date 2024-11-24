const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({title: 'Hello World'});
});

module.exports = router;
