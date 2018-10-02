var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  title: 'Express',
  animales:  ['perro', 'gato', 'agapornis', 'saltamontes'],
  // animales: []
 });
});

module.exports = router;
