var express = require('express');
var router = express.Router();

const movieDetails = require('../data/movieDetails');


/* GET movie page. */

// GET /movie/movieId
router.get('/:movieId', (req, res, next) => {
  const movieId = req.params.movieId;
  const results = movieDetails.find((movie) => {
    return movie.id == movieId
  })

  if(!results){
    res.json({
      msg: "Movie ID is not found",
      production_companies: []
    });
  }else{
    res.json(results);
  }
});

// GET /movie/top_rate

// POST /movie/{movie_id}/rating
// DELETE /movie/{movie_id}/rating




module.exports = router;
