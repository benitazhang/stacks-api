const
    path = require('path'),
    loginRoute = require('./loginRoute'),
    stockRoute = require('./stockRoute');


function init(server) {

    // main route - serves app
    server.get('/', function (req, res) { 
        res.sendFile(path.join(__dirname,'../../build/index.html'));
    });

    // REGISTER ROUTES - include all server routes below
    server.use('/login', loginRoute);
    server.use('/stock', stockRoute);
}


module.exports = {
    init
};