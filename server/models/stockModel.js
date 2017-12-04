const db = require('../../config/db');


// add account row
async function getStockData(ticker) {
    try {
        let result = await db.one('SELECT * FROM stock_price WHERE "ticker" = $1', ticker);
        return result[0];
    } catch (err) {
        console.log(`${ticker} not in database`);
        return null;
    }
}

async function saveStockData(stock) {
    try {
        let result = await db.query('INSERT INTO stock_price(ticker, closing_price, current_price, last_updated) VALUES(${ticker}, ${closingPrice}, ${currentPrice}, ${lastUpdated}) RETURNING *', stock);
        return result[0];
    } catch (err) {
        console.log('saveStockData error:', err)
    }
}

async function updateStockData(stock) {
    try {
        let result = await db.query('UPDATE stock_price SET closing_price=${closingPrice}, current_price=${currentPrice}, last_updated=${lastUpdated} WHERE ticker=${ticker} RETURNING *', stock);
        return result[0];
    } catch(err) {
        console.log('updateStockData error:', err);
    }
}

module.exports = {
    getStockData,
    saveStockData,
    updateStockData
}


