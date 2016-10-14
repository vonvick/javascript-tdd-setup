/** The sum of prime numbers of a given number
 *  it checks the given input and returns "false"
 *  if the given input is decimal, a string, an Array
 *  or negative.
 * 
 *  It sums the resulting array of prime numbers and
 *  gives the result.
 **/

'use strict'

module.exports = {
  sumOfPrimes: function(num) {
    if(num < 2) {
      return false;
    } else if(typeof num == 'string') {
      return false; 
    } else if(num % 1 !== 0){
      return false;
    }else if (Array.isArray(num)){
      return false;
    } else {
      var list = [];
      for(let j = 2; j <= num; j++) {
        if(this.isPrime(j)) {
          list.push(j);
        }
      }
    }
	let total = list.reduce(this.arraySum)
	return total;
  },

  arraySum: function (x, y) {
    return x + y;
  },

  isPrime: function(n) {
    if (n < 2) return false;
    var q = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= q; i++) {
      if (n % i === 0) {
          return false;
      }
    }
    return true;
  }
}


