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
console.log(`listening to port`,port);

// *** GET Routes - display pages ***
//General Routes
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});
// About Route
app.get('/about', function (req, res) {
    res.render('pages/about');
});
// Search Page Route
app.get('/search', function (req, res) {
    res.render('pages/search');
});

//Category Routes
// Music Category Route
app.get('/category/music', function (req, res) {
    switch(req.query.page) {
    case '1':
        res.render('pages/category/music');
        break;
    default: res.render('pages/category/music');
    }
});
// Entertainment Category Route
app.get('/category/entertainment', function (req, res) {
    switch(req.query.page) {
    case '1':
        res.render('pages/category/entertainment');
        break;
    case '2':
        res.render('pages/category/entertainment-1');
        break;
    default: 
        res.render('pages/category/entertainment');
    }
});
// Sports Category Route
app.get('/category/sports', function (req, res) {
    switch(req.query.page) {
        case '1':
            res.render('pages/category/sports');
            break;
        default: res.render('pages/category/sports');
    }
});
// Other Category Route
app.get('/category/other', function (req, res) {
    switch(req.query.page) {
        case '1':
            res.render('pages/category/other');
            break;
        default: res.render('pages/category/other');
        }
});
//Events Routes
app.get('/events/united-v-psg', function (req, res) {
    res.render('pages/event-info/bola-info');
});
app.get('/events/connor-talkshow-live', function (req, res) {
    res.render('pages/event-info/connor-info');
});
app.get('/events/jimmy-on-tour', function (req, res) {
    res.render('pages/event-info/jimmy-info');
});
app.get('/events/markiplier-show-live', function (req, res) {
    res.render('pages/event-info/markiplier-info');
});
app.get('/events/mlbb-rrq-v-gpx', function (req, res) {
    res.render('pages/event-info/mole-info');
});
app.get('/events/nba-warriors-v-lakers', function (req, res) {
    res.render('pages/event-info/nba-info');
});
app.get('/events/radit-sucrd', function (req, res) {
    res.render('pages/event-info/radit-info');
});
app.get('/events/rick-astley-concert', function (req, res) {
    res.render('pages/event-info/rick-info');
});
app.get('/events/sao-progressive-movie', function (req, res) {
    res.render('pages/event-info/sao-info');
});
app.get('/events/valorant-twitch-rivals', function (req, res) {
    res.render('pages/event-info/valo-info');
});
app.get('/events/wwe-rock-v-cena', function (req, res) {
    res.render('pages/event-info/wwe-info');
});
app.get('/events/yoasobi-winter-music-festival', function (req, res) {
    res.render('pages/event-info/yoasobi-info');
});

//Buy Routes
//buy page Route
app.get('/buy', function (req, res) {
    res.render('pages/buy/buy-page');
});

//TODO: MOVE TO POST ROUTES
//checkout
app.get('/checkout', function (req, res) {
    res.render('pages/buy/checkout');
});
//payment
app.get('/payment', function (req, res) {
    res.render('pages/buy/payment');
});
//payment-complete
//TODO: REMOVE THIS WHEN PAYMENT PAGE WORKS
app.get('/payment-complete', function (req, res) {
    res.render('pages/buy/payment-complete');
});
