const request = require('request-promise');


function fetchStock(ticker) {
    var config = {
        uri: `https://api.iextrading.com/1.0/stock/${ticker}/quote`,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true 
    };

    return request(config);

}

module.exports = {
    fetchStock
}