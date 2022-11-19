const mongoose = require('mongoose');

const Paypal = require('./paypal');
const Credit = require('./credit');
const Debit = require('./debit');

const connectionString = require('./connectionString');

mongoose.connect(connectionString.conStr);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = {
  db,
  Paypal,
  Credit,
  Debit,
};