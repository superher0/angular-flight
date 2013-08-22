
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var proxy = require('http-proxy');

var app = express();

var apiHost = 'pre.dev.goeuro.de';
var apiPort = 12345;

var routingProxy = new proxy.RoutingProxy();
 
function apiProxy(pattern, host, port) {
    return function(req, res, next) {
	if (req.url.match(pattern)) {
	    routingProxy.proxyRequest(req, res, { host: host, port: port });
	} else {
	    next();
	}
    }
}

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.errorHandler());
app.use(apiProxy(new RegExp('/api/v1/.*'), apiHost, apiPort));

app.get('/', function (req, res) {
    res.redirect('/index.html');
});

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
