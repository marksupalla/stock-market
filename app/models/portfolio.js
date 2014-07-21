'use strict';
//var request = require('request');

var Stock = require('./stock');

function Portfolio(name){
  this.name = name;
  this.stocks = [];
}

Portfolio.prototype.addStocks = function(symbol, shares){
  var index = findStock(this.stocks, symbol);

  if(index >= 0){
    this.stocks[index].count += shares;
  }else{
    var stock = new Stock(symbol, shares);
    this.stocks.push(stock);
  }
};

Portfolio.prototype.del = function(symbol, shares){
  var index = findStock(this.stocks, symbol);

  if(index >=0){
    this.stocks[index].count -= shares;
  if(this.stocks[index].count <= 0){
    this.stocks.splice(index, 1);
    }
  }
};
// PRIVATE HELPER FUNCTIONS //

function findStock(stocks, symbol){
  for(var i = 0; i < stocks.length; i++){
    if(stocks[i].symbol === symbol.toUpperCase()){
    return i;
    }
  }
  return -1;
}

module.exports = Portfolio;
