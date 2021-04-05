const express = require('express');
const path = require('path');

const app = express();
const router = app.Router;
const PORT = 3000;

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
};

app.use(express.static(__dirname + 'public', options));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`script-snake listening on port ${PORT}`)
});

module.exports.handler = serverless(app);
