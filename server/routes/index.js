const path = require('path');
const stockRoute = require('./stockRoute');


function init(server) {
    // REGISTER ROUTES - include all server routes below
    server.use('/stock', stockRoute);
}

module.exports = {
    init
};