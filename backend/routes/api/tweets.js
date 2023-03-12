var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a user 13131232resource');
  res.json({
    message: "GET /api/tweets"
  });
});

module.exports = router;
