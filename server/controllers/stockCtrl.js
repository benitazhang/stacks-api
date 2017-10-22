const 
	moment = require('moment'),
	stockModel = require('../models/stockModel'),
	stockApi = require('../helpers/stockApi');


async function getStockData (ticker) {
	let stock = await stockModel.getStockData(ticker),
		isStockNew = !stock;

	if (isStockNew || isStockOutdated(stock)) {
		let newStock = await stockApi.fetchStock(ticker);

		stock = {
			ticker: ticker,
			currentPrice: newStock.latestPrice,
			lastUpdated: moment.utc().toISOString(),
			closingPrice : newStock.previousClose
		}

		if (isStockNew) {
			stockModel.saveStockData(stock);
		} else {
			stockModel.updateStockData(stock);
		}
	}

	return stock;
}

function isStockOutdated(stock){
	const timeLastUpdated = (moment.utc() - moment.utc(stock.last_updated))/60000
	
    if (timeLastUpdated > 10) {
		return true; 
	}

	return false;
}


module.exports = {
	getStockData
}