const moment = require('moment');
const stockModel = require('../models/stockModel');
const stockApi = require('../helpers/stockApi');


async function getStockData (ticker) {
	let stockCached = await stockModel.getStockData(ticker);

	try {
		let isStockNew = !stockCached;
		
		if (isStockNew || isStockOutdated(stockCached)) {
			let stock = await stockApi.fetchStock(ticker);
			let stockNew;
	
			let stockInsert = {
				ticker: ticker,
				currentPrice: stock.latestPrice,
				lastUpdated: moment.utc().toISOString(),
				closingPrice : stock.previousClose
			}
	
			if (isStockNew) {
				stockNew = await stockModel.saveStockData(stockInsert);
			} else {
				stockNew = await stockModel.updateStockData(stockInsert);
			}
	
			return stockNew;
		}
	
		return stockCached;
		
	} catch (error) {
		return {
			statusCode: error.statusCode,
			message: "this ticker does not exist"
		}
	}
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