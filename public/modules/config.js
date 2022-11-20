process.env.NODE_ENV = (process.env.NODE_ENV || 'development').toLowerCase(); // if not production server, then is development server

const dotenv = require('dotenv');

const envFound = dotenv.config({ path: './public/config/.env' }); // load .env file
if (envFound.error) {
  throw new Error('Could not find .env file');
}

module.exports = {
  port: process.env.PORT || 8080,
  db: process.env.MONGODB_URI,
};
