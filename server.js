var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();

mongoose = require('mongoose');

var port = parseInt(process.env.PORT) || 3000;

var dbURI = 'mongodb://edodb:omega2020@ds013564.mlab.com:13564/heroku_qwz21fc2';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

app.use(express.static(__dirname + '/data'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


require('middleware/routes.js')(app, fs);
require('middleware/mongooseModels.js')(app, mongoose);

firstCollection = mongoose.model('music_info', firstModel.music_info);

app.listen(port);
