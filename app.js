const express = require('express');
const bodyParser = require('body-parser');
const akkaHttp = require('akka-http-js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

akkaHttp.bindRoute(app, '/api', (route) => {
  route.get('/example', (req, res) => {
    res.json({ message: 'Hello, world!' });
  });
});

const server = app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
