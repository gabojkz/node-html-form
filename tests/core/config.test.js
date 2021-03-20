'use strict';
const chai = require('chai');
const expect = chai.expect;
const config = require('../../src/core/config');

describe('config.js', () => {
  describe('When arg name is invalid', function() {
    it('should return null', function() {
      expect(config(null)).to.be.null;
      expect(config(false)).to.be.null;
      expect(config()).to.be.null;
    });
  });

  describe('When arg attributes is invalid', function() {
    it('should return null', function() {
      expect(config('name', null)).to.be.null;
      expect(config('name', false)).to.be.null;
      expect(config('name', 3)).to.be.null;
    })
  })
})
