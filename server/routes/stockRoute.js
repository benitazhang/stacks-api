const express = require('express');
const stockCtrl = require('../controllers/stockCtrl');
    

const router = express.Router();

// kicks us to facebook to authenticate
router.get('/', async (req, res) => {
    const ticker = req.query.ticker;
    const stockData = await stockCtrl.getStockData(ticker);

    res.send(stockData);
});

module.exports = router;