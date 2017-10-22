// create, configure, start server
const
    express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    env = require('../config/env'),
    passport = require('../config/passport'),
    routes = require('./routes');


// create server
const server = express();

// allows you to parse request body to JSON
server.use(bodyParser.json());

// serve static files
server.use(express.static(path.join(__dirname, '../build')));

// something related to fb auth...
server.use(passport.initialize());

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


