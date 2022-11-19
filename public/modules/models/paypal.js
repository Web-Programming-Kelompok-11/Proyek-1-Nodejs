const mongoose = require('mongoose');

const paypalSchema = new mongoose.Schema({
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
    paypalEmail: String,
});

module.exports = mongoose.model('Paypal', paypalSchema);
