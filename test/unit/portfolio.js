/*jshint expr:true*/
/*global describe,it*/

'use strict';

var expect = require('chai').expect;
var Portfolio = require('../../app/models/portfolio');
var Stock = require('../../app/models/stock');

describe('Portfolio', function(){
  describe('constructor', function(){
    it('should create a new portfolio object', function(){
      var tech = new Portfolio('technology');
      expect(tech).to.be.instanceof(Portfolio);
      expect(tech.name).to.equal('technology');
      expect(tech.stocks).to.have.length(0);
   });
 });

  describe('#addStocks', function(){
    it('should add stocks and total the shares', function(){
      var tech = new Portfolio('technology');
      tech.addStocks('aapl', 50);
      tech.addStocks('amzn', 25);
      tech.addStocks('aapl', 30);
      
      expect(tech.stocks).to.have.length(2);
      expect(tech.stocks[0]).to.be.instanceof(Stock);
      expect(tech.stocks[0].count).to.equal(80);
      expect(tech.stocks[1].count).to.equal(25);
    });
  });

  describe('#del', function(){
    it('should delete stocks from stocks array',function(){
      var tech = new Portfolio('technology');
      tech.addStocks('aapl', 50);
      tech.addStocks('amzn', 25);
      tech.addStocks('aapl', 30);
      
      tech.del('aapl', 50);
      tech.del('amzn', 25);
      
      expect(tech.stocks).to.have.length(1);
      expect(tech.stocks[0].count).to.equal(30);
    });
  });
});
