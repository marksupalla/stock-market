/*jshint expr:true*/
/*global describe,it*/
'use strict';

var expect = require('chai').expect;
var Stock = require('../../app/models/stock');

describe('Stock', function(){
  describe('constructor', function(){
    it('should create a new stock object', function(){
      var aapl = new Stock('AAPL', 100);
      
      expect(aapl).to.be.instanceof(Stock);
      expect(aapl.symbol).to.equal('AAPL');
      expect(aapl.count).to.equal(100);
      expect(aapl.price).to.equal(0);
    });
  });
});
