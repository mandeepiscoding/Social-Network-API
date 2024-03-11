const { connect, connection } = require('mongoose');
require('dotenv').config();

// Define MongoDB connection string
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/thoughtsDB';

connect(connectionString, {});

module.exports = connection;