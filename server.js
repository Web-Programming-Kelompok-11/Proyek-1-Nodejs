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
// Port website will run on
app.listen(port);

// *** GET Routes - display pages ***
//General Routes
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
***REMOVED***
// About Route
app.get('/about', function (req, res) {
    res.render('pages/about');
***REMOVED***
// Search Page Route
app.get('/search', function (req, res) {
    res.render('pages/search');
***REMOVED***

//Category Routes
// Music Category Route
app.get('/category/music', function (req, res) {
    res.render('pages/category/music');
***REMOVED***
// Entertainment Category p.1 Route
app.get('/category/entertainment', function (req, res) {
    res.render('pages/category/entertainment');
***REMOVED***
// Entertainment Category p.2 Route
app.get('/category/entertainment-1', function (req, res) {
    res.render('pages/category/entertainment-1');
***REMOVED***
// Sports Category Route
app.get('/category/sports', function (req, res) {
    res.render('pages/category/sports');
***REMOVED***
// Other Category Route
app.get('/category/other', function (req, res) {
    res.render('pages/category/other');
***REMOVED***
//Events Routes
app.get('/events/united-v-psg', function (req, res) {
    res.render('pages/event-info/bola-info');
***REMOVED***
app.get('/events/connor-talkshow-live', function (req, res) {
    res.render('pages/event-info/connor-info');
***REMOVED***
app.get('/events/jimmy-on-tour', function (req, res) {
    res.render('pages/event-info/jimmy-info');
***REMOVED***
app.get('/events/markiplier-show-live', function (req, res) {
    res.render('pages/event-info/markiplier-info');
***REMOVED***
app.get('/events/mlbb-rrq-v-gpx', function (req, res) {
    res.render('pages/event-info/mole-info');
***REMOVED***
app.get('/events/nba-warriors-v-lakers', function (req, res) {
    res.render('pages/event-info/nba-info');
***REMOVED***
app.get('/events/radit-sucrd', function (req, res) {
    res.render('pages/event-info/radit-info');
***REMOVED***
app.get('/events/rick-astley-concert', function (req, res) {
    res.render('pages/event-info/rick-info');
***REMOVED***
app.get('/events/sao-progressive-movie', function (req, res) {
    res.render('pages/event-info/sao-info');
***REMOVED***
app.get('/events/valorant-twitch-rivals', function (req, res) {
    res.render('pages/event-info/valo-info');
***REMOVED***
app.get('/events/wwe-rock-v-cena', function (req, res) {
    res.render('pages/event-info/wwe-info');
***REMOVED***
app.get('/events/yoasobi-winter-music-festival', function (req, res) {
    res.render('pages/event-info/yoasobi-info');
***REMOVED***

//Buy Routes
//buy page Route
app.get('/buy', function (req, res) {
    res.render('pages/buy/buy-page');
***REMOVED***

//TODO: MOVE TO POST ROUTES
//checkout
app.get('/checkout', function (req, res) {
    res.render('pages/buy/checkout');
***REMOVED***
//payment
app.get('/payment', function (req, res) {
    res.render('pages/buy/payment');
***REMOVED***
//payment-complete
//TODO: REMOVE THIS WHEN PAYMENT PAGE WORKS
app.get('/payment-complete', function (req, res) {
    res.render('pages/buy/payment-complete');
***REMOVED***
