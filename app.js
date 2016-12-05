const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
Genre = require('./models/genre.js');
//* route to Home page
app.get('/', function(req, res) {
  res.send('Please use /api/books or /api/genres');
});

app.get('/api/genres', function(req, res) {
  Genre.getGenres(function(err, genres) {
    if (err) {
      throw err;
    }
    res.json(genres);
  });
});

app.listen(3000);
console.log('Running on port 3000...');