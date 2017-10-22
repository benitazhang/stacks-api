// open db connection
const 
    pgPromise = require('pg-promise')(),
    env = require('./env');


const db = pgPromise(env.dbURL);


module.exports = db;


