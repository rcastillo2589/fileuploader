var express = require('express');
var url = require('url');
var Pool = require('pg').Pool;

var params = url.parse(process.env.DATABASE_URL);
var auth = params.auth.split(':');

var config = {
  user: auth[0],
  password: auth[1],
  host: params.hostname,
  port: params.port,
  database: params.pathname.split('/')[1],
  ssl: true
};

var pool = new Pool(config);

var app = express();
app.set('port', (process.env.PORT || 5000));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.get('/', function(req, res) {
	var page = "<h1>Test</h1>";
	res.send(page)
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});