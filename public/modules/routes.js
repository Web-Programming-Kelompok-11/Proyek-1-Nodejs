const express = require('express');
const router = express.Router();
//urlencoder
router.use(express.urlencoded({ extended: true }));
//json
router.use(express.json());
const {check, validationResult} = require('express-validator');
//email
const { transporter } = require('./mailManager');

const mongoose = require('mongoose');

const eventManager = require('./eventManager');
const Credit = require('./models/credit');
const Debit = require('./models/debit');
const Paypal = require('./models/paypal');

//current date and time
const dateTime = require('node-datetime');
var dt = dateTime.create();
var formattedCurrentTime = dt.format('d/m/Y H:M:S');
console.log(`Started at `+formattedCurrentTime);

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
        //make sure there is an event with the corresponding date
        if (((req.query.eventID != null) && (req.query.sessionID != null)) && (eventManager.IDResolver(req.query.sessionID, req.query.eventID))) {
            res.render('pages/buy/checkout');
        } else {
            console.log("Error: No matching eventID or sessionID");
            res.redirect('/');
        }
    })
    .post([
        check('firstName').not().isEmpty().isLength({ min: 1 }).trim().escape(),
        check('lastName').optional().trim().escape(),
        check('email').not().isEmpty().isEmail().normalizeEmail().trim().escape(),
        check('country').not().isEmpty().isLength({ min: 2 }).trim().escape(),
        check('shippingAddress').not().isEmpty().isLength({ min: 1 }).trim().escape(),
        check('paymentMethod').not().isEmpty().trim().escape(),
        check('eventID').not().isEmpty(),
        check('sessionID').not().isEmpty(),
        check('paypalEmail').optional().isEmail().normalizeEmail().trim().escape(),
        check('debitCardName').optional().isLength({ min: 1 }).trim().escape(),
        check('debitCardNumber').optional().isCreditCard().trim().escape(),
        check('debitCardExpiration').optional().isLength({ min: 1 }).trim().escape(),
        check('debitCardCVV').optional().isLength({ min: 1 }).trim().escape(),
        check('creditCardName').optional().isLength({ min: 1 }).trim().escape(),
        check('creditCardNumber').optional().isCreditCard().trim().escape(),
        check('creditCardExpiration').optional().isLength({ min: 1 }).trim().escape(),
        check('creditCardCVV').optional().isLength({ min: 1 }).trim().escape(),
    ], function (req, res) {
        console.log(req.body); //for debugging; remove in production
        var email = req.body.email;
        var firstName = req.body.firstName;
        var eventID = req.body.eventID;
        var sessionID = req.body.sessionID;
        const errors = validationResult(req);
        if (!errors.isEmpty()) { //make sure form has no errors
            console.log(errors); //for debugging; remove in production
            res.render('pages/buy/checkout', { errors: errors.array() });
        } else { //make sure that checkout form has payment details
        if (!(req.body.paypalEmail) || !((req.body.creditCardName) && (req.body.creditCardNumber) && (req.body.creditCardExpiration) && (req.body.creditCardCVV)) || !((req.body.debitCardName) && (req.body.debitCardNumber) && (req.body.debitCardExpiration) && (req.body.debitCardCVV))) {
            //send to mongoose
            if (req.body.paypalEmail != null) {
                const paypal = new Paypal({
                    submissionTime: formattedCurrentTime,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    country: req.body.country,
                    shippingAddress: req.body.shippingAddress,
                    eventID: req.body.eventID,
                    sessionID: req.body.sessionID,
                    eventName: eventManager.eventName(req.body.eventID),
                    eventDate: eventManager.eventDate(req.body.sessionID),
                    eventPrice: eventManager.eventPrice(req.body.sessionID),
                    //payment information
                    paymentMethod: "Paypal",
                    paypalEmail: req.body.paypalEmail,
                });
                paypal.save(function (err) {
                        if (err) {
                            throw err;
                        } else {
                            console.log(formattedCurrentTime + ` - ${req.body.firstName} ${req.body.lastName} Paypal payment submitted successfully!`);
                        }
                    });
            } else if (req.body.creditCardName != null) {
                const credit = new Credit({
                    submissionTime: formattedCurrentTime,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    country: req.body.country,
                    shippingAddress: req.body.shippingAddress,
                    eventID: req.body.eventID,
                    sessionID: req.body.sessionID,
                    eventName: eventManager.eventName(req.body.eventID),
                    eventDate: eventManager.eventDate(req.body.sessionID),
                    eventPrice: eventManager.eventPrice(req.body.sessionID),
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
                            console.log(formattedCurrentTime + ` - ${req.body.firstName} ${req.body.lastName} Credit payment submitted successfully!`);
                        }
                });
            } else if (req.body.debitCardName != null) {
                const debit = new Debit({
                    submissionTime: formattedCurrentTime,
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
                    eventPrice: eventManager.eventPrice(req.body.sessionID),
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
                            console.log(formattedCurrentTime + ` - ${req.body.firstName} ${req.body.lastName} Debit payment submitted successfully!`);
                    }
                });
            }
            res.render('pages/buy/payment-complete') //payment complete
            //email
            let mailOptions = {
                from: 'showfinder.kelompok11@gmail.com',
                to: req.body.email,
                subject: 'ShowFinder - Your Ticket is Here!',
                text: 'Thanks for using ShowFinder! Here is your ticket for the event you have booked. Enjoy the show!',
                html: `<b>Hello ${firstName}! </b><br> <img src="cid:poster" alt="poster image"> Thank you for purchasing tickets for ${eventManager.eventName(eventID)}!<br /><img src="cid:ticket" alt="ticket image">`,
                attachments: [
                  {
                    filename: 'ticket.png',
                    path: './public/img/' + eventManager.ticketImage(sessionID),
                    cid: 'ticket'
                  },
                  {
                    filename: 'poster.png',
                    path: './public/img/' + eventManager.eventImage(eventID),
                    cid: 'poster'
                  }
                ]
            };
            //send it
            transporter.sendMail(mailOptions, function(err, data) {
                if (err) {
                  console.log("Error " + err);
                } else {
                  console.log(`${firstName} - email sent successfully`);
                }
            });
        } else {
            console.log("Error: No payment details");
            res.redirect('back'); //redirect back to checkout page
        }}
    });

module.exports = router;