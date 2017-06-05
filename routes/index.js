var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '7dnjf29dlf',
  database : 'instagram'
});

conn.connect();
router.get('/', function(req, res, next) {
  res.render('home', { title: 'open years round' });
  var sql="SELECT * FROM user";
  conn.query(sql,function(error,results,fields){
    if(error){
      console.log(error);
    }
    else{
      console.log('result',results);
      console.log('fields',fields);
    }
    conn.end();
  });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'sungjin' });
});
router.get('/mypage', function(req, res, next) {
  res.render('mypage', { title: 'open years round' });
});
router.get('/timeline', function(req, res, next) {
  res.render('timeline', { title: 'open years round' });
});


module.exports = router;
