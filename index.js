'use strict';

const Express = require('express');
var cors = require('cors')
const router = require('./lib');

const app = Express();
const port = process.env.PORT || 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/cors/api/', router);

app.get('/', function(req, res){
  res.redirect('/cors/api');
});

app.use(cors())
  app.listen(port, function () {
    console.log('Server started on port', port);
});

