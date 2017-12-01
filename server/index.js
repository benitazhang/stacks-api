// create, configure, start server
const
    express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    env = require('../config/env'),
    routes = require('./routes');


// create server
const server = express();

// allows you to parse request body to JSON
server.use(bodyParser.json());

// setup routes
routes.init(server);


// start server
function start () {
    const port = env.port;

    server.listen(port, function(){
       console.log('Express server listening on port:' + port);
    });

};


module.exports = {
    start
};


