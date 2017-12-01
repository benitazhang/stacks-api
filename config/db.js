// open db connection
const pgPromise = require('pg-promise')();
const env = require('./env');


const db = pgPromise(env.dbURL);

module.exports = db;


