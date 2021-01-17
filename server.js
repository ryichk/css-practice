const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/first-steps', function(req, res) {
  res.sendFile(path.join(__dirname, 'first-steps.html'));
});

app.get('/building-blocks', function(req, res) {
  res.sendFile(path.join(__dirname, 'building-blocks.html'));
});

app.get('/layout', function(req, res) {
  res.sendFile(path.join(__dirname, 'layout.html'));
});

app.listen(3000, function() {
  console.log('Web site listening on port 3000');
});
