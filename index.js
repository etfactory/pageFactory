const express = require('express');
const app = express();

// 정적 파일 제공 (public 폴더, assets, fonts 등)
app.use(express.static(__dirname)); // 또는 app.use(express.static('public'));

app.listen(8080, function() {
  console.log('Server is running on port 8080');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/portfolio', function(req, res) {
  res.sendFile(__dirname + '/portfolio.html');
});

app.get('/profile', function(req, res) {
  res.sendFile(__dirname + '/profile.html');
});