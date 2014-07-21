'use strict';
//var request = require('request');

var Stock = require('../../app/models/stock');

function Portfolio(name){
  this.name = name;
  this.stocks = [];
}

Portfolio.prototype.addStocks = function(symbol, shares){
  var stock = findStock(this.stocks, symbol);

  if(stock){
    stock.count += shares;
  }else{
    stock = new Stock(symbol, shares);
    this.stocks.push(stock);
  }
};

// PRIVATE HELPER FUNCTIONS //

function findStock(stocks, symbol){
  for(var i = 0; i < stocks.length; i++){
    if(stocks[i].symbol === symbol.toUpperCase()){
    return stocks[i];
    }
  }
  return null;
}

module.exports = Portfolio;
