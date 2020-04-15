var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
require('dotenv').config()

var api_v1 = require('./v1/api_route');

var app = express();
var http = require('http').Server(app);

//require('./db/initialize');

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/v1', api_v1);

const port = process.env.PORT || 3000;
const ip = process.env.IP || '0.0.0.0';

http.listen(port, ip, function(){
    console.log("Server started on port 3002");
});