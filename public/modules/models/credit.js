const mongoose = require('mongoose');

const creditSchema = new mongoose.Schema({
    submissionTime: String,
    firstName: String,
    lastName: String,
    email: String,
    country: String,
    shippingAddress: String,
    eventID: Number,
    sessionID: Number,
    eventName: String,
    eventDate: String,
    //payment information
    paymentMethod: String,
    creditCardName: String,
    creditCardNumber: String,
    creditCardExpiration: String,
    creditCardCVV: String,
});

module.exports = mongoose.model('Credit', creditSchema);
