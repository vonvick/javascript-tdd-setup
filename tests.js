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
  it("should return 5 for number is equal to 10", function() {
    assert(lib.sumOfPrimes(5) == 10);
  });
  it("should return false when a string is supplied", function() {
    assert(lib.sumOfPrimes('I am a boy') == false);
  });
  it("should return false when a string is supplied", function() {
    assert(lib.sumOfPrimes('I am a boy') == false);
  });
  it("should return false when a decimal number is supplied", function() {
    assert(lib.sumOfPrimes(5.2) == false);
  });
  it("should return false when a negative number is supplied", function() {
    assert(lib.sumOfPrimes(-20) == false);
  });
  it("should return false when an empty string is supplied", function() {
    assert(lib.sumOfPrimes("") == false);
  });
  it("should return an array if an array is supplied", function() {
    var arrayInput = [1,2,3,4,5];
    assert.isArray(lib.sumOfPrimes(arrayInput));
  });
});

describe("Test that checks if a number is prime or not", function() {
  it("should return true for numbers that are prime numbers",  function() {
    assert(lib.isPrime(5) == true);
  });
  it("should return false for numbers that are not prime numbers",  function() {
    assert(lib.isPrime(15) == false);
  });
  it("should return false for numbers less than 2",  function() {
    assert(lib.isPrime(1) == false);
  });
  it("should return false for even numbers greater than 2",  function() {
    assert(lib.isPrime(16) == false);
  });
  it("should return true for 2",  function() {
    assert(lib.isPrime(2) == true);
  });
});