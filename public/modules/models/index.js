const mongoose = require('mongoose');

const Paypal = require('./paypal');
const Credit = require('./credit');
const Debit = require('./debit');

const config = require('../config');

const connectionString = `${config.db}`;

mongoose.connect(connectionString);

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