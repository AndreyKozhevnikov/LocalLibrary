var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExpressN45' });
});

router.get('/testRoute', function(req, res, next) {
  res.render('index3', { title: 'ExpressN' });
});

module.exports = router;
