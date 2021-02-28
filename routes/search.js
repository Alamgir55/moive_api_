var express = require('express');
var router = express.Router();

const movies = require('../data/movies');
const peoples = require('../data/people');

function queryRequired(req, res, next){
  const searchTerm = req.query.query;
  if(!searchTerm){
    res.json({msg: "Query is required"});
  }else{
    next();
  }
}

router.use(queryRequired);

/* GET search page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET /search/movie. */
router.get('/movie', function(req, res, next) {
  const searchTerm = req.query.query;  
  const results = movies.filter((movie) => {
    let found = movie.overview.includes(searchTerm) || movie.title.includes(searchTerm)
    return found;
  })
  res.json({results});
});

/* GET /search/person. */
router.get('/person', function(req, res, next) {
  const searchTerm = req.query.query;  
  const results = peoples.filter((people) => {
    let found = people.name.includes(searchTerm)
    return found;
  })
  res.json({results});
});

module.exports = router;
