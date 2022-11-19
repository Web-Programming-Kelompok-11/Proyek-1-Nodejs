// Load Node modules
var express = require('express');
const ejs = require('ejs');
//website port
const port = 8080; // || other port
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs
app.set('view engine', 'ejs');
//url encoded
app.use(express.urlencoded({ extended: true }));
//json
app.use(express.json());
// Port website will run on
app.listen(port);
console.log(`listening to port`,port);
//routes
const routes = require('./public/modules/routes');
app.use('/', routes);