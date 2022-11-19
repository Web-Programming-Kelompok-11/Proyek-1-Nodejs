const mongoose = require('mongoose');

const debitSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    country: String,
    shippingAddress: String,
    paymentMethod: String,
    eventID: Number,
    sessionID: Number,
    eventName: String,
    eventDate: String,
    //payment information
    debitCardName: String,
    debitCardNumber: String,
    debitCardExpiration: String,
    debitCardCVV: String,
});

module.exports = mongoose.model('Debit', debitSchema);
