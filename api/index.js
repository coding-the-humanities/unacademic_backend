const express = require('express');
const session = require('express-session');
const bearerToken = require('express-bearer-token');
const routeBuilder = require('express-routebuilder');
const cors = require('cors');
const bodyParser = require('body-parser');
const hostname = require('os').hostname();
const isProductionHost = ['cth', 'cth-staging'].indexOf(hostname) !== -1;

var app = express();
var namespace = "/api/0/";

// Parse JSON bodies; limit 5mb
app.use(bodyParser.json({ limit: 5000000 }));
app.use(bodyParser.urlencoded({ limit: 5000000 }));

app.use(cors());
app.use(session({
  secret: 'piep piep piep',
  resave: true,
  saveUninitialized: true
}));

if (isProductionHost) {
  app.use(bearerToken());
  app.use(require('./middleware/get-user'));
} else {
  console.log('Not on a production host, disabling security...');
  // in development, no auth is required and you are an admin.
  // this will eventually change--when admin status actually
  // confers something that needs to be tested.
  app.use(function (req, res, next) {
    req.account = { isAdmin: function () { return true; } };
    next();
  });
}

var modules = ["paths", "path-places"];

modules.forEach(function (module){
  var routes = require('./modules/' + module + '/routes');
  var subapp = routeBuilder(express, routes);
  app.use(namespace + module, subapp);
});

module.exports = app;
