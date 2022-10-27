var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var x;

  var rand = Math.random();
  console.log(req.query.x);
  var x = req.query.x;

  if(x == undefined){
    x = rand.toFixed(2);
  }

  let imul = Math.imul(x).toFixed(2);
  let log = Math.log(x).toFixed(2);
  let log10 = Math.log10(x).toFixed(2);


  res.render('computation', { 
                title: 'computation',
                c1: 'applied to '+x+ 'is '+imul,
                c2: 'applied to '+x+ 'is '+log,
                c3: 'applied to '+x+ 'is '+log10
            });
});

module.exports = router;
