var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
  // res.render('index', { title: 'ExpressN' });
// });

/* GET home page. */
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

router.get('/testRoute', function(req, res, next) {
  res.render('index3', { title: 'ExpressN' });
});
router.get('/ab+cd', function(req, res, next) {
  res.send('show route paths patterns (abcd, abbcd)')
});
router.get('/users/:userId/books/:bookId', function (req, res) {
  // Access userId via: req.params.userId
  // Access bookId via: req.params.bookId
  res.send('show router parameters'+ req.params.bookId+req.params.userId);
})
module.exports = router;
