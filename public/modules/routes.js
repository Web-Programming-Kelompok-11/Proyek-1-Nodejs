const express = require('express');
const router = express.Router();
//urlencoder
router.use(express.urlencoded({ extended: true }));
//json
router.use(express.json());

const mongoose = require('mongoose');

const eventManager = require('./eventManager');
const Credit = require('./models/credit');
const Debit = require('./models/debit');
const Paypal = require('./models/paypal');

// *** GET Routes - display pages ***
//General Routes
// Root Route
router.get('/', function (req, res) {
    res.render('pages/index');
});
// About Route
router.get('/about', function (req, res) {
    res.render('pages/about');
});
// Search Page Route
router.get('/search', function (req, res) {
    res.render('pages/search');
});

//Category Routes
// Music Category Route
router.get('/category/music', function (req, res) {
    switch(req.query.page) {
    case '1':
        res.render('pages/category/music');
        break;
    default: res.render('pages/category/music');
    }
});
// Entertainment Category Route
router.get('/category/entertainment', function (req, res) {
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
router.get('/category/sports', function (req, res) {
    switch(req.query.page) {
        case '1':
            res.render('pages/category/sports');
            break;
        default: res.render('pages/category/sports');
    }
});
// Other Category Route
router.get('/category/other', function (req, res) {
    switch(req.query.page) {
        case '1':
            res.render('pages/category/other');
            break;
        default: res.render('pages/category/other');
        }
});
//Events Routes
router.get('/events/united-v-psg', function (req, res) {
    res.render('pages/event-info/bola-info');
});
router.get('/events/connor-talkshow-live', function (req, res) {
    res.render('pages/event-info/connor-info');
});
router.get('/events/jimmy-on-tour', function (req, res) {
    res.render('pages/event-info/jimmy-info');
});
router.get('/events/markiplier-show-live', function (req, res) {
    res.render('pages/event-info/markiplier-info');
});
router.get('/events/mlbb-rrq-v-gpx', function (req, res) {
    res.render('pages/event-info/mole-info');
});
router.get('/events/nba-warriors-v-lakers', function (req, res) {
    res.render('pages/event-info/nba-info');
});
router.get('/events/radit-sucrd', function (req, res) {
    res.render('pages/event-info/radit-info');
});
router.get('/events/rick-astley-concert', function (req, res) {
    res.render('pages/event-info/rick-info');
});
router.get('/events/sao-progressive-movie', function (req, res) {
    res.render('pages/event-info/sao-info');
});
router.get('/events/valorant-twitch-rivals', function (req, res) {
    res.render('pages/event-info/valo-info');
});
router.get('/events/wwe-rock-v-cena', function (req, res) {
    res.render('pages/event-info/wwe-info');
});
router.get('/events/yoasobi-winter-music-festival', function (req, res) {
    res.render('pages/event-info/yoasobi-info');
});

//Buy Routes
//buy page Route
router.get('/buy', function (req, res) {
    res.render('pages/buy/buy-page');
});

//checkout page Route
router
    .route('/checkout')
    .get(function (req, res) {
        if ((req.query.eventID != null) && (req.query.sessionID != null)) {
            res.render('pages/buy/checkout');
        } else {
            console.log("Error: No eventID or sessionID");
            res.redirect('/');
        }
    })
    .post(function (req, res) {
        console.log(req.body);
        //make sure that checkout form has payment details
        if (!(req.body.paypalEmail) || !(req.body.creditCardName) || !(req.body.debitCardName)) {
                        //send to mongoose
            if (req.body.paypalEmail != null) {
                const paypal = new Paypal({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    country: req.body.country,
                    shippingAddress: req.body.shippingAddress,
                    eventID: req.body.eventID,
                    sessionID: req.body.sessionID,
                    eventName: eventManager.eventName(req.body.eventID),
                    eventDate: eventManager.eventDate(req.body.sessionID),
                    //payment information
                    paymentMethod: "Paypal",
                    paypalEmail: req.body.paypalEmail,
                });
                paypal.save(function (err) {
                        if (err) {
                            throw err;
                        } else {
                            console.log('Paypal saved successfully!');
                        }
                    });
            } else if (req.body.creditCardName != null) {
                const credit = new Credit({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    country: req.body.country,
                    shippingAddress: req.body.shippingAddress,
                    eventID: req.body.eventID,
                    sessionID: req.body.sessionID,
                    eventName: eventManager.eventName(req.body.eventID),
                    eventDate: eventManager.eventDate(req.body.sessionID),
                    //payment information
                    paymentMethod: "Credit Card",
                    creditCardName: req.body.creditCardName,
                    creditCardNumber: req.body.creditCardNumber,
                    creditCardExpiration: req.body.creditCardExpiration,
                    creditCardCVV: req.body.creditCardCVV,
                });
                credit.save(function (err) {
                        if (err) {
                            throw err;
                        } else {
                            console.log('Credit saved successfully!');
                        }
                });
            } else if (req.body.debitCardName != null) {
                const debit = new Debit({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    country: req.body.country,
                    shippingAddress: req.body.shippingAddress,
                    paymentMethod: req.body.paymentMethod,
                    eventID: req.body.eventID,
                    sessionID: req.body.sessionID,
                    eventName: eventManager.eventName(req.body.eventID),
                    eventDate: eventManager.eventDate(req.body.sessionID),
                    //payment information
                    paymentMethod: "Debit Card",
                    debitCardName: req.body.debitCardName,
                    debitCardNumber: req.body.debitCardNumber,
                    debitCardExpiration: req.body.debitCardExpiration,
                    debitCardCVV: req.body.debitCardCVV,
                });
                debit.save(function (err) {
                        if (err) {
                            throw err;
                        } else {
                            console.log('Debit saved successfully!');
                    }
                });
            }
            res.render('pages/buy/payment-complete') //payment complete
        } else {
            console.log("Error: No payment details");
            res.redirect('back'); //redirect back to checkout page
        }
    });

module.exports = router;