'use strict'

var chai = require('chai');
var assert = chai.assert;

var lib = require('./lib/sum_of_primes.js');

describe("Test that returns the sum of prime numbers from 0 to the number", function() {
  it("should return false for numbers less than 2", function() {
    assert(lib.sumOfPrimes(1) == false);
  });
  it("should return 2 if number is equal to 2", function() {
    assert(lib.sumOfPrimes(2) == 2);
  });
});