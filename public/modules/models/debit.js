const mongoose = require('mongoose');

const debitSchema = new mongoose.Schema({
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
    debitCardName: String,
    debitCardNumber: String,
    debitCardExpiration: String,
    debitCardCVV: String,
});

module.exports = mongoose.model('Debit', debitSchema);
