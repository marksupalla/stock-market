/*jshint expr:true*/
/*global describe,it*/

'use strict';

var expect = require('chai').expect;
var Portfolio = require('../../app/models/portfolio');

describe('Portfolio', function(){
  describe('constructor', function(){
    it('should create a new portfolio object', function(){
      var tech = new Portfolio('technology');
      expect(tech).to.be.instanceof(Portfolio);
      expect(tech.name).to.equal('technology');
      expect(tech.stocks.length).to.equal(0);

    });
  });
});
